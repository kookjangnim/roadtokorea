import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const projectRoot = new URL('..', import.meta.url);
const projectRootPath = fileURLToPath(projectRoot);

const auditedFiles = [
  'app/page.tsx',
  'app/routes/page.tsx',
  'app/updated-cities/page.tsx',
  'app/routes/[from]/[to]/RoutePageClient.tsx',
  'components/city-detail/CityGuidePage.tsx',
  'components/hotspot-detail/HotspotGuidePage.tsx',
  'data/cityImageSlots.json',
  'data/hotspotImageMap.ts',
  'data/updatedCities.ts',
  'data/supportCityData.ts',
  'data/anchorCityData.ts',
  'data/primaryCityData.ts',
];

function shouldSkipReference(reference) {
  return (
    reference.includes('${') ||
    reference.includes('{') ||
    reference.includes('}') ||
    reference.endsWith('/')
  );
}

const imageReferences = new Set();
for (const file of auditedFiles) {
  const source = await readFile(new URL(file, projectRoot), 'utf8');

  for (const match of source.matchAll(/['"`](\/images\/[^'"`?#]+)['"`]/g)) {
    const reference = match[1];
    if (!shouldSkipReference(reference)) imageReferences.add(reference);
  }
}

const missing = [];
const placeholders = [];

for (const reference of [...imageReferences].sort()) {
  if (reference.includes('placeholder')) placeholders.push(reference);

  try {
    await access(join(projectRootPath, 'public', reference));
  } catch {
    missing.push(reference);
  }
}

if (placeholders.length > 0) {
  console.warn('Placeholder image references remain:');
  for (const placeholder of placeholders) {
    console.warn(`  ${placeholder}`);
  }
}

if (missing.length > 0) {
  console.error('Missing public image files:');
  for (const reference of missing) {
    console.error(`  ${reference}`);
  }
  process.exit(1);
}

console.log(`Public image audit passed: ${imageReferences.size} local image references checked`);
