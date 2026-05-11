import { notFound } from 'next/navigation';
import { getRouteDataBySlug } from '@/data/routeRegistry';
import RoutePageClient from '@/app/routes/[from]/[to]/RoutePageClient';

export default function RouteSixPage() {
  const routeData = getRouteDataBySlug('route-6');
  if (!routeData) notFound();

  return (
    <div className="min-h-screen bg-white">
      <RoutePageClient routeData={routeData} fromCity={routeData.from} toCity={routeData.to} />
    </div>
  );
}
