'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RouteData, TransportMode } from '@/data/routeStopovers';
import TransportModeTabs from '@/components/routes/TransportModeTabs';
import RouteMapSection from '@/components/routes/RouteMapSection';
import StopoverCitiesCard from '@/components/routes/StopoverCitiesCard';
import HotelBookingCard from '@/components/routes/HotelBookingCard';

interface RoutePageClientProps {
  routeData: RouteData;
  fromCity: string;
  toCity: string;
}

const TRANSPORT_ORDER: TransportMode[] = ['KTX', 'car', 'bus', 'bicycle'];

export default function RoutePageClient({
  routeData,
  fromCity,
  toCity,
}: RoutePageClientProps) {
  const [selectedMode, setSelectedMode] = useState<TransportMode>('KTX');
  const currentRoute = routeData.transports[selectedMode];
  const transportCards = TRANSPORT_ORDER.map((mode) => routeData.transports[mode]);
  const recommendedStayCity =
    currentRoute.stopovers[currentRoute.stopovers.length - 1] ?? currentRoute.stopovers[0];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_44%,#efe7db_100%)] px-6 py-8 text-stone-900 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white/75 shadow-[0_35px_90px_rgba(34,30,25,0.08)] backdrop-blur">
          <div className="grid gap-8 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Route guide
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-stone-950 md:text-7xl">
                {fromCity} to {toCity}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                {routeData.headline}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
                {routeData.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {routeData.bestUseCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-stone-950 p-6 text-white md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-400">
                How to read this route
              </p>
              <p className="mt-4 text-base leading-8 text-stone-200">
                {routeData.destinationPitch}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    Best fast option
                  </p>
                  <p className="mt-2 font-serif text-2xl">{routeData.transports.KTX.label}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {routeData.transports.KTX.totalTravelTime}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    Most flexible
                  </p>
                  <p className="mt-2 font-serif text-2xl">{routeData.transports.car.label}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {routeData.transports.car.totalTravelTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <TransportModeTabs
            selectedMode={selectedMode}
            onModeChange={setSelectedMode}
          />
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <RouteMapSection transportRoute={currentRoute} />

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Selected mode
              </p>
              <h2 className="mt-2 font-serif text-3xl text-stone-950">
                {currentRoute.label} via {currentRoute.routeName}
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-700">{currentRoute.summary}</p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{currentRoute.bestFor}</p>
                </div>
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Tradeoff
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{currentRoute.tradeoff}</p>
                </div>
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Stop pattern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    {currentRoute.stopPattern}
                  </p>
                </div>
              </div>
            </section>

            {recommendedStayCity && <HotelBookingCard cityName={recommendedStayCity.city} />}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Compare the route
              </p>
              <h2 className="mt-2 font-serif text-4xl text-stone-950">
                Same corridor, different trip logic.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              The goal is not just to reach Busan. It is to choose the version of the route that
              matches your pace and the kinds of stops you want to keep.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {transportCards.map((transport) => (
              <button
                key={transport.mode}
                type="button"
                onClick={() => setSelectedMode(transport.mode)}
                className={`rounded-[1.75rem] border p-5 text-left transition-colors ${
                  selectedMode === transport.mode
                    ? 'border-stone-950 bg-stone-950 text-white'
                    : 'border-stone-200 bg-stone-50 text-stone-800 hover:border-stone-400 hover:bg-white'
                }`}
              >
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                    selectedMode === transport.mode ? 'text-stone-300' : 'text-stone-500'
                  }`}
                >
                  {transport.totalTravelTime}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{transport.label}</h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    selectedMode === transport.mode ? 'text-stone-200' : 'text-stone-600'
                  }`}
                >
                  {transport.summary}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <div className="border-b border-stone-200 px-6 py-6 md:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Stopover sequence
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-950">
              The cities that make this route feel authored.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
              These are not generic suggestions. They are the places that earn time because they
              change the rhythm, context, or emotional shape of the move from Seoul to Busan.
            </p>
          </div>

          <div>
            {currentRoute.stopovers.map((stopover, index) => (
              <StopoverCitiesCard
                key={`${currentRoute.mode}-${stopover.citySlug}`}
                stopover={stopover}
                isLast={index === currentRoute.stopovers.length - 1}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 flex justify-between gap-4 rounded-[2rem] border border-stone-200 bg-white px-6 py-5 shadow-sm">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Next move
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
              After the route choice is clear, you can open the individual city guides for the stops
              you actually want to keep.
            </p>
          </div>
          <Link
            href="/"
            className="self-start rounded-full border border-stone-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-800 transition-colors hover:border-stone-950 hover:bg-stone-950 hover:text-white"
          >
            Back to routes
          </Link>
        </section>
      </div>
    </main>
  );
}
