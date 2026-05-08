# Route 1 Corridor City Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Daejeon, Cheonan, Gumi, and Changnyeong so the Route 1 corridor feels closer to Chungju-grade route-support quality and commercial readiness.

**Architecture:** Keep the existing city-detail rendering architecture unchanged and concentrate work inside `data/citySupportProfiles.ts`. Strengthen Daejeon first as the practical-corridor reference sample, then propagate the same density and clarity to the other three cities, followed by a focused corridor QA pass.

**Tech Stack:** Next.js App Router, TypeScript, ESLint, static image assets in `public/images/routes/route-1`

---

### Task 1: Baseline verification and target shape

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`
- Reference: `D:\Project\roadtokorea\frontend\docs\superpowers\specs\2026-05-08-route1-corridor-city-upgrade-design.md`

- [ ] **Step 1: Inspect the profile schema and target city entries**

Use these schema anchors while editing:

```ts
export interface CitySupportProfile {
  slug: string;
  city: string;
  mapTitle: string;
  mapIntro: string;
  supportSummary: string;
  roleSummary: string;
  staySummary: string;
  foodSummary: string;
  nextLegSummary: string;
  accommodationNote?: string;
  sections: CitySupportProfileSection[];
  decisions: CitySupportProfileDecision[];
  stayZones?: CitySupportStayZone[];
  visuals: CitySupportProfileVisual[];
  points: CitySupportPoint[];
}
```

- [ ] **Step 2: Verify no code changes are needed before content edits**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern 'daejeon: \{','cheonan: \{','gumi: \{','changnyeong: \{'`

Expected: one block per target city is present in `citySupportProfiles.ts`.

- [ ] **Step 3: Confirm available image assets for each target city**

Run: `Get-ChildItem -Path 'D:\Project\roadtokorea\frontend\public\images\routes\route-1\daejeon','D:\Project\roadtokorea\frontend\public\images\routes\route-1\cheonan','D:\Project\roadtokorea\frontend\public\images\routes\route-1\gumi','D:\Project\roadtokorea\frontend\public\images\routes\route-1\changnyeong'`

Expected: each city directory contains at least `hero-generated-v1.png`, which can be reused in `visuals` if no better local asset is already present.

### Task 2: Upgrade Daejeon into the practical-corridor reference

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Write the Daejeon content upgrade in `citySupportProfiles.ts`**

Replace or sharpen the Daejeon content so it clearly separates station efficiency from Yuseong recovery, expands the support points, and removes placeholder visuals.

Use this target shape while editing:

```ts
daejeon: {
  slug: 'daejeon',
  city: 'Daejeon',
  accommodationNote:
    'Strongest stay-planning angle: station-core business stays for clean departures and Yuseong recovery stays for slower or fatigue-led overnights.',
  decisions: [
    {
      title: 'Keep the split tight near the station',
      bestFor: 'Rail travelers, late arrivals, and anyone protecting an early southbound departure.',
      why:
        'This keeps Daejeon practical and gives the route a clean overnight without adding transfer friction.',
    },
    {
      title: 'Turn the stop into a recovery night in Yuseong',
      bestFor: 'Drivers, cyclists, and travelers whose next day will be stronger if tonight feels restorative.',
      why:
        'Yuseong makes Daejeon warmer and more useful when the route needs energy back, not just a room.',
    },
  ],
  visuals: [
    {
      eyebrow: 'Central split',
      title: 'Daejeon should feel like the route dividing cleanly',
      image: '/images/routes/route-1/daejeon/hero-generated-v1.png',
      alt: 'Editorial route image for Daejeon central split',
      body:
        'The city earns its place when the user can immediately understand whether this is a station night or a recovery night.',
      sourceLabel: 'Road to Korea generated editorial',
      sourceHref: '/images/routes/route-1/daejeon/hero-generated-v1.png',
      licenseLabel: 'Project editorial asset',
    },
  ],
}
```

- [ ] **Step 2: Ensure Daejeon has 4 to 8 meaningful support points**

Support points should map to route use, not sightseeing fame. Use categories like `stay`, `recovery`, `food`, `checkpoint`, and `mobility`.

Example point pattern:

```ts
{
  id: 'daejeon-station-grid',
  name: 'Daejeon Station grid',
  category: 'stay',
  lat: 36.3321,
  lng: 127.4349,
  summary: 'Best for the cleanest overnight split and earliest onward departures.',
  note: 'Use this when the city should preserve momentum rather than slow the route down.',
}
```

