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
    <section 
      className="relative text-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #00281C 28.99%, #000A07 132.91%)" }}
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(140,227,67,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-3 items-center lg:items-stretch">
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
            className="inline-flex items-center gap-10 px-4 py-2 mt-5 rounded-full bg-transparent border border-lime-green/60 text-white text-sm font-medium mb-8"
          >
            {/* <span className="w-2 h-2 rounded-full bg-lime-green shadow-[0_0_8px_rgba(140,227,67,0.8)]" /> */}
            <span>👋 Hi, I'm <span className="text-lime-green font-semibold">Goodness Ayano</span></span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-5xl md:text-[50px] font-extrabold tracking-tight leading-[1.1] mb-6 font-heading max-w-[2000px]"
          >
            Designing Products <span className="text-lime-green">People</span> Love and <span className="text-lime-green">Businesses</span> Value
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-[1000px] mb-8"
          >
            I craft user-centered digital experiences that simplify complexity,
            solve meaningful problems, and help organizations achieve measurable outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => scrollToSection("case-studies")}
              className="bg-lime-green text-forest-green font-bold text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-lime-green/10 hover:shadow-lime-green/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Case Studies
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/80 hover:border-white text-white font-bold text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/5 active:scale-[0.98] cursor-pointer group"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mt-3"
          >
            <div>
              <p className="text-lime-green text-sm font-medium mb-1">
                Products Designed
              </p>
              <p className="text-2xl font-bold text-white tracking-tight">10+</p>
            </div>
            <div className="sm:border-l border-white/15 pt-0 sm:pl-8">
              <p className="text-lime-green text-sm font-medium mb-1">
                Experience
              </p>
              <p className="text-2xl font-bold text-white tracking-tight">6 Years+</p>
            </div>
            <div className="sm:border-l border-white/15 pt-0 sm:pl-8">
              <p className="text-lime-green text-sm font-medium mb-1">
                Open to
              </p>
              <p className="text-2xl font-bold text-white leading-tight">
                Product Design Opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Avatar and Starburst Decors) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center lg:items-start relative lg:pt-6">
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[340px] lg:max-w-[384px] aspect-[4/5] h-auto lg:h-[470px] overflow-visible"
          >
            {/* Top-Right Starburst Decor (under the image) */}
            <motion.div
              variants={starVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-10 -right-10 w-20 h-20 pointer-events-none select-none z-0"
            >
              <motion.img
                src="/images/star-image.svg"
                alt="Starburst Orange Accent Decor"
                className="w-full h-full object-contain filter drop-shadow-md"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* The Avatar Image (z-10 to stay between top-right and bottom-left stars) */}
            <div className="w-full h-full relative rounded-3xl overflow-hidden bg-lime-green z-10">
              <img
                src="/images/hero-image.png"
                alt="Goodness Ayano 3D Avatar"
                className="w-full h-full object-cover scale-[1.03] object-top" 
              />
            </div>

            {/* Bottom-Left Starburst Decor (on top of the image) */}
            <motion.div
              variants={starVariants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-10 -left-10 w-20 h-20 pointer-events-none select-none z-20"
            >
              <motion.img
                src="/images/star-image.svg"
                alt="Starburst Orange Accent Decor"
                className="w-full h-full object-contain filter drop-shadow-md"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
