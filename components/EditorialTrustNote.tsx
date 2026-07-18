import Link from 'next/link';

interface EditorialTrustNoteProps {
  compact?: boolean;
}

export default function EditorialTrustNote({ compact = false }: EditorialTrustNoteProps) {
  return (
    <section
      aria-label="Article authorship and research method"
      className={`border border-stone-200 bg-stone-50/90 ${compact ? 'p-4' : 'p-5 md:p-6'}`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-600">
            Written and reviewed by
          </p>
          <Link
            href="/about#editorial-desk"
            className="mt-2 inline-flex font-serif text-2xl text-stone-950 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900"
          >
            RoadToKorea Editorial Desk
          </Link>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-stone-700">
          Route comparisons, licensed location photography, and official destination or operator
          references are human-edited. First-hand experience is labeled only where the editor has
          a real personal connection to the place.
        </p>
      </div>
      <Link
        href="/editorial-policy#research-method"
        className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-stone-800 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-800"
      >
        How research and AI assistance are handled
      </Link>
    </section>
  );
}

