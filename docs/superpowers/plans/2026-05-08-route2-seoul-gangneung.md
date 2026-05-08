# Route 2 Seoul To Gangneung Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `Route 2 = Seoul -> Gangneung` as a first-class route family with `KTX`, `car`, and `bicycle` variants, using `Wonju` as the first inland junction hub and reusing existing east-coast support cities.

**Architecture:** Keep the current route system unchanged and implement Route 2 by extending `data/routeStopovers.ts` with one new `RouteData` object plus a small set of new route variants. Reuse the existing route page renderer and east-coast city-support inventory instead of building new route components or expanding route abstractions.

**Tech Stack:** Next.js App Router, TypeScript, React Server Components, static route data in `routeStopovers.ts`, ESLint

---

### Task 1: Define Route 2 variant shells inside `routeStopovers.ts`

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`
- Reference: `D:\Project\roadtokorea\frontend\docs\superpowers\specs\2026-05-08-route2-seoul-gangneung-design.md`

- [ ] **Step 1: Add the car variant shell after the existing east-coast Route 1 variants**

Create a new variant with this opening shape near the other `TransportRouteVariant` constants:

```ts
const carSeoulGangneungRoute: TransportRouteVariant = {
  id: 'route-2-eastbound',
  routeCode: '2-0-b',
  routeGroupCode: '2-0',
  routeGroupLabel: 'Direct Eastbound',
  label: 'Wonju + Gangneung Eastbound',
  routeName: 'Seoul to Gangneung via Wonju',
  totalTravelTime: '3h 30m - 5h',
  totalDistance: '230-280 km',
  summary:
    'A cleaner eastbound drive that reaches Gangneung through Wonju, then opens naturally into the east coast rather than pretending Gangneung is only a fixed endpoint.',
  bestFor: 'Travelers who want the simplest car route to Gangneung while keeping the coast open as a possible second act.',
  tradeoff: 'It is easier than a full Seoul-to-Busan coast route, but lighter in long-form route complexity.',
  stopPattern: 'Best with one inland junction pause in Wonju and one strong coast arrival in Gangneung.',
  chooseWhen:
    'Choose this when Gangneung should be the main threshold and the route should feel eastbound, open, and extendable.',
  avoidWhen:
    'Skip this if you want a full north-to-south crossing or a heavily layered inland route with many stopover chapters.',
  pacingNote:
    'This route is strongest when it stays simple early, then becomes more open-ended after Gangneung.',
  planningNotes: [
    'Wonju is the first meaningful inland junction, not just a convenience stop.',
    'Gangneung should feel like the point where the coast opens rather than the route merely ending.',
    'Samcheok works as the first optional continuation chapter if the car trip should not stop at Gangneung.',
  ],
  stopovers: [],
  routePath: [],
};
```

- [ ] **Step 2: Add the bicycle variant shell**

Create a second variant with this opening shape:

```ts
const bicycleSeoulGangneungRoute: TransportRouteVariant = {
  id: 'bicycle-seoul-gangneung',
  routeCode: '2-0-c',
  routeGroupCode: '2-0',
  routeGroupLabel: 'Direct Eastbound',
  label: 'Stitched Eastbound Line',
  routeName: 'Seoul to Gangneung via linked inland and coast segments',
  totalTravelTime: '2-4 days',
  totalDistance: '230-300 km',
  summary:
    'A stitched eastbound riding corridor that connects Seoul-side bike-path logic, Wonju-side inland setup, and the Gangneung threshold without pretending the whole line is one seamless official certification route.',
  bestFor: 'Riders who want an eastbound route to the sea and are comfortable with a mix of official path logic and practical linking sections.',
  tradeoff: 'This is less tidy than a single branded certification route and should be described honestly as a stitched corridor.',
  stopPattern: 'Best with one practical inland setup stop and one true coast threshold stop.',
  chooseWhen:
    'Choose this when reaching Gangneung by bike matters more than riding only inside one continuous named official route.',
  avoidWhen:
    'Skip this if the ride must be explained as one seamless official certification corridor from start to finish.',
  pacingNote:
    'The bike version should stay transparent about mixed infrastructure while still feeling coherent and route-first.',
  planningNotes: [
    'Wonju should be framed as the inland junction setup city rather than an overclaimed official milestone.',
    'Gangneung is the real emotional threshold of the route even when the approach logic is mixed.',
    'Do not use language that implies a single official Seoul-to-Gangneung certification path exists.',
  ],
  stopovers: [],
  routePath: [],
};
```

- [ ] **Step 3: Add the KTX transport shell inside the Route 2 route object later**

Do not create a standalone KTX variant constant unless it makes the file cleaner. Route 1 already defines KTX inline inside the `RouteData`, and Route 2 can follow that same pattern.

### Task 2: Populate stopovers and route paths for the car and bicycle variants

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`

