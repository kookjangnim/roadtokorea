import { getAllRouteData } from './routeStopovers';
import { getRouteSlugForRoute, type RouteSlug } from './routeRegistry';

export type { RouteSlug };

export type RouteCityRole = 'hub' | 'junction' | 'anchor' | 'pause' | 'scenic' | 'start' | 'end';

export type RouteCategoryId =
  | 'overview'
  | 'lodging'
  | 'food'
  | 'attractions'
  | 'transport'
  | 'next-city';

export type RouteNavigationCategory = {
  id: RouteCategoryId;
  label: string;
  hrefSuffix: string;
};

export type RouteNavigationCity = {
  slug: string;
  name: string;
  href: string;
  roles: RouteCityRole[];
  roleLabel: string;
  categories: RouteNavigationCategory[];
};

export type RouteNavigationNode = {
  routeSlug: RouteSlug;
  label: string;
  href: string;
  cities: RouteNavigationCity[];
};

export const routeCategories: RouteNavigationCategory[] = [
  { id: 'overview', label: 'Overview', hrefSuffix: '' },
  { id: 'lodging', label: 'Lodging', hrefSuffix: '#lodging' },
  { id: 'food', label: 'Food', hrefSuffix: '#food' },
  { id: 'attractions', label: 'Attractions', hrefSuffix: '#attractions' },
  { id: 'transport', label: 'Transport', hrefSuffix: '#transport' },
  { id: 'next-city', label: 'Next City', hrefSuffix: '#next-city' },
];

const routeRoleOverrides: Record<string, RouteCityRole[]> = {
  seoul: ['hub', 'start'],
  busan: ['hub', 'end'],
  daejeon: ['junction', 'anchor'],
  wonju: ['junction'],
  yeoju: ['junction'],
  mokpo: ['hub', 'junction'],
  gyeongju: ['anchor'],
  jeonju: ['anchor'],
  gangneung: ['hub', 'anchor'],
  sokcho: ['anchor', 'scenic'],
  cheonan: ['pause'],
  gumi: ['pause'],
  changnyeong: ['pause'],
  uljin: ['scenic'],
  samcheok: ['scenic'],
  yangyang: ['scenic'],
};

export const routeRoleLabels: Record<RouteCityRole, string> = {
  hub: 'Hub city',
  junction: 'Junction city',
  anchor: 'Anchor destination',
  pause: 'Practical pause',
  scenic: 'Scenic stop',
  start: 'Route start',
  end: 'Route end',
};

export function getPrimaryRouteRole(roles: RouteCityRole[]): RouteCityRole {
  return roles[0] ?? 'pause';
}

export function getRouteCityNavigation(routeSlug: RouteSlug, citySlug: string): string {
  return `/${routeSlug}/${citySlug}`;
}

function getRolesForCity(citySlug: string, index: number, total: number): RouteCityRole[] {
  const roles = new Set<RouteCityRole>(routeRoleOverrides[citySlug] ?? []);
  if (index === 0) roles.add('start');
  if (index === total - 1) roles.add('end');
  if (!roles.size) roles.add('pause');
  return [...roles];
}

function getRouteNavigationLabel(routeCode: string, from: string, to: string): string {
  return `Route ${routeCode} ${from} to ${to}`;
}

export function getRouteNavigationTree(): RouteNavigationNode[] {
  return getAllRouteData().map((routeData) => {
    const routeSlug = getRouteSlugForRoute(routeData);
    const seenCities = new Map<string, string>();
    const addCity = (slug: string, name: string) => {
      if (!seenCities.has(slug)) {
        seenCities.set(slug, name);
      }
    };

    addCity(routeData.fromSlug, routeData.from);
    for (const transport of Object.values(routeData.transports)) {
      const variants = transport.variants?.length ? transport.variants : [transport];
      for (const variant of variants) {
        for (const stopover of variant.stopovers) {
          addCity(stopover.citySlug, stopover.city);
        }
      }
    }
    addCity(routeData.toSlug, routeData.to);

    const cityEntries = [...seenCities.entries()];

    return {
      routeSlug,
      label: getRouteNavigationLabel(routeData.routeCode, routeData.from, routeData.to),
      href: `/${routeSlug}`,
      cities: cityEntries.map(([slug, name], index) => {
        const roles = getRolesForCity(slug, index, cityEntries.length);
        const primaryRole = getPrimaryRouteRole(roles);

        return {
          slug,
          name,
          href: getRouteCityNavigation(routeSlug, slug),
          roles,
          roleLabel: routeRoleLabels[primaryRole],
          categories: routeCategories,
        };
      }),
    };
  });
}
