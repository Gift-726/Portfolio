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
  const FORMSPREE_ID = ""; // e.g., "mnqeqpzw"

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
        window.location.href = `mailto:goodnessayano@gmail.com?subject=${subject}&body=${body}`;

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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.16 9.06c-.34-.08-2.61-.59-5.21-.27.84 2.22 1.48 4.41 1.7 5.15 2.15-1.39 3.19-3.48 3.51-4.88zm-5.27 6.16c-.19-.64-.78-2.73-1.63-4.89-4.32 1.25-5.91 3.75-6.31 4.54 1.54 1.21 3.48 1.93 5.58 1.93.88 0 1.72-.13 2.51-.35.15-.36-.01-.87-.15-1.23zm-10.45-3.32c.49-.78 2.76-3.83 7.02-4.63-.12-.27-.24-.55-.38-.83-4.39 1.14-8.08 1.05-8.88 1.03.11 1.63.58 3.14 1.43 4.43zm.25-6.19c.9-.02 4.09-.13 7.97-1.42-.51-1.07-1.06-2.14-1.6-3.13-3.69 1.15-5.83 3.65-6.37 4.55zm8.56-4.63c.53.94 1.06 1.97 1.54 3.01 3.66-.45 5.52.88 5.76.99-.78-2.45-2.62-4.45-5.02-5.18-1.57.54-1.92.83-2.28 1.18zm-.95 6.07c.14.28.27.56.39.84 3.99-.44 7.23.95 7.42 1.04.02-.27.04-.54.04-.82 0-2.4-1.12-4.52-2.88-5.93-.24-.13-2.31-1.22-4.97-.13z"/>
        </svg>
      ),
      href: "#",
      name: "Dribbble"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "#",
      name: "Twitter"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      ),
      href: "#",
      name: "Facebook"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "#",
      name: "LinkedIn"
    },
  ];

  return (
    <footer id="contact" className="bg-card-white pt-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-20 border-b border-black/[0.04]">
        
        {/* Left Column (Socials & wallpaper) */}
        <div className="lg:col-span-6 text-left flex flex-col justify-between h-full min-h-[350px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest-green mb-4 font-heading leading-tight">
              Let's Create Better Product Experiences
            </h2>
            <p className="text-muted-neutral text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
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
                  <h3 className="text-xl font-bold text-forest-green mb-2 font-heading">
                    Message Sent!
                  </h3>
                  <p className="text-muted-neutral text-sm max-w-xs mb-6">
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
                    className="w-full bg-lime-green hover:bg-[#83d63b] text-forest-green font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-lime-green/5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
