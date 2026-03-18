interface PopularSearchesProps {
  tags?: string[];
}

export default function PopularSearches({ tags = [] }: PopularSearchesProps) {
  if (tags.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-12 italic">
          Trending Inspirations
        </h2>

        {/* Minimal Search Bar */}
        <div className="relative mb-16 max-w-2xl mx-auto group">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 px-4 py-4 focus:outline-none focus:border-amber-800 transition-colors text-center text-lg font-light"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-800 transition-colors p-4" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Minimal Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest pb-1 border-b border-transparent hover:border-amber-800"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