- [ ] **Step 3: Verify Daejeon no longer references placeholders**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "daejeon","placeholder.png" -Context 0,3`

Expected: the Daejeon block should not point at `placeholder.png`.

### Task 3: Propagate the stronger pattern to Cheonan

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Rewrite Cheonan to read as a deliberate early-route support city**

Keep Cheonan lighter than Daejeon, but sharpen the early-break logic and remove placeholder visuals.

Use this target shape while editing:

```ts
cheonan: {
  accommodationNote:
    'Strongest stay-planning angle: station-side low-friction stays for late departures from Seoul and simple first-night resets.',
  decisions: [
    {
      title: 'Pause briefly and keep moving',
      bestFor: 'Travelers who only need a first reset meal, coffee, or short timing break.',
      why:
        'Cheonan is strongest when it softens the route early without pretending to become a full chapter.',
    },
    {
      title: 'Sleep once to break Seoul momentum',
      bestFor: 'Late departures, budget-minded travelers, and users who want day two to begin cleaner.',
      why:
        'A short overnight here can make the rest of Route 1 feel paced instead of rushed.',
    },
  ],
  visuals: [
    {
      image: '/images/routes/route-1/cheonan/hero-generated-v1.png',
      sourceHref: '/images/routes/route-1/cheonan/hero-generated-v1.png',
    },
  ],
}
```

- [ ] **Step 2: Expand Cheonan support points to the same schema density**

Include 4 to 8 points covering station stay, terminal mobility, snack / meal reset, and one softer local edge.

- [ ] **Step 3: Verify Cheonan no longer references placeholders**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "cheonan","placeholder.png" -Context 0,3`

Expected: the Cheonan block should not point at `placeholder.png`.

### Task 4: Propagate the stronger pattern to Gumi

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Rewrite Gumi to own its middle-corridor role**

Keep Gumi honest and practical, but make the handoff into Daegu clearer and commercially usable.

Use this target shape while editing:

```ts
gumi: {
  accommodationNote:
    'Strongest stay-planning angle: quiet corridor hotels that preserve energy before Daegu becomes the bigger southern chapter.',
  decisions: [
    {
      title: 'Use Gumi as a fatigue buffer',
      bestFor: 'Drivers who want the middle of the corridor to stay manageable.',
      why:
        'The city adds value when it prevents the direct line from flattening into a single long push.',
    },
    {
      title: 'Sleep cheap and hand off to Daegu stronger',
      bestFor: 'Travelers who still want Daegu to be the main southern city but do not need to force it tonight.',
      why:
        'A calmer, cheaper night here often improves the quality of the next chapter.',
    },
  ],
  visuals: [
    {
      image: '/images/routes/route-1/gumi/hero-generated-v1.png',
      sourceHref: '/images/routes/route-1/gumi/hero-generated-v1.png',
    },
  ],
}
```

- [ ] **Step 2: Expand Gumi support points to 4 to 8 route-useful entries**

Include central stay, mobility, easy dinner, river-edge breather, and southbound handoff logic.

- [ ] **Step 3: Verify Gumi no longer references placeholders**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "gumi","placeholder.png" -Context 0,3`

Expected: the Gumi block should not point at `placeholder.png`.

### Task 5: Propagate the stronger pattern to Changnyeong

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Rewrite Changnyeong as the late-route recovery node**

Make the quiet lower-river identity more explicit and remove placeholder visuals.

Use this target shape while editing:

```ts
changnyeong: {
  accommodationNote:
    'Strongest stay-planning angle: calm practical stays for riders and slower lower-river users who want Busan to begin from a rested position.',
  decisions: [
    {
      title: 'Use Changnyeong to keep the finish unforced',
      bestFor: 'Cyclists and slower inland travelers who benefit from one more restorative night.',
      why:
        'This is the better choice when a quieter finish will improve the final arrival more than another city-heavy stop.',
    },
    {
      title: 'Skip it if you still want urban energy',
      bestFor: 'Travelers who would rather concentrate the final city chapter in Daegu or Busan.',
      why:
        'Changnyeong is valuable because it offers the opposite of a dense city handoff.',
    },
  ],
  visuals: [
    {
      image: '/images/routes/route-1/changnyeong/hero-generated-v1.png',
      sourceHref: '/images/routes/route-1/changnyeong/hero-generated-v1.png',
    },
  ],
}
```

- [ ] **Step 2: Expand Changnyeong support points to 4 to 8 route-useful entries**

Include calm central stay, lower-river edge, practical food reset, and finish-preparation cues for slower users.

- [ ] **Step 3: Verify Changnyeong no longer references placeholders**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern "changnyeong","placeholder.png" -Context 0,3`

Expected: the Changnyeong block should not point at `placeholder.png`.

### Task 6: Corridor QA and regression check

**Files:**
- Modify: `D:\Project\roadtokorea\frontend\data\routeStopovers.ts` only if wording mismatch is clearly user-visible
- Verify: `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

- [ ] **Step 1: Scan the upgraded cities for schema consistency**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern 'daejeon: \{','cheonan: \{','gumi: \{','changnyeong: \{' -Context 0,120`

Expected: each target city includes stronger summaries, decisions, stay zones, visuals, and points without malformed arrays or missing fields.

- [ ] **Step 2: Scan for leftover placeholders in the four upgraded city blocks**

Run: `Select-String -Path 'D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts' -Pattern 'placeholder.png'`

Expected: no `placeholder.png` matches remain for Daejeon, Cheonan, Gumi, or Changnyeong.

- [ ] **Step 3: Run lint**

Run: `npm.cmd run lint`

Expected: ESLint completes successfully with no new errors.

- [ ] **Step 4: Review git diff before closeout**

Run: `git diff -- docs/superpowers/specs/2026-05-08-route1-corridor-city-upgrade-design.md docs/superpowers/plans/2026-05-08-route1-corridor-city-upgrade.md data/citySupportProfiles.ts data/routeStopovers.ts`

Expected: diff shows only the planned corridor-city upgrades and any minimal wording alignment required for Route 1 QA.
