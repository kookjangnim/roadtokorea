import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchCity } from '@/lib/api';
import { getLocalCityDataBySlug } from '@/data/cityRegistry';
import { getCityDemandTier, getCityGuideTopics } from '@/data/cityGuideTopics';
import { getRouteSlugsForCity } from '@/data/routeRegistry';
import { getSiteUrl } from '@/lib/site-config';

type CityParams = { city: string };

const tierLabels = {
  flagship: 'Flagship city · deepest coverage',
  major: 'Major destination · expanded coverage',
  regional: 'Regional city · focused coverage',
  stopover: 'Route stop · essential coverage',
} as const;

function stripHtml(value: string): string {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function formatCityLabel(citySlug: string): string {
  return citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export async function generateCityHubMetadata({
  params,
}: {
  params: Promise<CityParams>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = await fetchCity(city);
  const localCity = getLocalCityDataBySlug(city);
  if (!cityData && !localCity) return { title: 'Not Found' };

  const cityName = localCity?.name ?? formatCityLabel(city);
  const description = localCity?.description
    ?? stripHtml(cityData?.excerpt.rendered ?? '')
    ?? `Plan a trip to ${cityName}.`;
  const canonical = `${getSiteUrl()}/cities/${city}`;

  return {
    title: `${cityName} Travel Hub`,
    description,
    alternates: { canonical },
    openGraph: { title: `${cityName} Travel Hub`, description, url: canonical, type: 'website' },
  };
}

export default async function CityHubPage({ params }: { params: Promise<CityParams> }) {
  const { city: citySlug } = await params;
  const cityData = await fetchCity(citySlug);
  const localCity = getLocalCityDataBySlug(citySlug);
  if (!cityData && !localCity) notFound();

  const cityName = localCity?.name ?? formatCityLabel(citySlug);
  const tier = getCityDemandTier(citySlug);
  const topics = getCityGuideTopics(citySlug);
  const routeSlugs = getRouteSlugsForCity(citySlug);
  const description = localCity?.description ?? stripHtml(cityData?.excerpt.rendered ?? '');
  const headline = localCity?.headline ?? `${cityName}, guide by guide`;
  const heroImage = localCity?.heroImage;
  const hotspots = localCity?.hotspots?.slice(0, 4) ?? [];

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-stone-950">
      <section className="relative overflow-hidden border-b border-stone-300 bg-stone-950 text-white">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/35" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <nav className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65" aria-label="Breadcrumb">
            <Link href="/updated-cities" className="transition hover:text-white">City guides</Link>
            <span className="mx-3">/</span>
            <span>{cityName}</span>
          </nav>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            {tierLabels[tier]}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] md:text-8xl">{cityName}</h1>
          <p className="mt-5 max-w-3xl font-serif text-2xl italic text-white/85 md:text-4xl">{headline}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">{description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Choose one question</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Do not read the whole city at once.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              Start with the guide that solves today&apos;s decision, then return here for the next branch.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {topics.map((topic, index) => (
                <Link
                  key={topic.slug}
                  href={`/cities/${citySlug}/guides/${topic.slug}`}
                  className="group rounded-[1.75rem] border border-stone-300 bg-white p-6 transition hover:-translate-y-1 hover:border-stone-500 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">{topic.eyebrow}</p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{topic.title}</h3>
                    </div>
                    <span className="font-serif text-3xl text-stone-300 transition group-hover:text-stone-950">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-stone-600">{topic.summary}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-stone-950">Open guide <span className="ml-2 transition group-hover:translate-x-1">→</span></span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[1.75rem] border border-stone-300 bg-[#ebe5d9] p-6 lg:sticky lg:top-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">Route connections</p>
            <div className="mt-4 space-y-3">
              {routeSlugs.length ? routeSlugs.map((routeSlug) => (
                <Link key={routeSlug} href={`/${routeSlug}/${citySlug}`} className="block rounded-xl border border-stone-300 bg-white/70 px-4 py-3 text-sm font-semibold transition hover:bg-white">
                  View {routeSlug.replace('-', ' ')} context →
                </Link>
              )) : <p className="text-sm leading-7 text-stone-600">Use the city guide index to continue planning.</p>}
            </div>
            <Link href="/routes" className="mt-5 inline-flex text-sm font-semibold">Explore every route →</Link>
          </aside>
        </div>
      </section>

      {hotspots.length > 0 && (
        <section className="border-t border-stone-300 bg-white/60">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Visual anchors</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Places that orient the city.</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {hotspots.map((hotspot) => (
                <article key={hotspot.id} className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white">
                  <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${hotspot.image})` }} />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl">{hotspot.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{hotspot.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
