"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Wrench, Monitor, ClipboardList, Settings, Headset, Briefcase } from "lucide-react";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import HoverLift from "../ui/motion/HoverLift";
import { duration, ease } from "../../utils/motion";

export default function AboutSection({ preview = false, asPage = false }) {
  const router = useRouter();
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id="about"
      className="relative text-white flex flex-col items-center px-6 pt-24 pb-12 md:pt-36 md:pb-24"
    >
      <div className="relative z-10 max-w-[1400px] w-full mx-auto text-center">

        {/* HEADING */}
        <Heading className="flex flex-col items-center">
          <span className="sr-only">Credence: Aesthetics meets functionality</span>
          <span className="text-fluid-h1 font-serif text-white flex flex-wrap justify-center" aria-hidden="true">
            <TextReveal text="Credence: Aesthetics" />
          </span>
          <span className="italic gold-gradient-text text-fluid-h2 font-serif mt-3 leading-none pb-2 flex flex-wrap justify-center" aria-hidden="true">
            <TextReveal text="meets functionality" delay={2} />
          </span>
        </Heading>

        {/* DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: duration.standard, ease: ease.standard }}
          viewport={{ once: true }}
          className="w-24 h-[1px] bg-brand-gold/40 mx-auto mt-8"
        />

        {/* DESCRIPTION */}
        <FadeUp delay={4}>
          <p className="max-w-4xl mx-auto mt-8 text-white/60 text-lg md:text-xl font-light leading-relaxed">
            At Credence Lighting, we bring spaces to life through light and sound. We work hand-in-hand 
            with consultants, developers, and contractors across commercial, hospitality, and residential 
            projects to craft environments people truly love to experience. By carefully blending the best 
            international and regional brands, we curate lighting and audio solutions that hit the perfect 
            sweet spot between stunning design, reliable performance, and practical budgets. For us, it’s all 
            about taking the complexity out of the process—ensuring a seamless journey that results in spaces 
            that look and sound absolutely incredible.
          </p>
        </FadeUp>

        {/* STATS (Moved up for credibility) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 border-y border-white/10 py-12 max-w-[1200px] mx-auto">
          {[
            ["10+", "Years Of Experience"],
            ["7+", "Countries"],
            ["30+", "Clients"],
            ["1000+", "Projects Delivered"],
          ].map(([number, text], index) => (
            <FadeUp
              key={text}
              delay={6 + index * 2}
              className={`text-center ${
                index !== 0
                  ? "md:border-l md:border-white/10"
                  : ""
              }`}
            >
              <p className="text-fluid-h2 font-serif text-white mb-3">
                {number}
              </p>
              <p className="uppercase tracking-[0.3em] text-xs text-brand-gold/80">
                {text}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* SERVICES (Integrated seamlessly) */}
        {!preview && (
        <>
        <div className="mt-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-fluid-h2 font-serif text-white flex flex-wrap justify-center gap-2">
              <TextReveal text="How We" />
              <TextReveal text="Deliver Excellence" delay={2} className="italic gold-gradient-text" />
            </h2>

            <FadeUp delay={4}>
              <p className="text-white/60 text-lg font-light leading-relaxed text-center mt-8">
                End-to-end delivery from design to commissioning.{" "}
                <span className="text-white/80 font-medium">Complete system validation and documentation.</span>{" "}
                Strong after-sales support, including{" "}
                <span className="text-white/80 font-medium">maintenance, warranty, and AMC</span>.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {[
              { title: "Requirement Analysis", desc: "Understanding project objectives, technical needs, and design intent.", icon: ClipboardList },
              { title: "Design & Planning", desc: "Lighting layouts, technical coordination, and value-engineered solutions.", icon: Monitor },
              { title: "Product Selection", desc: "Certified high-quality, and energy-efficient lighting products.", icon: Briefcase },
              { title: "Installation", desc: "Skilled installation with strict safety and quality control.", icon: Wrench },
              { title: "Commissioning", desc: "Complete system testing for performance, safety, and compliance.", icon: Settings },
              { title: "Support", desc: "Documentation, training, warranty support, and after-sales service.", icon: Headset },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
              <FadeUp
                key={service.title}
                delay={index * 2}
                className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 text-center md:text-left"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                    <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeUp>
            )})}
          </div>
        </div>

        {/* CALL TO ACTION CARDS (Moved to the end) */}
        <div className="mt-32 pt-16 border-t border-border-subtle text-center">
          <h3 className="text-fluid-h2 font-serif text-white mb-4 flex flex-wrap justify-center">
            <TextReveal text="Continue Your Journey" />
          </h3>

          <FadeUp delay={2}>
            <p className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto mb-12">
              Immerse yourself in our world of light. Browse our curated collections of premium fixtures or discover how we have transformed spaces across our featured projects.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto text-center">

          {/* PRODUCTS CARD */}
          <FadeUp delay={4} className="h-full">
            <HoverLift className="h-full">
              <button
                type="button"
                onClick={() => router.push("/products")}
                className="group relative overflow-hidden border border-white/10 rounded-3xl p-6 bg-white/[0.03] backdrop-blur-md md:backdrop-blur-2xl transition duration-500 h-full min-h-[160px] flex flex-col items-center justify-center w-full cursor-pointer"
              >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

                  {/* INNER GOLD GLOW */}
                  <div className="absolute w-[150px] h-[150px] bg-white/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  <p className="relative z-10 tracking-[0.3em] uppercase text-xs text-white/40">
                    Discover
                  </p>

                  <h4 className="relative z-10 mt-2 text-xl md:text-2xl font-serif text-white tracking-[0.05em]">
                    Explore Products
                  </h4>

                  <div className="relative z-10 mt-3 text-2xl text-white/40 group-hover:translate-x-2 transition duration-500">
                    →
                  </div>

              </button>
            </HoverLift>
          </FadeUp>

          {/* CLIENTS CARD */}
          <FadeUp delay={5} className="h-full">
            <HoverLift className="h-full">
              <button
                type="button"
                onClick={() => router.push("/brands")}
                className="group relative overflow-hidden border border-white/10 rounded-3xl p-6 bg-white/[0.03] backdrop-blur-md md:backdrop-blur-2xl transition duration-500 h-full min-h-[160px] flex flex-col items-center justify-center w-full cursor-pointer"
              >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

                  {/* INNER GLOW */}
                  <div className="absolute w-[150px] h-[150px] bg-white/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  <p className="relative z-10 tracking-[0.3em] uppercase text-xs text-white/40">
                    Network
                  </p>

                  <h4 className="relative z-10 mt-2 text-xl md:text-2xl font-serif text-white tracking-[0.05em]">
                    Our Clients
                  </h4>

                  <div className="relative z-10 mt-3 text-2xl text-white/40 group-hover:translate-x-2 transition duration-500">
                    →
                  </div>

              </button>
            </HoverLift>
          </FadeUp>

          {/* PORTFOLIO CARD */}
          <FadeUp delay={6} className="h-full">
            <HoverLift className="h-full">
              <button
                type="button"
                onClick={() => router.push("/projects")}
                className="group relative overflow-hidden border border-brand-gold/20 rounded-3xl p-6 bg-brand-gold/[0.03] backdrop-blur-md md:backdrop-blur-2xl transition duration-500 h-full min-h-[160px] flex flex-col items-center justify-center w-full cursor-pointer"
              >

                  {/* GOLD HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />

                  {/* GOLD AMBIENT */}
                  <div className="absolute w-[150px] h-[150px] bg-brand-gold/10 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  <p className="relative z-10 tracking-[0.3em] uppercase text-xs text-brand-gold/60">
                    Showcase
                  </p>

                  <h4 className="relative z-10 mt-2 text-xl md:text-2xl font-serif text-brand-gold tracking-[0.05em]">
                    View Portfolio
                  </h4>

                  <div className="relative z-10 mt-3 text-2xl text-brand-gold/60 group-hover:translate-x-2 transition duration-500">
                    →
                  </div>

              </button>
            </HoverLift>
          </FadeUp>
          </div>
        </div>
        </>
        )}

      </div>
    </section>
  );
}