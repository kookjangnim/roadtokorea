import Link from 'next/link';
import { getAllRouteData } from '@/data/routeStopovers';
import { getRouteSlugForRoute } from '@/data/routeRegistry';
import RoutePageShell from '@/components/routes/RoutePageShell';

export default function RoutesIndexPage() {
  const routes = getAllRouteData();

  return (
    <RoutePageShell activeRouteSlug="route-1">
      <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_50%,#efe7db_100%)] px-6 py-10 text-stone-900 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <header className="rounded-[2.5rem] border border-stone-200/80 bg-white/78 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              Route Index
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
              Choose the line first, then decide which cities deserve time.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
              Each route has its own logic: direct transfer, inland depth, coastal continuity, or
              slower regional pacing. Start with the route that matches the trip you actually want.
            </p>
          </header>

          <section className="mt-8 grid gap-5 lg:grid-cols-2">
            {routes.map((routeData) => {
              const routeSlug = getRouteSlugForRoute(routeData);

              return (
                <Link
                  key={routeSlug}
                  href={`/${routeSlug}`}
                  className="group rounded-[2rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_20px_60px_rgba(34,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-600">
                      Route {routeData.routeCode}
                    </span>
                    <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      {routeData.from} to {routeData.to}
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-950">
                    {routeData.headline}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-stone-700 md:text-base md:leading-8">
                    {routeData.overview}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {routeData.bestUseCases.slice(0, 4).map((useCase) => (
                      <span
                        key={useCase}
                        className="rounded-[1rem] border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                    Open route
                  </span>
                </Link>
              );
            })}
          </section>
        </div>
      </main>
    </RoutePageShell>
  );
}
