import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const baseUrl = (process.env.BASE_URL ?? 'http://localhost:3001').replace(/\/$/, '');
const requestTimeoutMs = Number(process.env.AUDIT_TIMEOUT_MS ?? 15000);
const concurrency = Number(process.env.AUDIT_CONCURRENCY ?? 6);

const staticPaths = [
  '/',
  '/routes',
  '/updated-cities',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
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

const sourceFiles = [
  '../app/page.tsx',
  '../app/routes/page.tsx',
  '../app/updated-cities/page.tsx',
  '../components/StaticPageShell.tsx',
  '../components/Footer.tsx',
  '../components/Header.tsx',
];

const sourceHrefPaths = [];
for (const sourceFile of sourceFiles) {
  const source = await readFile(new URL(sourceFile, import.meta.url), 'utf8');
  for (const match of source.matchAll(/href=(?:\{)?["'`]([^"'`{}?#]+)["'`](?:\})?/g)) {
    if (match[1].startsWith('/')) sourceHrefPaths.push(match[1]);
  }
  for (const match of source.matchAll(/href:\s*['"`]([^'"`?#]+)['"`]/g)) {
    if (match[1].startsWith('/')) sourceHrefPaths.push(match[1]);
  }
}

const paths = [...new Set([...staticPaths, ...updatedCityPaths, ...sourceHrefPaths])]
  .filter((path) => !path.startsWith('/images/'))
  .sort((a, b) => a.localeCompare(b));

assert.ok(paths.length > 0, 'No internal paths were collected for auditing');

async function auditPath(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'RoadToKorea internal route auditor',
      },
    });

    return {
      path,
      status: response.status,
      finalUrl: response.url.replace(baseUrl, ''),
    };
  } catch (error) {
    return {
      path,
      status: 599,
      finalUrl: path,
      error: error?.name === 'AbortError'
        ? `timed out after ${requestTimeoutMs}ms`
        : error?.message ?? String(error),
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

const results = await runWithConcurrency(paths, auditPath, concurrency);

const failures = results.filter((result) => result.status >= 400);
const redirects = results.filter((result) => result.finalUrl !== result.path);

if (redirects.length > 0) {
  console.log('Redirects:');
  for (const redirect of redirects) {
    console.log(`  ${redirect.path} -> ${redirect.finalUrl} (${redirect.status})`);
  }
}

if (failures.length > 0) {
  console.error('Internal route audit failed:');
  for (const failure of failures) {
    console.error(`  ${failure.path} -> ${failure.status}${failure.error ? ` (${failure.error})` : ''}`);
  }
  process.exit(1);
}

console.log(`Internal route audit passed: ${results.length} URLs checked`);
