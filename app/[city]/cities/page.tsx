import { fetchCitiesByTier } from '@/lib/api';
import CityList from './CityList';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const tierString = resolvedParams.city.replace('tier-', '');
  const tier = parseInt(tierString);
  const title = `Tier ${tier} Cities`;
  const description = `Explore the best Tier ${tier} cities in South Korea. Find popular destinations and hidden gems.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://roadtokorea.blog/${resolvedParams.city}/cities`,
    }
  };
}

export default async function TierPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const tierString = resolvedParams.city.replace('tier-', '');
  const tier = parseInt(tierString);
  const cities = await fetchCitiesByTier(tier);

  if (cities.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            No cities found for Tier {tier}
          </h1>
          <p className="text-gray-400">
            Cities for this tier are coming soon...
          </p>
          <a
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Tier ${tier} Cities in South Korea`,
    "description": `Explore the best Tier ${tier} cities in South Korea. Find popular destinations and hidden gems.`,
    "url": `https://roadtokorea.blog/tier-${tier}/cities`
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <a href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
                RoadToKorea
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                Tier {tier} Cities
              </h1>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Cities Grid and Filters */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <CityList cities={cities} tier={tier} />
        </div>
      </section>
    </main>
  );
}
