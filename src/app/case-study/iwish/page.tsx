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
      <main className="min-h-screen bg-[#F4F9F5] pt-28 pb-16 relative font-sans text-dark-neutral">
        
        {/* Floating Interactive Back Button */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#032B1D] text-white hover:bg-lime-green hover:text-forest-green font-bold text-sm transition-all duration-300 shadow-md shadow-[#032B1D]/10 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#032B1D] tracking-tight leading-[1.15] mb-6 font-heading"
                >
                  Designing a Community-Powered Social Gifting Platform
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-neutral text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4"
                >
                  Transforming passive wishlists into a seamless, wallet-powered social gifting and crowdfunding ecosystem.
                </motion.p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <motion.div 
                  variants={itemVariants}
                  className="w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src="/images/case-studies/Case 1.jpg"
                    alt="iWish Mobile Gifting Mockup"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Info Grid / Metadata Bar */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#F4F9F5] rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-black/[0.02]"
            >
              <div>
                <p className="text-[#0B4632] text-xs font-semibold uppercase tracking-wider mb-1">Role</p>
                <p className="text-dark-neutral font-bold text-sm md:text-base">Product Designer</p>
              </div>
              <div>
                <p className="text-[#0B4632] text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
                <p className="text-dark-neutral font-bold text-sm md:text-base">3 Months</p>
              </div>
              <div>
                <p className="text-[#0B4632] text-xs font-semibold uppercase tracking-wider mb-1">Tools</p>
                <p className="text-dark-neutral font-bold text-sm md:text-base">Figma</p>
              </div>
              <div>
                <p className="text-[#0B4632] text-xs font-semibold uppercase tracking-wider mb-1">Platform</p>
                <p className="text-dark-neutral font-bold text-sm md:text-base">Mobile App (iOS & Android)</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CONTEXT SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Context</span>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-6 font-heading">
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
              <div className="w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-[#F4F9F5] border border-black/[0.02]">
                <img
                  src="/images/case-studies/Case 1vv.png"
                  alt="iWish Wallet and Transactions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM & GOALS SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16 flex flex-col gap-16">
          {/* Problem Statement */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Problem</span>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-6 font-heading">
                Supporting a Wish Should Be Simple
              </h2>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                Existing solutions presented several challenges:
              </p>
              <ul className="list-disc pl-5 mb-6 text-muted-neutral text-sm md:text-base leading-relaxed font-light space-y-2">
                <li>Wishlists lacked fulfillment mechanisms.</li>
                <li>Crowdfunding platforms felt transactional.</li>
                <li>Contributors had limited visibility into progress.</li>
                <li>Users struggled to manage gifts and funds effectively.</li>
              </ul>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                This created friction for both wish creators and supporters.
              </p>
            </div>
            {/* Design Challenge Box */}
            <div className="lg:col-span-5 w-full bg-[#032B1D] rounded-2xl p-6 md:p-8 text-left border border-white/5 shadow-md self-center">
              <p className="text-lime-green text-xs font-bold uppercase tracking-wider mb-3">Design Challenge</p>
              <p className="text-white text-base md:text-lg font-light leading-relaxed italic">
                "How might we create a platform that makes wishing, gifting, crowdfunding, and contribution management simple and accessible for everyone?"
              </p>
            </div>
          </div>

          {/* Product Goals */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm text-left">
            <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Goals</span>
            <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-4 font-heading">
              Product Goals
            </h2>
            <p className="text-muted-neutral text-sm md:text-base mb-8 font-light">
              To guide the design process, the project focused on three objectives:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#032B1D] text-white rounded-2xl p-6 border border-white/5 flex flex-col justify-between min-h-[160px]">
                <span className="text-lime-green text-2xl font-black">01</span>
                <div>
                  <h4 className="font-bold text-base mb-2 font-heading">Enable Flexible Contributions</h4>
                  <p className="text-white/70 text-xs md:text-sm font-light">Support both direct gifting and collective funding.</p>
                </div>
              </div>
              <div className="bg-[#032B1D] text-white rounded-2xl p-6 border border-white/5 flex flex-col justify-between min-h-[160px]">
                <span className="text-lime-green text-2xl font-black">02</span>
                <div>
                  <h4 className="font-bold text-base mb-2 font-heading">Increase Trust</h4>
                  <p className="text-white/70 text-xs md:text-sm font-light">Provide transparency throughout the contribution journey.</p>
                </div>
              </div>
              <div className="bg-[#032B1D] text-white rounded-2xl p-6 border border-white/5 flex flex-col justify-between min-h-[160px]">
                <span className="text-lime-green text-2xl font-black">03</span>
                <div>
                  <h4 className="font-bold text-base mb-2 font-heading">Encourage Community Participation</h4>
                  <p className="text-white/70 text-xs md:text-sm font-light">Create opportunities for broader support and engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-[#F4F9F5] border border-black/[0.02]">
                <img
                  src="/images/case-studies/Case 12.jpg"
                  alt="iWish User Research Mockups"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Insights</span>
                <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-4 font-heading">
                  Understanding How People Give and Receive Support
                </h2>
                <p className="text-muted-neutral text-sm md:text-base font-light mb-2">
                  Through stakeholder discussions and product discovery, several patterns emerged:
                </p>
              </div>

              {/* Insights List */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#F4F9F5] border border-black/[0.02] p-5 rounded-xl text-left">
                  <h4 className="font-bold text-dark-neutral text-sm md:text-base mb-1 font-heading">People Already Share Wishes Socially</h4>
                  <p className="text-muted-neutral text-xs md:text-sm font-light">Most wishes originate from existing communities and social networks.</p>
                </div>
                <div className="bg-[#F4F9F5] border border-black/[0.02] p-5 rounded-xl text-left">
                  <h4 className="font-bold text-dark-neutral text-sm md:text-base mb-1 font-heading">Trust Influences Participation</h4>
                  <p className="text-muted-neutral text-xs md:text-sm font-light">Users are more likely to contribute when they can clearly see how support is being managed.</p>
                </div>
                <div className="bg-[#F4F9F5] border border-black/[0.02] p-5 rounded-xl text-left">
                  <h4 className="font-bold text-dark-neutral text-sm md:text-base mb-1 font-heading">Contribution Needs Vary</h4>
                  <p className="text-muted-neutral text-xs md:text-sm font-light">Some wishes require a single contributor, while others benefit from collective funding.</p>
                </div>
              </div>

              <p className="text-muted-neutral text-xs md:text-sm font-light italic mt-2">
                These insights informed the product strategy and experience design.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16 flex flex-col gap-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm text-left">
            <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Solution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-10 font-heading">
              Crafting the Core Experience
            </h2>

            {/* Subsection 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="text-xl md:text-2xl font-bold text-dark-neutral mb-4 font-heading">
                  Making Wish Creation and Giving Effortless
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                  At the heart of iWish was the challenge of simplifying how users create wishes and receive support.
                </p>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  To reduce friction, I designed a guided wish creation flow that progressively reveals information, helping users focus on one step at a time. The platform also supports both direct gifting and community contributions, allowing users to choose the most appropriate way to support a wish.
                </p>
                <ul className="list-disc pl-5 text-muted-neutral text-xs md:text-sm font-light space-y-2">
                  <li>Simplified multi-step wish creation flow</li>
                  <li>Support for both direct gifting and group contributions</li>
                  <li>Progressive disclosure to reduce cognitive load</li>
                  <li>Clear progress tracking throughout the contribution journey</li>
                </ul>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-[#F4F9F5] border border-black/[0.02]">
                  <img
                    src="/images/case-studies/Case 13.jpg"
                    alt="Guided Wish Creation mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-[#F4F9F5] border border-black/[0.02]">
                  <img
                    src="/images/case-studies/Case 1vv.png"
                    alt="Wallet Transactions mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
                <h3 className="text-xl md:text-2xl font-bold text-dark-neutral mb-4 font-heading">
                  Designing for Trust and Financial Confidence
                </h3>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                  Because financial transactions are central to the experience, trust became a key design priority. I introduced transparent contribution tracking, clear payment feedback, and flexible privacy controls to help users feel confident when giving or receiving support.
                </p>
                <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                  The integrated wallet further streamlined the experience by enabling users to receive funds, manage balances, withdraw earnings, and support others without leaving the platform.
                </p>
                <ul className="list-disc pl-5 text-muted-neutral text-xs md:text-sm font-light space-y-2">
                  <li>Real-time contribution visibility</li>
                  <li>Transparent transaction feedback</li>
                  <li>Anonymous giving options</li>
                  <li>Integrated wallet management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DECISIONS SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Decisions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-6 font-heading">
                Separating Creator and NGO Experiences
              </h2>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-4">
                During the design process, one challenge was ensuring users could easily distinguish between personal wishes and NGO campaigns. Although both experiences involve support and contributions, their contexts and user expectations differ significantly.
              </p>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-6">
                To improve clarity and content discoverability, I introduced separate navigation tabs for:
              </p>
              <ul className="list-disc pl-5 text-muted-neutral text-xs md:text-sm font-light space-y-2 mb-6">
                <li>Creator Wishes</li>
                <li>NGO Campaigns</li>
              </ul>
              <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light">
                This structure reduced cognitive load and helped users quickly find the type of content most relevant to them.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-[#F4F9F5] border border-black/[0.02]">
                <img
                  src="/images/case-studies/Case 1.jpg"
                  alt="Creator vs NGO Mockup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/[0.03] shadow-sm text-left">
            <span className="text-xs font-semibold text-[#0B4632] uppercase tracking-widest mb-3 inline-block">— Showcase</span>
            <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-6 font-heading">
              A Unified Social Gifting Ecosystem
            </h2>
            <p className="text-muted-neutral text-sm md:text-base leading-relaxed font-light mb-10 max-w-4xl">
              The final design brings together wish creation, gifting, crowdfunding, wallet management, and community engagement into a single experience. By simplifying complex workflows and introducing flexible contribution models, iWish creates a trusted environment where people can support meaningful goals and causes more effectively.
            </p>

            {/* Showcase Mockups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-[#F4F9F5] border border-black/[0.01]">
                <img src="/images/case-studies/Case 1.jpg" alt="Showcase Screen 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-[#F4F9F5] border border-black/[0.01]">
                <img src="/images/case-studies/Case 1vv.png" alt="Showcase Screen 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-[#F4F9F5] border border-black/[0.01]">
                <img src="/images/case-studies/Case 12.jpg" alt="Showcase Screen 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4] bg-[#F4F9F5] border border-black/[0.01]">
                <img src="/images/case-studies/Case 13.jpg" alt="Showcase Screen 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME & IMPACT SECTION */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-[#EBF7EE] border border-[#A7E2B4]/30 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-[#0B4632] mb-6 font-heading">
                Outcome & Impact
              </h3>
              <ul className="list-disc pl-5 text-[#0B4632] text-sm md:text-base leading-relaxed font-light space-y-3">
                <li>Reduced complexity in the wish creation journey.</li>
                <li>Enabled multiple contribution methods for different user needs.</li>
                <li>Created distinct experiences for creators and NGOs.</li>
                <li>Established a scalable foundation for future product growth.</li>
                <li>Delivered designs approved for implementation.</li>
              </ul>
            </div>
            <div className="lg:border-l lg:border-[#A7E2B4]/40 lg:pl-10">
              <h3 className="text-2xl font-bold text-[#0B4632] mb-6 font-heading">
                Key Learnings
              </h3>
              <p className="text-[#0B4632] text-sm md:text-base leading-relaxed font-light">
                Designing iWish highlighted how financial interactions require a high level of transparency and trust. Small decisions such as contribution visibility, payment clarity, and progress tracking had a significant impact on user confidence. It also reinforced the importance of balancing emotional motivations with practical user needs when designing community-driven products.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
