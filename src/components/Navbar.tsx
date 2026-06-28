"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link spy
      const sections = ["case-studies", "artifacts", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // Default to empty if at the top
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Case Studies", id: "case-studies" },
    { name: "Design Artifacts", id: "artifacts" },
    { name: "About", id: "about" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8 pointer-events-none"
      >
        <div 
          className={`w-full max-w-7xl px-6 py-3.5 flex items-center justify-between rounded-[20px] transition-all duration-300 border backdrop-blur-xl pointer-events-auto ${
            scrolled
              ? "bg-forest-green/85 border-white/12 shadow-lg shadow-forest-green/15"
              : "bg-white/[0.04] border-white/6 shadow-none"
          }`}
        >
          {/* Left section: Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/Logo-light-bg.svg"
                alt="Goodness Ayano Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Center section: Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer relative py-1 ${
                  activeSection === link.id
                    ? "text-lime-green font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-green rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right section: CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-lime-green text-forest-green font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg shadow-lime-green/10 hover:shadow-lime-green/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-lime-green transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[96px] left-4 right-4 z-40 bg-forest-green/95 border border-white/10 rounded-[20px] backdrop-blur-xl overflow-hidden py-6 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left text-lg font-medium py-2 transition-colors ${
                    activeSection === link.id ? "text-lime-green font-bold" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-white/10 my-1" />
              <button
                onClick={() => scrollTo("contact")}
                className="w-full bg-lime-green text-forest-green font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-lime-green/90 transition-colors"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
