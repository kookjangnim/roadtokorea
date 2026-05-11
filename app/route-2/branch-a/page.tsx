import Link from 'next/link';
import { route2BranchA } from '@/data/routeBranches';

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

          <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/12 p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur md:p-10">
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
                  className="group rounded-[1.75rem] border border-stone-200 bg-white/88 p-6 shadow-[0_20px_60px_rgba(34,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/20 hover:bg-white"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-stone-950 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
                      Stop {index + 1}
                    </span>
                    <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-600">
                      {city.role}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 transition-colors group-hover:text-stone-700">
                    {city.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-650">{city.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
