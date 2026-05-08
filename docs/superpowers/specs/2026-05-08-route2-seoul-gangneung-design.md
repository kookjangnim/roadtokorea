# Route 2 Seoul To Gangneung Design

## Goal

Define `Route 2` as the second core route family on the site:

- `Route 2`
  - `Seoul -> Gangneung`

This route should not behave like a shorter version of `Route 1`.
It should behave like a different kind of trip: one where the route reaches Gangneung and opens the east coast rather than simply finishing at a destination.

## Primary Route Identity

`Seoul -> Gangneung` should be framed as a `Gangneung-opening` route, not just a `Gangneung-arrival` route.

That means the editorial promise is:

- Seoul gives the route a clear departure logic
- Gangneung is the first real east-coast threshold
- the trip reads as a route that can stop at Gangneung or keep unfolding south along the shoreline

This is important because it separates Route 2 from ordinary “how to get to Gangneung” utility content.

## Why Route 2 Should Exist

Route 1 already proves that the site can turn one Seoul-origin long route into multiple trip personalities.

Route 2 matters because:

- it expands the site without changing the `Seoul-first` product logic
- it reuses a large amount of already-built east-coast route-support material
- it gives the site a second flagship route family with much less new city production than a southwestern route would require

Compared with `Seoul -> Haenam`, this route is faster to launch and lower-risk because so much of its downstream route logic already exists inside the current east-coast Route 1 variant.

## Chosen Approach

Launch Route 2 in a lightweight first version by reusing existing east-coast support assets and building a new route shell around them.

Phase 1 should:

1. create the new `Seoul -> Gangneung` route family
2. define a small set of variants
3. reuse already-built east-coast support cities where possible
4. avoid forcing new city production unless the route shell clearly needs it

This is preferred over launching Route 2 with a large new city-production wave because the route family itself is the missing product first, not the city depth.

## Route Family Structure

Recommended structure:

- `Route 2`
  - `Seoul -> Gangneung`

Sub-routes for first release:

- `Route 2-0`
  - Direct eastbound

Variants for first release:

- `Route 2-0-a`
  - `KTX`
- `Route 2-0-b`
  - `Car`
- `Route 2-0-c`
  - `Bicycle`

The goal is not to create a complicated sub-route taxonomy on day one.
It is to create a clean second route family with one strong identity and three understandable travel modes.

## Variant Intent

### KTX

Role:
cleanest eastbound arrival

Promise:
the easiest way to open the coast without overcomplicating the route

Editorial frame:
use this when Gangneung is the intended chapter and the route should feel elegant rather than exploratory

### Car

Role:
leisure eastbound with optional coast continuation

Promise:
Gangneung is the gateway to a longer shoreline sequence, not merely a single endpoint

Editorial frame:
use this when the route should reach Gangneung and then remain open to Samcheok or deeper coast chapters

### Bicycle

Role:
stitched eastbound riding corridor

Promise:
not one perfect official Seoul-to-Gangneung certification line, but a believable route made by connecting official bike-path logic and practical linking segments

Editorial frame:
use this when the ride should be understood as a route assembly rather than a single seamless official branded path

## City Strategy

### Cities already available and reusable

These cities already have enough support depth to be useful for Route 2:

- `Gangneung`
- `Samcheok`
- `Uljin`
- `Yeongdeok`
- `Pohang`

This means Route 2 can launch with meaningful downstream continuity without requiring a new eastern city-production push first.

### Cities not required for first release

These may be useful later but are not required to ship Route 2:

- `Donghae`
- `Sokcho`
- `Yangyang`
- `Goseong`
- `Wonju`
- `Yangpyeong`

They are expansion candidates, not blockers.

## Product Scope For Phase 1

Phase 1 should focus on route-product creation, not map expansion.

Expected first-release behavior:

- user can open a dedicated `Seoul -> Gangneung` route page
- user can compare `KTX`, `car`, and `bicycle`
- the route copy explains why Gangneung is a route threshold
- the route can point forward into existing east-coast support cities

This first version does not need:

- a huge route-stop list
- many new city pages
- advanced branch logic north of Gangneung
- heavy route-family abstraction beyond what Route 1 already uses

## KTX Design

The KTX version should be very simple.

It should answer:

- when should a user just take the train and open Gangneung directly
- why this route is still “route-first” even with almost no intermediate stop logic
- what kind of Gangneung trip this supports

The KTX page should feel like:

- a clean route opener
- an eastbound commitment
- the least friction version of Route 2

## Car Design

The car version should be the editorial center of Route 2.

It should answer:

- why Gangneung is not just the destination but the point where the coast starts
- when should the user stop at Gangneung and when should they continue toward Samcheok
- why the route should remain open-ended after arrival

This version should naturally reuse:

- `Gangneung`
- `Samcheok`
- optionally `Uljin` as a longer extension note

The car version should feel like the first route on the site that explicitly opens into a second act rather than simply pointing south to one terminal finish.

## Bicycle Design

The bicycle version must be honest about infrastructure.

It should explicitly avoid claiming:

- one continuous official Seoul-to-Gangneung certified route

Instead, it should explain:

- Seoul-side official path logic exists
- Gangwon east-coast path logic exists
- the Seoul-to-Gangneung ride is a stitched corridor between those systems

This honesty is not a weakness.
It actually fits the editorial voice of the site and keeps the route credible.

## Relationship To Route 1

Route 2 should not cannibalize Route 1.

The distinction should stay clear:

- `Route 1` is the flagship north-to-south crossing
- `Route 2` is the eastbound opening route that can develop into a shoreline sequence

Route 2 is shorter, cleaner, and more threshold-oriented.
Route 1 is larger, more layered, and more terminally structured around Busan.

## Data And Architecture Design

Expected primary file:

- `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`

Possible supporting files:

- `D:\Project\roadtokorea\frontend\components\routes\...`
- `D:\Project\roadtokorea\frontend\app\routes\[from]\[to]\...`

Default expectation:

- follow the existing `RouteData` model
- add a second route object rather than redesigning the route data system
- reuse the existing route page renderer unless a true blocker appears

## Testing And QA

Planned verification for the eventual implementation:

1. confirm `Seoul -> Gangneung` resolves through the current route page system
2. verify all three variants render
3. verify reused east-coast stopover city links are correct
4. verify bicycle copy does not overclaim official route continuity
5. run frontend lint

## Risks

### Risk 1: Route 2 feels too small next to Route 1

Mitigation:
make Gangneung a route-threshold, not just an endpoint, and let the car version imply onward shoreline continuity.

### Risk 2: Route 2 overlaps too much with the east-coast variant inside Route 1

Mitigation:
frame Route 2 as a Gangneung-opening route family, while Route 1 east coast remains a Busan-ending route family.

### Risk 3: bicycle language becomes inaccurate

Mitigation:
state clearly that this is a stitched corridor using official and practical linking segments rather than one single official certification line.

## Implementation Sequence

1. inspect the current `RouteData` structure in `routeStopovers.ts`
2. define the new `Seoul -> Gangneung` route object
3. create `KTX`, `car`, and `bicycle` variants
4. reuse existing east-coast support cities where appropriate
5. verify route-page rendering
6. run lint

## Definition Of Done

Route 2 phase 1 is done when:

- `Seoul -> Gangneung` exists as a first-class route family
- `KTX`, `car`, and `bicycle` variants render inside the current route system
- Gangneung is framed as the coast-opening threshold
- existing east-coast support cities can be reused naturally from this route
- no major renderer or lint regressions remain
