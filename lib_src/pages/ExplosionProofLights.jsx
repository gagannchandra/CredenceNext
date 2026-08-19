"use client";

import Link from "next/link";
import { ShieldCheck, Flame, Zap, Gauge, Factory, HardHat, Compass, Sun, ArrowRight, BookOpen } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const explosionProofCategories = [
  {
    icon: Flame,
    title: "Flameproof High Bay Luminaires",
    description: "High-output Ex d / Ex tb luminaires (12,000–45,000 lm) for high-ceiling refineries, oil processing facilities, and chemical plants with heavy-duty finned heatsinks."
  },
  {
    icon: Factory,
    title: "Hazardous Area Linear Battens",
    description: "Continuous Ex eb mb / Ex db linear LED fixtures for catwalks, pipe racks, spray booths, and chemical corridors with stainless steel latches and through-wiring."
  },
  {
    icon: Sun,
    title: "Marine & Heavy Floodlights",
    description: "IP67/IK10 rated explosion-proof floodlights equipped with 316-grade stainless steel brackets for offshore rigs, loading jetties, tank farms, and flare stacks."
  },
  {
    icon: Compass,
    title: "Hazardous Highway & Corridor Lights",
    description: "Certified roadway & tunnel luminaires engineered for petrochemical transit highways, refinery perimeter avenues, and fuel bunkering transit routes."
  },
  {
    icon: HardHat,
    title: "Flameproof Well Glass & Bulkheads",
    description: "Compact, omnidirectional luminaires with electro-polished protective wire cages for stairwells, pump stations, boiler rooms, and mechanical equipment zones."
  },
  {
    icon: Zap,
    title: "Explosion-Proof Emergency & Exit",
    description: "Autonomous 90–180 minute battery-backed emergency egress luminaires with self-diagnostic circuitry and illuminated hazardous exit graphics."
  }
];

const faqs = [
  {
    id: "ep1",
    question: "What makes a light fixture explosion proof?",
    answer: "An explosion-proof fixture has a heavy-duty, flameproof enclosure (usually copper-free die-cast aluminum or stainless steel) designed to contain an internal explosion if flammable gases or vapors enter the housing and ignite. Precision flame paths (flame arrestors) cool escaping gases so they cannot ignite the explosive atmosphere surrounding the luminaire."
  },
  {
    id: "ep2",
    question: "What is the difference between ATEX and IECEx certifications?",
    answer: "ATEX (Atmosphères Explosibles) is the mandatory European directive (2014/34/EU) for equipment used in hazardous environments within Europe. IECEx is the global international certification standard managed by the International Electrotechnical Commission. Both use compatible zone classification systems (Zone 0, 1, 2) and testing protocols. Credence Lighting supplies luminaires with dual ATEX and IECEx compliance for seamless approval across UAE and GCC industrial authorities."
  },
  {
    id: "ep3",
    question: "Which explosion proof lights are required for Zone 1 vs Zone 2?",
    answer: "Zone 1 areas (where explosive gas atmospheres are likely during normal operations) require Ex d (Flameproof), Ex eb (Increased Safety), or Ex mb encapsulation with high safety factors. Zone 2 areas (where explosive mixtures are unlikely or only occur for short periods) can utilize Ex ec or Ex nR restricted breathing fixtures. High-risk zones like oil separation units mandate Zone 1 fixtures."
  },
  {
    id: "ep4",
    question: "Can explosion proof LED lights operate in 50°C+ Middle East summer heat?",
    answer: "Yes. Credence Lighting's explosion-proof luminaires are specifically engineered for the Middle East climate, rated for ambient operating temperatures from -40°C up to +55°C or +60°C. Advanced thermal management, pure copper heat pipes, and oversized cooling fins ensure that LED junction temperatures stay low and the external enclosure remains strictly within certified T-Class limits."
  },
  {
    id: "ep5",
    question: "Why do highways near chemical plants and refineries need explosion proof lighting?",
    answer: "Highways and transit tunnels surrounding refineries, LNG terminals, and chemical depots carry constant heavy tankers transporting volatile fuels and petrochemicals. Vapor clouds or accidental tanker leaks in these transit corridors create hazardous zones. Standard municipal streetlights lack vapor containment and spark protection, whereas certified explosion-proof roadway fixtures eliminate ignition risk while providing high-speed optical cutoff distributions."
  },
  {
    id: "ep6",
    question: "Do you provide DIALux photometric calculations and ATEX compliance documentation?",
    answer: "Yes. Our industrial engineering team provides complete turnkey photometric calculations in DIALux and Relux, certifying required lux levels, uniformity ratios, and glare control, along with complete ATEX/IECEx certificates, test reports, and specification sheets for civil defense and municipal approvals."
  }
];

