import junctionCities from './junctionCities.json';
import type { RouteSlug } from '@/data/routeRegistry';

export interface JunctionCity {
  city: string;
  canonicalHref: string;
  routeSlugs: RouteSlug[];
  historicalWeight: string;
  modernIdentity: string;
  routeMeaning: string;
  imageBrief: string;
}

export const junctionCityRegistry =
  junctionCities as Record<string, JunctionCity>;

export function getJunctionCity(citySlug: string): JunctionCity | null {
  return junctionCityRegistry[citySlug] ?? null;
}

export function getJunctionRouteSlugs(citySlug: string): RouteSlug[] {
  return getJunctionCity(citySlug)?.routeSlugs ?? [];
}
