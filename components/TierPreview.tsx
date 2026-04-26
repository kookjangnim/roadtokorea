import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';
import type { Tier1CityData } from '@/data/tier1Cities';
import type { TierCityData } from '@/data/tier2Cities';
import { VALID_CITY_SLUGS } from '@/constants/cities';
import { normalizeWpMediaUrl } from '@/lib/site-config';

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  date?: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
  };
}

interface TierPreviewProps {
  tier34Posts: WPPost[];
}

type CityCardSource = Tier1CityData | TierCityData;

interface EditorialCard {
  id: number;
  title: string;
  citySlug: string;
  imageUrl: string;
  categoryLabel: string;
  href: string;
}

const getCityCardData = (citySlug: string, tier: number, cityData: CityCardSource) => {
  let preferredImage = cityData.heroImage;
  const localDests = destinations.filter(
    (d) => d.tier === tier && d.city.toLowerCase() === citySlug.toLowerCase()
  );

  if (localDests.length > 0) {
    preferredImage = localDests[0].imagePath;
  }

  return {
    slug: citySlug,
    name: cityData.name,
    tier,
    src: preferredImage,
    description: cityData.headline || cityData.description,
  };
};

function getEditorialCard(post: WPPost): EditorialCard | null {
  let categoryLabel = 'Tier 3';
  let tierSlug = 'tier-3';
  let citySlug = '';

  const featuredUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  let imageUrl = featuredUrl ? normalizeWpMediaUrl(featuredUrl) : '/images/placeholder.jpg';

  if (!featuredUrl && post.content?.rendered) {
    const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch?.[1]) {
      imageUrl = normalizeWpMediaUrl(imgMatch[1]);
    }
  }

  const wpTerms = post._embedded?.['wp:term'] || [];
  for (const taxonomyArray of wpTerms) {
    for (const term of taxonomyArray) {
      if (term.taxonomy === 'category' && term.slug.startsWith('tier-')) {
        tierSlug = term.slug;
        categoryLabel = term.name || categoryLabel;
      }

      if (!citySlug && term.taxonomy === 'post_tag' && VALID_CITY_SLUGS.includes(term.slug)) {
        citySlug = term.slug;
      }
    }
  }

  if (tierSlug !== 'tier-3' || !citySlug || post.slug === 'hello-world') {
    return null;
  }

  return {
    id: post.id,
    title: post.title.rendered,
    citySlug,
    imageUrl,
    categoryLabel,
    href: `/${tierSlug}/${citySlug}/${post.slug}`,
  };
}

