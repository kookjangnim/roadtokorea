import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';
import type { Tier1CityData } from '@/data/tier1Cities';
import type { TierCityData } from '@/data/tier2Cities';

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
  };
}

interface TierPreviewProps {
  tier34Posts: WPPost[];
}

type CityCardSource = Tier1CityData | TierCityData;

const getCityCardData = (citySlug: string, tier: number, cityData: CityCardSource) => {
  let preferredImage = cityData.heroImage;
  const localDests = destinations.filter(d => d.tier === tier && d.city.toLowerCase() === citySlug.toLowerCase());
  
  if (localDests.length > 0) {
    if (citySlug === 'seoul') {
      const gyeongbokgung = localDests.find(d => d.district === '경복궁');
      if (gyeongbokgung) preferredImage = gyeongbokgung.imagePath;
      else preferredImage = localDests[0].imagePath;
    } else {
      preferredImage = localDests[0].imagePath;
    }
  }

  return {
    slug: citySlug,
    name: cityData.name,
    tier: tier,
    src: preferredImage,
    description: cityData.headline || cityData.description,
  };
};

export default function TierPreview({ tier34Posts }: TierPreviewProps) {
  void tier34Posts;
  const t1Cities = Object.keys(tier1Cities).map(slug => getCityCardData(slug, 1, tier1Cities[slug]));
  const t2Cities = Object.keys(tier2Cities).map(slug => getCityCardData(slug, 2, tier2Cities[slug]));

  const t4Cities = Object.keys(tier4Cities).map(slug => getCityCardData(slug, 4, tier4Cities[slug]));

  return (
    <section id="regions" className="py-24 md:py-32 px-4 md:px-8 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-12">
          <div className="max-w-2xl">
            <p className="text-gray-500 tracking-[0.2em] text-sm uppercase mb-4 font-semibold">Destinations</p>
            <h2 className="text-5xl md:text-7xl text-gray-900 font-serif leading-tight">
              Curated <span className="italic text-gray-500">Journeys</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 mt-6 md:mt-0 font-light max-w-sm text-right leading-relaxed">
            Explore our handpicked selection of South Korea&apos;s most captivating regions.
          </p>
        </div>

        {/* Tier 1: Large Asymmetrical Feature */}
        {t1Cities.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gray-500 text-sm tracking-widest uppercase font-semibold">Chapter I</span>
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <h3 className="text-3xl font-serif text-gray-900 italic">The Icons</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              {/* Featured Large Card */}
              {t1Cities[0] && (
                <Link href={`/tier-1/${t1Cities[0].slug}`} className="md:col-span-8 lg:col-span-7 group relative block h-[500px] md:h-[700px] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src={t1Cities[0].src}
                    alt={t1Cities[0].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-10 left-10 p-4 z-10">
                    <span className="text-white/80 text-xs tracking-[0.3em] uppercase mb-2 block">Tier {t1Cities[0].tier}</span>
                    <h4 className="text-5xl font-serif text-white mb-3 drop-shadow-md">{t1Cities[0].name}</h4>
                    <p className="text-gray-200 font-light max-w-md drop-shadow-lg">{t1Cities[0].description}</p>
                  </div>
                </Link>
              )}

              {/* Smaller Stacked Cards */}
              <div className="md:col-span-4 lg:col-span-5 grid grid-cols-1 grid-rows-2 gap-4 md:gap-8 h-[700px]">
                {t1Cities.slice(1).map((city, idx) => (
                  <Link 
                    key={idx} 
                    href={`/tier-1/${city.slug}`}
                    className="group relative block overflow-hidden rounded-sm h-full shadow-lg"
                  >
                    <Image
                      src={city.src}
                      alt={city.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-black/10 to-transparent group-hover:bg-gray-900/10 transition-colors duration-500" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="text-white/80 text-[10px] tracking-widest uppercase mb-2 drop-shadow-md">Tier {city.tier}</span>
                      <h4 className="text-3xl font-serif text-white mb-2 drop-shadow-lg">{city.name}</h4>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2 drop-shadow-md">{city.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center md:text-right">
              <Link href="/tier-1/cities" className="inline-block text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1 uppercase tracking-widest text-xs font-semibold">
                Explore All Icons
              </Link>
            </div>
          </div>
        )}

        {/* Tier 2: Editorial Grid */}
        {t2Cities.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-serif text-gray-900 italic">Cultural Hubs</h3>
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <span className="text-gray-500 text-sm tracking-widest uppercase font-semibold">Chapter II</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {t2Cities.map((city, index) => (
                <Link
                  href={`/tier-2/${city.slug}`}
                  key={index}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 shadow-md">
                    <Image
                      src={city.src}
                      alt={city.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Very subtle dark overlay for structure */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="px-2">
                    <span className="text-gray-500 text-[10px] tracking-widest uppercase block mb-2">TIER {city.tier}</span>
                    <h4 className="text-2xl font-serif text-gray-900 group-hover:text-amber-800 transition-colors mb-1">{city.name}</h4>
                    <p className="text-gray-500 text-sm font-light line-clamp-2">{city.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center md:text-right">
              <Link href="/tier-2/cities" className="inline-block text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1 uppercase tracking-widest text-xs font-semibold">
                Explore All Hubs
              </Link>
            </div>
          </div>
        )}

        {/* Tier 4: Hidden Gems */}
        {t4Cities.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-gray-500 text-sm tracking-widest uppercase font-semibold">Chapter III</span>
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <h3 className="text-3xl font-serif text-gray-900 italic">Hidden Gems</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t4Cities.map((city, index) => (
                <Link
                  href={`/tier-4/${city.slug}`}
                  key={index}
                  className="group relative block h-[400px] md:h-[500px] overflow-hidden rounded-sm shadow-md"
                >
                  <Image
                    src={city.src}
                    alt={city.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/10 to-transparent group-hover:bg-gray-900/20 transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 p-4 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-white/80 text-[10px] tracking-widest uppercase mb-2 block drop-shadow-md">Tier {city.tier}</span>
                    <h4 className="text-4xl font-serif text-white mb-2 drop-shadow-md">{city.name}</h4>
                    <p className="text-gray-200 font-light max-w-sm line-clamp-2 drop-shadow-md">{city.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center md:text-right">
              <Link href="/tier-4/cities" className="inline-block text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1 uppercase tracking-widest text-xs font-semibold">
                Explore All Detours
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
