import Link from 'next/link';
import Image from 'next/image';
import type { WPPost } from '@/lib/wp-api';
import { VALID_CITY_SLUGS } from '@/constants/cities';
import { normalizeWpMediaUrl } from '@/lib/site-config';
import { getFirstImageFromHtml, getPostDisplayTitle } from '@/lib/content-utils';

interface LatestPostsProps {
  posts: WPPost[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section
      id="journal"
      className="relative border-t border-gray-200 bg-white px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Journal
          </span>
          <h2 className="font-serif text-4xl leading-tight text-gray-900 md:text-6xl">
            Slow travel <span className="italic text-gray-500">notes</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            Fresh city reads, route fragments, and editorial notes for travelers who want to move
            through Korea with more context and less hurry.
          </p>
          <div className="mt-8 h-px w-16 bg-gray-300" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => {
            let imageUrl = '/images/placeholder.jpg';
            const featuredUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

            if (featuredUrl) {
              imageUrl = normalizeWpMediaUrl(featuredUrl);
            } else {
              const contentImage = getFirstImageFromHtml(post.content?.rendered);
              if (contentImage) {
                imageUrl = normalizeWpMediaUrl(contentImage);
              }
            }

            let categoryLabel = 'Travel';
            let tierSlug = 'tier-1';
            let citySlug = 'seoul';

            const wpTerms = post._embedded?.['wp:term'] || [];
            for (const taxonomyArray of wpTerms) {
              for (const term of taxonomyArray) {
                if (term.taxonomy === 'category') {
                  if (term.slug?.startsWith('tier-')) {
                    tierSlug = term.slug;
                  }
                  categoryLabel = term.name || categoryLabel;
                } else if (term.taxonomy === 'post_tag' && term.slug && VALID_CITY_SLUGS.includes(term.slug)) {
                  citySlug = term.slug;
                }
              }
            }

            const postUrl = `/${tierSlug}/${citySlug}/${post.slug}`;
            const postTitle = getPostDisplayTitle(post);

            return (
              <article key={post.id} className="group flex cursor-pointer flex-col">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 shadow-md">
                  <Link href={postUrl}>
                    <Image
                      src={imageUrl}
                      alt={postTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </Link>
                  <div className="absolute left-4 top-4 rounded-sm bg-white/90 px-3 py-1 shadow-sm">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-900">
                      {categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-grow flex-col px-2">
                  <time className="mb-3 block text-[10px] uppercase tracking-widest text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <Link href={postUrl}>
                    <h3 className="mb-4 line-clamp-2 font-serif text-2xl leading-tight text-gray-900 transition-colors group-hover:text-amber-800">
                      {postTitle}
                    </h3>
                  </Link>
                  <div className="mt-auto border-t border-gray-200 pt-4">
                    <Link
                      href={postUrl}
                      className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 transition-colors group-hover:text-gray-900"
                    >
                      Read Slowly
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/tier-1/cities"
            className="rounded-sm border border-gray-300 px-10 py-4 text-xs font-semibold uppercase tracking-widest text-gray-600 transition-all hover:border-gray-900 hover:text-gray-900"
          >
            Browse Slow Travel Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