- [ ] **Step 1: Populate the car variant stopovers using Wonju and east-coast reuse**

Use this stopover structure for `carSeoulGangneungRoute.stopovers`:

```ts
  stopovers: [
    {
      city: 'Wonju',
      citySlug: 'wonju',
      tier: 1,
      coordinates: { lat: 37.3422, lng: 127.9202 },
      travelTimeFromPrevious: '1h 25m',
      cumulativeTime: '1h 25m',
      pitch: 'The first eastbound inland junction where the route stops feeling like Seoul overflow and starts bending decisively toward Gangwon.',
      routeRole: 'Inland junction hub',
      stayAdvice: 'Use Wonju if you want one practical inland release before the coast threshold opens in Gangneung.',
      whyItEarnsTime:
        'Wonju gives the route structural clarity. It is the point where eastbound options become legible instead of implied.',
      highlights: ['Museum SAN side trips', 'river-city reset logic', 'eastbound branching convenience'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '1h 40m',
      cumulativeTime: '3h 5m',
      pitch: 'The coast-opening threshold where the route stops being inland and starts becoming maritime.',
      routeRole: 'Coast-opening threshold',
      stayAdvice: 'Keep Gangneung if the point is to arrive at the sea with enough energy to let it become the next chapter.',
      whyItEarnsTime:
        'Gangneung turns an eastbound line into a coastal route with a second act rather than a simple endpoint.',
      highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'east-coast opening mood'],
    },
    {
      city: 'Samcheok',
      citySlug: 'samcheok',
      tier: 4,
      coordinates: { lat: 37.4499, lng: 129.1652 },
      travelTimeFromPrevious: '1h 10m',
      cumulativeTime: '4h 15m +',
      pitch: 'A scenic continuation chapter that proves the coast can keep unfolding after Gangneung.',
      routeRole: 'Optional second act',
      stayAdvice: 'Use Samcheok when Gangneung should open the coast, not close the route.',
      whyItEarnsTime:
        'It gives the car version its first real onward shoreline chapter without needing the full Busan-length coast logic.',
      highlights: ['Jangho Port', 'coastal cliffs', 'Route 7 continuation'],
    },
  ],
```

- [ ] **Step 2: Populate the bicycle variant stopovers**

Use this stopover structure for `bicycleSeoulGangneungRoute.stopovers`:

```ts
  stopovers: [
    {
      city: 'Wonju',
      citySlug: 'wonju',
      tier: 1,
      coordinates: { lat: 37.3422, lng: 127.9202 },
      travelTimeFromPrevious: 'setup / first inland day',
      cumulativeTime: 'eastbound setup',
      pitch: 'A practical inland setup city where the eastbound ride starts making route sense before the sea appears.',
      routeRole: 'Inland setup hub',
      stayAdvice: 'Keep Wonju if the ride should stage itself before committing further into Gangwon.',
      whyItEarnsTime:
        'Wonju gives the bike version a believable inland junction instead of pretending the route is one single uninterrupted official line.',
      highlights: ['junction logic', 'resupply ease', 'eastbound setup'],
    },
    {
      city: 'Gangneung',
      citySlug: 'gangneung',
      tier: 1,
      coordinates: { lat: 37.7519, lng: 128.8761 },
      travelTimeFromPrevious: '1-2 riding days later',
      cumulativeTime: 'coast threshold',
      pitch: 'The city where the eastbound ride becomes a real coast chapter.',
      routeRole: 'Coast threshold',
      stayAdvice: 'Keep Gangneung if the reward of the ride should be a true shoreline opening instead of just a destination pin.',
      whyItEarnsTime:
        'It is the cleanest eastbound finish and the strongest point from which a rider can keep going along the coast if conditions and time allow.',
      highlights: ['Anmok coast mood', 'beach arrival', 'east-coast reset'],
    },
  ],
```

- [ ] **Step 3: Add route paths for both variants**

Use these simple path shapes as a first release:

```ts
  routePath: [
    [37.5665, 126.978],
    [37.3422, 127.9202],
    [37.7519, 128.8761],
    [37.4499, 129.1652],
  ],
```

