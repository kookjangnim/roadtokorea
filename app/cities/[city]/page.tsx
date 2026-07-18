import { notFound, permanentRedirect } from 'next/navigation';
import CityPage from '@/components/city-detail/CityGuidePage';
import {
  getCanonicalCityHref,
  getPreferredRouteSlugForCity,
} from '@/data/routeRegistry';
import { hasLocalCityData } from '@/data/cityRegistry';
import { localCityRegistry } from '@/data/cityRegistry';

export { generateMetadata } from '@/components/city-detail/CityGuidePage';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(localCityRegistry).map((city) => ({ city }));
}

export default async function CityCanonicalRedirectPage({ params }: PageProps) {
  const { city } = await params;
  if (getPreferredRouteSlugForCity(city)) {
    permanentRedirect(getCanonicalCityHref(city));
  }

  if (!hasLocalCityData(city)) notFound();

  return <CityPage params={Promise.resolve({ city })} />;
}
