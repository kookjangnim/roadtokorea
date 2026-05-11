import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const profilePath = join(scriptDir, '..', 'data', 'citySupportProfiles.ts');
const profileSource = readFileSync(profilePath, 'utf8');

const requiredCities = [
  {
    slug: 'chungju',
    requiredTerms: ['supportSummary', 'roleSummary', 'staySummary', 'foodSummary', 'nextLegSummary'],
  },
  {
    slug: 'yeoju',
    requiredTerms: [
      'supportSummary',
      'roleSummary',
      'staySummary',
      'foodSummary',
      'nextLegSummary',
      'King Sejong',
      'Namhan',
      'junction',
      'Chungju',
      'Wonju',
    ],
  },
  {
    slug: 'wonju',
    requiredTerms: ['Korean War', 'Buldak', 'Gangneung', 'supportSummary'],
  },
  {
    slug: 'mungyeong',
    requiredTerms: ['Saejae', 'pass', 'threshold', 'Andong', 'supportSummary'],
  },
  {
    slug: 'yeongwol',
    requiredTerms: ['Danjong', 'Cheongnyeongpo', 'film', 'Yeongwol', 'supportSummary'],
  },
];

const failures = [];

function extractObjectBlock(source, startIndex) {
  const objectStart = source.indexOf('{', startIndex);
  if (objectStart === -1) return '';

  let depth = 0;
  for (let index = objectStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === '{') depth += 1;
    if (char === '}') depth -= 1;
    if (depth === 0) return source.slice(startIndex, index + 1);
  }

  return '';
}

for (const city of requiredCities) {
  const cityStart = profileSource.indexOf(`  ${city.slug}: {`);

  if (cityStart === -1) {
    failures.push(`${city.slug}: missing city support profile`);
    continue;
  }

  const cityBlock = extractObjectBlock(profileSource, cityStart);

  for (const term of city.requiredTerms) {
    if (!cityBlock.includes(term)) {
      failures.push(`${city.slug}: missing required support term "${term}"`);
    }
  }

  const visualCount = (cityBlock.match(/eyebrow:/g) ?? []).length;
  const referenceCount = (cityBlock.match(/sourceHref:/g) ?? []).length;

  if (visualCount < 3) failures.push(`${city.slug}: needs at least 3 visual slots`);
  if (referenceCount < 3) failures.push(`${city.slug}: needs at least 3 sourced media/reference links`);
}

if (failures.length > 0) {
  console.error('City support profile validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`City support profile validation passed for ${requiredCities.length} cities.`);
