import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactButton } from './components/ContactButton';
import { FadeIn } from './components/FadeIn';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Contact Section Anchor / Footer */}
      <footer
        id="contact"
        className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 sm:px-12 py-16 flex flex-col sm:flex-row items-center justify-between gap-8 z-20"
      >
        <FadeIn delay={0} y={20} className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-2xl font-black uppercase tracking-tight text-white">
            Rusan
          </span>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/60 max-w-sm">
            Crafting intelligent automations and high-impact modern websites that empower digital growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={20} className="flex flex-col sm:flex-row items-center gap-6">
          <ContactButton href="mailto:shahriar.rusan12@gmail.com" />
          <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-wider">
            © {new Date().getFullYear()} Rusan. All rights reserved.
          </span>
        </FadeIn>
      </footer>
    </div>
  );
};

export default App;
