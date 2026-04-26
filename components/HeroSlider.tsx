'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  mood: string;
}

const slides: Slide[] = [
  {
    image: '/images/destinations/Seoul_A_breathtaking_ultrapremium_architectural_photogra_c26949d07b.jpeg',
    title: 'Seoul',
    subtitle: 'Flagship energy, deep food neighborhoods, and a city that rewards first-timers fast.',
    mood: 'Tier 1 Icon',
  },
  {
    image: '/images/destinations/Busan_A_breathtaking_cinematic_travel_photograph_of_haeu_e9b5575ea7.jpeg',
    title: 'Busan',
    subtitle: 'Sea-facing momentum, train-friendly movement, and a softer rhythm than the capital.',
    mood: 'Coastal Anchor',
  },
  {
    image: '/images/destinations/Jeju_A_dynamic_highend_editorial_lifestyle_photograph_o_b8079a0073.jpeg',
    title: 'Jeju',
    subtitle: 'Volcanic landscapes, slower pacing, and the kind of trip people romanticize for years.',
    mood: 'Island Escape',
  },
  {
    image: '/images/destinations/Wonju_A_breathtaking_professional_national_geographicsty_ddc24bc0c5.jpeg',
    title: 'Wonju',
    subtitle: 'A quieter kind of Korea where design, mountain air, and local pace matter more than hype.',
    mood: 'Quiet Detour',
  },
];

const routeCards = [
  {
    href: '/tier-1/cities',
    label: 'For First Trips',
    title: 'Start with Icons',
    copy: 'Major cities with enough signal, infrastructure, and payoff to anchor a full Korea route.',
  },
  {
    href: '/tier-2/cities',
    label: 'For Repeat Visits',
    title: 'Move into Hubs',
    copy: 'Regional bases with stronger neighborhood personality and slower, more grounded itineraries.',
  },
  {
    href: '/tier-4/cities',
    label: 'For Local Texture',
    title: 'Take the Detours',
    copy: 'Smaller places where the trip feels less algorithmic and more like a personal discovery.',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f3ec_0%,#f3ede4_44%,#efe7db_100%)] px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_right,rgba(143,91,46,0.18),transparent_36%),radial-gradient(circle_at_top_left,rgba(17,24,39,0.12),transparent_28%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-stone-200/80 bg-white/72 p-8 shadow-[0_30px_80px_rgba(34,30,25,0.08)] backdrop-blur md:p-10">
            <div>
              <span className="inline-flex rounded-full border border-stone-300 bg-stone-100/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-stone-600">
                RoadToKorea Field Guide
              </span>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] text-stone-950 md:text-7xl">
                Travel Korea by trip depth,
                <span className="block text-stone-500">not by generic top 10 lists.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
                This is a curated route system for choosing the right city before you waste time on
                interchangeable recommendations. Start with the big names, then branch into the places
                that actually fit your pace, curiosity, and trip style.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/tier-1/cities"
                  className="rounded-full bg-stone-950 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  Enter The Icons
                </Link>
                <Link
                  href="/tier-4/cities"
                  className="rounded-full border border-stone-300 bg-white/80 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-800 transition-transform duration-300 hover:-translate-y-0.5 hover:border-stone-900"
                >
                  See Quiet Detours
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50/90 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Best For
                </p>
                <p className="mt-3 font-serif text-2xl text-stone-900">First Trips</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Start with places that justify the flight and simplify planning.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/90 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Best For
                </p>
                <p className="mt-3 font-serif text-2xl text-stone-900">Return Visits</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Move beyond headline cities into regional bases with stronger character.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/90 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                  Best For
                </p>
                <p className="mt-3 font-serif text-2xl text-stone-900">Local Texture</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Build routes that feel discovered instead of copied from a template.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-stone-900/10 bg-stone-950 shadow-[0_35px_90px_rgba(34,30,25,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%)]" />

            <div className="relative h-[32rem] md:h-[42rem]">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index <= 1}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.08),rgba(14,11,8,0.72))]" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 md:p-8">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur">
                  {activeSlide.mood}
                </span>
                <div className="flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to ${slide.title}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="max-w-xl rounded-[1.75rem] border border-white/15 bg-black/30 p-6 backdrop-blur-xl md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-200">
                    Current Mood
                  </p>
                  <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">{activeSlide.title}</h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-stone-200 md:text-base">
                    {activeSlide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {routeCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.75rem] border border-stone-200/80 bg-white/70 p-6 shadow-[0_18px_48px_rgba(34,30,25,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-stone-900/25 hover:bg-white"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                {card.label}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-stone-950 transition-colors group-hover:text-stone-700">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{card.copy}</p>
              <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-stone-900">
                Explore Route
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
