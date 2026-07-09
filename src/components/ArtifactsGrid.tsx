"use client";

import { motion } from "framer-motion";
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export default function ArtifactsGrid() {
  const artifacts = [
    { id: 1, image: "/images/design-artifact-img/At1.png", title: "Premium corporate UI redesign for McGeorge Consulting." },
    { id: 2, image: "/images/design-artifact-img/At2.png", title: "Luxury-focused web interface for 3Sevens." },
    { id: 3, image: "/images/design-artifact-img/At3.png", title: "Onboarding flow for SeamTrack's tutoring platform." },
    { id: 4, image: "/images/design-artifact-img/At4.png", title: "Intuitive mobile UI design for iWish." },
    { id: 5, image: "/images/design-artifact-img/At5.png", title: "Tutor onboarding verification screen for SeamTrack." },
    { id: 6, image: "/images/design-artifact-img/At6.png", title: "Responsive digital marketing page for McGeorge Consulting." },
    { id: 7, image: "/images/design-artifact-img/At7.png", title: "Job card stage log dashboard for BMS auto repair software." },
    { id: 8, image: "/images/design-artifact-img/At8.png", title: "Card gifting flow for Wow Cards." },
    { id: 9, image: "/images/design-artifact-img/At9.png", title: "Responsive Product Specs Mockup" },
    { id: 10, image: "/images/design-artifact-img/At10.png", title: "Analytics Chart UI Component" },
    { id: 11, image: "/images/design-artifact-img/At11.png", title: "Clean Web Design Elements" },
    { id: 12, image: "/images/design-artifact-img/At12.png", title: "Interactive Design System Tokens" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="artifacts" className="bg-card-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-12 md:mb-16"
        >
          <h2 className="text-h2 text-forest-green mb-4">
            Design Artifacts
          </h2>
          <p className="text-muted-neutral text-body-large">
            A selection of interface designs, workflows, design systems, and product explorations that showcase my approach to solving problems and crafting user experiences.
          </p>
        </motion.div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artifacts.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square w-full rounded-2xl overflow-hidden bg-off-white border border-black/[0.04] shadow-sm cursor-pointer"
            >
              {/* Image */}
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 contrast-[93%] brightness-[97%] saturate-[95%]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-forest-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-left">
                <div className="self-end bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-lime-green text-overline mb-1">
                    Artifact {index + 1}
                  </p>
                  <h4 className="text-white text-h5 line-clamp-2">
                    {art.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Image Preview */}
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-between p-4 md:p-6 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white hover:scale-110 transition-all cursor-pointer z-50 p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Click Zone (Prev) */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev !== null ? (prev === 0 ? artifacts.length - 1 : prev - 1) : null));
            }}
            className="absolute left-0 top-0 bottom-0 w-[20%] cursor-pointer z-30 flex items-center justify-start pl-4 md:pl-8 group/side"
            title="Previous Image"
          >
            <div className="bg-black/50 group-hover/side:bg-black/80 text-white p-3 rounded-full hover:scale-105 transition-all border border-white/10 opacity-40 group-hover/side:opacity-100 flex items-center justify-center">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </div>

          {/* Right Click Zone (Next) */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev !== null ? (prev === artifacts.length - 1 ? 0 : prev + 1) : null));
            }}
            className="absolute right-0 top-0 bottom-0 w-[20%] cursor-pointer z-30 flex items-center justify-end pr-4 md:pr-8 group/side"
            title="Next Image"
          >
            <div className="bg-black/50 group-hover/side:bg-black/80 text-white p-3 rounded-full hover:scale-105 transition-all border border-white/10 opacity-40 group-hover/side:opacity-100 flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>

          {/* Title bar */}
          <div className="text-center pt-2 pb-2 z-10 w-full max-w-2xl px-4 mt-4 md:mt-2">
            <h4 className="text-white text-lg md:text-xl font-bold font-heading line-clamp-2">
              {artifacts[activeIndex].title}
            </h4>
          </div>

          {/* Main Preview Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative flex items-center justify-center w-full max-w-3xl flex-grow my-2 z-20"
          >
            {/* Active Preview Image */}
            <div className="h-full w-full flex items-center justify-center max-h-[65vh] select-none">
              <img
                src={artifacts[activeIndex].image}
                alt={artifacts[activeIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 contrast-[95%] brightness-[99%] saturate-[97%]"
              />
            </div>
          </div>

          {/* Thumbnail list row */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-5xl overflow-x-auto py-3 px-2 no-scrollbar z-40 flex-shrink-0"
          >
            <div className="flex justify-start md:justify-center items-center gap-3 w-max mx-auto px-4">
              {artifacts.map((art, idx) => (
                <button
                  key={art.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-200 flex-shrink-0 ${
                    activeIndex === idx 
                      ? "border-lime-green scale-105 shadow-md shadow-lime-green/30" 
                      : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
