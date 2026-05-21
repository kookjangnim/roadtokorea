import { notFound } from 'next/navigation';
import { getRouteDataBySlug } from '@/data/routeRegistry';
import RoutePageClient from '@/app/routes/[from]/[to]/RoutePageClient';
import RoutePageShell from '@/components/routes/RoutePageShell';

export default function RouteEightPage() {
  const routeData = getRouteDataBySlug('route-8');
  if (!routeData) notFound();

  return (
    <RoutePageShell activeRouteSlug="route-8">
      <RoutePageClient routeData={routeData} fromCity={routeData.from} toCity={routeData.to} />
    </RoutePageShell>
  );
}
