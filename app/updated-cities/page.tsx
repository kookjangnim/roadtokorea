import Link from 'next/link';
import { updatedCities } from '@/data/updatedCities';

export default function UpdatedCitiesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_48%,#efe7db_100%)] px-4 py-10 text-stone-900 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-stone-200/80 bg-white/78 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
            Updated Cities
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-stone-950 md:text-7xl">
            The city pages that are already strong enough to open first.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
            This is the curated list of cities that have already been upgraded to the current
            support-page standard. If you want the finished pages first, start here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-stone-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900"
            >
              Back to home
            </Link>
            <Link
              href="/routes/seoul/busan"
              className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
            >
              Open route guide
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {updatedCities.map((city) => (
            <Link
              key={city.slug}
              href={city.href}
              className="group rounded-[1.75rem] border border-stone-200/80 bg-white/82 p-6 shadow-[0_20px_60px_rgba(34,30,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-600">
                  {city.tier.replace('tier-', 'Tier ')}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  {city.role}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-950">{city.name}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-700">{city.reason}</p>
              <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                Open city guide
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
