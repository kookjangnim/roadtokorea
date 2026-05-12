'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  routeNetworkCities,
  routeNetworkRoutes,
  type RouteNetworkCity,
  type RouteNetworkRoute,
} from '@/data/routeNetwork';
import type { RouteData } from '@/data/routeStopovers';

interface TerrainRouteHeroProps {
  routes: RouteData[];
}

interface RouteScene {
  image: string;
  eyebrow: string;
  terrain: string;
}

const ROUTE_SCENES: Record<string, RouteScene> = {
  'route-1': {
    image: '/images/destinations/Busan_A_breathtaking_cinematic_travel_photograph_of_haeu_e9b5575ea7.jpeg',
    eyebrow: 'Inland spine',
    terrain: 'Ridges, old roads, river basins, and the long pull toward Busan.',
  },
  'route-2': {
    image: '/images/cities/gangneung.jpg',
    eyebrow: 'Eastbound mountains',
    terrain: 'The road climbs through ski country, Odaesan, and Daegwallyeong before the sea opens.',
  },
  'route-3': {
    image: '/images/cities/seoraksan.jpg',
    eyebrow: 'Seorak approach',
    terrain: 'Lakes, borderland towns, valleys, and the pass decision into Seoraksan.',
  },
  'route-4': {
    image: '/images/cities/yangyang.jpg',
    eyebrow: 'Route 7 coast',
    terrain: 'A north-to-south East Sea line where mountains fall almost directly into the water.',
  },
  'route-5': {
    image: '/images/cities/jeonju.jpg',
    eyebrow: 'Jeolla inland',
    terrain: 'Food cities, old capitals, wetlands, and the softer southern descent toward Yeosu.',
  },
  'route-6': {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mokpo%20Yudalsan.jpg',
    eyebrow: 'West coast memory',
    terrain: 'Ports, fortress towns, mudflats, islands, and the southwest harbor finish.',
  },
  'route-7': {
    image: '/images/cities/tongyeong.jpg',
    eyebrow: 'South coast arc',
    terrain: 'Dadohae and Hallyeohaesang turn the map into islands, tea fields, harbors, and naval memory.',
  },
  'route-8': {
    image: '/images/cities/gwangju.jpg',
    eyebrow: 'Honam land end',
    terrain: 'Central Korea drops into Jeolla food, civic history, harbor air, and Haenam land-end symbolism.',
  },
  'branch-2a': {
    image: '/images/destinations/Wonju_Hiker_on_mountain_overlooking_city_1b7177f12b.jpeg',
    eyebrow: 'Gangwon branch',
    terrain: 'Wonju, Jecheon, Yeongwol, Jeongseon, and Taebaek prove how mountain towns reshape the route.',
  },
};

function getCompactTitle(route: RouteNetworkRoute) {
  return route.title.replace(', ', ' / ');
}

function getMarkerRadius(city: RouteNetworkCity) {
  if (city.kind === 'anchor') return 2.4;
  if (city.kind === 'junction') return 2.1;
  if (city.kind === 'branch') return 1.55;
  return 1.85;
}

