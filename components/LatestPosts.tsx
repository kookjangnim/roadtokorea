import Link from 'next/link';
import Image from 'next/image';
import type { WPPost } from '@/lib/wp-api';
import { VALID_CITY_SLUGS } from '@/constants/cities';

interface LatestPostsProps {
  posts: WPPost[];
}

/**
 * Latest Posts 섹션 - WordPress 데이터 사용
 */
export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-gray-500 tracking-[0.3em] text-xs uppercase mb-4 block font-semibold">Journal</span>
          <h2 className="text-4xl md:text-6xl text-gray-900 font-serif leading-tight">
            Travel <span className="italic text-gray-500">Notes</span>
          </h2>
          <div className="w-16 h-[1px] bg-gray-300 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => {
            // 1. 이미지: featured_media 우선(수동 사진), 없으면 content 첫 img
            let imageUrl = `/images/cities/${post.slug.toLowerCase()}.jpg`;
            const featuredUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            if (featuredUrl) {
              imageUrl = featuredUrl.replace(
                /https?:\/\/roadtokorea\.blog\/wp-content/g,
                'https://api.roadtokorea.blog/wp-content'
              );
            } else if (post.content?.rendered) {
              const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch?.[1]) {
                imageUrl = imgMatch[1].replace(
                  /https?:\/\/roadtokorea\.blog\/wp-content/g,
                  'https://api.roadtokorea.blog/wp-content'
                );
              }
            }

            // 2. 카테고리(Tier) 및 도시 슬러그 추출
            let categoryLabel = 'Travel';
            let tierSlug = 'tier-1'; // 기본값
            let citySlug = 'seoul'; // 기본값

            const wpTerms = post._embedded?.['wp:term'] || [];
            for (const taxonomyArray of wpTerms) {
              for (const term of taxonomyArray) {
                if (term.taxonomy === 'category') {
                  if (term.slug && term.slug.startsWith('tier-')) {
                    tierSlug = term.slug;
                  }
                  categoryLabel = term.name || categoryLabel;
                } else if (term.taxonomy === 'post_tag' && term.slug) {
                  // 유효한 도시 슬러그인지 확인하여 citySlug로 지정 (무작위 태그 방지)
                  if (VALID_CITY_SLUGS.includes(term.slug)) {
                    citySlug = term.slug;
                  }
                }
              }
            }

            // URL 라우팅: /[tier]/[city]/[hotspot_slug]
            const postUrl = `/${tierSlug}/${citySlug}/${post.slug}`;

            return (
              <article
                key={post.id}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 shadow-md bg-gray-100">
                  <Link href={postUrl}>
                    <Image
                      src={imageUrl}
                      alt={post.title.rendered}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </Link>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm shadow-sm">
                    <span className="text-gray-900 text-[10px] tracking-widest uppercase font-semibold">{categoryLabel}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow px-2">
                  <time className="text-gray-500 text-[10px] tracking-widest uppercase mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <Link href={postUrl}>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-amber-800 transition-colors leading-tight line-clamp-2">
                      {post.title.rendered}
                    </h3>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <Link href={postUrl} className="text-gray-500 text-xs uppercase tracking-[0.2em] group-hover:text-gray-900 transition-colors font-medium">
                      Read Article
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
            className="px-10 py-4 border border-gray-300 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-all uppercase tracking-widest text-xs font-semibold rounded-sm"
          >
            Explore All Notes
          </Link>
        </div>
      </div>
    </section>
  );
}
