import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import { LEGACY_ROUTE_INDEX_HREF } from '@/lib/legacy-route-compat';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export async function generateMetadata({ params }: { params: Promise<{ tier: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const title = 'Route Guide';
  const description = 'Compatibility redirect for legacy city chapter archives. Use the route guides for the primary RoadToKorea experience.';

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${resolvedParams.tier}/cities`,
    },
  };
}

export default function TierCitiesRedirectPage() {
  permanentRedirect(LEGACY_ROUTE_INDEX_HREF);
}
