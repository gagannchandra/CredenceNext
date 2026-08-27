"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Eye, Users, Palette, Settings } from "lucide-react";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import InlineFAQ from "@/components/seo/InlineFAQ";
import PageTransition from "@/components/ui/motion/PageTransition";
import FadeUp from "@/components/ui/motion/FadeUp";

const showroomFeatures = [
  {
    icon: Eye,
    title: "Working Product Displays",
    description: "See our downlights, linear profiles, LED strips, and decorative fixtures operating at different dimming levels and color temperatures."
  },
  {
    icon: Palette,
    title: "Color Temperature Comparison",
    description: "Compare warm white, neutral white, and cool white side by side to make confident decisions for your project."
  },
  {
    icon: Settings,
    title: "Control System Demos",
    description: "Experience DALI, Casambi, and KNX lighting control systems in action. Adjust scenes and dimming from a tablet or wall panel."
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Schedule a one-on-one session with a lighting specialist who can review your drawings and recommend the right fixtures."
  }
];

const productCategories = [
  { name: "Indoor Lighting", description: "Downlights, panels, track lights, and recessed fixtures", link: "/products/indoor" },
  { name: "Outdoor Lighting", description: "IP-rated wall lights, bollards, spike lights, and floodlights", link: "/products/outdoor" },
  { name: "Hospitality Lighting", description: "Chandeliers, decorative pendants, and lobby fixtures", link: "/products/hospitality" },
  { name: "Facade Lighting", description: "Wall washers, linear facades, and architectural projectors", link: "/products/facade" },
  { name: "LED Strip Lighting", description: "Flexible strips, rigid bars, and neon-flex profiles", link: "/products" },
  { name: "Smart Automation", description: "DALI controllers, sensors, and smart lighting systems", link: "/products/automation" },
];

const faqs = [
  { id: "sw1", question: "Where is the Credence Lighting showroom located?", answer: "Our showroom is located at Unit E77, Arabtec Eastern Model, Dubai Investment Park 1, Dubai, UAE. We are near Al Ramla Supermarket. The location is easily accessible from Sheikh Zayed Road and Al Ain Road." },
  { id: "sw2", question: "Do I need an appointment to visit the lighting showroom?", answer: "Walk-ins are welcome during our business hours (Saturday to Thursday, 9 AM to 6 PM). However, we recommend booking an appointment so a dedicated lighting specialist can prepare relevant product demonstrations tailored to your project requirements." },
  { id: "sw3", question: "Can I bring my architect or interior designer to the showroom?", answer: "Absolutely. We encourage project teams to visit together. Having your architect or designer present allows for more productive discussions about fixture specifications, ceiling integration details, and finish options. We can also prepare material samples in advance if you let us know your requirements." },
  { id: "sw4", question: "What types of lighting products can I see at the showroom?", answer: "Our showroom displays a wide range of products including LED downlights, linear profiles, LED strip lights, outdoor IP-rated fixtures, decorative pendants, facade lighting, and smart control systems. Products are shown in working conditions so you can evaluate light output, beam angles, and color quality." },
  { id: "sw5", question: "Can I get a project quote during my showroom visit?", answer: "Yes. If you bring your architectural drawings or project specifications, our team can begin preparing a preliminary quotation during your visit. For detailed proposals, we typically follow up within 3 to 5 business days." },
  { id: "sw6", question: "Is the Credence Lighting showroom the best lighting store in Dubai?", answer: "We focus on premium architectural and commercial lighting rather than mass-market retail. If you are working on a hospitality, commercial, residential, or entertainment lighting project and need expert guidance alongside high-quality products, our showroom is designed specifically for that purpose." },
];

