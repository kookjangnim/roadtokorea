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

const travelerModes = [
  {
    label: 'Mode 01',
    title: 'I want a first Korea trip that does not feel rushed.',
    body: 'Start with Tier 1. These are the anchor cities that can carry a first trip without forcing you into frantic movement.',
    href: '/route-1',
    cta: 'Open Anchors',
  },
  {
    label: 'Mode 02',
    title: 'I want to stay longer and read Korea more closely.',
    body: 'Tier 2 is where the route gets richer. These hubs reward slower pacing, repeat meals, and deeper neighborhood curiosity.',
    href: '/route-1',
    cta: 'Open Hubs',
  },
  {
    label: 'Mode 03',
    title: 'I want the Korea that appears when the itinerary relaxes.',
    body: 'Tier 4 is for texture, atmosphere, and smaller cities that only make sense when you stop optimizing every hour.',
    href: '/updated-cities',
    cta: 'Open Detours',
  },
];

export default function LandingOverview({ stats, tags }: LandingOverviewProps) {
  const quickTags = tags.slice(0, 5);

  return (
    <section className="border-t border-stone-800 bg-[linear-gradient(180deg,#161311_0%,#1f1a16_52%,#2a221d_100%)] px-4 py-20 text-stone-100 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
              Slow Travel Logic
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white md:text-6xl">
              Start in Seoul, then use the site like a slower route editor.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              The goal is not to stack as many cities as possible. The goal is to choose the right
              next stop from Seoul, then let the city guides and route logic shape a trip with more
              staying, less scrambling, and better memory.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Route Depth
                </p>
                <p className="mt-4 font-serif text-3xl text-white">
                  {stats.featuredCities + stats.culturalStops + stats.hiddenGems}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  curated city entry points, organized by pace and trip depth instead of popularity alone.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Live Signal
                </p>
                <p className="mt-4 font-serif text-3xl text-white">{stats.latestStories}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  recent route stories that show where the editorial attention is moving right now.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-amber-200/20 bg-[linear-gradient(135deg,rgba(191,153,107,0.18),rgba(255,255,255,0.03))] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200/80">
                Quick Read
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-200">
                If this is your first trip, choose a stronger second city from the Anchors. If you
                want a Korea that reveals more over time, move into Longer Stays. If you want a
                route that feels personal instead of optimized, take the Quiet Detours.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {quickTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {travelerModes.map((mode) => (
              <Link
                key={mode.title}
                href={mode.href}
                className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/10 md:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-500">
                  {mode.label}
                </p>
                <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white md:text-4xl">
                  {mode.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300 md:text-base">
                  {mode.body}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-100">
                    {mode.cta}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 group-hover:translate-x-1">
                    View Route
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
