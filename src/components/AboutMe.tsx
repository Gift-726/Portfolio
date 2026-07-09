"use client";

import { motion, Variants } from "framer-motion";

export default function AboutMe() {
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const frameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const starVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.7 },
    },
  };

  return (
    <section id="about" className="bg-off-white py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline and Bio */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 text-left"
        >
          <h2 className="text-h2 text-forest-green mb-6">
            About me
          </h2>
          <p className="text-muted-neutral text-body-large mb-6">
            I'm a Product Designer with a background in Mathematics Education and a passion for creating intuitive digital experiences that solve real-world problems. Over the years, I've designed products across education, government, fintech, ERP, e-commerce, and community platforms, translating complex requirements into simple, user-centered solutions.
          </p>
          <p className="text-muted-neutral text-body-large">
            My approach combines research, strategy, and visual design to build products that are both functional and meaningful. I love collaborating with multi-disciplinary teams to translate user pain points into seamless digital journeys.
          </p>
        </motion.div>

        {/* Right Column: Professional Portrait Frame with Decor */}
        <motion.div
          variants={frameVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[340px] aspect-[4/5] overflow-visible">
            {/* The Photo Container */}
            <div className="w-full h-full relative rounded-3xl overflow-hidden bg-forest-green">
              <img
                src="/images/about-img.png"
                alt="Goodness Ayano Professional Portrait"
                className="w-full h-full object-cover object-center scale-[1.02]"
              />
            </div>

            {/* Top-Right Starburst Decor (bounding the frame) */}
            <motion.div
              variants={starVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -top-13 -right-13 w-30 h-30 pointer-events-none select-none z-20"
            >
              <motion.img
                src="/images/star-image.svg"
                alt="Starburst Orange Accent Decor"
                className="w-full h-full object-contain"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
