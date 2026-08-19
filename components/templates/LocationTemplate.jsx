"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Lightbulb, Globe, Wrench, ShieldCheck, HeadphonesIcon } from "lucide-react";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/seo/SEO";
import InlineFAQ from "../../components/seo/InlineFAQ";
import FadeUp from "../../components/ui/motion/FadeUp";
import ArticleBody from "../../components/blog/ArticleBody";

const defaultAdvantages = [
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Bespoke lighting layouts and technical coordination tailored to your architectural vision and project requirements."
  },
  {
    icon: Building2,
    title: "Product Supply",
    description: "Access to premium international and regional lighting brands, curated for performance, quality, and value."
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description: "Professional installation with rigorous testing, system validation, and complete technical documentation."
  },
  {
    icon: Globe,
    title: "Multi-Region Delivery",
    description: "Proven project delivery across the UAE, Saudi Arabia, Bahrain, and the wider GCC region."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every fixture is certified, warranty-backed, and selected for long-term reliability and energy efficiency."
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    description: "Ongoing maintenance, warranty support, and AMC services to keep your lighting performing at its best."
  }
];

import IndustriesWeServe from "../../components/sections/IndustriesWeServe";

export default function LocationTemplate({ 
  seo, 
  schema, 
  hero, 
  stats,
  services, 
  contentBlocks,
  relatedProjects,
  faqs 
}) {

  return (
    <>
      <SEO 
        title={seo.title} 
        description={seo.description}
        schema={schema}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin size={14} className="text-brand-gold" />
                <p className="uppercase tracking-[0.45em] text-xs text-brand-gold">
                  {hero.location}
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                {hero.title} <span className="italic text-brand-gold">{hero.titleItalic}</span>
              </h1>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {hero.description}
              </p>
            </FadeUp>
            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/contact"
                  className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button"
                >
                  Discuss Your {hero.location} Project
                </Link>
                <Link href="/projects"
                  className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button"
                >
                  View Regional Projects
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
                <FadeUp key={label} delay={index * 1}>
                  <div className={`text-center ${index !== 0 ? "md:border-l md:border-white/10" : ""}`}>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{number}</h3>
                    <p className="uppercase tracking-[0.3em] text-xs text-brand-gold/80">{label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>
        )}

        {/* WHAT SETS US APART (GLOBAL) */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  What Sets Us Apart in {hero.location}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  As a full-service lighting supplier and design company, we combine 
                  creative lighting design with reliable product supply and professional project execution.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {defaultAdvantages.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeUp key={service.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
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

        {/* SERVICES IN REGION */}
        {services && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.01] border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                    Comprehensive Lighting Services
                  </h2>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <FadeUp key={service.title} delay={index * 1}>
                      <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10">
                          {Icon && (
                            <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                              <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                            </div>
                          )}
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
        )}

        {/* INDUSTRIES WE SERVE */}
        <IndustriesWeServe />

        {/* RELATED PROJECTS */}
        {relatedProjects && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.01] border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <div className="flex justify-between items-end mb-16">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                      Featured Projects in the Region
                    </h2>
                  </div>
                  <Link href="/projects" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300">
                    <span className="text-sm uppercase tracking-widest">View All</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((project, index) => (
                  <FadeUp key={project.title} delay={index * 1}>
                    <Link href={project.link} className="group block border border-white/10 rounded-panel overflow-hidden bg-white/[0.02] hover:border-brand-gold/30 transition-all duration-500">
                      <div className="h-64 overflow-hidden relative">
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                        <div className="absolute inset-0 bg-transparent/20 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">{project.title}</h3>
                        <p className="text-white/60 text-sm">{project.description}</p>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* AI-OPTIMIZED RICH CONTENT */}
        {contentBlocks && (
          <section className="py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <ArticleBody blocks={contentBlocks} />
            </div>
          </section>
        )}

        {/* HOW TO CHOOSE - SEO CONTENT */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                How to Choose the Right Lighting Company in {hero.location}
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="prose prose-invert max-w-none text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Selecting a lighting company in {hero.location} requires evaluating several factors beyond 
                  price. The region&apos;s unique climate, building codes, and architectural ambitions demand 
                  a lighting provider with specialized expertise and a proven track record.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Look for End-to-End Capability</h3>
                <p>
                  The best lighting companies offer more than product supply. They provide 
                  complete project delivery — from lighting design and technical coordination through 
                  procurement, installation, and commissioning. This single-source approach reduces 
                  coordination risk and ensures design intent is maintained from concept to completion.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Verify Regional Experience</h3>
                <p>
                  Extreme temperatures, coastal humidity, and sandstorms place unique demands 
                  on lighting fixtures, especially in outdoor and facade applications. A qualified 
                  lighting supplier will understand IP ratings, corrosion-resistant materials, 
                  and thermal management requirements specific to the Gulf region.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Assess the Product Portfolio</h3>
                <p>
                  Leading lighting suppliers carry both international premium brands and 
                  custom-manufactured solutions. This dual capability allows for flexibility — you 
                  can specify brand-name products where needed while using cost-effective custom 
                  alternatives for standard applications without compromising quality.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Check the Project Portfolio</h3>
                <p>
                  Review completed projects to assess quality, scale, and industry relevance. A 
                  lighting company with experience across hospitality, retail, commercial, and 
                  residential sectors can bring cross-industry insights that improve design quality 
                  and avoid common pitfalls.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* FAQ SECTION */}
        {faqs && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
              <InlineFAQ 
                faqs={faqs} 
                heading={`Questions About Lighting Companies in ${hero.location}`}
              />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold opacity-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Ready to Discuss Your Project in {hero.location}?
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Connect with our regional lighting design experts to explore solutions tailored perfectly for your space in {hero.location}.
              </p>
              <Link href="/contact"
                className="inline-block px-10 py-5 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button"
              >
                Contact Us Today
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
