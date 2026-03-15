/**
 * PainSection Component
 * Pain Points (Build Empathy) + Emotional Hook
 */

interface PainPoint {
  title: string;
  description: string;
}

interface PainSectionProps {
  painPoints: PainPoint[];
}

export default function PainSection({ painPoints }: PainSectionProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          😰 Tired of Same Tourist Traps?
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Most foreigners leave Korea feeling they missed the real experience. Here&apos;s why:
        </p>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Emotional Hook */}
        <p className="text-center text-lg text-gray-300 mt-8">
          You&apos;re not alone. <span className="text-orange-400 font-semibold">90%</span> face the same struggles.
        </p>
      </div>
    </section>
  );
}
