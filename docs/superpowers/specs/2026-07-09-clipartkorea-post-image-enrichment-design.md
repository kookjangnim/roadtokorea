# ClipartKorea Post Image Enrichment Design

## Goal

Use the existing published WordPress posts as the source of truth, then enrich weak or mismatched post imagery with ClipartKorea photos downloaded through the user's logged-in Chrome session.

## Scope

This workflow targets existing WordPress and hotspot posts first. It does not create new posts, rewrite article copy, bypass ClipartKorea account limits, or scrape private APIs. Downloads happen through normal browser interactions in the logged-in account, then local scripts organize, track, upload, and connect the images.

## Priorities

1. Posts with missing featured images.
2. Posts with placeholder, AI-looking, generic, or repeated imagery.
3. Posts with strong existing text but weak visual support.
4. Posts already using good local or accurate editorial photos are left unchanged unless explicitly selected.

## Workflow

1. Fetch the current published WordPress posts with title, slug, city/tag context, content HTML, featured media, and existing image count.
2. Score each post for image weakness using featured media presence, image count, placeholder-looking URLs, repeated media, and generic alt text.
3. Generate ClipartKorea search terms from the post title, slug, city, hotspot name, and section hints such as food, stay, attraction, transport, and tips.
4. Use Chrome to search ClipartKorea with the user's active login and download suitable photos through the visible site UI.
5. Move downloaded files into a tracked project folder under `frontend/public/images/clipartkorea`.
6. Record every image in a local registry with source service, search term, post slug, intended placement, filename, download date, and license note.
7. Upload selected images to WordPress media using the existing WordPress media helper.
8. Update each target post by setting featured media and/or replacing weak inline images in the rendered HTML.
9. Run a sample batch of 5 to 10 posts before expanding to the full post set.

## Data Model

The registry should live at `frontend/data/clipartkoreaImageRegistry.json`. Each record should include:

- `postId`
- `postSlug`
- `postTitle`
- `citySlug`
- `searchTerm`
- `localPath`
- `originalFileName`
- `placement`
- `downloadedAt`
- `licenseLabel`
- `licenseNote`
- `wpMediaId`
- `wpUrl`
- `status`

The registry is operational metadata, not public-facing attribution text. It exists so every monetized image can be traced later.

## Safety Rules

Browser automation must use visible, normal site flows. It must not bypass CAPTCHA, rate limits, paywalls, hidden API controls, account restrictions, or license boundaries. If ClipartKorea blocks automation or asks for user confirmation, the workflow pauses for the user.

## Validation

The first pass should produce a candidate report with the top 10 posts to enrich. After sample downloads and updates, verify that the updated posts load, featured media is set where intended, inline image URLs resolve, and the registry contains traceable records for every applied image.
