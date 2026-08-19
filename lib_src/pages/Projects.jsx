"use client";

import {  useState } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import projects from "@/data/projects";
import CategoryCarousel from "@/components/gallery/CategoryCarousel";
import SEO from "@/components/seo/SEO";



import PageTransition from "@/components/ui/motion/PageTransition";

export default function Projects() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const toggleCategory = (projectId) => {
    setExpandedCategories(prev => ({ ...prev, [projectId]: !prev[projectId] }));
  };


  return (
    <PageTransition>
      <SEO 
        title="Featured Projects | Credence Lighting Dubai" 
        description="View our featured lighting installations across architectural, entertainment, and retail sectors." 
        schema={[{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://credencelighting.com/projects/${project.slug}`,
            "name": project.name
          }))
        }]}
      />
      <div className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-10">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 mb-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.45em] text-xs text-brand-gold mb-6">
              Our Portfolio
            </p>
            <h1 className="text-fluid-h1 font-serif text-white">
              Featured
              <span className="italic text-brand-gold"> Projects</span>
            </h1>
            <p className="mt-10 text-white/50 text-lg leading-[1.8]">
              Explore our diverse portfolio of premium lighting projects across commercial, hospitality, residential, and retail sectors. From the initial concept design to final commissioning, our team meticulously crafts immersive environments. Browse through our selected works below to see how we bring spaces to life with precision, innovative technology, and creative vision.
            </p>
          </div>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 md:px-12 mt-10 relative z-10">
          {projects.map((project) => (
            <div key={project.id} className="mb-32 last:mb-10">
              <div className="mb-8 md:mb-12">
                <div className="border-b border-white/10 pb-4 md:pb-6 mb-4 md:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-8 md:w-12 h-[1px] bg-brand-gold" />
                    <h2 className="text-fluid-h2 font-serif text-white">{project.name}</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={`/projects/${project.slug}`}
                      onClick={() => scrollToTop()}
                      className="shrink-0 hidden md:inline-flex border border-white/20 backdrop-blur-sm text-white px-8 py-3 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button items-center justify-center hover:bg-white hover:text-black"
                    >
                      View Project
                    </Link>
                    <Link href="/contact"
                      onClick={() => scrollToTop()}
                      className="shrink-0 hidden md:inline-flex border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-8 py-3 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button items-center justify-center gap-3 group hover:bg-brand-gold hover:text-black"
                    >
                      Enquire Now
                      <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
                
                <div className="w-full pr-0 md:pr-8 pl-0 md:pl-[72px] mt-4 md:mt-0 flex flex-col gap-2 mb-8">
                  <p className="text-brand-gold text-sm uppercase tracking-widest font-medium">{project.location}</p>
                  <p className={`text-white/70 text-base md:text-lg leading-[1.8] font-light text-justify transition-all duration-300 ${!expandedCategories[project.id] ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
                    {project.description}
                  </p>
                  <button 
                    onClick={() => toggleCategory(project.id)}
                    className="md:hidden mt-3 text-brand-gold text-xs uppercase tracking-wider font-semibold self-start"
                  >
                    {expandedCategories[project.id] ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
              
              <CategoryCarousel 
                items={project.gallery.map((img, idx) => ({ id: idx, hero: img, name: `${project.name} — Gallery Image ${idx + 1}` }))} 
                isProduct={false} 
                hideLinkOverlay={true} 
              />
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:hidden w-full gap-4">
                <Link href={`/projects/${project.slug}`}
                  onClick={() => scrollToTop()}
                  className="w-full inline-flex border border-white/20 backdrop-blur-sm text-white px-6 py-3 tracking-[0.2em] uppercase text-xs sm:text-sm transition-all duration-500 rounded-button items-center justify-center hover:bg-white hover:text-black"
                >
                  View Project
                </Link>
                <Link href="/contact"
                  onClick={() => scrollToTop()}
                  className="w-full inline-flex border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-6 py-3 tracking-[0.2em] uppercase text-xs sm:text-sm transition-all duration-500 rounded-button items-center justify-center gap-3 group hover:bg-brand-gold hover:text-black"
                >
                  Enquire Now
                  <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
