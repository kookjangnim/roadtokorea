import Image from 'next/image';
import Link from 'next/link';
import type { RouteData } from '@/data/routeStopovers';

const routeImages: Record<string, string> = {
  '1': '/images/destinations/Busan_A_breathtaking_cinematic_travel_photograph_of_haeu_e9b5575ea7.jpeg',
  '2': '/images/cities/gangneung.jpg',
  '3': '/images/cities/seoraksan.jpg',
  '4': '/images/cities/yangyang.jpg',
  '5': '/images/cities/jeonju.jpg',
  '6': '/images/cities/gwangju.jpg',
  '7': '/images/cities/tongyeong.jpg',
  '8': '/images/cities/gwangju.jpg',
};

const routeAccents: Record<string, string> = {
  '1': '#c47a3b',
  '2': '#2f95b5',
  '3': '#598b66',
  '4': '#b76458',
  '5': '#8f6d35',
  '6': '#5f74a8',
  '7': '#2f8b7f',
  '8': '#8c5c7e',
};

function getRouteImage(route: RouteData) {
  return routeImages[route.routeCode] ?? '/images/cities/busan_hero_aesthetic_1773587206276.png';
}

function getStops(route: RouteData) {
  const stops = [
    route.from,
    ...route.transports.car.stopovers.map((stopover) => stopover.city),
    route.to,
  ];

  return stops.filter((city, index) => stops.indexOf(city) === index).slice(0, 6);
}

function getRoutePitch(route: RouteData) {
  if (route.routeCode === '1') return 'The core Seoul to Busan route with enough inland depth to feel authored.';
  if (route.routeCode === '2') return 'An eastbound opening toward Gangneung, junction towns, and sea air.';
  if (route.routeCode === '7') return 'A south-coast island line that makes the final Busan arrival slower and richer.';
  if (route.routeCode === '8') return 'A Honam descent through food, civic history, harbor mood, and land-end logic.';
  return route.bestUseCases[0] ?? route.destinationPitch;
}

interface HomeLandingProps {
  routes: RouteData[];
}

export default function HomeLanding({ routes }: HomeLandingProps) {
  const featured = routes[0];
  const secondaryRoutes = routes.slice(1, 4);

  return (
    <main className="min-h-screen bg-[#11100e] text-white">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden">
        {featured ? (
          <Image
            src={getRouteImage(featured)}
            alt="Seoul to Busan route arrival in Busan"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.58]"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,11,10,0.94),rgba(12,11,10,0.72)_42%,rgba(12,11,10,0.34))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl content-between gap-10 px-4 py-10 md:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:py-12">
          <div className="flex max-w-3xl flex-col justify-center py-8">
            <p className="text-sm font-semibold uppercase text-[#d4a15f]">Route-first Korea travel</p>
            <h1 className="mt-5 font-serif text-5xl leading-none text-white md:text-7xl">
              Seoul to Busan, with the middle restored.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">
              Start from the route, then choose the cities that make the journey worth reading.
              RoadToKorea is built for travelers who want Korea to unfold as a line, not a random
              list of posts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/route-1"
                className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-stone-950 transition-transform hover:-translate-y-0.5"
              >
                Open Route 1
              </Link>
              <Link
                href="/routes"
                className="inline-flex min-h-12 items-center justify-center border border-white/28 bg-black/24 px-6 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/12"
              >
                View All Routes
              </Link>
            </div>
          </div>

          <aside className="self-center border border-white/18 bg-black/44 p-5 backdrop-blur-md">
            <p className="text-xs font-bold uppercase text-stone-300">Start here</p>
            <div className="mt-4 space-y-3">
              {[featured, ...secondaryRoutes].filter(Boolean).map((route) => (
                <Link
                  key={route.routeCode}
                  href={route.href}
                  className="group block border border-white/12 bg-white/[0.06] p-4 transition-colors hover:border-white/36 hover:bg-white/[0.12]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-stone-400">Route {route.routeCode}</p>
                      <h2 className="mt-2 text-lg font-semibold leading-snug text-white">
                        {route.from} to {route.to}
                      </h2>
                    </div>
                    <span
                      className="mt-1 h-3 w-3 shrink-0"
                      style={{ backgroundColor: routeAccents[route.routeCode] ?? '#d4a15f' }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="grid gap-3 border-t border-white/16 pt-5 md:grid-cols-3">
              <p className="text-sm leading-6 text-stone-300">
                Route pages include city thumbnails, transport modes, stopover logic, and practical
                pacing notes.
              </p>
              <p className="text-sm leading-6 text-stone-300">
                City chapters connect local guides back to the larger trip so pages do not feel
                isolated.
              </p>
              <p className="text-sm leading-6 text-stone-300">
                The homepage stays focused: pick the route, then branch into the places.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-4 py-10 text-stone-950 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-stone-500">Route board</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight md:text-5xl">
                Choose the line first.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              These are the main editorial paths. Each card uses local assets, so the landing page
              does not collapse into broken WordPress thumbnails.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {routes.map((route) => (
              <article key={route.routeCode} className="group border border-stone-200 bg-white shadow-sm">
                <Link href={route.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={getRouteImage(route)}
                      alt={`${route.from} to ${route.to} route guide`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 bg-white px-3 py-1.5 text-xs font-bold text-stone-950 shadow-sm">
                      Route {route.routeCode}
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <Link href={route.href}>
                    <h3 className="font-serif text-2xl leading-tight text-stone-950">
                      {route.from} to {route.to}
                    </h3>
                  </Link>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-stone-600">
                    {getRoutePitch(route)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {getStops(route).slice(0, 4).map((city) => (
                      <span key={city} className="bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={route.href}
                    className="mt-5 inline-flex text-sm font-bold text-stone-950 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-950"
                  >
                    Read route guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
