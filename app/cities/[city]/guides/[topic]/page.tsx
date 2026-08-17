import CityTopicGuidePage, { generateCityTopicMetadata } from '@/components/city-guide/CityTopicGuidePage';
import { localCityRegistry } from '@/data/cityRegistry';
import { getAllCityGuideTopicParams } from '@/data/cityGuideTopics';

export const generateMetadata = generateCityTopicMetadata;

type PageProps = {
  params: Promise<{ city: string; topic: string }>;
};

export function generateStaticParams() {
  return getAllCityGuideTopicParams(Object.keys(localCityRegistry));
}

export default function CityTopicPage({ params }: PageProps) {
  return <CityTopicGuidePage params={params} />;
}
