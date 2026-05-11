import { getAllRouteData, getRouteData, type RouteData } from '@/data/routeStopovers';
import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';
import { getJunctionCity, getJunctionRouteSlugs, junctionCityRegistry } from '@/data/junctionCities';

export type RouteSlug = 'route-1' | 'route-2' | 'route-3' | 'route-4' | 'route-5';

export type RouteCityLink = {
  citySlug: string;
  routeSlug: RouteSlug;
  href: string;
};

export const routeSlugByCode: Record<string, RouteSlug> = {
  '1': 'route-1',
  '2': 'route-2',
  '3': 'route-3',
  '4': 'route-4',
  '5': 'route-5',
};

export const routePairBySlug: Record<RouteSlug, { from: string; to: string }> = {
  'route-1': { from: 'seoul', to: 'busan' },
  'route-2': { from: 'seoul', to: 'gangneung' },
  'route-3': { from: 'seoul', to: 'sokcho' },
  'route-4': { from: 'goseong', to: 'busan' },
  'route-5': { from: 'seoul', to: 'yeosu' },
};

const localCityTierBySlug: Record<string, string> = {
  ...Object.fromEntries(Object.keys(tier1Cities).map((slug) => [slug, 'tier-1'])),
  ...Object.fromEntries(Object.keys(tier2Cities).map((slug) => [slug, 'tier-2'])),
  ...Object.fromEntries(Object.keys(tier4Cities).map((slug) => [slug, 'tier-4'])),
};

const preferredRouteByCitySlug: Record<string, RouteSlug> = {
  seoul: 'route-1',
  busan: 'route-1',
  cheonan: 'route-1',
  daejeon: 'route-1',
  chungju: 'route-1',
  mungyeong: 'route-1',
  andong: 'route-1',
  sangju: 'route-1',
  gumi: 'route-1',
  daegu: 'route-1',
  changnyeong: 'route-1',
  miryang: 'route-1',
  gyeongju: 'route-1',
  pohang: 'route-1',
  yeongdeok: 'route-1',
  uljin: 'route-1',
  wonju: 'route-2',
  pyeongchang: 'route-2',
  daegwallyeong: 'route-2',
  samcheok: 'route-4',
  gapyeong: 'route-3',
  chuncheon: 'route-3',
  yanggu: 'route-3',
  inje: 'route-3',
  goseong: 'route-3',
  sokcho: 'route-3',
  yangyang: 'route-4',
  donghae: 'route-4',
  ulsan: 'route-4',
  gongju: 'route-5',
  jeonju: 'route-5',
  gwangju: 'route-5',
  imsil: 'route-5',
  namwon: 'route-5',
  suncheon: 'route-5',
  yeosu: 'route-5',
};

export function getRouteSlugForRoute(routeData: RouteData): RouteSlug {
  return routeSlugByCode[routeData.routeCode] ?? 'route-1';
}

export function getRouteDataBySlug(routeSlug: string): RouteData | null {
  const pair = routePairBySlug[routeSlug as RouteSlug];
  if (!pair) return null;
  return getRouteData(pair.from, pair.to);
}

export function getLocalCityTier(citySlug: string): string | null {
  return localCityTierBySlug[citySlug] ?? null;
}

export function getPreferredRouteSlugForCity(citySlug: string): RouteSlug | null {
  if (getJunctionCity(citySlug)) return null;
  return preferredRouteByCitySlug[citySlug] ?? null;
}

export function getCanonicalCityHref(citySlug: string): string {
  const routeSlug = getPreferredRouteSlugForCity(citySlug);
  return routeSlug ? `/${routeSlug}/${citySlug}` : `/cities/${citySlug}`;
}

export function getRouteCityHref(routeSlug: RouteSlug, citySlug: string): string {
  return `/${routeSlug}/${citySlug}`;
}

export function getRouteCityLinks(): RouteCityLink[] {
  const links = new Map<string, RouteCityLink>();

  for (const [citySlug, junction] of Object.entries(junctionCityRegistry)) {
    for (const routeSlug of junction.routeSlugs) {
      const key = `${routeSlug}:${citySlug}`;
      links.set(key, {
        citySlug,
        routeSlug,
        href: getRouteCityHref(routeSlug, citySlug),
      });
    }
  }

  for (const routeData of getAllRouteData()) {
    const routeSlug = getRouteSlugForRoute(routeData);
    for (const transport of Object.values(routeData.transports)) {
      const variants = transport.variants?.length ? transport.variants : [transport];
      for (const variant of variants) {
        for (const stopover of variant.stopovers) {
          const key = `${routeSlug}:${stopover.citySlug}`;
          links.set(key, {
            citySlug: stopover.citySlug,
            routeSlug,
            href: getRouteCityHref(routeSlug, stopover.citySlug),
          });
        }
      }
    }
  }

  return [...links.values()];
}

export function getRouteSlugsForCity(citySlug: string): RouteSlug[] {
  const junctionRoutes = getJunctionRouteSlugs(citySlug);
  if (junctionRoutes.length) return junctionRoutes;

  const preferredRoute = getPreferredRouteSlugForCity(citySlug);
  return preferredRoute ? [preferredRoute] : [];
}
