import { notFound } from 'next/navigation';
import CityPage from '@/app/[tier]/[city]/page';
import { getLocalCityTier } from '@/data/routeRegistry';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function RouteFourCityPage({ params }: PageProps) {
  const { city } = await params;
  const tier = getLocalCityTier(city);
  if (!tier) notFound();

  return <CityPage params={Promise.resolve({ tier, city })} />;
}
