# ClipartKorea Post Image Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enrich existing published RoadToKorea WordPress posts with relevant ClipartKorea photos while keeping every image traceable.

**Architecture:** Add a small enrichment workspace around existing WordPress helpers. A post audit script ranks weak image candidates, Chrome handles normal ClipartKorea downloads, an ingest script registers local files, and a WordPress update script uploads/applies selected images.

**Tech Stack:** Python WordPress helpers in `crawling`, Next.js data files under `frontend/data`, local public images under `frontend/public/images`, Chrome browser automation for logged-in ClipartKorea UI.

---

## File Structure

- Create `frontend/data/clipartkoreaImageRegistry.json`: local registry for downloaded and applied ClipartKorea images.
- Create `crawling/clipartkorea_post_audit.py`: fetch existing WordPress posts and rank image enrichment candidates.
- Create `crawling/clipartkorea_ingest.py`: normalize downloaded files, copy them into `frontend/public/images/clipartkorea`, and append registry records.
- Create `crawling/clipartkorea_apply.py`: upload selected local images to WordPress and apply them as featured or inline images.
- Reuse `crawling/wp_publisher.py` and `crawling/wp_media.py`: existing WordPress update and media upload helpers.

### Task 1: Candidate Audit

**Files:**
- Create: `crawling/clipartkorea_post_audit.py`
- Output: `crawling/output/clipartkorea_candidates.json`

- [ ] **Step 1: Create the audit script**

```python
import argparse
import json
import re
from html import unescape
from pathlib import Path

from wp_publisher import WordPressPublisher

OUTPUT_PATH = Path(__file__).resolve().parent / "output" / "clipartkorea_candidates.json"

IMAGE_RE = re.compile(r"<img\b[^>]*>", re.I)
SRC_RE = re.compile(r"\bsrc=[\"']([^\"']+)[\"']", re.I)
ALT_RE = re.compile(r"\balt=[\"']([^\"']*)[\"']", re.I)
PLACEHOLDER_RE = re.compile(r"placeholder|generated|gemini|dall|media_[a-f0-9]{8}", re.I)
CITY_HINTS = [
    "seoul", "busan", "jeju", "gangneung", "daejeon", "daegu", "gyeongju",
    "jeonju", "gwangju", "incheon", "suwon", "mokpo", "yeosu", "suncheon",
]

def strip_html(value):
    return unescape(re.sub(r"<[^>]+>", " ", value or "")).strip()

def find_images(html):
    images = []
    for tag in IMAGE_RE.findall(html or ""):
        src = SRC_RE.search(tag)
        alt = ALT_RE.search(tag)
        images.append({
            "src": src.group(1) if src else "",
            "alt": alt.group(1) if alt else "",
        })
    return images

def infer_city_slug(post):
    text = " ".join([
        post.get("slug", ""),
        strip_html(post.get("title", {}).get("rendered", "")),
        strip_html(post.get("excerpt", {}).get("rendered", "")),
    ]).lower()
    for city in CITY_HINTS:
        if city in text:
            return city
    return ""

def build_search_terms(post, city_slug):
    title = strip_html(post.get("title", {}).get("rendered", ""))
    slug_words = post.get("slug", "").replace("-", " ")
    terms = []
    if title:
        terms.append(title)
    if city_slug:
        terms.append(f"{city_slug} travel")
        terms.append(f"{city_slug} landmark")
    if slug_words:
        terms.append(slug_words)
    return list(dict.fromkeys(terms))[:4]

def score_post(post):
    content = post.get("content", {}).get("rendered", "")
    images = find_images(content)
    featured_media = int(post.get("featured_media") or 0)
    placeholder_images = [
        image for image in images
        if PLACEHOLDER_RE.search(image["src"]) or PLACEHOLDER_RE.search(image["alt"])
    ]
    weak_alt_count = sum(1 for image in images if len(image["alt"].strip()) < 8)
    score = 0
    reasons = []
    if featured_media == 0:
        score += 5
        reasons.append("missing featured media")
    if len(images) == 0:
        score += 4
        reasons.append("no inline images")
    if len(images) < 3:
        score += 2
        reasons.append("low inline image count")
    if placeholder_images:
        score += min(4, len(placeholder_images))
        reasons.append("placeholder or generated-looking image references")
    if weak_alt_count:
        score += min(3, weak_alt_count)
        reasons.append("weak image alt text")
    return score, reasons, images

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=100)
    parser.add_argument("--top", type=int, default=10)
    args = parser.parse_args()

    publisher = WordPressPublisher()
    posts = publisher.get_posts(per_page=args.limit, orderby="date", order="desc")
    candidates = []
    for post in posts:
        score, reasons, images = score_post(post)
        if score <= 0:
            continue
        city_slug = infer_city_slug(post)
        candidates.append({
            "postId": post.get("id"),
            "postSlug": post.get("slug"),
            "postTitle": strip_html(post.get("title", {}).get("rendered", "")),
            "citySlug": city_slug,
            "score": score,
            "reasons": reasons,
            "featuredMedia": post.get("featured_media") or 0,
            "inlineImageCount": len(images),
            "searchTerms": build_search_terms(post, city_slug),
        })

    candidates.sort(key=lambda item: (-item["score"], item["postTitle"]))
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(candidates[:args.top], ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {min(args.top, len(candidates))} candidates to {OUTPUT_PATH}")
    for item in candidates[:args.top]:
        print(f'{item["score"]:>2} #{item["postId"]} {item["postSlug"]} - {", ".join(item["reasons"])}')

if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run the audit**

Run: `python crawling/clipartkorea_post_audit.py --limit 100 --top 10`
Expected: `crawling/output/clipartkorea_candidates.json` is created with 10 ranked candidates.

### Task 2: ClipartKorea Browser Download Pass

**Files:**
- Input: `crawling/output/clipartkorea_candidates.json`
- Manual browser output: Chrome download directory

- [ ] **Step 1: Open ClipartKorea in Chrome**

Use the logged-in Chrome session and navigate to `https://www.clipartkorea.co.kr/`.
Expected: the account is logged in and photo search is available.

