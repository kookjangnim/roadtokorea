import { notFound } from 'next/navigation';
import { getRouteDataBySlug } from '@/data/routeRegistry';
import RoutePageClient from '@/app/routes/[from]/[to]/RoutePageClient';
import RoutePageShell from '@/components/routes/RoutePageShell';

export default function RouteFivePage() {
  const routeData = getRouteDataBySlug('route-5');
  if (!routeData) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-5">
      <RoutePageClient routeData={routeData} fromCity={routeData.from} toCity={routeData.to} />
    </RoutePageShell>
  );
}
