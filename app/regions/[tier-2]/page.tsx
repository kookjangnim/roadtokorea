import { redirect } from 'next/navigation';
import { LEGACY_ROUTE_INDEX_HREF } from '@/lib/legacy-route-compat';

export default function LegacyRegionRedirectPage() {
  redirect(LEGACY_ROUTE_INDEX_HREF);
}