export default function TierPreview({ tier34Posts }: TierPreviewProps) {
  const t1Cities = Object.keys(tier1Cities).map((slug) => getCityCardData(slug, 1, tier1Cities[slug]));
  const t2Cities = Object.keys(tier2Cities).map((slug) => getCityCardData(slug, 2, tier2Cities[slug]));
  const t4Cities = Object.keys(tier4Cities).map((slug) => getCityCardData(slug, 4, tier4Cities[slug]));
  const t3Posts = tier34Posts.map(getEditorialCard).filter((post): post is EditorialCard => Boolean(post));

  return (
    <section id="regions" className="border-t border-gray-200 bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-gray-200 pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Destinations
            </p>
            <h2 className="font-serif text-5xl leading-tight text-gray-900 md:text-7xl">
              Curated <span className="italic text-gray-500">Journeys</span>
            </h2>
          </div>
          <p className="max-w-sm text-left text-lg font-light leading-relaxed text-gray-600 md:text-right">
            Explore South Korea by travel depth, from obvious anchors to places that quietly
            reshape the whole trip.
          </p>
        </div>

        {t1Cities.length > 0 && (
          <div className="mb-32">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Chapter I
              </span>
              <div className="h-[1px] flex-grow bg-gray-200" />
              <h3 className="font-serif text-3xl italic text-gray-900">The Icons</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              {t1Cities[0] && (
                <Link
                  href={`/tier-1/${t1Cities[0].slug}`}
                  className="group relative block h-[500px] overflow-hidden rounded-sm shadow-xl md:col-span-8 md:h-[700px] lg:col-span-7"
                >
                  <Image
                    src={t1Cities[0].src}
                    alt={t1Cities[0].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-10 left-10 z-10 p-4">
                    <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/80">
                      Tier {t1Cities[0].tier}
                    </span>
                    <h4 className="mb-3 font-serif text-5xl text-white drop-shadow-md">
                      {t1Cities[0].name}
                    </h4>
                    <p className="max-w-md font-light text-gray-200 drop-shadow-lg">
                      {t1Cities[0].description}
                    </p>
                  </div>
                </Link>
              )}

              <div className="grid h-[700px] grid-cols-1 gap-4 md:col-span-4 md:grid-rows-2 md:gap-8 lg:col-span-5">
                {t1Cities.slice(1).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/tier-1/${city.slug}`}
                    className="group relative block h-full overflow-hidden rounded-sm shadow-lg"
                  >
                    <Image
                      src={city.src}
                      alt={city.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-black/10 to-transparent transition-colors duration-500 group-hover:bg-gray-900/10" />
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="mb-2 text-[10px] uppercase tracking-widest text-white/80 drop-shadow-md">
                        Tier {city.tier}
                      </span>
                      <h4 className="mb-2 font-serif text-3xl text-white drop-shadow-lg">{city.name}</h4>
                      <p className="line-clamp-2 text-sm text-gray-200 opacity-0 transition-opacity drop-shadow-md group-hover:opacity-100">
                        {city.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center md:text-right">
              <Link
                href="/tier-1/cities"
                className="inline-block border-b border-gray-300 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                Explore All Icons
              </Link>
            </div>
          </div>
        )}

        {t2Cities.length > 0 && (
          <div className="mb-24">
            <div className="mb-12 flex items-center gap-4">
              <h3 className="font-serif text-3xl italic text-gray-900">Cultural Hubs</h3>
              <div className="h-[1px] flex-grow bg-gray-200" />
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Chapter II
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {t2Cities.map((city) => (
                <Link key={city.slug} href={`/tier-2/${city.slug}`} className="group block">
                  <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-sm shadow-md">
                    <Image
                      src={city.src}
                      alt={city.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="px-2">
                    <span className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                      Tier {city.tier}
                    </span>
                    <h4 className="mb-1 font-serif text-2xl text-gray-900 transition-colors group-hover:text-amber-800">
                      {city.name}
                    </h4>
                    <p className="line-clamp-2 text-sm font-light text-gray-500">{city.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center md:text-right">
              <Link
                href="/tier-2/cities"
                className="inline-block border-b border-gray-300 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                Explore All Hubs
              </Link>
            </div>
          </div>
        )}

        {t3Posts.length > 0 && (
          <div className="mb-24">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Chapter III
              </span>
              <div className="h-[1px] flex-grow bg-gray-200" />
              <h3 className="font-serif text-3xl italic text-gray-900">Deepening Routes</h3>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {t3Posts.map((post) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className="group overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-900 shadow-sm">
                      {post.categoryLabel}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      {post.citySlug}
                    </p>
                    <h4 className="mt-3 font-serif text-3xl leading-tight text-stone-900 transition-colors group-hover:text-stone-700">
                      {post.title}
                    </h4>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700">
                      Read The Route
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {t4Cities.length > 0 && (
          <div className="mb-24">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Chapter IV
              </span>
              <div className="h-[1px] flex-grow bg-gray-200" />
              <h3 className="font-serif text-3xl italic text-gray-900">Hidden Gems</h3>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {t4Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/tier-4/${city.slug}`}
                  className="group relative block h-[400px] overflow-hidden rounded-sm shadow-md md:h-[500px]"
                >
                  <Image
                    src={city.src}
                    alt={city.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/10 to-transparent transition-colors duration-500 group-hover:bg-gray-900/20" />
                  <div className="absolute bottom-8 left-8 z-10 p-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/80 drop-shadow-md">
                      Tier {city.tier}
                    </span>
                    <h4 className="mb-2 font-serif text-4xl text-white drop-shadow-md">{city.name}</h4>
                    <p className="max-w-sm line-clamp-2 font-light text-gray-200 drop-shadow-md">
                      {city.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center md:text-right">
              <Link
                href="/tier-4/cities"
                className="inline-block border-b border-gray-300 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                Explore All Detours
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
