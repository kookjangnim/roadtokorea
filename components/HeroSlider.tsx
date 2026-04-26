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
    image: '/images/destinations/Seoul_A_breathtaking_ultrapremium_architectural_photogra_c26949d07b.jpeg',
    title: 'THE SOUL OF ASIA',
    subtitle: 'Discover the traditional majesty of Seoul',
  },
  {
    image: '/images/destinations/Busan_A_breathtaking_cinematic_travel_photograph_of_haeu_e9b5575ea7.jpeg',
    title: 'COASTAL CHARM',
    subtitle: 'Where the train meets the sparkling ocean in Busan',
  },
  {
    image: '/images/destinations/Jeju_A_dynamic_highend_editorial_lifestyle_photograph_o_b8079a0073.jpeg',
    title: 'ENDLESS SPRING',
    subtitle: 'Vibrant canola fields beneath Hallasan',
  },
  {
    image: '/images/destinations/Wonju_A_breathtaking_professional_national_geographicsty_ddc24bc0c5.jpeg',
    title: 'NATURE LUXURY',
    subtitle: 'Modern innovation framed by ancient peaks',
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

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white pt-12 pb-16 px-4 md:px-12 flex flex-col items-center">
      
      {/* Editorial Header */}
      <div className="w-full max-w-7xl mx-auto mb-10 flex flex-col items-center text-center">
        <span className="text-gray-500 tracking-[0.3em] text-xs font-semibold uppercase mb-4">
          Curated Travel Experiences
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-4 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-light tracking-wide max-w-2xl">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      {/* Magazine Style Image Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="w-full h-full animate-ken-burns origin-center transform-gpu">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={index <= 1}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        ))}
        
        {/* Navigation Overlays (Subtle) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full backdrop-blur-md transition-all shadow-md focus:outline-none"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full backdrop-blur-md transition-all shadow-md focus:outline-none"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Minimal Indicators */}
      <div className="flex gap-4 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full h-2 ${
              index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
