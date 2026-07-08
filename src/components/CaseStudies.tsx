"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  readLink: string;
  liveLink: string;
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      badge: "Mobile App",
      title: "iWish - A Community-Powered Social Gifting Platform",
      description: "Designed a platform that enables users to create wishes, receive contributions, and manage gifting experiences through a seamless digital journey.",
      image: "/images/case-studies/Case 1.jpg",
      readLink: "/case-study/iwish",
      liveLink: "#",
    },
    {
      id: 2,
      badge: "SaaS Platform",
      title: "BMS - Streamlining Auto Workshop Operations",
      description: "Streamlining auto repair workshop operations with a centralized system for service management, inventory tracking, and customer interactions.",
      image: "/images/case-studies/Case 2.png",
      readLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      badge: "Community Platform",
      title: "Page234 - Building a Community Around Reading",
      description: "Designed a social reading platform that encourages engagement through discussions, reading groups, and community-driven interactions.",
      image: "/images/case-studies/Case 3.png",
      readLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="case-studies" className="bg-off-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12 md:mb-16"
        >
          <h2 className="text-h2 text-forest-green">
            Case Studies
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm border border-black/[0.03] transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              {/* Top: Mockup Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-off-white border-b border-black/[0.04]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 contrast-[93%] brightness-[97%] saturate-[95%]"
                />
              </div>

              {/* Middle: Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col items-start text-left">
                {/* Badge */}
                <span className="inline-block bg-accent-green text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {project.badge}
                </span>

                {/* Title */}
                <h3 className="text-h4 text-dark-neutral mb-3 group-hover:text-forest-green transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-neutral text-body-small mb-0">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Action Links Footer */}
              <div className="border-t border-black/[0.06] px-6 py-4 md:px-8 flex items-center justify-between">
                <a
                  href={project.readLink}
                  className="text-dark-neutral hover:text-forest-green font-semibold text-sm transition-colors cursor-pointer"
                >
                  Read Case Study
                </a>
                <a
                  href={project.liveLink}
                  className="text-dark-neutral hover:text-forest-green font-semibold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  View Live Site
                  <ArrowUpRight className="w-4 h-4 text-muted-neutral group-hover:text-forest-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
