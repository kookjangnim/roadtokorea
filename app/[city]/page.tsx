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

  // Mock 상세 데이터 (나중에 워드프레스 메타데이터나 리치 컨텐츠로 대체)
  const mockCityDetails: Record<string, any> = {
    seoul: {
      attractions: [
        { name: 'Gyeongbokgung Palace', description: 'The main royal palace of the Joseon dynasty.', image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?q=80&w=800&auto=format&fit=crop' },
        { name: 'N Seoul Tower', description: 'Iconic observation tower on Namsan Mountain.', image: 'https://images.unsplash.com/photo-1598509871587-8df16b7ff013?q=80&w=800&auto=format&fit=crop' },
        { name: 'Myeongdong', description: 'Bustling shopping district with vibrant street food.', image: 'https://images.unsplash.com/photo-1588661858100-3622cf3fe3da?q=80&w=800&auto=format&fit=crop' }
      ],
      accommodations: [
        { name: 'Signiel Seoul', rating: 5, price: 500, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop' },
        { name: 'RYSE, Autograph Collection', rating: 4, price: 200, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1551882547-ff40c0d13c05?w=800&auto=format&fit=crop' },
        { name: 'Shilla Stay', rating: 4, price: 120, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&auto=format&fit=crop' }
      ],
      transportation: [
        { type: 'train', name: 'KTX from Busan', duration: '2.5 Hours', cost: 50, bookingUrl: '#', bookingText: 'Book KTX' },
        { type: 'flight', name: 'Flight from Jeju', duration: '1 Hour', cost: 40, bookingUrl: '#', bookingText: 'Find Flights' }
      ]
    },
    busan: {
      attractions: [
        { name: 'Haeundae Beach', description: 'Korea\'s most famous and popular beach.', image: 'https://images.unsplash.com/photo-1613398906666-832f05353526?w=800&auto=format&fit=crop' },
        { name: 'Gamcheon Culture Village', description: 'Vibrant hillside village with colorful houses.', image: 'https://images.unsplash.com/photo-1629853372297-cddb922a9009?w=800&auto=format&fit=crop' }
      ],
      accommodations: [
        { name: 'Paradise Hotel Busan', rating: 5, price: 300, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop' }
      ],
      transportation: [
        { type: 'train', name: 'KTX from Seoul', duration: '2.5 Hours', cost: 50, bookingUrl: '#', bookingText: 'Book KTX' }
      ]
    },
    jeju: {
      attractions: [
        { name: 'Hallasan Mountain', description: 'The highest mountain in South Korea, a dormant volcano.', image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=800&auto=format&fit=crop' },
        { name: 'Seongsan Ilchulbong', description: 'Stunning volcanic tuff cone, perfect for sunrise views.', image: 'https://images.unsplash.com/photo-1623927649525-45fa8a2abefa?w=800&auto=format&fit=crop' }
      ],
      accommodations: [
        { name: 'The Shilla Jeju', rating: 5, price: 400, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?w=800&auto=format&fit=crop' }
      ],
      transportation: [
        { type: 'flight', name: 'Flight from Seoul', duration: '1 Hour', cost: 40, bookingUrl: '#', bookingText: 'Find Flights' }
      ]
    },
    gyeongju: {
      attractions: [
        { name: 'Bulguksa Temple', description: 'A masterpiece of Buddhist art from the Silla Kingdom.', image: 'https://images.unsplash.com/photo-1583095033481-229202ed7b2d?w=800&auto=format&fit=crop' },
        { name: 'Donggung Palace', description: 'Beautiful historical site, spectacular at night.', image: 'https://images.unsplash.com/photo-1588661858100-3622cf3fe3da?w=800&auto=format&fit=crop' }
      ],
      accommodations: [
        { name: 'Hilton Gyeongju', rating: 5, price: 250, bookingUrl: '#', image: 'https://images.unsplash.com/photo-1551882547-ff40c0d13c05?w=800&auto=format&fit=crop' }
      ],
      transportation: [
        { type: 'train', name: 'KTX to Singyeongju', duration: '2 Hours from Seoul', cost: 45, bookingUrl: '#', bookingText: 'Book KTX' }
      ]
    }
  };

  const details = mockCityDetails[citySlug.toLowerCase()] || {
    attractions: [],
    accommodations: [],
    transportation: []
  };

  // Placeholder 데이터 및 모의 데이터 결합 (실제 WordPress 데이터와 병합)
  const cityInfo = {
    name: cityData.title.rendered,
    tier: cityData.meta?.tier_level || 1,
    description: cityData.excerpt.rendered,
    history: cityData.content.rendered,
    attractions: (cityData.meta as any)?.attractions || details.attractions,
    accommodations: (cityData.meta as any)?.accommodations || details.accommodations,
    transportation: (cityData.meta as any)?.transportation || details.transportation
  };

  // 티어별 색상
  const tierColors = {
    1: 'from-indigo-900 to-indigo-800',
    2: 'from-amber-900 to-amber-800',
    3: 'from-emerald-900 to-emerald-800',
    4: 'from-emerald-900 to-emerald-800'
  };

  const tierColor = tierColors[cityInfo.tier as keyof typeof tierColors];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": cityInfo.name,
    "description": cityInfo.description.replace(/<[^>]+>/g, '').trim(),
    "url": `https://roadtokorea.blog/${citySlug}`
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* City Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-4">
            <span className={`px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${tierColor}`}>
              Tier {cityInfo.tier}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {cityInfo.name}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the hidden gems and local culture
          </p>

          {/* CTA Button */}
          <Link
            href="#attractions"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏛️</span> History & Heritage
          </h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
              {cityInfo.history ? (
                <div dangerouslySetInnerHTML={{ __html: cityInfo.history }} />
              ) : (
                <p className="text-gray-400 italic">
                  Historical information coming soon...
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span> Top Attractions
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Discover the most popular tourist spots and hidden gems
          </p>

          {cityInfo.attractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityInfo.attractions.map((attraction: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏗️</div>
              <p className="text-xl text-gray-400">
                Attractions information coming soon...
              </p>
              <p className="text-gray-500 mt-4">
                Check back later for detailed attraction information!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏨</span> Where to Stay
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Find the perfect accommodation for your stay
          </p>

          {cityInfo.accommodations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityInfo.accommodations.map((hotel: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-orange-500 mb-2">
                      ${hotel.price}/night
                    </p>
                    <a
                      href={hotel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-center transition-all hover:scale-105"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏨️</div>
              <p className="text-xl text-gray-400">
                Accommodation information coming soon...
              </p>
              <p className="text-gray-500 mt-4">
                We'll add hotel and booking information soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🚆</span> Getting There
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Transportation options from Seoul
          </p>

          {cityInfo.transportation.length > 0 ? (
            <div className="space-y-6">
              {cityInfo.transportation.map((transport: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">
                      {transport.type === 'train' && '🚄'}
                      {transport.type === 'bus' && '🚌'}
                      {transport.type === 'flight' && '✈️'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {transport.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-400">Duration</p>
                          <p className="text-lg text-white font-semibold">
                            {transport.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Cost</p>
                          <p className="text-lg text-white font-semibold">
                            ${transport.cost}
                          </p>
                        </div>
                      </div>
                      <a
                        href={transport.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                      >
                        {transport.bookingText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚆</div>
              <p className="text-xl text-gray-400">
                Transportation information coming soon...
              </p>
              <p className="text-gray-500 mt-4">
                Check back later for detailed transportation options!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-20 px-4 bg-black text-center">
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
