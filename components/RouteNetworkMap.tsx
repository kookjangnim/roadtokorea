'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  routeNetworkCities,
  routeNetworkRoutes,
  type RouteNetworkCity,
  type RouteNetworkRoute,
} from '@/data/routeNetwork';

function getCityMarkerClass(city: RouteNetworkCity, isActive: boolean) {
  if (city.kind === 'anchor') {
    return isActive ? 'fill-stone-950 stroke-white' : 'fill-stone-700 stroke-white';
  }

  if (city.kind === 'junction') {
    return isActive ? 'fill-amber-500 stroke-white' : 'fill-amber-300 stroke-white';
  }

  if (city.kind === 'future') {
    return isActive ? 'fill-stone-500 stroke-white' : 'fill-stone-300 stroke-white';
  }

  return isActive ? 'fill-stone-950 stroke-white' : 'fill-white stroke-stone-500';
}

function CityMarker({
  city,
  isActive,
}: {
  city: RouteNetworkCity;
  isActive: boolean;
}) {
  const markerClass = getCityMarkerClass(city, isActive);

  if (city.kind === 'junction') {
    return (
      <g className="transition-opacity duration-300">
        <rect
          x={city.x - 2.2}
          y={city.y - 2.2}
          width="4.4"
          height="4.4"
          transform={`rotate(45 ${city.x} ${city.y})`}
          className={`${markerClass} stroke-[0.75] transition-all duration-300`}
        />
      </g>
    );
  }

  const radius = city.kind === 'anchor' ? 2.6 : city.kind === 'future' ? 1.8 : 2.1;

  return (
    <circle
      cx={city.x}
      cy={city.y}
      r={radius}
      className={`${markerClass} stroke-[0.75] transition-all duration-300`}
    />
  );
}

export default function RouteNetworkMap() {
  const [hoveredRouteId, setHoveredRouteId] = useState<string | null>(null);
  const [expandedRouteId, setExpandedRouteId] = useState(routeNetworkRoutes[0]?.id ?? '');

  const activeRouteId = hoveredRouteId ?? expandedRouteId;
  const expandedRoute = routeNetworkRoutes.find((route) => route.id === expandedRouteId);

  const activeCitySlugs = useMemo(() => {
    const activeRoute = routeNetworkRoutes.find((route) => route.id === activeRouteId);
    return new Set(activeRoute?.citySlugs ?? []);
  }, [activeRouteId]);

  return (
    <section className="bg-[linear-gradient(180deg,#efe7db_0%,#f7f3ec_100%)] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[2.25rem] border border-stone-200/80 bg-white/80 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur">
            <div className="border-b border-stone-200 px-6 py-5 md:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Route Network
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                See Korea as connected routes, not isolated pins.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
                Hover a route to highlight its line. Click a card to open the cities that shape
                that journey, including junctions where one trip can branch into another.
              </p>
            </div>

            <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_70%_20%,rgba(37,111,143,0.13),transparent_34%),linear-gradient(145deg,#fbf7ef,#efe5d8)] md:aspect-[16/9]">
              <svg
                viewBox="0 0 100 100"
                role="img"
                aria-label="Editorial route map of Korea"
                className="h-full w-full"
              >
                <path
                  d="M39 7 C31 17, 31 33, 36 45 C40 55, 39 68, 48 78 C57 89, 69 96, 78 91 C88 85, 86 69, 82 55 C78 43, 84 30, 76 18 C68 6, 51 1, 39 7 Z"
                  className="fill-white/82 stroke-stone-300"
                  strokeWidth="0.6"
                />
                <path
                  d="M74 22 C82 28, 84 38, 80 46"
                  className="fill-none stroke-sky-200/80"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {routeNetworkRoutes.map((route: RouteNetworkRoute) => {
                  const isActive = route.id === activeRouteId;
                  return (
                    <path
                      key={route.id}
                      d={route.path}
                      fill="none"
                      stroke={route.color}
                      strokeWidth={isActive ? 2.35 : 1.05}
                      strokeLinecap="round"
                      strokeDasharray={route.id === 'future-inland' ? '2 2' : undefined}
                      className={`transition-all duration-300 ${
                        isActive ? 'opacity-100 drop-shadow-sm' : 'opacity-25'
                      }`}
                    />
                  );
                })}

                {Object.values(routeNetworkCities).map((city) => {
                  const isActive = activeCitySlugs.has(city.slug);
                  return (
                    <g key={city.slug} className={isActive ? 'opacity-100' : 'opacity-45'}>
                      <CityMarker city={city} isActive={isActive} />
                      <text
                        x={city.x + 3}
                        y={city.y + 1.3}
                        className={`select-none text-[3px] font-semibold ${
                          isActive ? 'fill-stone-950' : 'fill-stone-500'
                        }`}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-stone-200/80 bg-[#171411] p-6 text-white shadow-[0_30px_90px_rgba(34,30,25,0.16)] md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-400">
              Choose a route
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {routeNetworkRoutes.map((route) => {
                const isExpanded = expandedRouteId === route.id;

                return (
                  <button
                    key={route.id}
                    type="button"
                    onMouseEnter={() => setHoveredRouteId(route.id)}
                    onMouseLeave={() => setHoveredRouteId(null)}
                    onFocus={() => setHoveredRouteId(route.id)}
                    onBlur={() => setHoveredRouteId(null)}
                    onClick={() => setExpandedRouteId(route.id)}
                    className={`rounded-[1.5rem] border p-5 text-left transition-all duration-300 ${
                      isExpanded
                        ? 'border-white/30 bg-white/12'
                        : 'border-white/10 bg-white/5 hover:border-white/24 hover:bg-white/8'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                          {route.label}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl leading-tight text-white">
                          {route.title}
                        </h3>
                      </div>
                      <span
                        className="mt-1 h-3 w-3 rounded-full"
                        style={{ backgroundColor: route.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{route.summary}</p>
                  </button>
                );
              })}
            </div>

            {expandedRoute && (
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    Expanded cities
                  </p>
                  <Link
                    href={expandedRoute.href}
                    className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:text-amber-100"
                  >
                    Open route
                  </Link>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                  {expandedRoute.citySlugs.map((slug) => {
                    const city = routeNetworkCities[slug];
                    return (
                      <Link
                        key={`${expandedRoute.id}-${slug}`}
                        href={city.href}
                        className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-black/15 px-4 py-3 text-sm text-stone-200 transition-colors hover:border-white/24 hover:bg-white/8"
                      >
                        <span>{city.name}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                          {city.kind}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
