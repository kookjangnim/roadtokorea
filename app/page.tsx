import Footer from '@/components/Footer';
import HomeLanding from '@/components/home/HomeLanding';
import { getAllRouteData } from '@/data/routeStopovers';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export const metadata = {
  alternates: {
    canonical: siteUrl,
  },
};

export default async function Home() {
  const routes = getAllRouteData();

  return (
    <>
      <HomeLanding routes={routes} />
      <Footer />
    </>
  );
}
