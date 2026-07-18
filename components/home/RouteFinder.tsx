'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

export type RouteFinderOption = {
  code: string;
  from: string;
  to: string;
  href: string;
};

interface RouteFinderProps {
  routes: RouteFinderOption[];
}

export default function RouteFinder({ routes }: RouteFinderProps) {
  const router = useRouter();
  const [from, setFrom] = useState(routes[0]?.from ?? '');
  const routesFromOrigin = useMemo(
    () => routes.filter((route) => route.from === from),
    [from, routes],
  );
  const [to, setTo] = useState(routes[0]?.to ?? '');
  const selectedRoute =
    routes.find((route) => route.from === from && route.to === to) ?? routesFromOrigin[0];
  const origins = [...new Set(routes.map((route) => route.from))];

  function handleOriginChange(nextOrigin: string) {
    const firstMatch = routes.find((route) => route.from === nextOrigin);
    setFrom(nextOrigin);
    setTo(firstMatch?.to ?? '');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedRoute) router.push(selectedRoute.href);
  }

  return (
    <form className="route-finder" onSubmit={handleSubmit}>
      <div className="route-finder__heading">
        <span className="route-finder__eyebrow">Plan by route</span>
        <span className="route-finder__status" aria-live="polite">
          {selectedRoute ? `Route ${selectedRoute.code} available` : 'Choose a route'}
        </span>
      </div>

      <div className="route-finder__controls">
        <div className="route-finder__field">
          <label htmlFor="route-finder-from">From</label>
          <select
            id="route-finder-from"
            value={from}
            onChange={(event) => handleOriginChange(event.target.value)}
          >
            {origins.map((origin) => (
              <option key={origin} value={origin}>
                {origin}
              </option>
            ))}
          </select>
        </div>

        <span className="route-finder__arrow" aria-hidden="true">→</span>

        <div className="route-finder__field">
          <label htmlFor="route-finder-to">To</label>
          <select
            id="route-finder-to"
            value={to}
            onChange={(event) => setTo(event.target.value)}
          >
            {routesFromOrigin.map((route) => (
              <option key={route.href} value={route.to}>
                {route.to}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={!selectedRoute}>
          Find my route
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
