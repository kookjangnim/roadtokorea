import { VALID_CITY_SLUGS } from '../constants/cities';
import type { WPPost } from './wp-api';

const INDEXABLE_TIER_SLUGS = new Set(['tier-1', 'tier-2', 'tier-3', 'tier-4']);
const EXCLUDED_POST_SLUGS = new Set(['hello-world']);

type WpTerm = {
  slug?: string;
  taxonomy?: string;
};

export type IndexableWpPostRoute = {
  tierSlug: string;
  citySlug: string;
  href: string;
};

function getEmbeddedTerms(post: Pick<WPPost, '_embedded'>): WpTerm[] {
  return (post._embedded?.['wp:term'] || []).flat();
}

export function getIndexableWpPostRoute(post: WPPost): IndexableWpPostRoute | null {
  if (EXCLUDED_POST_SLUGS.has(post.slug)) return null;

  let tierSlug = '';
  let citySlug = '';

  for (const term of getEmbeddedTerms(post)) {
    if (term.taxonomy === 'category' && term.slug && INDEXABLE_TIER_SLUGS.has(term.slug)) {
      tierSlug = term.slug;
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

  if (!tierSlug || !citySlug) return null;

  return {
    tierSlug,
    citySlug,
    href: `/${tierSlug}/${citySlug}/${post.slug}`,
  };
}

export function isWpPostRouteMatch(post: WPPost, tierSlug: string, citySlug: string): boolean {
  const route = getIndexableWpPostRoute(post);
  return route?.tierSlug === tierSlug && route.citySlug === citySlug;
}
