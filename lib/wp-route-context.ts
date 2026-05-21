import { VALID_CITY_SLUGS } from '../constants/cities';
import type { WPPost } from './wp-api';
import { isLegacyCategorySlug } from './legacy-route-compat';
const EXCLUDED_POST_SLUGS = new Set(['hello-world']);

type WpTerm = {
  slug?: string;
  taxonomy?: string;
};

export type IndexableWpPostRoute = {
  legacyCategorySlug: string;
  citySlug: string;
  href: string;
};

function getEmbeddedTerms(post: Pick<WPPost, '_embedded'>): WpTerm[] {
  return (post._embedded?.['wp:term'] || []).flat();
}

export function getIndexableWpPostRoute(post: WPPost): IndexableWpPostRoute | null {
  if (EXCLUDED_POST_SLUGS.has(post.slug)) return null;

  let legacyCategorySlug = '';
  let citySlug = '';

  for (const term of getEmbeddedTerms(post)) {
    if (
      term.taxonomy === 'category' &&
      term.slug &&
      isLegacyCategorySlug(term.slug)
    ) {
      legacyCategorySlug = term.slug;
    }

    if (
      !citySlug &&
      term.taxonomy === 'post_tag' &&
      term.slug &&
      VALID_CITY_SLUGS.includes(term.slug)
    ) {
      citySlug = term.slug;
    }
  }

  if (!legacyCategorySlug || !citySlug) return null;

  return {
    legacyCategorySlug,
    citySlug,
    href: `/cities/${citySlug}/${post.slug}`,
  };
}

export function isWpPostCityMatch(post: WPPost, citySlug: string): boolean {
  const route = getIndexableWpPostRoute(post);
  return route?.citySlug === citySlug;
}

export function isLegacyWpPostRouteMatch(
  post: WPPost,
  legacyCategorySlug: string,
  citySlug: string
): boolean {
  const route = getIndexableWpPostRoute(post);
  return route?.legacyCategorySlug === legacyCategorySlug && route.citySlug === citySlug;
}
