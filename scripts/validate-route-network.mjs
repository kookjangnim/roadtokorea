import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const dataDir = join(scriptDir, '..', 'data');

const routeNetwork = readFileSync(join(dataDir, 'routeNetwork.ts'), 'utf8');
const routeRegistry = readFileSync(join(dataDir, 'routeRegistry.ts'), 'utf8');
const routeStopovers = readFileSync(join(dataDir, 'routeStopovers.ts'), 'utf8');

const failures = [];

const requiredRoute3Terms = [
  "id: 'route-3'",
  "href: '/route-3'",
  'Gapyeong',
  'Chuncheon',
  'Yanggu',
  'Inje',
  'Goseong',
  'Sokcho',
];

for (const term of requiredRoute3Terms) {
  if (!routeNetwork.includes(term)) failures.push(`routeNetwork.ts missing "${term}"`);
}

const requiredRoute4Terms = [
  "id: 'route-4'",
  "href: '/route-4'",
  'National Route 7',
  'Yangyang',
  'Donghae',
  'Ulsan',
  'Busan',
];

for (const term of requiredRoute4Terms) {
  if (!routeNetwork.includes(term)) failures.push(`routeNetwork.ts missing "${term}"`);
}

if (!routeRegistry.includes("'3': 'route-3'")) failures.push('routeRegistry.ts missing route-3 slug mapping');
if (!routeRegistry.includes("'4': 'route-4'")) failures.push('routeRegistry.ts missing route-4 slug mapping');
if (!routeRegistry.includes("'route-3': { from: 'seoul', to: 'sokcho' }")) {
  failures.push('routeRegistry.ts missing route-3 route pair');
}
if (!routeRegistry.includes("'route-4': { from: 'goseong', to: 'busan' }")) {
  failures.push('routeRegistry.ts missing route-4 route pair');
}

const route3CitySlugs = ['gapyeong', 'chuncheon', 'yanggu', 'inje', 'goseong', 'sokcho'];
for (const slug of route3CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-3'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route4CitySlugs = ['yangyang', 'donghae', 'ulsan'];
for (const slug of route4CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-4'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const requiredRoute3StopoverTerms = [
  'seoulToSokchoRoute',
  'Jinburyeong',
  'Hangyeryeong',
  'Misiryeong',
  'Seoraksan',
  'Yanggu',
  'Inje',
  'Sokcho',
];

for (const term of requiredRoute3StopoverTerms) {
  if (!routeStopovers.includes(term)) failures.push(`routeStopovers.ts missing "${term}"`);
}

const requiredRoute4StopoverTerms = [
  'goseongToBusanRoute',
  'National Route 7',
  'Surfyy Beach',
  'Mukho Lighthouse',
  'Daewangam Park',
  'Taehwagang National Garden',
];

for (const term of requiredRoute4StopoverTerms) {
  if (!routeStopovers.includes(term)) failures.push(`routeStopovers.ts missing "${term}"`);
}

if (failures.length > 0) {
  console.error('Route network validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Route network validation passed for Route 3 and Route 4.');
