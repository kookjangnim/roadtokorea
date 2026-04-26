import Link from 'next/link';

interface LandingOverviewProps {
  stats: {
    featuredCities: number;
    culturalStops: number;
    hiddenGems: number;
    latestStories: number;
  };
  tags: string[];
}

export default function LandingOverview({ stats, tags }: LandingOverviewProps) {
  const quickTags = tags.slice(0, 4);

  return (
    <section className="border-t border-gray-200 bg-stone-50 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              Start Here
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              A clearer landing page for choosing where your Korea trip should begin.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              This guide is organized like a travel fieldbook, not an endless blog roll.
              Start with iconic cities, move into cultural hubs, then branch into quieter
              detours that feel more local and less over-recommended.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tier-1/cities"
              className="rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-900"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Tier 1
              </p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Icons</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {stats.featuredCities} anchor destinations for first-time planning and major-city itineraries.
              </p>
            </Link>

            <Link
              href="/tier-2/cities"
              className="rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-900"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Tier 2
              </p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Hubs</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {stats.culturalStops} regional bases with stronger neighborhood texture and repeat-trip depth.
              </p>
            </Link>

            <Link
              href="/tier-4/cities"
              className="rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-900"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Tier 4
              </p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">Detours</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {stats.hiddenGems} smaller places for travelers who want texture instead of checklist tourism.
              </p>
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-stone-900 p-8 text-stone-100 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
            How To Browse
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">01</p>
              <h3 className="mt-2 font-serif text-2xl">Choose your route shape</h3>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                Decide whether you want flagship cities, culture-heavy bases, or quieter side trips first.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">02</p>
              <h3 className="mt-2 font-serif text-2xl">Use fresh story signals</h3>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                {stats.latestStories} recent articles surface what the site is actively exploring right now.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">03</p>
              <h3 className="mt-2 font-serif text-2xl">Jump into a city fast</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {quickTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
