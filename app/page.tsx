import { fetchLatestPosts } from '@/lib/wp-api';
import HeroSlider from '@/components/HeroSlider';
import TierPreview from '@/components/TierPreview';
import LatestPosts from '@/components/LatestPosts';
import PopularSearches from '@/components/PopularSearches';
import Footer from '@/components/Footer';

/**
 * 랜딩페이지 - Server Component (SEO 최적화)
 * WordPress API 연동 완료
 */
export default async function Home() {
  // WordPress에서 최신 포스트 가져오기
  const latestPosts = await fetchLatestPosts(4);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <HeroSlider />

      {/* Tier Preview Section */}
      <TierPreview />

      {/* Latest Posts Section - API 데이터 사용 */}
      <LatestPosts posts={latestPosts} />

      {/* Popular Searches Section */}
      <PopularSearches />

      {/* Footer */}
      <Footer />
    </main>
  );
}
