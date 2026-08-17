import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchCity } from '@/lib/api';
import { getLocalCityDataBySlug } from '@/data/cityRegistry';
import { getCityGuideTopic, getCityGuideTopics } from '@/data/cityGuideTopics';
import { extractCityGuideSections } from '@/lib/city-guide-sections';
import { getSiteUrl, normalizeWpMediaUrl } from '@/lib/site-config';

type TopicParams = { city: string; topic: string };

function cleanContent(html: string): string {
  return html.replace(/https?:\/\/[^/]+\/wp-content\/[^"' )]+/g, (match) => normalizeWpMediaUrl(match));
}

function cityLabel(slug: string): string {
  return slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

export async function generateCityTopicMetadata({ params }: { params: Promise<TopicParams> }): Promise<Metadata> {
  const { city, topic } = await params;
  const topicData = getCityGuideTopic(city, topic);
  if (!topicData) return { title: 'Not Found' };
  const localCity = getLocalCityDataBySlug(city);
  const name = localCity?.name ?? cityLabel(city);
  const canonical = `${getSiteUrl()}/cities/${city}/guides/${topic}`;
  return {
    title: `${topicData.title} | ${name}`,
    description: topicData.summary,
    alternates: { canonical },
    openGraph: { title: `${topicData.title} | ${name}`, description: topicData.summary, url: canonical, type: 'article' },
  };
}

export default async function CityTopicGuidePage({ params }: { params: Promise<TopicParams> }) {
  const { city: citySlug, topic: topicSlug } = await params;
  const topic = getCityGuideTopic(citySlug, topicSlug);
  const cityData = await fetchCity(citySlug);
  const localCity = getLocalCityDataBySlug(citySlug);
  if (!topic || !cityData) notFound();

  const cityName = localCity?.name ?? cityLabel(citySlug);
  const topics = getCityGuideTopics(citySlug);
  const topicIndex = topics.findIndex((item) => item.slug === topic.slug);
  const previous = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const next = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;
  const selectedContent = extractCityGuideSections(cityData.content.rendered, topic.sourceRanges);
  if (!selectedContent.trim()) notFound();

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-stone-950">
      <header className="border-b border-stone-300 bg-stone-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60" aria-label="Breadcrumb">
            <Link href="/updated-cities" className="hover:text-white">Cities</Link>
            <span className="mx-3">/</span>
            <Link href={`/cities/${citySlug}`} className="hover:text-white">{cityName}</Link>
            <span className="mx-3">/</span>
            <span>{topic.title}</span>
          </nav>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{topic.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.98] md:text-7xl">{topic.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{topic.summary}</p>
        </div>
      </header>

      <div className="sticky top-0 z-30 border-b border-stone-300 bg-[#f7f4ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-10">
          <Link href={`/cities/${citySlug}`} className="text-sm font-semibold">← Back to {cityName} hub</Link>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-stone-500 md:block">Guide {topicIndex + 1} of {topics.length}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <article className="min-w-0 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-10">
          <div className="city-article city-article--feature" dangerouslySetInnerHTML={{ __html: cleanContent(selectedContent) }} />
        </article>

        <aside className="h-fit rounded-[1.5rem] border border-stone-300 bg-[#ece6da] p-5 lg:sticky lg:top-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">More in {cityName}</p>
          <nav className="mt-4 space-y-2" aria-label={`${cityName} guide topics`}>
            {topics.map((item) => (
              <Link
                key={item.slug}
                href={`/cities/${citySlug}/guides/${item.slug}`}
                className={`block rounded-xl px-3 py-2.5 text-sm transition ${item.slug === topic.slug ? 'bg-stone-950 font-semibold text-white' : 'hover:bg-white'}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      <footer className="border-t border-stone-300 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-2 md:px-10">
          {previous ? (
            <Link href={`/cities/${citySlug}/guides/${previous.slug}`} className="rounded-2xl border border-stone-200 p-5 transition hover:border-stone-500">
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Previous</span>
              <strong className="mt-2 block font-serif text-2xl">← {previous.title}</strong>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cities/${citySlug}/guides/${next.slug}`} className="rounded-2xl border border-stone-200 p-5 text-right transition hover:border-stone-500">
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Next</span>
              <strong className="mt-2 block font-serif text-2xl">{next.title} →</strong>
            </Link>
          ) : (
            <Link href={`/cities/${citySlug}`} className="rounded-2xl border border-stone-200 p-5 text-right transition hover:border-stone-500">
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Return</span>
              <strong className="mt-2 block font-serif text-2xl">{cityName} hub →</strong>
            </Link>
          )}
        </div>
      </footer>
    </main>
  );
}
