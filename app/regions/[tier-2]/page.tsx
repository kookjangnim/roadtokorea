/**
 * Tier-specific Region Page
 * 각 티어별로 도시 목록을 표시하는 페이지
 */

import Image from 'next/image';
import Link from 'next/link';

interface TierPageProps {
  params: {
    tier: string;
  };
}

// 티어별 도시 데이터
const tierData = {
  tier1: [
    { name: 'Seoul', nameEn: 'Seoul', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg', category: 'Capital' },
    { name: 'Busan', nameEn: 'Busan', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg', category: 'Coastal' },
    { name: 'Jeju', nameEn: 'Jeju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg', category: 'Island' },
    { name: 'Gyeongju', nameEn: 'Gyeongju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', category: 'Historic' },
  ],
  tier2: [
    { name: 'Jeonju', nameEn: 'Jeonju', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg', category: 'Traditional' },
    { name: 'Daegu', nameEn: 'Daegu', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg', category: 'Urban' },
    { name: 'Gangneung', nameEn: 'Gangneung', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg', category: 'Coastal' },
    { name: 'Gwangju', nameEn: 'Gwangju', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', category: 'Artistic' },
  ],
  tier3: [
    { name: 'Suncheon', nameEn: 'Suncheon', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg', category: 'Nature' },
    { name: 'Tongyeong', nameEn: 'Tongyeong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg', category: 'Coastal' },
    { name: 'Andong', nameEn: 'Andong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg', category: 'Traditional' },
    { name: 'Pyeongchang', nameEn: 'Pyeongchang', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', category: 'Mountain' },
  ],
  tier4: [
    { name: 'Yeosu', nameEn: 'Yeosu', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg', category: 'Hidden Gem' },
    { name: 'Jinju', nameEn: 'Jinju', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg', category: 'Traditional' },
    { name: 'Gangjin', nameEn: 'Gangjin', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', category: 'Nature' },
    { name: 'Geoje', nameEn: 'Geoje', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg', category: 'Healing' },
  ],
};

export default function TierPage({ params }: TierPageProps) {
  const tier = params.tier as keyof typeof tierData;
  const cities = tierData[tier] || [];

  // 티어별 색상 및 레이아웃
  const tierStyles = {
    tier1: {
      primary: 'from-indigo-600',
      secondary: 'from-orange-500',
      badge: '🏆'
    },
    tier2: {
      primary: 'from-amber-700',
      secondary: 'from-red-600',
      badge: '⭐'
    },
    tier3: {
      primary: 'from-green-600',
      secondary: 'from-teal-500',
      badge: '🌱'
    },
    tier4: {
      primary: 'from-emerald-600',
      secondary: 'from-cyan-500',
      badge: '💎'
    },
  };

  const tierNames = {
    tier1: 'Tier 1: Must-Visit Cities',
    tier2: 'Tier 2: Popular Cities',
    tier3: 'Tier 3: Hidden Gems',
    tier4: 'Tier 4: Local Specialties'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
            <span className={`${tierStyles[tier as keyof typeof tierStyles]?.primary || ''} text-3xl`}>
              {tierStyles[tier as keyof typeof tierStyles]?.badge || ''}
            </span>
            {tierNames[tier as keyof typeof tierNames] || ''}
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-800 to-black/60">
          <Image
            src={tier === 'tier1' ? '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' : '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg'}
            alt={tierNames[tier as keyof typeof tierNames] || 'Region'}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Discover {tierNames[tier as keyof typeof tierNames] || 'Region'} Cities
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            From ancient capitals to coastal paradises
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {cities.length}
            </div>
            <div className="text-gray-400">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {cities.length} * 3+
            </div>
            <div className="text-gray-400">Attractions Avg</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">
              Annual Visitors
            </div>
            <div className="text-3xl text-white font-semibold">
              {tier === 'tier1' ? '500,000+' : tier === 'tier2' ? '300,000+' : tier === 'tier3' ? '100,000+' : '50,000+'}
            </div>
          </div>
        </div>
      </section>

      {/* Region Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            Filter by Region
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            <button className={`${tierStyles[tier as keyof typeof tierStyles]?.primary || 'from-gray-600'} text-white px-6 py-2 rounded-full hover:bg-${tierStyles[tier as keyof typeof tierStyles]?.secondary?.replace('from-', '')} transition-all`}>
              All Regions
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all">
              Gyeongsang
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all">
              Jeolla
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all">
              Chungcheong
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all">
              Gangwon
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all">
              Gyeonggi
            </button>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={`/${city.name.toLowerCase()}`}
                className={`group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-700 transition-all`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.nameEn || city.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {city.nameEn || city.name}
                  </h3>
                  <span className={`inline-block ${tierStyles[tier as keyof typeof tierStyles]?.secondary || ''} text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                    {city.tier}
                  </span>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {city.category || 'Destination'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* See All Cities Link */}
      <section className="py-12 px-4 text-center bg-gray-800">
        <p className="text-xl text-gray-400 mb-4">
          Looking for more cities?
        </p>
        <Link
          href="/regions"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 transition-all hover:shadow-lg"
        >
          Browse All Cities
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 mb-4">
            Discover hidden Korea beyond Seoul with RoadToKorea
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 RoadToKorea. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
