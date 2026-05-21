import { redirect } from 'next/navigation';
import { getCanonicalCityHref } from '@/data/routeRegistry';

type Params = {
  city: string;
};

export default async function TierFourCityRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  redirect(getCanonicalCityHref(city));
}
