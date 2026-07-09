"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function IWishCaseStudy() {
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
      <main className="min-h-screen bg-card-white pt-32 pb-16 relative font-sans text-dark-neutral">
        
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
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-[1.15] mb-5 font-heading"
              >
                Designing a Community-Powered Social Gifting Platform
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-muted-neutral text-base sm:text-lg md:text-xl font-light leading-relaxed"
              >
                Transforming passive wishlists into a seamless, wallet-powered social gifting and crowdfunding ecosystem.
              </motion.p>
            </div>

            {/* Mockup Wide Banner */}
            <motion.div 
              variants={itemVariants}
              className="w-full rounded-[24px] overflow-hidden shadow-md border border-black/[0.03] bg-off-white"
            >
              <img
                src="/images/case-studies/Case 1.jpg"
                alt="iWish Mobile Gifting Mockups"
                className="w-full h-auto object-cover max-h-[500px]"
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
              <p className="text-dark-neutral font-bold text-sm md:text-base">3 Months</p>
            </div>
            <div className="flex flex-col items-start text-left md:border-r border-black/[0.08] last:border-r-0 md:pl-6 md:pr-4">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Tools</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">Figma</p>
            </div>
            <div className="flex flex-col items-start text-left md:pl-6">
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Platform</p>
              <p className="text-dark-neutral font-bold text-sm md:text-base">Mobile App (iOS & Android)</p>
            </div>
          </div>
        </section>

        {/* CONTEXT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— CONTEXT</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 font-heading leading-tight">
              Bringing Wishes, Contributions, and Community Together
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
              People often share wishes through social media, messaging apps, and crowdfunding platforms. While these channels help users reach potential supporters, the experience is often fragmented and difficult to manage.
            </p>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
              iWish was conceived as a unified platform where users can create wishes, receive support, track contributions, and manage funds without relying on multiple tools.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-off-white border border-black/[0.02]">
              <img
                src="/images/case-studies/Case 1vv.png"
                alt="iWish Wallet and Transaction Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/[0.03]">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— PROBLEM</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 font-heading leading-tight">
              Supporting a Wish Should Be Simple
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
              Existing solutions presented several challenges:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Wishlists lacked fulfillment mechanisms.",
                "Crowdfunding platforms felt transactional.",
                "Contributors had limited visibility into progress.",
                "Users struggled to manage gifts and funds effectively."
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
              This created friction for both wish creators and supporters.
            </p>
          </div>
          <div className="lg:col-span-5 w-full bg-forest-green rounded-2xl p-8 text-left border border-white/5 shadow-md self-center min-h-[200px] flex flex-col justify-center">
            <p className="text-lime-green text-xs font-bold uppercase tracking-wider mb-3">Design Challenge</p>
            <p className="text-white text-base md:text-lg font-light leading-relaxed italic">
              "How might we create a platform that makes wishing, gifting, crowdfunding, and contribution management simple and accessible for everyone?"
            </p>
          </div>
        </section>

        {/* GOALS SECTION */}
        <section className="w-full bg-card-white border-t border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— GOALS</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 font-heading">
              Product Goals
            </h2>
            <p className="text-muted-neutral text-sm md:text-base mb-10 font-light max-w-2xl">
              To guide the design process, the project focused on three objectives:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Enable Flexible Contributions", desc: "Support both direct gifting and collective funding." },
                { num: "02", title: "Increase Trust", desc: "Provide transparency throughout the contribution journey." },
                { num: "03", title: "Encourage Community Participation", desc: "Create opportunities for broader support and engagement." }
              ].map((goal) => (
                <div key={goal.num} className="bg-forest-green text-white rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between min-h-[180px] shadow-sm hover:scale-[1.01] transition-transform duration-200">
                  <span className="text-lime-green text-2xl font-black">{goal.num}</span>
                  <div>
                    <h4 className="font-bold text-base mb-2 font-heading">{goal.title}</h4>
                    <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS SECTION */}
        <section className="w-full bg-off-white border-y border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-card-white border border-black/[0.02]">
                <img
                  src="/images/case-studies/Case 12.jpg"
                  alt="iWish User Research Mockups"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— INSIGHTS</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 font-heading leading-tight">
                  Understanding How People Give and Receive Support
                </h2>
                <p className="text-muted-neutral text-sm md:text-base font-light mb-2">
                  Through stakeholder discussions and product discovery, several patterns emerged:
                </p>
              </div>

              {/* Insights List */}
              <div className="flex flex-col gap-4">
                {[
                  { title: "People Already Share Wishes Socially", desc: "Most wishes originate from existing communities and social networks." },
                  { title: "Trust Influences Participation", desc: "Users are more likely to contribute when they can clearly see how support is being managed." },
                  { title: "Contribution Needs Vary", desc: "Some wishes require a single contributor, while others benefit from collective funding." }
                ].map((insight, idx) => (
                  <div key={idx} className="bg-card-white border border-black/[0.03] p-5 rounded-xl shadow-sm text-left hover:border-lime-green/30 transition-colors">
                    <h4 className="font-bold text-dark-neutral text-sm md:text-base mb-1 font-heading">{insight.title}</h4>
                    <p className="text-muted-neutral text-xs md:text-sm font-light leading-relaxed">{insight.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-neutral text-xs md:text-sm font-light italic mt-2">
                These insights informed the product strategy and experience design.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="w-full bg-card-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— SOLUTION</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-12 font-heading">
              Crafting the Core Experience
            </h2>

            {/* Subsection 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-heading leading-tight">
                  Making Wish Creation and Giving Effortless
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                  At the heart of iWish was the challenge of simplifying how users create wishes and receive support.
                </p>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  To reduce friction, I designed a guided wish creation flow that progressively reveals information, helping users focus on one step at a time. The platform also supports both direct gifting and community contributions, allowing users to choose the most appropriate way to support a wish.
                </p>
                <ul className="space-y-3">
                  {[
                    "Simplified multi-step wish creation flow",
                    "Support for both direct gifting and group contributions",
                    "Progressive disclosure to reduce cognitive load",
                    "Clear progress tracking throughout the contribution journey"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-off-white border border-black/[0.02]">
                  <img
                    src="/images/case-studies/Case 13.jpg"
                    alt="Guided Wish Creation Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-[340px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-off-white border border-black/[0.02]">
                  <img
                    src="/images/case-studies/Case 1vv.png"
                    alt="Wallet Balance and History Transactions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-heading leading-tight">
                  Designing for Trust and Financial Confidence
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                  Because financial transactions are central to the experience, trust became a key design priority. I introduced transparent contribution tracking, clear payment feedback, and flexible privacy controls to help users feel confident when giving or receiving support.
                </p>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  The integrated wallet further streamlined the experience by enabling users to receive funds, manage balances, withdraw earnings, and support others without leaving the platform.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time contribution visibility",
                    "Transparent transaction feedback",
                    "Anonymous giving options",
                    "Integrated wallet management"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DECISIONS SECTION */}
        <section className="w-full bg-off-white border-y border-black/[0.03] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— DECISIONS</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 font-heading leading-tight">
                Separating Creator and NGO Experiences
              </h2>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                During the design process, one challenge was ensuring users could easily distinguish between personal wishes and NGO campaigns. Although both experiences involve support and contributions, their contexts and user expectations differ significantly.
              </p>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-5">
                To improve clarity and content discoverability, I introduced separate navigation tabs for:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Creator Wishes",
                  "NGO Campaigns"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-muted-neutral text-xs md:text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                This structure reduced cognitive load and helped users quickly find the type of content most relevant to them.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm bg-card-white border border-black/[0.02]">
                <img
                  src="/images/case-studies/Case 1.jpg"
                  alt="Personal vs NGO tabbed experience layout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className="w-full bg-card-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 inline-block">— SHOWCASE</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 font-heading">
              A Unified Social Gifting Ecosystem
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-10 max-w-4xl">
              The final design brings together wish creation, gifting, crowdfunding, wallet management, and community engagement into a single experience. By simplifying complex workflows and introducing flexible contribution models, iWish creates a trusted environment where people can support meaningful goals and causes more effectively.
            </p>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-off-white border border-black/[0.02] hover:scale-[1.02] transition-transform duration-300">
                <img src="/images/case-studies/Case 1.jpg" alt="Showcase Screen 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-off-white border border-black/[0.02] hover:scale-[1.02] transition-transform duration-300">
                <img src="/images/case-studies/Case 1vv.png" alt="Showcase Screen 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-off-white border border-black/[0.02] hover:scale-[1.02] transition-transform duration-300">
                <img src="/images/case-studies/Case 12.jpg" alt="Showcase Screen 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-off-white border border-black/[0.02] hover:scale-[1.02] transition-transform duration-300">
                <img src="/images/case-studies/Case 13.jpg" alt="Showcase Screen 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME & IMPACT SECTION */}
        <section className="w-full bg-card-white pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-accent-green/10 border border-accent-green/20 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                  Outcome & Impact
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Reduced complexity in the wish creation journey.",
                    "Enabled multiple contribution methods for different user needs.",
                    "Created distinct experiences for creators and NGOs.",
                    "Established a scalable foundation for future product growth.",
                    "Delivered designs approved for implementation."
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-accent-green text-sm md:text-base leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:border-l lg:border-accent-green/20 lg:pl-10">
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                  Key Learnings
                </h3>
                <p className="text-accent-green text-sm md:text-base leading-relaxed font-light">
                  Designing iWish highlighted how financial interactions require a high level of transparency and trust. Small decisions such as contribution visibility, payment clarity, and progress tracking had a significant impact on user confidence. It also reinforced the importance of balancing emotional motivations with practical user needs when designing community-driven products.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
