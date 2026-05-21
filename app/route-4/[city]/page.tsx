import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function RouteFourCityPage({ params }: PageProps) {
  const { city } = await params;

  return (
    <RoutePageShell activeRouteSlug="route-4" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