- [ ] **Step 2: Search candidate terms**

For each candidate, search the first useful term in `searchTerms`, prefer real place, city, food, street, hotel, or transport photos over generic lifestyle images.
Expected: 1 to 3 candidate photos are downloaded for each sampled post.

- [ ] **Step 3: Stop on account friction**

If ClipartKorea shows CAPTCHA, unusual activity, download limit warnings, license warnings, or account confirmation prompts, stop and ask the user to continue manually.
Expected: no automation bypasses account or license controls.

### Task 3: Ingest Downloads

**Files:**
- Create: `crawling/clipartkorea_ingest.py`
- Modify: `frontend/data/clipartkoreaImageRegistry.json`
- Output: `frontend/public/images/clipartkorea/<post-slug>/...`

- [ ] **Step 1: Create the ingest script**

```python
import argparse
import json
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
FRONTEND_ROOT = REPO_ROOT / "frontend"
REGISTRY_PATH = FRONTEND_ROOT / "data" / "clipartkoreaImageRegistry.json"
PUBLIC_ROOT = FRONTEND_ROOT / "public"
TARGET_ROOT = PUBLIC_ROOT / "images" / "clipartkorea"
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def slugify(value):
    value = re.sub(r"\.[^.]+$", "", str(value).lower())
    value = re.sub(r"[^a-z0-9가-힣]+", "-", value)
    return value.strip("-") or "clipartkorea-image"

def load_json(path, fallback):
    if not path.exists():
        return fallback
    return json.loads(path.read_text(encoding="utf-8"))

def save_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--downloads", required=True)
    parser.add_argument("--post-slug", required=True)
    parser.add_argument("--post-id", required=True, type=int)
    parser.add_argument("--post-title", required=True)
    parser.add_argument("--search-term", required=True)
    parser.add_argument("--placement", default="inline")
    args = parser.parse_args()

    downloads = Path(args.downloads)
    files = sorted(path for path in downloads.iterdir() if path.suffix.lower() in IMAGE_EXTS)
    if not files:
        raise SystemExit(f"No images found in {downloads}")

    registry = load_json(REGISTRY_PATH, [])
    target_dir = TARGET_ROOT / args.post_slug
    target_dir.mkdir(parents=True, exist_ok=True)

    for index, source in enumerate(files, start=1):
        ext = ".jpg" if source.suffix.lower() == ".jpeg" else source.suffix.lower()
        file_name = f"{args.post_slug}-clipartkorea-{index:02d}-{slugify(source.stem)}{ext}"
        target = target_dir / file_name
        shutil.copy2(source, target)
        local_path = "/" + target.relative_to(PUBLIC_ROOT).as_posix()
        registry.append({
            "postId": args.post_id,
            "postSlug": args.post_slug,
            "postTitle": args.post_title,
            "citySlug": "",
            "searchTerm": args.search_term,
            "localPath": local_path,
            "originalFileName": source.name,
            "placement": args.placement,
            "downloadedAt": datetime.now(timezone.utc).isoformat(),
            "licenseLabel": "ClipartKorea paid membership",
            "licenseNote": "Downloaded through the user's logged-in ClipartKorea account for RoadToKorea post enrichment.",
            "wpMediaId": None,
            "wpUrl": None,
            "status": "ingested",
        })
        print(f"Copied {source.name} -> {local_path}")

    save_json(REGISTRY_PATH, registry)
    print(f"Registry updated: {REGISTRY_PATH}")

if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run ingest for one sampled post**

Run: `python crawling/clipartkorea_ingest.py --downloads <download-folder> --post-slug <slug> --post-id <id> --post-title "<title>" --search-term "<term>" --placement inline`
Expected: files are copied under `frontend/public/images/clipartkorea/<slug>` and registry records are appended.

### Task 4: Apply Images To WordPress

**Files:**
- Create: `crawling/clipartkorea_apply.py`
- Modify through API: selected WordPress posts
- Modify: `frontend/data/clipartkoreaImageRegistry.json`

- [ ] **Step 1: Create the apply script**

```python
import argparse
import json
from pathlib import Path

