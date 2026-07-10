import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const pageSource = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const homeSource = await readFile(new URL('../components/home/HomeLanding.tsx', import.meta.url), 'utf8');

test('home page renders the route-first landing instead of the old post grid', () => {
  assert.match(pageSource, /<HomeLanding\s+routes=\{routes\}\s+\/>/);
  assert.match(homeSource, /Seoul to Busan/);
  assert.match(homeSource, /Open Route 1/);
  assert.doesNotMatch(homeSource, /최근 게시물|부산 및 남해안|충청/);
});
