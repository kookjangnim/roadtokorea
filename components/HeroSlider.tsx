'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
  };
}

interface HeroSliderProps {
  posts: WPPost[];
}

export default function HeroSlider({ posts }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback slides in case no posts are available
  const displaySlides = posts.length > 0 ? posts.slice(0, 4) : [];

  const nextSlide = () => {
    if (displaySlides.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
  };

  const prevSlide = () => {
    if (displaySlides.length <= 1) return;
    setCurrentSlide((prev) => (prev === 0 ? displaySlides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    if (displaySlides.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [displaySlides.length]);

  if (displaySlides.length === 0) {
    return (
      <section className="relative h-[90vh] w-full bg-black flex items-center justify-center overflow-hidden">
        <h1 className="text-white text-2xl font-editorial tracking-widest">No Destinations Available</h1>
      </section>
    );
  }

  return (
    <section className="relative h-[90vh] w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image Slider */}
      {displaySlides.map((post, index) => {
        // 백엔드 본문 파싱으로 첫 이미지 URL 추출 fallback 로직
        const embeddedImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const fallbackImagePattern = /<img[^>]+src="([^">]+)"/;
        const match = post.excerpt?.rendered?.match(fallbackImagePattern);
        const imageUrl = embeddedImage || (match ? match[1] : '/images/placeholder.jpg');

        const titleText = post.title.rendered.replace('Travel Guide: The Hidden Charms of ', '').trim();
        const splitIndex = Math.ceil(titleText.length / 2);
        const firstHalf = titleText.substring(0, splitIndex);
        const secondHalf = titleText.substring(splitIndex);
        
        // Find tier from taxonomy terms
        let tierSlug = 'tier-4';
        const terms = post._embedded?.['wp:term'] || [];
        for (const termGroup of terms) {
          for (const term of termGroup) {
            if (term.taxonomy === 'category' && term.slug.startsWith('tier-')) {
              tierSlug = term.slug;
            }
          }
        }

        return (
          <div
            key={post.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            <Image
              src={imageUrl}
              alt={post.title.rendered}
              fill
              className="object-cover object-center"
              priority={index <= 1} // 우선 로드: 첫 2개 이미지만
              sizes="100vw"
            />
            {/* Subtle Dark Overlay for white text readability */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Hero Content Overlay */}
            <div className={`absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center p-8 md:p-16 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <div className="max-w-4xl w-full text-center flex flex-col items-center">
                {/* Small Label */}
                <span className="text-brand-accent tracking-[0.3em] text-xs font-semibold uppercase mb-4 drop-shadow-md">
                  Curated Travel Experiences
                </span>

                {/* Epic Serif Headline */}
                <h1 className="font-editorial text-6xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-xl inline-block">
                  {firstHalf}
                  <span className="block italic text-white/90 text-4xl md:text-6xl lg:text-7xl mt-[-0.2em] drop-shadow-lg">
                    {secondHalf}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light font-medium tracking-wide drop-shadow-lg">
                  Explore the authentic beauty of {titleText}
                </p>

                {/* Minimalist CTA */}
                <Link href={`/${tierSlug}/${post.slug}`} className="bg-white hover:bg-brand-accent text-black hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap shadow-xl">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      {/* Minimal Navigation Arrows */}
      {displaySlides.length > 1 && (
        <div className="absolute bottom-10 right-10 z-30 flex gap-4 hidden md:flex">
          <button
            onClick={prevSlide}
            className="text-white/50 hover:text-white transition-colors p-2"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m4 4h18" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="text-white/50 hover:text-white transition-colors p-2"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      )}

      {/* Dot Indicators */}
      {displaySlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:bottom-1/2 md:-translate-y-1/2 md:translate-x-0 z-30 flex md:flex-col gap-3">
          {displaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide ? 'bg-brand-accent w-8 md:w-2 md:h-8' : 'border border-white/30 hover:bg-white/20 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
