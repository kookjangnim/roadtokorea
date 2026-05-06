import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import { getAllRouteData } from '@/data/routeStopovers';

export default async function Home() {
  const routes = getAllRouteData();

  return (
    <main className="min-h-screen text-foreground font-sans">
      <HeroSlider routes={routes} />
      <Footer />
    </main>
  );
}
