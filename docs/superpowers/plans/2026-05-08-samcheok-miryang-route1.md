# Samcheok And Miryang Route 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add full Route 1 support-page data for `Samcheok` and `Miryang`, then promote them into the curated updated-cities set if the pages meet the current quality bar.

**Architecture:** Keep the existing city-detail rendering system unchanged and implement the feature entirely through `data/citySupportProfiles.ts`, with optional follow-up edits to `data/updatedCities.ts` once the new pages are strong enough. Use nearby Route 1 support samples as references: `Uljin` for Samcheok’s coast-continuation shape and `Changnyeong` for Miryang’s quiet-hinge shape.

**Tech Stack:** Next.js App Router, TypeScript, ESLint, static route-support data in `citySupportProfiles.ts`

---

### Task 1: Baseline route-role inspection and insertion planning

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`
- Reference: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`
- Reference: `D:\Project\roadtokorea\frontend\docs\superpowers\specs\2026-05-08-samcheok-miryang-route1-design.md`

- [ ] **Step 1: Verify the route-stop role cues for both cities**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\routeStopovers.ts' -Pattern "city: 'Samcheok'","city: 'Miryang'" -Context 0,12`

Expected: Samcheok is framed as `Coastline continuation` / `Scenic continuation`, and Miryang is framed as `Quiet hinge`.

- [ ] **Step 2: Verify the support-profile file does not already contain either city**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern 'samcheok: \{','miryang: \{'`

Expected: no matches, confirming these are new support pages rather than upgrades.

- [ ] **Step 3: Pick stable insertion points in `citySupportProfiles.ts`**

Use these neighboring blocks as reference anchors:

```ts
  uljin: {
    slug: 'uljin',
    city: 'Uljin',
    // ...
  },
```

```ts
  changnyeong: {
    slug: 'changnyeong',
    city: 'Changnyeong',
    // ...
  },
