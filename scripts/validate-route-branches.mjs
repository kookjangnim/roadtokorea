import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const branchPath = join(scriptDir, '..', 'data', 'routeBranches.ts');
const networkPath = join(scriptDir, '..', 'data', 'routeNetwork.ts');
const branchSource = readFileSync(branchPath, 'utf8');
const networkSource = readFileSync(networkPath, 'utf8');

const failures = [];

const requiredTerms = [
  'Branch 2A',
  '/route-2/branch-a',
  'Wonju',
  'Jecheon',
  'Yeongwol',
  'branch-a',
];

for (const term of requiredTerms) {
  if (!branchSource.includes(term)) failures.push(`routeBranches.ts missing "${term}"`);
}

if (networkSource.includes('future-inland')) failures.push('routeNetwork.ts must not use future-inland');
if (networkSource.includes("label: 'Future'")) failures.push('routeNetwork.ts must not label the branch as Future');
if (!networkSource.includes("id: 'branch-2a'")) failures.push('routeNetwork.ts missing branch-2a');
if (!networkSource.includes("href: '/route-2/branch-a'")) {
  failures.push('routeNetwork.ts branch must link to /route-2/branch-a');
}

if (failures.length > 0) {
  console.error('Route branch validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Route branch validation passed for Branch 2A.');
