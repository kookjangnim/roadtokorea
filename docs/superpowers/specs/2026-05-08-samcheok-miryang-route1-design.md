# Samcheok And Miryang Route 1 Support Page Design

## Goal

Add two new Route 1 support pages for cities that already exist in route logic but do not yet exist in `citySupportProfiles.ts`:

- `Samcheok`
- `Miryang`

The purpose is not to inflate Route 1 with extra pages. The purpose is to close the remaining support-gap between route stopover logic and real city-support coverage for two meaningful secondary nodes.

## Why These Two Cities Matter

Both cities already appear in `routeStopovers.ts`, which means the route logic is already telling users they are valid stop choices.

What is missing is the page layer that makes those choices usable:

- local support map logic
- stay decision logic
- food logic
- next-leg framing
- accommodation-ready support structure
- visuals strong enough to avoid placeholder or thin-page feeling

Without that support layer, the route can mention these cities but cannot fully convert them into trustworthy route-support stops.

## Chosen Approach

Build both pages in sequence, not in parallel:

1. create `Samcheok` first as the east-coast scenic continuation sample
2. use that momentum to create `Miryang` as the quieter southern hinge sample
3. after both are complete, decide whether they immediately belong in `updatedCities.ts`

This is preferred over starting with Miryang because Samcheok sits more naturally beside the east-coast set that was just stabilized through `Gangneung`, `Uljin`, `Yeongdeok`, and `Pohang`.

## Product Intent Per City

### Samcheok

Role:
coastline continuation node

Primary conversion:
one-night scenic coastline stay that keeps the east-coast route spacious instead of jumping only between bigger names

Editorial promise:
the coast should unfold in chapters, not collapse into a list of only famous anchors

### Miryang

Role:
quiet southern hinge before Busan

Primary conversion:
one last lower-pressure overnight that keeps the inland / Nakdong route calm before the Busan finish

Editorial promise:
the route can bend toward Busan without losing its softer river logic too early

## Samcheok Design

Samcheok should not compete with Gangneung or Pohang. It should justify itself by continuity, openness, and scenic pacing.

The page should answer:

- why keep Samcheok if Gangneung already opened the coast
- when should the user stop here instead of rushing into Uljin
- what kind of overnight makes the shoreline feel broader and more believable
- how this stop changes the next coast chapter

Expected support logic:

- one practical coast stay cluster
- one more scenic / open-road stay read
- food logic that supports coastal pacing rather than destination dining drama
- strong next-leg handoff into `Uljin`

## Miryang Design

Miryang should not compete with Daegu or Busan. It should justify itself as a calmer hinge that protects the final approach.

The page should answer:

- why keep Miryang after Changnyeong instead of pushing straight onward
- who benefits from one quieter southern reset before Busan
- which stay logic is more useful: practical central grid or river-adjacent calmer overnight
- how the route should emotionally shift after sleeping here

Expected support logic:

- one practical rail / road-aligned stay zone
- one quieter river-facing or calmer local zone
- food logic built around reset rather than spectacle
- strong next-leg handoff into `Busan`

## Data Design

Primary file:

- `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

Potential follow-up file if the pages qualify after completion:

- `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

The current page renderer already supports the required schema, so no page-component redesign is planned.

## Visual Strategy

Both cities need fully usable visual sections from day one.

### Samcheok visuals

Should reinforce:

- cliff-and-sea continuation
- open-road shoreline spacing
- smaller scenic chapter logic

### Miryang visuals

Should reinforce:

- river calm
- southern hinge mood
- quiet pre-Busan handoff

Preferred asset strategy:

- use existing project route-image conventions if matching assets already exist
- otherwise use a documented external image source with clear attribution structure matching the current profile format

## Content Rules

These pages should follow the same editorial discipline as the rest of Route 1:

- do not oversell either city as a major destination chapter
- do not write generic tourism-list content
- do make the route-use logic explicit
- do preserve each city’s smaller-scale role
- do keep both pages commercially legible for future stay or meal linking

## Testing And QA

Planned verification:

1. confirm both new city entries are valid inside `citySupportProfiles.ts`
2. run frontend lint
3. confirm no placeholder visual references are introduced
4. if both pages feel strong enough, add them to `updatedCities.ts` and lint again

## Risks

### Risk 1: Samcheok overlaps too much with Uljin

Mitigation:
write Samcheok as scenic continuation and Uljin as long-coast openness, not as duplicates.

### Risk 2: Miryang overlaps too much with Changnyeong

Mitigation:
keep Changnyeong as lower-river recovery and Miryang as the final quiet hinge that turns toward Busan.

### Risk 3: smaller-city pages become thin

Mitigation:
require full support-profile structure, not partial route-stop snippets.

## Implementation Sequence

1. inspect `routeStopovers.ts` references for Samcheok and Miryang
2. add a full `Samcheok` profile to `citySupportProfiles.ts`
3. add a full `Miryang` profile to `citySupportProfiles.ts`
4. run lint
5. decide whether both qualify for `updatedCities.ts`
6. if yes, add them and lint again

## Definition Of Done

This work is done when:

- `Samcheok` exists as a full Route 1 support page
- `Miryang` exists as a full Route 1 support page
- both pages have stay logic, food logic, next-leg logic, decisions, zones, visuals, and support points
- no placeholder-grade visuals are introduced
- Route 1 route-stop mentions now have matching city-support depth for these two cities