```

Insert `samcheok` near the east-coast set and `miryang` near the late inland / lower-river set to preserve file legibility.

### Task 2: Add the Samcheok support profile

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Add the Samcheok top-level profile block**

Create a new `samcheok` entry with this structural opening:

```ts
  samcheok: {
    slug: 'samcheok',
    city: 'Samcheok',
    mapTitle: 'Where the east coast keeps unfolding instead of rushing south',
    mapIntro:
      'Samcheok is a continuity map for the east coast. It matters when the route should stay scenic, open-road, and visibly shoreline-led between Gangneung and Uljin.',
    mapCenter: { lat: 37.4499, lng: 129.1652 },
    supportSummary:
      'Samcheok works as the scenic continuation node. It keeps the east coast from collapsing into only a few major names and gives the shoreline one more believable chapter of cliffs, ports, and open road.',
    roleSummary:
      'This is the coastline continuation city. Samcheok makes the east-coast route feel unfolded rather than summarized, especially for users who want the sea to read as a sequence instead of a jump cut.',
    staySummary:
      'The best Samcheok stays are simple shoreline overnights and scenic coast-road pauses that let the route remain spacious before Uljin takes over the longer quiet-coast logic.',
    foodSummary:
      'Food here should support coastal pacing rather than destination theatrics: seafood meals, easy breakfasts, and enough local flavor to keep the stop grounded.',
    nextLegSummary:
      'After Samcheok, the route should keep breathing into Uljin rather than feeling like it already needs a bigger city handoff.',
    accommodationNote:
      'Strongest stay-planning angle: one low-friction shoreline stay group and one more scenic coast-road stay read for travelers who want the east coast to unfold in chapters.',
```

- [ ] **Step 2: Add Samcheok sections, decisions, and stay zones**

Use this target content shape:

```ts
    sections: [
      {
        title: 'Why Samcheok matters after Gangneung',
        body:
          'Samcheok keeps Gangneung from becoming the only convincing coast chapter. It gives the east side another stretch where the route feels scenic, spacious, and intentionally sea-led.',
      },
      {
        title: 'Why a smaller scenic city can still earn a night',
        body:
          'The route gets stronger when the coast has one more lower-pressure chapter before the long quiet shoreline of Uljin takes over.',
      },
      {
        title: 'How to use the stop well',
        body:
          'Use Samcheok for one scenic overnight, one sea-facing reset, or one slower meal-and-viewpoint chapter that keeps Route 7 from feeling rushed.',
      },
    ],
    decisions: [
      {
        title: 'Keep Samcheok for coastline spacing',
        bestFor: 'Drivers and riders who want the east coast to feel sequential rather than compressed.',
        why:
          'The city earns time when the route should unfold in chapters instead of jumping only between larger coastal anchors.',
      },
      {
        title: 'Use it as the scenic overnight before Uljin',
        bestFor: 'Travelers who want one softer coast stay before the longer quiet-coast section begins.',
        why:
          'Samcheok is strongest when it protects the route’s openness before the next chapter turns calmer and less dramatic.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a shoreline stay',
        areaLabel: 'Sea-facing strip',
        bestFor: 'Simple coast overnights that keep the route visually maritime.',
        why:
          'This is the cleanest choice when the point is to sleep near the sea and keep the coast feeling continuous.',
      },
      {
        title: 'Lean into the scenic coast road',
        areaLabel: 'Cliff-and-road edge',
        bestFor: 'Travelers who want a slower scenic version of the overnight.',
        why:
          'This version makes the stop feel like part of the coastline itself rather than a generic room near the route.',
      },
    ],
```

- [ ] **Step 3: Add Samcheok visuals and support points**

Use generated-asset placeholders that match project conventions:

```ts
    visuals: [
      {
        eyebrow: 'Scenic continuation',
        title: 'Samcheok keeps the coast from turning into a shortcut',
        image: '/images/routes/route-1/samcheok/hero-generated-v1.png',
        alt: 'Editorial route image for Samcheok scenic continuation',
        body:
          'The city belongs when the east coast should keep unfolding instead of racing from one major label to the next.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/samcheok/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'samcheok-shoreline-stay',
        name: 'Shoreline stay strip',
        kind: 'stay',
        areaLabel: 'Sea-facing edge',
        coordinates: { lat: 37.4464, lng: 129.1637 },
        summary: 'A simple coast-facing overnight area for keeping the sea as the center of the chapter.',
        note: 'Best when the route should remain scenic and open rather than hurry into the next county.',
      },
      {
        id: 'samcheok-port-checkpoint',
        name: 'Port-and-cliff checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Scenic harbor edge',
        coordinates: { lat: 37.4469, lng: 129.1921 },
        summary: 'A useful orientation point for why Samcheok belongs as a visual continuation city.',
        note: 'This is where the east coast still feels varied and chaptered instead of generic.',
      },
      {
        id: 'samcheok-meal-line',
        name: 'Coast meal line',
        kind: 'food',
        areaLabel: 'Harbor-side streets',
        coordinates: { lat: 37.4452, lng: 129.1658 },
        summary: 'A practical seafood and breakfast corridor for turning the stop into a real route pause.',
        note: 'Use this for timing, local flavor, and a cleaner handoff south.',
      },
      {
        id: 'samcheok-scenic-reset',
        name: 'Open-coast reset edge',
        kind: 'recovery',
        areaLabel: 'Cliff-road side',
        coordinates: { lat: 37.4613, lng: 129.1854 },
        summary: 'A lighter scenic reset point that explains why one more coast chapter can still matter.',
        note: 'Useful when the point is emotional pacing rather than only distance covered.',
      },
      {
        id: 'samcheok-uljin-handoff',
        name: 'Uljin handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound Route 7',
        coordinates: { lat: 37.3014, lng: 129.2907 },
        summary: 'The line where Samcheok’s scenic chapter begins handing the route to Uljin’s longer quiet-coast logic.',
        note: 'This keeps the page pointed toward continuation rather than ending inside the city.',
      },
    ],
  },
```

- [ ] **Step 4: Verify Samcheok has no placeholder references**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "samcheok","placeholder.png" -Context 0,3`

