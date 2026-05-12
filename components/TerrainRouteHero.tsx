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

function getMarkerRadius(city: RouteNetworkCity) {
  if (city.kind === 'anchor') return 2.4;
  if (city.kind === 'junction') return 2.1;
  if (city.kind === 'branch') return 1.55;
  return 1.85;
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
  activeCitySlugs,
}: {
  activeRoute: RouteNetworkRoute;
  activeCitySlugs: Set<string>;
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
        center: [36.7, 127.95],
        zoom: 7,
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

      orderedRoutes.forEach((route) => {
        const isActive = route.id === activeRoute.id;
        const coords = route.citySlugs
          .map((slug) => routeNetworkCities[slug])
          .filter(Boolean)
          .map((city) => [city.lat, city.lng] as [number, number]);

        L.polyline(coords, {
          color: route.color,
          weight: isActive ? 7 : 3,
          opacity: isActive ? 0.98 : 0.28,
          dashArray: route.id.startsWith('branch-') ? '6 8' : undefined,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
      });

      const orderedCities = [
        ...Object.values(routeNetworkCities).filter((city) => !activeCitySlugs.has(city.slug)),
        ...Object.values(routeNetworkCities).filter((city) => activeCitySlugs.has(city.slug)),
      ];

      orderedCities.forEach((city) => {
        const isActive = activeCitySlugs.has(city.slug);
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
            opacity:${isActive ? 1 : 0.48};
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
        map.fitBounds(L.latLngBounds(activeCoords.map(([lat, lng]) => L.latLng(lat, lng))), {
          paddingTopLeft: [560, 90],
          paddingBottomRight: [100, 215],
          maxZoom: 7,
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
  }, [activeRoute, activeCitySlugs]);

  return (
    <div className="relative h-full w-full">
      {!isClient && <div className="h-full w-full animate-pulse bg-stone-900" />}
      <div ref={mapRef} className={`${isClient ? 'block' : 'hidden'} h-full w-full`} />
    </div>
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
    <section className="relative min-h-[calc(100vh-5.5rem)] overflow-hidden">
      {/* Full-screen map background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <RealKoreaMap activeRoute={activeRoute} activeCitySlugs={activeCitySlugs} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-[1000] mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-7xl flex-col justify-between gap-8 px-4 py-8 md:px-8 md:py-12">
        {/* Floating card - top left */}
        <div className="max-w-md rounded-2xl border border-white/12 bg-black/48 p-5 backdrop-blur-xl md:p-6 lg:max-w-lg">
          <div className="mb-4">
            <span className="inline-flex border border-amber-200/20 bg-amber-100/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-amber-100 backdrop-blur">
              {activeScene.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
              {getCompactTitle(activeRoute)}
            </h1>
          </div>

          <p className="mb-4 text-sm leading-6 text-stone-200">
            {activeRouteData?.destinationPitch ?? activeRoute.summary}
          </p>

          <p className="mb-4 text-xs leading-5 text-stone-400">{activeScene.terrain}</p>

          <div className="mb-5 flex flex-wrap gap-1.5">
            {activeCities.slice(0, 4).map((city) => (
              <Link
                key={`${activeRoute.id}-${city.slug}`}
                href={city.href}
                className="border border-white/12 bg-white/8 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-200 transition-colors hover:border-white/24 hover:bg-white/14"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={activeRoute.href}
              className="bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-950 transition-transform hover:-translate-y-0.5"
            >
              Open Route
            </Link>
            <Link
              href="#how-it-works"
              className="border border-white/18 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white/30 hover:bg-white/8"
            >
              How it works
            </Link>
          </div>
        </div>

        {/* Route selector - bottom */}
        <div>
          <div className="rounded-2xl border border-white/12 bg-black/48 p-4 backdrop-blur-xl lg:p-5">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-400">
              Select Route
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
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
                    className={`border px-3 py-2.5 text-left transition-all ${
                      isActive
                        ? 'border-white/30 bg-white/12'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                        {route.label}
                      </p>
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: route.color }} />
                    </div>
                    <h3 className="mt-1 truncate font-serif text-sm leading-tight text-white">
                      {route.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
