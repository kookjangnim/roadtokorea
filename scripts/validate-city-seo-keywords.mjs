import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const profilePath = join(scriptDir, '..', 'data', 'citySeoKeywords.ts');
const registryPath = join(scriptDir, '..', 'data', 'reviewedCityQualityRegistry.json');
const profileSource = readFileSync(profilePath, 'utf8');
const qualityRegistry = JSON.parse(readFileSync(registryPath, 'utf8'));

const requiredCities = qualityRegistry.reviewedCities;

const requiredFields = [
  'primaryIntent',
  'metaKeywords',
  'clusters',
  'questions',
  'Route intent',
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

for (const citySlug of requiredCities) {
  const cityStart = profileSource.indexOf(`  ${citySlug}: {`);

  if (cityStart === -1) {
    failures.push(`${citySlug}: missing SEO keyword profile`);
    continue;
  }

  const cityBlock = extractObjectBlock(profileSource, cityStart);

  for (const field of requiredFields) {
    if (!cityBlock.includes(field)) {
      failures.push(`${citySlug}: missing required SEO field "${field}"`);
    }
  }

  const keywordCount = (cityBlock.match(/metaKeywords:[\s\S]*?\],/g)?.[0].match(/'/g)?.length ?? 0) / 2;
  const questionCount = (cityBlock.match(/question:/g) ?? []).length;
  const clusterCount = (cityBlock.match(/label:/g) ?? []).length;

  if (keywordCount < 7) failures.push(`${citySlug}: needs at least 7 meta keywords`);
  if (clusterCount < 3) failures.push(`${citySlug}: needs at least 3 keyword clusters`);
  if (questionCount < 2) failures.push(`${citySlug}: needs at least 2 search-intent questions`);

  const clusterTerms = [...cityBlock.matchAll(/terms: \[([\s\S]*?)\]/g)]
    .flatMap((match) => [...match[1].matchAll(/'([^']+)'/g)].map((termMatch) => termMatch[1]));

  if (new Set(clusterTerms).size < 7) {
    failures.push(`${citySlug}: needs at least 7 distinct clustered search terms`);
  }
}

if (failures.length > 0) {
  console.error('City SEO keyword validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`City SEO keyword validation passed for ${requiredCities.length} cities.`);
