import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';
import { notFound } from 'next/navigation';
import { getRouteCityLinks, isCityOnRoute } from '@/data/routeRegistry';

export { generateMetadata } from '@/components/city-detail/CityGuidePage';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return getRouteCityLinks()
    .filter((link) => link.routeSlug === 'route-7')
    .map((link) => ({ city: link.citySlug }));
}

export default async function RouteSevenCityPage({ params }: PageProps) {
  const { city } = await params;
  if (!isCityOnRoute('route-7', city)) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-7" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
