import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { servicesData } from '../data/servicesData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-10 md:px-16 py-20 sm:py-24 md:py-28 z-0 text-[#0C0C0C] select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={25}
              className="w-full"
            >
              <div className="w-full py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12 group transition-colors duration-300">
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 w-auto md:w-[180px] lg:w-[220px] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right Content */}
                <div className="flex flex-col flex-grow justify-center">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight tracking-tight mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
