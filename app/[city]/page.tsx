import { fetchCity } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
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
      url: `https://roadtokorea.blog/${city}`,
      type: 'article',
    }
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const cityData = await fetchCity(citySlug);

  // 도시가 없는 경우
  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            City Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The city you're looking for doesn't exist yet.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // 데이터 파싱
  const cityInfo = {
    name: cityData.title.rendered,
    tier: cityData.categories.some((c: any) => c === 11 || c?.id === 11) ? 4 :
      (cityData.categories.some((c: any) => c === 10 || c?.id === 10) ? 3 :
        (cityData.categories.some((c: any) => c === 9 || c?.id === 9) ? 2 : 1)),
    description: cityData.excerpt.rendered,
    content: cityData.content.rendered,
  };

  // 티어별 색상 (로라의 매뉴얼에 따라 Tier 4는 Forest Green / Natural Sand 테마 적용)
  const tierColors = {
    1: 'from-indigo-900 to-indigo-800',
    2: 'from-amber-900 to-amber-800',
    3: 'from-emerald-900 to-emerald-800',
    4: 'from-green-900 to-stone-800'
  };

  const tierBgColors = {
    1: 'bg-indigo-950',
    2: 'bg-amber-950',
    3: 'bg-emerald-950',
    4: 'bg-stone-900' // Natural Sand 컨셉의 배경
  }

  const tierColor = tierColors[cityInfo.tier as keyof typeof tierColors] || tierColors[1];
  const tierBgColor = tierBgColors[cityInfo.tier as keyof typeof tierBgColors] || tierBgColors[1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": cityInfo.name,
    "description": cityInfo.description.replace(/<[^>]+>/g, '').trim(),
    "url": `https://roadtokorea.blog/${citySlug}`
  };

  return (
    <main className={`min-h-screen ${tierBgColor}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* City Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-4">
            <span className={`px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${tierColor}`}>
              Tier {cityInfo.tier}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {cityInfo.name}
          </h1>
          <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {cityInfo.description ? (
              <div dangerouslySetInnerHTML={{ __html: cityInfo.description }} />
            ) : (
              <p>Discover the hidden gems and local culture</p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Section (WP Rendered Content) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 shadow-2xl border border-gray-700">
            <article className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-a:text-orange-400 hover:prose-a:text-orange-300
              prose-img:rounded-xl prose-img:w-full prose-img:shadow-lg
              prose-strong:text-gray-100 prose-ul:list-disc prose-ol:list-decimal">
              {cityInfo.content ? (
                <div dangerouslySetInnerHTML={{ __html: cityInfo.content }} />
              ) : (
                <p className="text-gray-400 italic text-center py-10">
                  Content is currently being generated. Check back soon!
                </p>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 text-center">
        <Link
          href="/"
          className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border border-white/20"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
