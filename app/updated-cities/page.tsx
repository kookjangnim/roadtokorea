import Image from 'next/image';
import Link from 'next/link';
import { updatedCities } from '@/data/updatedCities';
import { getCityImageSlots } from '@/data/cityImageSlots';
import { getEditorialImageForCity, getSafeEditorialImage } from '@/data/editorialImageFallbacks';
import { updatedCitiesMetadata } from '@/lib/page-metadata';

export const metadata = updatedCitiesMetadata;

function getCityImage(citySlug: string) {
  const slots = getCityImageSlots(citySlug);
  const localImage = getEditorialImageForCity(citySlug);
  const candidate =
    slots?.slots.hero?.asset
    ?? slots?.slots.route?.asset
    ?? slots?.slots.street?.asset
    ?? '';

  return localImage ?? getSafeEditorialImage(candidate, citySlug);
}

function getRouteLabel(href: string) {
  const match = href.match(/^\/(route-\d+)/);
  if (!match) return 'City guide';

  return match[1].replace('route-', 'Route ');
}

function getArchiveGroups() {
  const groups = new Map<string, number>();

  updatedCities.forEach((city) => {
    const label = getRouteLabel(city.href);
    groups.set(label, (groups.get(label) ?? 0) + 1);
  });

  return Array.from(groups.entries()).map(([label, count]) => ({ label, count }));
}

export default function UpdatedCitiesPage() {
  const featuredCities = updatedCities.slice(0, 4);
  const archiveGroups = getArchiveGroups();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_48%,#efe7db_100%)] px-4 py-10 text-stone-900 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="border border-stone-200/80 bg-white/78 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              City Article Archive
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
              Finished city chapters, organized like a travel blog.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
              This archive collects city pages that already have route logic, visual context, and
              enough local detail to read as full guide articles rather than thin destination cards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-stone-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900"
              >
                Back to home
              </Link>
              <Link
                href="/routes"
                className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                Browse routes
              </Link>
            </div>
          </div>

          <aside className="border border-stone-200/80 bg-white/82 p-6 shadow-[0_20px_60px_rgba(34,30,25,0.06)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Archive map
            </p>
            <div className="mt-5 grid gap-3">
              {archiveGroups.slice(0, 8).map((group) => (
                <div
                  key={group.label}
                  className="flex items-center justify-between border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-stone-800">{group.label}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {group.count} guides
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              The list is route-led on purpose: each city is attached to a journey, which makes the
              internal linking feel more useful than a loose destination directory.
            </p>
          </aside>
        </section>

        <section className="mt-8 border border-stone-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Featured city reads
              </p>
              <h2 className="mt-2 font-serif text-4xl text-stone-950">
                Start with the strongest chapters.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              These pages are the first internal links a new reader can open after choosing a route.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredCities.map((city) => (
              <Link
                key={`${city.slug}-featured`}
                href={city.href}
                className="group overflow-hidden border border-stone-200 bg-stone-50 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_38px_rgba(34,30,25,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={getCityImage(city.slug)}
                    alt={`${city.name} travel guide`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-900 shadow-sm">
                    {getRouteLabel(city.href)}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {city.role}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-stone-950">
                    {city.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-stone-600">
                    {city.reason}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                All city guide articles
              </p>
              <h2 className="mt-2 font-serif text-4xl text-stone-950">
                Browse the upgraded archive.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              Each card links to a city page with route role, visual preview, article map, and
              practical stopover reasoning.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {updatedCities.map((city) => (
            <Link
              key={city.slug}
              href={city.href}
              className="group overflow-hidden border border-stone-200/80 bg-white/82 shadow-[0_20px_60px_rgba(34,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <Image
                  src={getCityImage(city.slug)}
                  alt={`${city.name} city article`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-900 shadow-sm">
                  {getRouteLabel(city.href)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-600">
                    Route chapter
                  </span>
                  <span className="border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {city.role}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950">
                  {city.name}
                </h3>
                <p className="mt-4 line-clamp-4 text-sm leading-7 text-stone-700">
                  {city.reason}
                </p>
                <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                  Open city guide
                </span>
              </div>
            </Link>
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}
