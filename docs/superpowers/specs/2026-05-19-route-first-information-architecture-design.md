# Route-First Information Architecture Design

## Purpose

Road to Korea should scale around travel routes, not city tiers. The public experience should help travelers choose a route, understand the cities along it, and move from city overview into lodging, food, attractions, transport, and next-city decisions without forcing every topic onto one long page.

The former tier model can remain only as migration history or internal priority metadata while the product moves toward a route-first structure.

## Core Decisions

1. The landing page stays clean and does not show the route tree.
2. Route, route-city, and city detail pages show a route tree after the user leaves the landing page.
3. Public navigation is organized as `Route > City > Category`.
4. Internal management moves toward `routes + cities + city content`, not `tier-1 + tier-2 + tier-4`.
5. City importance is expressed as route role, not tier rank.
6. Important cities and junction cities get small role icons beside their names.
7. Mobile uses a compact route selector or slide-in panel instead of a permanent left tree.

## Public URL Direction

Long-term public URLs should be route-centered:

```text
/                       Landing, no tree
/routes                 All routes
/route-1                Route 1 overview
/route-1/daejeon        Daejeon within Route 1 context
/route-1/daejeon/food   Daejeon food within Route 1 context
/route-1/daejeon/hotels Daejeon lodging within Route 1 context
```

Existing tier URLs should become compatibility routes during migration. They should not be promoted in primary navigation or new sitemap work once equivalent route URLs exist.

## Public Navigation Model

The route tree appears after the landing page:

```text
Route 1 Seoul-Busan
  Seoul
    Overview
    Lodging
    Food
    Attractions
    Transport
    Next City
  Cheonan
  Daejeon
  Daegu
  Busan

Route 2 Seoul-Gangneung
  Seoul
  Yeoju
  Wonju
  Pyeongchang
  Gangneung
```

The tree must act as a location system, not decoration:

- The current route is expanded.
- The current city is highlighted.
- The current category is highlighted when present.
- Neighboring route cities remain visible so users understand progression.
- Route labels use human-readable names such as `Route 1 Seoul-Busan`.

## Landing Page Behavior

The landing page remains an entry point:

- No left tree.
- Focus on route discovery, hero content, and route cards.
- Route cards lead users into `/route-*` pages, where the tree begins.
- Tier labels should be removed from visible landing cards during migration.

## Desktop Layout

Desktop route pages use a two-column shell:

```text
Left: route tree navigation
Right: route, city, or category content
```

The left tree should feel like a travel guide sidebar rather than a literal file explorer. It can borrow tree structure and indentation from Windows Explorer, but visual styling should stay quiet, readable, and editorial.

## Mobile Layout

Mobile should not render a permanent left tree. It should use:

- A compact top route context bar, such as `Route 1 Seoul-Busan / Daejeon / Food`.
- A button that opens the full route tree as a slide-in panel or sheet.
- Large enough tap targets for city and category rows.
- The same active route, city, and category state as desktop.

## Route Roles Instead Of Tiers

The old tier concept should be replaced by role-based metadata. Roles describe why a city matters inside a route.

Recommended roles:

```text
hub        Major start, endpoint, or high-connectivity city
junction   Route split or route handoff city
anchor     Strong destination city with independent travel value
pause      Practical break, recovery stop, or light overnight city
scenic     Nature, coast, terrain, or landscape-driven stop
```

Examples:

```text
Seoul       hub, start
Busan       hub, end
Daejeon     junction, anchor
Wonju       junction
Gyeongju    anchor
Cheonan     pause
Uljin       scenic
```

Roles are not public rankings. They explain route function.

## Role Icon Rules

Small icons should appear to the right of important city names in the tree. They should be subtle and consistent.

Recommended icon mapping:

```text
hub        station, circle, or landmark-style icon
junction   branch or split icon
anchor     star or filled marker icon
pause      small dot or rest marker
scenic     mountain, coast, or view marker
start      flag-start treatment if needed
end        flag-end treatment if needed
```