export default function LightingShowroomDubai() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
          "@id": "https://www.credencelighting.com/#organization",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9788",
            "longitude": "55.1764"
          },
    "name": "Credence Lighting LLC, Dubai Showroom",
    "image": "https://www.credencelighting.com/logo.svg",
    "url": "https://www.credencelighting.com/lighting-showroom-dubai",
    "telephone": "+971564965660",
    "email": "info@credencelighting.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$$"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
      { "@type": "ListItem", "position": 2, "name": "Lighting Showroom Dubai" }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Lighting Showroom Dubai · Credence Lighting"
        description="Visit Credence Lighting's showroom in Dubai Investment Park. See premium LED fixtures, control systems, and architectural lighting in working displays. Book a visit today."
        schema={[localBusinessSchema, breadcrumbSchema]}
      />
      <div className="relative bg-transparent overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 md:px-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeUp>
              <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
                Lighting Showroom in Dubai
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <h1 className="text-fluid-h1 font-serif text-white leading-tight">
                Visit Our Lighting{" "}
                <span className="italic text-brand-gold">Showroom in Dubai</span>
              </h1>
            </FadeUp>

            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Experience premium architectural and commercial lighting in person at our 
                Dubai showroom. Browse working product displays, compare color temperatures, 
                test control systems, and consult with our lighting specialists. All in one visit.
              </p>
            </FadeUp>

            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/contact"
                  className="px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 rounded-button"
                >
                  Book a Visit
                </Link>
                <a
                  href="https://maps.app.goo.gl/ec2HMCDNXYtYviV7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-button"
                >
                  Get Directions
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* LOCATION DETAILS */}
        <section className="py-16 px-6 md:px-12 border-y border-white/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp>
              <div className="flex items-start gap-4 p-6 border border-white/10 rounded-panel bg-white/[0.02]">
                <div className="w-10 h-10 rounded-button bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Unit E77, Arabtec Eastern Model<br />
                    Dubai Investment Park 1<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="flex items-start gap-4 p-6 border border-white/10 rounded-panel bg-white/[0.02]">
                <div className="w-10 h-10 rounded-button bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Opening Hours</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Saturday - Thursday<br />
                    9:00 AM - 6:00 PM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="flex items-start gap-4 p-6 border border-white/10 rounded-panel bg-white/[0.02]">
                <div className="w-10 h-10 rounded-button bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Contact</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <a href="tel:+971564965660" className="hover:text-brand-gold transition-colors">+971 564 965 660</a><br />
                    <a href="mailto:info@credencelighting.com" className="hover:text-brand-gold transition-colors">info@credencelighting.com</a>
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  What to Expect at Our Lighting Showroom
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Our Dubai showroom is designed for architects, designers, contractors, and 
                  homeowners who want to evaluate lighting products in real-world conditions 
                  before specifying them for their projects.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {showroomFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <FadeUp key={feature.title} delay={index * 1}>
                    <div className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 h-full">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative z-10 flex items-start gap-6">
                        <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 shrink-0">
                          <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES AT SHOWROOM */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                  Products Available at Our Dubai Showroom
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Browse our curated selection of premium lighting products, all on display 
                  with working demonstrations.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productCategories.map((category, index) => (
                <FadeUp key={category.name} delay={index * 0.5}>
                  <Link href={category.link}
                    className="group border border-white/10 rounded-panel p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-500 block"
                  >
                    <h3 className="text-white text-lg font-serif mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/50 text-sm">{category.description}</p>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                Why Visit a Lighting Showroom Before Buying
              </h2>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="text-white/60 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  Online catalogs and specification sheets provide useful technical data, but they 
                  cannot replicate the experience of seeing lighting fixtures in operation. Visiting 
                  a lighting showroom in Dubai allows you to evaluate the true quality of light 
                  output, beam distribution, color rendering, and dimming performance before 
                  committing to a specification.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">See Color Temperature in Context</h3>
                <p>
                  The difference between 2700K and 3000K may seem minor on a data sheet, but the 
                  visual difference in a real space is significant. Our showroom allows you to 
                  compare warm white, neutral white, and cool white fixtures side by side, helping 
                  you choose the right temperature for each area of your project.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Evaluate Fixture Quality</h3>
                <p>
                  Premium lighting fixtures differ from budget alternatives in heat management, 
                  optical precision, build quality, and long-term reliability. Handling the actual 
                  product and seeing it installed in our display reveals quality differences that 
                  photographs cannot convey.
                </p>

                <h3 className="text-white text-xl font-serif mt-8 mb-4">Test Control Systems</h3>
                <p>
                  If your project requires dimming, color tuning, or automated scene control, our 
                  showroom lets you interact with DALI, Casambi, and KNX systems in person. You 
                  can test dimming curves, scene transitions, and smartphone control before selecting 
                  a protocol for your installation.
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
              heading="Lighting Showroom: Frequently Asked Questions"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="p-10 md:p-16 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-panel relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[40px] md:blur-[100px] rounded-button pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">
                  Visit Our Dubai Showroom
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
                  Book an appointment for a personalized walkthrough with our lighting specialists, 
                  or walk in during business hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Link href="/contact"
                    className="px-8 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 rounded-button"
                  >
                    Book a Visit
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/ec2HMCDNXYtYviV7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors duration-300 rounded-button"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <Footer />
    </PageTransition>
  );
}
