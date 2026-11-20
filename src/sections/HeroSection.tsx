import React, { useRef, useState, useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ultra-responsive 60fps/120fps RAF Lerp scroll driver for mobile
  // Eliminates all Framer Motion scroll lag & WebKit sticky jitter.
  // Directly updates GPU matrix on native display refresh cadence.
  useEffect(() => {
    if (!isMobile) return;

    let rafId: number;
    let currentY = 0;
    let targetY = 0;
    let isRunning = true;

    const onScroll = () => {
      const scrollY = window.scrollY;
      // Snappy responsiveness: completes the full lift-off (-620px) within 320px of scroll
      const progress = Math.min(1, Math.max(0, scrollY / 320));
      targetY = progress * -620;
    };

    const updateLoop = () => {
      if (!isRunning) return;

      // 0.22 lerp factor: ultra-snappy thumb tracking with buttery interpolation
      currentY += (targetY - currentY) * 0.22;
      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }

      if (robotRef.current) {
        robotRef.current.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0)`;
      }

      if (bottomRef.current) {
        // Fade out bottom bar cleanly over the first 160px of scroll
        const opacity = Math.max(0, 1 - Math.abs(currentY) / 250);
        bottomRef.current.style.opacity = opacity.toFixed(3);
        bottomRef.current.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  // MOBILE VIEW: 60/120fps Hardware-Accelerated Experience
  if (isMobile) {
    return (
      <section
        ref={containerRef}
        className="relative w-full select-none bg-[#0C0C0C] h-[160dvh]"
      >
        <div className="sticky top-0 h-dvh w-full flex flex-col justify-between overflow-x-clip select-none">
          {/* Top Navbar */}
          <header className="w-full px-4 pt-4 z-20">
            <nav className="flex items-center justify-center gap-8 mx-auto">
              <a
                href="#about"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm transition-opacity duration-200 hover:opacity-70"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm transition-opacity duration-200 hover:opacity-70"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm transition-opacity duration-200 hover:opacity-70"
              >
                Contact
              </a>
            </nav>
          </header>

          {/* Hero Heading - Centered underneath robot */}
          <div className="w-full px-4 flex items-center justify-center -my-auto z-0">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11vw] text-center select-none pointer-events-none mt-4">
              Hi, i’m rusan
            </h1>
          </div>

          {/* Hero Portrait with Butter-Smooth Hardware RAF Transform */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div
              ref={robotRef}
              className="relative w-[280px] sm:w-[360px] flex items-center justify-center transform-gpu will-change-transform"
            >
              <picture>
                <source srcSet="/assets/rusan-avatar.webp" type="image/webp" />
                <img
                  src="/assets/rusan-avatar.png"
                  alt="Rusan - 3D Creator Portrait"
                  className="w-full h-auto object-contain drop-shadow-none select-none pointer-events-none"
                  draggable={false}
                />
              </picture>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            ref={bottomRef}
            className="w-full px-6 pb-7 flex items-end justify-between z-20 transform-gpu"
          >
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] text-xs">
              a creator driven by building smart automations and modern websites
              that make businesses stand out
            </p>
            <ContactButton />
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP: Full interactive 3D Magnet experience preserved intact
  return (
    <section
      ref={containerRef}
      className="relative w-full select-none bg-[#0C0C0C] h-screen"
    >
      <div className="h-screen w-full flex flex-col justify-between overflow-x-clip select-none">
        {/* Top Navbar */}
        <FadeIn delay={0} y={-20} className="w-full z-20">
          <header className="w-full px-4 sm:px-6 pt-4 sm:pt-6">
            <nav className="flex items-center justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-16 mx-auto">
              <a
                href="#about"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70"
              >
                Contact
              </a>
            </nav>
          </header>
        </FadeIn>

        {/* Hero Heading */}
        <div className="w-full px-4 sm:px-8 flex items-center justify-center -my-auto z-0 overflow-hidden">
          <FadeIn delay={0.15} y={40} className="w-full text-center flex justify-center">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] xl:text-[14.5vw] mt-4 sm:mt-0 md:-mt-5 text-center select-none pointer-events-none"
            >
              Hi, i’m rusan
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait with Magnet Interaction (Desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:-translate-y-[46%] z-10 pointer-events-none">
          <FadeIn delay={0.6} y={30} className="pointer-events-auto">
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/rusan-avatar.webp" type="image/webp" />
                  <img
                    src="/assets/rusan-avatar.png"
                    alt="Rusan - 3D Creator Portrait"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none pointer-events-none"
                    draggable={false}
                  />
                </picture>
              </div>
            </Magnet>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="w-full px-6 md:px-12 pb-7 sm:pb-8 md:pb-10 flex items-end justify-between z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a creator driven by building smart automations and modern websites
              that make businesses stand out
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
