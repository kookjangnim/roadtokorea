import { fetchCity } from '@/lib/api';
import Link from 'next/link';
import { Metadata } from 'next';

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            City Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The city you&apos;re looking for doesn&apos;t exist yet.
          </p>
          <Link
            href="/"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
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

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* City Hero — 간결한 배너 */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {cityInfo.name}
          </h1>
          {cityInfo.description && (
            <div
              className="text-lg text-gray-300 max-w-xl mx-auto"
              dangerouslySetInnerHTML={{ __html: cleanContent(cityInfo.description) }}
            />
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="city-article">
            {cityInfo.content ? (
              <div dangerouslySetInnerHTML={{ __html: cleanContent(cityInfo.content) }} />
            ) : (
              <p className="text-gray-400 italic text-center py-10">
                Content is currently being generated. Check back soon!
              </p>
            )}
          </article>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 text-center border-t border-gray-200">
        <Link
          href="/"
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
