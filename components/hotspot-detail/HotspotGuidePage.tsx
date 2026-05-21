import { fetchPostBySlug, fetchPostsByCityTag, type WPPost } from '@/lib/wp-api';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSiteUrl, normalizeWpMediaUrl } from '@/lib/site-config';
import { getSeoulRouteOptionBySlug } from '@/data/seoulRoutes';
import { getHotspotHeroImage } from '@/data/hotspotImageMap';
import { isWpPostCityMatch } from '@/lib/wp-route-context';

const siteUrl = getSiteUrl();

type HotspotParams = {
  city: string;
  hotspot: string;
};

type HotspotPost = {
  id?: number;
  slug?: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  date?: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
};

const HTML_ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#8217;': "'",
  '&#8216;': "'",
  '&#8220;': '"',
  '&#8221;': '"',
  '&nbsp;': ' ',
};

function decodeHtmlEntities(value: string): string {
  return value.replace(/&[a-z#0-9]+;/gi, (entity) => HTML_ENTITY_MAP[entity] ?? ' ');
}

function stripHtml(value: string): string {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanContent(html: string): string {
  let cleaned = html.replace(
    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{200D}\u{FE0F}]/gu,
    ''
  );
  cleaned = cleaned.replace(/https?:\/\/[^/]+\/wp-content\/[^"' )]+/g, (match) =>
    normalizeWpMediaUrl(match)
  );
  return cleaned;
}

function getHeroImage(post: HotspotPost, citySlug: string, hotspotSlug: string): string | null {
  // First try: Local hotspot image mapping
  const localImage = getHotspotHeroImage(citySlug, hotspotSlug);
  if (localImage) return localImage;

  // Second try: WordPress featured media
  const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featured) return featured;

  // Third try: Content hero image
  const html = post.content?.rendered || '';
  const heroMatch = html.match(/class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"/i);
  if (heroMatch) return heroMatch[1];

  // Fourth try: First image in content
  const firstMatch = html.match(/<img[^>]+src="([^">]+)"/i);
  return firstMatch ? firstMatch[1] : null;
}

function formatCityLabel(citySlug: string): string {
  return citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildExcerpt(post: HotspotPost): string {
  const rawExcerpt = stripHtml(post.excerpt?.rendered || '');
  if (rawExcerpt) return rawExcerpt.slice(0, 180);

  const rawContent = post.content?.rendered || '';
  const afterHero = rawContent.replace(
    /[\s\S]*?class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<\/figure>/i,
    ''
  );
  const paragraphMatch = afterHero.match(/<p[^>]*>(.*?)<\/p>/i);

  return paragraphMatch ? stripHtml(paragraphMatch[1]).slice(0, 180) : '';
}

function slugifyHeading(value: string): string {
  return stripHtml(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildGuideBullets(post: HotspotPost, cityLabel: string): string[] {
  const excerpt = buildExcerpt(post);
  const intro = excerpt
    ? excerpt
    : `${cityLabel} travelers use this guide to decide if the stop is worth route space.`;

  return [
    intro,
    `Best used as a focused stop inside a broader ${cityLabel} route, not as a generic checklist item.`,
    'Use the sections below to decide what matters most before you commit time on the ground.',
  ];
}

function buildContentGuide(html: string) {
  const headings: Array<{ id: string; label: string }> = [];
  const seenIds = new Set<string>();

  const content = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_match, attrs, inner) => {
    const label = stripHtml(inner);
    if (!label) return _match;

    let id = slugifyHeading(label) || `section-${headings.length + 1}`;
    while (seenIds.has(id)) {
      id = `${id}-${headings.length + 1}`;
    }

    seenIds.add(id);
    headings.push({ id, label });

    if (/id=/i.test(attrs)) {
      return `<h2${attrs}>${inner}</h2>`;
    }
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });

  return { content, headings };
}

function estimateReadingMinutes(html: string): number {
  const text = stripHtml(html);
  const wordCount = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(wordCount / 180));
}

function inferBestTime(content: string, title: string): string {
  const haystack = `${content} ${title}`.toLowerCase();
  if (/(night|neon|sunset|evening|bar|cocktail)/.test(haystack)) return 'Late afternoon into evening';
  if (/(market|breakfast|bakery|cafe|brunch|coffee)/.test(haystack)) return 'Morning to early afternoon';
  if (/(museum|palace|temple|park|trail|beach|observatory)/.test(haystack)) return 'Daylight hours';
  return 'Best when it fits a slower city walk';
}

function inferStayTime(content: string): string {
  const haystack = content.toLowerCase();
  if (/(museum|palace|village|trail|park|market)/.test(haystack)) return 'Plan for 60 to 120 minutes';
  if (/(cafe|bakery|photo spot|viewpoint|tower|street)/.test(haystack)) return 'Usually works in 30 to 60 minutes';
  return 'Treat it as a flexible 45 to 90 minute stop';
}

function inferTripFit(content: string, cityLabel: string): string {
  const haystack = content.toLowerCase();
  if (/(night|bar|music|cocktail|late)/.test(haystack)) {
    return `Best as an evening anchor inside a broader ${cityLabel} day.`;
  }
  if (/(cafe|street|shopping|design|gallery)/.test(haystack)) {
    return `Best as a walkable neighborhood stop when you want local texture over checklist sightseeing.`;
  }
  if (/(palace|temple|history|museum|culture)/.test(haystack)) {
    return `Best as a core cultural stop that helps explain why ${cityLabel} matters.`;
  }
  return `Best used as one of the stronger supporting stops inside a fuller ${cityLabel} route.`;
}

function inferGoodFor(content: string): string {
  const haystack = content.toLowerCase();
  if (/(couple|romantic|sunset|view|cafe)/.test(haystack)) return 'Couples, first-time visitors, and slower city walkers';
  if (/(market|food|restaurant|snack|bakery)/.test(haystack)) return 'Food-focused travelers and casual explorers';
  if (/(museum|history|culture|temple|palace)/.test(haystack)) return 'Travelers who want context, not just photos';
  return 'Travelers who want a more intentional stop than a generic top-10 checklist';
}

function inferSkipIf(content: string): string {
  const haystack = content.toLowerCase();
  if (/(night|bar|late)/.test(haystack)) return 'Skip if you only have daytime hours and want quick iconic sightseeing.';
  if (/(cafe|shopping|street|gallery)/.test(haystack)) return 'Skip if you want major landmarks more than neighborhood atmosphere.';
  if (/(museum|history|temple|palace)/.test(haystack)) return 'Skip if you are trying to keep the day light, fast, and mostly outdoors.';
  return 'Skip if your schedule only has room for one major stop and you need the most iconic option first.';
}

function buildDecisionSummary(title: string, cityLabel: string, content: string) {
  return {
    bestTime: inferBestTime(content, title),
    stayTime: inferStayTime(content),
    tripFit: inferTripFit(content, cityLabel),
    goodFor: inferGoodFor(content),
    skipIf: inferSkipIf(content),
  };
}

function buildExperiencePoints(title: string, content: string, cityLabel: string): string[] {
  const haystack = `${title} ${content}`.toLowerCase();
  const points = [];

  if (/(walk|street|alley|neighborhood|district)/.test(haystack)) {
    points.push(`Walk this area slowly instead of treating it as a quick photo stop in ${cityLabel}.`);
  }
  if (/(food|market|restaurant|bakery|cafe|coffee)/.test(haystack)) {
    points.push('Make time to eat or drink here, not just pass through it on the way elsewhere.');
  }
  if (/(view|tower|sunset|night|river|beach)/.test(haystack)) {
    points.push('Your timing matters, because the atmosphere shifts a lot between day and evening.');
  }
  if (/(museum|history|temple|palace|culture)/.test(haystack)) {
    points.push('It lands best when you treat it as a context-setting stop, not background scenery.');
  }

  if (points.length < 3) {
    points.push(`Use this stop to understand a more specific side of ${cityLabel} than the generic headline version.`);
  }
  if (points.length < 3) {
    points.push('Pair it with one nearby stop so the area feels like part of a route instead of an isolated detour.');
  }

  return points.slice(0, 3);
}

function buildFinalVerdict(summary: ReturnType<typeof buildDecisionSummary>, title: string, cityLabel: string): string {
  return `${title} earns space when you want ${summary.goodFor.toLowerCase()} and are building a more intentional ${cityLabel} route. If your trip only has room for the biggest icons, keep it secondary; otherwise, it is exactly the kind of stop that makes the city feel more personal.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<HotspotParams>;
}): Promise<Metadata> {
  const { city, hotspot } = await params;
  const post = await fetchPostBySlug(hotspot);
  if (!post || !isWpPostCityMatch(post, city)) {
    return {
      title: 'Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = stripHtml(post.title.rendered);
  const description = buildExcerpt(post) || `Discover ${title} with RoadToKorea`;
  const heroImage = getHeroImage(post, city, hotspot);
  const normalizedHeroImage = heroImage ? normalizeWpMediaUrl(heroImage) : '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/cities/${city}/${hotspot}`,
      type: 'article',
      images: normalizedHeroImage
        ? [{ url: normalizedHeroImage, width: 1200, height: 630, alt: title }]
        : [],
    },
    alternates: {
      canonical: `${siteUrl}/cities/${city}/${hotspot}`,
    },
  };
}