export default function ExplosionProofLights() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Explosion Proof Lighting Solutions",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://credencelighting.com/#organization",
      "name": "Credence Lighting",
      "url": "https://credencelighting.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.9788",
        "longitude": "55.1764"
      }
    },
    "description": "Certified ATEX and IECEx explosion-proof LED lighting systems for oil & gas refineries, offshore platforms, chemical plants, and hazardous highway corridors in Dubai, UAE, and GCC."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://credencelighting.com/products" },
      { "@type": "ListItem", "position": 3, "name": "Explosion Proof Lights" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Explosion Proof Lights Dubai · ATEX & IECEx Certified Lighting UAE"
        description="Premium ATEX & IECEx certified explosion-proof LED lights in Dubai & UAE. Flameproof high bays, linear battens, floodlights, and hazardous highway luminaires. Engineered for oil, gas, and petrochemical environments."
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <main className="relative bg-transparent overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/10 backdrop-blur-md mb-6">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span className="uppercase tracking-[0.3em] text-xs text-brand-gold font-medium">
                  ATEX & IECEx Certified Industrial Lighting
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Certified Explosion-Proof{" "}
                <span className="italic text-brand-gold">Lighting Solutions</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Engineered for maximum safety in hazardous oil, gas, chemical, and industrial transit environments across the UAE and GCC. Delivering uncompromised spark containment, extreme thermal resilience up to 55°C, and certified ATEX / IECEx Zone 1 &amp; Zone 2 performance.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/products/explosion-proof"
                  className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button shadow-[0_0_25px_rgba(200,169,107,0.3)]"
                >
                  Explore Ex Products
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button backdrop-blur-sm"
                >
                  Request ATEX Project Quote
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CERTIFICATION & COMPLIANCE BADGES */}
        <section className="py-12 border-y border-white/10 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="p-4 border border-white/5 rounded-card bg-white/[0.02]">
                <p className="text-brand-gold text-2xl md:text-3xl font-serif font-bold">ATEX</p>
                <p className="text-white/60 text-xs uppercase tracking-wider mt-1">Directive 2014/34/EU</p>
              </div>
              <div className="p-4 border border-white/5 rounded-card bg-white/[0.02]">
                <p className="text-brand-gold text-2xl md:text-3xl font-serif font-bold">IECEx</p>
                <p className="text-white/60 text-xs uppercase tracking-wider mt-1">Global Ex Certification</p>
              </div>
              <div className="p-4 border border-white/5 rounded-card bg-white/[0.02]">
                <p className="text-brand-gold text-2xl md:text-3xl font-serif font-bold">IP66 / IP67</p>
                <p className="text-white/60 text-xs uppercase tracking-wider mt-1">Dust &amp; High-Pressure Jets</p>
              </div>
              <div className="p-4 border border-white/5 rounded-card bg-white/[0.02]">
                <p className="text-brand-gold text-2xl md:text-3xl font-serif font-bold">IK10 / T6</p>
                <p className="text-white/60 text-xs uppercase tracking-wider mt-1">Impact &amp; Temp Ratings</p>
              </div>
            </div>
          </div>
        </section>

        {/* HAZARDOUS ZONES CLASSIFICATION MATRIX */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-3 font-medium">
                  Hazardous Area Zoning
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  ATEX &amp; IECEx Zone Classification Matrix
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-base">
                  Hazardous industrial zones are defined by the likelihood and persistence of explosive gases, vapors, or combustible dusts.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="overflow-x-auto border border-white/10 rounded-card bg-white/[0.02] backdrop-blur-md">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="text-brand-gold text-xs uppercase tracking-wider py-4 px-6">Hazard Zone</th>
                      <th className="text-brand-gold text-xs uppercase tracking-wider py-4 px-6">Atmosphere Nature</th>
                      <th className="text-brand-gold text-xs uppercase tracking-wider py-4 px-6">Frequency of Hazard</th>
                      <th className="text-brand-gold text-xs uppercase tracking-wider py-4 px-6">Required Protection</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 text-sm">
                    <tr className="border-b border-border-subtle hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-white">Zone 0 / Zone 20</td>
                      <td className="py-4 px-6">Flammable Gas / Combustible Dust</td>
                      <td className="py-4 px-6 text-white/50">Continuous (&gt;1,000 hrs/yr)</td>
                      <td className="py-4 px-6 text-brand-gold">Ex ia, Ex ma (Two-fault intrinsic safety)</td>
                    </tr>
                    <tr className="border-b border-border-subtle hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-white">Zone 1 / Zone 21</td>
                      <td className="py-4 px-6">Flammable Gas / Combustible Dust</td>
                      <td className="py-4 px-6 text-white/50">Likely during normal ops (10–1,000 hrs/yr)</td>
                      <td className="py-4 px-6 text-brand-gold">Ex d (Flameproof), Ex eb, Ex mb</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-white">Zone 2 / Zone 22</td>
                      <td className="py-4 px-6">Flammable Gas / Combustible Dust</td>
                      <td className="py-4 px-6 text-white/50">Unlikely / short duration (&lt;10 hrs/yr)</td>
                      <td className="py-4 px-6 text-brand-gold">Ex nR, Ex ec (Increased Safety)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* EXPLOSION PROOF FIXTURE TYPES */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-3 font-medium">
                  Product Types
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  Specialized Explosion-Proof Luminaires
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-base">
                  Every fixture in our hazardous range is precision engineered with copper-free cast aluminum enclosures and high-grade borosilicate lenses.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {explosionProofCategories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <FadeUp key={cat.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-brand-gold/40 transition-all duration-500 h-full flex flex-col justify-between">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div>
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                          {cat.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">{cat.description}</p>
                      </div>
                      <Link
                        href="/products/explosion-proof"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors"
                      >
                        View Product Range <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* HIGHWAY & TRANSIT CORRIDOR FOCUS */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-3 font-medium">
                    Hazardous Infrastructure &amp; Transit
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                    Explosion-Proof Highway, Tunnel &amp; Refinery Transit Lighting
                  </h2>
                  <div className="text-white/70 space-y-4 text-base leading-relaxed">
                    <p>
                      Major petrochemical highways, fuel tanker logistics corridors, and industrial port tunnels present unique hazardous zoning challenges. The transit of volatile LNG, crude oil, and chemical cargo creates potential Zone 2 explosive vapor risks along public and private transit routes.
                    </p>
                    <p>
                      Credence Lighting provides specialized explosion-proof roadway luminaires featuring asymmetric batwing optics, IK10 mechanical impact ratings to withstand dynamic heavy-truck pressure waves, and full ATEX Zone 1/2 compliance.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/blog/highways-explosion-proof-lights"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-brand-gold hover:text-black text-white text-xs uppercase tracking-wider transition-all duration-300 rounded-button"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Highway Lighting Guide
                    </Link>
                    <Link
                      href="/blog/types-of-explosion-proof-lights"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold text-xs uppercase tracking-wider transition-all duration-300 rounded-button"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Types of Ex Lights Guide
                    </Link>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={1}>
                <div className="relative rounded-panel overflow-hidden border border-white/10 group">
                  <img
                    src="/images/blog/ai/highways_explosion_proof_lights.webp"
                    alt="Explosion Proof Highway and Tunnel Lighting"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">Corridor Case Study</span>
                      <p className="text-white text-sm font-medium mt-1">Refinery Transit &amp; Hazardous Tunnel Underpass Illumination</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* MIDDLE EAST CLIMATE ENGINEERING CHECKLIST */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                Engineering Built for Gulf Industrial Conditions
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base leading-relaxed">
                <div className="p-8 border border-white/10 rounded-card bg-white/[0.02]">
                  <h3 className="text-white text-xl font-serif mb-3 text-brand-gold">55°C Ambient Thermal Capacity</h3>
                  <p>
                    Summer ambient temperatures in UAE industrial zones routinely touch 50°C. Our fixtures incorporate pure copper heat pipes and oversized finned radiators ensuring internal junction temperatures remain safely below degradation limits and maintain certified T-Class ratings.
                  </p>
                </div>

                <div className="p-8 border border-white/10 rounded-card bg-white/[0.02]">
                  <h3 className="text-white text-xl font-serif mb-3 text-brand-gold">C5-M Marine &amp; H2S Corrosion Defense</h3>
                  <p>
                    Manufactured with ultra-low copper aluminum alloy (&lt;0.1% Cu) and treated with multi-stage fluorocarbon or C5-M marine epoxy coatings to withstand extreme coastal salt fog and corrosive airborne hydrogen sulfide fumes.
                  </p>
                </div>

                <div className="p-8 border border-white/10 rounded-card bg-white/[0.02]">
                  <h3 className="text-white text-xl font-serif mb-3 text-brand-gold">IP66/IP67 Dust &amp; Water Ingress</h3>
                  <p>
                    High-temperature silicone gaskets and labyrinth seal designs ensure zero ingress of fine desert silica dust during heavy shamals or high-pressure equipment washdowns.
                  </p>
                </div>

                <div className="p-8 border border-white/10 rounded-card bg-white/[0.02]">
                  <h3 className="text-white text-xl font-serif mb-3 text-brand-gold">10kV/20kV Surge Suppression</h3>
                  <p>
                    Heavy industrial motor start-ups, switching surges, and lightning strikes are mitigated by multi-stage internal surge suppression modules, safeguarding critical LED arrays and drivers from electrical failure.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* INLINE FAQS */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
                Essential engineering and certification answers for hazardous area lighting projects in Dubai and the GCC.
              </p>
            </FadeUp>

            <InlineFAQ items={faqs} />
          </div>
        </section>

        {/* BOTTOM CONVERSION CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-gradient-to-b from-transparent to-brand-gold/5">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-fluid-h2 font-serif text-white mb-6">
                Consult With Our <span className="italic text-brand-gold">Industrial Lighting Engineers</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                From ATEX Zone 1 certification reviews and DIALux photometric calculations to turnkey luminaire supply, our team ensures complete safety compliance and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button shadow-[0_0_30px_rgba(200,169,107,0.4)]"
                >
                  Contact Engineering Team
                </Link>
                <Link
                  href="/products/explosion-proof"
                  className="px-10 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button"
                >
                  View Product Catalog
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
