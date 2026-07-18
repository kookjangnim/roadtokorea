import { notFound } from 'next/navigation';
import { getRouteDataBySlug } from '@/data/routeRegistry';
import { buildRouteMetadata } from '@/lib/page-metadata';
import RoutePageClient from '@/app/routes/[from]/[to]/RoutePageClient';
import RoutePageShell from '@/components/routes/RoutePageShell';

export const metadata = buildRouteMetadata('route-6');

export default function RouteSixPage() {
  const routeData = getRouteDataBySlug('route-6');
  if (!routeData) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-6">
      <RoutePageClient routeData={routeData} fromCity={routeData.from} toCity={routeData.to} />
    </RoutePageShell>
  );
}
