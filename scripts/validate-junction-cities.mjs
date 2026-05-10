import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const registryPath = join(scriptDir, '..', 'data', 'junctionCities.json');
const registry = JSON.parse(readFileSync(registryPath, 'utf8'));

const failures = [];

for (const [slug, junction] of Object.entries(registry)) {
  if (!junction.city || junction.city.trim().length < 2) {
    failures.push(`${slug}: city name is required`);
  }

  if (!Array.isArray(junction.routeSlugs) || junction.routeSlugs.length < 2) {
    failures.push(`${slug}: routeSlugs must include at least two route contexts`);
  }

  if (!junction.routeMeaning || junction.routeMeaning.trim().length < 100) {
    failures.push(`${slug}: routeMeaning must explain the junction in at least 100 characters`);
  }

  if (!junction.canonicalHref || junction.canonicalHref !== `/cities/${slug}`) {
    failures.push(`${slug}: canonicalHref must be /cities/${slug}`);
  }
}

if (failures.length > 0) {
  console.error('Junction city validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Junction city validation passed for ${Object.keys(registry).length} cities.`);
