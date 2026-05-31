# Blog Route Home Design

## Goal
Make the site read more like a useful travel blog for AdSense review while preserving RoadToKorea's route-first identity.

## Direction
The home page should become a calm route index rather than a full interactive showcase. It should show the main Korea travel routes with clear thumbnails, summaries, representative cities, and simple category navigation. Richer visual storytelling belongs on each route page, where users expect maps, city thumbnails, route sequencing, and transport context.

## Home Page
- Replace the full-screen interactive route hero with a quieter blog-style route board.
- Add a left category rail on desktop and a compact category strip on mobile.
- Feature route cards as the primary content: route label, title, image, summary, representative cities, travel mode summary, and link.
- Keep supporting editorial copy short so the page feels scannable.

## Route Detail Pages
- Keep the existing map and transport controls.
- Add a visual stopover thumbnail section near the map so each route page immediately looks like a travel guide, not only a data page.
- Reuse existing city image slot data where available and fall back to existing route/city assets.

## Constraints
- Do not introduce new dependencies.
- Do not alter WordPress publishing, route data semantics, or existing city URLs.
- Keep the palette restrained and readable.
- Avoid turning the home page into a decorative landing page.

## Verification
- Run lint after implementation.
- Build if lint passes and the local environment allows it.
