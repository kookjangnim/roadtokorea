import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tier4Cities } from '@/data/tier4Cities';
import { fetchPostsByCityTag } from '@/lib/wp-api';
import { destinations, districtToEnglish } from '@/data/destinations';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = tier4Cities[city.toLowerCase()];
  const cityDestinations = destinations.filter(d => d.city.toLowerCase() === city.toLowerCase() && d.tier === 4);

  if (!cityData) {
    return { title: 'City Not Found' };
  }

  const heroImage = cityDestinations.length > 0 ? cityDestinations[0].imagePath : cityData.heroImage;

  return {
    title: `${cityData.name} - ${cityData.headline} | RoadToKorea`,
    description: cityData.description,
    openGraph: {
      title: `${cityData.name} - RoadToKorea`,
      description: cityData.description,
      url: `https://roadtokorea.blog/tier-4/${cityData.slug}`,
      images: [{ url: heroImage }],
    }
  };
}

export default async function Tier4CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = tier4Cities[city.toLowerCase()];

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-gray-500 mb-8">We couldn&apos;t find curated data for this Tier 4 destination.</p>
          <Link href="/" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const cityDestinations = destinations.filter(d => d.city.toLowerCase() === city.toLowerCase() && d.tier === 4);
  
  // Choose the hero image (fallback to the manual heroImage definition if destinations is empty)
  let heroImageUrl = cityData.heroImage;
  if (cityDestinations.length > 0) {
    // Attempt to pick a good hero image
    const preferredHero = cityDestinations[0]; 
    heroImageUrl = preferredHero.imagePath;
  }

  // To fulfill the instruction to "maximize photos", we do NOT deduplicate by district here.
  // Instead, we render all available imagery from the destinations.ts for this city.
  const allHotspots = cityDestinations.length > 0 
    ? cityDestinations.map((dest, i) => {
        // Extract a meaningful name from the image filename (e.g., /images/cities/wonju/baegun-mountain.jpg -> Baegun Mountain)
        let extractedName = "";
        if (dest.imagePath) {
          const filename = dest.imagePath.split('/').pop() || "";
          const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
          extractedName = nameWithoutExt
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }

        const titleName = (dest.district && dest.district.toLowerCase() !== city.toLowerCase()) 
          ? (districtToEnglish[dest.district] || dest.district) 
          : (extractedName || cityData.name);

        const slug = titleName.toLowerCase().replace(/\s+/g, '-');

        // Keep unique keys if names repeat
        return {
          id: `${dest.city}-${dest.imagePath}-${i}`,
          slug,
          name: titleName,
          description: dest.description || `Experience the stunning beauty and serene atmosphere of ${titleName}, a perfect reflection of ${cityData.name}'s unique charm.`,
          dynamicImage: dest.imagePath,
          tags: [cityData.name, `Tier ${dest.tier}`]
        };
      })
    : cityData.hotspots.map((spot: any, i: number) => {
        const slug = spot.name.toLowerCase().replace(/\s+/g, '-');
        return { ...spot, id: `fallback-${i}`, slug, dynamicImage: spot.image };
      });

  // Fetch dynamic posts related to the city
  const dynamicPosts = await fetchPostsByCityTag(cityData.slug, 8);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
        <Image
          src={heroImageUrl}
          alt={cityData.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Lighter, subtle overlay for White Editorial aesthetic */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating Header Content */}
        <div className="absolute z-10 text-center px-4 pt-20">
          <span className="inline-block text-white/90 uppercase tracking-[0.4em] text-xs font-semibold mb-6 drop-shadow-md">
            Chapter III. Hidden Gems
          </span>
          <h1 className="text-7xl md:text-[10rem] leading-none font-serif italic text-white mb-6 drop-shadow-xl blur-in">
            {cityData.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md slide-up blur-in-subtle" style={{ animationDelay: '0.4s' }}>
            {cityData.headline}
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </section>

      {/* 2. City Introduction & Cultural Insights */}
      <section className="relative py-32 px-4 md:px-8 border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <div className="md:w-1/3 shrink-0">
            <div className="sticky top-40">
              <h2 className="text-gray-400 text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-300"></span>
                The Essence
              </h2>
              <div className="text-gray-900 font-serif text-3xl italic">
                Cultural Insight
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight text-gray-900 mb-12">
              &quot;{cityData.description}&quot;
            </h3>
            
            <div className="relative pl-6 md:pl-10 border-l border-gray-200">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <span className="float-left text-7xl font-serif italic text-gray-300 leading-none mr-4 mt-2">
                  {cityData.culturalInsight.charAt(0)}
                </span>
                {cityData.culturalInsight.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Photo Gallery (Editorial Grid) */}
      <section className="py-32 px-4 md:px-8 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-12">
            <h2 className="text-5xl md:text-7xl font-serif text-gray-900 italic">
              Immersive <span className="not-italic text-gray-500 font-sans font-light">Gallery</span>
            </h2>
            <p className="text-gray-500 max-w-sm text-right font-light leading-relaxed">
              Explore the untouched beauty and hidden corners characterizing the landscape of {cityData.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-24 gap-x-8">
            {allHotspots.map((spot: any, index: number) => {
              // Interesting asymmetrical masonry logic to map over *every single image* 
              const cycle = index % 5;
              let spanClasses = "";
              let aspectClass = "";
              
              switch(cycle) {
                case 0:
                  spanClasses = "lg:col-span-8 lg:col-start-1";
                  aspectClass = "aspect-[16/9]";
                  break;
                case 1:
                  spanClasses = "lg:col-span-4 lg:col-start-9";
                  aspectClass = "aspect-[4/5]";
                  break;
                case 2:
                  spanClasses = "lg:col-span-6 lg:col-start-1";
                  aspectClass = "aspect-[4/3]";
                  break;
                case 3:
                  spanClasses = "lg:col-span-6 lg:col-start-7";
                  aspectClass = "aspect-[1/1]";
                  break;
                case 4:
                  spanClasses = "lg:col-span-8 lg:col-start-3";
                  aspectClass = "aspect-[21/9]";
                  break;
              }
              
              return (
                <Link href={`/tier-4/${cityData.slug}/${spot.slug}`} key={spot.id} className={`${spanClasses} group cursor-pointer block`}>
                  <article>
                    <div className={`relative overflow-hidden rounded-sm mb-6 ${aspectClass}`}>
                      <Image
                        src={spot.dynamicImage}
                        alt={spot.name}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {spot.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 border border-gray-200 text-gray-500 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-serif text-gray-900 mb-3 group-hover:text-gray-500 transition-colors">
                      {spot.name}
                    </h3>
                    <p className="text-gray-600 font-light max-w-lg leading-relaxed">
                      {spot.description}
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Discover More (Dynamic Related Posts) */}
      {dynamicPosts.length > 0 && (
        <section className="py-32 px-4 md:px-8 border-t border-gray-200 relative bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-gray-400 tracking-[0.3em] text-xs uppercase mb-4 block">Journal</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-4">
                Discover More in <span className="not-italic text-gray-500 font-sans font-light">{cityData.name}</span>
              </h2>
              <p className="text-gray-500 text-lg font-light max-w-2xl">
                Read our latest travel notes and neighborhood guides for {cityData.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dynamicPosts.map((post, index) => {
                // Image fallback logic
                let imageUrl = `/images/cities/${post.slug.toLowerCase()}.jpg`;
                if (post.slug.toLowerCase() !== 'wonju' && post.content?.rendered) {
                  const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
                  if (imgMatch && imgMatch[1]) {
                    imageUrl = imgMatch[1].replace(
                      /https?:\/\/roadtokorea\.blog\/wp-content/g,
                      'https://api.roadtokorea.blog/wp-content'
                    );
                  }
                }

                let categoryLabel = 'Travel';
                let tierSlug = 'tier-4';
                const wpTerms = post._embedded?.['wp:term'] || [];
                for (const taxonomyArray of wpTerms) {
                  const cat = taxonomyArray.find((t: any) => t.taxonomy === 'category');
                  if (cat) {
                    if (cat.slug && cat.slug.startsWith('tier-')) tierSlug = cat.slug;
                    categoryLabel = cat.name || categoryLabel;
                  }
                }
                const postUrl = `/${tierSlug}/${cityData.slug}/${post.slug}`;

                return (
                  <article key={post.id} className="group cursor-pointer flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-gray-100 bg-gray-50">
                      <Link href={postUrl}>
                        <Image
                          src={imageUrl}
                          alt={post.title.rendered}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                          loading="lazy"
                        />
                      </Link>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm shadow-sm">
                        <span className="text-gray-900 text-[10px] tracking-widest uppercase font-medium">{categoryLabel}</span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <time className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-3 block">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                      <Link href={postUrl}>
                        <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-gray-500 transition-colors leading-tight line-clamp-2">
                          {post.slug.charAt(0).toUpperCase() + post.slug.toLowerCase().slice(1)}
                        </h3>
                      </Link>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <Link href={postUrl} className="text-gray-400 text-xs uppercase tracking-[0.2em] group-hover:text-gray-900 transition-colors">
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            
            <div className="mt-16 text-right">
              <Link href="/blog" className="inline-block text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1 uppercase tracking-widest text-xs">
                View All Journal Entries
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. Footer & Navigation */}
      <section className="py-32 text-center border-t border-gray-200 bg-[#fbfbfb]">
        <p className="text-gray-400 mb-8 tracking-[0.3em] text-xs uppercase font-medium">Continue Exploring</p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-gray-900 text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-colors tracking-widest uppercase text-xs font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
        >
          Return to Destinations
        </Link>
      </section>

    </main>
  );
}
