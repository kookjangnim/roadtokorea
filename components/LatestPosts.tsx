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
    <section className="py-32 px-4 md:px-8 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-accent tracking-[0.3em] text-xs uppercase mb-4 block">Journal</span>
          <h2 className="text-4xl md:text-6xl text-foreground font-editorial">
            Travel <span className="italic text-brand-taupe">Notes</span>
          </h2>
        </div>

        {/* Latest Posts Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => {
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
            const imageUrl = featuredMedia?.source_url || '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg';
            const category = post.categories[0]?.name || 'Travel';

            return (
              <article
                key={post.id}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-brand-secondary/50">
                  <Link href={`/blog/${post.id}`}>
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
                    <span className="text-white/90 text-[10px] tracking-widest uppercase">{category}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <time className="text-brand-sage text-xs tracking-widest uppercase mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-2xl font-editorial text-foreground mb-4 group-hover:text-brand-accent transition-colors leading-tight line-clamp-2">
                      {post.title.rendered}
                    </h3>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-brand-secondary/50">
                    <span className="text-brand-taupe text-xs uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">
                      Read Article →
                    </span>
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
