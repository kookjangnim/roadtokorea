import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDir, '..');
const auditPath = join(projectRoot, 'data', 'cityImagePipelineAudits.json');
const slotsPath = join(projectRoot, 'data', 'cityImageSlots.json');
const registryPath = join(projectRoot, 'data', 'reviewedCityQualityRegistry.json');

const audit = JSON.parse(readFileSync(auditPath, 'utf8'));
const imageSlots = JSON.parse(readFileSync(slotsPath, 'utf8'));
const qualityRegistry = JSON.parse(readFileSync(registryPath, 'utf8'));

const failures = [];
const requiredSlots = ['hero', 'history', 'present', 'route', 'street'];
const allowedPriorities = new Set(['publish-ready', 'replace-soon', 'blocked']);
const auditedSlugs = Object.keys(audit.auditedCities ?? {});

if (!audit.version) failures.push('audit: version is required');
if (!audit.lastReviewed) failures.push('audit: lastReviewed is required');
if (!Array.isArray(audit.rules) || audit.rules.length < 5) {
  failures.push('audit: at least five image pipeline rules are required');
}

for (const slug of auditedSlugs) {
  const entry = audit.auditedCities[slug];
  const slots = imageSlots[slug]?.slots;

  if (!qualityRegistry.reviewedCities.includes(slug)) {
    failures.push(`${slug}: audited city must be in reviewedCityQualityRegistry`);
  }

  if (!slots) {
    failures.push(`${slug}: audited city must have image slots`);
    continue;
  }

  if (!entry.routeSlug?.startsWith('route-')) {
    failures.push(`${slug}: routeSlug must be a route slug`);
  }

  if (!allowedPriorities.has(entry.priority)) {
    failures.push(`${slug}: invalid audit priority "${entry.priority}"`);
  }

  if (!entry.reason || entry.reason.trim().length < 80) {
    failures.push(`${slug}: audit reason must explain the image risk`);
  }

  if (!Array.isArray(entry.mustProve) || entry.mustProve.length < 5) {
    failures.push(`${slug}: mustProve must name at least five visual proof targets`);
  }

  if (!entry.nextAction || entry.nextAction.trim().length < 60) {
    failures.push(`${slug}: nextAction must be specific`);
  }

  for (const slotName of requiredSlots) {
    const slot = slots[slotName];
    if (!slot) {
      failures.push(`${slug}: missing ${slotName} slot`);
      continue;
    }

    if (slot.status === 'missing') {
      failures.push(`${slug}: ${slotName} cannot be missing in audited pipeline`);
    }

    if (slot.sourceHref === 'https://english.visitkorea.or.kr') {
      failures.push(`${slug}: ${slotName} sourceHref is too generic for audited city`);
    }
  }
}

const requiredAuditedCities = [
  'gongju',
  'jeonju',
  'gwangju',
  'imsil',
  'namwon',
  'suncheon',
  'yeosu',
  'incheon',
  'suwon',
  'seosan',
  'boryeong',
  'gunsan',
  'mokpo',
  'haenam',
  'wando',
  'boseong',
  'namhae',
  'tongyeong',
  'geoje',
];

for (const slug of requiredAuditedCities) {
  if (!auditedSlugs.includes(slug)) {
    failures.push(`${slug}: Route 5/6/7 city must be included in image pipeline audit`);
  }
}

if (failures.length > 0) {
  console.error('City image pipeline audit validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`City image pipeline audit validation passed for ${auditedSlugs.length} cities.`);
