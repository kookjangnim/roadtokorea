import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const baseUrl = (process.env.BASE_URL ?? 'http://localhost:3001').replace(/\/$/, '');
const requestTimeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 15000);
const concurrency = Number(process.env.AUDIT_CONCURRENCY ?? 6);
const extraPaths = (process.env.EXTRA_PATHS ?? '')
  .split(',')
  .map((path) => path.trim())
  .filter(Boolean);

const staticPaths = [
  '/',
  '/routes',
  '/updated-cities',
  '/about',
  '/contact',
  '/privacy',
  '/route-1',
  '/route-2',
  '/route-2/branch-a',
  '/route-3',
  '/route-4',
  '/route-5',
  '/route-6',
  '/route-7',
  '/route-8',
];

const updatedCitiesSource = await readFile(new URL('../data/updatedCities.ts', import.meta.url), 'utf8');
const updatedCityPaths = [...updatedCitiesSource.matchAll(/href:\s*'([^']+)'/g)].map((match) => match[1]);

const paths = [...new Set([...staticPaths, ...updatedCityPaths, ...extraPaths])]
  .filter((path) => path.startsWith('/'))
  .sort((a, b) => a.localeCompare(b));

assert.ok(paths.length > 0, 'No paths were collected for content depth auditing');

const bannedPatterns = [
  /guide coming soon/i,
  /page coming soon/i,
  /currently being drafted/i,
  /under construction/i,
  /content pending/i,
  /lorem ipsum/i,
  /\bTBD\b/,
  /\bTODO\b/,
];

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function getMinimumWords(path) {
  if (path === '/contact') return 120;
  if (path === '/about' || path === '/privacy') return 180;
  if (path === '/' || path === '/routes' || path === '/updated-cities') return 450;
  if (/^\/route-\d$/.test(path) || path === '/route-2/branch-a') return 650;
  if (/^\/route-\d\//.test(path) || /^\/cities\//.test(path)) return 500;
  return 300;
}

async function auditPath(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'RoadToKorea content depth auditor',
      },
    });

    if (response.status >= 400) {
      return {
        path,
        failure: `${path}: returned ${response.status}`,
      };
    }

    const html = await response.text();
    const text = stripHtml(html);
    const words = text.split(/\s+/).filter(Boolean);
    const minimumWords = getMinimumWords(path);
    const matchedBannedPatterns = bannedPatterns
      .filter((pattern) => pattern.test(text))
      .map((pattern) => pattern.toString());
    const failures = [];

    if (words.length < minimumWords) {
      failures.push(`${path}: ${words.length} words, expected at least ${minimumWords}`);
    }

    if (matchedBannedPatterns.length > 0) {
      failures.push(`${path}: blocked draft wording found (${matchedBannedPatterns.join(', ')})`);
    }

    return {
      path,
      status: response.status,
      wordCount: words.length,
      minimumWords,
      failures,
    };
  } catch (error) {
    const reason = error?.name === 'AbortError'
      ? `timed out after ${requestTimeoutMs}ms`
      : error?.message ?? String(error);
    return {
      path,
      failure: `${path}: ${reason}`,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runWithConcurrency(items, worker, limit) {
  const results = [];
  let index = 0;

  async function runNext() {
    while (index < items.length) {
      const currentIndex = index;
      index += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => runNext())
  );

  return results;
}

const auditResults = await runWithConcurrency(paths, auditPath, concurrency);
const results = auditResults.filter((result) => result.wordCount !== undefined);
const failures = auditResults.flatMap((result) => [
  ...(result.failure ? [result.failure] : []),
  ...(result.failures ?? []),
]);
const lowest = [...results].sort((a, b) => a.wordCount - b.wordCount).slice(0, 10);

console.log('Lowest rendered word counts:');
for (const result of lowest) {
  console.log(`  ${result.path}: ${result.wordCount} words (min ${result.minimumWords})`);
}

if (failures.length > 0) {
  console.error('Content depth audit failed:');
  for (const failure of failures) {
    console.error(`  ${failure}`);
  }
  process.exit(1);
}

console.log(`Content depth audit passed: ${results.length} pages checked`);