Expected: the Samcheok block contains route-specific visual paths and no placeholder references.

### Task 3: Add the Miryang support profile

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Add the Miryang top-level profile block**

Create a new `miryang` entry with this structural opening:

```ts
  miryang: {
    slug: 'miryang',
    city: 'Miryang',
    mapTitle: 'Where the southern route bends toward Busan without rushing',
    mapIntro:
      'Miryang is a quiet-hinge map for the late Route 1 line. It matters when the route should keep its river calm and practical control before the Busan finish begins.',
    mapCenter: { lat: 35.5038, lng: 128.7464 },
    supportSummary:
      'Miryang works as the quiet southern hinge. It lets the route stay low-pressure and composed before Busan instead of forcing one more loud city beat.',
    roleSummary:
      'This is the final quiet hinge. Miryang helps the route turn toward Busan with control, softer pacing, and one last practical chapter that does not try to overshadow the arrival.',
    staySummary:
      'The strongest stays here are simple central overnights and calmer river-adjacent resets that keep the final approach organized.',
    foodSummary:
      'Food in Miryang should support a reset-first southern handoff: practical dinners, easy breakfasts, and one quieter local meal before the metropolitan finish.',
    nextLegSummary:
      'After Miryang, the route should feel ready to arrive. The point is not more exploration but a cleaner final transition into Busan.',
    accommodationNote:
      'Strongest stay-planning angle: one practical central stay group and one quieter river-facing stay read for travelers who want Busan to start from a calmer position.',
```

- [ ] **Step 2: Add Miryang sections, decisions, and stay zones**

Use this target content shape:

```ts
    sections: [
      {
        title: 'Why Miryang matters late',
        body:
          'Miryang earns time when the route needs one last low-pressure chapter before Busan. It keeps the finish from becoming abrupt or overworked.',
      },
      {
        title: 'Why this stop is different from Changnyeong',
        body:
          'Changnyeong is about lower-river recovery. Miryang is about turning that calmer logic toward a real metropolitan finish without losing composure.',
      },
      {
        title: 'How to use the overnight well',
        body:
          'Use Miryang when the route should sleep simply, eat easily, and enter Busan with better timing and less leftover fatigue.',
      },
    ],
    decisions: [
      {
        title: 'Keep Miryang for a quieter final hinge',
        bestFor: 'Travelers who want one last practical southern overnight before Busan.',
        why:
          'The city is strongest when it protects the final arrival from becoming one more long push.',
      },
      {
        title: 'Use it instead of one more louder city beat',
        bestFor: 'Users who already had enough city energy and now want a more controlled handoff into Busan.',
        why:
          'Miryang preserves the softer route tone and keeps the finish from becoming overstaged.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central stay grid',
        areaLabel: 'Miryang center',
        bestFor: 'Travelers who want the simplest late-route dinner-sleep-depart sequence.',
        why:
          'This is the most reliable overnight shape when the only job left is to finish well.',
      },
      {
        title: 'Lean toward the river-facing calmer edge',
        areaLabel: 'River side',
        bestFor: 'Travelers who want one quieter southern night before the Busan chapter begins.',
        why:
          'This choice preserves the route’s calmer lower-river character right until the metropolitan handoff.',
      },
    ],
```

- [ ] **Step 3: Add Miryang visuals and support points**

Use generated-asset placeholders that match project conventions:

