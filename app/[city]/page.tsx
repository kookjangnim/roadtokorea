import { fetchCity } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function CityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city;
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

  // Placeholder 데이터 (실제 WordPress 데이터 없을 때)
  const cityInfo = {
    name: cityData.title.rendered,
    tier: cityData.meta?.tier_level || 1,
    description: cityData.excerpt.rendered,
    history: cityData.content.rendered,
    attractions: [],
    accommodations: [],
    transportation: []
  };

  // 티어별 색상
  const tierColors = {
    1: 'from-indigo-900 to-indigo-800',
    2: 'from-amber-900 to-amber-800',
    3: 'from-emerald-900 to-emerald-800',
    4: 'from-emerald-900 to-emerald-800'
  };

  const tierColor = tierColors[cityInfo.tier as keyof typeof tierColors];

  return (
    <main className="min-h-screen">
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
              {cityInfo.attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
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
              {cityInfo.accommodations.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-700"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
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
              {cityInfo.transportation.map((transport, index) => (
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
