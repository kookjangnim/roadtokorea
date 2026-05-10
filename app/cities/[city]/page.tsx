import { notFound, redirect } from 'next/navigation';
import CityPage from '@/app/[tier]/[city]/page';
import {
  getCanonicalCityHref,
  getLocalCityTier,
  getPreferredRouteSlugForCity,
} from '@/data/routeRegistry';

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

  const tier = getLocalCityTier(city);
  if (!tier) notFound();

  return <CityPage params={Promise.resolve({ tier, city })} />;
}
