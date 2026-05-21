'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
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

function getVisibleRoutes(selectedRouteId: string, showAllRoutes: boolean) {
  if (showAllRoutes) return routeNetworkRoutes;

  const leadingRoutes = routeNetworkRoutes.slice(0, 3);
  const selectedRoute = routeNetworkRoutes.find((route) => route.id === selectedRouteId);

  if (!selectedRoute || leadingRoutes.some((route) => route.id === selectedRoute.id)) {
    return leadingRoutes;
  }

  return [selectedRoute, ...leadingRoutes.slice(0, 2)];
}

const LABEL_PLACEMENTS: Record<string, { x: number; y: number }> = {
  goseong: { x: 12, y: -16 },
  sokcho: { x: 12, y: -2 },
  yangyang: { x: 12, y: 12 },
  inje: { x: 12, y: 8 },
  gangneung: { x: 12, y: -14 },
  donghae: { x: 12, y: -4 },
  samcheok: { x: 12, y: 10 },
  mokpo: { x: -62, y: -10 },
  haenam: { x: -66, y: 6 },
  wando: { x: 12, y: 16 },
  boseong: { x: -70, y: -6 },
  suncheon: { x: 12, y: -22 },
  yeosu: { x: 12, y: 12 },
  namhae: { x: -74, y: 12 },
  tongyeong: { x: 12, y: -18 },
  geoje: { x: 12, y: 12 },
  busan: { x: 12, y: -8 },
};

function getLabelPlacement(city: RouteNetworkCity) {
  return LABEL_PLACEMENTS[city.slug] ?? {
    x: city.kind === 'anchor' ? 13 : 11,
    y: 5,
  };
}

