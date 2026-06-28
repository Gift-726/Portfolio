"use client";

import { ArrowRight, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const starVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.8 },
    },
  };

  const avatarVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-forest-green text-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(140,227,67,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column (Copy and CTAs) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-green/40 border border-white/10 text-lime-green text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime-green animate-pulse" />
            👋 Hi, I'm Goodness Ayano
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 font-heading"
          >
            Designing Products{" "}
            <span className="text-lime-green relative">People</span> Love and{" "}
            <span className="text-lime-green relative">Businesses</span> Value
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-8"
          >
            I craft user-centered digital experiences that simplify complexity,
            solve meaningful problems, and help organizations achieve measurable outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => scrollToSection("case-studies")}
              className="bg-lime-green text-forest-green font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-lime-green/10 hover:shadow-lime-green/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Case Studies
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/20 hover:border-white/55 text-white font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/5 active:scale-[0.98] cursor-pointer group"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            variants={itemVariants}
            className="w-full border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1 font-semibold">
                Products Designed
              </p>
              <p className="text-2xl font-bold text-lime-green">10+</p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1 font-semibold">
                Experience
              </p>
              <p className="text-2xl font-bold text-lime-green">6 Years+</p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-green inline-block" />
                Open to
              </p>
              <p className="text-sm font-semibold text-white/90 leading-tight">
                Product Design Opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Avatar and Starburst Decors) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-[#8CE343]/15 border border-[#8CE343]/20 flex items-center justify-center p-4 overflow-visible"
          >
            {/* The Avatar Image */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#E2F5E5]">
              <img
                src="/images/hero-image.png"
                alt="Goodness Ayano 3D Avatar"
                className="w-full h-full object-cover scale-[1.03] object-bottom"
              />
            </div>

            {/* Bottom-Left Starburst Decor */}
            <motion.div
              variants={starVariants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-8 -left-8 w-16 h-16 pointer-events-none select-none z-20"
            >
              <img
                src="/images/star-image.png"
                alt="Starburst Orange Decor"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </motion.div>

            {/* Top-Right Starburst Decor */}
            <motion.div
              variants={starVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-8 -right-8 w-16 h-16 pointer-events-none select-none z-20"
            >
              <img
                src="/images/star-image.png"
                alt="Starburst Orange Decor"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
