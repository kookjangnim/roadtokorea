import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import { getAllRouteData } from '@/data/routeStopovers';

export default async function Home() {
  const routes = getAllRouteData();
  const primaryRoute = routes[0];
  const transportCards = primaryRoute
    ? [
        primaryRoute.transports.KTX,
        primaryRoute.transports.car,
        primaryRoute.transports.bus,
        primaryRoute.transports.bicycle,
      ]
    : [];
  const featuredStops = primaryRoute
    ? [
        ...primaryRoute.transports.KTX.stopovers,
        ...primaryRoute.transports.car.stopovers,
      ].filter((stop, index, allStops) => allStops.findIndex((item) => item.city === stop.city) === index)
    : [];

  return (
    <main className="min-h-screen text-foreground font-sans">
      <HeroSlider routes={routes} />
      {primaryRoute ? (
        <>
          <section
            id="how-it-works"
            className="bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_48%,#efe7db_100%)] px-4 py-8 md:px-8 md:py-12"
          >
            <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  How this site works
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                  Start with the movement, not the bucket list.
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                  RoadToKorea is built for travelers who want Korea to read like a sequence, not a
                  pile of disconnected highlights. The route comes first. The cities earn their
                  place after that.
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Step 1
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-stone-950">Pick the corridor</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    Choose the north-to-south line that fits the trip: direct, inland, coastal, or
                    slower and more physical.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Step 2
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-stone-950">Compare the mode</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    KTX, car, bus, and bicycle do different jobs. The best option depends on what
                    rhythm you want the trip to keep.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Step 3
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-stone-950">Promote the stops</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    Keep only the cities that improve the route. A stop should reset, deepen, or
                    sharpen the journey, not just fill space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[linear-gradient(180deg,#efe7db_0%,#f5ede4_100%)] px-4 py-8 md:px-8 md:py-12">
            <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2.25rem] border border-stone-200/80 bg-[#171411] p-8 text-white shadow-[0_30px_90px_rgba(34,30,25,0.16)] md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-400">
                  Featured route
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  {primaryRoute.routeLabel} is the cleanest way to understand what this site does.
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-300 md:text-lg">
                  {primaryRoute.overview}
                </p>
                <div className="mt-8 grid gap-3">
                  {primaryRoute.routePromise.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-stone-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={primaryRoute.href}
                    className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-950 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Open Seoul to Busan
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-200 transition-colors hover:border-white/30 hover:bg-white/5"
                  >
                    Why Route First
                  </Link>
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-stone-200/80 bg-white/80 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                  Compare the route
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                  One corridor, four completely different trip personalities.
                </h2>
                <div className="mt-8 grid gap-4">
                  {transportCards.map((transport) => (
                    <div
                      key={transport.mode}
                      className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                            {transport.label}
                          </p>
                          <h3 className="mt-2 font-serif text-3xl text-stone-950">
                            {transport.routeGroupLabel}
                          </h3>
                        </div>
                        <div className="text-right text-sm text-stone-500">
                          <p>{transport.totalTravelTime}</p>
                          <p>{transport.totalDistance}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-stone-700">{transport.summary}</p>
                      <p className="mt-3 text-sm leading-7 text-stone-500">{transport.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="route-notes"
            className="bg-[linear-gradient(180deg,#f5ede4_0%,#f7f3ec_100%)] px-4 py-8 md:px-8 md:py-12"
          >
            <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-stone-200/80 bg-white/70 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                    Route notes
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                    The point is not to stop more. The point is to stop better.
                  </h2>
                </div>
                <Link
                  href={primaryRoute.href}
                  className="rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
                >
                  See the full guide
                </Link>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-4">
                {primaryRoute.editorialNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5 text-sm leading-7 text-stone-700"
                  >
                    {note}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {featuredStops.slice(0, 3).map((stop) => (
                  <div
                    key={stop.city}
                    className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {stop.routeRole}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-stone-950">{stop.city}</h3>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{stop.whyItEarnsTime}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-500">{stop.stayAdvice}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[linear-gradient(180deg,#f7f3ec_0%,#efe7db_100%)] px-4 pb-12 pt-2 md:px-8 md:pb-16">
            <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-stone-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(247,243,236,0.88))] p-8 shadow-[0_25px_80px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Independent editorial project
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                    Built to help travelers choose a better sequence, not just collect more pins.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-stone-700 md:text-lg">
                    RoadToKorea is organized around route logic, stopover value, and practical trip
                    pacing. The goal is clarity: which city changes the journey, which one simply
                    services it, and when the direct option is better than forcing another stop.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white/85 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      What you can expect
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">
                      Clear route comparisons, city pages that justify their place, and a calmer
                      editorial tone than generic travel listicles.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-white/85 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Where to start
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">
                      Start with Seoul to Busan if you want the clearest example, then branch into
                      anchors, hubs, and quieter detours only when they improve the line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
      <Footer />
    </main>
  );
}
