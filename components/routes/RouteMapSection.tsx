'use client';

import { useEffect, useRef, useState } from 'react';
import { TransportRoute } from '@/data/routeStopovers';
import 'leaflet/dist/leaflet.css';

interface RouteMapSectionProps {
  transportRoute: TransportRoute;
}

export default function RouteMapSection({
  transportRoute,
}: RouteMapSectionProps) {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mapInstance: { remove: () => void } | null = null;

    async function mountMap() {
      if (!mapRef.current || typeof window === 'undefined') return;

      setIsClient(true);

      const L = await import('leaflet');
      const firstPoint = transportRoute.routePath[0];
      const map = L.map(mapRef.current).setView([firstPoint[0], firstPoint[1]], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const routeCoordinates = transportRoute.routePath.map((coord) => [
        coord[0],
        coord[1],
      ]) as [number, number][];

      L.polyline(routeCoordinates, {
        color: '#1f2937',
        weight: 4,
        opacity: 0.8,
      }).addTo(map);

      transportRoute.stopovers.forEach((stopover) => {
        L.marker([stopover.coordinates.lat, stopover.coordinates.lng])
          .addTo(map)
          .bindPopup(
            `<div><strong>${stopover.city}</strong><br/>${stopover.travelTimeFromPrevious} from previous stop</div>`
          );
      });

      map.fitBounds(
        L.latLngBounds(routeCoordinates.map((coord) => L.latLng(coord[0], coord[1]))),
        { padding: [36, 36] }
      );

      mapInstance = map;
    }

    mountMap();

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [transportRoute]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
      <div className="border-b border-stone-200 px-6 py-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
          Route map
        </p>
        <h2 className="mt-2 font-serif text-3xl text-stone-950">{transportRoute.routeName}</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
          <span>{transportRoute.totalTravelTime}</span>
          <span>{transportRoute.totalDistance}</span>
          <span>{transportRoute.stopovers.length} stopovers</span>
        </div>
      </div>

      {!isClient && <div className="h-96 animate-pulse bg-stone-100" />}
      <div
        ref={mapRef}
        className={`${isClient ? 'block' : 'hidden'} h-96 w-full bg-stone-100`}
      />
    </section>
  );
}
