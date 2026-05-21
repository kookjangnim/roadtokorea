# Route-First Information Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move Road to Korea toward a route-first public and internal structure with a reusable route tree shown after the landing page.

**Architecture:** Build a thin route navigation data layer on top of existing `routeStopovers` and `routeRegistry` data, then render it through a reusable route tree component and route-aware shell. Keep legacy tier routes working while removing tier language from primary navigation over time.

**Tech Stack:** Next.js App Router, React 19, TypeScript, existing CSS modules/global styles, Node validation scripts.

---

## File Structure

- Created: `frontend/data/routeNavigation.ts`
  - Owns route tree types, role metadata, category definitions, icon labels, and helpers that derive navigation rows from existing route data.
- Created: `frontend/components/routes/RouteTreeNav.tsx`
  - Renders desktop/mobile-friendly route tree UI from `routeNavigation.ts`.
- Created: `frontend/components/routes/RoutePageShell.tsx`
  - Provides a route-aware layout that hides the tree on landing and shows it on route pages.
- Modified: `frontend/app/route-1/page.tsx` through `frontend/app/route-8/page.tsx`
  - Wrap existing route overview content in the route shell.
- Modified: `frontend/app/route-1/[city]/page.tsx` through available route city pages
  - Wrap city detail pages in the route shell and pass active city.
- Modified: `frontend/app/page.tsx`
  - Remove visible tier labels from primary landing route/city cards where they still appear.
- Created: `frontend/scripts/validate-route-navigation.mjs`
  - Verifies route navigation data has stable slugs, valid roles, categories, and hrefs.
- Modified: `frontend/package.json`
  - Add `check:route-navigation`.
- Created: `frontend/lib/legacy-route-compat.ts`
  - Centralizes legacy `tier-*` URL/category compatibility constants.
- Created: `frontend/components/city-detail/CityGuidePage.tsx`
  - Moves canonical city rendering out of legacy `[tier]` routes.
- Created: `frontend/components/hotspot-detail/HotspotGuidePage.tsx`
  - Moves canonical hotspot rendering out of legacy `[tier]` routes.
- Created: `frontend/app/routes/page.tsx`
  - Provides a route index entry point.
- Created: `frontend/app/cities/[city]/[hotspot]/page.tsx`
  - Provides canonical city-hotspot URLs.
- Created: `frontend/data/cityRegistry.ts`, `primaryCityData.ts`, `anchorCityData.ts`, `supportCityData.ts`
  - Replaces tier-organized local city data with route-first city registries.

## Current Implementation Status

- [x] Landing page does not render the route tree.
- [x] Route overview pages render the route tree.
- [x] Route city pages render the route tree.
- [x] Route city pages expose anchors for lodging, food, attractions, transport, and next city.
- [x] Public navigation points to `/routes` and route-first URLs.
- [x] Canonical city URLs use `/cities/:city`.
- [x] Canonical hotspot URLs use `/cities/:city/:hotspot`.
- [x] Legacy `tier-*` city and hotspot URLs redirect to canonical URLs.
- [x] Legacy tier city archives and region pages redirect to `/routes`.
- [x] Local city data no longer uses tier file names or tier sorting metadata.
- [x] Validation guards prevent tier UI/data from returning to the route-first path.

## Task 1: Route Navigation Data Layer

**Files:**
- Create: `frontend/data/routeNavigation.ts`
- Create: `frontend/scripts/validate-route-navigation.mjs`
- Modify: `frontend/package.json`

- [ ] **Step 1: Write the validation script first**

Create `frontend/scripts/validate-route-navigation.mjs`:

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../data/routeNavigation.ts', import.meta.url), 'utf8');

for (const role of ['hub', 'junction', 'anchor', 'pause', 'scenic', 'start', 'end']) {
  assert.match(source, new RegExp(`['"]${role}['"]`), `missing role ${role}`);
}

for (const category of ['overview', 'lodging', 'food', 'attractions', 'transport', 'next-city']) {
  assert.match(source, new RegExp(`id: ['"]${category}['"]`), `missing category ${category}`);
}

assert.match(source, /getRouteNavigationTree/, 'missing getRouteNavigationTree helper');
assert.match(source, /getRouteCityNavigation/, 'missing getRouteCityNavigation helper');
assert.match(source, /getPrimaryRouteRole/, 'missing getPrimaryRouteRole helper');
```

- [ ] **Step 2: Run validation and confirm it fails**

Run: `npm run check:route-navigation`

Expected: command is missing before `package.json` is updated, or script fails because `routeNavigation.ts` does not exist.

- [ ] **Step 3: Add the package script**

Add this script to `frontend/package.json`:

```json
"check:route-navigation": "node scripts/validate-route-navigation.mjs"
```

- [ ] **Step 4: Implement route navigation data**

Create `frontend/data/routeNavigation.ts` with:

```ts
import { getAllRouteData } from './routeStopovers';
import { getRouteSlugForRoute, type RouteSlug } from './routeRegistry';