```ts
    visuals: [
      {
        eyebrow: 'Quiet hinge',
        title: 'Miryang helps the route arrive without rushing into arrival too soon',
        image: '/images/routes/route-1/miryang/hero-generated-v1.png',
        alt: 'Editorial route image for Miryang quiet hinge',
        body:
          'The city matters because not every final route chapter should be loud. Sometimes the stronger finish is the calmer one.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/miryang/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'miryang-central-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'Town core',
        coordinates: { lat: 35.4939, lng: 128.7469 },
        summary: 'A practical overnight area for protecting the final approach into Busan.',
        note: 'Best when the route needs a simple last-night sequence without extra complexity.',
      },
      {
        id: 'miryang-meal-line',
        name: 'Southern reset meal line',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 35.4948, lng: 128.7507 },
        summary: 'A practical dinner-and-breakfast corridor for turning Miryang into a clean hinge rather than a vague pass-through.',
        note: 'Use this for low-friction meals that support a better final day.',
      },
      {
        id: 'miryang-river-reset',
        name: 'River-facing reset edge',
        kind: 'recovery',
        areaLabel: 'Riverside side',
        coordinates: { lat: 35.5008, lng: 128.7581 },
        summary: 'A calmer edge that preserves the softer route tone right before Busan begins to pull harder.',
        note: 'This is where Miryang explains itself as a quieter final hinge rather than one more city stop.',
      },
      {
        id: 'miryang-yeongnamnu-checkpoint',
        name: 'Yeongnamnu checkpoint',
        kind: 'checkpoint',
        areaLabel: 'River-facing landmark edge',
        coordinates: { lat: 35.4965, lng: 128.7595 },
        summary: 'A useful orientation point for giving Miryang one grounded local image without making the page destination-first.',
        note: 'Good for helping the city feel rooted instead of purely logistical.',
      },
      {
        id: 'miryang-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Final southeast line',
        coordinates: { lat: 35.3884, lng: 128.8461 },
        summary: 'The line where the quiet southern hinge becomes the final metropolitan approach.',
        note: 'This keeps the page pointed toward arrival and preserves the role of the city inside the route.',
      },
    ],
  },
```

- [ ] **Step 4: Verify Miryang has no placeholder references**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "miryang","placeholder.png" -Context 0,3`

Expected: the Miryang block contains route-specific visual paths and no placeholder references.

### Task 4: Promote both cities into the updated-cities set if the profiles are complete

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

- [ ] **Step 1: Add Samcheok to the curated dataset**

Append this entry:

```ts
  {
    name: 'Samcheok',
    slug: 'samcheok',
    tier: 'tier-4',
    href: '/tier-4/samcheok',
    reason: 'Scenic continuation page now gives the east coast one more real chapter between Gangneung and Uljin.',
    role: 'Scenic coastline continuation',
  },
```

- [ ] **Step 2: Add Miryang to the curated dataset**

Append this entry:

```ts
  {
    name: 'Miryang',
    slug: 'miryang',
    tier: 'tier-4',
    href: '/tier-4/miryang',
    reason: 'Quiet-hinge page now gives the late Route 1 line a calmer final handoff before Busan.',
    role: 'Quiet southern hinge',
  },
```

- [ ] **Step 3: Verify the new links and tier values**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\updatedCities.ts' -Pattern 'samcheok','miryang','/tier-4/samcheok','/tier-4/miryang'`

Expected: both cities appear with direct city-page hrefs and `tier-4`.

### Task 5: Verify and close out

**Files:**
- Verify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`
- Verify: `D:\Project\roadtokorea\frontend\data\updatedCities.ts`

- [ ] **Step 1: Run lint**

Run: `npm.cmd run lint`

Expected: `eslint` completes successfully.

- [ ] **Step 2: Review the combined diff**

Run: `git -C D:\Project\roadtokorea\frontend diff -- data/citySupportProfiles.ts data/updatedCities.ts`

Expected: the diff shows two new full support-page entries and two new curated updated-city entries only.

- [ ] **Step 3: Confirm Route 1 has no remaining unprofiled secondary stop targets**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\routeStopovers.ts' -Pattern "city: 'Samcheok'","city: 'Miryang'" -Context 0,4`

Expected: both route-stop cities now also exist as full city-support pages in `citySupportProfiles.ts`.

- [ ] **Step 4: Commit the implementation**

Run:

```bash
git add data/citySupportProfiles.ts data/updatedCities.ts
git commit -m "feat: add remaining route 1 secondary support cities"
```

Expected: one focused feature commit covering the new Samcheok and Miryang support pages plus their updated-cities promotion.
