import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractTripHotelUrls, parseTripHotelUrl } from './trip-city-id-utils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SOURCE_URLS = [
  'https://kr.trip.com/hotels/',
  'https://kr.trip.com/hotels/province/kr-gyeonggi-do.html',
  'https://kr.trip.com/hotels/province/kr-gyeongsangbuk-do.html',
  'https://kr.trip.com/hotels/province/kr-gyeongsangnam-do.html',
  'https://kr.trip.com/hotels/province/kr-jeollabuk-do.html',
  'https://kr.trip.com/hotels/province/kr-jeollanam-do.html',
  'https://kr.trip.com/hotels/province/kr-chungcheongbuk-do.html',
  'https://kr.trip.com/hotels/province/kr-chungcheongnam-do.html',
];

const SEED_HOTEL_URLS = [
  'https://kr.trip.com/hotels/wonju-si-hotels-list-72358/',
  'https://kr.trip.com/hotels/pyeongchang-gun-hotels-list-35792/',
  'https://kr.trip.com/hotels/chuncheon-si-hotels-list-35788/',
  'https://kr.trip.com/hotels/gapyeong-gun-hotels-list-78430/',
  'https://kr.trip.com/hotels/inje-gun-hotels-list-72359/',
  'https://kr.trip.com/hotels/sokcho-si-hotels-list-35793/',
  'https://kr.trip.com/hotels/gangneung-si-hotels-list-61325/',
  'https://kr.trip.com/hotels/donghae-si-hotels-list-58529/',
  'https://kr.trip.com/hotels/yangyang-hotels-list-6430/',
];

async function readProjectCitySlugs() {
  const constantsPath = path.join(projectRoot, 'constants', 'cities.ts');
  const source = await fs.readFile(constantsPath, 'utf8');
  return new Set([...source.matchAll(/'([a-z0-9-]+)'/g)].map((match) => match[1]));
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'roadtokorea-trip-city-id-sync/1.0',
      Accept: 'text/html,application/xhtml+xml',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function upsertMapping(mapping, url, source) {
  const parsed = parseTripHotelUrl(url);
  if (!parsed) return;

  mapping[parsed.citySlug] = {
    cityId: parsed.cityId,
    tripSlug: parsed.tripSlug,
    sourceUrl: url.replace(/^https:\/\/(?:www|us|kr)\.trip\.com/i, 'https://kr.trip.com'),
    source,
  };
}

async function main() {
  const mapping = {};
  const failures = [];
  const projectCitySlugs = await readProjectCitySlugs();

  for (const url of SEED_HOTEL_URLS) {
    upsertMapping(mapping, url, 'seed');
  }

  for (const sourceUrl of SOURCE_URLS) {
    try {
      const html = await fetchText(sourceUrl);
      for (const hotelUrl of extractTripHotelUrls(html)) {
        upsertMapping(mapping, hotelUrl, sourceUrl);
      }
    } catch (error) {
      failures.push(error instanceof Error ? error.message : String(error));
    }
  }

  const output = {
    generatedAt: new Date().toISOString(),
    affiliateTemplate: {
      allianceId: '8244727',
      sid: '312571792',
      tripSub3: 'D17100288',
    },
    sourceUrls: SOURCE_URLS,
    seedHotelUrls: SEED_HOTEL_URLS,
    cityIds: Object.fromEntries(
      Object.entries(mapping)
        .filter(([citySlug]) => projectCitySlugs.has(citySlug))
        .sort(([a], [b]) => a.localeCompare(b))
    ),
    failures,
  };

  const outputPath = path.join(projectRoot, 'data', 'tripCityIds.json');
  await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

  console.log(`Saved ${Object.keys(output.cityIds).length} Trip.com city mappings to ${outputPath}`);
  if (failures.length > 0) {
    console.warn(`Completed with ${failures.length} fetch failure(s).`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
