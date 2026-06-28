"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const logos = Array.from({ length: 12 }, (_, i) => `/images/sliding-logo/Logo ${i + 1}.png`);
  
  // Duplicate logos for seamless infinite scrolling
  const scrollLogos = [...logos, ...logos];

  return (
    <section className="bg-card-white border-y border-off-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column (40% on large viewports) */}
        <div className="lg:col-span-5 text-left border-l-4 border-lime-green pl-6 py-2">
          <h2 className="text-2xl font-bold tracking-tight text-dark-neutral mb-3 font-heading">
            Trusted By Innovative Teams
          </h2>
          <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
            I've worked with startups, educational institutions, engineering teams, and organizations to design products that improve efficiency, engagement, and user satisfaction.
          </p>
        </div>

        {/* Right Column (60% on large viewports - Carousel) */}
        <div className="lg:col-span-7 relative w-full overflow-hidden py-4">
          {/* Gradient shadows for masking edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max relative">
            <div className="flex gap-10 items-center justify-around animate-scroll">
              {scrollLogos.map((logoPath, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-10 w-28 relative flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logoPath}
                    alt={`Partner Logo ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
