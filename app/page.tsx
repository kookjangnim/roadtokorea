import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getAllRouteData, type RouteData } from '@/data/routeStopovers';
import { getCityImageSlots } from '@/data/cityImageSlots';

const routeFallbackImages: Record<string, string> = {
  '1': '/images/destinations/Busan_A_breathtaking_cinematic_travel_photograph_of_haeu_e9b5575ea7.jpeg',
  '2': '/images/cities/gangneung.jpg',
  '3': '/images/cities/seoraksan.jpg',
  '4': '/images/cities/yangyang.jpg',
  '5': '/images/cities/jeonju.jpg',
  '6': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mokpo%20Yudalsan.jpg',
  '7': '/images/cities/tongyeong.jpg',
  '8': '/images/cities/gwangju.jpg',
};

const routeCategories = [
  { label: 'Classic routes', href: '#classic-routes', count: '8 guides' },
  { label: 'Seoul starts', href: '#route-board', count: '6 routes' },
  { label: 'Coastal lines', href: '#route-board', count: '3 routes' },
  { label: 'Inland culture', href: '#route-board', count: '3 routes' },
  { label: 'City chapters', href: '/updated-cities', count: 'ready now' },
];

function getRouteImage(route: RouteData) {
  const destinationSlots = getCityImageSlots(route.toSlug);
  return destinationSlots?.slots.route?.asset
    ?? destinationSlots?.slots.hero?.asset
    ?? routeFallbackImages[route.routeCode]
    ?? '/images/placeholder.png';
}

function getRepresentativeStops(route: RouteData) {
  const stops = [
    route.from,
    ...route.transports.car.stopovers.map((stopover) => stopover.city),
    route.to,
  ];

  return stops.filter((city, index) => stops.indexOf(city) === index).slice(0, 5);
}

function getRouteTone(route: RouteData) {
  if (route.routeCode === '1') return 'Classic southbound spine';
  if (route.routeCode === '4') return 'East Sea coastal drive';
  if (route.routeCode === '7') return 'South coast island arc';
  if (route.routeCode === '8') return 'Honam land-end story';
  return route.bestUseCases[0] ?? 'Korea route guide';
}

