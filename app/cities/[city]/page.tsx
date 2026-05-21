import { notFound, redirect } from 'next/navigation';
import CityPage from '@/components/city-detail/CityGuidePage';
import {
  getCanonicalCityHref,
  getPreferredRouteSlugForCity,
} from '@/data/routeRegistry';
import { hasLocalCityData } from '@/data/cityRegistry';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function CityCanonicalRedirectPage({ params }: PageProps) {
  const { city } = await params;
  if (getPreferredRouteSlugForCity(city)) {
    redirect(getCanonicalCityHref(city));
  }

  if (!hasLocalCityData(city)) notFound();

  return <CityPage params={Promise.resolve({ city })} />;
}
