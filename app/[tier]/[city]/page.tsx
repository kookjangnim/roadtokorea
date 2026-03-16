import { fetchCity } from '@/lib/api';
import Link from 'next/link';
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
  const { city: citySlug } = await params;
  const cityData = await fetchCity(citySlug);

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

      <PopularSearches tags={tags} />
    </main>
  );
}
