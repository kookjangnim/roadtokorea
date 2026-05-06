import type { Metadata } from 'next';
import CityPage, { generateMetadata as generateSharedMetadata } from '@/app/[tier]/[city]/page';

type Params = {
  city: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolved = await params;
  return generateSharedMetadata({
    params: Promise.resolve({ tier: 'tier-4', city: resolved.city }),
  });
}

export default async function Tier4CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolved = await params;
  return CityPage({
    params: Promise.resolve({ tier: 'tier-4', city: resolved.city }),
  });
}
