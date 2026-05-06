'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { RouteData, TransportMode } from '@/data/routeStopovers';

interface HeroSliderProps {
  routes: RouteData[];
}

const TRANSPORT_ORDER: TransportMode[] = ['KTX', 'car', 'bus', 'bicycle'];

export default function HeroSlider({ routes }: HeroSliderProps) {
  const initialRoute = useMemo(
    () => routes.find((route) => route.toSlug === 'busan') ?? routes[0],
    [routes]
  );
  const [selectedHref, setSelectedHref] = useState(initialRoute?.href ?? '');

  if (!initialRoute) {
    return null;
  }

  const activeRoute = routes.find((route) => route.href === selectedHref) ?? initialRoute;
  const previewModes = TRANSPORT_ORDER.map((mode) => activeRoute.transports[mode]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_44%,#efe7db_100%)] px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,91,46,0.16),transparent_34%),radial-gradient(circle_at_top_left,rgba(17,24,39,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white/60 shadow-[0_30px_90px_rgba(34,30,25,0.09)] backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
              <span className="inline-flex w-fit rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-stone-600">
                Route First
              </span>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
                Build the trip
                <span className="block text-stone-500">around the route.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
                Start with the corridor, compare the transport logic, then decide which cities
                deserve a real stop along the way.
              </p>

              <div className="mt-10 rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-6">
                <label
                  htmlFor="home-route"
                  className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500"
                >
                  Featured route
                </label>
                <select
                  id="home-route"
                  value={selectedHref}
                  onChange={(event) => setSelectedHref(event.target.value)}
                  className="mt-3 w-full rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4 font-serif text-3xl text-stone-950 outline-none transition-colors focus:border-stone-900"
                >
                  {routes.map((route) => (
                    <option key={route.href} value={route.href}>
                      {route.routeLabel}
                    </option>
                  ))}
                </select>

                <p className="mt-5 text-sm leading-7 text-stone-600">{activeRoute.overview}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeRoute.bestUseCases.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={activeRoute.href}
                    className="rounded-full bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                  >
                    Open Route Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200/80 bg-[linear-gradient(180deg,#221f1a_0%,#171411_100%)] px-8 py-10 text-white lg:border-l lg:border-t-0 md:px-10 md:py-14">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-stone-300">
                    {activeRoute.routeLabel}
                  </p>
                  <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                    {activeRoute.headline}
                  </h2>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    Stops that matter
                  </p>
                  <p className="mt-2 font-serif text-3xl">{previewModes[0].stopovers.length}</p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-200 md:text-base">
                {activeRoute.destinationPitch}
              </p>

              <div className="mt-8 grid gap-4">
                {previewModes.map((mode) => (
                  <div
                    key={mode.mode}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                          {mode.label}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl text-white">{mode.routeName}</h3>
                      </div>
                      <div className="text-right text-sm text-stone-300">
                        <p>{mode.totalTravelTime}</p>
                        <p>{mode.totalDistance}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-stone-200">{mode.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