for `carSeoulGangneungRoute`, and:

```ts
  routePath: [
    [37.5665, 126.978],
    [37.3422, 127.9202],
    [37.7519, 128.8761],
  ],
```

for `bicycleSeoulGangneungRoute`.

### Task 3: Add the new `Seoul -> Gangneung` route object

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`

- [ ] **Step 1: Create the Route 2 `RouteData` object**

Add a new exported route object after `seoulToBusanRoute` with this opening shape:

```ts
export const seoulToGangneungRoute: RouteData = {
  routeCode: '2',
  from: 'Seoul',
  fromSlug: 'seoul',
  to: 'Gangneung',
  toSlug: 'gangneung',
  href: '/routes/seoul/gangneung',
  routeLabel: 'Seoul to Gangneung',
  headline: 'One eastbound route, three very different ways to let the coast open.',
  overview:
    'This is the cleanest second route family on the site: Seoul energy at the start, Wonju as the inland junction, then Gangneung as the threshold where the east coast begins to read like a real chapter.',
  destinationPitch:
    'Use this route when the point is not just getting to Gangneung, but reaching the sea in a way that can stay open to a longer east-coast sequence.',
  bestUseCases: [
    'Trips that want a shorter Seoul-origin route than Busan without losing route identity.',
    'Travelers deciding whether Gangneung is the destination or the start of a coastal second act.',
    'Eastbound route planning that needs a clear inland junction before the shore opens.',
  ],
  routePromise: [
    'Wonju gives the route its first structural release from the capital.',
    'Gangneung works best as a coast-opening threshold, not just an arrival pin.',
    'The car and bicycle versions can naturally point beyond Gangneung without requiring a full Busan-length coast commitment.',
  ],
  editorialNotes: [
    'Treat Wonju as the first meaningful inland junction, not as a generic middle stop.',
    'Use KTX when Gangneung is the intended chapter and the route should stay elegant.',
    'Use the car version when the coast should remain open after arrival instead of ending immediately.',
    'For bicycle planning, be honest that this is a stitched corridor, not one seamless official certification line.',
  ],
  transports: {
    KTX: {} as TransportRoute,
    car: {} as TransportRoute,
    bicycle: {} as TransportRoute,
    bus: {} as TransportRoute,
  },
};
```

- [ ] **Step 2: Fill the KTX transport inline**

Use this KTX block:

```ts
    KTX: {
      mode: 'KTX',
      id: 'ktx-eastbound',
      routeCode: '2-0-a',
      routeGroupCode: '2-0',
      routeGroupLabel: 'Direct Eastbound',
      label: 'KTX',
      routeName: 'Seoul to Gangneung KTX',
      totalTravelTime: '1h 50m - 2h',
      totalDistance: '237 km',
      summary:
        'The cleanest eastbound version when the goal is to open Gangneung directly without pretending the route needs heavy intermediate structure.',
      bestFor: 'Short trips, simple coast-openers, and travelers who want Gangneung to feel immediate.',
      tradeoff: 'Fast and elegant, but much lighter in stopover logic than the car or bicycle versions.',
      stopPattern: 'Best as a direct threshold route with only light Wonju junction framing in the editorial copy.',
      chooseWhen:
        'Choose KTX when Gangneung is the intended first chapter and the route should arrive with the least friction.',
      avoidWhen:
        'Skip this if the route needs a meaningful inland stopover structure before the coast opens.',
      pacingNote:
        'This route works best when the train is treated as a clean eastbound opener and the real route identity begins in Gangneung.',
      planningNotes: [
        'Wonju can be mentioned as a junction note, but not as a required stop.',
        'The real promise here is that the coast can begin quickly and cleanly.',
        'Use this when you want more time in Gangneung than on the way to it.',
      ],
      stopovers: [
        {
          city: 'Gangneung',
          citySlug: 'gangneung',
          tier: 1,
          coordinates: { lat: 37.7519, lng: 128.8761 },
          travelTimeFromPrevious: '1h 50m',
          cumulativeTime: '1h 50m',
          pitch: 'The city where the train line opens the coast cleanly and immediately.',
          routeRole: 'Coast-opening threshold',
          stayAdvice: 'Use Gangneung when the route should start at the sea with minimal friction.',
          whyItEarnsTime:
            'It turns a short transfer into a true eastbound chapter rather than a utilitarian arrival.',
          highlights: ['Anmok Coffee Street', 'Gyeongpo Beach', 'eastbound coast opening'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [37.7519, 128.8761],
      ],
    },
```

- [ ] **Step 3: Fill the bus transport inline as a simple fallback**

Use this bus block:

```ts
    bus: {
      mode: 'bus',
      id: 'bus-eastbound',
      routeCode: '2-0-d',
      routeGroupCode: '2-0',
      routeGroupLabel: 'Direct Eastbound',
      label: 'Bus',
      routeName: 'Express Bus to Gangneung',
      totalTravelTime: '2h 30m - 3h 10m',
      totalDistance: '230 km',
      summary:
        'A practical eastbound alternative when direct rail timing is awkward and the route still needs to open at Gangneung without too much complexity.',
      bestFor: 'Budget-sensitive direct eastbound trips and travelers who still want a simple coast-opening route.',
      tradeoff: 'Less elegant than KTX and less flexible than driving, but still a valid route-first opener.',
      stopPattern: 'Best kept simple, with Gangneung doing most of the route work.',
      chooseWhen:
        'Choose the bus when direct eastbound practicality matters more than speed or stopover complexity.',
      avoidWhen:
        'Skip it if the point of the route is to make Wonju or the inland junction logic more explicit.',
      pacingNote:
        'Bus should stay light and functional here. The route identity still begins more strongly at arrival than in transit.',
      planningNotes: [
        'This is the practical fallback version of Route 2.',
        'Gangneung still needs to do the emotional work of opening the coast.',
        'Do not overbuild this variant in phase 1.',
      ],
      stopovers: [
        {
          city: 'Gangneung',
          citySlug: 'gangneung',
          tier: 1,
          coordinates: { lat: 37.7519, lng: 128.8761 },
          travelTimeFromPrevious: '2h 45m',
          cumulativeTime: '2h 45m',
          pitch: 'A direct eastbound arrival where the route can begin at the coast instead of in layered stopovers.',
          routeRole: 'Direct coast threshold',
          stayAdvice: 'Use this when the route should stay simple and put the time into Gangneung itself.',
          whyItEarnsTime:
            'Even in the practical version, Gangneung still marks the point where the trip becomes sea-facing.',
          highlights: ['beach arrival', 'coast-opening mood', 'eastbound simplicity'],
        },
      ],
      routePath: [
        [37.5665, 126.978],
        [37.7519, 128.8761],
      ],
    },
```

- [ ] **Step 4: Wire car and bicycle transports to the variant constants**

Use this shape:

```ts
    car: {
      mode: 'car',
      variants: [carSeoulGangneungRoute],
      ...carSeoulGangneungRoute,
    },
    bicycle: {
      mode: 'bicycle',
      variants: [bicycleSeoulGangneungRoute],
      ...bicycleSeoulGangneungRoute,
    },
```

### Task 4: Register Route 2 in the route registry

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`

- [ ] **Step 1: Add Route 2 to `allRoutes`**

Change:

```ts
const allRoutes: RouteData[] = [seoulToBusanRoute];
```

to:

```ts
const allRoutes: RouteData[] = [seoulToBusanRoute, seoulToGangneungRoute];
```

- [ ] **Step 2: Verify the route lookup path now supports `/routes/seoul/gangneung`**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\routeStopovers.ts' -Pattern "toSlug: 'gangneung'","href: '/routes/seoul/gangneung'","const allRoutes: RouteData\\[\\]" -Context 0,2`

Expected: the new route object and the updated registry both exist in the file.

### Task 5: Verify and close out

**Files:**
- Verify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`

- [ ] **Step 1: Run lint**

Run: `npm.cmd run lint`

Expected: `eslint` completes successfully.

- [ ] **Step 2: Review the Route 2 diff**

Run: `git -C D:\Project\roadtokorea\frontend diff -- data/routeStopovers.ts`

Expected: the diff shows Route 2 variant constants, one new route object, and a one-line update to `allRoutes`.

- [ ] **Step 3: Confirm Route 2 city reuse is coherent**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\routeStopovers.ts' -Pattern "city: 'Wonju'","city: 'Gangneung'","city: 'Samcheok'" -Context 0,6`

Expected: Wonju appears as the inland junction, Gangneung as the threshold, and Samcheok only in the car version as the first optional continuation chapter.

- [ ] **Step 4: Commit the implementation**

Run:

```bash
git add data/routeStopovers.ts
git commit -m "feat: add route 2 seoul gangneung"
```

Expected: one focused feature commit for the new route family.
