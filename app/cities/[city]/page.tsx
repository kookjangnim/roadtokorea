import CityHubPage, { generateCityHubMetadata } from '@/components/city-guide/CityHubPage';
import { localCityRegistry } from '@/data/cityRegistry';

export const generateMetadata = generateCityHubMetadata;

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(localCityRegistry).map((city) => ({ city }));
}

export default async function CityCanonicalHubPage({ params }: PageProps) {
  return <CityHubPage params={params} />;
}
