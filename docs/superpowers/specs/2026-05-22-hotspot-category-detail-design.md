# Hotspot Category Detail Design

## Goal

Reduce hotspot detail-page density by turning the canonical hotspot URL into a lightweight decision hub, then move deeper content into category pages for stay, food, attractions, transport, and tips.

## Background

The current hotspot page tries to do three jobs at once:

- introduce the place,
- explain route fit,
- render the full editorial article.

That makes the page feel heavy, especially now that the site has a route tree and more city-level navigation. The detail page should behave like an entry point. Users should be able to decide what they need next, then open a category page for the deeper answer.

## URL Structure

Canonical overview:

```text
/cities/[city]/[hotspot]
```

Category pages:

```text
/cities/[city]/[hotspot]/stay
/cities/[city]/[hotspot]/food
/cities/[city]/[hotspot]/attractions
/cities/[city]/[hotspot]/transport
/cities/[city]/[hotspot]/tips
```

Legacy tier routes continue to redirect only to the canonical overview URL. Category pages are a new canonical route family and do not need legacy tier equivalents.

## Overview Page

The overview page should answer:

- What is this place?
- Why might it belong in the route?
- How much time should I give it?
- Which deeper category should I open next?

The overview should keep:

- hero image,
- city backlink,
- title,
- excerpt,
- route context,
- best time,
- stay length,
- best use,
- good for,
- three “why go” points,
- skip-if warning,
- category cards,
- related stops.

The overview should remove default full-body article rendering. The long WordPress content should move behind the category-page system so the first page does not become a wall of text.

## Category Pages

Each category page uses the same visual shell but with focused content:

- category title and question,
- short decision summary,
- three planning cards,
- map/CTA placeholder area when relevant,
- related category links,
- optional source article preview.

### Stay

Question: “Should I sleep near here?”

Purpose:

- explain whether the hotspot should influence accommodation choice,
- describe stay zones rather than individual hotels,
- send booking intent to Trip.com hotel search for the city.

Trip.com should stay as a booking/search CTA. We should not pretend to have live hotel pins unless we later add a compliant provider or manually curated hotel data.

### Food

Question: “Where should I eat before or after this stop?”

Purpose:

- explain whether food should happen before, during, or after the visit,
- suggest meal timing,
- separate neighborhood eating logic from attraction logic.

Google Places is intentionally deferred. Food content starts as editorial planning, not live restaurant listings.

### Attractions

Question: “What should I combine with this place?”

Purpose:

- suggest nearby or same-day attractions,
- explain 2-hour, half-day, and day-plan use,
- reserve future map pins for manually curated attraction coordinates.

### Transport

Question: “How do I get in and out?”

Purpose:

- explain low-stress access,
- compare transit/car/walk logic when known,
- link back to city and route navigation.

Trip.com transport links can be added later for trains, flights, rental cars, or airport transfers, but the first implementation should not invent unsupported deep links.

### Tips

Question: “What should I know before going?”

Purpose:

- seasonality,
- crowd timing,
- budget expectations,
- skip conditions,
- traveler-fit notes.

## Data Model

Add a shared category definition file:

```text
data/hotspotCategoryPages.ts
```

It owns:

- category keys,
- labels,
- questions,
- summaries,
- planning card copy,
- category URL helpers.

Category copy should be generic enough to work across all current hotspots, but specific enough to feel useful. Later, per-hotspot overrides can be added without changing the routing contract.

## Component Model

Keep `HotspotGuidePage` as the canonical data loader and renderer for the overview page.

Add a category renderer in the same feature boundary:

```text
components/hotspot-detail/HotspotCategoryGuidePage.tsx
```

The category renderer should:

- validate the city/hotspot post,
- reuse title, excerpt, hero image, route context, and related-post logic where useful,
- render only category-focused planning content,
- expose category metadata.

## Navigation

The overview page should show category cards immediately after the summary/decision area. Category pages should show sibling category links so users can move laterally without returning to the overview every time.

## SEO

Overview metadata remains canonical to `/cities/[city]/[hotspot]`.

Category metadata should include the category label:

```text
[Hotspot Title] Stay Guide
[Hotspot Title] Food Guide
[Hotspot Title] Attractions Guide
[Hotspot Title] Transport Guide
[Hotspot Title] Travel Tips
```

Each category page should have a canonical URL matching its path.

## Non-Goals For Phase 1

- Google Places integration.
- Live hotel pins.
- Live restaurant listings.
- Trip.com transport deep-link expansion.
- Per-hotspot hand-written category overrides.
- A full design overhaul of city pages.

## Success Criteria

- The canonical hotspot overview no longer renders the full long article by default.
- Users see clear category cards from the overview.
- All five category URLs render for valid city/hotspot combinations.
- Invalid category slugs return 404.
- Existing legacy tier hotspot URLs still redirect to canonical overview pages.
- Lint, build, and route validation pass.
