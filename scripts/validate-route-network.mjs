import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const dataDir = join(scriptDir, '..', 'data');

const routeNetwork = readFileSync(join(dataDir, 'routeNetwork.ts'), 'utf8');
const routeRegistry = readFileSync(join(dataDir, 'routeRegistry.ts'), 'utf8');
const routeStopovers = readFileSync(join(dataDir, 'routeStopovers.ts'), 'utf8');

const failures = [];
const bannedRouteLanguage = ['Yellow Sea', 'yellow sea', 'Yellow-Sea'];

for (const term of bannedRouteLanguage) {
  if (routeNetwork.includes(term) || routeRegistry.includes(term) || routeStopovers.includes(term)) {
    failures.push(`route data must use "West Sea" / "Korea west coast" instead of "${term}"`);
  }
}

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

const requiredRoute2Terms = [
  "id: 'route-2'",
  "href: '/route-2'",
  'Pyeongchang',
  'Daegwallyeong',
  'Gangneung',
];

for (const term of requiredRoute2Terms) {
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

const requiredRoute5Terms = [
  "id: 'route-5'",
  "href: '/route-5'",
  'Gongju',
  'Jeonju',
  'Gwangju',
  'Imsil',
  'Namwon',
  'Suncheon',
  'Yeosu',
];

for (const term of requiredRoute5Terms) {
  if (!routeNetwork.includes(term)) failures.push(`routeNetwork.ts missing "${term}"`);
}

const requiredRoute6Terms = [
  "id: 'route-6'",
  "href: '/route-6'",
  'Incheon',
  'Suwon',
  'Seosan',
  'Boryeong',
  'Gunsan',
  'Mokpo',
];

for (const term of requiredRoute6Terms) {
  if (!routeNetwork.includes(term)) failures.push(`routeNetwork.ts missing "${term}"`);
}

const requiredRoute7Terms = [
  "id: 'route-7'",
  "href: '/route-7'",
  'Haenam',
  'Wando',
  'Boseong',
  'Namhae',
  'Tongyeong',
  'Geoje',
  'Busan',
];

for (const term of requiredRoute7Terms) {
  if (!routeNetwork.includes(term)) failures.push(`routeNetwork.ts missing "${term}"`);
}

if (!routeRegistry.includes("'3': 'route-3'")) failures.push('routeRegistry.ts missing route-3 slug mapping');
if (!routeRegistry.includes("'4': 'route-4'")) failures.push('routeRegistry.ts missing route-4 slug mapping');
if (!routeRegistry.includes("'5': 'route-5'")) failures.push('routeRegistry.ts missing route-5 slug mapping');
if (!routeRegistry.includes("'6': 'route-6'")) failures.push('routeRegistry.ts missing route-6 slug mapping');
if (!routeRegistry.includes("'7': 'route-7'")) failures.push('routeRegistry.ts missing route-7 slug mapping');
if (!routeRegistry.includes("'route-3': { from: 'seoul', to: 'sokcho' }")) {
  failures.push('routeRegistry.ts missing route-3 route pair');
}
if (!routeRegistry.includes("'route-2': { from: 'seoul', to: 'gangneung' }")) {
  failures.push('routeRegistry.ts missing route-2 route pair');
}
if (!routeRegistry.includes("'route-4': { from: 'goseong', to: 'busan' }")) {
  failures.push('routeRegistry.ts missing route-4 route pair');
}
if (!routeRegistry.includes("'route-5': { from: 'seoul', to: 'yeosu' }")) {
  failures.push('routeRegistry.ts missing route-5 route pair');
}
if (!routeRegistry.includes("'route-6': { from: 'seoul', to: 'mokpo' }")) {
  failures.push('routeRegistry.ts missing route-6 route pair');
}
if (!routeRegistry.includes("'route-7': { from: 'mokpo', to: 'busan' }")) {
  failures.push('routeRegistry.ts missing route-7 route pair');
}

const route3CitySlugs = ['gapyeong', 'chuncheon', 'yanggu', 'inje', 'goseong', 'sokcho'];
for (const slug of route3CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-3'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route2CitySlugs = ['wonju', 'pyeongchang', 'daegwallyeong'];
for (const slug of route2CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-2'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route4CitySlugs = ['yangyang', 'donghae', 'samcheok', 'ulsan'];
for (const slug of route4CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-4'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route5CitySlugs = ['gongju', 'jeonju', 'gwangju', 'imsil', 'namwon', 'suncheon', 'yeosu'];
for (const slug of route5CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-5'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route6CitySlugs = ['incheon', 'suwon', 'seosan', 'boryeong', 'gunsan', 'mokpo'];
for (const slug of route6CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-6'`)) {
    failures.push(`routeRegistry.ts missing preferred route for ${slug}`);
  }
}

const route7CitySlugs = ['haenam', 'wando', 'boseong', 'namhae', 'tongyeong', 'geoje'];
for (const slug of route7CitySlugs) {
  if (!routeRegistry.includes(`${slug}: 'route-7'`)) {
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

const requiredRoute2StopoverTerms = [
  'seoulToGangneungRoute',
  'Pyeongchang',
  'Daegwallyeong',
  '2018 Winter Olympics',
  'Odaesan',
  'Gangneung should be treated as the Route 2 terminus',
];

for (const term of requiredRoute2StopoverTerms) {
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

const requiredRoute5StopoverTerms = [
  'seoulToYeosuRoute',
  'Baekje',
  'Hanok Village',
  'Gwangju',
  'Imsil Cheese Theme Park',
  'Chunhyang',
  'Suncheon Bay',
  'Yeosu night sea',
];

for (const term of requiredRoute5StopoverTerms) {
  if (!routeStopovers.includes(term)) failures.push(`routeStopovers.ts missing "${term}"`);
}

const requiredRoute6StopoverTerms = [
  'seoulToMokpoRoute',
  'open-port',
  'Hwaseong',
  'Haemi',
  'Mud Festival',
  'Gunsan Modern History Museum',
  'Yudalsan',
];

for (const term of requiredRoute6StopoverTerms) {
  if (!routeStopovers.includes(term)) failures.push(`routeStopovers.ts missing "${term}"`);
}

const requiredRoute7StopoverTerms = [
  'mokpoToBusanRoute',
  'Ttangkkeut',
  'Duryunsan',
  'Daeheungsa',
  'Cheongsando',
  'Daehan Dawon',
  'Yeosu night sea',
  'German Village',
  'Yi Sun-sin',
  'POW history',
  'shipbuilding',
];

for (const term of requiredRoute7StopoverTerms) {
  if (!routeStopovers.includes(term)) failures.push(`routeStopovers.ts missing "${term}"`);
}

if (failures.length > 0) {
  console.error('Route network validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Route network validation passed for Route 2, Route 3, Route 4, Route 5, Route 6, and Route 7.');
