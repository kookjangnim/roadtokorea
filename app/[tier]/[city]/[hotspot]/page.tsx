import { fetchPostBySlug } from '@/lib/wp-api';
import Link from 'next/link';
import { Metadata } from 'next';
import PopularSearches from '@/components/PopularSearches';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ tier: string, city: string, hotspot: string }> }): Promise<Metadata> {
  const { tier, city, hotspot } = await params;
  const post = await fetchPostBySlug(hotspot);
  if (!post) return { title: 'Not Found' };

  const title = post.title.rendered;
  const description = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim() || `Discover ${title} with RoadToKorea`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://roadtokorea.blog/${tier}/${city}/${hotspot}`,
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

export default async function HotspotPage({ params }: { params: Promise<{ tier: string, city: string, hotspot: string }> }) {
  const { tier, city: citySlug, hotspot: hotspotSlug } = await params;
  const post = await fetchPostBySlug(hotspotSlug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-editorial">
            Post Not Found
          </h1>
          <p className="text-brand-taupe mb-8">
            The destination you're looking for doesn't exist yet.
          </p>
          <Link
            href={`/${tier}/${citySlug}`}
            className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold transition-all hover:bg-brand-accent hover:text-white"
          >
            Back to City
          </Link>
        </div>
      </div>
    );
  }

  const postInfo = {
    name: post.title.rendered,
    description: post.excerpt.rendered,
    content: post.content.rendered,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postInfo.name,
    "description": postInfo.description.replace(/<[^>]+>/g, '').trim(),
    "url": `https://roadtokorea.blog/${tier}/${citySlug}/${hotspotSlug}`
  };

  const tags = ["Seoul", "Busan", "Jeju", "Gangneung", "Sokcho"];

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Header / Intro */}
      <div className="pt-32 pb-16 px-4 md:px-8 border-b border-brand-secondary/30 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href={`/${tier}/${citySlug}`} className="text-brand-accent text-xs tracking-[0.2em] uppercase mb-6 inline-flex items-center hover:text-foreground transition-colors">
            <span className="mr-2">←</span> Back to {citySlug.charAt(0).toUpperCase() + citySlug.slice(1)}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial italic text-foreground mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: postInfo.name }} />
        </div>
      </div>

      <article className="city-article pt-16 pb-32 px-4 max-w-4xl mx-auto">
        {postInfo.content ? (
          <div dangerouslySetInnerHTML={{ __html: cleanContent(postInfo.content) }} />
        ) : (
          <p className="text-brand-taupe italic text-center py-20">
            Content is currently being generated. Check back soon!
          </p>
        )}
      </article>

      <PopularSearches tags={tags} />
    </main>
  );
}
