import Image from "next/image";
import Link from "next/link";

export default function ThemePreviewPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0A0D14] text-[#EFEAE1] font-sans selection:bg-[#8C2727] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518105749138-04ea4f9eb66a?q=80&w=2670&auto=format&fit=crop"
            alt="Gyeongbokgung Palace, Korea"
            fill
            className="object-cover object-bottom opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/80" />
        </div>

        {/* Top Navigation */}
        <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-12 py-8 mix-blend-difference">
          <div className="text-xl font-bold tracking-widest uppercase text-[#F2D780]">
            RoadToKorea<span className="text-sm align-top">&copy;</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide">
            <Link href="#" className="hover:text-[#8C2727] transition-colors">Destinations</Link>
            <Link href="#" className="hover:text-[#8C2727] transition-colors">Experiences</Link>
            <Link href="#" className="hover:text-[#8C2727] transition-colors">Journal</Link>
          </div>
          <div className="w-8 h-8 rounded-full border border-[#EFEAE1] flex items-center justify-center">
            <div className="w-1 h-1 bg-[#EFEAE1] rounded-full"></div>
          </div>
        </nav>

        {/* Giant Typography */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          {/* Main Solid Text Layer */}
          <h1 
            className="text-[12vw] font-black tracking-tighter leading-[0.8] select-none text-[#FDFBFA] opacity-90 drop-shadow-2xl mix-blend-overlay text-center"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            THE SOUL<br/>OF ASIA
          </h1>
          {/* Outline Text Layer */}
          <h1 
            className="absolute text-[12vw] font-black tracking-tighter leading-[0.8] select-none text-transparent text-center"
            style={{ 
              WebkitTextStroke: "1px rgba(253, 251, 250, 0.5)",
              fontFamily: "'Geist', sans-serif",
              marginTop: "-1%"
            }}
          >
            THE SOUL<br/>OF ASIA
          </h1>

          <div className="mt-16 pointer-events-auto z-30">
            <Link 
              href="/" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-transparent text-[#EFEAE1] border border-[#EFEAE1]/30 rounded hover:bg-[#8C2727] hover:border-[#8C2727] hover:tracking-[0.3em]"
            >
              Begin Journey
            </Link>
          </div>
        </div>

        {/* Removed the blinking scroll indicator, replaced with a static subtle line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30" />
        </div>
      </section>

      {/* 2. DISCOVER REGIONS SECTION (Landing Page formatting demo) */}
      <section className="relative w-full py-32 px-12 bg-[#0A0D14]">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] text-[#8C2727] uppercase mb-4">Chapter 01</h2>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight" style={{ fontFamily: "var(--font-cormorant), serif" }}>Curated Destinations</h3>
          </div>
          <Link href="#" className="hidden md:block text-xs tracking-widest uppercase hover:text-[#8C2727] transition-colors border-b border-transparent hover:border-[#8C2727] pb-1">
            View All Regions &rarr;
          </Link>
        </div>

        {/* Asymmetrical Grid matching the cinematic vibe */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Featured Card (SEOUL) */}
          <div className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto md:h-[600px] rounded-lg overflow-hidden cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1548231126-5b4860d5eefa?q=80&w=2670&auto=format&fit=crop"
              alt="Seoul Nightscape"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-2">Capital City</span>
              {/* Layered Text inside a card */}
              <div className="relative">
                <h4 className="text-6xl md:text-8xl font-black tracking-tighter text-white opacity-40 mix-blend-overlay">SEOUL</h4>
                <h4 className="absolute top-0 left-0 text-6xl md:text-8xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>SEOUL</h4>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Small Card 1 (BUSAN) */}
            <div className="group relative h-[284px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1616174542289-4bc25edeb86c?q=80&w=2670&auto=format&fit=crop"
                alt="Busan Beach"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-1">Coastal Hub</span>
                <div className="relative">
                  <h4 className="text-4xl font-black tracking-tighter text-white opacity-30 mix-blend-overlay">BUSAN</h4>
                  <h4 className="absolute top-0 left-0 text-4xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>BUSAN</h4>
                </div>
              </div>
            </div>

            {/* Small Card 2 (JEJU) */}
            <div className="group relative h-[284px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1541094363242-736b4d32a4e2?q=80&w=2669&auto=format&fit=crop"
                alt="Jeju Nature"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-1">Volcanic Island</span>
                <div className="relative">
                  <h4 className="text-4xl font-black tracking-tighter text-white opacity-30 mix-blend-overlay">JEJU</h4>
                  <h4 className="absolute top-0 left-0 text-4xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>JEJU</h4>
                </div>
              </div>
            </div>
          </div>
          
          {/* New Row of Images */}
          <div className="md:col-span-4 flex flex-col gap-8 mt-8 md:mt-0">
            {/* Small Card 3 (GYEONGJU) */}
            <div className="group relative h-[284px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1577413470769-cf78749dc57d?q=80&w=2670&auto=format&fit=crop"
                alt="Gyeongju Traditional Roof"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-1">Ancient Capital</span>
                <div className="relative">
                  <h4 className="text-4xl font-black tracking-tighter text-white opacity-30 mix-blend-overlay">GYEONGJU</h4>
                  <h4 className="absolute top-0 left-0 text-3xl md:text-4xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>GYEONGJU</h4>
                </div>
              </div>
            </div>

            {/* Small Card 4 (JEONJU) */}
            <div className="group relative h-[284px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1629807573934-1fd41cbf67e9?q=80&w=2670&auto=format&fit=crop"
                alt="Jeonju Hanok Village"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-1">Hanok Village</span>
                <div className="relative">
                  <h4 className="text-4xl font-black tracking-tighter text-white opacity-30 mix-blend-overlay">JEONJU</h4>
                  <h4 className="absolute top-0 left-0 text-4xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>JEONJU</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto md:h-[600px] rounded-lg overflow-hidden cursor-pointer mt-8 md:mt-0">
             <Image
              src="https://images.unsplash.com/photo-1603517208170-c75240bc3d20?q=80&w=2670&auto=format&fit=crop"
              alt="Gangneung Coast"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] uppercase tracking-widest text-[#F2D780] block mb-2">Eastern Coastline</span>
              <div className="relative">
                <h4 className="text-6xl md:text-8xl font-black tracking-tighter text-white opacity-40 mix-blend-overlay">GANGNEUNG</h4>
                <h4 className="absolute top-0 left-0 text-5xl md:text-8xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>GANGNEUNG</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
