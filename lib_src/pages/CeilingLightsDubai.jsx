"use client";

import Link from "next/link";
import { Layers, Sun, Lightbulb, Ruler, Palette, Zap } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const ceilingTypes = [
  {
    icon: Layers,
    title: "Recessed Downlights",
    description: "Flush-mounted fixtures that sit within the ceiling cavity, creating a clean, minimal appearance ideal for modern interiors."
  },
  {
    icon: Sun,
    title: "Surface-Mounted Panels",
    description: "Sleek LED panels that attach directly to the ceiling surface — perfect for spaces without a ceiling void."
  },
  {
    icon: Lightbulb,
    title: "Decorative Pendants",
    description: "Statement fixtures that hang from the ceiling to create focal points over dining tables, kitchen islands, and reception areas."
  },
  {
    icon: Ruler,
    title: "Linear Profiles",
    description: "Continuous LED profiles for seamless lines of light across ceilings, corridors, and architectural features."
  },
  {
    icon: Palette,
    title: "Cove Lighting",
    description: "Indirect LED strip installations concealed in ceiling recesses that provide soft, ambient illumination without visible fixtures."
  },
  {
    icon: Zap,
    title: "Track Lighting",
    description: "Adjustable spotlight systems mounted on ceiling tracks for flexible accent lighting in retail, galleries, and hospitality spaces."
  }
];

const faqs = [
  { id: "cd1", question: "What are the best ceiling lights for low ceilings?", answer: "For ceilings under 2.7 meters, recessed LED downlights or ultra-slim surface-mounted panels are ideal. They provide excellent illumination without reducing headroom. Avoid pendant lights or chandeliers in low-ceiling spaces." },
  { id: "cd2", question: "How many downlights do I need per room?", answer: "Plan for one downlight per 1.5 to 2 square meters of floor space in living areas. Kitchens and workspaces may need higher density at one per 1 to 1.2 square meters. The exact number depends on ceiling height, fixture lumen output, and desired lux level." },
  { id: "cd3", question: "What is the difference between recessed and surface-mounted ceiling lights?", answer: "Recessed lights sit flush within the ceiling cavity, creating a minimal appearance. Surface-mounted lights attach directly to the ceiling and are ideal where there is no ceiling void. Both can deliver excellent performance — the choice depends on your ceiling construction." },
  { id: "cd4", question: "What color temperature is best for ceiling lights in Dubai?", answer: "For living rooms and bedrooms, warm white (2700K to 3000K) creates a cozy atmosphere. For kitchens and offices, neutral white (4000K) provides better task visibility. Consider tunable white fixtures for spaces that serve multiple purposes." },
  { id: "cd5", question: "Can I buy ceiling lights from a showroom in Dubai?", answer: "Yes. Visit the Credence Lighting showroom at Dubai Investment Park 1 to see ceiling lights in working displays. Compare recessed, surface-mounted, and pendant options side by side with different color temperatures and beam angles." },
  { id: "cd6", question: "What ceiling lights are best for modern interiors?", answer: "Modern interiors typically use a combination of recessed downlights for general illumination, linear LED profiles for architectural accents, and carefully placed decorative pendants as focal points. The key is using minimal, clean-line fixtures that complement rather than dominate the space." },
];

export default function CeilingLightsDubai() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.credencelighting.com/products" },
      { "@type": "ListItem", "position": 3, "name": "Ceiling Lights Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Ceiling Lights Dubai · Credence Lighting"
        description="Premium LED ceiling lights in Dubai — recessed downlights, surface panels, linear profiles, and decorative pendants. Visit our showroom or request a project quote."
        schema={[breadcrumbSchema]}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
                Ceiling Lights Dubai
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Premium Ceiling Lights{" "}
                <span className="italic text-brand-gold">for Every Space</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                From ultra-slim recessed downlights to statement-making decorative pendants, 
                Credence Lighting supplies premium ceiling lights for residential, commercial, 
                and hospitality projects across Dubai and the UAE. Browse our range or visit 
                our showroom to see fixtures in working displays.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/products/indoor" className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button">
                  Browse Indoor Products
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button">
                  Request a Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CEILING TYPES */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  Types of Ceiling Lights We Supply
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Every ceiling lighting project is different. We offer a complete range of 
                  LED ceiling fixtures to suit any architectural style and performance requirement.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceilingTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <FadeUp key={type.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {type.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SPECIFICATION TABLE */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
                Ceiling Light Specifications
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="overflow-x-auto">
                <table className="w-full text-center md:text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Specification</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Recessed</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4 pr-6">Surface</th>
                      <th className="text-brand-gold text-sm uppercase tracking-wider py-4">Linear</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60 text-sm">
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">Color Temperature</td>
                      <td className="py-3 pr-6">2700K – 6500K</td>
                      <td className="py-3 pr-6">3000K – 5000K</td>
                      <td className="py-3">2700K – 6500K (Tunable)</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">CRI</td>
                      <td className="py-3 pr-6">≥90</td>
                      <td className="py-3 pr-6">≥80</td>
                      <td className="py-3">≥90</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">Beam Angle</td>
                      <td className="py-3 pr-6">15° – 60°</td>
                      <td className="py-3 pr-6">120°</td>
                      <td className="py-3">120° – 180°</td>
                    </tr>
                    <tr className="border-b border-border-subtle">
                      <td className="py-3 pr-6 text-white">Dimming</td>
                      <td className="py-3 pr-6">DALI, 0-10V, Triac</td>
                      <td className="py-3 pr-6">On/Off, DALI</td>
                      <td className="py-3">DALI, 0-10V, Casambi</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white">Lifespan</td>
                      <td className="py-3 pr-6">50,000+ hrs (L80)</td>
                      <td className="py-3 pr-6">50,000+ hrs (L80)</td>
                      <td className="py-3">50,000+ hrs (L80)</td>
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
                How to Choose Ceiling Lights for Your Project
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Selecting the right ceiling lights depends on the purpose of the space, ceiling 
                  construction, desired aesthetic, and technical requirements such as dimming and 
                  color temperature control.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Consider the Ceiling Height</h3>
                <p>
                  Low ceilings (under 2.7 meters) call for flush-mounted or recessed fixtures to 
                  maximize headroom. Standard ceilings (2.7 to 3.0 meters) offer flexibility for 
                  both recessed and low-profile pendants. High ceilings (above 3.0 meters) can 
                  accommodate dramatic pendant installations and chandeliers.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Match the Color Temperature to the Function</h3>
                <p>
                  Warm white (2700K to 3000K) suits residential living areas, hotel rooms, and 
                  restaurants. Neutral white (4000K) works well for offices, kitchens, and retail. 
                  For maximum flexibility, specify tunable white fixtures that can shift between 
                  warm and cool throughout the day.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Plan the Layout</h3>
                <p>
                  A common mistake is spacing downlights too far apart, creating pools of light 
                  with dark areas between them. As a rule of thumb, space recessed downlights at 
                  approximately half the ceiling height. For a 3-meter ceiling, that means spacing 
                  fixtures about 1.5 meters apart.
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
                  { label: "Pendant Lights", to: "/pendant-lights-dubai" },
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
            <InlineFAQ faqs={faqs} heading="Ceiling Lights — Frequently Asked Questions" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Need Help Choosing Ceiling Lights?
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  Visit our Dubai showroom to see ceiling lights in working displays, or contact 
                  our team for a tailored recommendation based on your project requirements.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Link href="/contact" className="px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300">
                    Get a Quote
                  </Link>
                  <Link href="/lighting-showroom-dubai" className="px-8 py-3 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors duration-300">
                    Visit Showroom
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
