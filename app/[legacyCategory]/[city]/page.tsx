import { notFound, permanentRedirect } from 'next/navigation';
import { getCanonicalCityHref } from '@/data/routeRegistry';
import { isLegacyCategorySlug } from '@/lib/legacy-route-compat';

type Params = {
  legacyCategory: string;
  city: string;
};

export default async function LegacyCategoryCityRedirectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { legacyCategory, city } = await params;
  if (!isLegacyCategorySlug(legacyCategory)) notFound();

  permanentRedirect(getCanonicalCityHref(city));
}
