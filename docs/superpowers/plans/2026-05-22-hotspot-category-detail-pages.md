# Hotspot Category Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert hotspot detail pages into lightweight overview hubs and add category pages for stay, food, attractions, transport, and tips.

**Architecture:** Keep the canonical hotspot route as the overview page and add a dynamic category child route. Shared category definitions live in `data/hotspotCategoryPages.ts`; the overview and category renderers consume the same definitions so navigation stays consistent.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, Tailwind CSS, WordPress post fetch utilities, existing Trip.com hotel affiliate helper.

---

### Task 1: Category Definitions

**Files:**

- Create: `data/hotspotCategoryPages.ts`
- Test: `scripts/validate-hotspot-categories.mjs`

- [ ] Create category keys for `stay`, `food`, `attractions`, `transport`, and `tips`.
- [ ] Add labels, questions, summaries, card copy, and URL helpers.
- [ ] Add a validation script that ensures every category has three planning cards and a unique slug.

### Task 2: Overview Page Reduction

**Files:**

- Modify: `components/hotspot-detail/HotspotGuidePage.tsx`

- [ ] Import the category definitions.
- [ ] Add category cards below the decision summary.
- [ ] Remove default full article rendering from the overview.
- [ ] Replace the article body with a short editorial-source teaser linking to the category pages.

### Task 3: Category Page Renderer

**Files:**

- Create: `components/hotspot-detail/HotspotCategoryGuidePage.tsx`

- [ ] Reuse city/hotspot validation from the overview page.
- [ ] Render hero, category summary, planning cards, sibling category links, and related stops.
- [ ] Include Trip.com hotel CTA only on the stay page.
- [ ] Include a transport-oriented route link on the transport page.

### Task 4: App Router Wiring

**Files:**

- Create: `app/cities/[city]/[hotspot]/[category]/page.tsx`

- [ ] Export category page renderer.
- [ ] Export category metadata generator.
- [ ] Return 404 for invalid category slugs.

### Task 5: Verification

**Files:**

- Modify: `package.json`

- [ ] Add `check:hotspot-categories`.
- [ ] Run `npm.cmd run check:hotspot-categories`.
- [ ] Run `npm.cmd run check:route-navigation`.
- [ ] Run `npm.cmd run lint`.
- [ ] Run `npm.cmd run build`.