export default async function Home() {
  const routes = getAllRouteData();
  const featuredRoute = routes[0];
  const routeByCode = new Map(routes.map((route) => [route.routeCode, route]));
  const editorialCollections = [
    {
      label: 'First-time Korea',
      title: 'Start with the classic Seoul to Busan spine.',
      body: 'Use the main southbound route when the trip needs strong transport choices, reliable city support, and a clear first reading of Korea.',
      route: routeByCode.get('1') ?? routes[0],
    },
    {
      label: 'Coastal reading',
      title: 'Let the East Sea or south coast become the story.',
      body: 'These routes are better when the journey should feel visual: harbors, beaches, sunrise roads, island towns, and slower coastal pacing.',
      route: routeByCode.get('4') ?? routeByCode.get('7') ?? routes[0],
    },
    {
      label: 'Culture depth',
      title: 'Choose inland cities when the route needs weight.',
      body: 'Inland and Honam routes make temples, old markets, food cities, mountain towns, and regional history easier to connect as a guide.',
      route: routeByCode.get('5') ?? routeByCode.get('8') ?? routes[0],
    },
  ].filter((item) => item.route);

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-stone-900 font-sans">
      <section className="border-b border-stone-200 bg-white px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              RoadToKorea
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-stone-950 md:text-4xl">
              Korea route guide
            </h1>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Start with a route, then open the guide for maps, city thumbnails, stopover logic,
              and the places worth slowing down for.
            </p>

            <nav className="mt-7 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {routeCategories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className="flex min-w-[11rem] items-center justify-between gap-3 border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 transition-colors hover:border-stone-400 hover:bg-white lg:min-w-0"
                >
                  <span className="font-semibold">{category.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    {category.count}
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          <div>
            <div
              id="classic-routes"
              className="grid gap-6 border-b border-stone-200 pb-8 lg:grid-cols-[minmax(0,1fr)_18rem]"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Route-first travel blog
                </p>
                <h2 className="mt-3 max-w-4xl font-serif text-5xl leading-[0.98] text-stone-950 md:text-7xl">
                  Pick the line before you pick the city.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
                  This home page is intentionally simple: the route cards are the table of contents.
                  Open one route to compare transport modes, scan the map, and browse the cities
                  that make the journey feel authored instead of random.
                </p>
              </div>

              {featuredRoute ? (
                <Link
                  href={featuredRoute.href}
                  className="group flex flex-col justify-between border border-stone-200 bg-[#171411] p-6 text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                      Start here
                    </p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight">
                      {featuredRoute.from} to {featuredRoute.to}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone-300">
                      {featuredRoute.destinationPitch}
                    </p>
                  </div>
                  <span className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition-transform group-hover:translate-x-1">
                    Open route
                  </span>
                </Link>
              ) : null}
            </div>

            <section id="route-board" className="pt-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Route board
                  </p>
                  <h2 className="mt-2 font-serif text-4xl text-stone-950 md:text-5xl">
                    Main routes
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-stone-600">
                  Each guide opens into a visual route page with a map, stopover cities, transport
                  comparison, and practical planning notes.
                </p>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {routes.map((route) => {
                  const routeImage = getRouteImage(route);
                  const stops = getRepresentativeStops(route);

                  return (
                    <article
                      key={route.routeCode}
                      className="group overflow-hidden border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(34,30,25,0.12)]"
                    >
                      <Link href={route.href} className="block">
                        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                          <Image
                            src={routeImage}
                            alt={`${route.from} to ${route.to} route`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute left-4 top-4 bg-white/92 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-900 shadow-sm">
                            Route {route.routeCode}
                          </div>
                        </div>
                      </Link>

                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                          {getRouteTone(route)}
                        </p>
                        <Link href={route.href}>
                          <h3 className="mt-2 font-serif text-3xl leading-tight text-stone-950">
                            {route.from} to {route.to}
                          </h3>
                        </Link>
                        <p className="mt-4 line-clamp-4 text-sm leading-7 text-stone-600">
                          {route.overview}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {stops.map((city) => (
                            <span
                              key={city}
                              className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-semibold text-stone-700"
                            >
                              {city}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                            {route.transports.car.totalTravelTime}
                          </span>
                          <Link
                            href={route.href}
                            className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-900 transition-transform group-hover:translate-x-1"
                          >
                            Read guide
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Editorial paths
              </p>
              <h2 className="mt-2 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                Read routes like blog series, not isolated pages.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              These collections give the site a stronger article structure for readers and search:
              start broad, open a route, then continue into city chapters and local guide posts.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {editorialCollections.map(({ label, title, body, route }) => (
              <article
                key={label}
                className="group overflow-hidden border border-stone-200 bg-stone-50 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(34,30,25,0.12)]"
              >
                <Link href={route.href} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                    <Image
                      src={getRouteImage(route)}
                      alt={`${route.from} to ${route.to} editorial guide`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 shadow-sm">
                      {label}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Route {route.routeCode} / {route.from} to {route.to}
                  </p>
                  <Link href={route.href}>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-stone-950">
                      {title}
                    </h3>
                  </Link>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{body}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                      {route.bestUseCases[0] ?? 'Route guide'}
                    </span>
                    <Link
                      href={route.href}
                      className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-900 transition-transform group-hover:translate-x-1"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              How to read this site
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
              The visuals live where they help the decision.
            </h2>
          </div>
          <div className="border-l border-stone-300 pl-5">
            <h3 className="font-serif text-2xl text-stone-950">Home</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              A quiet index of routes, categories, and entry points.
            </p>
          </div>
          <div className="border-l border-stone-300 pl-5">
            <h3 className="font-serif text-2xl text-stone-950">Route pages</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Maps, city thumbnails, transport modes, and stopover logic carry the visual weight.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
