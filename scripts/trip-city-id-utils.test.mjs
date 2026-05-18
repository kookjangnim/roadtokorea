import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  extractTripHotelUrls,
  normalizeTripHotelSlug,
  parseTripHotelUrl,
} from './trip-city-id-utils.mjs';

test('parses Trip.com hotel list URLs', () => {
  assert.deepEqual(
    parseTripHotelUrl('https://kr.trip.com/hotels/gangneung-si-hotels-list-61325/'),
    { tripSlug: 'gangneung-si', citySlug: 'gangneung', cityId: '61325' }
  );

  assert.deepEqual(
    parseTripHotelUrl('https://kr.trip.com/hotels/gwangju-1-hotels-list-90736'),
    { tripSlug: 'gwangju-1', citySlug: 'gwangju', cityId: '90736' }
  );
});

test('normalizes Trip.com Korean administrative suffixes to project city slugs', () => {
  assert.equal(normalizeTripHotelSlug('jeonju-si'), 'jeonju');
  assert.equal(normalizeTripHotelSlug('taean-gun'), 'taean');
  assert.equal(normalizeTripHotelSlug('cheong-ju'), 'cheongju');
  assert.equal(normalizeTripHotelSlug('goseong-gun-1'), 'goseong');
});

test('extracts unique Trip.com hotel URLs from HTML', () => {
  const html = [
    '<a href="https://kr.trip.com/hotels/chungju-hotels-list-4120/">Chungju</a>',
    '<a href="https://kr.trip.com/hotels/chungju-hotels-list-4120/">Duplicate</a>',
    '<a href="https://kr.trip.com/hotels/wonju-si-hotels-list-72358/">Wonju</a>',
  ].join('');

  assert.deepEqual(extractTripHotelUrls(html), [
    'https://kr.trip.com/hotels/chungju-hotels-list-4120/',
    'https://kr.trip.com/hotels/wonju-si-hotels-list-72358/',
  ]);
});

test('covers every reviewed city support profile with a Trip.com hotel mapping', () => {
  const supportProfiles = readFileSync('data/citySupportProfiles.ts', 'utf8');
  const profileRegistry = supportProfiles.split('const citySupportProfiles')[1] ?? '';
  const profileCitySlugs = [...profileRegistry.matchAll(/^  ([a-z0-9-]+): \{/gm)].map(
    (match) => match[1]
  );
  const tripCityIds = JSON.parse(readFileSync('data/tripCityIds.json', 'utf8'));
  const mappedCitySlugs = new Set(Object.keys(tripCityIds.cityIds));
  const missingCitySlugs = profileCitySlugs.filter((citySlug) => !mappedCitySlugs.has(citySlug));

  assert.deepEqual(missingCitySlugs, []);
});

test('uses the Gangwon Goseong hotel list for the Route 3 Goseong profile', () => {
  const tripCityIds = JSON.parse(readFileSync('data/tripCityIds.json', 'utf8'));

  assert.equal(tripCityIds.cityIds.goseong.cityId, '78910');
  assert.equal(
    tripCityIds.cityIds.goseong.sourceUrl,
    'https://kr.trip.com/hotels/goseong-gun-hotels-list-78910/'
  );
});
