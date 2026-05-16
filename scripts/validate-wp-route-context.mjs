import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const citiesModule = await import('../constants/cities.ts');
const helperSource = await readFile(new URL('../lib/wp-route-context.ts', import.meta.url), 'utf8');
const runnableSource = helperSource
  .replace(/import \{ VALID_CITY_SLUGS \} from '..\/constants\/cities';\n/, '')
  .replace(/import type \{ WPPost \} from '.\/wp-api';\n/, '')
  .replace(/export type IndexableWpPostRoute = \{[\s\S]*?\};\n\n/, '')
  .replace(/: Pick<WPPost, '_embedded'>/g, '')
  .replace(/: WpTerm\[\]/g, '')
  .replace(/: WPPost/g, '')
  .replace(/: string/g, '')
  .replace(/: boolean/g, '')
  .replace(/: IndexableWpPostRoute \| null/g, '')
  .replace(/type WpTerm = \{[\s\S]*?\};\n\n/, '');

const moduleUrl = `data:text/javascript,${encodeURIComponent(
  `const VALID_CITY_SLUGS = ${JSON.stringify(citiesModule.VALID_CITY_SLUGS)};\n${runnableSource}`
)}`;
const { getIndexableWpPostRoute, isWpPostRouteMatch } = await import(moduleUrl);

const taggedPost = {
  id: 101,
  slug: 'gyeongbokgung-palace',
  title: { rendered: 'Gyeongbokgung Palace' },
  excerpt: { rendered: '' },
  content: { rendered: '' },
  link: '',
  date: '2026-05-01T00:00:00',
  modified: '2026-05-02T00:00:00',
  categories: [],
  _embedded: {
    'wp:term': [
      [
        { id: 10, name: 'Tier 3', slug: 'tier-3', taxonomy: 'category' },
        { id: 44, name: 'Seoul', slug: 'seoul', taxonomy: 'post_tag' },
      ],
    ],
  },
};

const defaultPost = {
  ...taggedPost,
  id: 1,
  slug: 'hello-world',
  title: { rendered: 'Hello world!' },
  _embedded: {
    'wp:term': [
      [{ id: 1, name: 'Uncategorized', slug: 'uncategorized', taxonomy: 'category' }],
    ],
  },
};

assert.deepEqual(getIndexableWpPostRoute(taggedPost), {
  tierSlug: 'tier-3',
  citySlug: 'seoul',
  href: '/tier-3/seoul/gyeongbokgung-palace',
});

assert.equal(getIndexableWpPostRoute(defaultPost), null);
assert.equal(isWpPostRouteMatch(taggedPost, 'tier-3', 'seoul'), true);
assert.equal(isWpPostRouteMatch(taggedPost, 'tier-1', 'seoul'), false);
assert.equal(isWpPostRouteMatch(defaultPost, 'tier-1', 'seoul'), false);

console.log('WP route context validation passed');
