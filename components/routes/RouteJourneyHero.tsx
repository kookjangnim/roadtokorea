'use client';

import { useEffect, useMemo, useState } from 'react';
import type { RouteStopover, TransportRouteVariant } from '@/data/routeStopovers';

interface RouteJourneyHeroProps {
  routeCode: string;
  transportRoute: TransportRouteVariant;
  fromCity: string;
  toCity: string;
}

type PlotPoint = {
  city: string;
  x: number;
  y: number;
  role?: string;
  detail?: string;
  supportNote?: string;
  chapterNote?: string;
};

const VIEWBOX_WIDTH = 1000;
const VIEWBOX_HEIGHT = 520;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function buildPlotPoints(transportRoute: TransportRouteVariant, fromCity: string, toCity: string) {
  const coordinates = [
    {
      city: fromCity,
      lat: transportRoute.routePath[0]?.[0] ?? 37.5665,
      lng: transportRoute.routePath[0]?.[1] ?? 126.978,
      role: 'Departure',
      detail: `The line leaves ${fromCity} and starts reading like ${transportRoute.routeGroupLabel.toLowerCase()}.`,
      supportNote: transportRoute.chooseWhen,
      chapterNote: 'The first question is not where to stop, but which southbound logic you want to keep.',
    },
    ...transportRoute.stopovers.map((stopover) => ({
      city: stopover.city,
      lat: stopover.coordinates.lat,
      lng: stopover.coordinates.lng,
      role: stopover.routeRole,
      detail: stopover.whyItEarnsTime,
      supportNote: stopover.decisionReason ?? stopover.stayAdvice,
      chapterNote: stopover.nextLegLogic ?? stopover.terrainTransition ?? stopover.pitch,
    })),
    {
      city: toCity,
      lat: transportRoute.routePath[transportRoute.routePath.length - 1]?.[0] ?? 35.1796,
      lng: transportRoute.routePath[transportRoute.routePath.length - 1]?.[1] ?? 129.0756,
      role: 'Arrival',
      detail: `${toCity} is where this line cashes out. The value depends on how much shape you kept on the way down.`,
      supportNote: transportRoute.bestFor,
      chapterNote: transportRoute.tradeoff,
    },
  ];

  const lats = coordinates.map((point) => point.lat);
  const lngs = coordinates.map((point) => point.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  return coordinates.map((point, index) => {
    const lngProgress = (point.lng - minLng) / Math.max(maxLng - minLng, 0.001);
    const latProgress = (point.lat - minLat) / Math.max(maxLat - minLat, 0.001);
    const x = 80 + lngProgress * (VIEWBOX_WIDTH - 160);
    const yBase = VIEWBOX_HEIGHT - (80 + latProgress * (VIEWBOX_HEIGHT - 180));
    const wave = Math.sin(index * 0.8) * 22;

    return {
      city: point.city,
      x: clamp(x, 72, VIEWBOX_WIDTH - 72),
      y: clamp(yBase + wave, 72, VIEWBOX_HEIGHT - 72),
      role: point.role,
      detail: point.detail,
      supportNote: point.supportNote,
      chapterNote: point.chapterNote,
    } satisfies PlotPoint;
  });
}

function buildSmoothPath(points: PlotPoint[]) {
  if (!points.length) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 1; index < points.length; index += 1) {
    const current = points[index];
    const previous = points[index - 1];
    const controlX = (previous.x + current.x) / 2;

    path += ` C ${controlX} ${previous.y}, ${controlX} ${current.y}, ${current.x} ${current.y}`;
  }

  return path;
}

function getActiveIndex(points: PlotPoint[], progress: number) {
  if (points.length <= 1) return 0;
  const scaled = progress * (points.length - 1);
  return clamp(Math.floor(scaled + 0.0001), 0, points.length - 1);
}

function getUpcomingStopover(stopovers: RouteStopover[], activeCity: string) {
  const activeIndex = stopovers.findIndex((stopover) => stopover.city === activeCity);
  if (activeIndex >= 0) {
    return stopovers[activeIndex + 1] ?? null;
  }
  return stopovers[0] ?? null;
}

