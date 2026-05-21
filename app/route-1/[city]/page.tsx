import CityPage from '@/components/city-detail/CityGuidePage';
import RoutePageShell from '@/components/routes/RoutePageShell';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function RouteOneCityPage({ params }: PageProps) {
  const { city } = await params;

  return (
    <RoutePageShell activeRouteSlug="route-1" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
