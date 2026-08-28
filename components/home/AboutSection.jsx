"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { duration, ease } from "../../utils/motion";
import {
  Wrench,
  Monitor,
  ClipboardList,
  Settings,
  Headset,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import HoverLift from "../ui/motion/HoverLift";
import Counter from "../ui/motion/Counter";

// Three tiles across four columns: 2 + 1 + 1 fills exactly one row, so the
// grid has no empty cell and the widths are not all identical.
const continueLinks = [
  {
    href: "/projects",
    title: "Completed projects",
    description: "Hospitality, retail, and entertainment work across the GCC.",
    image: "/images/hospitality/1.webp",
    wide: true,
  },
  {
    href: "/products",
    title: "Fixture range",
    description: "Indoor, outdoor, facade, and controls.",
    image: "/images/indoor/1.webp",
  },
  {
    href: "/brands",
    title: "Partner brands",
    description: "The manufacturers we specify from.",
    image: "/images/facade/1.webp",
  },
];

export default function AboutSection({ preview = false, asPage = false }) {
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
            We work alongside consultants, developers, and contractors on
            commercial, hospitality, and residential projects across the GCC.
            By combining international and regional brands, we specify lighting
            and audio that balances design intent, measured performance, and a
            realistic budget. One team carries the project from the first layout
            through to commissioning, so nothing gets lost between trades.
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
                <Counter value={number} />
              </p>
              <p className="text-xs text-white/50 leading-snug">
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
                Six stages from first brief to handover, with system validation,
                documentation, and ongoing AMC support at the end of it.
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
                className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 text-center md:text-left"
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

        {/* CONTINUE - asymmetric image tiles.
            Previously three identical glass cards with "Discover" / "Network" /
            "Showcase" labels above them: the three-equal-feature-card pattern
            (Section 9.C) with cell eyebrows and text-glyph arrows. Real
            photography and unequal tile widths give the row a shape. */}
        <div className="mt-32 pt-16 border-t border-border-subtle">
          <h3 className="text-fluid-h2 font-serif text-white mb-4 flex flex-wrap justify-center">
            <TextReveal text="Continue Your Journey" />
          </h3>

          <FadeUp delay={2}>
            <p className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto mb-12 text-center">
              Browse the fixture range, see who we supply, or look through
              completed projects across the region.
            </p>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-[1100px] mx-auto">
            {continueLinks.map((entry, index) => (
              <FadeUp
                key={entry.href}
                delay={4 + index}
                className={entry.wide ? "sm:col-span-2" : ""}
              >
                <Link
                  href={entry.href}
                  className="group relative block h-full min-h-[220px] overflow-hidden rounded-panel border border-white/10 hover:border-brand-gold/30 transition-colors duration-500"
                >
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    sizes={entry.wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    className="object-cover opacity-45 group-hover:opacity-65 group-hover:scale-[1.03] transition-[opacity,transform] duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                    <h4
                      className={`font-serif text-white group-hover:text-brand-gold transition-colors duration-300 ${
                        entry.wide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {entry.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/60">{entry.description}</p>
                    <ArrowRight
                      size={20}
                      aria-hidden="true"
                      className="mt-4 text-brand-gold transition-transform duration-500 group-hover:translate-x-2"
                    />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
        </>
        )}

      </div>
    </section>
  );
}