import { fetchCity } from '@/lib/api';
import { fetchPostsByCityTag } from '@/lib/wp-api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PopularSearches from '@/components/PopularSearches';

export async function generateMetadata({ params }: { params: Promise<{ tier: string, city: string }> }): Promise<Metadata> {
  const { tier, city } = await params;
  const cityData = await fetchCity(city);
  if (!cityData) return { title: 'Not Found' };

  const title = cityData.title.rendered;
  const description = cityData.excerpt.rendered.replace(/<[^>]+>/g, '').trim() || `Discover ${title} with RoadToKorea`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://roadtokorea.blog/${tier}/${city}`,
      type: 'article',
    }
  };
}

/** 이모지 제거 + 이미지 URL 변환 */
function cleanContent(html: string): string {
  // 1) 이모지 제거 (Unicode Emoji ranges)
  let cleaned = html.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{200D}\u{FE0F}]/gu, '');
  // 2) 이미지 URL 도메인 변환
  cleaned = cleaned.replace(
    /https?:\/\/roadtokorea\.blog\/wp-content/g,
    'https://api.roadtokorea.blog/wp-content'
  );
  return cleaned;
}

export default async function CityPage({ params }: { params: Promise<{ tier: string, city: string }> }) {
  const { tier, city: citySlug } = await params;
  const cityData = await fetchCity(citySlug);
  const dynamicPosts = await fetchPostsByCityTag(citySlug, 8);

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-editorial">
            City Not Found
          </h1>
          <p className="text-brand-taupe mb-8">
            The city you&apos;re looking for doesn&apos;t exist yet.
          </p>
          <Link
            href="/"
            className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold transition-all hover:bg-brand-accent hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cityInfo = {
    name: cityData.title.rendered,
    description: cityData.excerpt.rendered,
    content: cityData.content.rendered,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": cityInfo.name,
    "description": cityInfo.description.replace(/<[^>]+>/g, '').trim(),
    "url": `https://roadtokorea.blog/${citySlug}`
  };

  // Optional: Extract some tags for popular searches related to the province if needed
  const tags = ["Seoul", "Busan", "Jeju", "Gangneung", "Sokcho"];

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="city-article pt-10 px-4 max-w-5xl mx-auto">
        {cityInfo.content ? (
          <div dangerouslySetInnerHTML={{ __html: cleanContent(cityInfo.content) }} />
        ) : (
          <p className="text-brand-taupe italic text-center py-20">
            Content is currently being generated. Check back soon!
          </p>
        )}
      </article>

      {/* Discover More (Dynamic Related Posts) */}
      {dynamicPosts.length > 0 && (
        <section className="py-32 px-4 md:px-8 border-t border-brand-secondary relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-brand-accent tracking-[0.3em] text-xs uppercase mb-4 block">Journal</span>
              <h2 className="text-4xl md:text-5xl font-editorial italic text-foreground mb-4">
                Discover More in <span className="not-italic text-brand-taupe">{cityInfo.name}</span>
              </h2>
              <p className="text-brand-sage text-lg font-light max-w-2xl">
                Read our latest travel notes and neighborhood guides for {cityInfo.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dynamicPosts.map((post: any, index: number) => {
                // Image fallback logic
                let imageUrl = `/images/cities/${post.slug.toLowerCase()}.jpg`;
                if (post.slug.toLowerCase() !== 'wonju' && post.content?.rendered) {
                  const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
                  if (imgMatch && imgMatch[1]) {
                    imageUrl = imgMatch[1].replace(
                      /https?:\/\/roadtokorea\.blog\/wp-content/g,
                      'https://api.roadtokorea.blog/wp-content'
                    );
                  }
                }

                let categoryLabel = 'Travel';
                let tierSlug = tier; // Default to current tier
                const wpTerms = post._embedded?.['wp:term'] || [];
                for (const taxonomyArray of wpTerms) {
                  const cat = taxonomyArray.find((t: any) => t.taxonomy === 'category');
                  if (cat) {
                    if (cat.slug && cat.slug.startsWith('tier-')) tierSlug = cat.slug;
                    categoryLabel = cat.name || categoryLabel;
                  }
                }
                const postUrl = `/${tierSlug}/${citySlug}/${post.slug}`;

                return (
                  <article key={post.id} className="group cursor-pointer flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-brand-secondary/50">
                      <Link href={postUrl}>
                        <Image
                          src={imageUrl}
                          alt={post.title.rendered}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                          loading="lazy"
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
            
            <div className="mt-16 text-right">
              <Link href="/blog" className="inline-block text-brand-taupe hover:text-foreground transition-colors border-b border-brand-taupe/30 hover:border-foreground pb-1 uppercase tracking-widest text-xs">
                View All Journal Entries
              </Link>
            </div>
          </div>
        </section>
      )}

      <PopularSearches tags={tags} />
    </main>
  );
}
