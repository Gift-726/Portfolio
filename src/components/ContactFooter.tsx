"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Update this to your Formspree endpoint ID if you have one
  const FORMSPREE_ID = "mwvdapaq"; // e.g., "mnqeqpzw"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!name || !email || !message) {
      setSubmitError("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    if (FORMSPREE_ID) {
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setSubmitError("Something went wrong. Please try again.");
        }
      } catch (err) {
        setSubmitError("Network error. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback: Mock submit + Mailto link trigger
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:ayanogoodnes@gmail.com?subject=${subject}&body=${body}`;

        // Reset fields
        setName("");
        setEmail("");
        setMessage("");
      }, 800);
    }
  };

  const socials = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      href: "https://www.instagram.com/gmathsndesign/",
      name: "Instagram"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/GMathsnDesign",
      name: "Twitter"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/goodness-ayano/",
      name: "LinkedIn"
    },
  ];

  return (
    <footer id="contact" className="bg-card-white pt-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-20 border-b border-black/[0.04]">
        
        {/* Left Column (Socials & wallpaper) */}
        <div className="lg:col-span-6 text-left flex flex-col justify-between h-full min-h-[350px]">
          <div>
            <h2 className="text-h2 text-forest-green mb-4">
              Let's Create Better Product Experiences
            </h2>
            <p className="text-muted-neutral text-body-large mb-8 max-w-xl">
              Whether you're launching a new product, improving an existing experience, or exploring a new idea, I'd love to learn about your goals and see how I can help.
            </p>

            {/* Circular Social Icons */}
            <div className="flex gap-4 mb-8">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-black/10 hover:border-forest-green text-muted-neutral hover:text-forest-green hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Wallpaper Block (repeating 'G' pattern) */}
          <div className="relative w-full h-[100px] md:h-[120px] rounded-2xl overflow-hidden g-pattern-bg opacity-[0.85] border border-black/[0.03]" />
        </div>

        {/* Right Column (Form Card) */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="bg-[#F4F9F5] border border-black/[0.03] rounded-3xl p-6 md:p-8 w-full max-w-[500px] shadow-sm">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#0B4632] mb-4 animate-bounce" />
                  <h3 className="text-h4 text-forest-green mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-neutral text-body-small max-w-xs mb-6">
                    Thank you for reaching out! {FORMSPREE_ID ? "I will get back to you shortly." : "Opening your default mail application to finalize your email."}
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-forest-green font-semibold text-sm underline hover:text-[#0B4632]"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white border border-black/[0.08] focus:border-forest-green text-dark-neutral placeholder-black/40 rounded-xl px-5 py-4 text-sm focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white border border-black/[0.08] focus:border-forest-green text-dark-neutral placeholder-black/40 rounded-xl px-5 py-4 text-sm focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Briefly describe your challenge, goals, or what you'd like to achieve..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full bg-white border border-black/[0.08] focus:border-forest-green text-dark-neutral placeholder-black/40 rounded-xl px-5 py-4 text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-xs text-left font-semibold">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime-green hover:bg-[#83d63b] text-forest-green text-btn-primary py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-lime-green/5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright stripe */}
      <div className="bg-forest-green text-white/50 text-xs md:text-sm py-6 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2026 Goodness Ayano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
