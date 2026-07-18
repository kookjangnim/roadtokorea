import type { Metadata } from 'next';
import { getRouteDataBySlug, type RouteSlug } from '@/data/routeRegistry';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export function buildRouteMetadata(routeSlug: RouteSlug): Metadata {
  const routeData = getRouteDataBySlug(routeSlug);

  if (!routeData) {
    return {
      title: 'Route Not Found',
    };
  }

  const canonical = `${siteUrl}/${routeSlug}`;

  return {
    title: `Route ${routeData.routeCode}: ${routeData.routeLabel}`,
    description: `${routeData.headline} Compare transport modes, stopover cities, and practical pacing for this South Korea route.`,
    openGraph: {
      title: `Route ${routeData.routeCode}: ${routeData.routeLabel}`,
      description: routeData.overview,
      url: canonical,
      type: 'article',
    },
    alternates: {
      canonical,
    },
  };
}

export const routesIndexMetadata: Metadata = {
  title: 'South Korea Route Library',
  description:
    'Browse RoadToKorea route guides, compare stopover cities, and choose the South Korea itinerary that fits your travel style.',
  openGraph: {
    title: 'South Korea Route Library',
    description:
      'Browse RoadToKorea route guides, compare stopover cities, and choose the South Korea itinerary that fits your travel style.',
    url: `${siteUrl}/routes`,
    type: 'website',
  },
  alternates: {
    canonical: `${siteUrl}/routes`,
  },
};

export const updatedCitiesMetadata: Metadata = {
  title: 'Updated South Korea City Guides',
  description:
    'Read RoadToKorea city guide articles with route context, local travel notes, and editorial photo references.',
  openGraph: {
    title: 'Updated South Korea City Guides',
    description:
      'Read RoadToKorea city guide articles with route context, local travel notes, and editorial photo references.',
    url: `${siteUrl}/updated-cities`,
    type: 'website',
  },
  alternates: {
    canonical: `${siteUrl}/updated-cities`,
  },
};
