"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import PageLink from "@/components/ui/PageLink";
import projects from "@/data/projects";
import SEO from "@/components/seo/SEO";
import { Zap, Gauge, Sun, Cpu, TrendingDown } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const safeSlug = typeof slug === "string" ? slug : "";

  // Handle backward compatibility for numeric IDs
  useEffect(() => {
    if (safeSlug && !isNaN(safeSlug) && !isNaN(parseFloat(safeSlug))) {
      const oldId = Number(safeSlug);
      const oldProject = projects.find((item) => item.id === oldId);
      if (oldProject) {
        router.replace(`/projects/${oldProject.slug}`);
      }
    }
  }, [safeSlug, router]);

  const currentIndex = projects.findIndex((item) => item.slug === safeSlug || item.id === Number(safeSlug));
  const project = projects[currentIndex];

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [prevSlug, setPrevSlug] = useState(slug);
  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setActiveImageIndex(0);
    setIsTextExpanded(false);
  }

  const handlePrev = useCallback(() => {
    if (!project) return;
    setDirection(-1);
    setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  }, [project]);

  const handleNext = useCallback(() => {
    if (!project) return;
    setDirection(1);
    setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  }, [project]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 0
    })
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isLightboxOpen]);


  if (!project) {
    return (
      <div className="h-screen bg-transparent flex flex-col items-center justify-center text-white text-3xl font-serif">
        Project Not Found
      </div>
    );
  }

  // project.hero is a bundled Vite asset (/assets/xxx.webp) — relative path.
  // og:image requires an absolute URL.
  const seoImage = project.hero
    ? (project.hero.startsWith('http') ? project.hero : `https://www.credencelighting.com${project.hero}`)
    : 'https://www.credencelighting.com/meta.png';

  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.name,
      "image": [seoImage],
      "description": project.description,
      "creator": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "datePublished": String(project.year),
      "contentLocation": {
        "@type": "Place",
        "name": project.location
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.credencelighting.com/projects" },
        { "@type": "ListItem", "position": 3, "name": project.name }
      ]
    }
  ];

  return (
    <main className="bg-transparent min-h-screen relative overflow-x-hidden text-white">
      <SEO 
        title={`${project.name} · Luxury Lighting Project | Credence`}
        description={`Explore the architectural lighting design of ${project.name} in ${project.location} (${project.year}). Discover our bespoke ${project.category.toLowerCase()} solutions.`}
        image={seoImage}
        schema={projectSchema}
      />
      {/* Background Decorative Gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-gold rounded-button blur-[60px] md:blur-[160px] opacity-[0.07]" />
        <div className="absolute top-[70%] right-[5%] w-[40%] h-[40%] bg-brand-gold rounded-button blur-[60px] md:blur-[150px] opacity-[0.07]" />
      </div>

      <section className="relative pt-24 md:pt-32 pb-24 px-6 md:px-12 z-10 max-w-[1500px] mx-auto flex flex-col items-center gap-12 lg:gap-20">
        
        {/* TOP: Details */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="uppercase tracking-[0.4em] text-xs font-semibold text-brand-gold mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-brand-gold hidden sm:block"></span>
            {project.category}
            <span className="w-8 h-[1px] bg-brand-gold hidden sm:block"></span>
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-white text-fluid-h1 font-serif mb-6"
          >
            {project.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 items-center text-white/50 uppercase tracking-[0.2em] text-xs md:text-xs mb-8 font-medium"
          >
            <span>{project.location}</span>
            <span className="w-1 h-1 rounded-button bg-brand-gold" />
            <span>{project.year}</span>
          </motion.div>

          {/* ENGINEERING & PERFORMANCE METRICS BADGES */}
          {project.engineeringMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-4xl mb-10 text-left"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-card p-3.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                  <Sun size={14} />
                  <span>Illuminance</span>
                </div>
                <p className="text-white text-xs font-mono">{project.engineeringMetrics.luxLevel}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-card p-3.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                  <Gauge size={14} />
                  <span>Power Density</span>
                </div>
                <p className="text-white text-xs font-mono">{project.engineeringMetrics.lpd}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-card p-3.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                  <Zap size={14} />
                  <span>Fidelity / CRI</span>
                </div>
                <p className="text-white text-xs font-mono">{project.engineeringMetrics.cri}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-card p-3.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                  <Cpu size={14} />
                  <span>Control Topology</span>
                </div>
                <p className="text-white text-xs font-mono">{project.engineeringMetrics.controls}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-card p-3.5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                  <TrendingDown size={14} />
                  <span>Efficiency Gain</span>
                </div>
                <p className="text-white text-xs font-mono">{project.engineeringMetrics.energySaved}</p>
              </div>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mb-10 max-w-[800px] mx-auto"
          >
            <p className="text-white/70 text-base md:text-lg leading-[1.8] font-light transition-all duration-300">
              {project.description}
            </p>

            <AnimatePresence>
              {isTextExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-10 space-y-10 text-left">
                    <div>
                      <h3 className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">The Vision</h3>
                      <p className="text-white/60 text-base md:text-lg leading-[1.8] font-light">
                        To craft a luminous environment that transcends basic illumination, merging architectural integrity with emotional resonance. We aimed to create a space that feels alive, adapting to the natural rhythm of its inhabitants while accentuating the structural grandeur.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Approach</h3>
                      <p className="text-white/60 text-base md:text-lg leading-[1.8] font-light">
                        Deploying a meticulously curated selection of advanced, low-glare luminaires and intelligent control systems. Our design seamlessly integrates into the spatial geometry, ensuring that light acts as a subtle architectural material rather than a mere utility, eliminating harsh shadows and visual noise.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">The Outcome</h3>
                      <p className="text-white/60 text-base md:text-lg leading-[1.8] font-light">
                        A breathtaking, immersive atmosphere that redefines the luxury experience. The dynamic lighting landscape not only elevates the aesthetic brilliance of the environment but also establishes a new paradigm for sustainable, human-centric design.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              onClick={() => setIsTextExpanded(!isTextExpanded)}
              className="mt-6 text-brand-gold text-xs uppercase tracking-wider font-semibold hover:text-white transition-colors"
            >
              {isTextExpanded ? 'Show Less' : 'Read More Details'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <PageLink
              to="/contact"
              className="inline-flex items-center justify-center bg-white/5 border border-border-subtle text-white px-12 py-4 tracking-[0.2em] uppercase text-xs font-medium hover:bg-white hover:border-white hover:text-black transition-all duration-500 rounded-sm group"
            >
              Enquire Now
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </PageLink>
          </motion.div>
        </div>

        {/* BOTTOM: Gallery Format */}
        <div className="w-full columns-1 sm:columns-2 md:columns-2 gap-4 md:gap-6 relative z-10">
          {project.gallery.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 50px 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              onClick={() => {
                setActiveImageIndex(idx);
                setIsLightboxOpen(true);
              }}
              className="w-full mb-4 md:mb-6 overflow-hidden rounded-card border border-border-subtle bg-surface-elevated relative group break-inside-avoid cursor-pointer"
            >
              <Image
                src={imgSrc}
                alt={`${project.name} - Gallery Image ${idx + 1}`}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <p className="text-white text-sm font-medium drop-shadow-md">{project.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 z-40 pointer-events-none">
        <div className="flex items-center gap-4 md:gap-8 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl pointer-events-auto">
          {previousProject ? (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                router.push(`/projects/${previousProject.slug}`);
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:bg-white/10"
              aria-label="Previous project"
            >
              <span className="text-xl leading-none -translate-y-[1px]">←</span>
            </button>
          ) : (
            <div className="w-10 h-10"></div>
          )}
          
          <span className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap">
            Change Project
          </span>

          {nextProject ? (
            <button
               onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                router.push(`/projects/${nextProject.slug}`);
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:bg-white/10"
              aria-label="Next project"
            >
              <span className="text-xl leading-none -translate-y-[1px]">→</span>
            </button>
          ) : (
            <div className="w-10 h-10"></div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white transition-colors z-50 p-2"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all z-50 hover:scale-110"
              aria-label="Previous image"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all z-50 hover:scale-110"
              aria-label="Next image"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest z-50">
              {activeImageIndex + 1} / {project.gallery.length}
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-[90vw] md:max-w-[85vw] h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={project.gallery[activeImageIndex]}
                    alt={`${project.name} - Gallery Image ${activeImageIndex + 1}`}
                    width={1600}
                    height={1200}
                    sizes="90vw"
                    className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl rounded-sm"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
