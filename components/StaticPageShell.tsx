import type { ReactNode } from 'react';
import Footer from '@/components/Footer';

interface StaticPageShellProps {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}

export default function StaticPageShell({
  eyebrow,
  title,
  lede,
  children,
}: StaticPageShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f2ea_0%,#f5ede4_52%,#efe7db_100%)] text-stone-900">
      <section className="border-b border-stone-200/80 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.96] text-stone-950 md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700 md:text-lg">
            {lede}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200/80 bg-white/85 p-6 shadow-[0_30px_90px_rgba(34,30,25,0.07)] backdrop-blur md:p-10">
          <div className="prose prose-stone max-w-none prose-p:leading-8 prose-li:leading-8 prose-headings:font-serif prose-headings:text-stone-950 prose-strong:text-stone-950">
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
