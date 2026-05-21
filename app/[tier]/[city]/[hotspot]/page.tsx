import { fetchPostBySlug } from '@/lib/wp-api';
import { isLegacyWpPostRouteMatch } from '@/lib/wp-route-context';
import { notFound, redirect } from 'next/navigation';

type LegacyHotspotParams = {
  tier: string;
  city: string;
  hotspot: string;
};

export default async function LegacyHotspotRedirectPage({
  params,
}: {
  params: Promise<LegacyHotspotParams>;
}) {
  const { tier: legacySegment, city: citySlug, hotspot: hotspotSlug } = await params;
  const post = await fetchPostBySlug(hotspotSlug);

  if (!post || !isLegacyWpPostRouteMatch(post, legacySegment, citySlug)) notFound();

  redirect(`/cities/${citySlug}/${hotspotSlug}`);
}
