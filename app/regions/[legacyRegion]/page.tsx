import { permanentRedirect } from 'next/navigation';
import { LEGACY_ROUTE_INDEX_HREF } from '@/lib/legacy-route-compat';

export default function LegacyRegionRedirectPage() {
  permanentRedirect(LEGACY_ROUTE_INDEX_HREF);
}
