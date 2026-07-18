import Image from 'next/image';
import Link from 'next/link';
import { getCityImageSlots } from '@/data/cityImageSlots';
import { route2BranchA } from '@/data/routeBranches';

function getBranchCityImage(citySlug: string) {
  const slots = getCityImageSlots(citySlug);

  return (
    slots?.slots.hero.asset ??
    slots?.slots.route.asset ??
    slots?.slots.street.asset ??
    '/images/clipartkorea/wonju/tc00240110506.jpg'
  );
}

const branchHeroImages = ['yeongwol', 'jeongseon', 'taebaek'].map((citySlug) => ({
  citySlug,
  image: getBranchCityImage(citySlug),
}));

const branchUseCases = [
  {
    title: 'Choose it when Route 2 feels too direct',
    body:
      'The standard Route 2 line moves cleanly from Seoul toward Wonju, Pyeongchang, Daegwallyeong, and Gangneung. Branch 2A is for travelers who want the mountain interior to become the main story before the coast appears.',
  },
  {
    title: 'Use fewer stops, but let them matter',
    body:
      'This branch works best as a slow two- or three-night extension. Wonju can be the hinge, Yeongwol can carry the emotional center, and Jeongseon or Taebaek can decide whether the trip leans toward market revival or coal-highland memory.',
  },
  {
    title: 'Exit through Samcheok only when the coast should continue',
    body:
      'Samcheok should not be a random finish. It is strongest when the traveler will keep reading the East Sea through Route 4, where caves, cliffs, ports, and National Route 7 make the inland depth pay off.',
  },
];

const pacingNotes = [
  'A quick version can keep Wonju, Yeongwol, and Samcheok while treating Jecheon, Jeongseon, and Taebaek as optional context.',
  'A deeper version should sleep inland before the coast, otherwise the branch becomes a long drive with too many emotional beats compressed into one day.',
  'Winter and highland weather matter here. The route should be planned with more slack than the main Seoul-to-Gangneung corridor.',
  'This branch is not the best first Korea itinerary. It is better for repeat visitors, road trips, and travelers who enjoy regional history.',
];

export const metadata = {
  title: `${route2BranchA.label}: ${route2BranchA.title}`,
  description: route2BranchA.summary,
};

export default function Route2BranchAPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#171411_0%,#f7f1e8_24%,#efe6da_100%)] text-stone-900">
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/route-2"
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur transition-colors hover:bg-white/18"
          >
            Back to Route 2
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/15 bg-white/12 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-300">
                {route2BranchA.label}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] md:text-7xl">
                {route2BranchA.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-200 md:text-lg">
                {route2BranchA.summary}
              </p>
            </div>

            <div className="grid min-h-[24rem] grid-cols-3 gap-1 bg-black/20 p-1 lg:min-h-full">
              {branchHeroImages.map((item, index) => (
                <div key={item.citySlug} className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.citySlug} Branch 2A travel context`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 18vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.52))]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[2rem] border border-stone-200 bg-white/85 p-7 shadow-[0_25px_70px_rgba(34,30,25,0.08)] md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Branch Logic
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-950">
                A branch, not a new flagship route.
              </h2>
              <p className="mt-5 text-sm leading-8 text-stone-700">{route2BranchA.routeLogic}</p>
            </article>

            <div className="grid gap-4">
              {route2BranchA.cities.map((city, index) => (
                <Link
                  key={city.slug}
                  href={city.href}
                  className="group grid overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/88 shadow-[0_20px_60px_rgba(34,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/20 hover:bg-white md:grid-cols-[13rem_minmax(0,1fr)]"
                >
                  <div className="relative min-h-[12rem] bg-stone-100">
                    <Image
                      src={getBranchCityImage(city.slug)}
                      alt={`${city.name} travel stop on Branch 2A`}
                      fill
                      sizes="(max-width: 768px) 100vw, 13rem"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 shadow-sm">
                      Stop {index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-600">
                      {city.role}
                    </span>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 transition-colors group-hover:text-stone-700">
                      {city.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-650">{city.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/88 p-7 shadow-[0_25px_70px_rgba(34,30,25,0.08)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  When this branch earns the detour
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
                  Treat Branch 2A like a short regional series.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-stone-600">
                The point is not to add every possible Gangwon stop. The point is to decide whether
                Route 2 should remain a clean mountain-to-sea line or become a deeper inland story
                before it joins the coast.
              </p>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {branchUseCases.map((item) => (
                <article key={item.title} className="border border-stone-200 bg-stone-50 p-5">
                  <h3 className="font-serif text-2xl leading-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white/88 p-7 shadow-[0_25px_70px_rgba(34,30,25,0.08)] md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Pacing notes
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
                Give the inland section enough room to breathe.
              </h2>
              <div className="mt-6 grid gap-3">
                {pacingNotes.map((note) => (
                  <div
                    key={note}
                    className="border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-700"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-stone-200 bg-[#171411] p-7 text-white shadow-[0_25px_70px_rgba(34,30,25,0.16)] md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                Read next
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight">
                Rejoin the coast or return to the main route.
              </h2>
              <p className="mt-5 text-sm leading-7 text-stone-300">
                After Taebaek, the branch should make a deliberate choice. Continue to Samcheok if
                the East Sea line is the reward, or return to the main Route 2 guide if the traveler
                mainly needs a cleaner Seoul-to-Gangneung crossing.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                That choice keeps the page useful: it explains not only where the branch goes, but
                also when a traveler should ignore it and protect a simpler itinerary.
                In that sense, the branch is a filter, not a mandate.
              </p>
              <div className="mt-6 grid gap-3">
                <Link
                  href="/route-4/samcheok"
                  className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
                >
                  Open Samcheok coast chapter
                </Link>
                <Link
                  href="/route-2"
                  className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
                >
                  Back to Route 2 main guide
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}
