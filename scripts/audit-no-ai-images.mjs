import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const sourceRoots = ['app', 'components', 'data', 'lib'];
const sourceExtensions = new Set(['.js', '.json', '.mjs', '.ts', '.tsx']);
const prohibitedReferencePatterns = [
  /\/images\/destinations\//i,
  /\/images\/cities\//i,
  /Gemini_Generated_Image/i,
  /\/images\/routes\/route-1\/[^'"\s)]*(?:generated-v|hero-generated)/i,
  /hero_aesthetic/i,
];
const prohibitedPublicPaths = [
  'public/images/destinations',
  'public/images/cities',
  'public/images/routes/route-1',
];

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

const failures = [];

for (const sourceRoot of sourceRoots) {
  for (const file of listFiles(resolve(root, sourceRoot))) {
    if (!sourceExtensions.has(extname(file))) continue;
    const source = readFileSync(file, 'utf8');
    for (const pattern of prohibitedReferencePatterns) {
      if (pattern.test(source)) {
        failures.push(`${relative(root, file)} still contains ${pattern}`);
      }
    }
  }
}

for (const prohibitedPath of prohibitedPublicPaths) {
  if (existsSync(resolve(root, prohibitedPath))) {
    failures.push(`${prohibitedPath} still exists`);
  }
}

for (const file of listFiles(resolve(root, 'public/images'))) {
  const filename = relative(root, file);
  if (/Gemini|generated-v|hero_aesthetic|ultravibrant|ultrapremium|cinematic_travel|premium_editorial/i.test(filename)) {
    failures.push(`${filename} has a known generated-image filename`);
  }
}

const landingSource = readFileSync(resolve(root, 'components/home/HomeLanding.tsx'), 'utf8');
if (!landingSource.includes("'6': '/images/clipartkorea/mokpo/tc00240029851.jpg'")) {
  failures.push('Route 6 landing image is not the approved Mokpo real photo');
}
if (!landingSource.includes("'8': '/images/clipartkorea/haenam/tc00240076791.jpg'")) {
  failures.push('Route 8 landing image is not the approved Haenam real photo');
}

if (failures.length) {
  console.error('AI image audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('AI image audit passed: generated assets and prohibited references are absent.');

