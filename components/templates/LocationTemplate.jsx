"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Building2,
  Lightbulb,
  Globe,
  Wrench,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/seo/SEO";
import InlineFAQ from "../../components/seo/InlineFAQ";
import FadeUp from "../../components/ui/motion/FadeUp";
import ArticleBody from "../../components/blog/ArticleBody";
import IndustriesWeServe from "../../components/sections/IndustriesWeServe";

const defaultAdvantages = [
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description:
      "Bespoke lighting layouts and technical coordination tailored to your architectural vision and project requirements.",
  },
  {
    icon: Building2,
    title: "Product Supply",
    description:
      "Access to premium international and regional lighting brands, curated for performance, quality, and value.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "Professional installation with rigorous testing, system validation, and complete technical documentation.",
  },
  {
    icon: Globe,
    title: "Multi-Region Delivery",
    description:
      "Proven project delivery across the UAE, Saudi Arabia, Bahrain, and the wider GCC region.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every fixture is certified, warranty-backed, and selected for long-term reliability and energy efficiency.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Ongoing maintenance, warranty support, and AMC services to keep your lighting performing at its best.",
  },
];

// The four buying criteria that used to sit in a 1,200-word prose wall at the
// bottom of every location page. Same substance, tightened to a scannable
// two-column set (Section 4.9: long content needs a different component, not a
// longer paragraph).
const selectionCriteria = [
  {
    title: "End-to-end capability",
    body: "Design, technical coordination, procurement, installation, and commissioning from one team. Single-source delivery removes the coordination risk that loses design intent between trades.",
  },
  {
    title: "Regional experience",
    body: "Gulf heat, coastal humidity, and sandstorms decide IP ratings, alloy choice, and thermal design. Fixtures specified for a temperate climate fail early here.",
  },
  {
    title: "Portfolio depth",
    body: "International premium brands alongside custom-manufactured fixtures, so you can specify brand-name products where they matter and cost-effective equivalents where they do not.",
  },
  {
    title: "Proven delivery",
    body: "Completed work across hospitality, retail, commercial, and residential sectors. Cross-sector experience is what catches the pitfalls before they reach site.",
  },
];

export default function LocationTemplate({
  seo,
  schema,
  hero,
  stats,
  services,
  contentBlocks,
  relatedProjects,
  faqs,
}) {
  return (
    <>
      <SEO title={seo.title} description={seo.description} schema={schema} />
      <div className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-24 pb-20 px-6 md:px-12">
          <div className="absolute top-0 left-0 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* The page's only eyebrow (Section 4.7). */}
            <FadeUp>
              <p className="flex items-center gap-2 uppercase tracking-[0.35em] text-xs text-brand-gold mb-6">
                <MapPin size={14} aria-hidden="true" />
                {hero.location}
              </p>
            </FadeUp>
            <FadeUp delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-serif text-white max-w-5xl">
                {hero.title}{" "}
                <span className="italic text-brand-gold leading-[1.1] pb-1 inline-block">
                  {hero.titleItalic}
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </FadeUp>
            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
                {/* Was "Discuss Your Ras Al Khaimah Project" - at
                    tracking-[0.2em] that label wrapped to three lines inside
                    the button (Section 4.5). The location is already the H1. */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300 rounded-button"
                >
                  Enquire
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black active:scale-[0.98] transition-[background-color,color,transform] duration-300 rounded-button"
                >
                  View Case Studies
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* STATS */}
        {stats && (
          <section className="relative py-16 border-y border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map(([number, label], index) => (
                <FadeUp key={label} delay={index}>
                  <div
                    className={`text-center ${
                      index !== 0 ? "md:border-l md:border-white/10" : ""
                    }`}
                  >
                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                      {number}
                    </p>
                    <p className="text-xs text-white/50 leading-snug">{label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>
        )}

        {/* WHAT SETS US APART - card grid (layout family 1 of 4) */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 max-w-3xl">
                What sets us apart in {hero.location}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-14">
                Lighting design, product supply, and project execution handled by
                one team, start to finish.
              </p>
            </FadeUp>

            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
              {defaultAdvantages.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeUp key={service.title} delay={index}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-colors duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon
                            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* REGIONAL SERVICES - numbered hairline rows (layout family 2)
            This used to be a second, visually identical icon-card wall directly
            beneath the one above (Section 4.7 layout-repetition ban). */}
        {services && services.length > 0 && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.01] border-y border-white/10">
            <div className="max-w-5xl mx-auto">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-14 max-w-2xl">
                  Comprehensive lighting services
                </h2>
              </FadeUp>

              <div className="divide-y divide-white/10 border-t border-white/10">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <FadeUp key={service.title} delay={index}>
                      <div className="grid md:grid-cols-[auto_1fr_1.4fr] gap-4 md:gap-10 items-start py-8 group">
                        {Icon && (
                          <div className="w-11 h-11 rounded-button bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors duration-500">
                            <Icon
                              className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </div>
                        )}
                        <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-brand-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <IndustriesWeServe />

        {/* REGIONAL PROJECTS - image pair (layout family 3) */}
        {relatedProjects && relatedProjects.length > 0 && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.01] border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-white">
                    Featured projects in the region
                  </h2>
                  <Link
                    href="/projects"
                    className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-widest">
                      All projects
                    </span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </FadeUp>
              <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
                {relatedProjects.map((project, index) => (
                  <FadeUp key={project.title} delay={index}>
                    <Link
                      href={project.link}
                      className="group block h-full border border-white/10 rounded-panel overflow-hidden bg-white/[0.02] hover:border-brand-gold/30 transition-colors duration-500"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LONG-FORM CONTENT - prose column (layout family 4) */}
        {contentBlocks && (
          <section className="py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <ArticleBody blocks={contentBlocks} />
            </div>
          </section>
        )}

        {/* HOW TO CHOOSE - two-column criteria, not a prose wall */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 max-w-3xl">
                How to choose a lighting company in {hero.location}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-14">
                Four things worth checking before you shortlist a supplier.
              </p>
            </FadeUp>

            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {selectionCriteria.map((criterion, index) => (
                <FadeUp key={criterion.title} delay={index}>
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-xl font-serif text-white mb-3">
                      {criterion.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {criterion.body}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {faqs && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
              <InlineFAQ
                faqs={faqs}
                heading={`Questions about lighting companies in ${hero.location}`}
              />
            </div>
          </section>
        )}

        {/* CLOSING CTA */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold opacity-10" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Planning a project in {hero.location}?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Send us the drawings or the brief. Our regional team will come
                back with a lighting approach and an indicative budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300 rounded-button"
              >
                Enquire
              </Link>
            </FadeUp>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
