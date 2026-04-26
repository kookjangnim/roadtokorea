import { fetchLatestPosts, fetchPostsByTier } from '@/lib/wp-api';
import HeroSlider from '@/components/HeroSlider';
import LandingOverview from '@/components/LandingOverview';
import TierPreview from '@/components/TierPreview';
import LatestPosts from '@/components/LatestPosts';
import PopularSearches from '@/components/PopularSearches';
import Footer from '@/components/Footer';
import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';

const EXCLUDED_HOME_SLUGS = new Set(['seoul', 'hello-world']);

export default async function Home() {
  const rawLatestPosts = await fetchLatestPosts(8);
  const latestPosts = rawLatestPosts
    .filter((post) => !EXCLUDED_HOME_SLUGS.has(post.slug.toLowerCase()))
    .slice(0, 6);

  const tier3Posts = await fetchPostsByTier('tier-3', 4);
  const tier4Posts = (await fetchPostsByTier('tier-4', 4)).filter(
    (post) => !EXCLUDED_HOME_SLUGS.has(post.slug.toLowerCase())
  );

  const tier34Posts = [...tier3Posts, ...tier4Posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const searchTags = latestPosts
    .map((post) => {
      const stripped = post.title.rendered
        .replace('Travel Guide: The Hidden Charms of ', '')
        .trim();
      return stripped ? stripped.charAt(0).toUpperCase() + stripped.toLowerCase().slice(1) : '';
    })
    .filter((tag) => tag && tag.toLowerCase() !== 'hello world!')
    .slice(0, 8);

  const landingStats = {
    featuredCities: Object.keys(tier1Cities).length,
    culturalStops: Object.keys(tier2Cities).length,
    hiddenGems: Object.keys(tier4Cities).length,
    latestStories: latestPosts.length,
  };

  return (
    <main className="min-h-screen text-foreground font-sans">
      <HeroSlider />
      <LandingOverview stats={landingStats} tags={searchTags} />
      <TierPreview tier34Posts={tier34Posts} />
      {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
      {searchTags.length > 0 && <PopularSearches tags={searchTags} />}
      <Footer />
    </main>
  );
}
