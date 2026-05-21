import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const tierCitiesPage = await readFile(new URL('../app/[tier]/cities/page.tsx', import.meta.url), 'utf8');
const cityPage = await readFile(new URL('../app/[tier]/[city]/page.tsx', import.meta.url), 'utf8');
const updatedCities = await readFile(new URL('../data/updatedCities.ts', import.meta.url), 'utf8');
const routeBranches = await readFile(new URL('../data/routeBranches.ts', import.meta.url), 'utf8');
const routeNetwork = await readFile(new URL('../data/routeNetwork.ts', import.meta.url), 'utf8');
const hero = await readFile(new URL('../components/TerrainRouteHero.tsx', import.meta.url), 'utf8');
const tier1CitiesRedirect = await readFile(new URL('../app/tier-1/cities/page.tsx', import.meta.url), 'utf8');
const tier2CitiesRedirect = await readFile(new URL('../app/tier-2/cities/page.tsx', import.meta.url), 'utf8');
const tier4CitiesRedirect = await readFile(new URL('../app/tier-4/cities/page.tsx', import.meta.url), 'utf8');

assert.match(tierCitiesPage, /robots:\s*\{\s*index:\s*false,\s*follow:\s*true/s);
assert.doesNotMatch(cityPage, /coming soon|currently being drafted/i);
assert.doesNotMatch(updatedCities, /href:\s*'\/cities\/(?:jeongseon|taebaek)'/);
assert.doesNotMatch(routeBranches, /href:\s*'\/cities\/(?:jeongseon|taebaek)'/);
assert.doesNotMatch(routeNetwork, /(?:jeongseon|taebaek): \{[^}]+href: '\/cities\//);
assert.match(tierCitiesPage, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/);
assert.doesNotMatch(tierCitiesPage, /fetchCitiesByTier|CityList|CollectionPage/);
assert.match(tier1CitiesRedirect, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/);
assert.match(tier2CitiesRedirect, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/);
assert.match(tier4CitiesRedirect, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/);
assert.match(hero, /xl:grid-cols-\[360px_minmax\(560px,1fr\)_300px\]/);
assert.match(hero, /paddingTopLeft:\s*\[430,\s*92\]/);

console.log('AdSense and hero guardrails passed');
