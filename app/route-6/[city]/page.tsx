import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function RouteSixCityPage({ params }: PageProps) {
  const { city } = await params;

  return (
    <RoutePageShell activeRouteSlug="route-6" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
