import { permanentRedirect } from 'next/navigation';
import { getCanonicalCityHref } from '@/data/routeRegistry';

type Params = {
  city: string;
};

export default async function TierTwoCityRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  permanentRedirect(getCanonicalCityHref(city));
}
