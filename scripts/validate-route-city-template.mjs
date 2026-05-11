import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const templatePath = join(scriptDir, '..', 'data', 'routeCityStoryTemplates.json');
const registryPath = join(scriptDir, '..', 'data', 'reviewedCityQualityRegistry.json');
const routeCityStoryTemplates = JSON.parse(readFileSync(templatePath, 'utf8'));
const qualityRegistry = JSON.parse(readFileSync(registryPath, 'utf8'));

const REQUIRED_FIELDS = [
  'historicalWeight',
  'modernIdentity',
  'routeMeaning',
  'imageBrief',
  'qualityBar',
];

const requiredCities = qualityRegistry.reviewedCities;

const failures = [];

for (const citySlug of requiredCities) {
  const template = routeCityStoryTemplates[citySlug];

  if (!template) {
    failures.push(`${citySlug}: missing route-city story template`);
    continue;
  }

  for (const field of REQUIRED_FIELDS) {
    const value = template[field];

    if (Array.isArray(value)) {
      if (value.length === 0) failures.push(`${citySlug}: ${field} must not be empty`);
      continue;
    }

    if (!value || String(value).trim().length < 80) {
      failures.push(`${citySlug}: ${field} must be at least 80 characters`);
    }
  }
}

if (failures.length > 0) {
  console.error('Route-city template validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Route-city template validation passed for ${requiredCities.length} cities.`);
