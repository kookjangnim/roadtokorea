import { fetchPostBySlug } from '@/lib/wp-api';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSiteUrl, normalizeWpMediaUrl } from '@/lib/site-config';
import { getSeoulRouteOptionBySlug } from '@/data/seoulRoutes';
import { getHotspotHeroImage } from '@/data/hotspotImageMap';
import { isWpPostCityMatch } from '@/lib/wp-route-context';
import { getTripHotelAffiliateUrl } from '@/data/tripAffiliateLinks';
import {
  HOTSPOT_CATEGORY_PAGES,
  getHotspotCategoryHref,
  getResolvedHotspotCategoryPage,
  type HotspotCategoryKey,
} from '@/data/hotspotCategoryPages';
import { getEditorialImageForPost, getSafeEditorialImage } from '@/data/editorialImageFallbacks';

const siteUrl = getSiteUrl();

type HotspotCategoryParams = {
  city: string;
  hotspot: string;
  category: string;
};

type HotspotPost = {
  id?: number;
  slug?: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
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

function getHeroImage(post: HotspotPost, citySlug: string, hotspotSlug: string): string | null {
  const localImage = getHotspotHeroImage(citySlug, hotspotSlug);
  if (localImage) return localImage;

  const localEditorialImage = getEditorialImageForPost(post);
  if (localEditorialImage) return localEditorialImage;

  const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featured) return getSafeEditorialImage(featured, citySlug);

  const html = post.content?.rendered || '';
  const heroMatch = html.match(/class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"/i);
  if (heroMatch) return getSafeEditorialImage(heroMatch[1], citySlug);

  const firstMatch = html.match(/<img[^>]+src="([^">]+)"/i);
  return getSafeEditorialImage(firstMatch?.[1] || '', citySlug);
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

  const paragraphMatch = (post.content?.rendered || '').match(/<p[^>]*>(.*?)<\/p>/i);
  return paragraphMatch ? stripHtml(paragraphMatch[1]).slice(0, 180) : '';
}

