import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { logoItemsRow1, logoItemsRow2 } from '../data/marqueeData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Quadruple each row for continuous seamless horizontal scroll
  const multipliedRow1 = [
    ...logoItemsRow1,
    ...logoItemsRow1,
    ...logoItemsRow1,
    ...logoItemsRow1,
  ];
  const multipliedRow2 = [
    ...logoItemsRow2,
    ...logoItemsRow2,
    ...logoItemsRow2,
    ...logoItemsRow2,
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth GPU-accelerated horizontal translation on scroll without React re-renders or layout reflows
  const x1 = useTransform(scrollYProgress, [0, 1], [-220, 120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [120, -220]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Row 1: Moves RIGHT on scroll */}
        <motion.div
          className="flex gap-4 sm:gap-5 transform-gpu will-change-transform"
          style={{ x: x1 }}
        >
          {multipliedRow1.map((logo, idx) => (
            <div
              key={`row1-${logo.id}-${idx}`}
              className="w-[300px] sm:w-[360px] md:w-[380px] h-[160px] sm:h-[190px] md:h-[210px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#151518] shadow-md flex items-center justify-center p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="max-h-[48px] sm:max-h-[58px] md:max-h-[66px] max-w-[55%] w-auto h-auto object-contain opacity-45 transition-all duration-300 group-hover:opacity-85 select-none"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Moves LEFT on scroll */}
        <motion.div
          className="flex gap-4 sm:gap-5 transform-gpu will-change-transform"
          style={{ x: x2 }}
        >
          {multipliedRow2.map((logo, idx) => (
            <div
              key={`row2-${logo.id}-${idx}`}
              className="w-[300px] sm:w-[360px] md:w-[380px] h-[160px] sm:h-[190px] md:h-[210px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#151518] shadow-md flex items-center justify-center p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="max-h-[48px] sm:max-h-[58px] md:max-h-[66px] max-w-[55%] w-auto h-auto object-contain opacity-45 transition-all duration-300 group-hover:opacity-85 select-none"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
