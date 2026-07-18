'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type {
  CitySupportOfficialReference,
  CitySupportVideoReference,
} from '@/data/citySupportProfiles';

interface CityMediaReferencesProps {
  officialReferences?: CitySupportOfficialReference[];
  videoReferences?: CitySupportVideoReference[];
  excludedImageUrls?: string[];
}

export default function CityMediaReferences({
  officialReferences = [],
  videoReferences = [],
  excludedImageUrls = [],
}: CityMediaReferencesProps) {
  const [activeVideo, setActiveVideo] = useState<CitySupportVideoReference | null>(null);

  const hasMedia = officialReferences.length > 0 || videoReferences.length > 0;
  const excludedImages = useMemo(() => new Set(excludedImageUrls), [excludedImageUrls]);
  const embedUrl = useMemo(() => {
    if (!activeVideo) return null;
    return `https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`;
  }, [activeVideo]);

  if (!hasMedia) return null;

  return (
    <>
      <div className="mt-8 grid gap-4 xl:grid-cols-2">
        {officialReferences.map((reference) => (
          <article
            key={reference.title}
            className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(34,30,25,0.06)]"
          >
            {!excludedImages.has(reference.image) && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={reference.image}
                  alt={reference.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.03),rgba(17,17,17,0.44))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
                  {reference.eyebrow}
                </div>
              </div>
            )}
            <div className="p-6">
              <h3 className="font-serif text-2xl leading-tight text-stone-950">{reference.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{reference.body}</p>
              <p className="mt-4 rounded-[1.25rem] border border-stone-200 bg-stone-50/90 p-4 text-sm leading-7 text-stone-600">
                {reference.usageNote}
              </p>
              <a
                href={reference.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 transition-colors hover:text-stone-800"
              >
                {reference.licenseLabel} · {reference.sourceLabel}
              </a>
            </div>
          </article>
        ))}
      </div>

      {videoReferences.length > 0 ? (
        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {videoReferences.map((reference) => (
            <article
              key={reference.youtubeId}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(248,242,234,0.88),rgba(255,255,255,0.98))] shadow-[0_20px_60px_rgba(34,30,25,0.06)]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(reference)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={`https://i.ytimg.com/vi/${reference.youtubeId}/hqdefault.jpg`}
                    alt={reference.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.56))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
                    {reference.eyebrow}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-stone-950 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105">
                      <span className="ml-1 text-lg">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-tight text-stone-950">{reference.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{reference.body}</p>
                  <p className="mt-4 rounded-[1.25rem] border border-stone-200 bg-white/85 p-4 text-sm leading-7 text-stone-600">
                    {reference.whyWatch}
                  </p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                    YouTube · {reference.channelLabel}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      ) : null}

      {activeVideo && embedUrl ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[1.75rem] bg-stone-950 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Local video reference
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={embedUrl}
                title={activeVideo.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-white/80">
              <p>{activeVideo.whyWatch}</p>
              <a
                href={activeVideo.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white"
              >
                Open on YouTube
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
