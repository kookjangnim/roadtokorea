import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../data/routeNavigation.ts', import.meta.url), 'utf8');
const routeRegistry = await readFile(new URL('../data/routeRegistry.ts', import.meta.url), 'utf8');
const cityRegistry = await readFile(new URL('../data/cityRegistry.ts', import.meta.url), 'utf8');
const updatedCities = await readFile(new URL('../data/updatedCities.ts', import.meta.url), 'utf8');
const seoulRoutes = await readFile(new URL('../data/seoulRoutes.ts', import.meta.url), 'utf8');
const cityPage = await readFile(new URL('../components/city-detail/CityGuidePage.tsx', import.meta.url), 'utf8');
const canonicalCityPage = await readFile(new URL('../app/cities/[city]/page.tsx', import.meta.url), 'utf8');
const tierCompatibilityPage = await readFile(new URL('../app/[tier]/[city]/page.tsx', import.meta.url), 'utf8');
const tierCitiesPage = await readFile(new URL('../app/[tier]/cities/page.tsx', import.meta.url), 'utf8');
const canonicalHotspotPage = await readFile(new URL('../app/cities/[city]/[hotspot]/page.tsx', import.meta.url), 'utf8');
const legacyHotspotPage = await readFile(new URL('../app/[tier]/[city]/[hotspot]/page.tsx', import.meta.url), 'utf8');
const hotspotGuidePage = await readFile(new URL('../components/hotspot-detail/HotspotGuidePage.tsx', import.meta.url), 'utf8');
const legacyRegionPage = await readFile(new URL('../app/regions/[tier-2]/page.tsx', import.meta.url), 'utf8');
const legacyRouteCompat = await readFile(new URL('../lib/legacy-route-compat.ts', import.meta.url), 'utf8');
const nextConfig = await readFile(new URL('../next.config.ts', import.meta.url), 'utf8');
const routeStopovers = await readFile(new URL('../data/routeStopovers.ts', import.meta.url), 'utf8');
const localCitySources = [
  await readFile(new URL('../data/primaryCityData.ts', import.meta.url), 'utf8'),
  await readFile(new URL('../data/anchorCityData.ts', import.meta.url), 'utf8'),
  await readFile(new URL('../data/supportCityData.ts', import.meta.url), 'utf8'),
].join('\n');

for (const role of ['hub', 'junction', 'anchor', 'pause', 'scenic', 'start', 'end']) {
  assert.match(source, new RegExp(`['"]${role}['"]`), `missing role ${role}`);
}

for (const category of ['overview', 'lodging', 'food', 'attractions', 'transport', 'next-city']) {
  assert.match(source, new RegExp(`id: ['"]${category}['"]`), `missing category ${category}`);
}

assert.match(source, /getRouteNavigationTree/, 'missing getRouteNavigationTree helper');
assert.match(source, /getRouteCityNavigation/, 'missing getRouteCityNavigation helper');
assert.match(source, /getPrimaryRouteRole/, 'missing getPrimaryRouteRole helper');
assert.match(source, /routeData\.fromSlug/, 'route tree must include route start city');
assert.match(source, /routeData\.toSlug/, 'route tree must include route end city');
assert.match(routeRegistry, /addRouteCityLink\(routeData\.fromSlug\)/, 'route city links must include route start city');
assert.match(routeRegistry, /addRouteCityLink\(routeData\.toSlug\)/, 'route city links must include route end city');
assert.doesNotMatch(cityRegistry, /tier\dCities|legacyTier|TierCityData|Tier1CityData/, 'local city registry must not be organized by legacy tiers');
assert.doesNotMatch(updatedCities, /\btier\b|tier-\d/, 'updated city list must not carry tier metadata');
assert.doesNotMatch(seoulRoutes, /\btier\b|legacyTier/, 'Seoul route options must not expose tier ordering');
assert.match(legacyRouteCompat, /LEGACY_CATEGORY_SLUGS/, 'legacy route compatibility slugs must be centralized');
assert.match(legacyRouteCompat, /LEGACY_ROUTE_INDEX_HREF\s*=\s*'\/routes'/, 'legacy route index target must be centralized');
assert.match(legacyRouteCompat, /isLegacyCategorySlug/, 'legacy category validation helper must be centralized');

for (const anchor of ['transport', 'lodging', 'food', 'attractions', 'next-city']) {
  assert.match(cityPage, new RegExp(`['"]${anchor}['"]`), `city page missing ${anchor} anchor`);
}

