import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDir, '..');
const slotPath = join(projectRoot, 'data', 'cityImageSlots.json');
const imageSlots = JSON.parse(readFileSync(slotPath, 'utf8'));

const requiredCities = ['chungju', 'yeoju', 'wonju', 'yeongwol', 'inje', 'goseong', 'mungyeong', 'andong'];
const requiredSlots = ['hero', 'history', 'present', 'route', 'street'];
const allowedStatuses = new Set(['ready', 'briefed', 'missing']);
const failures = [];

function isExternalUrl(value) {
  return /^https?:\/\//.test(value);
}

for (const citySlug of requiredCities) {
  const city = imageSlots[citySlug];

  if (!city) {
    failures.push(`${citySlug}: missing image slot registry`);
    continue;
  }

  for (const slotName of requiredSlots) {
    const slot = city.slots?.[slotName];

    if (!slot) {
      failures.push(`${citySlug}: missing ${slotName} slot`);
      continue;
    }

    if (!allowedStatuses.has(slot.status)) {
      failures.push(`${citySlug}: ${slotName} has invalid status "${slot.status}"`);
    }

    if (slot.status === 'missing') {
      failures.push(`${citySlug}: ${slotName} is still marked missing`);
    }

    if (!slot.asset || slot.asset.includes('placeholder')) {
      failures.push(`${citySlug}: ${slotName} must use a real asset, not placeholder`);
    }

    if (!slot.sourceHref || slot.sourceHref.trim().length < 8) {
      failures.push(`${citySlug}: ${slotName} needs a sourceHref`);
    }

    if (!slot.brief || slot.brief.trim().length < 40) {
      failures.push(`${citySlug}: ${slotName} needs a useful production brief`);
    }

    if (slot.asset?.startsWith('/')) {
      const localPath = join(projectRoot, 'public', slot.asset);
      if (!existsSync(localPath)) failures.push(`${citySlug}: ${slotName} local asset not found: ${slot.asset}`);
    }

    if (!slot.asset?.startsWith('/') && !isExternalUrl(slot.asset)) {
      failures.push(`${citySlug}: ${slotName} asset must be local or URL`);
    }
  }
}

if (failures.length > 0) {
  console.error('City image slot validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`City image slot validation passed for ${requiredCities.length} cities.`);
