import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tier1Cities } from '@/data/tier1Cities';
import { fetchPostsByCityTag } from '@/lib/wp-api';
import { fetchUnsplashImage } from '@/lib/unsplash';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = tier1Cities[city.toLowerCase()];

  if (!cityData) {
    return { title: 'City Not Found' };
  }

  return {
    title: `${cityData.name} - ${cityData.headline} | RoadToKorea`,
    description: cityData.description,
    openGraph: {
      title: `${cityData.name} - RoadToKorea`,
      description: cityData.description,
      url: `https://roadtokorea.blog/tier-1/${cityData.slug}`,
      images: [{ url: cityData.heroImage }],
    }
  };
}

export default async function Tier1CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = tier1Cities[city.toLowerCase()];

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">City Not Found</h1>
          <p className="text-brand-taupe mb-8">We couldn&apos;t find curated data for this Tier 1 destination.</p>
          <Link href="/" className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const heroImageUrl = cityData.heroImage;

  const enrichedHotspots = cityData.hotspots.map((spot, index) => {
    return { ...spot, dynamicImage: spot.image };
  });

  // Fetch dynamic posts related to the city (e.g., Hongdae, Gangnam for Seoul)
  const dynamicPosts = await fetchPostsByCityTag(cityData.slug, 8);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Image
          src={heroImageUrl}
          alt={cityData.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        
        {/* Floating Header Content */}
        <div className="absolute z-10 text-center px-4 pt-20">
          <span className="inline-block text-brand-salmon uppercase tracking-[0.4em] text-sm font-semibold blur-in-subtle mb-6">
            Tier 1 Icon
          </span>
          <h1 className="text-6xl md:text-[8rem] leading-none font-editorial italic text-white mb-6 drop-shadow-xl blur-in">
            {cityData.name}
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md slide-up blur-in-subtle" style={{ animationDelay: '0.4s' }}>
            {cityData.headline}
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10 text-white/50">
          <span className="text-xs uppercase tracking-[0.2em] mb-2 font-mono">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* 2. City Introduction & Cultural Insights */}
      <section className="relative py-40 px-4 md:px-8 border-b border-brand-secondary overflow-hidden">
        {/* Subtle background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none flex">
          <span className="font-editorial text-[20rem] md:text-[30rem] whitespace-nowrap leading-none tracking-tighter">
            {cityData.name}
          </span>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
            <div className="md:w-1/3 shrink-0">
              <div className="sticky top-40">
                <h2 className="text-brand-accent text-sm tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-accent"></span>
                  The Soul
                </h2>
                <div className="text-brand-taupe/50 font-mono text-xs tracking-widest uppercase">
                  Cultural Insight
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-3xl md:text-5xl font-editorial leading-[1.3] text-foreground mb-12">
                &quot;{cityData.description}&quot;
              </h3>
              
              <div className="relative pl-6 md:pl-10 border-l border-brand-secondary/40">
                <p className="text-lg md:text-xl text-brand-sage font-light leading-relaxed">
                  <span className="float-left text-7xl font-editorial italic text-brand-taupe leading-none mr-4 mt-1 opacity-80">
                    {cityData.culturalInsight.charAt(0)}
                  </span>
                  {cityData.culturalInsight.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Hotspots (Editorial Grid) */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-editorial italic text-foreground border-b border-brand-secondary pb-8">
              Curated <span className="text-brand-taupe not-italic font-sans font-light">Hotspots</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-24 gap-x-8">
            {enrichedHotspots.map((spot, index) => {
              // Create an interesting asymmetrical masonry look based on index
              const isLarge = index % 3 === 0; // Every 3rd item is large
              const spanClasses = isLarge 
                ? "lg:col-span-8 lg:col-start-1" 
                : index % 3 === 1 
                  ? "lg:col-span-4 lg:col-start-9" 
                  : "lg:col-span-6 lg:col-start-4"; // Middle offset
              
              return (
                <article key={spot.id} className={`${spanClasses} group`}>
                  <div className={`relative overflow-hidden rounded-sm mb-6 ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={spot.dynamicImage}
                      alt={spot.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[1.1] contrast-[1.05] brightness-95 sepia-[.05]"
                      sizes={isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {spot.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 border border-brand-secondary text-brand-taupe rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-editorial text-foreground mb-3 group-hover:text-brand-accent transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-brand-sage font-light max-w-lg">
                    {spot.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Discover More (Dynamic Related Posts) */}
      {dynamicPosts.length > 0 && (
        <section className="py-32 px-4 md:px-8 border-t border-brand-secondary relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-brand-accent tracking-[0.3em] text-xs uppercase mb-4 block">Journal</span>
              <h2 className="text-4xl md:text-5xl font-editorial italic text-foreground mb-4">
                Discover More in <span className="not-italic text-brand-taupe">{cityData.name}</span>
              </h2>
              <p className="text-brand-sage text-lg font-light max-w-2xl">
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
                let tierSlug = 'tier-1';
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
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-brand-secondary/50">
                      <Link href={postUrl}>
                        <Image
                          src={imageUrl}
                          alt={post.title.rendered}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                          loading="lazy"
                        />
                      </Link>
                      <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full">
                        <span className="text-white/90 text-[10px] tracking-widest uppercase">{categoryLabel}</span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <time className="text-brand-sage text-xs tracking-widest uppercase mb-3 block">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                      <Link href={postUrl}>
                        <h3 className="text-2xl font-editorial text-foreground mb-4 group-hover:text-brand-accent transition-colors leading-tight line-clamp-2">
                          {post.slug.charAt(0).toUpperCase() + post.slug.toLowerCase().slice(1)}
                        </h3>
                      </Link>
                      <div className="mt-auto pt-4 border-t border-brand-secondary/50">
                        <Link href={postUrl} className="text-brand-taupe text-xs uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            
            <div className="mt-16 text-right">
              <Link href="/blog" className="inline-block text-brand-taupe hover:text-foreground transition-colors border-b border-brand-taupe/30 hover:border-foreground pb-1 uppercase tracking-widest text-xs">
                View All Journal Entries
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. Footer & Navigation */}
      <section className="py-24 text-center border-t border-brand-secondary bg-brand-primary">
        <p className="text-brand-taupe mb-8 tracking-[0.2em] text-sm uppercase">Continue Exploring</p>
        <Link 
          href="/"
          className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full hover:bg-brand-accent transition-colors font-medium tracking-wide"
        >
          Return to Destinations
        </Link>
      </section>

    </main>
  );
}
