import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText =
    "i build smart automations and modern websites that help businesses save time, work more efficiently, and create a stronger digital presence. I enjoy turning ideas into practical digital experiences that are simple, effective, and built to make an impact. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-10 md:px-16 py-20 overflow-hidden"
    >
      {/* Decorative 3D Elements */}
      {/* Top-Left: 3D Iridescent Lego Brick */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <img
            src="/assets/about-3d-lego.png"
            alt="3D Iridescent Lego Brick"
            className="w-[120px] sm:w-[165px] md:w-[220px] h-auto object-contain opacity-40 sm:opacity-45 transition-opacity duration-500 drop-shadow-none md:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Holographic AI Brain */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <img
            src="/assets/about-3d-ai-brain.png"
            alt="3D Holographic AI Brain"
            className="w-[110px] sm:w-[155px] md:w-[200px] h-auto object-contain opacity-40 sm:opacity-45 transition-opacity duration-500 drop-shadow-none md:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: 3D Holographic AI Atom Orb */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <img
            src="/assets/about-3d-ai-orb.png"
            alt="3D Holographic AI Orb"
            className="w-[120px] sm:w-[165px] md:w-[220px] h-auto object-contain opacity-40 sm:opacity-45 transition-opacity duration-500 drop-shadow-none md:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Iridescent Data Cube */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <img
            src="/assets/about-3d-data-cube.png"
            alt="3D Iridescent Data Cube"
            className="w-[115px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-40 sm:opacity-45 transition-opacity duration-500 drop-shadow-none md:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading & animated text */}
        <div className="h-10 sm:h-12 md:h-14" />

        {/* Animated Paragraph */}
        <AnimatedText
          text={aboutText}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        />

        {/* Spacing between animated text & button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
