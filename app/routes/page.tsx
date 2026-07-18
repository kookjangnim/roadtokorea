import Image from 'next/image';
import Link from 'next/link';
import { getAllRouteData, type RouteData } from '@/data/routeStopovers';
import { getRouteSlugForRoute } from '@/data/routeRegistry';
import RoutePageShell from '@/components/routes/RoutePageShell';
import { getCityImageSlots } from '@/data/cityImageSlots';
import { routesIndexMetadata } from '@/lib/page-metadata';

export const metadata = routesIndexMetadata;

const routeFallbackImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '2': '/images/clipartkorea/gangneung/tc02820005412.jpg',
  '3': '/images/clipartkorea/sokcho/tc00240020235.jpg',
  '4': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '5': '/images/clipartkorea/yeosu/tc00240046415.jpg',
  '6': '/images/clipartkorea/mokpo/tc00240029851.jpg',
  '7': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '8': '/images/clipartkorea/haenam/tc00240076791.jpg',
};

const routeThemes = [
  { label: 'Direct classics', count: '2 routes' },
  { label: 'Coastal chapters', count: '3 routes' },
  { label: 'Inland culture', count: '3 routes' },
  { label: 'City guide archive', count: '40+ guides' },
];

function getRouteImage(route: RouteData) {
  const destinationSlots = getCityImageSlots(route.toSlug);

  return destinationSlots?.slots.route?.asset
    ?? destinationSlots?.slots.hero?.asset
    ?? routeFallbackImages[route.routeCode]
    ?? '/images/clipartkorea/mokpo/tc00240029851.jpg';
}

function getRouteReadingLabel(route: RouteData) {
  if (['4', '7'].includes(route.routeCode)) return 'Coastal series';
  if (['5', '6', '8'].includes(route.routeCode)) return 'Regional culture series';
  if (route.routeCode === '2' || route.routeCode === '3') return 'Mountain and eastbound series';
  return 'Classic route series';
}

export default function RoutesIndexPage() {
  const routes = getAllRouteData();

  return (
    <RoutePageShell activeRouteSlug="route-1">
      <main className="min-h-screen bg-[#f8f5ef] px-4 py-10 text-stone-900 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Route Index
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Every route, arranged like an archive.
            </h1>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Use this page as the route library. Pick a line, then continue into maps, city
              thumbnails, stopover notes, and full city chapters.
            </p>

            <nav className="mt-7 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {routeThemes.map((theme) => (
                <div
                  key={theme.label}
                  className="flex min-w-[12rem] items-center justify-between gap-3 border border-stone-200 bg-white px-4 py-3 lg:min-w-0"
                >
                  <span className="text-sm font-semibold text-stone-800">{theme.label}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {theme.count}
                  </span>
                </div>
              ))}
            </nav>
          </aside>

          <div>
            <header className="border border-stone-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Route article library
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
                Choose the line first, then decide which cities deserve time.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                Each route has its own logic: direct transfer, inland depth, coastal continuity, or
                slower regional pacing. Start with the route that matches the trip you actually want.
              </p>
            </header>

            <section className="mt-8 grid gap-6 lg:grid-cols-2">
            {routes.map((routeData) => {
              const routeSlug = getRouteSlugForRoute(routeData);
              const representativeStops = [
                routeData.from,
                ...routeData.transports.car.stopovers.map((stopover) => stopover.city),
                routeData.to,
              ].filter((city, index, stops) => stops.indexOf(city) === index).slice(0, 4);

              return (
                <Link
                  key={routeSlug}
                  href={`/${routeSlug}`}
                  className="group overflow-hidden border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:shadow-[0_18px_45px_rgba(34,30,25,0.12)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <Image
                      src={getRouteImage(routeData)}
                      alt={`${routeData.from} to ${routeData.to} route guide`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 shadow-sm">
                      Route {routeData.routeCode}
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-600"
                      >
                        {getRouteReadingLabel(routeData)}
                      </span>
                      <span
                        className="border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500"
                      >
                        {routeData.from} to {routeData.to}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-4xl leading-tight text-stone-950">
                      {routeData.headline}
                    </h3>
                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-stone-700 md:text-base md:leading-8">
                      {routeData.overview}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {representativeStops.map((city) => (
                        <span
                          key={city}
                          className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-semibold text-stone-700"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                      Open route
                    </span>
                  </div>
                </Link>
              );
            })}
            </section>
          </div>
        </div>
      </main>
    </RoutePageShell>
  );
}
