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
  // WordPress에서 카테고리별 포스트 가져오기, 서울 제외
  const rawLatestPosts = await fetchLatestPosts(8);
  const latestPosts = rawLatestPosts.filter(post => post.slug.toLowerCase() !== 'seoul').slice(0, 6);
  
  const tier3Posts = await fetchPostsByTier('tier-3', 4);
  let tier4Posts = await fetchPostsByTier('tier-4', 4);
  
  // 강제로 tier4 포스트에서 seoul 제거
  tier4Posts = tier4Posts.filter(post => post.slug.toLowerCase() !== 'seoul');
  
  // tier3과 4 포스트를 기사 작성일 기준 최신순으로 정렬
  const tier34Posts = [...tier3Posts, ...tier4Posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  // 추출된 포스트 제목에서 도시 이름만 파싱하여 Popular Searches 태그로 활용
  const searchTags = latestPosts.map(post => {
    let title = post.title.rendered;
    title = title.replace('Travel Guide: The Hidden Charms of ', '').trim();
    return title.charAt(0).toUpperCase() + title.toLowerCase().slice(1);
  }).slice(0, 8);

  return (
    <main className="min-h-screen text-foreground font-sans">
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
