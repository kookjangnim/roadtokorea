'use client';

import { useEffect, useRef, useState } from 'react';
import type { CitySupportPoint, CitySupportProfile } from '@/data/citySupportProfiles';
import 'leaflet/dist/leaflet.css';

interface CitySupportMapProps {
  profile: CitySupportProfile;
}

const pointColors: Record<CitySupportPoint['kind'], string> = {
  recovery: '#b45309',
  stay: '#1d4ed8',
  food: '#15803d',
  mobility: '#374151',
  checkpoint: '#7c3aed',
};

const pointLabels: Record<CitySupportPoint['kind'], string> = {
  recovery: 'Recovery',
  stay: 'Stay',
  food: 'Food',
  mobility: 'Route',
  checkpoint: 'Checkpoint',
};

export default function CitySupportMap({ profile }: CitySupportMapProps) {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mapInstance: { remove: () => void } | null = null;
    let cancelled = false;

    async function mountMap() {
      if (!mapRef.current || typeof window === 'undefined') return;

      setIsClient(true);

      const L = await import('leaflet');
      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: false,
      }).setView([profile.mapCenter.lat, profile.mapCenter.lng], 11);

      L.control
        .zoom({
          position: 'bottomright',
        })
        .addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const bounds = L.latLngBounds(
        profile.points.map((point) => L.latLng(point.coordinates.lat, point.coordinates.lng))
      );

      profile.points.forEach((point) => {
        L.circleMarker([point.coordinates.lat, point.coordinates.lng], {
          radius: 8,
          color: pointColors[point.kind],
          weight: 2,
          fillColor: pointColors[point.kind],
          fillOpacity: 0.9,
        })
          .addTo(map)
          .bindPopup(
            `<div style="min-width: 210px"><strong>${point.name}</strong><br/>${point.summary}<br/><span style="color:#57534e">${point.note}</span></div>`
          );
      });

      map.fitBounds(bounds, {
        padding: [32, 32],
      });

      mapInstance = map;
    }

    mountMap();

    return () => {
      cancelled = true;
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [profile]);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/82 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur">
      <div className="border-b border-stone-200 px-6 py-5 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
          Local Support Map
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950 md:text-4xl">
          {profile.mapTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base md:leading-8">
          {profile.mapIntro}
        </p>
      </div>

      {!isClient && <div className="h-[26rem] animate-pulse bg-stone-100" />}
      <div
        ref={mapRef}
        className={`${isClient ? 'block' : 'hidden'} h-[26rem] w-full bg-stone-100`}
      />

      <div className="border-t border-stone-200 px-6 py-5 md:px-8">
        <div className="flex flex-wrap gap-3">
          {Object.entries(pointLabels).map(([kind, label]) => (
            <span
              key={kind}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: pointColors[kind as CitySupportPoint['kind']] }}
              />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {profile.points.map((point) => (
            <div
              key={point.id}
              className="rounded-[1.25rem] border border-stone-200 bg-stone-50/80 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {pointLabels[point.kind]}
                </span>
                {point.areaLabel && (
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-600">
                    {point.areaLabel}
                  </span>
                )}
              </div>
              <p className="mt-3 font-serif text-xl leading-tight text-stone-950">{point.name}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{point.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