from wp_publisher import WordPressPublisher

REPO_ROOT = Path(__file__).resolve().parents[1]
FRONTEND_ROOT = REPO_ROOT / "frontend"
PUBLIC_ROOT = FRONTEND_ROOT / "public"
REGISTRY_PATH = FRONTEND_ROOT / "data" / "clipartkoreaImageRegistry.json"

def load_registry():
    return json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))

def save_registry(records):
    REGISTRY_PATH.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

def local_path_to_file(local_path):
    return PUBLIC_ROOT / local_path.lstrip("/")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--post-slug", required=True)
    parser.add_argument("--featured", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    records = load_registry()
    targets = [
        record for record in records
        if record["postSlug"] == args.post_slug and record["status"] == "ingested"
    ]
    if not targets:
        raise SystemExit(f"No ingested records found for {args.post_slug}")

    publisher = WordPressPublisher()
    first_media_id = None

    for record in targets:
        file_path = local_path_to_file(record["localPath"])
        if args.dry_run:
            print(f"Would upload {file_path}")
            continue
        media_id, wp_url = publisher.upload_local_media(str(file_path), title=f'{record["postSlug"]} ClipartKorea', return_id=True)
        record["wpMediaId"] = media_id
        record["wpUrl"] = wp_url
        record["status"] = "uploaded"
        if first_media_id is None:
            first_media_id = media_id
        print(f'Uploaded {record["localPath"]} -> media {media_id}')

    if args.featured and first_media_id and not args.dry_run:
        post_id = targets[0]["postId"]
        ok = publisher.update_post(post_id, featured_media_id=first_media_id)
        if not ok:
            raise SystemExit(f"Failed to set featured media for post {post_id}")
        for record in targets:
            if record["wpMediaId"] == first_media_id:
                record["placement"] = "featured"
                record["status"] = "applied"

    if not args.dry_run:
        save_registry(records)
        print(f"Registry updated: {REGISTRY_PATH}")

if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Dry-run apply**

Run: `python crawling/clipartkorea_apply.py --post-slug <slug> --featured --dry-run`
Expected: script prints local files that would upload.

- [ ] **Step 3: Apply one sampled post**

Run: `python crawling/clipartkorea_apply.py --post-slug <slug> --featured`
Expected: media uploads to WordPress, featured media is set, and registry records are updated.

### Task 5: Verification

**Files:**
- Read: `frontend/data/clipartkoreaImageRegistry.json`
- Read: `crawling/output/clipartkorea_candidates.json`

- [ ] **Step 1: Verify registry completeness**

Run: `node -e "const r=require('./frontend/data/clipartkoreaImageRegistry.json'); console.log(r.length); console.log(r.filter(x=>!x.localPath||!x.licenseNote).length)"`
Expected: first number is greater than 0, second number is `0`.

- [ ] **Step 2: Verify frontend still builds**

Run: `cd frontend && npm.cmd run lint && npm.cmd run build`
Expected: lint and build exit with code 0.

- [ ] **Step 3: Verify WordPress sample post**

Open the updated post URL and confirm the image renders, matches the post subject, and does not show placeholder or broken image UI.
Expected: sample post has the applied ClipartKorea image and no broken image.

## Self-Review

Spec coverage: The plan covers candidate ranking, browser download, local ingest, registry traceability, WordPress upload/apply, and sample verification.

Placeholder scan: No implementation step contains open placeholders requiring invention. Angle-bracket values in commands are runtime arguments from the candidate report and download folder.

Type consistency: Registry field names match the design document and are used consistently by ingest and apply scripts.
