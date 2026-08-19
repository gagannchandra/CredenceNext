"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";
import PageTransition from "@/components/ui/motion/PageTransition";
import { ArrowUpRight } from "lucide-react";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";

const hospitalityImg = "/images/hospitality/1.webp";
const residentialImg = "/images/indoor/3.webp";
const restaurantImg = "/images/ground-control/154.webp";
const retailImg = "/images/Retail Lighting/1.webp";
const entertainmentImg = "/images/entertainment/1.webp";
const officeImg = "/images/indoor/4.webp";
const audioImg = "/images/sound/1.webp";
const facadeImg = "/images/facade/1.webp";

const solutionsData = [
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Creating unforgettable experiences through ambient and architectural illumination tailored for luxury hotels and resorts.",
    image: hospitalityImg,
    link: "/hotel-lighting",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "residential",
    title: "Residential",
    description: "Bespoke lighting designs for luxury villas and private residences, blending comfort, aesthetics, and smart control.",
    image: residentialImg,
    link: "/residential-lighting",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Ambiance-focused lighting solutions for dining venues and cafes, tailored for perfect guest experiences.",
    image: restaurantImg,
    link: "/restaurant-lighting",
    aspectRatio: "aspect-square"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Dynamic and captivating lighting strategies that highlight products, guide foot traffic, and elevate the retail experience.",
    image: retailImg,
    link: "/retail-lighting",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "Immersive, high-energy lighting installations for theme parks, cinemas, and experiential entertainment zones.",
    image: entertainmentImg,
    link: "/entertainment-lighting",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "office",
    title: "Office",
    description: "Human-centric lighting solutions that enhance focus, productivity, and employee well-being in modern workspaces.",
    image: officeImg,
    link: "/office-lighting",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "audio",
    title: "Audio & Sound",
    description: "Premium commercial audio systems and acoustic design for seamless architectural integration.",
    image: audioImg,
    link: "/audio-solutions",
    aspectRatio: "aspect-square"
  },
  {
    id: "facade",
    title: "Building Facades",
    description: "Architectural and dynamic media facade illumination designed to make your building a landmark of the night.",
    image: facadeImg,
    link: "/facade-lighting",
    aspectRatio: "aspect-[4/5]"
  }
];

export default function Solutions() {

  return (
    <PageTransition>
      <SEO 
        title="Lighting Solutions | Credence Lighting Dubai" 
        description="Bespoke architectural, commercial, and hospitality lighting solutions tailored to your space." 
      />
      <div className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-20">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
              Our Expertise
            </p>
            <h1 className="text-fluid-h1 font-serif text-white">
              Tailored
              <span className="italic text-brand-gold"> Solutions</span>
            </h1>
            <p className="mt-10 text-white/50 text-lg leading-[1.8]">
              We deliver cutting-edge lighting solutions precisely engineered for the unique demands of each industry. From crafting immersive ambiances in luxury hotels to optimizing productivity in modern offices, our expertise ensures that every environment shines with purpose, efficiency, and stunning aesthetics.
            </p>
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {solutionsData.map((solution, idx) => (
              <Link 
                key={solution.id} 
                href={solution.link}
                onClick={() => scrollToTop()}
                className="group relative block overflow-hidden rounded-card break-inside-avoid border border-white/5 hover:border-brand-gold/30 transition-colors duration-500 bg-surface-base"
              >
                {/* Image Container with variable aspect ratio for masonry effect */}
                <div className={`relative w-full ${solution.aspectRatio} overflow-hidden`}>
                  <Image
                    src={solution.image}
                    alt={`${solution.title} Lighting`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading={idx > 2 ? "lazy" : "eager"}
                    priority={idx <= 2}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                  
                  {/* Content over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <h2 className="text-3xl font-serif text-white mb-3 flex items-center justify-between">
                      {solution.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-brand-gold">
                        <ArrowUpRight size={24} />
                      </span>
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* INDUSTRIES WE SERVE COMPONENT */}
        <IndustriesWeServe />

      </div>
      <Footer />
    </PageTransition>
  );
}
