/**
 * BeforeAfterSection Component
 * Transformation Story (Before → After)
 */

interface BeforeAfterItem {
  before: string;
  after: string;
  improvement: string;
}

interface BeforeAfterSectionProps {
  beforeAfter: BeforeAfterItem[];
}

export default function BeforeAfterSection({ beforeAfter }: BeforeAfterSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          ✨ Transform Your Trip from &quot;Okay&quot; to &quot;Unforgettable&quot;
        </h2>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {beforeAfter.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Before */}
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                <div className="text-sm text-red-400 uppercase tracking-wider mb-2">Before</div>
                <p className="text-white">{item.before}</p>
              </div>

              {/* After */}
              <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
                <div className="text-sm text-green-400 uppercase tracking-wider mb-2">After</div>
                <p className="text-white">{item.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Highlight */}
        {beforeAfter.length > 0 && beforeAfter[0].improvement && (
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center">
            <p className="text-white text-lg">
              Result: <span className="font-bold">{beforeAfter[0].improvement}</span> at half the cost
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
