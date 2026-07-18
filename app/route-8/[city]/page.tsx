import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';
import { getRouteCityLinks } from '@/data/routeRegistry';

export { generateMetadata } from '@/components/city-detail/CityGuidePage';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return getRouteCityLinks()
    .filter((link) => link.routeSlug === 'route-8')
    .map((link) => ({ city: link.citySlug }));
}

export default async function RouteEightCityPage({ params }: PageProps) {
  const { city } = await params;

  return (
    <RoutePageShell activeRouteSlug="route-8" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
