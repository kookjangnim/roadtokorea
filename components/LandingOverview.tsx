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
    title: 'I need a first Korea route that will not miss.',
    body: 'Go straight into Tier 1. These are the cities that can carry a short trip, a first visit, or a high-stakes itinerary.',
    href: '/tier-1/cities',
    cta: 'Open Icons',
  },
  {
    label: 'Mode 02',
    title: 'I have already seen the headline stops.',
    body: 'Tier 2 is where the trip starts feeling more personal. These cities reward slower pacing and deeper neighborhood curiosity.',
    href: '/tier-2/cities',
    cta: 'Open Hubs',
  },
  {
    label: 'Mode 03',
    title: 'I want the side of Korea people usually skip.',
    body: 'Tier 4 is for texture, atmosphere, and places that feel like discoveries instead of social-media obligations.',
    href: '/tier-4/cities',
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
              Start Here
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white md:text-6xl">
              Use the site like a route editor, not a content feed.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              The point is not to scroll every city. The point is to pick the version of Korea that
              fits your trip energy, then let the city guides and stories sharpen the route.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  What You Get
                </p>
                <p className="mt-4 font-serif text-3xl text-white">
                  {stats.featuredCities + stats.culturalStops + stats.hiddenGems}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  curated city entry points, grouped by travel depth instead of popularity alone.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Live Signal
                </p>
                <p className="mt-4 font-serif text-3xl text-white">{stats.latestStories}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  recent story pages that show where the editorial attention is active right now.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-amber-200/20 bg-[linear-gradient(135deg,rgba(191,153,107,0.18),rgba(255,255,255,0.03))] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200/80">
                Quick Read
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-200">
                If this is your first trip, start with Icons. If you want a Korea that feels less
                templated, move into Hubs. If you want stories worth telling later, take the Detours.
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
                  <span className="text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                    →
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
