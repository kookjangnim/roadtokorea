/**
 * HeroSection Component
 * Hero Banner + Quick Facts + Urgency Badges
 */

import Image from 'next/image';

interface HeroSectionProps {
  heroImage: string;
  cityName: string;
  cityNameEn: string;
  fromSeoul: string;
  bestSeason: string;
  annualVisitors?: string;
  satisfactionRate?: string;
}

export default function HeroSection({
  heroImage,
  cityName,
  cityNameEn,
  fromSeoul,
  bestSeason,
  annualVisitors,
  satisfactionRate,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={cityName}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Urgency Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-orange-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            🔥 Top Rated
          </span>
          <span className="inline-flex items-center gap-2 bg-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            🚆 {fromSeoul}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          Discover {cityNameEn}&apos;s Hidden Treasures Before Tourists Overrun It
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
          Your insider guide to authentic Korean culture — from secret temples to locals-only food
        </p>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {annualVisitors && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-1">👥</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Visitors</div>
              <div className="text-xl font-bold text-white">{annualVisitors}</div>
              <div className="text-xs text-gray-400">/year</div>
            </div>
          )}
          {satisfactionRate && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-1">🏆</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Satisfaction</div>
              <div className="text-xl font-bold text-white">{satisfactionRate}</div>
            </div>
          )}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="text-3xl mb-1">🌡️</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">Best Season</div>
            <div className="text-xl font-bold text-white">{bestSeason}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="text-3xl mb-1">🚆</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">From Seoul</div>
            <div className="text-xl font-bold text-white">{fromSeoul}</div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#how-to-get-there"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg border-2 border-white/30"
        >
          Start Your Journey →
        </a>
      </div>
    </section>
  );
}
