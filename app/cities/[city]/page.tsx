import { notFound, redirect } from 'next/navigation';
import CityPage from '@/components/city-detail/CityGuidePage';
import {
  getCanonicalCityHref,
  getPreferredRouteSlugForCity,
} from '@/data/routeRegistry';
import { hasLocalCityData } from '@/data/cityRegistry';
import { localCityRegistry } from '@/data/cityRegistry';

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
    redirect(getCanonicalCityHref(city));
  }

  if (!hasLocalCityData(city)) notFound();

  return <CityPage params={Promise.resolve({ city })} />;
}
