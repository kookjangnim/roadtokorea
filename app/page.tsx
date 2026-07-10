import Footer from '@/components/Footer';
import HomeLanding from '@/components/home/HomeLanding';
import { getAllRouteData } from '@/data/routeStopovers';

export default async function Home() {
  const routes = getAllRouteData();

  return (
    <>
      <HomeLanding routes={routes} />
      <Footer />
    </>
  );
}
