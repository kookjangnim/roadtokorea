import Link from 'next/link';
import Image from 'next/image';
import type { WPPost } from '@/lib/wp-api';

interface LatestPostsProps {
  posts: WPPost[];
}

/**
 * Latest Posts 섹션 - WordPress 데이터 사용
 */
export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-32 px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-accent tracking-[0.3em] text-xs uppercase mb-4 block">Journal</span>
          <h2 className="text-4xl md:text-6xl text-foreground font-editorial">
            Travel <span className="italic text-brand-taupe">Notes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => {
            // 1. 이미지 추출: featured_media 대신 content 내부의 첫 번째 img 태그 추출. 없으면 slug 기반 범용 이미지
            let imageUrl = `/images/cities/${post.slug.toLowerCase()}.jpg`;
            // 원주 도서관 이미지 표시 방지: 원주가 아닐 때만 본문에서 이미지 추출
            if (post.slug.toLowerCase() !== 'wonju' && post.content && post.content.rendered) {
              const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch && imgMatch[1]) {
                imageUrl = imgMatch[1].replace(
                  /https?:\/\/roadtokorea\.blog\/wp-content/g,
                  'https://api.roadtokorea.blog/wp-content'
                );
              }
            }

            // 2. 카테고리(Tier) 및 슬러그 추출
            let categoryLabel = 'Travel';
            let tierSlug = 'tier-1'; // 기본값

            const wpTerms = post._embedded?.['wp:term'] || [];
            for (const taxonomyArray of wpTerms) {
              const cat = taxonomyArray.find((t: any) => t.taxonomy === 'category');
              if (cat) {
                if (cat.slug && cat.slug.startsWith('tier-')) {
                  tierSlug = cat.slug;
                }
                categoryLabel = cat.name || categoryLabel;
              }
            }

            // URL 라우팅: /[tier]/[city_slug]
            const postUrl = `/${tierSlug}/${post.slug}`;

            return (
              <article
                key={post.id}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-brand-secondary/50">
                  <Link href={postUrl}>
                    <Image
                      src={imageUrl}
                      alt={post.title.rendered}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </Link>
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full">
                    <span className="text-white/90 text-[10px] tracking-widest uppercase">{categoryLabel}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <time className="text-brand-sage text-xs tracking-widest uppercase mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                  <Link href={postUrl}>
                    <h3 className="text-2xl font-editorial text-foreground mb-4 group-hover:text-brand-accent transition-colors leading-tight line-clamp-2">
                      {post.slug.charAt(0).toUpperCase() + post.slug.toLowerCase().slice(1)}
                    </h3>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-brand-secondary/50">
                    <Link href={postUrl} className="text-brand-taupe text-xs uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/blog"
            className="px-12 py-4 border border-brand-secondary hover:border-brand-accent text-foreground hover:text-brand-accent transition-colors tracking-widest uppercase text-xs"
          >
            View All Journal Entries
          </Link>
        </div>
      </div>
    </section>
  );
}
