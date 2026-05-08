# Route 1 Corridor City Upgrade Design

## Goal

Upgrade the remaining practical corridor cities in Route 1 so they are closer to the current Chungju standard, starting with Daejeon as the second reference-quality sample.

This design covers:

- `Daejeon`
- `Cheonan`
- `Gumi`
- `Changnyeong`

The outcome should make Route 1 feel commercially ready, not merely populated.

## Why This Work Matters

Route 1 is already structurally strong, but several practical corridor cities still read as lighter support entries rather than full route-support pages. They have the right schema in `citySupportProfiles.ts`, but they still lag behind Chungju in three ways:

1. local support points are less specific and less route-actionable
2. stay / recovery / handoff logic is less commercially sharp
3. visual support still relies on placeholders

The goal is not to turn every city into a spectacle city. The goal is to make each city more decisive about what kind of route stop it is and how that stop converts into sleep, recovery, food, and next-leg decisions.

## Chosen Approach

Use a mixed rollout:

1. upgrade `Daejeon` first to become a new reference-quality practical corridor sample
2. reuse that stronger pattern to upgrade `Cheonan`, `Gumi`, and `Changnyeong`
3. finish with a focused Route 1 corridor QA pass

This is preferred over editing all four cities uniformly from the start because Daejeon is the strongest anchor for a practical-commercial template:

- central split logic
- station-side efficiency
- Yuseong recovery logic
- clear accommodation intent

Once that pattern is sharp, the other cities can be tuned relative to it instead of improvised independently.

## Product Intent Per City

### Daejeon

Role:
central stabilizer and clean route splitter

Primary conversion:
station-core business stay or Yuseong recovery stay

Editorial promise:
the route can divide here cleanly without becoming generic

### Cheonan

Role:
early low-stakes first break

Primary conversion:
station-side low-friction first overnight

Editorial promise:
the route gets its first exhale without pretending this is a major destination chapter

### Gumi

Role:
middle-corridor breather before Daegu

Primary conversion:
cheap, practical one-night stay or fatigue-management break

Editorial promise:
the direct corridor still needs care even when the stop is not glamorous

### Changnyeong

Role:
late lower-river recovery node before Busan

Primary conversion:
quiet restorative overnight for slower or cycling-oriented users

Editorial promise:
the route does not need another major city to finish well

## Scope Of Changes

Primary file:

- `D:\Project\roadtokorea\frontend\data\citySupportProfiles.ts`

Possible supporting files if needed after inspection:

- `D:\Project\roadtokorea\frontend\data\routeStopovers.ts`
- `D:\Project\roadtokorea\frontend\public\images\routes\route-1\<city>\...`

The default assumption is that most of the work stays inside `citySupportProfiles.ts` unless route-card wording or supporting assets clearly need alignment.

## Daejeon Reference Upgrade

`Daejeon` should be upgraded first and used as the new practical-corridor benchmark.

Required improvements:

- strengthen local support points so they map to actual route-use decisions
- separate station efficiency from Yuseong recovery more clearly
- sharpen accommodation wording around business-stay versus recovery-stay intent
- replace placeholder visuals with route-consistent city visuals if assets already exist or can be generated from existing project conventions
- ensure the page feels intentionally practical, not underwritten

The upgraded Daejeon page should answer:

- when should the user stop here instead of pushing farther
- who should stay near the station
- who should move toward Yuseong
- how this stop changes the next southbound block

## Pattern To Propagate

After Daejeon is strengthened, apply the same structural expectations to the other three cities:

- 4 to 8 meaningful support points
- clearer stay-zone differentiation
- stronger accommodation note wording
- route-role language that distinguishes each city from the others
- visuals that support the city role instead of placeholders

The cities should not become stylistic copies. They should become equally decisive while remaining different in purpose.

## Content Rules

These edits should preserve the route-first editorial discipline:

- do not drift into generic tourism-guide writing
- do not inflate smaller cities into false "must-see" chapters
- do not use abstract lifestyle copy that does not help route decisions
- do make sleep, recovery, meal, and next-leg logic more explicit
- do keep each city commercially legible for future accommodation blocks

## Data And Rendering Design

The current page architecture already supports this work. No component redesign is planned unless inspection finds a blocking mismatch.

Expected data-level edits:

- enrich `supportSummary`, `roleSummary`, `staySummary`, `foodSummary`, `nextLegSummary`
- expand or sharpen `sections`
- expand `decisions`
- refine `stayZones`
- replace or improve `visuals`
- ensure `points` reflect real route-use groupings such as stay, recovery, food, checkpoint, and mobility

If any city still underuses the `points` model relative to Chungju, bring it closer to that structure without changing the consumer API.

## Testing And QA Strategy

This work is primarily content/data behavior, so the verification strategy should focus on render integrity and regression safety.

Planned verification:

1. inspect the edited city entries for schema consistency
2. run lint for the frontend app
3. check for remaining placeholder visual references in the upgraded cities
4. spot-check route and city linkage language where practical corridor wording may now be outdated

If render problems appear, inspect the consuming city-detail page and repair only the minimum required surface.

## Risks

### Risk 1: all four cities become too similar

Mitigation:
make each city's role explicit before editing and enforce distinct route promises.

### Risk 2: practical cities become generic again

Mitigation:
tie every summary and point to a concrete route decision, not a destination description.

### Risk 3: visuals stay unfinished

Mitigation:
prioritize replacing obvious placeholders in the four target cities and defer broader image-pipeline expansion unless needed.

### Risk 4: route-stopover wording diverges from city-page wording

Mitigation:
do a final corridor QA pass and update `routeStopovers.ts` only where mismatch is user-visible.

## Implementation Sequence

1. inspect the current Daejeon, Cheonan, Gumi, and Changnyeong entries in `citySupportProfiles.ts`
2. upgrade Daejeon to the strongest practical-corridor sample
3. propagate the pattern to Cheonan
4. propagate the pattern to Gumi
5. propagate the pattern to Changnyeong
6. clean any obvious wording overlap or role collision
7. run lint
8. perform a final Route 1 corridor QA pass

## Definition Of Done

This corridor-city upgrade is done when:

- Daejeon reads as a Chungju-grade practical route-support page
- Cheonan, Gumi, and Changnyeong each have clear route roles and monetizable stay logic
- all four cities have stronger local support points
- placeholder visuals for these four cities are removed or reduced to only unavoidable gaps
- no obvious schema or lint regressions remain
- the Route 1 corridor feels closer to commercial readiness
