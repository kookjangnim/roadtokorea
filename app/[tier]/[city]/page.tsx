import { notFound, redirect } from 'next/navigation';
import { getCanonicalCityHref } from '@/data/routeRegistry';
import { isLegacyCategorySlug } from '@/lib/legacy-route-compat';

type Params = {
  tier: string;
  city: string;
};

export default async function LegacyTierCityRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tier: legacySegment, city } = await params;
  if (!isLegacyCategorySlug(legacySegment)) notFound();

  redirect(getCanonicalCityHref(city));
}