Implementation notes:

- Use `lucide-react` only if it is already installed or intentionally added.
- If no icon package is available, use compact CSS-drawn badges or restrained text glyphs until an icon dependency is approved.
- Do not show too many icons on every row.
- Prefer one primary visible icon per city plus an accessible label.
- Tooltips or `aria-label` should explain unfamiliar icons.

## Internal Data Model

The target internal structure should separate route context from city content:

```text
data/routes
  route metadata
  route city order
  route-specific city roles
  route-specific travel logic

data/cities
  city identity
  hero image
  summary
  shared description
  shared category content references

data/cityContent
  lodging
  food
  attractions
  transport
  practical notes
```

Route data answers: "Where does this city sit in this route, and what job does it do here?"

City data answers: "What is this city, independent of route context?"

City content answers: "What should travelers do, eat, book, or know here?"

## Duplicate Cities Across Routes

Cities can appear in multiple routes. The city common data should be stored once, while route-specific context is stored per route.

Example:

```ts
{
  routeSlug: 'route-1',
  citySlug: 'seoul',
  roles: ['hub', 'start'],
  routeRole: 'Southbound departure hub',
  nextLegLogic: 'Sets up the central corridor toward Cheonan and Daejeon.'
}
```

The same `seoul` city record can also appear in Route 2, Route 3, Route 5, Route 6, and Route 8 with different `routeRole` and `nextLegLogic`.

## Content Categories

Each route-city page should support these first categories:

```text
overview
lodging
food
attractions
transport
next-city
```

Initial implementation can use in-page anchors. Later iterations can promote categories to nested URLs such as `/route-1/daejeon/food` when enough content exists.

## Operational Metadata

Internal workflow can keep non-public management metadata:

```ts
contentStatus: 'draft' | 'partial' | 'ready' | 'needs-review'
editorialWeight: 'primary' | 'secondary' | 'support'
lastReviewedAt: 'YYYY-MM-DD'
```

These fields replace public tier thinking without leaking tier language into the user experience.

## Migration Strategy

Migration should be incremental:

1. Create route-first navigation data derived from existing route data.
2. Add route role metadata and icon mapping.
3. Build a reusable route tree component.
4. Add a route-aware layout shell to non-landing route/city pages.
5. Remove tier labels from primary public UI.
6. Keep tier routes as compatibility routes.
7. Gradually move city content into a shared city store.
8. Add category URLs only after category content is strong enough.

## Legacy Compatibility Layer

The old `tier-*` URLs and WordPress categories are compatibility surfaces only. They are not part of the forward-looking information architecture.

Rules:

- Keep `tier-*` route files only as redirects or validation shims.
- Keep WordPress `tier-*` categories only as legacy post matching metadata until the backend taxonomy is migrated.
- Do not generate new public links to `tier-*` URLs.
- Do not add new city, route, or editorial data fields named `tier`.
- Centralize legacy URL/category constants in `lib/legacy-route-compat.ts`.
- Canonical city URLs use `/cities/:city`.
- Canonical hotspot URLs use `/cities/:city/:hotspot`.
- Route-context URLs use `/route-*/:city`.

## Guardrails

- Do not duplicate full city content inside every route.
- Do not expose tier labels in the main user journey.
- Do not add tier-based data stores, helper names, or sorting logic.
- Do not make the route tree visually heavy.
- Do not make mobile carry a desktop sidebar.
- Do not remove compatibility routes until redirects and SEO behavior are verified.
- Do not introduce a broad refactor that blocks shipping the first route tree.

## Success Criteria

The first useful release is successful when:

- Landing page has no route tree.
- Route pages and route-city pages show the route tree.
- Current route and city state are obvious.
- City role icons appear beside key cities.
- Primary navigation no longer depends on tier labels.
- Canonical city and hotspot links no longer emit tier URLs.
- Internal city data is organized by route role/support purpose rather than tier rank.
- Existing route pages continue to build.
- The structure gives a clear path toward route-first data management.