export default function RouteJourneyHero({
  routeCode,
  transportRoute,
  fromCity,
  toCity,
}: RouteJourneyHeroProps) {
  const [progress, setProgress] = useState(0);
  const chapterCount = Math.max(transportRoute.stopovers.length + 2, 2);

  const plotPoints = useMemo(
    () => buildPlotPoints(transportRoute, fromCity, toCity),
    [fromCity, toCity, transportRoute]
  );
  const pathData = useMemo(() => buildSmoothPath(plotPoints), [plotPoints]);
  const activeIndex = getActiveIndex(plotPoints, progress);
  const activePoint = plotPoints[activeIndex];
  const upcomingStopover = getUpcomingStopover(transportRoute.stopovers, activePoint?.city ?? '');

  useEffect(() => {
    const startTime = window.performance.now();
    const duration = Math.max(9600, chapterCount * 2200);
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = (now - startTime) % duration;
      const nextProgress = elapsed / duration;
      setProgress(nextProgress);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [chapterCount, transportRoute.id]);

  const progressWidth = `${Math.max(8, progress * 100)}%`;

  return (
    <section className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-[linear-gradient(180deg,#151515_0%,#1c1917_100%)] text-white shadow-[0_35px_90px_rgba(34,30,25,0.18)]">
      <div className="grid gap-8 px-8 py-8 md:px-10 md:py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-stone-400">
            Animated route overview
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
            Route {routeCode} moves differently depending on which line you keep.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300 md:text-base md:leading-8">
            This is the representative motion for the currently selected route line. The path
            draws itself from {fromCity} to {toCity}, then pauses at the cities most likely to
            change the journey.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                Active route line
              </p>
              <p className="mt-2 font-serif text-2xl text-white">
                Route {transportRoute.routeCode}
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                {transportRoute.routeGroupLabel} via {transportRoute.label}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                Live chapter
              </p>
              <p className="mt-3 font-serif text-3xl text-white">
                {activePoint?.city ?? fromCity}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                {activePoint?.role ?? 'Route chapter'}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                {activePoint?.detail ?? transportRoute.summary}
              </p>
              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#f59e0b_0%,#fcd34d_100%)] transition-[width] duration-200"
                  style={{ width: progressWidth }}
                />
              </div>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {activePoint?.supportNote ?? 'The animation loops so the corridor keeps reading like an active route, not a static line.'}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
          <svg
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            className="h-[26rem] w-full"
            role="img"
            aria-label={`Animated route map from ${fromCity} to ${toCity}`}
          >
            <defs>
              <linearGradient id="routeHeroLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>
            </defs>

            <path
              d={pathData}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d={pathData}
              fill="none"
              stroke="url(#routeHeroLine)"
              strokeWidth="8"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={{
                strokeDashoffset: 1 - progress,
              }}
            />

            {plotPoints.map((point, index) => (
              <g key={`${point.city}-${index}`}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={index === activeIndex ? 11 : index === 0 || index === plotPoints.length - 1 ? 10 : 7}
                  fill={index === 0 || index === plotPoints.length - 1 ? '#fcd34d' : '#ffffff'}
                  opacity={0.95}
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={index === activeIndex ? 28 : index === 0 || index === plotPoints.length - 1 ? 20 : 16}
                  fill={index === activeIndex ? 'rgba(251,191,36,0.24)' : 'rgba(252,211,77,0.12)'}
                />
                <text
                  x={point.x}
                  y={point.y - 24}
                  textAnchor="middle"
                  className="fill-white text-[18px] font-semibold tracking-[0.12em]"
                >
                  {point.city}
                </text>
                {point.role ? (
                  <text
                    x={point.x}
                    y={point.y + 30}
                    textAnchor="middle"
                    className="fill-stone-300 text-[13px] uppercase tracking-[0.18em]"
                  >
                    {point.role}
                  </text>
                ) : null}
              </g>
            ))}
          </svg>

          <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                Why this chapter matters
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-200">
                {activePoint?.chapterNote ?? transportRoute.pacingNote}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                Next handoff
              </p>
              <p className="mt-3 font-serif text-2xl text-white">
                {upcomingStopover?.city ?? toCity}
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                {upcomingStopover?.routeRole ?? 'Arrival chapter'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