export default async function HotspotPage({
  params,
}: {
  params: Promise<HotspotParams>;
}) {
  const { city: citySlug, hotspot: hotspotSlug } = await params;
  const post = await fetchPostBySlug(hotspotSlug);

  if (!post || !isWpPostCityMatch(post, citySlug)) notFound();

  const rawContent = post.content?.rendered || '';
  const cleanedContent = cleanContent(rawContent);
  const { content: guidedContent, headings } = buildContentGuide(cleanedContent);
  const heroImageUrl = getHeroImage(post, citySlug, hotspotSlug);
  const fixedHeroUrl = heroImageUrl ? normalizeWpMediaUrl(heroImageUrl) : null;
  const title = stripHtml(post.title?.rendered || hotspotSlug);
  const excerpt = buildExcerpt(post);
  const cityLabel = formatCityLabel(citySlug);
  const routeOption = getSeoulRouteOptionBySlug(citySlug);
  const readingMinutes = estimateReadingMinutes(rawContent);
  const guideBullets = buildGuideBullets(post, cityLabel);
  const decisionSummary = buildDecisionSummary(title, cityLabel, rawContent);
  const experiencePoints = buildExperiencePoints(title, rawContent, cityLabel);
  const finalVerdict = buildFinalVerdict(decisionSummary, title, cityLabel);
  const publishedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;
  const relatedPosts = (await fetchPostsByCityTag(citySlug, 6))
    .filter((candidate) => {
      if (candidate.slug === hotspotSlug) return false;
      const candidateImage = getHeroImage(candidate, citySlug, candidate.slug);
      const currentImage = heroImageUrl;
      if (candidateImage && currentImage && candidateImage === currentImage) return false;
      return true;
    })
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    url: `${siteUrl}/cities/${citySlug}/${hotspotSlug}`,
    ...(fixedHeroUrl ? { image: fixedHeroUrl } : {}),
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#111111_0%,#171411_14%,#f8f2ea_14%,#f5ede4_100%)] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          {fixedHeroUrl ? (
            <Image
              src={fixedHeroUrl}
              alt={title}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(191,153,107,0.35),transparent_38%),linear-gradient(180deg,#231d17_0%,#111111_100%)]" />
          )}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.28)_0%,rgba(10,8,7,0.34)_28%,rgba(10,8,7,0.82)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_58%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8">
          <div className="flex items-start justify-between gap-4">
            <Link
              href={`/cities/${citySlug}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/88 backdrop-blur transition-colors hover:bg-white/16 hover:text-white"
            >
              <span>{cityLabel}</span>
              <span className="text-white/45">/</span>
              <span>Back to city</span>
            </Link>

            <div className="hidden rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-200/80 backdrop-blur md:inline-flex">
              RoadToKorea Detail
            </div>
          </div>

          <div className="mt-auto grid gap-10 pb-8 pt-24 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-200/20 bg-[linear-gradient(135deg,rgba(191,153,107,0.22),rgba(255,255,255,0.06))] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-100 backdrop-blur">
                  {cityLabel} Hotspot
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.92] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.38)] md:text-7xl lg:text-[5.5rem]">
                {title}
              </h1>

              {excerpt && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">
                  {excerpt}
                </p>
              )}
            </div>

            <aside className="rounded-[1.75rem] border border-white/14 bg-black/24 p-6 text-stone-100 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-400">
                Route Context
              </p>
              <div className="mt-5 grid gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Destination
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">{cityLabel}</p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Why This City
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">
                    {routeOption?.routePitch ??
                      `This city makes sense when the route needs a stronger stop after Seoul.`}
                  </p>
                </div>
                {publishedDate && (
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                      Published
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-200">{publishedDate}</p>
                  </div>
                )}
                <div className="border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Reading Time
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">
                    About {readingMinutes} min
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    From Seoul
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">
                    {routeOption
                      ? `${routeOption.transport} • ${routeOption.travelTime}`
                      : 'Core route guidance is being expanded.'}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-6 flex justify-end">
            <div className="flex flex-col items-center gap-2 text-white/55">
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">Scroll</span>
              <div className="h-12 w-px bg-white/28" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(120,112,99,0.45),transparent)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-6 shadow-[0_25px_60px_rgba(34,30,25,0.06)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  On This Page
                </p>
                <div className="mt-5 grid gap-3 text-sm text-stone-600">
                  <a href="#guide-overview" className="rounded-full bg-stone-100 px-4 py-2 transition-colors hover:bg-stone-200">
                    Guide overview
                  </a>
                  {headings.slice(0, 5).map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="rounded-full bg-stone-100 px-4 py-2 transition-colors hover:bg-stone-200"
                    >
                      {heading.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-6 shadow-[0_25px_60px_rgba(34,30,25,0.06)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Quick Read
                </p>
                <div className="mt-5 grid gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Sections
                    </p>
                    <p className="mt-2 font-serif text-2xl text-stone-950">{headings.length || 1}</p>
                  </div>
                  <div className="border-t border-stone-200 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      Travelers refining a {cityLabel} route, not just collecting headline stops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <article className="rounded-[2rem] border border-stone-200/80 bg-white/78 p-6 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10 lg:p-14">
            <div id="guide-overview" className="mb-10 border-b border-stone-200 pb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Editorial Guide
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
                What this place feels like, and why it belongs on the route.
              </h2>
              {routeOption && (
                <div className="mt-8 rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(135deg,rgba(191,153,107,0.12),rgba(255,255,255,0.7))] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                    Why The System Picks {cityLabel}
                  </p>
                  <p className="mt-4 text-base leading-8 text-stone-700">
                    {routeOption.routePitch}
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        From Seoul
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">
                        {routeOption.transport} • {routeOption.travelTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        Ideal Stay
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">{routeOption.idealStay}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        Route Logic
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-700">{routeOption.nextMove}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {guideBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5"
                  >
                    <p className="text-sm leading-7 text-stone-600">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best Time
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {decisionSummary.bestTime}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Stay Length
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {decisionSummary.stayTime}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best Use
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {decisionSummary.tripFit}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Good For
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {decisionSummary.goodFor}
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12 border-b border-stone-200 pb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Why Go
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
                What this stop actually adds to the day.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {experiencePoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Point {index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 border-b border-stone-200 pb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Caution
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
                When it makes sense to skip it.
              </h2>
              <div className="mt-8 rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(135deg,rgba(191,153,107,0.1),rgba(17,17,17,0.02))] p-6">
                <p className="text-base leading-8 text-stone-700">{decisionSummary.skipIf}</p>
              </div>
            </section>

            {rawContent ? (
              <div
                className="city-article city-article--feature"
                dangerouslySetInnerHTML={{ __html: guidedContent }}
              />
            ) : (
              <p className="py-24 text-center font-serif text-2xl italic text-stone-400">
                This guide is focused on the route context available for this stop.
              </p>
            )}

            <section className="mt-12 rounded-[1.75rem] border border-stone-200 bg-stone-50/80 p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Final Verdict
              </p>
              <p className="mt-4 max-w-4xl font-serif text-2xl leading-relaxed text-stone-950 md:text-3xl">
                {finalVerdict}
              </p>
            </section>
          </article>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-stone-200/80 bg-[linear-gradient(180deg,#f4ebdf_0%,#efe4d6_100%)] px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Continue Inside {cityLabel}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                Related stops worth opening next.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Use these nearby stories to compare mood, route fit, and whether this part of the
                city deserves more time.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost: WPPost) => {
                const relatedTitle = stripHtml(relatedPost.title.rendered) || relatedPost.slug;
                const relatedExcerpt = buildExcerpt(relatedPost);
                const relatedImage = getHeroImage(relatedPost, citySlug, relatedPost.slug);
                const relatedImageUrl = relatedImage ? normalizeWpMediaUrl(relatedImage) : '/images/placeholder.png';

                return (
                  <article
                    key={relatedPost.id}
                    className="group overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/78 shadow-[0_22px_60px_rgba(34,30,25,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white"
                  >
                    <Link
                      href={`/cities/${citySlug}/${relatedPost.slug}`}
                      className="relative block aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={relatedImageUrl}
                        alt={relatedTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.42))]" />
                    </Link>
                    <div className="p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                        {cityLabel} Journal
                      </p>
                      <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 transition-colors group-hover:text-stone-700">
                        {relatedTitle}
                      </h3>
                      {relatedExcerpt && (
                        <p className="mt-4 line-clamp-3 text-sm leading-7 text-stone-600">
                          {relatedExcerpt}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-stone-200/80 bg-[linear-gradient(180deg,#f5ede4_0%,#efe5d8_100%)] px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_25px_70px_rgba(34,30,25,0.07)] backdrop-blur md:flex-row md:items-end md:p-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              Continue Exploring
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
              Keep building the {cityLabel} route.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Return to the city guide to compare nearby stops, route fit, and the rest of the
              editorial recommendations around this destination.
            </p>
          </div>

          <Link
            href={`/cities/${citySlug}`}
            className="inline-flex rounded-full bg-stone-950 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
          >
            More from {cityLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
