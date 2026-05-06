import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRouteData } from '@/data/routeStopovers';
import RoutePageClient from './RoutePageClient';

interface PageProps {
  params: Promise<{
    from: string;
    to: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { from, to } = await params;
  const routeData = getRouteData(from, to);

  if (!routeData) {
    return {
      title: 'Route Not Found',
    };
  }

  return {
    title: `${routeData.routeLabel} | RoadToKorea`,
    description: `${routeData.headline} Compare transport modes, understand the stopover logic, and decide how the route should unfold.`,
  };
}

export default async function RoutePage({ params }: PageProps) {
  const { from, to } = await params;
  const routeData = getRouteData(from, to);

  if (!routeData) {
    notFound();
  }

  const fromCity = routeData.from;
  const toCity = routeData.to;

  return (
    <div className="min-h-screen bg-white">
      <RoutePageClient
        routeData={routeData}
        fromCity={fromCity}
        toCity={toCity}
      />
    </div>
  );
}
