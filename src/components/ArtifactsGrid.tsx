"use client";

import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

export default function ArtifactsGrid() {
  // 12 items. We use Image (1).png to Image (9).png, and repeat Image (9).png for 10, 11, 12.
  const artifacts = [
    { id: 1, image: "/images/design-artifact-img/Image (1).png", title: "Humanoid Landing Page Exploration" },
    { id: 2, image: "/images/design-artifact-img/Image (2).png", title: "Premium E-Commerce Mockup" },
    { id: 3, image: "/images/design-artifact-img/Image (3).png", title: "EdTech Dashboard Component" },
    { id: 4, image: "/images/design-artifact-img/Image (4).png", title: "Creative Branding & Poster Layout" },
    { id: 5, image: "/images/design-artifact-img/Image (5).png", title: "Mobile UI System Guidelines" },
    { id: 6, image: "/images/design-artifact-img/Image (6).png", title: "Humanoid Dashboard Interface" },
    { id: 7, image: "/images/design-artifact-img/Image (7).png", title: "Financial Admin Dashboard UX" },
    { id: 8, image: "/images/design-artifact-img/Image (8).png", title: "Seamtrack App Welcome View" },
    { id: 9, image: "/images/design-artifact-img/Image (9).png", title: "Responsive Product Specs Mockup" },
    { id: 10, image: "/images/design-artifact-img/Image (9).png", title: "Analytics Chart UI Component" },
    { id: 11, image: "/images/design-artifact-img/Image (9).png", title: "Clean Web Design Elements" },
    { id: 12, image: "/images/design-artifact-img/Image (9).png", title: "Interactive Design System Tokens" },
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

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
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-green mb-4 font-heading">
            Design Artifacts
          </h2>
          <p className="text-muted-neutral text-base md:text-lg leading-relaxed font-light">
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
              onClick={() => setActiveImage(art.image)}
              className="group relative aspect-square w-full rounded-2xl overflow-hidden bg-off-white border border-black/[0.04] shadow-sm cursor-pointer"
            >
              {/* Image */}
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-forest-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-left">
                <div className="self-end bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-lime-green text-xs font-semibold uppercase tracking-wider mb-1">
                    Artifact {index + 1}
                  </p>
                  <h4 className="text-white text-base font-bold font-heading line-clamp-2">
                    {art.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Image Preview */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={activeImage}
              alt="Design Exploration Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
