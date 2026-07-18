import Link from 'next/link';
import type { EditorialExperienceNote as EditorialExperienceNoteData } from '@/data/editorialExperienceNotes';

interface EditorialExperienceNoteProps {
  note: EditorialExperienceNoteData;
}

export default function EditorialExperienceNote({ note }: EditorialExperienceNoteProps) {
  return (
    <section
      id="editor-experience"
      className="mb-12 border-b border-stone-200 pb-10"
      aria-labelledby="editor-experience-title"
    >
      <div className="rounded-[1.75rem] border border-amber-200/70 bg-[linear-gradient(135deg,#fffaf0,#ffffff)] p-6 shadow-sm md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-800">
          {note.eyebrow}
        </p>
        <h2
          id="editor-experience-title"
          className="mt-3 max-w-4xl font-serif text-3xl leading-tight text-stone-950 md:text-5xl"
        >
          {note.title}
        </h2>
        <blockquote className="mt-6 border-l-2 border-amber-700 pl-5 font-serif text-2xl leading-relaxed text-stone-900">
          “{note.quote}”
        </blockquote>
        <p className="mt-6 max-w-4xl text-base leading-8 text-stone-700">{note.context}</p>
        <div className="mt-6 border border-stone-200 bg-white px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-600">
            Experience and verification are kept separate
          </p>
          <p className="mt-2 text-sm leading-7 text-stone-700">{note.verification}</p>
        </div>
        <Link
          href="/editorial-policy#research-method"
          className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-stone-800 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-800"
        >
          Read the research and AI policy
        </Link>
      </div>
    </section>
  );
}