export async function generateCategoryMetadata({
  params,
}: {
  params: Promise<HotspotCategoryParams>;
}): Promise<Metadata> {
  const { city, hotspot, category } = await params;
  const categoryPage = getResolvedHotspotCategoryPage(city, hotspot, category);
  if (!categoryPage) {
    return {
      title: 'Not Found',
      robots: { index: false, follow: false },
    };
  }

  const post = await fetchPostBySlug(hotspot);
  if (!post || !isWpPostCityMatch(post, city)) {
    return {
      title: 'Not Found',
      robots: { index: false, follow: false },
    };
  }

  const title = stripHtml(post.title.rendered);
  const pageTitle = `${title} ${categoryPage.titleSuffix}`;
  const description = `${categoryPage.question} ${categoryPage.summary}`;
  const heroImage = getHeroImage(post, city, hotspot);
  const normalizedHeroImage = heroImage ? normalizeWpMediaUrl(heroImage) : '';
  const canonical = `${siteUrl}${getHotspotCategoryHref(city, hotspot, categoryPage.key)}`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      type: 'article',
      images: normalizedHeroImage
        ? [{ url: normalizedHeroImage, width: 1200, height: 630, alt: title }]
        : [],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function HotspotCategoryPage({
  params,
}: {
  params: Promise<HotspotCategoryParams>;
}) {
  const { city: citySlug, hotspot: hotspotSlug, category } = await params;
  const categoryPage = getResolvedHotspotCategoryPage(citySlug, hotspotSlug, category);
  if (!categoryPage) notFound();

  const post = await fetchPostBySlug(hotspotSlug);
  if (!post || !isWpPostCityMatch(post, citySlug)) notFound();

  const title = stripHtml(post.title?.rendered || hotspotSlug);
  const excerpt = buildExcerpt(post);
  const cityLabel = formatCityLabel(citySlug);
  const routeOption = getSeoulRouteOptionBySlug(citySlug);
  const heroImageUrl = getHeroImage(post, citySlug, hotspotSlug);
  const fixedHeroUrl = heroImageUrl ? normalizeWpMediaUrl(heroImageUrl) : null;
  const tripHotelUrl =
    categoryPage.key === 'stay' ? getTripHotelAffiliateUrl(citySlug, 'hotspot_category_stay') : null;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#15120f_0%,#f7efe5_30%,#f4eadf_100%)] text-stone-900">
      <section className="relative isolate overflow-hidden bg-stone-950 px-4 py-6 text-white md:px-8">
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
            <div className="h-full w-full bg-[linear-gradient(135deg,#241f1a,#111111)]" />
          )}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0.36),rgba(10,8,7,0.86))]" />

        <div className="relative mx-auto flex min-h-[68svh] max-w-7xl flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href={`/cities/${citySlug}/${hotspotSlug}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur transition-colors hover:bg-white/16"
            >
              <span>{title}</span>
              <span className="text-white/45">/</span>
              <span>Overview</span>
            </Link>
            <Link
              href={`/cities/${citySlug}`}
              className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-200/85 backdrop-blur transition-colors hover:bg-white/10"
            >
              {cityLabel}
            </Link>
          </div>

          <div className="mt-auto max-w-5xl pb-10 pt-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-100">
              {categoryPage.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.94] text-white md:text-7xl">
              {title} {categoryPage.label}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200">{categoryPage.question}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article className="rounded-[2rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              Category Answer
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
              {categoryPage.summary}
            </h2>
            {excerpt ? (
              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">{excerpt}</p>
            ) : null}

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {categoryPage.cards.map((card) => (
                <section key={card.title} className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5">
                  <h3 className="font-serif text-2xl leading-tight text-stone-950">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{card.body}</p>
                </section>
              ))}
            </div>

            {tripHotelUrl ? (
              <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(135deg,#eef2ff_0%,#f8fafc_50%,#eef7f3_100%)] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Stay Booking
                </p>
                <h3 className="mt-3 font-serif text-3xl text-stone-950">Compare hotels in {cityLabel}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600">
                  Use Trip.com after you have chosen the right stay zone. The route decision comes
                  first; the hotel search comes after.
                </p>
                <a
                  href={tripHotelUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-stone-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  {categoryPage.primaryAction}
                </a>
              </div>
            ) : null}

            {categoryPage.key === 'transport' ? (
              <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-stone-50/90 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Route Context
                </p>
                <h3 className="mt-3 font-serif text-3xl text-stone-950">Use the city route before choosing transport.</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600">
                  {routeOption?.routePitch ??
                    `Start from the ${cityLabel} city guide, then decide whether this stop works best by transit, car, or walking.`}
                </p>
                <Link
                  href={`/cities/${citySlug}`}
                  className="mt-6 inline-flex rounded-full bg-stone-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  {categoryPage.primaryAction}
                </Link>
              </div>
            ) : null}
          </article>

          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_25px_60px_rgba(34,30,25,0.06)] backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                More Categories
              </p>
              <div className="mt-5 grid gap-3">
                {HOTSPOT_CATEGORY_PAGES.map((sibling) => (
                  <Link
                    key={sibling.key}
                    href={getHotspotCategoryHref(citySlug, hotspotSlug, sibling.key as HotspotCategoryKey)}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      sibling.key === categoryPage.key
                        ? 'bg-stone-950 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {sibling.navLabel}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_25px_60px_rgba(34,30,25,0.06)] backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Overview
              </p>
              <Link
                href={`/cities/${citySlug}/${hotspotSlug}`}
                className="mt-5 inline-flex rounded-full bg-stone-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-stone-800"
              >
                Back to summary
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-stone-200/80 bg-[linear-gradient(180deg,#f4ebdf_0%,#efe4d6_100%)] px-4 py-14 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_25px_70px_rgba(34,30,25,0.07)] backdrop-blur md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              Continue Exploring
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
              Keep this stop inside the larger {cityLabel} plan.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Return to the overview when you want the lighter decision page, or use the city guide
              to compare nearby stops.
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
