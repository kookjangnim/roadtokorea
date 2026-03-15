import { fetchLatestPosts, fetchPostsByTier } from '@/lib/wp-api';
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
  // WordPress에서 카테고리별 포스트 가져오기
  const latestPosts = await fetchLatestPosts(6);
  
  const tier3Posts = await fetchPostsByTier('tier-3', 4);
  const tier4Posts = await fetchPostsByTier('tier-4', 4);
  
  // tier3과 4 포스트를 기사 작성일 기준 최신순으로 정렬
  const tier34Posts = [...tier3Posts, ...tier4Posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  // 추출된 포스트 제목에서 도시 이름만 파싱하여 Popular Searches 태그로 활용
  const searchTags = latestPosts.map(post => 
    post.title.rendered.replace('Travel Guide: The Hidden Charms of ', '').trim()
  ).slice(0, 8);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <HeroSlider />

      {/* Tier Preview Section */}
      <TierPreview tier34Posts={tier34Posts} />

      {/* Latest Posts Section - API 데이터 사용 */}
      <LatestPosts posts={latestPosts} />

      {/* Popular Searches Section */}
      <PopularSearches tags={searchTags} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
