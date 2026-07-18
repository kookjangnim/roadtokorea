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
    .filter((link) => link.routeSlug === 'route-1')
    .map((link) => ({ city: link.citySlug }));
}

export default async function RouteOneCityPage({ params }: PageProps) {
  const { city } = await params;
  if (!isCityOnRoute('route-1', city)) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-1" activeCitySlug={city}>
      <CityPage params={Promise.resolve({ city })} />
    </RoutePageShell>
  );
}
