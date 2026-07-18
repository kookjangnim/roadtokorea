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
    .filter((link) => link.routeSlug === 'route-6')
    .map((link) => ({ city: link.citySlug }));
}

export default async function RouteSixCityPage({ params }: PageProps) {
  const { city } = await params;
  if (!isCityOnRoute('route-6', city)) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-6" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
