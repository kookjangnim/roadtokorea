import Link from 'next/link';
import Image from 'next/image';
import { VALID_CITY_SLUGS } from '@/constants/cities';

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

const tier1Cities = [
  { name: 'Seoul', slug: 'seoul', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg', desc: 'The heart of tradition & tomorrow.' },
  { name: 'Busan', slug: 'busan', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', desc: 'Coastal majesty.' },
  { name: 'Jeju', slug: 'jeju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg', desc: 'Volcanic paradise.' },
  { name: 'Gangneung', slug: 'gangneung', tier: 'Tier 1', image: '/images/cities/gangneung.jpg', desc: 'Where the pine forest meets the sea.' },
  { name: 'Yeosu', slug: 'yeosu', tier: 'Tier 1', image: '/images/cities/yeosu.jpg', desc: 'The romantic night sea.' },
];

const tier2Cities = [
  { name: 'Gyeongju', slug: 'gyeongju', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
  { name: 'Jeonju', slug: 'jeonju', tier: 'Tier 2', image: '/images/cities/jeonju.jpg' },
  { name: 'Daegu', slug: 'daegu', tier: 'Tier 2', image: '/images/cities/daegu.jpg' },
  { name: 'Gwangju', slug: 'gwangju', tier: 'Tier 2', image: '/images/cities/gwangju.jpg' },
];

interface TierPreviewProps {
  tier34Posts: WPPost[];
}

function extractImageData(post: WPPost): string {
  const embeddedImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const fallbackImagePattern = /<img[^>]+src="([^">]+)"/;
  const match = post.excerpt?.rendered?.match(fallbackImagePattern) || post.content?.rendered?.match(fallbackImagePattern);
  
  if (embeddedImage) return embeddedImage;
  
  if (match && match[1]) {
    return match[1].replace(
      /https?:\/\/roadtokorea\.blog\/wp-content/g,
      'https://api.roadtokorea.blog/wp-content'
    );
  }
  
  return '/images/placeholder.jpg';
}

function formatCityNameFromSlug(slug: string): string {
  if (!slug) return '';
  return slug.charAt(0).toUpperCase() + slug.toLowerCase().slice(1);
}

export default function TierPreview({ tier34Posts }: TierPreviewProps) {
  return (
    <section id="regions" className="py-32 px-4 md:px-8 border-t border-brand-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-brand-secondary pb-12">
          <div className="max-w-2xl">
            <p className="text-brand-accent tracking-[0.2em] text-sm uppercase mb-4">Destinations</p>
            <h2 className="text-5xl md:text-7xl text-foreground font-editorial">
              Curated <span className="italic text-brand-taupe">Journeys</span>
            </h2>
          </div>
          <p className="text-lg text-brand-sage mt-6 md:mt-0 font-light max-w-sm text-right">
            Explore our handpicked selection of South Korea&apos;s most captivating regions.
          </p>
        </div>

        {/* Tier 1: Large Asymmetrical Feature */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-accent text-sm tracking-widest uppercase">Chapter I</span>
            <div className="h-[1px] flex-grow bg-brand-secondary"></div>
            <h3 className="text-3xl font-editorial text-foreground italic">The Icons</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Large Card */}
            <Link href={`/tier-1/${tier1Cities[0].slug}`} className="md:col-span-7 group relative block h-[600px] overflow-hidden rounded-sm">
              <Image
                src={tier1Cities[0].image}
                alt={tier1Cities[0].name}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 p-4 border-l border-brand-accent/50 z-10">
                <span className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-2 block">{tier1Cities[0].tier}</span>
                <h4 className="text-5xl font-editorial text-white mb-2">{tier1Cities[0].name}</h4>
                <p className="text-brand-taupe">{tier1Cities[0].desc}</p>
              </div>
            </Link>

            {/* Four Smaller Stacked Cards */}
            <div className="md:col-span-5 grid grid-cols-2 grid-rows-2 gap-4">
              {tier1Cities.slice(1).map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/tier-1/${city.slug}`}
                  className="group relative block overflow-hidden rounded-sm h-full"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <span className="text-brand-accent text-xs tracking-widest uppercase mb-1">{city.tier}</span>
                    <h4 className="text-4xl font-editorial text-white">{city.name}</h4>
                    <p className="text-brand-sage text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      {city.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 text-right">
            <Link href="/tier-1/cities" className="inline-block text-brand-taupe hover:text-foreground transition-colors border-b border-brand-taupe/30 hover:border-foreground pb-1 uppercase tracking-widest text-xs">
              View All Icons
            </Link>
          </div>
        </div>

        {/* Tier 2: Editorial Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-editorial text-foreground italic">Cultural Hubs</h3>
            <div className="h-[1px] flex-grow bg-brand-secondary"></div>
            <span className="text-brand-accent text-sm tracking-widest uppercase">Chapter II</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {tier2Cities.map((city, index) => (
              <Link
                href={`/tier-2/${city.slug}`}
                key={index}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                <span className="text-brand-accent/80 text-[10px] tracking-widest uppercase block mb-1">{city.tier}</span>
                <h4 className="text-2xl font-editorial text-foreground group-hover:text-brand-accent transition-colors">{city.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* Tier 3-4: Hidden Gems - Masonry Fallback */}
        {tier34Posts.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-brand-accent text-sm tracking-widest uppercase">Chapter III</span>
              <div className="h-[1px] flex-grow bg-brand-secondary"></div>
              <h3 className="text-3xl font-editorial text-foreground italic">Hidden Gems</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tier34Posts.map((post, index) => {
                let currentTier = 'Tier 4';
                let citySlug = 'seoul'; // 기본 도시 (fallback)
                if (post._embedded?.['wp:term']) {
                  for (const group of post._embedded['wp:term']) {
                    for (const term of group) {
                      if (term.slug === 'tier-3') currentTier = 'Tier 3';
                      else if (term.slug === 'tier-4') currentTier = 'Tier 4';
                      else if (term.taxonomy === 'post_tag' && term.slug) {
                        if (VALID_CITY_SLUGS.includes(term.slug)) citySlug = term.slug;
                      }
                    }
                  }
                }
                const tierSlug = currentTier.toLowerCase().replace(' ', '-');

                return (
                  <Link
                    href={`/${tierSlug}/${citySlug}/${post.slug}`}
                    key={index}
                    className="group relative overflow-hidden rounded-sm block aspect-square"
                  >
                    <Image
                      src={extractImageData(post)}
                      alt={post.title.rendered}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
                      <span className="text-brand-accent/80 text-[10px] tracking-widest uppercase block mb-1">{currentTier}</span>
                      <h4 className="text-lg font-editorial text-white">{formatCityNameFromSlug(post.slug)}</h4>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
        
        {tier34Posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-taupe text-xl">Loading curated destinations...</p>
          </div>
        )}
      </div>
    </section>
  );
}
