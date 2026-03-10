'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 이미지들
  const slides = [
    {
      image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg',
      title: 'Discover Hidden Korea',
      subtitle: 'Beyond Seoul'
    },
    {
      image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg',
      title: 'Discover Hidden Korea',
      subtitle: 'Beyond Seoul'
    },
    {
      image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg',
      title: 'Discover Hidden Korea',
      subtitle: 'Beyond Seoul'
    },
    {
      image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg',
      title: 'Discover Hidden Korea',
      subtitle: 'Beyond Seoul'
    }
  ];

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 슬라이드 이동 함수
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 다음/이전 슬라이드
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt="Discover Hidden Korea"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 border border-white/30 shadow-lg">
              Explore Regions
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Tier Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Explore Korean Cities
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            From ancient capitals to coastal paradises
          </p>

          {/* Tier 1: Large Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <span className="text-3xl">🏆</span> Tier 1: Must-Visit Cities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Seoul', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
                { name: 'Busan', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
                { name: 'Jeju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
                { name: 'Gyeongju', tier: 'Tier 1', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg' }
              ].map((city, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border border-gray-700"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-2xl font-bold text-white mb-2">{city.name}</h4>
                      <span className="inline-block text-sm text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full">
                        {city.tier}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Medium Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <span className="text-3xl">⭐</span> Tier 2: Popular Cities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Jeonju', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
                { name: 'Daegu', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
                { name: 'Gangneung', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
                { name: 'Gwangju', tier: 'Tier 2', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg' }
              ].map((city, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-gray-700"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-xl font-bold text-white mb-1">{city.name}</h4>
                      <span className="inline-block text-xs text-amber-300 bg-amber-950/80 px-2 py-1 rounded-full">
                        {city.tier}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3-4: Small Cards */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <span className="text-3xl">🌱</span> Tier 3-4: Hidden Gems
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: 'Suncheon', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
                { name: 'Tongyeong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' },
                { name: 'Andong', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg' },
                { name: 'Pyeongchang', tier: 'Tier 3', image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg' },
                { name: 'Yeosu', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg' },
                { name: 'Jinju', tier: 'Tier 4', image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg' }
              ].map((city, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-700"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-sm font-semibold text-white mb-1">{city.name}</h4>
                      <span className="inline-block text-xs text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded-full">
                        {city.tier}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Latest Posts
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16">
              Discover our newest travel stories
            </p>

            {/* Latest Posts Slider */}
            <div className="relative">
              {/* Posts Container */}
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
                {[
                  {
                    title: 'Seoul: Ancient Meets Modern',
                    image: '/images/Gemini_Generated_Image_8lyf5h8lyf5h8lyf.jpg',
                    date: 'March 10, 2026',
                    excerpt: 'Experience the perfect blend of tradition and innovation in Korea\'s vibrant capital.'
                  },
                  {
                    title: 'Busan Coastal Paradise',
                    image: '/images/Gemini_Generated_Image_8p1cib8p1cib8p1c.jpg',
                    date: 'March 9, 2026',
                    excerpt: 'Discover stunning beaches, fresh seafood, and vibrant coastal culture.'
                  },
                  {
                    title: 'Jeju Volcanic Wonders',
                    image: '/images/Gemini_Generated_Image_mzbczumzbczumzbc.jpg',
                    date: 'March 8, 2026',
                    excerpt: 'Explore Korea\'s volcanic paradise with dramatic landscapes and natural beauty.'
                  },
                  {
                    title: 'Gyeongju Ancient Heritage',
                    image: '/images/Gemini_Generated_Image_wsb8jpwsb8jpwsb8.jpg',
                    date: 'March 7, 2026',
                    excerpt: 'Walk through Korea\'s ancient capital filled with temples and historical treasures.'
                  }
                ].map((post, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer snap-start border border-gray-700"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-orange-400 font-medium mb-2 block">
                        {post.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900/90 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-700 z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-900/90 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-700 z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Popular Searches Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Start exploring with trending searches
            </p>

            {/* Search Bar */}
            <div className="relative mb-12">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-6 py-4 pr-12 rounded-full bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-orange-500 focus:outline-none transition-colors text-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Popular Search Tags */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  '#Seoul',
                  '#Busan',
                  '#Jeju',
                  '#HiddenGems',
                  '#TraditionalMarkets',
                  '#KoreanCulture',
                  '#CoastalParadise',
                  '#AncientHeritage',
                  '#IslandGetaway',
                  '#MountainAdventure',
                  '#TempleTours',
                  '#LocalCuisine'
                ].map((tag, index) => (
                  <button
                    key={index}
                    className="px-5 py-2.5 bg-gray-700 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-all hover:scale-105 border border-gray-600 hover:border-orange-500"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-400 mb-4">
              Discover the hidden beauty of Korea beyond Seoul
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 18.84-7.314 22-20.001-20.373-13.284-37.665-31.091-39.664-8.317.653-6.637 1.188-9.636 2.504-9.636 2.518 0 .976-.032 1.849-.093 2.653-.17 3.096-2.058 6.004-3.471 9.693-3.883l2.24-1.423c-.058.451-.09.912-.09 1.374v18.372c0 .458.032.916.09 1.374z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 6.066 2.55 7.95 5.426 7.95 5.426 1.246 0 2.476-.195 3.603-.553.858-.358 1.65-.83 2.22-1.464 2.22-.508 0-1.024-.12-1.55-.353-.705-.46-1.26-1.058-1.636-1.824-.49-1.07-.712-2.194-.68-3.322.105-.75.284-1.47.46-2.19.702-2.554 1.733-2.957 3.35-4.822 6.485-4.822.376 0 .624-.028.92-.083.24-.348.966-.766 1.69-1.592 2.368-2.55.362-.53.616-1.087.97-1.693 1.29.087-.09.168-.16.348-.24.528-.247.025-.002.05-.025.075-.025.108 0 .04.02.082.028.124.06.24.06.47.38.763.63 1.098.348.664.557 1.37.557 2.095.557 2.095 0 3.792-.616 5.243-1.635.683.752 1.18 1.525 1.394 2.34.347.65.742.935 1.525.935 2.34 0 8.547-6.93 15.5-15.5 15.5-.078 0-.155-.002-.233-.005-.456-1.607-4.886-6.298-8.403-11.792-8.403-5.394 0-10.185 4.306-10.185 10.185v.327c0 1.363 1.106 2.468 2.468 2.468.678 0 1.32-.276 1.78-.724.458-1.09.795-2.49.697-4.075 1.636-6.352 1.636-3.495 0-6.753-1.39-9.21-3.69.254-.607 1.292-1.058 2.748-1.058 4.293 0 1.386.257 2.6.733.72 3.742l-2.445 2.05c-.054-.456-.09-.917-.09-1.387v-10.29c0-1.503.613-2.862 1.603-3.846.566-.966 1.32-1.555 2.15-1.555 2.485 0 .783-.078 1.505-.22 2.178-.615-.966-.513-1.752-1.23-2.29-2.12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 .529 4.863.529 10.854c0 1.555.407 2.998 1.098 4.237-.002.032-.005.064-.007.096-.002.06.004.12.004.18 0 .018.001.036.002.054.002.082.248 1.332 1.003 2.543 2.254 3.494 1.252.947 2.578 1.69 4.013 1.735 5.288.044 1.088.076 2.18.076 3.277v.336c0 .857-.353 1.633-.92 2.2.564.566 1.078 1.287 1.734 2.15 1.734 3.258 0 6.32-2.612 6.32-6.32 0-.046-.003-.09-.008-.136-.018-1.843-4.563-5.922-7.548-10.637-7.548-4.785 0-8.768 3.863-8.768 8.632 0 .685.056 1.353.16 2.002v.32c0 2.39 1.94 4.33 4.33 4.33.653 0 1.236-.198 1.803-.534 2.412-.67.752-1.318 1.45-2.908 1.45-4.56 0-3.28-2.66-5.938-5.94-5.938-1.236 0-2.39.357-3.413.967l-2.226 1.848c.063.265.103.532.103.812v.247c0 2.39 1.94 4.33 4.33 4.33.653 0 1.236-.198 1.803-.534 2.412-.67.752-1.318 1.45-2.908 1.45-4.56 0-3.28-2.66-5.938-5.94-5.938z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 RoadToKorea. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
