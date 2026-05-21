import { redirect } from 'next/navigation';
import { LEGACY_ROUTE_INDEX_HREF } from '@/lib/legacy-route-compat';

export default function Tier2CitiesRedirectPage() {
  redirect(LEGACY_ROUTE_INDEX_HREF);
}
