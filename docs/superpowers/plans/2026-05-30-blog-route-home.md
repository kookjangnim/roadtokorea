# Blog Route Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the home page into a calm route-index blog entry point and add stronger route-page city thumbnails.

**Architecture:** Reuse `RouteData` from `data/routeStopovers.ts` and existing image metadata from `data/cityImageSlots.ts`. Keep changes in the home page and route client only, with a tiny local image helper to avoid touching shared data contracts.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, existing Leaflet route map.

---

### Task 1: Blog-style route home

**Files:**
- Modify: `frontend/app/page.tsx`

- [ ] Replace the immersive `TerrainRouteHero`-first layout with a route-index layout.
- [ ] Add route category links on the left rail.
- [ ] Render all routes as thumbnail cards using existing route data.
- [ ] Keep supporting sections short and text-led.

### Task 2: Route detail visual stopovers

**Files:**
- Modify: `frontend/app/routes/[from]/[to]/RoutePageClient.tsx`

- [ ] Import `Image` and `getCityImageSlots`.
- [ ] Add a helper that selects each stopover's `route`, `hero`, or `street` image.
- [ ] Insert a thumbnail grid near the existing map section.
- [ ] Link each thumbnail to its canonical route city page.

### Task 3: Verify

**Files:**
- No source edits.

- [ ] Run `npm run lint`.
- [ ] Run `npm run build` if lint succeeds.
- [ ] Inspect changed files and summarize the outcome.
