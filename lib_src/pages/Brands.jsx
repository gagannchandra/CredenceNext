"use client";

import Image from "next/image";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/ui/motion/PageTransition";

const brands = [
  { name: "Al Othaim", logo: "/brands/al-othaim.webp" },
  { name: "Fitness First", logo: "/brands/fitness-first.webp" },
  { name: "Fabyland", logo: "/brands/fabyland.webp" },
  { name: "Emaar", logo: "/brands/emaar.webp" },
  { name: "Fun City", logo: "/brands/fun-city.webp" },
  { name: "GEMO", logo: "/brands/gemo.webp" },
  { name: "Ground Control", logo: "/brands/ground-control.webp" },
  { name: "Xtreme Zone", logo: "/brands/xtreme.webp" },
  { name: "Flipped", logo: "/brands/flipped.webp" },
  { name: "Funco", logo: "/brands/funco.webp" },
  { name: "LPME", logo: "/brands/lpme.webp" },
  { name: "Adventureland", logo: "/brands/adventureland.webp" },
  { name: "Jumble", logo: "/brands/jumble.webp" },
  { name: "Orange Seeds", logo: "/brands/orangeseeds.webp" },
  { name: "Nike", logo: "/brands/nike.webp" },
  { name: "Cheeky Monkeys", logo: "/brands/cheeky-monkeys.webp" },
  { name: "Accessories", logo: "/brands/accessories.webp" },
  { name: "Columbia", logo: "/brands/columbia.webp" },
  { name: "Candelite", logo: "/brands/candelite.webp" },
  { name: "Timberland", logo: "/brands/timberland.webp" },
  { name: "IKEA", logo: "/brands/ikea.webp" },
  { name: "Dubai Properties", logo: "/brands/dubai-properties.webp" },
  { name: "Majid Al Futtaim", logo: "/brands/majid.webp" },
  { name: "Hugo Boss", logo: "/brands/hugo-boss.webp" },
  { name: "DAMAC", logo: "/brands/damac.webp" },
  { name: "Good Health", logo: "/brands/good-health.webp" },
  { name: "Vans", logo: "/brands/vans.webp" },
  { name: "Sandro", logo: "/brands/sandro.webp" },
  { name: "Converse", logo: "/brands/converse.webp" },
  { name: "Maisons du Monde", logo: "/brands/maisons.webp" },
  { name: "Sun & Sand Sports", logo: "/brands/sunnsand.webp" },
  { name: "Temperley London", logo: "/brands/temperly.webp" },
  { name: "GMG", logo: "/brands/gmg.webp" },
  { name: "Nara Milano", logo: "/brands/naramilano.webp" },
  { name: "Al Futtaim", logo: "/brands/al-futtaim.webp" },
  { name: "Zadig & Voltaire", logo: "/brands/zadig.webp" },
];

export default function Brands() {


  return (
    <PageTransition>
      <SEO 
        title="Our Clients & Brands | Credence Lighting Dubai" 
        description="Discover the visionary brands, architects, and developers we partner with across the UAE." 
        schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
            { "@type": "ListItem", "position": 2, "name": "Brands & Partners", "item": "https://www.credencelighting.com/brands" }
          ]
        }, {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Our Clients · Credence Lighting Dubai",
          "description": "Credence Lighting has served 30+ globally recognized brands including Emaar, DAMAC, Nike, and IKEA",
          "url": "https://www.credencelighting.com/brands"
        }]}
      />
      <section
        id="brands-page-top"
        className="relative min-h-screen bg-transparent overflow-hidden pt-40 pb-28"
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px]" />

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12">

          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
              Clients We&apos;ve Helped
            </p>

            <h1 className="text-fluid-h1 font-serif text-white">
              Serving Clients
              <span className="italic text-brand-gold">
                {" "}Across the Globe
              </span>
            </h1>

            <p className="mt-10 text-white/50 text-lg leading-[1.8]">
              We proudly provide services to internationally recognized
              brands, entertainment destinations, retail leaders,
              hospitality groups, and architectural innovators across
              multiple countries.
            </p>

            <div className="mt-12 flex justify-center">
              <Link href="/projects"
                className="px-10 py-4 bg-brand-gold text-black rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white transition-colors"
              >
                View Our Projects
              </Link>
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-24">

            {[
              { number: "30+", label: "Featured Clients" },
              { number: "7+", label: "Countries" },
              { number: "1000+", label: "Projects Delivered" },
              { number: "10+", label: "Years Experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-white/[0.03] backdrop-blur-md md:backdrop-blur-xl rounded-[30px] p-10 text-center"
              >
                <h3 className="text-fluid-h2 text-white font-serif">
                  {item.number}
                </h3>

                <p className="mt-4 uppercase tracking-[0.3em] text-xs text-white/40">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* LOGO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mt-28">

            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-md md:backdrop-blur-2xl rounded-[28px] h-[180px] flex items-center justify-center overflow-hidden"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />

                {/* LOGO */}
                <Image
                  src={brand.logo}
                  alt={`${brand.name} — Credence Lighting client`}
                  fill
                  sizes="(max-width: 768px) 45vw, 20vw"
                  loading="lazy"
                  className="relative z-10 object-contain opacity-80 group-hover:opacity-100 transition duration-500 px-6"
                />
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </PageTransition>
  );
}   