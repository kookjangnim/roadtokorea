/**
 * AttractionsGrid Component
 * Must-Visit Attractions (Card Grid)
 */

import Image from 'next/image';

interface Attraction {
  name: string;
  nameEn?: string;
  descriptionEn: string;
  image_url: string;
  address: string;
  category: string;
  rating?: number;
  reviews?: number;
  admission_fee: string;
  hours: string;
  why_visit?: string;
}

interface AttractionsGridProps {
  attractions: Attraction[];
}

export default function AttractionsGrid({ attractions }: AttractionsGridProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🗺️ Must-Visit Attractions
          </h2>
          <p className="text-xl text-gray-300">
            Each spot tells a different story of Korea&apos;s soul. Don&apos;t miss any.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {attraction.image_url && (
                  <Image
                    src={attraction.image_url}
                    alt={attraction.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {attraction.nameEn || attraction.name}
                    {attraction.nameEn !== attraction.name && (
                      <span className="ml-2 text-sm text-gray-400">({attraction.name})</span>
                    )}
                  </h3>
                  {/* Rating */}
                  {attraction.rating && attraction.rating > 0 && (
                    <div className="text-sm text-orange-400">
                      ⭐ {attraction.rating} · {attraction.reviews} reviews
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{attraction.descriptionEn}</p>

                {/* Why Visit */}
                {attraction.why_visit && (
                  <p className="text-blue-400 text-sm mb-4">
                    💡 Why visit: {attraction.why_visit}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>📍 {attraction.address}</span>
                    <span>🎫️ {attraction.admission_fee}</span>
                  </div>
                  <span>⏰ {attraction.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
