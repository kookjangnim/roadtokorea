import { fetchCity } from '@/lib/api';
import { fetchPostsByCityTag } from '@/lib/wp-api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PopularSearches from '@/components/PopularSearches';
import type { WPPost } from '@/lib/wp-api';
import { getSiteUrl, normalizeWpMediaUrl } from '@/lib/site-config';
import { getSeoulRouteOptionBySlug } from '@/data/seoulRoutes';
import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';
import { destinations, districtToEnglish, type Destination } from '@/data/destinations';
import CitySupportMap from '@/components/city-detail/CitySupportMap';
import { getCitySupportProfile } from '@/data/citySupportProfiles';
import {
  buildOpenStreetMapDirectionsUrl,
  buildOpenStreetMapEmbedUrl,
  SEOUL_COORDS,
} from '@/lib/map-utils';

const siteUrl = getSiteUrl();

type CityParams = {
  tier: string;
  city: string;
};

type WPTerm = {
  name: string;
  slug: string;
  taxonomy: string;
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

function formatTierLabel(tier: string): string {
  return tier.replace('tier-', 'Tier ');
}

function formatCityLabel(citySlug: string): string {
  return citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildPointDirectionsUrl(lat: number, lng: number) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;
}

function getHeroImageFromHtml(html: string): string | null {
  const heroMatch = html.match(/class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"/i);
  if (heroMatch) return heroMatch[1];

  const firstImageMatch = html.match(/<img[^>]+src="([^">]+)"/i);
  return firstImageMatch ? firstImageMatch[1] : null;
}

function buildStoryExcerpt(excerptHtml: string, contentHtml: string): string {
  const excerpt = stripHtml(excerptHtml);
  if (excerpt) return excerpt.slice(0, 200);

  const firstParagraph = contentHtml.match(/<p[^>]*>(.*?)<\/p>/i);
  return firstParagraph ? stripHtml(firstParagraph[1]).slice(0, 200) : '';
}

function buildTransportGuidance(transport?: string) {
  const mode = transport?.toLowerCase() ?? '';

  if (mode.includes('flight')) {
    return {
      bestChoice: 'Fly when this destination is meant to feel like its own chapter, not a rushed add-on.',
      lowestStress:
        'Airport transfer adds friction, but the route becomes much cleaner once the flight is the main move.',
      note: 'Protect your arrival day so the first evening still belongs to the city instead of logistics.',
    };
  }

  if (mode.includes('ktx')) {
    return {
      bestChoice:
        'KTX is usually the cleanest option from Seoul when you want speed without turning the move into a puzzle.',
      lowestStress:
        'Rail keeps the route simple: one decisive transfer, predictable timing, and an easy handoff into the city.',
      note: 'Book around check-in and keep the first half-day light so the city still lands properly.',
    };
  }

  if (mode.includes('bus')) {
    return {
      bestChoice: 'Bus works when budget matters more than shaving every hour off the route.',
      lowestStress:
        'A direct coach can feel easier than stacking multiple local transfers, especially with luggage.',
      note: 'Use it when the trip is intentionally slower and cost-aware from the start.',
    };
  }

  return {
    bestChoice: 'Pick the route that preserves energy on arrival instead of chasing tiny time savings.',
    lowestStress: 'The calmer transfer is usually the better one when the point is to stay deeper.',
    note: 'Treat the move from Seoul as part of the travel mood, not just a logistics problem.',
  };
}

function getLocalCityData(tier: string, citySlug: string) {
  const key = citySlug.toLowerCase();

  if (tier === 'tier-1') return tier1Cities[key] ?? null;
  if (tier === 'tier-2') return tier2Cities[key] ?? null;
  if (tier === 'tier-4') return tier4Cities[key] ?? null;

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CityParams>;
}): Promise<Metadata> {
  const { tier, city } = await params;
  const cityData = await fetchCity(city);
  const localCityData = getLocalCityData(tier, city);
  if (!cityData && !localCityData) return { title: 'Not Found' };

  const title = cityData ? stripHtml(cityData.title.rendered) : localCityData?.name ?? 'City Guide';
  const description =
    cityData
      ? buildStoryExcerpt(cityData.excerpt.rendered, cityData.content.rendered) ||
        `Discover ${title} with RoadToKorea`
      : localCityData?.description || `Discover ${title} with RoadToKorea`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${tier}/${city}`,
      type: 'article',
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<CityParams>;
}) {
  const { tier, city: citySlug } = await params;
  const cityData = await fetchCity(citySlug);
  const localCityData = getLocalCityData(tier, citySlug);
  const dynamicPosts = await fetchPostsByCityTag(citySlug, 8);

  if (!cityData && !localCityData) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,#faf5ee_0%,#f4ede4_54%,#efe7db_100%)] px-6 py-20 text-stone-900">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center rounded-[2rem] border border-stone-200/80 bg-white/75 p-10 text-center shadow-[0_35px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-stone-500">
            Missing Guide
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-none text-stone-950 md:text-7xl">
            City not found
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-stone-600 md:text-lg">
            This city guide has not been published yet, or the route may still be moving into
            place.
          </p>
          <Link
            href={`/${tier}/cities`}
            className="mt-10 inline-flex rounded-full bg-stone-950 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Back to {formatTierLabel(tier)}
          </Link>
        </div>
      </div>
    );
  }

  const cityName = cityData
    ? stripHtml(cityData.title.rendered) || formatCityLabel(citySlug)
    : localCityData?.name || formatCityLabel(citySlug);
  const description = cityData
    ? buildStoryExcerpt(cityData.excerpt.rendered, cityData.content.rendered)
    : localCityData?.description || '';
  const rawContent = cityData?.content.rendered || '';
  const heroImage = cityData ? getHeroImageFromHtml(rawContent) : null;
  const localDestinations = destinations.filter((dest) => dest.city.toLowerCase() === citySlug.toLowerCase());
  const heroImageUrl = heroImage
    ? normalizeWpMediaUrl(heroImage)
    : localDestinations[0]?.imagePath || localCityData?.heroImage || null;
  const routeOption = getSeoulRouteOptionBySlug(citySlug);
  const supportProfile = getCitySupportProfile(citySlug);
  const transportGuidance = buildTransportGuidance(routeOption?.transport);
  const tags = [cityName, 'Korea route', 'Neighborhood guide', 'Travel notes'];
  const mapEmbedUrl = routeOption
    ? buildOpenStreetMapEmbedUrl(SEOUL_COORDS, routeOption.coordinates)
    : null;
  const directionsUrl = routeOption
    ? buildOpenStreetMapDirectionsUrl(SEOUL_COORDS, routeOption.coordinates)
    : null;
  const localGallery = localDestinations.reduce<Array<{
    id: string;
    name: string;
    description: string;
    image: string;
  }>>((items, dest: Destination, index) => {
    const districtName = districtToEnglish[dest.district] || dest.district || cityName;
    if (items.some((item) => item.name === districtName)) return items;

    items.push({
      id: `${dest.city}-${districtName}-${index}`,
      name: districtName,
      description:
        dest.description ||
        `${districtName} helps explain what makes ${cityName} feel distinct once you are on the ground.`,
      image: dest.imagePath,
    });

    return items;
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: cityName,
    description,
    url: `${siteUrl}/${tier}/${citySlug}`,
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#111111_0%,#171411_13%,#f8f2ea_13%,#f5ede4_100%)] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-stone-200/80 bg-[linear-gradient(180deg,#f8f2ea_0%,#f5ede4_100%)] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start justify-between gap-4">
            <Link
              href={`/${tier}/cities`}
              className="inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-700 backdrop-blur transition-colors hover:border-stone-900 hover:text-stone-950"
            >
              <span>Destinations</span>
              <span className="text-stone-400">/</span>
              <span>All cities</span>
            </Link>

            <div className="hidden rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-600 md:inline-flex">
              City Guide
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-stone-200/80 bg-white/78 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
              <div className="inline-flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-200/40 bg-amber-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-700">
                  From Seoul
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-600">
                  Seoul to {cityName}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
                {cityName}
              </h1>

              {description && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
                  {description}
                </p>
              )}

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Why This Stop
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">
                    {routeOption?.routePitch ??
                      `This stop earns route space when you want a more intentional move beyond Seoul.`}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best Way From Seoul
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {routeOption?.transport ?? 'Transit soon'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {routeOption?.travelTime ?? 'Timing is being added to this destination.'}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Stay Shape
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {routeOption?.idealStay ?? 'Flexible'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {routeOption?.bestFor ??
                      'Use the guide below to decide whether this deserves a short stop or a longer chapter.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur">
              <div className="border-b border-stone-200 px-6 py-5 md:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Route Map
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 md:text-4xl">
                  The move from Seoul matters almost as much as the city itself.
                </h2>
              </div>

              {mapEmbedUrl ? (
                <iframe
                  title={`Map from Seoul to ${cityName}`}
                  src={mapEmbedUrl}
                  className="h-[24rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : heroImageUrl ? (
                <div className="relative h-[24rem] w-full">
                  <Image
                    src={heroImageUrl}
                    alt={cityName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-[24rem] items-center justify-center bg-stone-100 text-stone-500">
                  Map coming soon
                </div>
              )}

              <div className="grid gap-4 px-6 py-6 md:px-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Lowest-Stress Read
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">
                      {transportGuidance.lowestStress}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Slow Travel Note
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">{transportGuidance.note}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {directionsUrl && (
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                    >
                      Open Route In Maps
                    </a>
                  )}
                  <Link
                    href="#city-guide-body"
                    className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-stone-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900"
                  >
                    Read City Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(120,112,99,0.45),transparent)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-6 shadow-[0_25px_60px_rgba(34,30,25,0.06)] backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                City Guide
              </p>
              <div className="mt-5 grid gap-3 text-sm text-stone-600">
                <span className="rounded-full bg-stone-100 px-4 py-2">Why this city</span>
                <span className="rounded-full bg-stone-100 px-4 py-2">From Seoul</span>
                {supportProfile && (
                  <span className="rounded-full bg-stone-100 px-4 py-2">Local support map</span>
                )}
                <span className="rounded-full bg-stone-100 px-4 py-2">Related hotspots</span>
              </div>
            </div>
          </aside>

          <article
            id="city-guide-body"
            className="rounded-[2rem] border border-stone-200/80 bg-white/78 p-6 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10 lg:p-14"
          >
            <div className="mb-10 border-b border-stone-200 pb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Editorial Guide
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
                The city guide that helps you decide whether this stop fits the trip.
              </h2>

              {routeOption && (
                <div className="mt-8 rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(135deg,rgba(191,153,107,0.12),rgba(255,255,255,0.7))] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                    Why The System Picks {cityName}
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
            </div>

            <section className="mb-12 border-b border-stone-200 pb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                From Seoul
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl">
                How to reach {cityName} without overcomplicating the route.
              </h2>
              <div className="mt-8 grid gap-4 xl:grid-cols-3">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best Choice
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {routeOption?.transport ?? 'Transit guidance coming soon'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{transportGuidance.bestChoice}</p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Travel Window
                  </p>
                  <p className="mt-3 font-serif text-2xl text-stone-950">
                    {routeOption?.travelTime ?? 'Timing in progress'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{transportGuidance.lowestStress}</p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Slow Travel Note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{transportGuidance.note}</p>
                </div>
              </div>
            </section>

            {supportProfile && (
              <section className="mb-12 border-b border-stone-200 pb-10">
                <CitySupportMap profile={supportProfile} />

                <div className="mt-8 grid gap-4 xl:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/90 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Route Role
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700 md:text-base md:leading-8">
                      {supportProfile.roleSummary}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Support Summary
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700 md:text-base md:leading-8">
                      {supportProfile.supportSummary}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 xl:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Stay Logic
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{supportProfile.staySummary}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Food Logic
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{supportProfile.foodSummary}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Next Leg
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-700">
                      {supportProfile.nextLegSummary}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 xl:grid-cols-3">
                  {supportProfile.decisions.map((decision) => (
                    <article
                      key={decision.title}
                      className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(250,245,238,0.92),rgba(255,255,255,0.98))] p-6"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        Decision Pattern
                      </p>
                      <h3 className="mt-4 font-serif text-2xl leading-tight text-stone-950">
                        {decision.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-stone-700">{decision.bestFor}</p>
                      <p className="mt-3 text-sm leading-7 text-stone-600">{decision.why}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-3">
                  {supportProfile.visuals.map((visual) => (
                    <article
                      key={visual.title}
                      className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(34,30,25,0.06)]"
                    >
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={visual.image}
                          alt={visual.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.48))]" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
                          {visual.eyebrow}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-2xl leading-tight text-stone-950">
                          {visual.title}
                        </h3>
                      <p className="mt-4 text-sm leading-7 text-stone-600">{visual.body}</p>
                        <a
                          href={visual.sourceHref}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 transition-colors hover:text-stone-800"
                        >
                          {visual.licenseLabel} · {visual.sourceLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 xl:grid-cols-3">
                  {supportProfile.sections.map((section) => (
                    <article
                      key={section.title}
                      className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(248,242,234,0.88),rgba(255,255,255,0.95))] p-6"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        Local Reading
                      </p>
                      <h3 className="mt-4 font-serif text-2xl leading-tight text-stone-950">
                        {section.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-stone-700">{section.body}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  {supportProfile.points.map((point) => (
                    <article
                      key={point.id}
                      className="rounded-[1.5rem] border border-stone-200 bg-white p-6"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-600">
                          {point.kind}
                        </span>
                        {point.areaLabel && (
                          <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                            {point.areaLabel}
                          </span>
                        )}
                        <h3 className="font-serif text-2xl leading-tight text-stone-950">
                          {point.name}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-stone-700">{point.summary}</p>
                      <p className="mt-3 text-sm leading-7 text-stone-600">{point.note}</p>
                      <div className="mt-5">
                        <a
                          href={buildPointDirectionsUrl(
                            point.coordinates.lat,
                            point.coordinates.lng
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900 hover:bg-white"
                        >
                          Open Area In Map
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {rawContent ? (
              <div
                className="city-article city-article--feature"
                dangerouslySetInnerHTML={{ __html: cleanContent(rawContent) }}
              />
            ) : localCityData ? (
              <div className="space-y-10">
                <section>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                    Cultural Insight
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 md:text-4xl">
                    What makes {cityName} feel worth the move from Seoul.
                  </h3>
                  <p className="mt-6 text-base leading-8 text-stone-700">
                    {localCityData.culturalInsight}
                  </p>
                </section>

                {localGallery.length > 0 && (
                  <section className="border-t border-stone-200 pt-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                      Key Districts
                    </p>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      {localGallery.slice(0, 4).map((spot) => (
                        <article
                          key={spot.id}
                          className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-50/80"
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={spot.image}
                              alt={spot.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="p-5">
                            <h4 className="font-serif text-2xl text-stone-950">{spot.name}</h4>
                            <p className="mt-3 text-sm leading-7 text-stone-600">{spot.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            ) : (
              <p className="py-24 text-center font-serif text-2xl italic text-stone-400">
                Content is currently being drafted. Check back soon.
              </p>
            )}
          </article>
        </div>
      </section>

      {dynamicPosts.length > 0 && (
        <section className="border-t border-stone-200/80 bg-[linear-gradient(180deg,#f4ebdf_0%,#efe4d6_100%)] px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Journal
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-6xl">
                  More stories from {cityName}.
                </h2>
                <p className="mt-4 text-base leading-8 text-stone-600 md:text-lg">
                  Open specific neighborhoods, attractions, and travel notes to see where this city
                  gets sharper in practice.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900"
              >
                Back to Home
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {dynamicPosts.map((post: WPPost) => {
                let imageUrl = '/images/placeholder.jpg';
                const featuredUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                if (featuredUrl) {
                  imageUrl = normalizeWpMediaUrl(featuredUrl);
                } else if (post.content?.rendered) {
                  const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/i);
                  if (imgMatch?.[1]) {
                    imageUrl = normalizeWpMediaUrl(imgMatch[1]);
                  }
                }

                let categoryLabel = 'Travel';
                let tierSlug = tier;
                const wpTerms = post._embedded?.['wp:term'] || [];

                for (const taxonomyArray of wpTerms) {
                  const category = taxonomyArray.find((term: WPTerm) => term.taxonomy === 'category');
                  if (category) {
                    if (category.slug?.startsWith('tier-')) tierSlug = category.slug;
                    categoryLabel = category.name || categoryLabel;
                  }
                }

                const postUrl = `/${tierSlug}/${citySlug}/${post.slug}`;
                const postTitle = stripHtml(post.title.rendered) || formatCityLabel(post.slug);
                const postExcerpt = buildStoryExcerpt(post.excerpt.rendered, post.content.rendered);
                const publishedDate = new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                });

                return (
                  <article
                    key={post.id}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/78 shadow-[0_22px_60px_rgba(34,30,25,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white"
                  >
                    <Link href={postUrl} className="relative block aspect-[4/5] overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={postTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.42))]" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/24 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
                        {categoryLabel}
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col p-6">
                      <time className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                        {publishedDate}
                      </time>
                      <Link href={postUrl}>
                        <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 transition-colors group-hover:text-stone-700">
                          {postTitle}
                        </h3>
                      </Link>
                      {postExcerpt && (
                        <p className="mt-4 line-clamp-3 text-sm leading-7 text-stone-600">
                          {postExcerpt}
                        </p>
                      )}

                      <div className="mt-auto pt-6">
                        <Link
                          href={postUrl}
                          className="inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          Open Story
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <PopularSearches tags={tags} />
    </main>
  );
}