function RealKoreaMap({
  activeRoute,
  activeCitySlugsKey,
}: {
  activeRoute: RouteNetworkRoute;
  activeCitySlugsKey: string;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    let mapInstance: { remove: () => void } | null = null;
    let cancelled = false;

    async function mountMap() {
      if (!mapRef.current || typeof window === 'undefined') return;

      const L = await import('leaflet');
      if (cancelled || !mapRef.current) return;

      setIsClient(true);

      const map = L.map(mapRef.current, {
        center: [36.2, 128.0],
        zoom: 8,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      L.control.zoom({ position: 'topright' }).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const inactiveRoutes = routeNetworkRoutes.filter((route) => route.id !== activeRoute.id);
      const orderedRoutes = [...inactiveRoutes, activeRoute];
      const activeCitySlugSet = new Set(activeCitySlugsKey ? activeCitySlugsKey.split('|') : []);

      orderedRoutes.forEach((route) => {
        const isActive = route.id === activeRoute.id;
        const coords = route.citySlugs
          .map((slug) => routeNetworkCities[slug])
          .filter(Boolean)
          .map((city) => [city.lat, city.lng] as [number, number]);

        L.polyline(coords, {
          color: route.color,
          weight: isActive ? 7 : 2.5,
          opacity: isActive ? 0.98 : 0.13,
          dashArray: route.id.startsWith('branch-') ? '6 8' : undefined,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
      });

      const orderedCities = [
        ...Object.values(routeNetworkCities).filter((city) => !activeCitySlugSet.has(city.slug)),
        ...Object.values(routeNetworkCities).filter((city) => activeCitySlugSet.has(city.slug)),
      ];

      orderedCities.forEach((city) => {
        const isActive = activeCitySlugSet.has(city.slug);
        const size = city.kind === 'anchor' ? 18 : city.kind === 'branch' ? 12 : 15;
        const radius = city.kind === 'junction' ? '3px' : '999px';
        const transform = city.kind === 'junction' ? 'rotate(45deg)' : 'none';
        const background = isActive
          ? city.kind === 'junction'
            ? '#d69b2d'
            : '#171411'
          : city.kind === 'anchor'
            ? '#6b6258'
            : city.kind === 'junction'
              ? '#f0c36b'
              : '#ffffff';
        const labelPlacement = getLabelPlacement(city);
        const label = isActive
          ? `<span style="
              position:absolute;
              left:${labelPlacement.x}px;
              top:${labelPlacement.y}px;
              padding:3px 7px;
              border-radius:999px;
              background:rgba(255,255,255,.92);
              color:#171411;
              font-size:12px;
              line-height:1;
              font-weight:850;
              white-space:nowrap;
              box-shadow:0 6px 18px rgba(0,0,0,.22);
              pointer-events:none;
            ">${city.name}</span>`
          : '';

        const icon = L.divIcon({
          className: '',
          html: `<div style="
            display:flex;
            align-items:center;
            position:relative;
            min-width:${isActive ? 150 : size}px;
            height:46px;
            opacity:${isActive ? 1 : 0.26};
          ">
            <span style="
              position:absolute;
              left:0;
              top:${(46 - size) / 2}px;
              display:block;
              width:${size}px;
              height:${size}px;
              border:2px solid white;
              border-radius:${radius};
              background:${background};
              transform:${transform};
              box-shadow:0 8px 24px rgba(0,0,0,.22);
            "></span>
            ${label}
          </div>`,
          iconSize: [isActive ? 164 : size, 46],
          iconAnchor: [size / 2, size / 2],
        });

        L.marker([city.lat, city.lng], { icon }).addTo(map);
      });

      const activeCoords = activeRoute.citySlugs
        .map((slug) => routeNetworkCities[slug])
        .filter(Boolean)
        .map((city) => [city.lat, city.lng] as [number, number]);

      if (activeCoords.length) {
        const viewportWidth = window.innerWidth;
        const fitPadding =
          viewportWidth >= 1280
            ? {
                paddingTopLeft: [430, 92] as [number, number],
                paddingBottomRight: [350, 190] as [number, number],
              }
            : viewportWidth >= 768
              ? {
                  paddingTopLeft: [64, 310] as [number, number],
                  paddingBottomRight: [64, 64] as [number, number],
                }
              : {
                  paddingTopLeft: [32, 360] as [number, number],
                  paddingBottomRight: [32, 56] as [number, number],
                };

        map.fitBounds(L.latLngBounds(activeCoords.map(([lat, lng]) => L.latLng(lat, lng))), {
          ...fitPadding,
          maxZoom: viewportWidth >= 1280 ? 8 : 7,
          animate: false,
        });
      }

      window.setTimeout(() => map.invalidateSize(), 80);

      mapInstance = map;
    }

    mountMap();

    return () => {
      cancelled = true;
      if (mapInstance) mapInstance.remove();
    };
  }, [activeRoute, activeCitySlugsKey]);

  return (
    <div className="relative h-full w-full">
      {!isClient && <div className="h-full w-full animate-pulse bg-stone-900" />}
      <div ref={mapRef} className={`${isClient ? 'block' : 'hidden'} h-full w-full`} />
    </div>
  );
}

export default function TerrainRouteHero({ routes }: TerrainRouteHeroProps) {
  const defaultRouteId = routeNetworkRoutes.find((route) => route.id === 'route-1')?.id ?? routeNetworkRoutes[0]?.id ?? '';
  const [selectedRouteId, setSelectedRouteId] = useState(defaultRouteId);
  const [showAllRoutes, setShowAllRoutes] = useState(false);

  const activeRoute = routeNetworkRoutes.find((route) => route.id === selectedRouteId) ?? routeNetworkRoutes[0];
  const activeScene = ROUTE_SCENES[activeRoute?.id ?? ''] ?? ROUTE_SCENES['route-1'];
  const routeDataByHref = useMemo(() => new Map(routes.map((route) => [route.href, route])), [routes]);
  const activeRouteData = activeRoute ? routeDataByHref.get(activeRoute.href) : undefined;
  const activeCitySlugsKey = activeRoute?.citySlugs.join('|') ?? '';
  const visibleRoutes = getVisibleRoutes(selectedRouteId, showAllRoutes);

  if (!activeRoute) return null;

  return (
    <section className="relative mt-2 min-h-screen overflow-hidden bg-[#11100e] shadow-[0_-8px_24px_rgba(17,16,14,0.08)]">
      {/* Full-screen map background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <RealKoreaMap
          activeRoute={activeRoute}
          activeCitySlugsKey={activeCitySlugsKey}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,.28)_0%,rgba(12,11,10,.06)_38%,rgba(12,11,10,.24)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[48rem] bg-[linear-gradient(90deg,rgba(12,11,10,.7)_0%,rgba(12,11,10,.42)_45%,rgba(12,11,10,0)_100%)] lg:block" />
      </div>

      {/* Content overlay - positioned in map's empty space (top-left corner) */}
      <div className="relative z-30 mx-auto max-w-[1800px] px-4 py-5 md:px-8 md:py-8 xl:px-12">
        <div className="grid min-h-[calc(100svh-3.5rem)] content-start gap-4 md:min-h-[calc(100svh-4rem)] md:gap-5 xl:grid-cols-[360px_minmax(560px,1fr)_300px] xl:items-start">
          {/* Left side - Route info card */}
          <div className="min-w-0 xl:pt-2">
            <div className="w-full min-w-0 max-w-lg rounded-2xl border border-white/14 bg-black/60 p-5 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-2xl md:p-6 xl:max-w-none">
              <div
                key={activeRoute.id}
                className="min-w-0 animate-[routeHeroFade_.32s_ease-out]"
              >
                <span className="inline-flex border border-amber-200/20 bg-amber-100/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-100 backdrop-blur">
                  {activeScene.eyebrow}
                </span>
                <h1 className="mt-4 max-w-full break-words font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  {getCompactTitle(activeRoute)}
                </h1>

                <p className="mt-4 max-w-full text-base leading-7 text-stone-200 md:text-lg">
                  {activeRouteData?.destinationPitch ?? activeRoute.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={activeRoute.href}
                  className="inline-flex w-full justify-center bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-950 shadow-[0_12px_28px_rgba(255,255,255,.18)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Open Route
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex w-full justify-center border border-white/14 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-200 transition-colors hover:border-white/30 hover:bg-white/8 sm:w-auto"
                >
                  How it works
                </Link>
              </div>
            </div>

            <div className="mt-4 w-full min-w-0 max-w-lg rounded-2xl border border-white/12 bg-black/48 p-3 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-xl xl:hidden">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {visibleRoutes.map((route) => {
                  const isActive = selectedRouteId === route.id;

                  return (
                    <button
                      key={route.id}
                      type="button"
                      onClick={() => setSelectedRouteId(route.id)}
                      className={`min-w-[11.5rem] border px-4 py-3 text-left transition-all ${
                        isActive
                          ? 'border-white/30 bg-white/14'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                          {route.label}
                        </p>
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: route.color }} />
                      </div>
                      <h3 className="mt-2 line-clamp-2 font-serif text-base leading-tight text-white">
                        {route.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
              {!showAllRoutes && routeNetworkRoutes.length > visibleRoutes.length && (
                <button
                  type="button"
                  onClick={() => setShowAllRoutes(true)}
                  className="mt-2 w-full border border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-300 transition-colors hover:border-white/24 hover:bg-white/8"
                >
                  All routes
                </button>
              )}
            </div>
          </div>

          <div className="hidden xl:block" aria-hidden="true" />

          {/* Right side - Route selector */}
          <div className="hidden xl:block xl:justify-self-end xl:pt-2">
            <div className="w-[300px] rounded-2xl border border-white/12 bg-black/48 p-5 backdrop-blur-xl">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-400">
                Routes
              </p>
              <div className="flex flex-col gap-3">
                {visibleRoutes.map((route) => {
                  const isActive = selectedRouteId === route.id;

                  return (
                    <button
                      key={route.id}
                      type="button"
                      onClick={() => setSelectedRouteId(route.id)}
                      className={`border px-5 py-4 text-left transition-all ${
                        isActive
                          ? 'border-white/30 bg-white/12'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                          {route.label}
                        </p>
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: route.color }} />
                      </div>
                      <h3 className="mt-2 font-serif text-base leading-tight text-white">
                        {route.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
              {!showAllRoutes && routeNetworkRoutes.length > visibleRoutes.length && (
                <button
                  type="button"
                  onClick={() => setShowAllRoutes(true)}
                  className="mt-4 w-full border border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-300 transition-colors hover:border-white/24 hover:bg-white/8"
                >
                  All routes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[20] h-24 bg-gradient-to-t from-black/38 to-transparent md:h-28" />
    </section>
  );
}
