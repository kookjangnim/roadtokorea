'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { RouteData, TransportMode, TransportRouteVariant } from '@/data/routeStopovers';
import TransportModeTabs from '@/components/routes/TransportModeTabs';
import RouteMapSection from '@/components/routes/RouteMapSection';
import StopoverCitiesCard from '@/components/routes/StopoverCitiesCard';
import HotelBookingCard from '@/components/routes/HotelBookingCard';
import RouteJourneyHero from '@/components/routes/RouteJourneyHero';

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
  const [selectedVariantId, setSelectedVariantId] = useState(routeData.transports.KTX.id);
  const currentTransport = routeData.transports[selectedMode];
  const transportCards = TRANSPORT_ORDER.map((mode) => routeData.transports[mode]);
  const variantOptions = useMemo(() => currentTransport.variants ?? [], [currentTransport]);

  const currentVariant: TransportRouteVariant = useMemo(() => {
    if (!variantOptions.length) {
      return currentTransport;
    }
    return variantOptions.find((variant) => variant.id === selectedVariantId) ?? variantOptions[0];
  }, [currentTransport, selectedVariantId, variantOptions]);

  const handleModeChange = (mode: TransportMode) => {
    const nextTransport = routeData.transports[mode];
    setSelectedMode(mode);
    setSelectedVariantId(nextTransport.variants?.[0]?.id ?? nextTransport.id);
  };

  const supportCity =
    currentVariant.stopovers[currentVariant.stopovers.length - 1] ?? currentVariant.stopovers[0];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_44%,#efe7db_100%)] px-6 py-8 text-stone-900 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white/75 shadow-[0_35px_90px_rgba(34,30,25,0.08)] backdrop-blur">
          <div className="grid gap-8 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                Route guide
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700">
                  Route {routeData.routeCode}
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600">
                  Route {currentVariant.routeGroupCode} {currentVariant.routeGroupLabel}
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600">
                  Route {currentVariant.routeCode}
                </span>
              </div>
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
                How to use this page
              </p>
              <p className="mt-4 text-base leading-8 text-stone-200">
                {routeData.destinationPitch}
              </p>

              <div className="mt-8 grid gap-3">
                {routeData.routePromise.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <RouteJourneyHero
            routeCode={routeData.routeCode}
            transportRoute={currentVariant}
            fromCity={fromCity}
            toCity={toCity}
          />
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Editorial notes
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-950">
              What usually changes this route for the better.
            </h2>
            <div className="mt-6 space-y-4">
              {routeData.editorialNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Compare the corridor
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-950">
              Same southbound line, different route behavior.
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
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
                  <p
                    className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                      selectedMode === transport.mode ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    Route {transport.routeGroupCode} {transport.routeGroupLabel}
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
          </div>
        </section>

        <section className="mt-8">
          <TransportModeTabs
            selectedMode={selectedMode}
            onModeChange={handleModeChange}
          />
        </section>

        {variantOptions.length > 0 && (
          <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Route line inside {currentTransport.label}
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-950">
              {currentTransport.label} is not one fixed route.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
              The bigger question is not just which transport mode you choose, but which internal
              route logic fits your trip. Some versions stay direct, some lean inland, and some
              turn the whole journey into a coastal or river corridor.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {variantOptions.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`rounded-[1.75rem] border p-5 text-left transition-colors ${
                    selectedVariantId === variant.id
                      ? 'border-stone-950 bg-stone-950 text-white'
                      : 'border-stone-200 bg-stone-50 text-stone-800 hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                      selectedVariantId === variant.id ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {variant.totalTravelTime}
                  </p>
                  <p
                    className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                      selectedVariantId === variant.id ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    Route {variant.routeCode}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{variant.label}</h3>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      selectedVariantId === variant.id ? 'text-stone-200' : 'text-stone-600'
                    }`}
                  >
                    {variant.summary}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <RouteMapSection transportRoute={{ ...currentVariant, mode: currentTransport.mode }} />

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Current mode
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-600">
                  Route {currentVariant.routeGroupCode}
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-600">
                  Route {currentVariant.routeCode}
                </span>
              </div>
              <h2 className="mt-2 font-serif text-3xl text-stone-950">
                {currentTransport.label} via {currentVariant.routeName}
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-700">{currentVariant.summary}</p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{currentVariant.bestFor}</p>
                </div>
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Choose it when
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{currentVariant.chooseWhen}</p>
                </div>
                <div className="rounded-[1.5rem] bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Watch out for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{currentVariant.avoidWhen}</p>
                </div>
              </div>
            </section>

            {supportCity && <HotelBookingCard cityName={supportCity.city} />}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Support, not prescription
              </p>
              <h2 className="mt-2 font-serif text-4xl text-stone-950">
                Use these notes to shape your own route.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600">
              Nothing here needs to become a fixed itinerary. The point is to understand what each
              transport mode preserves, what it sacrifices, and which cities become more valuable
              if you decide to keep them.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-stone-50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Tradeoff
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{currentVariant.tradeoff}</p>
            </div>
            <div className="rounded-[1.75rem] bg-stone-50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Stop behavior
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{currentVariant.stopPattern}</p>
            </div>
            <div className="rounded-[1.75rem] bg-stone-50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Pacing note
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{currentVariant.pacingNote}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {currentVariant.planningNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4 text-sm leading-7 text-stone-700"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <div className="border-b border-stone-200 px-6 py-6 md:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Stopover sequence
            </p>
            <h2 className="mt-2 font-serif text-4xl text-stone-950">
              The cities that can shape this route if you keep them.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
              These are not mandatory route checkpoints. They are the cities most likely to improve
              the journey when you want more than a direct transfer from Seoul to Busan.
            </p>
          </div>

          <div>
            {currentVariant.stopovers.map((stopover, index) => (
              <StopoverCitiesCard
                key={`${selectedMode}-${currentVariant.id}-${stopover.citySlug}`}
                stopover={stopover}
                isLast={index === currentVariant.stopovers.length - 1}
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
              Once the corridor and transport logic feel clear, use the linked city guides only for
              the places that genuinely improve your version of the route.
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
