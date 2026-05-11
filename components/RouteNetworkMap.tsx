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

function getKindLabel(kind: RouteNetworkCity['kind']) {
  if (kind === 'anchor') return 'Terminal';
  if (kind === 'junction') return 'Junction';
  if (kind === 'branch') return 'Branch';
  return 'Route city';
}

function getKindChipClass(kind: RouteNetworkCity['kind']) {
  if (kind === 'anchor') return 'border-white/10 bg-white/12 text-white';
  if (kind === 'junction') return 'border-amber-200/30 bg-amber-300/12 text-amber-100';
  if (kind === 'branch') return 'border-white/10 bg-white/8 text-stone-300';
  return 'border-white/10 bg-black/15 text-stone-300';
}

function getMarkerHtml(city: RouteNetworkCity, isActive: boolean) {
  const base =
    'display:flex;align-items:center;justify-content:center;border:2px solid white;box-shadow:0 8px 24px rgba(0,0,0,.22);';
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
        : city.kind === 'branch'
          ? '#a8a29a'
          : '#ffffff';

  return `<span style="${base}width:${size}px;height:${size}px;border-radius:${radius};background:${background};transform:${transform};"></span>`;
}

function getRouteCoordinates(route: RouteNetworkRoute) {
  return route.citySlugs
    .map((slug) => routeNetworkCities[slug])
    .filter(Boolean)
    .map((city) => [city.lat, city.lng] as [number, number]);
}

export default function RouteNetworkMap() {
  const [hoveredRouteId, setHoveredRouteId] = useState<string | null>(null);
  const [expandedRouteId, setExpandedRouteId] = useState(routeNetworkRoutes[0]?.id ?? '');
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const activeRouteId = hoveredRouteId ?? expandedRouteId;
  const expandedRoute = routeNetworkRoutes.find((route) => route.id === expandedRouteId);

  const activeCitySlugs = useMemo(() => {
    const activeRoute = routeNetworkRoutes.find((route) => route.id === activeRouteId);
    return new Set(activeRoute?.citySlugs ?? []);
  }, [activeRouteId]);

  const expandedRouteCities = expandedRoute
    ? expandedRoute.citySlugs.map((slug) => routeNetworkCities[slug]).filter(Boolean)
    : [];
  const expandedJunctions = expandedRouteCities.filter((city) => city.kind === 'junction');
  const expandedBranches = expandedRouteCities.filter((city) => city.kind === 'branch');

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

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      routeNetworkRoutes.forEach((route) => {
        const isActive = route.id === activeRouteId;
        L.polyline(getRouteCoordinates(route), {
          color: route.color,
          weight: isActive ? 6 : 3,
          opacity: isActive ? 0.95 : 0.25,
          dashArray: route.id.startsWith('branch-') ? '6 8' : undefined,
        }).addTo(map);
      });

      Object.values(routeNetworkCities).forEach((city) => {
        const isActive = activeCitySlugs.has(city.slug);
        const icon = L.divIcon({
          className: '',
          html: `<div style="display:flex;align-items:center;gap:6px;opacity:${isActive ? 1 : 0.46};">
            ${getMarkerHtml(city, isActive)}
            <span style="font-size:12px;font-weight:800;color:#171411;text-shadow:0 1px 0 #fff,0 -1px 0 #fff,1px 0 0 #fff,-1px 0 0 #fff;">${city.name}</span>
          </div>`,
          iconSize: [112, 24],
          iconAnchor: [8, 12],
        });

        L.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div><strong>${city.name}</strong><br/>${getKindLabel(city.kind)}<br/><a href="${city.href}">Open city</a></div>`
          );
      });

      const activeRoute = routeNetworkRoutes.find((route) => route.id === activeRouteId);
      const activeCoords = activeRoute ? getRouteCoordinates(activeRoute) : [];

      if (activeCoords.length) {
        map.fitBounds(L.latLngBounds(activeCoords.map(([lat, lng]) => L.latLng(lat, lng))), {
          padding: [42, 42],
        });
      }

      mapInstance = map;
    }

    mountMap();

    return () => {
      cancelled = true;
      if (mapInstance) mapInstance.remove();
    };
  }, [activeCitySlugs, activeRouteId]);

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
                See the routes on the real map of Korea.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
                Hover a route to highlight it on OpenStreetMap. Click a card to open the cities
                that shape that journey, including junctions where one trip can branch into
                another.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-stone-700" />
                  Terminal
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                  <span className="h-2 w-2 rotate-45 bg-amber-400" />
                  Junction city
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2">
                  <span className="h-px w-6 border-t border-dashed border-stone-500" />
                  Branch line
                </span>
              </div>
            </div>

            <div className="relative h-[32rem] bg-stone-100 md:h-[38rem]">
              {!isClient && <div className="h-full w-full animate-pulse bg-stone-100" />}
              <div ref={mapRef} className={`${isClient ? 'block' : 'hidden'} h-full w-full`} />
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-stone-200/80 bg-[#171411] p-6 text-white shadow-[0_30px_90px_rgba(34,30,25,0.16)] md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-400">
              Choose a route
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-4">
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
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                      Expanded cities
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-white">
                      {expandedRoute.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-stone-300">
                        {expandedRouteCities.length} cities
                      </span>
                      {expandedJunctions.length > 0 && (
                        <span className="rounded-full border border-amber-200/30 bg-amber-300/12 px-3 py-2 text-amber-100">
                          {expandedJunctions.length} junction
                        </span>
                      )}
                      {expandedBranches.length > 0 && (
                        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-stone-300">
                          {expandedBranches.length} branch
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={expandedRoute.href}
                    className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:text-amber-100"
                  >
                    Open route
                  </Link>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                  {expandedRouteCities.map((city) => (
                    <Link
                      key={`${expandedRoute.id}-${city.slug}`}
                      href={city.href}
                      className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-black/15 px-4 py-3 text-sm text-stone-200 transition-colors hover:border-white/24 hover:bg-white/8"
                    >
                      <span>{city.name}</span>
                      <span
                        className={`rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${getKindChipClass(
                          city.kind
                        )}`}
                      >
                        {getKindLabel(city.kind)}
                      </span>
                    </Link>
                  ))}
                </div>
                {(expandedJunctions.length > 0 || expandedBranches.length > 0) && (
                  <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/15 p-4 text-xs leading-6 text-stone-300">
                    {expandedJunctions.length > 0 && (
                      <p>
                        Junction cities on this line:{' '}
                        <span className="text-white">
                          {expandedJunctions.map((city) => city.name).join(', ')}
                        </span>
                      </p>
                    )}
                    {expandedBranches.length > 0 && (
                      <p className={expandedJunctions.length > 0 ? 'mt-2' : undefined}>
                        Branch cities currently attached:{' '}
                        <span className="text-white">
                          {expandedBranches.map((city) => city.name).join(', ')}
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
