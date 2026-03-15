export default function PopularSearches() {
  return (
    <section className="py-24 px-4 bg-brand-secondary/20 border-t border-brand-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-editorial text-foreground mb-12 italic">
          Trending Inspirations
        </h2>

        {/* Minimal Search Bar */}
        <div className="relative mb-16 max-w-2xl mx-auto group">
          <input
            type="text"
            placeholder="Search destinations, tags..."
            className="w-full bg-transparent border-b border-brand-secondary text-foreground placeholder-brand-sage/50 px-4 py-4 focus:outline-none focus:border-brand-accent transition-colors text-center text-lg font-light"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-sage hover:text-brand-accent transition-colors p-4" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Minimal Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Seoul', 'Hidden Gems', 'Local Culture', 'Coastal Resorts',
            'Ancient History', 'Mountains', 'Temple Stays', 'Gastronomy'
          ].map((tag, index) => (
            <button
              key={index}
              className="text-brand-sage hover:text-foreground transition-colors text-sm uppercase tracking-widest pb-1 border-b border-transparent hover:border-brand-accent"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
