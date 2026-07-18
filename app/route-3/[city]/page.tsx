import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';
import { getRouteCityLinks } from '@/data/routeRegistry';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return getRouteCityLinks()
    .filter((link) => link.routeSlug === 'route-3')
    .map((link) => ({ city: link.citySlug }));
}

export default async function RouteThreeCityPage({ params }: PageProps) {
  const { city } = await params;

  return (
    <RoutePageShell activeRouteSlug="route-3" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