export type RouteCityRole = 'hub' | 'junction' | 'anchor' | 'pause' | 'scenic' | 'start' | 'end';

export type RouteCategoryId =
  | 'overview'
  | 'lodging'
  | 'food'
  | 'attractions'
  | 'transport'
  | 'next-city';

export type RouteNavigationCategory = {
  id: RouteCategoryId;
  label: string;
  hrefSuffix: string;
};

export type RouteNavigationCity = {
  slug: string;
  name: string;
  href: string;
  roles: RouteCityRole[];
  roleLabel: string;
  categories: RouteNavigationCategory[];
};

export type RouteNavigationNode = {
  routeSlug: RouteSlug;
  label: string;
  href: string;
  cities: RouteNavigationCity[];
};

export const routeCategories: RouteNavigationCategory[] = [
  { id: 'overview', label: 'Overview', hrefSuffix: '' },
  { id: 'lodging', label: 'Lodging', hrefSuffix: '#lodging' },
  { id: 'food', label: 'Food', hrefSuffix: '#food' },
  { id: 'attractions', label: 'Attractions', hrefSuffix: '#attractions' },
  { id: 'transport', label: 'Transport', hrefSuffix: '#transport' },
  { id: 'next-city', label: 'Next City', hrefSuffix: '#next-city' },
];

const routeRoleOverrides: Record<string, RouteCityRole[]> = {
  seoul: ['hub', 'start'],
  busan: ['hub', 'end'],
  daejeon: ['junction', 'anchor'],
  wonju: ['junction'],
  yeoju: ['junction'],
  mokpo: ['hub', 'junction'],
  gyeongju: ['anchor'],
  jeonju: ['anchor'],
  gangneung: ['hub', 'anchor'],
  sokcho: ['anchor', 'scenic'],
  cheonan: ['pause'],
  gumi: ['pause'],
  changnyeong: ['pause'],
  uljin: ['scenic'],
  samcheok: ['scenic'],
  yangyang: ['scenic'],
};

export const routeRoleLabels: Record<RouteCityRole, string> = {
  hub: 'Hub city',
  junction: 'Junction city',
  anchor: 'Anchor destination',
  pause: 'Practical pause',
  scenic: 'Scenic stop',
  start: 'Route start',
  end: 'Route end',
};

export function getPrimaryRouteRole(roles: RouteCityRole[]): RouteCityRole {
  return roles[0] ?? 'pause';
}

export function getRouteCityNavigation(routeSlug: RouteSlug, citySlug: string): string {
  return `/${routeSlug}/${citySlug}`;
}

function getRolesForCity(citySlug: string, routeSlug: RouteSlug, index: number, total: number): RouteCityRole[] {
  const roles = new Set<RouteCityRole>(routeRoleOverrides[citySlug] ?? []);
  if (index === 0) roles.add('start');
  if (index === total - 1) roles.add('end');
  if (!roles.size) roles.add('pause');
  return [...roles];
}

export function getRouteNavigationTree(): RouteNavigationNode[] {
  return getAllRouteData().map((routeData) => {
    const routeSlug = getRouteSlugForRoute(routeData);
    const seenCities = new Map<string, string>();

    for (const transport of Object.values(routeData.transports)) {
      const variants = transport.variants?.length ? transport.variants : [transport];
      for (const variant of variants) {
        for (const stopover of variant.stopovers) {
          if (!seenCities.has(stopover.citySlug)) {
            seenCities.set(stopover.citySlug, stopover.city);
          }
        }
      }
    }

    const cityEntries = [...seenCities.entries()];

    return {
      routeSlug,
      label: routeData.routeLabel,
      href: `/${routeSlug}`,
      cities: cityEntries.map(([slug, name], index) => {
        const roles = getRolesForCity(slug, routeSlug, index, cityEntries.length);
        const primaryRole = getPrimaryRouteRole(roles);

        return {
          slug,
          name,
          href: getRouteCityNavigation(routeSlug, slug),
          roles,
          roleLabel: routeRoleLabels[primaryRole],
          categories: routeCategories,
        };
      }),
    };
  });
}
```

- [ ] **Step 5: Run route navigation validation**

Run: `npm run check:route-navigation`

Expected: PASS.

## Task 2: Reusable Route Tree Component

**Files:**
- Create: `frontend/components/routes/RouteTreeNav.tsx`
- Modify: `frontend/app/styles/base.css` or route-specific CSS file

- [ ] **Step 1: Add a simple component render check**

Use TypeScript and lint as the first safety net because this project does not currently have React component tests.

Run before implementation: `npm run lint`

Expected: existing lint may pass or report unrelated current issues; record output before editing.

- [ ] **Step 2: Create `RouteTreeNav.tsx`**

Implement a client-safe server component that receives active state:

```tsx
import Link from 'next/link';
import {
  getPrimaryRouteRole,
  getRouteNavigationTree,
  routeRoleLabels,
  type RouteCategoryId,
  type RouteCityRole,
  type RouteSlug,
} from '@/data/routeNavigation';

