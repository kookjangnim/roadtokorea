import { notFound } from 'next/navigation';
import { getRouteDataBySlug } from '@/data/routeRegistry';
import RoutePageClient from '@/app/routes/[from]/[to]/RoutePageClient';

export default function RouteThreePage() {
  const routeData = getRouteDataBySlug('route-3');
  if (!routeData) notFound();

  return (
    <div className="min-h-screen bg-white">
      <RoutePageClient routeData={routeData} fromCity={routeData.from} toCity={routeData.to} />
    </div>
  );
}
