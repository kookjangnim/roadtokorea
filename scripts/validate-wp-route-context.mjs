import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const citiesModule = await import('../constants/cities.ts');
const helperSource = await readFile(new URL('../lib/wp-route-context.ts', import.meta.url), 'utf8');
const runnableSource = helperSource
  .replace(/import \{ VALID_CITY_SLUGS \} from '..\/constants\/cities';\n/, '')
  .replace(/import type \{ WPPost \} from '.\/wp-api';\n/, '')
  .replace(/import \{ isLegacyCategorySlug \} from '.\/legacy-route-compat';\n/, '')
  .replace(/export type IndexableWpPostRoute = \{[\s\S]*?\};\n\n/, '')
  .replace(/: Pick<WPPost, '_embedded'>/g, '')
  .replace(/: WpTerm\[\]/g, '')
  .replace(/: WPPost/g, '')
  .replace(/: string/g, '')
  .replace(/: boolean/g, '')
  .replace(/: IndexableWpPostRoute \| null/g, '')
  .replace(/type WpTerm = \{[\s\S]*?\};\n\n/, '');

const moduleUrl = `data:text/javascript,${encodeURIComponent(
  `const VALID_CITY_SLUGS = ${JSON.stringify(citiesModule.VALID_CITY_SLUGS)};\nconst LEGACY_CATEGORY_SLUGS = ['tier-1', 'tier-2', 'tier-3', 'tier-4', 'seoul-gyeonggi', 'gangwon-east-coast', 'chungcheong', 'historic-gyeongbuk', 'busan-south-coast', 'jeolla-southwest', 'jeju-island'];\nfunction isLegacyCategorySlug(value) { return LEGACY_CATEGORY_SLUGS.includes(value); }\n${runnableSource}`
)}`;
const { getIndexableWpPostRoute, isWpPostCityMatch, isLegacyWpPostRouteMatch } = await import(moduleUrl);

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

const wpRegionalCategoryPost = {
  ...taggedPost,
  id: 102,
  slug: 'incheon-open-port',
  _embedded: {
    'wp:term': [
      [
        { id: 20, name: 'Seoul & Gyeonggi', slug: 'seoul-gyeonggi', taxonomy: 'category' },
        { id: 45, name: 'Incheon', slug: 'incheon', taxonomy: 'post_tag' },
      ],
    ],
  },
};

assert.deepEqual(getIndexableWpPostRoute(taggedPost), {
  legacyCategorySlug: 'tier-3',
  citySlug: 'seoul',
  href: '/cities/seoul/gyeongbokgung-palace',
});

assert.equal(getIndexableWpPostRoute(defaultPost), null);
assert.deepEqual(getIndexableWpPostRoute(wpRegionalCategoryPost), {
  legacyCategorySlug: 'seoul-gyeonggi',
  citySlug: 'incheon',
  href: '/cities/incheon/incheon-open-port',
});
assert.equal(isWpPostCityMatch(taggedPost, 'seoul'), true);
assert.equal(isWpPostCityMatch(taggedPost, 'busan'), false);
assert.equal(isWpPostCityMatch(defaultPost, 'seoul'), false);
assert.equal(isLegacyWpPostRouteMatch(taggedPost, 'tier-3', 'seoul'), true);
assert.equal(isLegacyWpPostRouteMatch(taggedPost, 'tier-1', 'seoul'), false);
assert.equal(isLegacyWpPostRouteMatch(defaultPost, 'tier-1', 'seoul'), false);

console.log('WP route context validation passed');
