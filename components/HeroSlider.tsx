'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: '/images/cities/seoul-gyeongbokgung.jpg',
    title: 'THE SOUL OF ASIA',
    subtitle: 'Discover the Soul of Korea',
  },
  {
    image: '/images/cities/seoraksan.jpg',
    title: 'NATURE LUXURY',
    subtitle: 'Beyond Seoul',
  },
  {
    image: '/images/cities/haeundae.jpg',
    title: 'COASTAL MAJESTY',
    subtitle: 'Where mountains meet the sea',
  },
  {
    image: '/images/cities/jeju.jpg',
    title: 'VOLCANIC WONDERS',
    subtitle: 'A forgotten paradise',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index <= 1} // 우선 로드: 첫 2개 이미지만
            sizes="100vw"
          />
          {/* Subtle Dark Overlay for white text readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center p-8 md:p-16">
        <div className="max-w-4xl w-full text-center flex flex-col items-center">
          {/* Small Label */}
          <span className="text-brand-accent tracking-[0.3em] text-xs font-semibold uppercase mb-4 drop-shadow-md">
            Curated Travel Experiences
          </span>

          {/* Epic Serif Headline */}
          <h1 className="font-editorial text-6xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-xl">
            {slides[currentSlide].title.split(' ')[0]}
            <span className="block italic text-white/90 text-4xl md:text-6xl lg:text-7xl mt-[-0.2em] drop-shadow-lg">
              {slides[currentSlide].title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light font-medium tracking-wide drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>

          {/* Minimalist CTA */}
          <div className="bg-white hover:bg-brand-accent text-black hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap shadow-xl">
            Explore Now
          </div>
        </div>
      </div>

      {/* Minimal Navigation Arrows */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4 hidden md:flex">
        <button
          onClick={prevSlide}
          className="text-foreground/50 hover:text-foreground transition-colors p-2"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m4 4h18" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-foreground/50 hover:text-foreground transition-colors p-2"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:bottom-1/2 md:-translate-y-1/2 md:translate-x-0 z-30 flex md:flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide ? 'bg-brand-accent w-8 md:w-2 md:h-8' : 'border border-foreground/30 hover:bg-foreground/20 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
