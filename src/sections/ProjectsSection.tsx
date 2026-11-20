import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { projectsData, ProjectItem } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string>(project.col2Image);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveImage(project.col2Image);
  }, [project.col2Image]);

  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const allImages = [
    { url: project.col2Image, label: 'Primary View' },
    { url: project.col1Image1, label: 'Feature 01' },
    { url: project.col1Image2, label: 'Feature 02' },
  ];

  const secondaryImages = allImages.filter((img) => img.url !== activeImage);

  return (
    <div
      ref={cardContainerRef}
      className="min-h-0 md:min-h-[85vh] h-auto md:h-[85vh] w-full flex items-start justify-center relative mb-8 md:mb-0"
    >
      <motion.div
        style={{
          top: isMobile ? undefined : `${index * 28 + 96}px`,
          scale: isMobile || index === totalCards - 1 ? 1 : scale,
        }}
        className="relative md:sticky w-full max-w-6xl rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col justify-between gap-5 sm:gap-6 transform-gpu"
      >
        {/* Top Row: Number, Category, Title & Ghost Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/20">
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 76px)' }}
            >
              {project.number}
            </span>

            {/* Category */}
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/70">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* 16:9 Image Gallery: Asymmetric 16:9 Split with Click-to-Promote */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full items-center">
          {/* Left Column (35% width): 2 stacked 16:9 images */}
          <div className="w-full md:w-[35%] flex flex-row md:flex-col gap-3 sm:gap-4 order-2 md:order-1">
            {secondaryImages.map((img, i) => (
              <div
                key={img.url + i}
                data-thumbnail="true"
                onClick={() => setActiveImage(img.url)}
                className="w-1/2 md:w-full aspect-video rounded-[18px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-[#161618] border border-white/10 cursor-pointer relative group transition-all duration-300 hover:border-[#00F0FF]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              >
                <img
                  src={img.url}
                  alt={`${project.title} 16:9 preview ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    Click to View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (65% width): 1 large featured 16:9 image */}
          <div className="w-full md:w-[65%] order-1 md:order-2">
            <div
              data-featured="true"
              className="w-full aspect-video rounded-[22px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#161618] border border-white/15 relative group shadow-2xl cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={`${project.title} featured 16:9 visual`}
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>

              {/* Expand Hint Overlay */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#D7E2EA] bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  16:9 Fullscreen
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-2xl bg-[#0C0C0C]"
            >
              <img
                src={activeImage}
                alt={`${project.title} Fullscreen 16:9`}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 text-white bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 text-lg font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-24 md:pt-28 pb-32 px-4 sm:px-8 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Cards Container */}
        <div className="w-full flex flex-col relative">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
