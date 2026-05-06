interface PopularSearchesProps {
  tags?: string[];
}

export default function PopularSearches({ tags = [] }: PopularSearchesProps) {
  if (tags.length === 0) return null;

  return (
    <section className="border-t border-gray-200 bg-stone-50 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
          Slow Travel Signals
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
          Places shaping the current
          <span className="block text-stone-500">slow route map.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
          These are the cities and place names surfacing most often across recent guides, route
          experiments, and newer drafts. Use them when you want a quick way into the parts of the
          site where the route thinking is most active.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-300 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700 shadow-sm transition-colors hover:border-stone-900 hover:text-stone-950"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
