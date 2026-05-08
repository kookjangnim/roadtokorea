# Updated Cities Index Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a curated `Updated Cities` browsing path that surfaces only Chungju-grade city pages on the homepage and on a dedicated index page.

**Architecture:** Keep the feature lightweight by introducing a single curated data source in `data/updatedCities.ts`, then consume that data from the homepage and a new `app/updated-cities/page.tsx` route. Reuse existing page styling patterns instead of building a heavy new system, and only extract a shared component if the duplication becomes real across both surfaces.

**Tech Stack:** Next.js App Router, TypeScript, React Server Components, Next `Link`, ESLint

---

### Task 1: Create the curated updated-cities dataset

**Files:**
- Create: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`
- Reference: `D:\Project\roadtokorea\frontend\docs\superpowers\specs\2026-05-08-updated-cities-index-design.md`

- [ ] **Step 1: Create the dataset file with a focused exported type**

Write this file:

```ts
export type UpdatedCity = {
  name: string;
  slug: string;
  tier: 'tier-1' | 'tier-2' | 'tier-4';
  href: string;
  reason: string;
  role: string;
};

export const updatedCities: UpdatedCity[] = [
  {
    name: 'Chungju',
    slug: 'chungju',
    tier: 'tier-2',
    href: '/tier-2/chungju',
    reason: 'Reference-quality inland support page with clear stay and handoff logic.',
    role: 'Route 1 practical benchmark',
  },
];
```

- [ ] **Step 2: Expand the list to the full approved city set**

Add the remaining curated entries with the same shape:

```ts
  {
    name: 'Mungyeong',
    slug: 'mungyeong',
    tier: 'tier-2',
    href: '/tier-2/mungyeong',
    reason: 'Strong inland handoff page with quieter route logic that now reads intentionally.',
    role: 'Inland transition anchor',
  },
  {
    name: 'Andong',
    slug: 'andong',
    tier: 'tier-2',
    href: '/tier-2/andong',
    reason: 'Cultural support page with a convincing overnight and onward-route payoff.',
    role: 'Cultural inland chapter',
  },
  {
    name: 'Daegu',
    slug: 'daegu',
    tier: 'tier-2',
    href: '/tier-2/daegu',
    reason: 'Southern support page with clear city-scale sleep, food, and route-reset logic.',
    role: 'Southern route stabilizer',
  },
  {
    name: 'Gyeongju',
    slug: 'gyeongju',
    tier: 'tier-2',
    href: '/tier-2/gyeongju',
    reason: 'Route-support page now reads like a real stop choice instead of a generic destination card.',
    role: 'Historic support chapter',
  },
  {
    name: 'Daejeon',
    slug: 'daejeon',
    tier: 'tier-2',
    href: '/tier-2/daejeon',
    reason: 'Practical corridor sample with a strong station-versus-recovery split.',
    role: 'Central split city',
  },
  {
    name: 'Cheonan',
    slug: 'cheonan',
    tier: 'tier-4',
    href: '/tier-4/cheonan',
    reason: 'Early-route break page now has clear first-night and low-friction support value.',
    role: 'Early corridor reset',
  },
  {
    name: 'Gumi',
    slug: 'gumi',
    tier: 'tier-4',
    href: '/tier-4/gumi',
    reason: 'Middle-corridor page now clearly supports fatigue control before Daegu.',
    role: 'Pre-Daegu breather',
  },
  {
    name: 'Changnyeong',
    slug: 'changnyeong',
    tier: 'tier-4',
    href: '/tier-4/changnyeong',
    reason: 'Late-route recovery stop with a distinct quiet-finish purpose.',
    role: 'Lower-river recovery node',
  },
  {
    name: 'Gangneung',
    slug: 'gangneung',
    tier: 'tier-1',
    href: '/tier-1/gangneung',
    reason: 'East-coast entry page now feels intentional and ready for direct discovery.',
    role: 'Coast-entry anchor',
  },
  {
    name: 'Uljin',
    slug: 'uljin',
    tier: 'tier-4',
    href: '/tier-4/uljin',
    reason: 'Long-coast support page now explains why the overnight matters.',
    role: 'Coastal continuity node',
  },
];
```

- [ ] **Step 3: Add a small helper export for homepage slicing**

Append this helper:

```ts
export const featuredUpdatedCities = updatedCities.slice(0, 6);
```

- [ ] **Step 4: Verify the dataset file compiles cleanly**

Run: `Get-Content -Path 'D:\Project\roadtokorea\frontend\data\updatedCities.ts'`

Expected: one exported type, one full curated array, and one helper export with no missing commas or invalid tiers.

### Task 2: Add a homepage section for upgraded cities

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\app\page.tsx`
- Reference: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

