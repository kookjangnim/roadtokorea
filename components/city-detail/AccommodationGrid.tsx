/**
 * AccommodationGrid Component
 * Where to Stay (Top 3 Cards with Booking Links)
 */

import Image from 'next/image';

interface Accommodation {
  name: string;
  nameEn?: string;
  descriptionEn: string;
  image_url: string;
  type: string;
  rating?: number;
  reviews?: number;
  price_range: string;
  why_stay?: string;
}

interface AccommodationGridProps {
  accommodation: Accommodation[];
}

export default function AccommodationGrid({ accommodation }: AccommodationGridProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏨 Where to Stay
          </h2>
          <p className="text-xl text-gray-300">
            Rest well in places that feel like home, not hotels.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodation.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-800"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.image_url && (
                  <Image
                    src={item.image_url}
                    alt={item.name}
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
                    {item.nameEn || item.name}
                    {item.nameEn !== item.name && (
                      <span className="ml-2 text-sm text-gray-400">({item.name})</span>
                    )}
                  </h3>
                  {/* Rating */}
                  {item.rating && item.rating > 0 && (
                    <div className="text-sm text-orange-400">⭐ {item.rating}</div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{item.descriptionEn}</p>

                {/* Why Stay */}
                {item.why_stay && (
                  <p className="text-blue-400 text-sm mb-4">
                    💡 Why stay: {item.why_stay}
                  </p>
                )}

                {/* Price Badge */}
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  {item.price_range}
                </span>

                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all hover:scale-105"
                >
                  Check Availability →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
