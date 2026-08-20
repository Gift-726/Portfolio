"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BMSCaseStudy() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-card-white pt-32 relative font-sans text-dark-neutral">

        {/* Back Button Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/[0.08] bg-card-white text-dark-neutral hover:bg-black/[0.02] font-semibold text-xs md:text-sm transition-all duration-200 cursor-pointer shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col items-start text-left max-w-4xl">
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary-1 tracking-tight leading-[1.15] mb-5 font-sans"
              >
                Streamlining Auto Workshop Operations
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-muted-neutral text-base sm:text-lg md:text-xl font-light leading-relaxed"
              >
                Streamlining auto repair workshop operations with a centralized system for service management, inventory tracking, and customer interactions — designed to turn a fragmented manual process into one platform staff and clients could actually trust.
              </motion.p>
            </div>

            {/* Mockup Wide Banner */}
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[24px] overflow-hidden shadow-md border border-black/[0.03] bg-off-white"
            >
              <img
                src="/images/case-studies-second/hero-img.jpg"
                alt="BMS Workshop Management Hero Mockup"
                className="w-full aspect-[4/3] md:aspect-auto h-auto object-cover max-h-[500px]"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* METADATA BAR (Full bleed background) */}
        <section className="w-full bg-off-white border-y border-black/[0.04] py-8 my-12">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
            <div className="flex flex-col items-start text-left md:border-r border-black/[0.08] last:border-r-0 md:pr-4">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Role</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">Product Designer</p>
            </div>
            <div className="flex flex-col items-start text-left md:border-r border-black/[0.08] last:border-r-0 md:pl-6 md:pr-4">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">6 Months</p>
            </div>
            <div className="flex flex-col items-start text-left md:border-r border-black/[0.08] last:border-r-0 md:pl-6 md:pr-4">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Tools</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">Figma</p>
            </div>
            <div className="flex flex-col items-start text-left md:pl-6">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Platform</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">Business Management Software</p>
            </div>
          </div>
        </section>

        {/* CONTEXT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— CONTEXT</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-6 font-heading leading-tight">
              Bringing Order to the Workshop Floor
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
              Before BMS, the workshop ran on fragmented tools: whiteboards for tracking repairs, spreadsheets for spare-parts inventory, and phone calls for customer updates. Jobs were hard to track in real time, stock records drifted out of sync, and staff and client information lived across scattered notebooks. Car owners had little visibility into their vehicle&apos;s progress, which chipped away at trust in the shop — a business problem as much as a UX one.
            </p>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
              I was brought in to translate this manual, siloed process into one digital system, giving the owner visibility over daily operations, helping staff manage repairs and inventory without friction, and letting clients track their car&apos;s status without calling in.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[500px] max-h-[250px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-off-white border border-black/[0.02] scale-[1.04]">
              <img
                src="/images/case-studies-second/context-img.jpg"
                alt="BMS Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="bg-off-white">
        <div className="max-w-7xl bg-off-white mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start border-t border-black/[0.03]">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— CHALLENGES</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-2 font-heading leading-tight">
              Where the Old Process Broke Down
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-1">
              Automotive workshops move fast and leave little room for error. Early discovery surfaced four recurring friction points:
            </p>
            <ul className="space-y-1 mb-1">
              {[
                "Repair and car-wash jobs were tracked inconsistently across bays, with no shared source of truth.",
                "Inventory records were manual and often outdated, leading to missed reorders.",
                "Customers had no way to check repair status without calling in.",
                "There was no centralized way to manage staff records or responsibilities."
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 w-full bg-forest-green rounded-2xl p-8 text-left border border-white/5 shadow-md self-center min-h-[220px] max-w-[400px] flex flex-col justify-center mt-10">
            <p className="text-lime-green text-xs font-bold uppercase tracking-wider mb-3">Design Challenge</p>
            <p className="text-white text-base md:text-lg font-light leading-relaxed italic">
              &quot;How might we bring a workshop&apos;s repairs, inventory, payments, and client communication into one system without adding complexity to an already fast-paced floor?&quot;
            </p>
          </div>
          </div>
        </section>

        {/* GOALS SECTION */}
        <section className="w-full bg-card-white border-t border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— OBJECTIVES</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-4 font-heading">
              Strategic Product Goals
            </h2>
            <p className="text-muted-neutral text-sm md:text-base mb-10 font-light max-w-2xl">
              To guide the design and give the business a way to judge whether it worked, BMS focused on five goals:
            </p>
            <div className="bg-secondary-1 rounded-[24px] p-8 md:p-10 border border-white/5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-0">
                {[
                  { num: "01", title: "Unify Operations", desc: "Unify repairs, car wash, parts sales, and expenses in one system." },
                  { num: "02", title: "Client Transparency", desc: "Track repair progress in real time with a public job queue." },
                  { num: "03", title: "Simplify Staff Work", desc: "Clear dashboards and records that reduce day-to-day friction for staff." },
                  { num: "04", title: "Financial Tracking", desc: "Voucher management and expense recording for accountability." },
                  { num: "05", title: "Admin Insight", desc: "Statistics and reporting so owners can see the full picture at a glance." }
                ].map((goal) => (
                  <div
                    key={goal.num}
                    className="flex flex-col gap-3 text-left pt-6 first:pt-0 pb-6 last:pb-0 md:py-2 md:px-6 first:pl-0 last:pr-0 border-b border-white/10 md:border-b-0 md:border-r last:border-r-0 border-white/10"
                  >
                    <span className="text-xs md:text-sm font-semibold text-white font-sans tracking-wider">{goal.num}</span>
                    <h4 className="font-bold text-sm md:text-base text-primary font-heading leading-snug">{goal.title}</h4>
                    <p className="text-white text-xs md:text-sm font-light leading-relaxed">{goal.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH & STRATEGY SECTION */}
        <section className="w-full bg-off-white border-y border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— RESEARCH & STRATEGY</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-4 font-heading">
              Learning From Existing Systems
            </h2>
            <p className="text-muted-neutral text-sm md:text-base mb-8 font-light max-w-3xl">
              Since this project meant digitizing an existing manual process, I began by researching how comparable systems handle complex, multi-module workflows:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Workshop management tools", desc: "To see how they structure job queues and repair tracking." },
                { title: "General business dashboards", desc: "For patterns in data visualization and administrative control." },
                { title: "Inventory and sales platforms", desc: "For conventions around stock levels and expense recording." }
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary-1 border border-white/5 p-5 rounded-xl text-left">
                  <h4 className="font-bold text-primary text-sm md:text-base mb-1 font-heading leading-snug">{item.title}</h4>
                  <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="w-full bg-card-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— SOLUTION</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-12 font-heading">
              Crafting the Workshop Management Core
            </h2>

            {/* Subsection 1 — Text LEFT | Image RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold text-secondary-1 mb-4 font-heading leading-tight">
                  One board for every job
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  At the core is the Diagnosis &amp; Repair Queue, a shared board showing every active job, from first diagnosis to hand-back. Car Wash requests run through the same queue, so staff always know what&apos;s next without switching tools.
                </p>
                <ul className="space-y-2">
                  {[
                    "Public job queue with progress indicators, so clients can check status without calling in",
                    "Staff assignment view for balancing jobs across technicians",
                    "Consistent status tags across every stage of a repair"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                      <span className="w-2 h-2 rounded-full bg-secondary-2 mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full rounded-[20px] overflow-hidden shadow-md bg-off-white flex items-center justify-center">
                <img
                  src="/images/case-studies-second/solution-img.png"
                  alt="Diagnosis and Repair Queue Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subsection 2 — Image LEFT | Text RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md bg-off-white flex items-center justify-center order-2 lg:order-1">
                <img
                  src="/images/case-studies-second/solution2-img.png"
                  alt="Inventory and Voucher Payment Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start order-1 lg:order-2">
                <h3 className="text-xl md:text-2xl font-bold text-secondary-1 mb-4 font-heading leading-tight">
                  Inventory and payments in one place
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                  Parts Sales &amp; Inventory tracks stock levels and flags low-stock items before they cause delays. The Voucher &amp; Payment System handles voucher issuing and redemption alongside expense recording, keeping the financial side of the business as organized as the repair side.
                </p>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  Together, the two modules give staff a single place to check stock, issue vouchers, and log expenses, so the money side of the shop stays as visible as the repair side.
                </p>
                <ul className="space-y-2">
                  {[
                    "Inventory listing with clear stock-status indicators",
                    "Voucher creation and redemption flow",
                    "Expense entry and summary reporting"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                      <span className="w-2 h-2 rounded-full bg-secondary-2 mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DECISIONS SECTION */}
        <section className="w-full bg-primary-100 border-y border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text — LEFT */}
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 inline-block">— DECISIONS</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-2 font-heading leading-tight">
                Separating Stakeholder Experiences
              </h2>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                A core design challenge was serving three different users inside one system, all touching the same repair orders but needing very different views:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Owners — high-level dashboards, revenue, and resource planning",
                  "Staff (technicians & service advisors) — task queues, repair logs, and client records for day-to-day work",
                  "Clients — a simplified public queue to track their own vehicle, with no login complexity"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                    <span className="w-2 h-2 rounded-full bg-secondary-2 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                Separating these views reduced cognitive load without splitting the underlying data — a tradeoff between simplicity for each user and consistency across the whole system.
              </p>
            </div>
            {/* Image — RIGHT */}
            <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden shadow-md bg-off-white flex items-center justify-center">
              <img
                src="/images/case-studies-second/decision-img.png"
                alt="Owner, staff, and client tabbed dashboard views"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className="w-full bg-card-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— SHOWCASE</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-1 mb-10 font-heading">
              A Unified Workshop Management Ecosystem
            </h2>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Left Column (1/3) */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Top Left - Tall */}
                <div className="w-full aspect-[400/560] rounded-[20px] overflow-hidden shadow-sm bg-off-white">
                  <img src="/images/case-studies-second/grid-img1.png" alt="Mobile app dashboard" className="w-full h-full object-cover" />
                </div>
                {/* Bottom Left - Short */}
                <div className="w-full aspect-[400/268] rounded-[20px] overflow-hidden shadow-sm bg-off-white">
                  <img src="/images/case-studies-second/grid-img4.png" alt="Workshop tablet interface" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Columns (2/3) */}
              <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
                {/* Top Right - 2 Short Images */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="w-full aspect-[400/268] rounded-[20px] overflow-hidden shadow-sm bg-off-white">
                    <img src="/images/case-studies-second/grid-img2.png" alt="Stock level metric card" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full aspect-[400/268] rounded-[20px] overflow-hidden shadow-sm bg-off-white">
                    <img src="/images/case-studies-second/grid-img3.png" alt="Dark mode diagnostics dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Bottom Right - 1 Large Image */}
                <div className="w-full aspect-[824/560] rounded-[20px] overflow-hidden shadow-sm bg-off-white">
                  <img src="/images/case-studies-second/grid-large-img.png" alt="Workshop overview analytics screen" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME & IMPACT SECTION */}
        <section className="w-full bg-primary-100 py-16 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-left grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl font-bold text-secondary-1 mb-4 font-heading">
                  Outcome & Impact
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Workflow consolidation: Unified eight fragmented workflows into one modular system.",
                    "Customer transparency: Introduced a public job queue to let clients track repair progress without calling.",
                    "Scalability: Created a repeatable module pattern that supports new services without reworking core navigation."
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary-1/90 text-sm md:text-base leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full bg-secondary-2 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Column */}
              <div>
                <h3 className="text-2xl font-bold text-secondary-1 mb-4 font-heading">
                  Key Learnings
                </h3>
                <p className="text-secondary-1/90 text-sm md:text-base leading-relaxed font-medium">
                  Although BMS wasn&apos;t fully deployed, designing its eight-module system taught me how to manage complexity across a multi-role product. I learned to structure connected workflows, design for efficiency, and build scalable patterns. Going forward, I&apos;d prioritize testing these flows with real workshop staff and customers before deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <div className="bg-forest-green text-white/50 text-xs md:text-sm py-6 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2026 Goodness Ayano. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
