import Link from 'next/link';
import Image from 'next/image';

const tier1Cities = [
  { name: 'Seoul', slug: 'seoul', tier: 'Tier 1', image: '/images/cities/seoul.jpg', desc: 'The heart of tradition & tomorrow.' },
  { name: 'Busan', slug: 'busan', tier: 'Tier 1', image: '/images/cities/haeundae.jpg', desc: 'Coastal majesty.' },
  { name: 'Jeju', slug: 'jeju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg', desc: 'Volcanic paradise.' },
];

const tier2Cities = [
  { name: 'Jeonju', slug: 'jeonju', tier: 'Tier 2', image: '/images/cities/jeonju.jpg' },
  { name: 'Daegu', slug: 'daegu', tier: 'Tier 2', image: '/images/cities/daegu.jpg' },
  { name: 'Gangneung', slug: 'gangneung', tier: 'Tier 2', image: '/images/cities/gangneung.jpg' },
  { name: 'Gwangju', slug: 'gwangju', tier: 'Tier 2', image: '/images/cities/gwangju.jpg' },
];

const tier34Cities = [
  { name: 'Suncheon', slug: 'suncheon', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
  { name: 'Tongyeong', slug: 'tongyeong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
  { name: 'Andong', slug: 'andong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
  { name: 'Pyeongchang', slug: 'pyeongchang', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg' },
  { name: 'Yeosu', slug: 'yeosu', tier: 'Tier 4', image: '/images/cities/haeundae.jpg' },
  { name: 'Jinju', slug: 'jinju', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
  { name: 'Wonju', slug: 'wonju', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
  { name: 'Yangyang', slug: 'yangyang', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
  { name: 'Boseong', slug: 'boseong', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg' },
  { name: 'Namwon', slug: 'namwon', tier: 'Tier 4', image: '/images/cities/jeonju.jpg' },
  { name: 'Geoje', slug: 'geoje', tier: 'Tier 4', image: '/images/cities/haeundae.jpg' },
  { name: 'Hadong', slug: 'hadong', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
];

export default function TierPreview() {
  return (
    <section id="regions" className="py-32 px-4 md:px-8 bg-background border-t border-brand-secondary">
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
            <Link href="/tier-1/seoul" className="md:col-span-7 group relative block h-[600px] overflow-hidden rounded-sm">
              <Image
                src="/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg"
                alt="Seoul"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 p-4 border-l border-brand-accent/50">
                <span className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-2 block">Tier 1</span>
                <h4 className="text-5xl font-editorial text-white mb-2">Seoul</h4>
                <p className="text-brand-taupe">The heart of tradition & tomorrow.</p>
              </div>
            </Link>

            {/* Two Smaller Stacked Cards */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {tier1Cities.slice(1).map((city, index) => (
                <Link
                  href={`/tier-1/${city.slug}`}
                  key={index}
                  className="group relative flex-1 overflow-hidden rounded-sm min-h-[280px]"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
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
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-accent text-sm tracking-widest uppercase">Chapter III</span>
            <div className="h-[1px] flex-grow bg-brand-secondary"></div>
            <h3 className="text-3xl font-editorial text-foreground italic">Hidden Gems</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tier34Cities.map((city, index) => (
              <Link
                href={`/tier-${city.tier.split(' ')[1].toLowerCase()}/${city.slug}`}
                key={index}
                className="group relative overflow-hidden rounded-sm block aspect-square"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-lg font-editorial text-white">{city.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
