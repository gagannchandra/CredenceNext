"use client";

import Link from "next/link";
import { Sun, TreePine, Building, Lamp, ShieldCheck, Droplets } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const categories = [
  {
    icon: Lamp,
    title: "Outdoor Wall Lights",
    description: "IP65-rated wall-mounted fixtures for facades, entrances, corridors, and perimeter lighting. Available in up/down, directional, and decorative styles."
  },
  {
    icon: TreePine,
    title: "Garden & Landscape Lighting",
    description: "Spike lights, bollard lights, pathway markers, and tree uplighters designed to enhance outdoor living spaces and landscape features."
  },
  {
    icon: Building,
    title: "Facade Lighting",
    description: "High-power wall washers, linear facade fixtures, and architectural projectors for building exteriors, monuments, and landmark illumination."
  },
  {
    icon: Sun,
    title: "Floodlights & Area Lighting",
    description: "Wide-beam LED floodlights for parking lots, sports facilities, construction sites, and large outdoor areas requiring high lumen output."
  },
  {
    icon: Droplets,
    title: "Pool & Water Feature Lighting",
    description: "IP68-rated submersible fixtures for swimming pools, fountains, water walls, and decorative pond lighting."
  },
  {
    icon: ShieldCheck,
    title: "Bollard & Pathway Lights",
    description: "Low-level pathway fixtures with anti-glare optics for walkways, gardens, driveways, and public spaces."
  }
];

const faqs = [
  { id: "od1", question: "What IP rating do I need for outdoor lights in Dubai?", answer: "For general outdoor use (under cover or on walls), IP65 is sufficient. For ground-level installations exposed to direct rain and sand, IP66 or IP67 is recommended. For pool and water feature lighting, IP68 is required for submersible fixtures." },
  { id: "od2", question: "How do I protect outdoor lights from sand and humidity?", answer: "Use fixtures with proper IP ratings (IP65 minimum), marine-grade or powder-coated aluminum housings, and stainless steel screws. Avoid fixtures with exposed metal contacts. Regular cleaning of optical surfaces helps maintain light output in dusty conditions." },
  { id: "od3", question: "What is the best lighting for a Dubai garden?", answer: "A layered approach works best: uplighters on key trees and palms, pathway bollards for safe navigation, and subtle accent lights on water features or architectural elements. Use warm white (2700K to 3000K) for a natural, inviting atmosphere." },
  { id: "od4", question: "What is the difference between IP65 and IP68?", answer: "IP65 protects against low-pressure water jets from any direction — suitable for wall-mounted outdoor fixtures. IP68 protects against continuous submersion in water — required for pool lights and underwater fixtures. The first digit (6) indicates full dust protection in both cases." },
  { id: "od5", question: "Can LED outdoor lights withstand Dubai's summer heat?", answer: "Quality LED outdoor fixtures are designed to operate at ambient temperatures up to 50°C or higher. Look for fixtures with proper aluminum heat sinks and thermal management. Avoid plastic-bodied outdoor fixtures as they can deform in extreme heat." },
  { id: "od6", question: "How much do outdoor lighting installations cost in Dubai?", answer: "Costs vary significantly based on project scale, fixture quality, and installation complexity. A basic villa garden lighting scheme might start from AED 15,000 to 25,000, while large commercial facade projects can exceed AED 200,000. Contact us with your project details for an accurate estimate." },
];

export default function OutdoorLightingDubai() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.credencelighting.com/products" },
      { "@type": "ListItem", "position": 3, "name": "Outdoor Lighting Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Outdoor Lighting Dubai · Credence Lighting"
        description="Premium outdoor lighting in Dubai — garden lights, wall lights, facade fixtures, and landscape lighting. IP-rated for Gulf climate. Visit our showroom."
        schema={[breadcrumbSchema]}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
                Outdoor Lighting Dubai
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Outdoor Lighting{" "}
                <span className="italic text-brand-gold">Built for the Gulf</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Credence Lighting supplies IP-rated outdoor lighting fixtures engineered for Dubai&apos;s 
                extreme heat, sandstorms, and coastal humidity. From garden landscapes and villa 
                exteriors to commercial facades and public spaces, every fixture is selected for 
                durability, performance, and visual impact.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/products/outdoor" className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button">
                  Browse Outdoor Products
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button">
                  Request a Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* IP RATING TABLE */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center">
                Understanding IP Ratings for Outdoor Lighting
              </h2>
              <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
                IP (Ingress Protection) ratings define how well a fixture resists dust and water. 
                Choosing the correct IP rating is essential for outdoor installations in the Gulf.
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="overflow-x-auto">
                <table className="w-full text-center md:text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">IP Rating</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Protection Level</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60 text-sm">
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white font-medium">IP44</td>
                      <td className="py-3 pr-6">Splash-proof</td>
                      <td className="py-3">Covered porches, sheltered balconies</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white font-medium">IP65</td>
                      <td className="py-3 pr-6">Water jet resistant, dust-tight</td>
                      <td className="py-3">Wall lights, facade fixtures, general outdoor</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white font-medium">IP66</td>
                      <td className="py-3 pr-6">High-pressure water resistant</td>
                      <td className="py-3">Exposed areas, coastal installations</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white font-medium">IP67</td>
                      <td className="py-3 pr-6">Temporary submersion (30 min at 1m)</td>
                      <td className="py-3">In-ground lights, recessed pathway</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white font-medium">IP68</td>
                      <td className="py-3 pr-6">Continuous submersion</td>
                      <td className="py-3">Pool lights, fountains, water features</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">
                Outdoor Lighting Categories
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <FadeUp key={cat.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {cat.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* GUIDE CONTENT */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                Planning Outdoor Lighting in Dubai
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Outdoor lighting in Dubai requires more attention to material selection and 
                  thermal engineering than most other regions. The combination of temperatures 
                  exceeding 45°C, sand-laden winds, and coastal salt exposure creates one of the 
                  most demanding environments for exterior lighting fixtures.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Material Selection</h3>
                <p>
                  Always specify marine-grade aluminum or die-cast aluminum with powder-coated 
                  finishes. Avoid mild steel housings — they corrode rapidly in Gulf conditions. 
                  Stainless steel fixings (A4/316 grade) are essential for all outdoor 
                  installations near the coast.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Lighting Design for Landscapes</h3>
                <p>
                  The most effective garden lighting creates depth by combining multiple fixture 
                  types at different heights. Uplighters on palms and trees create vertical 
                  interest, pathway bollards define circulation routes, and low-level wash lights 
                  graze across textured stone walls to reveal surface detail.
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
                  { label: "Outdoor Products", to: "/products/outdoor" },
                  { label: "Facade Products", to: "/products/facade" },
                  { label: "Ceiling Lights", to: "/ceiling-lights-dubai" },
                  { label: "Lighting Company", to: "/lighting-company-dubai" },
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
            <InlineFAQ faqs={faqs} heading="Outdoor Lighting — Frequently Asked Questions" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Plan Your Outdoor Lighting Project
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  Our team specializes in outdoor and landscape lighting for Dubai&apos;s unique climate. 
                  Share your project details and we will recommend the right fixtures and layout.
                </p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 relative z-10">
                  Get a Free Consultation
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
