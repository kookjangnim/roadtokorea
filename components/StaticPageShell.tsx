import type { ReactNode } from 'react';
import Link from 'next/link';
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
  const trustNotes = [
    'Route-first editorial structure',
    'City chapters linked from travel paths',
    'Corrections and privacy contact available',
  ];

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-stone-900">
      <section className="border-b border-stone-200 bg-white px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Site basics
            </p>
            <nav className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Editorial Policy', href: '/editorial-policy' },
                { label: 'Routes', href: '/routes' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-w-[9rem] items-center justify-between border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-white lg:min-w-0"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Open
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-500">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[0.96] text-stone-950 md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700 md:text-lg">
              {lede}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article className="border border-stone-200/80 bg-white p-6 shadow-sm md:p-10">
            <div className="prose prose-stone max-w-none prose-p:leading-8 prose-li:leading-8 prose-headings:font-serif prose-headings:text-stone-950 prose-a:font-semibold prose-a:text-stone-950 prose-strong:text-stone-950">
              {children}
            </div>
          </article>

          <aside className="space-y-5">
            <section className="border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Reader signals
              </p>
              <div className="mt-5 space-y-3">
                {trustNotes.map((note) => (
                  <div
                    key={note}
                    className="border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-stone-200 bg-[#171411] p-6 text-white shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                Start reading
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">
                Move from policy pages back into the guide archive.
              </h2>
              <div className="mt-5 grid gap-3">
                <Link
                  href="/routes"
                  className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-stone-100 transition-colors hover:bg-white/[0.12]"
                >
                  Browse route archive
                </Link>
                <Link
                  href="/updated-cities"
                  className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-stone-100 transition-colors hover:bg-white/[0.12]"
                >
                  Open city articles
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white px-4 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm leading-7 text-stone-600 md:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Editorial purpose
            </p>
            <p className="mt-2">
              Route logic, city context, and practical stopover decisions are kept visible across
              the site.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Transparency
            </p>
            <p className="mt-2">
              Contact and privacy details are available from every basic site page.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Navigation
            </p>
            <p className="mt-2">
              Readers can return to routes or city articles without landing in a dead end.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
