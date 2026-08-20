"use client";

import Link from "next/link";
import { Lightbulb, Ruler, Home, Building2, UtensilsCrossed, Palette } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const styles = [
  { icon: Lightbulb, title: "Statement Pendants", description: "Large-scale decorative fixtures for hotel lobbies, atriums, and grand entrances that serve as the centrepiece of the space." },
  { icon: UtensilsCrossed, title: "Kitchen & Dining Pendants", description: "Low-hung fixtures optimized for task lighting over islands, bars, and dining tables with focused beam distribution." },
  { icon: Home, title: "Residential Decorative", description: "Elegant pendant designs for living rooms, bedrooms, and hallways that complement residential interior palettes." },
  { icon: Building2, title: "Commercial Pendants", description: "Durable, high-performance pendant fixtures for offices, retail, and public spaces with architectural clean lines." },
  { icon: Palette, title: "Custom & Bespoke", description: "Tailored pendant designs manufactured to specific dimensions, finishes, and light distributions for unique architectural applications." },
  { icon: Ruler, title: "Multi-Pendant Systems", description: "Clustered and staggered pendant arrangements for dramatic effect over large tables, reception areas, and double-height spaces." },
];

const faqs = [
  { id: "pd1", question: "How high should pendant lights hang over a dining table?", answer: "Pendant lights should hang approximately 70 to 85 centimeters above the dining table surface. This provides comfortable task lighting without obstructing sightlines. For tables longer than 1.8 meters, use two or three smaller pendants evenly spaced." },
  { id: "pd2", question: "What size pendant light do I need for a kitchen island?", answer: "Choose pendants with a diameter of 30 to 45 centimeters for kitchen islands. Space them 60 to 75 centimeters apart and center them over the island. Use odd numbers (one or three pendants) for the most balanced visual composition." },
  { id: "pd3", question: "What is the difference between a pendant and a chandelier?", answer: "Pendants typically hang from a single cord or rod with one or a few light sources, creating focused or directional light. Chandeliers are multi-armed fixtures with multiple light sources, designed primarily for decorative impact and ambient illumination. In modern design, the distinction is increasingly blurred." },
  { id: "pd4", question: "Can pendant lights be used in bathrooms?", answer: "Yes, but they must meet IP rating requirements based on their position relative to water sources. Pendants in Zone 1 (directly above bath or shower) need IP65 minimum. In Zone 2 and beyond (60cm from water sources), IP44 is sufficient." },
  { id: "pd5", question: "Where can I buy pendant lights in Dubai?", answer: "Visit the Credence Lighting showroom at Dubai Investment Park 1 to see pendant fixtures in working displays. We carry decorative, architectural, and custom pendant solutions for residential, hospitality, and commercial projects." },
  { id: "pd6", question: "Can Credence Lighting create custom pendant designs?", answer: "Yes. For large hospitality and commercial projects, we work with manufacturers to produce bespoke pendant fixtures based on your design concepts. Custom dimensions, finishes, and light distributions are all possible." },
];

export default function PendantLightsDubai() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.credencelighting.com/products" },
      { "@type": "ListItem", "position": 3, "name": "Pendant Lights Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Pendant Lights Dubai · Credence Lighting"
        description="Premium pendant lights and hanging fixtures for Dubai homes, hotels, and commercial spaces. Statement pendants, custom designs, and kitchen island lighting."
        schema={[breadcrumbSchema]}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">Pendant Lights Dubai</p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Pendant & Hanging Lights{" "}
                <span className="italic text-brand-gold">for Every Setting</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                From dramatic lobby chandeliers to minimalist kitchen pendants, Credence Lighting 
                supplies a curated selection of pendant and hanging lights for residential, hospitality, 
                and commercial projects across Dubai. Custom bespoke designs available for unique spaces.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/products/hospitality" className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button">
                  Browse Decorative Fixtures
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button">
                  Request a Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* PENDANT STYLES */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">Pendant Light Styles</h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styles.map((style, index) => {
                const Icon = style.icon;
                return (
                  <FadeUp key={style.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">{style.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{style.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SIZING GUIDE */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                Pendant Light Sizing Guide
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Choosing the right pendant size requires balancing the scale of the fixture 
                  with the proportions of the space and the furniture below it.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Over a Dining Table</h3>
                <p>
                  For rectangular tables, the pendant or pendant cluster should be approximately 
                  two-thirds the width of the table. Hang the fixture 70 to 85 centimeters above 
                  the table surface. For round tables, a single pendant with a diameter roughly 
                  half the table width works well.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Over a Kitchen Island</h3>
                <p>
                  Use pendants with 30 to 45 centimeter diameters. For islands longer than 1.5 
                  meters, use two or three pendants spaced 60 to 75 centimeters apart. Keep the 
                  bottom of the pendant at least 75 centimeters above the countertop to avoid 
                  obstructing sight lines.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">In Double-Height Spaces</h3>
                <p>
                  Large statement pendants or staggered clusters are ideal for double-height 
                  lobbies, atriums, and staircases. The fixture should occupy roughly 25 to 30 
                  percent of the vertical space. A pendant in a 6-meter-high lobby, for example, 
                  might be 1.5 to 1.8 meters tall.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-2xl font-serif text-white mb-8 text-center">Related Pages</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Hospitality Products", to: "/products/hospitality" },
                  { label: "Ceiling Lights", to: "/ceiling-lights-dubai" },
                  { label: "LED Strip Lights", to: "/led-strip-lights-dubai" },
                  { label: "Lighting Showroom", to: "/lighting-showroom-dubai" },
                  { label: "Contact Us", to: "/contact" },
                ].map(link => (
                  <Link key={link.to} href={link.to} className="px-5 py-2 border border-white/10 rounded-button text-white/60 text-sm hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* INLINE FAQ */}
        <section className="py-12 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <InlineFAQ faqs={faqs} heading="Pendant Lights — Frequently Asked Questions" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Looking for the Perfect Pendant?
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  Visit our showroom to see pendant fixtures in person, or contact our team 
                  to discuss custom designs for your project.
                </p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 relative z-10">
                  Discuss Your Project
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
