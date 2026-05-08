# Updated Cities Index Design

## Goal

Make it easy to see which cities have already been upgraded to the current `Chungju-grade` standard.

This feature should give users a fast answer to:

- which city pages are already fully worth opening
- which upgraded cities are newly worth considering in Route 1
- where to jump if they want finished support pages instead of browsing route logic first

The feature should work in two places:

- the homepage
- a dedicated `Updated Cities` index page

## Chosen Approach

Use one dedicated curated data file as the source of truth.

That data file will contain only cities that have been manually promoted to the current `Chungju-grade` quality bar. Both the homepage section and the dedicated index page will read from the same list.

This is preferred over:

- hardcoding the same list in multiple places, which will drift quickly
- embedding upgrade-state metadata directly into `citySupportProfiles.ts`, which would make that already-large file heavier before the status model is stable

## Curation Rule

Only include cities that are judged to be at or near the current `Chungju` standard.

This is a manual editorial list, not an automatic “recently modified” feed.

That means a city is included when:

- the page has meaningful route-support depth
- the stay / recovery / next-leg logic is commercially usable
- the visuals are no longer placeholder-grade
- the city can be recommended confidently as a finished support page

This list is intentionally selective. It should feel like an approval layer, not a changelog.

## Initial City Set

The first curated set should include the cities that have already been brought up during the Route 1 upgrade pass:

- `Chungju`
- `Mungyeong`
- `Andong`
- `Daegu`
- `Gyeongju`
- `Daejeon`
- `Cheonan`
- `Gumi`
- `Changnyeong`
- `Gangneung`
- `Uljin`

This list should remain easy to update by hand as more cities graduate into the same quality tier.

## Data Design

Create a small dedicated data module, for example:

- `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

Each entry should contain only the information needed to render a compelling overview card:

- `name`
- `slug`
- `tier`
- `href`
- `reason`
- `role`

Optional fields are acceptable if they are clearly useful for presentation, but the default should stay lean.

The file should be authored as a curated presentation dataset, not a mirror of full city profile data.

## Homepage Design

Add a homepage section titled around the idea of `Recently Upgraded Cities` or `Cities Ready Now`.

Purpose:

- help users quickly identify finished city pages
- create a second browsing path beyond route-first exploration
- surface the strongest upgraded cities without forcing users into a full route page first

Expected behavior:

- show a compact set of featured upgraded cities
- emphasize why each city is worth opening now
- link each card directly to the city page
- include a secondary link to the dedicated `Updated Cities` page

The homepage section should feel editorial and selective, not like a database dump.

## Dedicated Index Page Design

Create a separate page for the full curated list of upgraded cities.

Purpose:

- give users one stable place to browse all finished city pages
- support future topbar, footer, or homepage links without repeating content
- create a simple editorial destination for “what is already strong on this site”

Expected behavior:

- short intro explaining that these are cities already upgraded to the current support-page standard
- grid or list of upgraded city cards
- each card links directly to the city page
- tier and route-role context should be easy to scan

This page does not need complex filtering in the first version.

## Content Tone

The copy should preserve the route-first editorial voice, while making room for direct city discovery.

That means:

- avoid generic “featured destinations” language
- avoid sounding like a news feed or update log
- do explain why the city is now strong enough to open
- do keep the emphasis on route utility, stay logic, and travel clarity

## Navigation Strategy

Version 1 should prioritize:

- homepage discovery
- direct URL access to the dedicated index page

Topbar integration is not required in the first version unless implementation shows an obvious clean slot. The immediate job is to create the destination and prove the pattern.

## Scope Of Changes

Expected primary files:

- `D:\Project\roadtokorea\frontend\data\updatedCities.ts`
- `D:\Project\roadtokorea\frontend\app\page.tsx`
- `D:\Project\roadtokorea\frontend\app\updated-cities\page.tsx`

Possible supporting files:

- a small reusable card or section component if that clearly reduces duplication

The implementation should stay light. Avoid introducing a large abstraction unless the duplication is real and immediate.

## Testing And QA

Planned verification:

1. confirm the curated dataset renders correctly on the homepage
2. confirm the dedicated index page renders all entries cleanly
3. verify links point to the intended city pages
4. run frontend lint

This is a presentation and navigation feature, so the main risk is drift or awkward positioning, not algorithmic complexity.

## Risks

### Risk 1: the list becomes stale

Mitigation:
keep the source of truth in one small curated file so updates are cheap.

### Risk 2: the section competes too hard with route-first positioning

Mitigation:
frame the section as “finished support pages worth opening now,” not as a replacement for route exploration.

### Risk 3: too much duplicated rendering logic

Mitigation:
share a simple data source first, and only extract components if duplication becomes noisy.

## Definition Of Done

This feature is done when:

- the homepage has a clear upgraded-cities section
- a dedicated `Updated Cities` page exists
- both surfaces read from the same curated data source
- only `Chungju-grade` cities are included
- users can jump directly into upgraded city pages without guessing which ones are finished