type RouteTreeNavProps = {
  activeRouteSlug?: RouteSlug;
  activeCitySlug?: string;
  activeCategoryId?: RouteCategoryId;
};

const roleGlyphs: Record<RouteCityRole, string> = {
  hub: '●',
  junction: '◇',
  anchor: '★',
  pause: '·',
  scenic: '⌁',
  start: '▶',
  end: '■',
};

export default function RouteTreeNav({
  activeRouteSlug,
  activeCitySlug,
  activeCategoryId = 'overview',
}: RouteTreeNavProps) {
  const routes = getRouteNavigationTree();

  return (
    <nav className="route-tree" aria-label="Route navigation">
      {routes.map((route) => {
        const routeActive = route.routeSlug === activeRouteSlug;

        return (
          <section className="route-tree__route" key={route.routeSlug}>
            <Link className={routeActive ? 'route-tree__route-link is-active' : 'route-tree__route-link'} href={route.href}>
              {route.label}
            </Link>
            {routeActive && (
              <ol className="route-tree__cities">
                {route.cities.map((city) => {
                  const cityActive = city.slug === activeCitySlug;
                  const primaryRole = getPrimaryRouteRole(city.roles);

                  return (
                    <li className="route-tree__city" key={city.slug}>
                      <Link className={cityActive ? 'route-tree__city-link is-active' : 'route-tree__city-link'} href={city.href}>
                        <span>{city.name}</span>
                        <span className="route-tree__role" aria-label={routeRoleLabels[primaryRole]} title={routeRoleLabels[primaryRole]}>
                          {roleGlyphs[primaryRole]}
                        </span>
                      </Link>
                      {cityActive && (
                        <ol className="route-tree__categories">
                          {city.categories.map((category) => (
                            <li key={category.id}>
                              <Link
                                className={category.id === activeCategoryId ? 'route-tree__category-link is-active' : 'route-tree__category-link'}
                                href={`${city.href}${category.hrefSuffix}`}
                              >
                                {category.label}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            )}
          </section>
        );
      })}
    </nav>
  );
}
```

- [ ] **Step 3: Add restrained tree styles**

Add styles with stable dimensions, compact rows, and active states. Use the existing palette rather than a new theme.

- [ ] **Step 4: Run lint**

Run: `npm run lint`

Expected: no new lint errors from `RouteTreeNav.tsx`.

## Task 3: Route Page Shell

**Files:**
- Create: `frontend/components/routes/RoutePageShell.tsx`
- Modify: route overview and route-city pages

- [ ] **Step 1: Create the shell**

`RoutePageShell` accepts `activeRouteSlug`, `activeCitySlug`, `activeCategoryId`, and `children`. It renders `RouteTreeNav` in an aside on desktop and leaves space for a mobile route selector.

- [ ] **Step 2: Wrap route overview pages**

Apply to `/route-1` through `/route-8` pages. Landing page remains untouched by the shell.

- [ ] **Step 3: Wrap route-city pages**

Apply to existing route city pages. Active city slug should come from route params.

- [ ] **Step 4: Run route checks**

Run:

```bash
npm run check:route-navigation
npm run lint
```

Expected: both pass or only pre-existing unrelated lint issues remain.

## Task 4: Remove Tier From Primary Public UI

**Files:**
- Modify: `frontend/app/page.tsx`
- Modify: `frontend/app/updated-cities/page.tsx` if still public-prominent

- [ ] **Step 1: Find visible tier labels**

Run: `rg "Tier|tier-" app components -n`

- [ ] **Step 2: Replace landing visible tier text with route role or route label**

Landing cards should say route-oriented text, not `Tier 1`, `Tier 2`, or `Tier 4`.

- [ ] **Step 3: Keep compatibility routes**

Do not delete `/tier-*` routes in this task. They remain compatibility surfaces.

- [ ] **Step 4: Run lint**

Run: `npm run lint`

Expected: no new lint errors.

## Task 5: Verification

**Files:**
- No new source files unless a small validation adjustment is needed.

- [ ] **Step 1: Run static checks**

Run:

```bash
npm run check:route-navigation
npm run check:route-template
npm run check:route-network
npm run lint
```

- [ ] **Step 2: Build**

Run: `npm run build`

Expected: Next.js build succeeds.

- [ ] **Step 3: Browser verification**

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/
http://localhost:3000/route-1
http://localhost:3000/route-1/daejeon
```

Expected:

- Landing page has no route tree.
- Route overview has the tree.
- Route city page has the tree.
- Current route and city are highlighted.
- Role icons are visible but visually small.
- Mobile viewport uses compact navigation instead of a permanent left sidebar.

## Self-Review

- Spec coverage: route-first URLs, no landing tree, post-landing tree, role icons, mobile treatment, internal data migration, and tier de-emphasis are covered.
- Placeholder scan: no `TBD` or open-ended implementation placeholders remain.
- Type consistency: `RouteSlug`, `RouteCityRole`, `RouteCategoryId`, and helper names are consistent across tasks.