const routeCitySlugs = new Set();
for (const match of routeStopovers.matchAll(/(?:fromSlug|toSlug|citySlug): '([^']+)'/g)) {
  routeCitySlugs.add(match[1]);
}

for (const citySlug of routeCitySlugs) {
  assert.match(localCitySources, new RegExp(`\\b${citySlug}:\\s*\\{`), `route city ${citySlug} lacks local city data`);
}

assert.doesNotMatch(canonicalCityPage, /getLocalCityTier/, 'canonical city page must not depend on tier lookup');
assert.doesNotMatch(cityPage, /function getLocalCityData\(tier/, 'city detail renderer must not require tier for local city data');
assert.match(tierCompatibilityPage, /redirect\(getCanonicalCityHref\(city\)\)/, 'tier compatibility route must redirect to canonical city route');
assert.doesNotMatch(tierCompatibilityPage, /fetchCity/, 'tier compatibility route must stay thin');
assert.doesNotMatch(tierCompatibilityPage, /CityGuidePage|CityPage/, 'tier compatibility route must not render city detail directly');
assert.doesNotMatch(tierCompatibilityPage, /new Set\(\['tier-1'/, 'legacy city route must use centralized legacy compatibility helper');
assert.match(canonicalHotspotPage, /components\/hotspot-detail\/HotspotGuidePage/, 'canonical hotspot page must render hotspot guide component');
assert.match(legacyHotspotPage, /redirect\(`\/cities\/\$\{citySlug\}\/\$\{hotspotSlug\}`\)/, 'legacy hotspot page must redirect to canonical city hotspot route');
assert.doesNotMatch(legacyHotspotPage, /<main|dangerouslySetInnerHTML|fetchPostsByCityTag/, 'legacy hotspot page must not render hotspot detail directly');
assert.match(hotspotGuidePage, /isWpPostCityMatch\(post,\s*city/, 'hotspot guide must validate by city, not tier');
assert.doesNotMatch(hotspotGuidePage, /\$\{tier\}\/\$\{citySlug\}|\$\{tier\}\/\$\{city\}/, 'hotspot guide must not emit tier hotspot URLs');
assert.match(tierCitiesPage, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/, 'legacy tier city archive must redirect to route index');
assert.doesNotMatch(tierCitiesPage, /fetchCitiesByTier|CityList|CollectionPage/, 'legacy tier city archive must not render tier UI');
assert.match(legacyRegionPage, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/, 'legacy region page must redirect to route index');
assert.doesNotMatch(legacyRegionPage, /Image|Link|tierData|Filter by Region/, 'legacy region page must not render tier UI');

for (const legacySource of ['/regions/:tier', '/regions/:tier/cities', '/:tier(tier-1|tier-2|tier-3|tier-4)']) {
  const redirectBlockPattern = new RegExp(`source:\\s*['"]${legacySource.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"],\\s*destination:\\s*['"]/routes['"]`, 's');
  assert.match(nextConfig, redirectBlockPattern, `${legacySource} must redirect to /routes`);
}

for (const routeNumber of ['1', '2', '3', '4', '5', '6', '7', '8']) {
  const routeCityPage = await readFile(new URL(`../app/route-${routeNumber}/[city]/page.tsx`, import.meta.url), 'utf8');
  assert.doesNotMatch(routeCityPage, /getLocalCityTier/, `route-${routeNumber} city page must not depend on tier lookup`);
  assert.doesNotMatch(routeCityPage, /tier, city/, `route-${routeNumber} city page must pass city-only params`);
  assert.match(routeCityPage, /components\/city-detail\/CityGuidePage/, `route-${routeNumber} city page must use city guide component`);
}

for (const tierNumber of ['1', '2', '4']) {
  const tierCityPage = await readFile(new URL(`../app/tier-${tierNumber}/[city]/page.tsx`, import.meta.url), 'utf8');
  const tierCitiesRedirectPage = await readFile(new URL(`../app/tier-${tierNumber}/cities/page.tsx`, import.meta.url), 'utf8');
  assert.match(tierCityPage, /redirect\(getCanonicalCityHref\(city\)\)/, `tier-${tierNumber} city page must redirect to canonical city route`);
  assert.doesNotMatch(tierCityPage, /CityGuidePage|CityPage/, `tier-${tierNumber} city page must not render city detail directly`);
  assert.match(tierCitiesRedirectPage, /redirect\(LEGACY_ROUTE_INDEX_HREF\)/, `tier-${tierNumber} city archive must redirect to route index`);
}
