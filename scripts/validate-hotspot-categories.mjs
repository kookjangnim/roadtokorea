import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../data/hotspotCategoryPages.ts', import.meta.url), 'utf8');
const overview = await readFile(
  new URL('../components/hotspot-detail/HotspotGuidePage.tsx', import.meta.url),
  'utf8'
);

const keys = [...source.matchAll(/key: '([^']+)'/g)].map((match) => match[1]);
assert.deepEqual(keys, ['stay', 'food', 'attractions', 'transport', 'tips']);
assert.equal(new Set(keys).size, keys.length, 'category keys must be unique');

for (const key of keys) {
  assert.match(source, new RegExp(`key: '${key}'[\\s\\S]*?cards: \\[[\\s\\S]*?title:`), `${key} needs cards`);
  const block = source.match(new RegExp(`key: '${key}'[\\s\\S]*?cards: \\[([\\s\\S]*?)\\n    \\],`));
  assert.ok(block, `${key} card block missing`);
  assert.equal((block[1].match(/title:/g) ?? []).length, 3, `${key} must have exactly three cards`);
}

const requiredSeoulHotspots = ['gyeongbokgung', 'seongsu', 'myeongdong', 'hongdae', 'itaewon', 'gangnam'];
const requiredRegionalHotspots = ['haeundae', 'gwangalli', 'seomyeon', 'bulguksa', 'bomun', 'aewol', 'seongsan', 'seogwipo'];
const requiredRouteHotspots = ['sungsimdang', 'suanbo', 'coffee', 'seoraksan'];
const requiredCultureHotspots = ['hanok', 'hahoe', 'nightsea', 'odongdo', 'seomun'];
const requiredCoastalHotspots = ['homigot', 'daewangam', 'dongpirang', 'german', 'boriam', 'bay', 'tea'];
const requiredInlandHotspots = ['lake', 'saejae', 'museumsan', 'cheongpung', 'jangneung'];

for (const hotspot of [
  ...requiredSeoulHotspots,
  ...requiredRegionalHotspots,
  ...requiredRouteHotspots,
  ...requiredCultureHotspots,
  ...requiredCoastalHotspots,
  ...requiredInlandHotspots,
]) {
  const hotspotBlock = source.match(new RegExp(`${hotspot}: \\{([\\s\\S]*?)\\n    \\},`));
  assert.ok(hotspotBlock, `${hotspot} override must exist`);

  for (const key of keys) {
    const overrideBlock = hotspotBlock[1].match(new RegExp(`${key}: \\{([\\s\\S]*?)\\n      \\},`));
    assert.ok(overrideBlock, `${hotspot} ${key} override must exist`);
    assert.equal(
      (overrideBlock[1].match(/title:/g) ?? []).length,
      3,
      `${hotspot} ${key} override must have exactly three cards`
    );
  }
}

for (const alias of [
  'haeundae-beach',
  'gwangalli-beach',
  'bulguksa-temple',
  'bomun-lake',
  'seongsan-ilchulbong',
  'sungsimdang-bakery',
  'suanbo-hot-springs',
  'gangneung-coffee-street',
  'seoraksan-national-park',
  'jeonju-hanok-village',
  'hahoe-village',
  'yeosu-night-sea',
  'odongdo-island',
  'seomun-market',
  'homigot-sunrise',
  'daewangam-park',
  'dongpirang-village',
  'namhae-german-village',
  'boriam-temple',
  'suncheon-bay',
  'boseong-tea-fields',
  'chungju-lake',
  'mungyeong-saejae',
  'museum-san',
  'cheongpung-lake',
  'yeongwol-jangneung',
]) {
  assert.match(source, new RegExp(`['"]${alias}['"]`), `missing alias normalization for ${alias}`);
}

assert.match(overview, /HOTSPOT_CATEGORY_PAGES/, 'overview must render category navigation');
assert.match(overview, /getResolvedHotspotCategoryPage/, 'overview must use per-hotspot category overrides');
assert.doesNotMatch(
  overview,
  /dangerouslySetInnerHTML=\{\{ __html: guidedContent \}\}/,
  'overview must not render the full WordPress article by default'
);
