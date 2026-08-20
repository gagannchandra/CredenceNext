"use client";

import Link from "next/link";
import { Building2, Lightbulb, Globe, Wrench, ShieldCheck, HeadphonesIcon } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const services = [
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

import IndustriesWeServe from "@/components/sections/IndustriesWeServe";

const faqs = [
  { id: "lc1", question: "What makes Credence Lighting different from other lighting companies in Dubai?", answer: "Credence Lighting combines in-house design and manufacturing with supply of premium international brands. We offer end-to-end project delivery from initial concept through commissioning and after-sales support, backed by 10+ years of experience and over 1,000 completed projects across the GCC." },
  { id: "lc2", question: "Does Credence Lighting handle both supply and installation?", answer: "Yes. We provide comprehensive services including lighting design, product supply, installation, testing, commissioning, and ongoing maintenance. Whether you need a single product delivery or a full turnkey lighting solution, we manage the entire process." },
  { id: "lc3", question: "Which areas in the UAE does Credence Lighting serve?", answer: "We serve all Emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Our head office and showroom is located at Dubai Investment Park 1, with project delivery capabilities across the entire GCC region." },
  { id: "lc4", question: "Can Credence Lighting handle large commercial and hospitality projects?", answer: "Absolutely. We have extensive experience delivering lighting for large-scale commercial, hospitality, and entertainment projects. Our portfolio includes multi-location retail rollouts, hotel lobbies, entertainment complexes, and full building facade lighting across Saudi Arabia and the UAE." },
  { id: "lc5", question: "How do I request a lighting project quote?", answer: "You can request a quote by visiting our contact page, calling us at +971 564 965 660, or emailing info@credencelighting.com. Please provide your project type, approximate scope, and any architectural drawings or specifications you have available." },
  { id: "lc6", question: "Does Credence Lighting work with architects and interior designers?", answer: "Yes. We regularly assist architects, interior designers, lighting consultants, and contractors. Our team integrates seamlessly into the design workflow, providing technical lighting layouts, product specifications, and value-engineering recommendations." },
];

export default function LightingCompanyDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lighting Design and Supply",
    "provider": {
      "@type": "Organization",
          "@id": "https://www.credencelighting.com/#organization",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9788",
            "longitude": "55.1764"
          },
      "name": "Credence Lighting LLC",
      "telephone": "+971564965660",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE", "Saudi Arabia", "Bahrain"],
    "description": "Premium architectural, commercial, and hospitality lighting design, supply, and installation services in Dubai and across the GCC."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Lighting Company Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Lighting Company in Dubai · Credence Lighting"
        description="Credence Lighting is a leading lighting company in Dubai providing architectural, commercial, and hospitality lighting. 1000+ projects, 10+ years, GCC-wide delivery."
        schema={[serviceSchema, breadcrumbSchema]}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
                Lighting Company in Dubai
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Premium Lighting Solutions{" "}
                <span className="italic text-brand-gold">for Dubai & the GCC</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Credence Lighting is a leading lighting company in Dubai specializing in architectural, 
                commercial, and hospitality lighting design, supply, and installation. With over a decade 
                of experience and 1,000+ completed projects, we deliver end-to-end lighting solutions 
                that transform spaces across the UAE, Saudi Arabia, and Bahrain.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/contact"
                  className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button"
                >
                  Request a Quote
                </Link>
                <Link href="/projects"
                  className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button"
                >
                  View Our Projects
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* STATS */}
        <section className="relative py-16 border-y border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["10+", "Years Experience"],
              ["1000+", "Projects Delivered"],
              ["30+", "Featured Clients"],
              ["7+", "Countries Served"],
            ].map(([number, label], index) => (
              <FadeUp key={label} delay={index * 1}>
                <div className={`text-center ${index !== 0 ? "md:border-l md:border-white/10" : ""}`}>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{number}</h3>
                  <p className="uppercase tracking-[0.3em] text-xs text-brand-gold/80">{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  What Sets Us Apart as a Lighting Company in Dubai
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  As a full-service lighting supplier and design company in the UAE, we combine 
                  creative lighting design with reliable product supply and professional project execution.
                </p>
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

        {/* INDUSTRIES WE SERVE */}
        <IndustriesWeServe />

        {/* WHY CHOOSE US — CONTENT SECTION FOR SEO */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                How to Choose the Right Lighting Company in Dubai
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="prose prose-invert max-w-none text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Selecting a lighting company in Dubai requires evaluating several factors beyond 
                  price. The UAE&apos;s unique climate, building codes, and architectural ambitions demand 
                  a lighting provider with regional expertise and a proven track record.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Look for End-to-End Capability</h3>
                <p>
                  The best lighting companies in the UAE offer more than product supply. They provide 
                  complete project delivery — from lighting design and technical coordination through 
                  procurement, installation, and commissioning. This single-source approach reduces 
                  coordination risk and ensures design intent is maintained from concept to completion.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Verify Regional Experience</h3>
                <p>
                  Dubai&apos;s extreme temperatures, coastal humidity, and sandstorms place unique demands 
                  on lighting fixtures, especially in outdoor and facade applications. A qualified 
                  lighting supplier in Dubai will understand IP ratings, corrosion-resistant materials, 
                  and thermal management requirements specific to the Gulf region.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Assess the Product Portfolio</h3>
                <p>
                  Leading lighting suppliers in the UAE carry both international premium brands and 
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

        {/* INLINE FAQ */}
        <section className="py-12 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <InlineFAQ
              faqs={faqs}
              heading="Questions About Lighting Companies in Dubai"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Ready to Start Your Lighting Project?
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  From initial concept to final commissioning, our team delivers premium lighting 
                  solutions across the UAE and GCC. Let&apos;s discuss your project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Link href="/contact"
                    className="px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                  <Link href="/products"
                    className="px-8 py-3 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors duration-300"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