function TerrainReliefMap({
  activeRoute,
  activeCitySlugs,
}: {
  activeRoute: RouteNetworkRoute;
  activeCitySlugs: Set<string>;
}) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Terrain relief map of Korea with route lines" className="h-full w-full">
      <defs>
        <radialGradient id="terrainGlow" cx="64%" cy="25%" r="72%">
          <stop offset="0%" stopColor="#f4ecd8" />
          <stop offset="42%" stopColor="#c9b58d" />
          <stop offset="76%" stopColor="#81694b" />
          <stop offset="100%" stopColor="#35291e" />
        </radialGradient>
        <linearGradient id="seaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d2d35" />
          <stop offset="52%" stopColor="#213b42" />
          <stop offset="100%" stopColor="#102127" />
        </linearGradient>
        <filter id="terrainTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="4" seed="18" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.34" />
          </feComponentTransfer>
        </filter>
        <filter id="routeShadow">
          <feDropShadow dx="0" dy="0.7" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.38" />
        </filter>
      </defs>

      <rect width="100" height="100" fill="url(#seaGradient)" />
      <path
        d="M42 3 C50 1,58 3,65 8 C72 13,77 20,79 29 C80 36,78 42,79 49 C81 60,86 70,84 81 C82 91,73 97,62 96 C52 95,46 88,40 79 C34 69,33 58,29 48 C25 37,22 26,26 17 C29 10,34 5,42 3 Z"
        fill="url(#terrainGlow)"
        stroke="#e8dcc3"
        strokeWidth="0.55"
      />
      <path
        d="M42 3 C50 1,58 3,65 8 C72 13,77 20,79 29 C80 36,78 42,79 49 C81 60,86 70,84 81 C82 91,73 97,62 96 C52 95,46 88,40 79 C34 69,33 58,29 48 C25 37,22 26,26 17 C29 10,34 5,42 3 Z"
        filter="url(#terrainTexture)"
        opacity="0.64"
      />
      <path
        d="M30 92 C34 89,39 89,43 92 C40 96,34 97,30 92 Z"
        fill="#9f8c68"
        opacity="0.68"
        stroke="#e8dcc3"
        strokeWidth="0.35"
      />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M65 10 C68 18,70 26,70 34 C72 43,75 50,75 60 C77 68,79 75,78 84" stroke="#4c3b2b" strokeWidth="2.5" opacity="0.38" />
        <path d="M61 13 C64 22,65 31,66 40 C68 49,70 59,72 70" stroke="#f4e5bc" strokeWidth="0.8" opacity="0.34" />
        <path d="M50 35 C56 40,61 47,64 55 C68 62,71 70,75 78" stroke="#4a3627" strokeWidth="2.1" opacity="0.30" />
        <path d="M45 42 C52 47,58 55,61 64 C63 71,66 78,70 84" stroke="#f6e4b8" strokeWidth="0.72" opacity="0.28" />
        <path d="M38 60 C43 65,48 69,55 72 C60 75,66 79,72 84" stroke="#5a3d28" strokeWidth="1.7" opacity="0.26" />
        <path d="M34 19 C42 18,48 20,55 24" stroke="#fff2ca" strokeWidth="0.55" opacity="0.28" />
        <path d="M33 31 C42 30,51 32,60 36" stroke="#fff2ca" strokeWidth="0.5" opacity="0.24" />
        <path d="M34 47 C45 45,55 47,66 53" stroke="#fff2ca" strokeWidth="0.48" opacity="0.22" />
        <path d="M38 68 C48 66,58 68,72 76" stroke="#fff2ca" strokeWidth="0.46" opacity="0.20" />
      </g>

      <g fill="#eadfca" fontSize="2.2" fontWeight="700" letterSpacing="0.04em" opacity="0.72">
        <text x="69" y="35" transform="rotate(76 69 35)">Taebaek</text>
        <text x="58" y="58" transform="rotate(62 58 58)">Sobaek</text>
        <text x="37" y="82">Dadohae</text>
      </g>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#routeShadow)">
        {routeNetworkRoutes.map((route) => {
          const isActive = route.id === activeRoute.id;
          return (
            <path
              key={route.id}
              d={route.path}
              stroke={route.color}
              strokeWidth={isActive ? 1.45 : 0.58}
              opacity={isActive ? 1 : 0.2}
              strokeDasharray={route.id.startsWith('branch-') ? '2 2' : undefined}
            />
          );
        })}
      </g>

      {Object.values(routeNetworkCities).map((city) => {
        const isActive = activeCitySlugs.has(city.slug);
        const isJunction = city.kind === 'junction';
        return (
          <g key={city.slug} opacity={isActive ? 1 : 0.26}>
            {isJunction ? (
              <rect
                x={city.x - getMarkerRadius(city)}
                y={city.y - getMarkerRadius(city)}
                width={getMarkerRadius(city) * 2}
                height={getMarkerRadius(city) * 2}
                transform={`rotate(45 ${city.x} ${city.y})`}
                fill={isActive ? '#f7c948' : '#e5c36c'}
                stroke="#fffaf0"
                strokeWidth="0.55"
              />
            ) : (
              <circle
                cx={city.x}
                cy={city.y}
                r={getMarkerRadius(city)}
                fill={isActive ? '#11100e' : city.kind === 'anchor' ? '#5b5146' : '#f6f1e7'}
                stroke="#fffaf0"
                strokeWidth="0.55"
              />
            )}
            {isActive && (
              <text
                x={city.x + 2.8}
                y={city.y + 1.1}
                fill="#11100e"
                stroke="#fffaf0"
                strokeWidth="0.34"
                paintOrder="stroke"
                fontSize={city.kind === 'anchor' ? 3.1 : 2.45}
                fontWeight="800"
              >
                {city.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function TerrainRouteHero({ routes }: TerrainRouteHeroProps) {
  const defaultRouteId = routeNetworkRoutes.find((route) => route.id === 'route-3')?.id ?? routeNetworkRoutes[0]?.id ?? '';
  const [selectedRouteId, setSelectedRouteId] = useState(defaultRouteId);
  const [hoveredRouteId, setHoveredRouteId] = useState<string | null>(null);

  const activeRouteId = hoveredRouteId ?? selectedRouteId;
  const activeRoute = routeNetworkRoutes.find((route) => route.id === activeRouteId) ?? routeNetworkRoutes[0];
  const selectedRoute = routeNetworkRoutes.find((route) => route.id === selectedRouteId) ?? activeRoute;
  const activeScene = ROUTE_SCENES[activeRoute?.id ?? ''] ?? ROUTE_SCENES['route-1'];
  const routeDataByHref = useMemo(() => new Map(routes.map((route) => [route.href, route])), [routes]);
  const activeRouteData = activeRoute ? routeDataByHref.get(activeRoute.href) : undefined;
  const activeCities = activeRoute
    ? activeRoute.citySlugs.map((slug) => routeNetworkCities[slug]).filter(Boolean)
    : [];
  const activeCitySlugs = useMemo(
    () => new Set(activeRoute?.citySlugs ?? []),
    [activeRoute?.citySlugs]
  );

  if (!activeRoute || !selectedRoute) return null;

  return (
    <section className="relative overflow-hidden bg-[#16130f] px-4 pb-8 pt-6 text-white md:px-8 md:pb-12 md:pt-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.26]"
        style={{ backgroundImage: `url("${activeScene.image}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,10,0.96)_0%,rgba(15,13,10,0.78)_42%,rgba(15,13,10,0.92)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(22,19,15,0)_0%,#efe7db_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div className="flex flex-col justify-between gap-6 py-4 lg:min-h-[calc(100vh-5rem)] lg:max-h-[calc(100vh-5rem)] lg:py-6">
          <div>
            <span className="inline-flex w-fit border border-white/[0.15] bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-stone-200 backdrop-blur">
              Terrain-first Korea
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-[0.96] text-white sm:text-4xl md:text-6xl">
              Korea is shaped by mountains.
              <span className="block text-stone-300">Choose the road that follows them.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-200">
              RoadToKorea turns Seoul departures into route-led journeys through ridges, coasts,
              old cities, harbor towns, and junctions where one trip can become another.
            </p>
          </div>

          <div className="hidden border border-white/[0.12] bg-black/[0.28] p-4 backdrop-blur-md md:p-5 lg:block">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-100">
                  {activeScene.eyebrow}
                </p>
                <h2 className="mt-1.5 font-serif text-2xl leading-tight text-white md:text-3xl">
                  {getCompactTitle(activeRoute)}
                </h2>
              </div>
              <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ backgroundColor: activeRoute.color }} />
            </div>
            <p className="mt-3 text-xs leading-6 text-stone-200">
              {activeRouteData?.destinationPitch ?? activeRoute.summary}
            </p>
            <p className="mt-2 text-xs leading-6 text-stone-400">{activeScene.terrain}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeCities.slice(0, 5).map((city) => (
                <Link
                  key={`${activeRoute.id}-${city.slug}`}
                  href={city.href}
                  className="border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-200 transition-colors hover:border-white/[0.30] hover:bg-white/[0.14]"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                href={activeRoute.href}
                className="bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Open Route
              </Link>
              <Link
                href="#how-it-works"
                className="border border-white/[0.18] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-200 transition-colors hover:border-white/[0.34] hover:bg-white/[0.08]"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border border-white/[0.12] bg-black/[0.30] shadow-[0_30px_110px_rgba(0,0,0,0.34)] backdrop-blur-md lg:my-4">
          <div className="grid lg:grid-rows-[minmax(28rem,1fr)_auto]">
            <div className="relative h-[25rem] bg-stone-900 md:h-[38rem] lg:h-[calc(100vh-15rem)] lg:min-h-[34rem] lg:max-h-[45rem]">
              <TerrainReliefMap activeRoute={activeRoute} activeCitySlugs={activeCitySlugs} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18))]" />
              <div className="pointer-events-none absolute left-4 top-4 border border-black/[0.10] bg-white/[0.82] px-4 py-3 text-stone-950 shadow-lg backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-600">
                  Relief map
                </p>
                <p className="mt-1 font-serif text-2xl leading-none">Routes follow terrain.</p>
              </div>
            </div>

            <div className="grid gap-2 border-t border-white/10 bg-[#15120f] p-3 sm:grid-cols-2 xl:grid-cols-3">
              {routeNetworkRoutes.map((route) => {
                const isActive = selectedRoute.id === route.id;

                return (
                  <button
                    key={route.id}
                    type="button"
                    onMouseEnter={() => setHoveredRouteId(route.id)}
                    onMouseLeave={() => setHoveredRouteId(null)}
                    onFocus={() => setHoveredRouteId(route.id)}
                    onBlur={() => setHoveredRouteId(null)}
                    onClick={() => setSelectedRouteId(route.id)}
                    className={`min-h-24 border px-3 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-white/[0.34] bg-white/[0.14]'
                        : 'border-white/[0.10] bg-white/[0.05] hover:border-white/[0.24] hover:bg-white/[0.10]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                        {route.label}
                      </p>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: route.color }} />
                    </div>
                    <h3 className="mt-2 font-serif text-lg leading-tight text-white">{route.title}</h3>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/[0.10] bg-black/[0.28] p-5 backdrop-blur-md lg:hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-100">
                    {activeScene.eyebrow}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl leading-tight text-white">
                    {getCompactTitle(activeRoute)}
                  </h2>
                </div>
                <span className="h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: activeRoute.color }} />
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-200">
                {activeRouteData?.destinationPitch ?? activeRoute.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeCities.slice(0, 6).map((city) => (
                  <Link
                    key={`mobile-${activeRoute.id}-${city.slug}`}
                    href={city.href}
                    className="border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-200"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link
                href={activeRoute.href}
                className="mt-6 inline-flex bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-950"
              >
                Open Route
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
