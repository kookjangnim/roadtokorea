import { fetchPostBySlug } from '@/lib/wp-api';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
  { params }: { params: Promise<{ tier: string; city: string; hotspot: string }> }
): Promise<Metadata> {
  const { tier, city, hotspot } = await params;
  const post = await fetchPostBySlug(hotspot);
  if (!post) return { title: 'Not Found' };

  const title = post.title.rendered;
  const description = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim()
    || `Discover ${title} with RoadToKorea`;
  const heroMatch = post.content?.rendered?.match(/<img[^>]+src="([^">]+)"/);
  const heroImage = heroMatch ? heroMatch[1] : '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://roadtokorea.blog/${tier}/${city}/${hotspot}`,
      type: 'article',
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: title }] : [],
    },
  };
}

function cleanContent(html: string): string {
  // Remove emoji
  let cleaned = html.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{200D}\u{FE0F}]/gu, '');
  // Fix WP image domain
  cleaned = cleaned.replace(
    /https?:\/\/roadtokorea\.blog\/wp-content/g,
    'https://api.roadtokorea.blog/wp-content'
  );
  return cleaned;
}

function getHeroImage(post: { _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string }> }; content?: { rendered: string } }): string | null {
  // 1순위: WP featured image (manual_images로 업로드한 좋은 사진)
  const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featured) return featured;

  // 2순위: 콘텐츠 내 hero-banner 이미지
  const html = post.content?.rendered || '';
  const heroMatch = html.match(/class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"/i);
  if (heroMatch) return heroMatch[1];

  // 3순위: 콘텐츠 내 첫 번째 이미지
  const firstMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return firstMatch ? firstMatch[1] : null;
}


export default async function HotspotPage(
  { params }: { params: Promise<{ tier: string; city: string; hotspot: string }> }
) {
  const { tier, city: citySlug, hotspot: hotspotSlug } = await params;
  const post = await fetchPostBySlug(hotspotSlug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <div className="text-center max-w-md px-6">
          <span className="text-gray-400 text-xs tracking-[0.4em] uppercase mb-6 block">404</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
            Location <span className="not-italic font-sans font-light text-gray-500">Not Found</span>
          </h1>
          <p className="text-gray-500 font-light leading-relaxed mb-12">
            This destination doesn&apos;t exist yet or is currently being updated.
          </p>
          <Link
            href={`/${tier}/${citySlug}`}
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            ← Return to {citySlug.charAt(0).toUpperCase() + citySlug.slice(1)}
          </Link>
        </div>
      </div>
    );
  }

  const rawContent = post.content?.rendered || '';
  const heroImageUrl = getHeroImage(post);
  const fixedHeroUrl = heroImageUrl
    ? heroImageUrl.replace(/https?:\/\/roadtokorea\.blog\/wp-content/g, 'https://api.roadtokorea.blog/wp-content')
    : null;
  // hero-banner 이후 첫 번째 실제 문단에서 excerpt 추출
  const afterHero = rawContent.replace(/[\s\S]*?class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<\/figure>/i, '');
  const pMatch = afterHero.match(/<p[^>]*>([^<]{40,})<\/p>/i);
  const excerpt = pMatch
    ? pMatch[1]
        .replace(/&[a-z#0-9]+;/gi, (e: string) => {
          const map: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&#8217;': "'", '&#8216;': "'", '&#8220;': '"', '&#8221;': '"', '&nbsp;': ' ' };
          return map[e] ?? '';
        })
        .trim()
        .slice(0, 200)
    : '';
  const title = post.title?.rendered || hotspotSlug;
  const cityLabel = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    url: `https://roadtokorea.blog/${tier}/${citySlug}/${hotspotSlug}`,
    ...(fixedHeroUrl ? { image: fixedHeroUrl } : {}),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── 1. Cinematic Hero ─────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden flex items-end justify-start bg-gray-900">
        {fixedHeroUrl ? (
          <Image
            src={fixedHeroUrl}
            alt={title}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600" />
        )}

        {/* Deep gradient overlay — dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            href={`/${tier}/${citySlug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[11px] uppercase tracking-[0.3em] transition-colors"
          >
            <span>←</span>
            <span>{cityLabel}</span>
          </Link>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-5xl">
          <span className="inline-block text-white/60 uppercase tracking-[0.4em] text-[11px] font-semibold mb-5">
            {cityLabel} · Hotspot Guide
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-none font-serif italic text-white mb-6 drop-shadow-xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-10 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-10 bg-white/30" />
        </div>
      </section>

      {/* ── 2. Article Content ───────────────────────────────────── */}
      <article className="max-w-4xl mx-auto pt-24 pb-32 px-4 md:px-8">
        {rawContent ? (
          <div className="city-article" dangerouslySetInnerHTML={{ __html: cleanContent(rawContent) }} />
        ) : (
          <p className="text-gray-400 font-serif italic text-center py-32 text-2xl">
            Content is currently being drafted. Check back soon.
          </p>
        )}
      </article>

      {/* ── 3. Footer Navigation ─────────────────────────────────── */}
      <section className="py-20 border-t border-gray-100 bg-[#fbfbfb] text-center">
        <p className="text-gray-400 tracking-[0.3em] text-xs uppercase mb-8">Continue Exploring</p>
        <Link
          href={`/${tier}/${citySlug}`}
          className="inline-flex items-center justify-center bg-gray-900 text-white px-12 py-5 rounded-full hover:bg-gray-700 transition-colors tracking-widest uppercase text-xs font-semibold shadow-xl hover:-translate-y-1 transform duration-300"
        >
          ← More from {cityLabel}
        </Link>
      </section>
    </main>
  );
}
