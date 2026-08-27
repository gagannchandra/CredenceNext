"use client";

import Link from "next/link";
import { Waves, Ruler, Palette, Shield, Cpu, Zap } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const stripTypes = [
  { icon: Waves, title: "Flexible LED Strips", description: "Bendable PCB strips available in single-color, tunable white, and RGB/RGBW configurations. Standard 8mm and 10mm widths for cove lighting and accent applications." },
  { icon: Ruler, title: "Rigid LED Bars", description: "Aluminum-backed LED bars for straight-line applications where a flexible strip would sag. Ideal for shelf lighting, display cases, and under-cabinet installations." },
  { icon: Palette, title: "RGBW & Pixel Strips", description: "Full-color addressable strips with individual LED control for dynamic color effects, entertainment lighting, and architectural feature walls." },
  { icon: Shield, title: "IP-Rated Outdoor Strips", description: "Silicone-encased (IP65) and tube-enclosed (IP67/IP68) strips for outdoor coves, facade accents, pool surrounds, and water feature integration." },
  { icon: Cpu, title: "Neon Flex", description: "Silicone extrusion profiles that replicate the appearance of traditional neon with the efficiency and safety of LED technology. Bendable in any direction." },
  { icon: Zap, title: "High-Density Strips", description: "120 to 240 LEDs per meter for dot-free illumination in architectural profiles. Essential for close-proximity viewing where individual LED dots must be invisible." },
];

const faqs = [
  { id: "st1", question: "Can LED strip lights be used outdoors in Dubai?", answer: "Yes, but you need the right IP rating. IP65 strips have a silicone coating suitable for sheltered outdoor areas. IP67 or IP68 strips are enclosed in waterproof tubing and can withstand direct rain or even submersion. For Dubai's climate, also ensure the adhesive is rated for high ambient temperatures." },
  { id: "st2", question: "How long do LED strip lights last?", answer: "High-quality LED strips typically last 30,000 to 50,000 hours at L70 (70% of original brightness). At 8 hours of daily use, that translates to roughly 10 to 17 years before noticeable dimming. Quality of the LED chip and thermal management are the two biggest factors affecting lifespan." },
  { id: "st3", question: "Can you cut LED strip lights to a specific length?", answer: "Yes. LED strips are designed to be cut at designated intervals, typically every 50mm or 100mm, marked with a cut-line icon. Cutting at these points ensures the remaining strip functions correctly. Custom lengths can be prepared at our facility before delivery." },
  { id: "st4", question: "What is the best color temperature for LED strips?", answer: "For ambient cove lighting in living spaces, 2700K to 3000K (warm white) creates a cozy glow. For task areas like kitchens and offices, 4000K (neutral white) provides better visibility. Tunable white strips (2700K to 6500K) offer maximum flexibility for spaces with changing needs." },
  { id: "st5", question: "How many LEDs per meter do I need?", answer: "For general ambient cove lighting, 60 LEDs per meter is sufficient. For close-proximity applications where the strip is visible (such as shallow profiles or low shelves), use 120 to 240 LEDs per meter for a smooth, dot-free line of light." },
  { id: "st6", question: "What power supply do LED strips need?", answer: "Most LED strips run on 12V or 24V DC power supplies. For runs longer than 5 meters, 24V strips are preferred as they experience less voltage drop. Always size the power supply to 120% of the total strip wattage to avoid overloading." },
];

export default function LEDStripLightsDubai() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.credencelighting.com/products" },
      { "@type": "ListItem", "position": 3, "name": "LED Strip Lights Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="LED Strip Lights Dubai · Credence Lighting"
        description="Premium LED strip lights in Dubai, flexible strips, neon flex, RGBW, IP-rated outdoor strips, and high-density architectural profiles. Cut-to-length service available."
        schema={[breadcrumbSchema]}
      />
      <div className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">LED Strip Lights Dubai</p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                LED Strip Lights{" "}
                <span className="italic text-brand-gold">for Every Application</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Credence Lighting supplies architectural-grade LED strip lights for cove lighting, 
                accent illumination, facade highlighting, and decorative applications. Available in 
                single-color, tunable white, RGB, and addressable pixel configurations. All 
                cut-to-length and ready for installation.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/contact" className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button">
                  Enquire
                </Link>
                <Link href="/lighting-showroom-dubai" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button">
                  Visit Showroom
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* STRIP TYPES */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">LED Strip Light Types</h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stripTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <FadeUp key={type.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">{type.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SPEC TABLE */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
                LED Strip Specifications at a Glance
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="overflow-x-auto">
                <table className="w-full text-center md:text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Specification</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Standard</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4">High-Density</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60 text-sm">
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">LEDs per meter</td>
                      <td className="py-3 pr-6">60 - 120</td>
                      <td className="py-3">120 - 240</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">CRI</td>
                      <td className="py-3 pr-6">≥80</td>
                      <td className="py-3">≥90</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">Voltage</td>
                      <td className="py-3 pr-6">12V / 24V DC</td>
                      <td className="py-3">24V / 48V DC</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">IP Rating</td>
                      <td className="py-3 pr-6">IP20 / IP65</td>
                      <td className="py-3">IP20 / IP65 / IP67</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">Cutting Interval</td>
                      <td className="py-3 pr-6">50mm / 100mm</td>
                      <td className="py-3">25mm / 50mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white">Lifespan</td>
                      <td className="py-3 pr-6">30,000+ hrs (L70)</td>
                      <td className="py-3">50,000+ hrs (L70)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* GUIDE CONTENT */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                How to Choose the Right LED Strip
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  LED strips are among the most versatile lighting products available, but choosing 
                  the wrong specification leads to disappointing results. Here are the key factors 
                  to consider.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">LED Density and Dot Visibility</h3>
                <p>
                  The number of LEDs per meter determines whether individual dots are visible. 
                  For cove lighting where the strip is hidden behind a lip, 60 LEDs/m is usually 
                  sufficient. For close-proximity applications where the diffuser is shallow, 
                  120 to 240 LEDs/m eliminates visible dotting.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Voltage and Run Length</h3>
                <p>
                  12V strips are limited to approximately 5-meter runs before voltage drop causes 
                  visible brightness variation. 24V strips can run up to 10 meters, and 48V strips 
                  extend to 15 meters or more. For long continuous runs, always use 24V or higher 
                  and feed power from both ends.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Profiles and Diffusion</h3>
                <p>
                  Never install LED strips without an aluminum profile and diffuser. The profile 
                  provides proper heat dissipation (critical for lifespan), mechanical protection, 
                  and a clean installation finish. The diffuser mixes the light for a smooth, 
                  homogeneous output.
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
                  { label: "Indoor Products", to: "/products/indoor" },
                  { label: "Ceiling Lights", to: "/ceiling-lights-dubai" },
                  { label: "Outdoor Lighting", to: "/outdoor-lighting-dubai" },
                  { label: "Automation", to: "/products/automation" },
                  { label: "Enquire", to: "/contact" },
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
            <InlineFAQ faqs={faqs} heading="LED Strip Lights: Frequently Asked Questions" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-panel relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Need LED Strip Lights for Your Project?
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  We supply and cut LED strips to your exact specifications. Contact us with your 
                  project details for a tailored recommendation and quote.
                </p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 relative z-10 rounded-button">
                  Get a Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <Footer />
    </PageTransition>
  );
}