- [ ] **Step 1: Import the curated dataset into the homepage**

Add this import near the top:

```ts
import { featuredUpdatedCities } from '@/data/updatedCities';
```

- [ ] **Step 2: Insert a new section between the route-comparison block and route-notes**

Add this section after the `Compare the route` section and before `<section id="route-notes"`:

```tsx
          <section className="bg-[linear-gradient(180deg,#f3ede4_0%,#f7f3ec_100%)] px-4 py-8 md:px-8 md:py-12">
            <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-stone-200/80 bg-white/75 p-8 shadow-[0_30px_90px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
                    Cities Ready Now
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
                    Open the city pages that already read like finished support chapters.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                    These are the cities we have already brought up to the current Chungju-grade
                    standard, so you can browse finished stop logic without guessing what is still
                    thin.
                  </p>
                </div>
                <Link
                  href="/updated-cities"
                  className="rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
                >
                  View all updated cities
                </Link>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredUpdatedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={city.href}
                    className="group rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/15 hover:bg-white"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {city.tier.replace('tier-', 'Tier ')}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-stone-950">{city.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{city.role}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-500">{city.reason}</p>
                    <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                      Open city guide
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
```

- [ ] **Step 3: Verify the new homepage section stays route-first in tone**

Check that the section copy does all three:

```txt
1. says these are already-finished city pages
2. does not replace route-first positioning
3. sends users to the dedicated index page
```

- [ ] **Step 4: Review the homepage diff before moving on**

Run: `git -C D:\Project\roadtokorea\frontend diff -- app/page.tsx`

Expected: one new import and one self-contained upgraded-cities section only.

### Task 3: Create the dedicated Updated Cities page

**Files:**
- Create: `D:\Project\roadtokorea\frontend\app\updated-cities\page.tsx`
- Reference: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

- [ ] **Step 1: Create the page shell and import the curated data**

Write this file:

```tsx
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
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Add the upgraded-city card grid**

Insert this grid inside the outer container, after the intro card:

```tsx
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
```

- [ ] **Step 3: Keep the page deliberately simple**

Do not add filters, tabs, search, sorting, hero media, or pagination in version 1. The page should just be a clean curated destination.

- [ ] **Step 4: Verify the page file reads as a standalone destination**

Run: `Get-Content -Path 'D:\Project\roadtokorea\frontend\app\updated-cities\page.tsx'`

Expected: one intro block, one card grid, and direct links back to home and the main route guide.

### Task 4: Optional navigation reinforcement if the diff stays small

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\components\Footer.tsx`

- [ ] **Step 1: Add one footer link to the dedicated index**

If the footer still has room, add this item near the top of `footerExplore`:

```ts
{ name: 'Updated Cities', href: '/updated-cities' },
```

- [ ] **Step 2: Keep footer cleanup minimal**

Do not redesign the footer or add a separate section. This task only exists to give the new destination one additional stable access point.

- [ ] **Step 3: Skip this task if it creates awkward duplication**

If the footer link feels noisy beside the homepage section and direct URL path, leave `Footer.tsx` unchanged and note that version 1 intentionally relies on homepage discovery.

### Task 5: Verify and close out

**Files:**
- Verify: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`
- Verify: `D:\Project\roadtokorea\frontend\app\page.tsx`
- Verify: `D:\Project\roadtokorea\frontend\app\updated-cities\page.tsx`
- Verify: `D:\Project\roadtokorea\frontend\components\Footer.tsx`

- [ ] **Step 1: Run lint**

Run: `npm.cmd run lint`

Expected: `eslint` completes successfully.

- [ ] **Step 2: Review the combined diff**

Run: `git -C D:\Project\roadtokorea\frontend diff -- data/updatedCities.ts app/page.tsx app/updated-cities/page.tsx components/Footer.tsx`

Expected: the diff shows one new data source, one homepage section, one new page, and at most one lightweight footer link.

- [ ] **Step 3: Check links and dataset consistency**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\updatedCities.ts' -Pattern '/tier-1/','/tier-2/','/tier-4/'`

Expected: every curated city has a concrete city-page href with no placeholder or index-page links.

- [ ] **Step 4: Commit the implementation**

Run:

```bash
git add data/updatedCities.ts app/page.tsx app/updated-cities/page.tsx components/Footer.tsx
git commit -m "feat: add updated cities discovery surfaces"
```

Expected: one focused feature commit for the curated updated-cities browsing path.
