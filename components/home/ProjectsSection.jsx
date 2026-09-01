"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import { useRouter, usePathname } from "next/navigation";
import { saveReturnState } from "../../utils/navigationState";
import { duration, ease } from "../../utils/motion";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import HoverLift from "../ui/motion/HoverLift";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

// How far (px) a drag has to travel before it commits to advancing a slide
// rather than snapping back to the current one.
const DRAG_THRESHOLD = 60;

export default function ProjectsSection({ hideHeader = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const goToProject = (slug) => {
    saveReturnState({ pathname, hash: pathname === "/" ? "#projects" : "", scrollY: window.scrollY });
    router.push(`/projects/${slug}`);
  };

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Trackpad horizontal swipes (and shift+wheel) advance the carousel like a
  // drag would. A cooldown ref - not state - throttles it to one slide per
  // gesture, since trackpads fire dozens of wheel events for a single swipe.
  const wheelCooldownRef = useRef(false);
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 20 || wheelCooldownRef.current) return;

    e.preventDefault();
    wheelCooldownRef.current = true;
    if (e.deltaX > 0) handleNext();
    else handlePrev();
    setTimeout(() => {
      wheelCooldownRef.current = false;
    }, 400);
  };

  // Keyboard navigation, matching the equivalent carousel in ProductsSection.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      if (e.key === "ArrowLeft") setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
      else if (e.key === "ArrowRight") setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  return (
    <section id="projects" className="text-white px-4 md:px-12 py-8 md:py-16 relative overflow-hidden bg-transparent z-10">

      <div className="max-w-[1500px] mx-auto relative z-10">
        {!hideHeader && (
          <div className="mb-16 text-center md:text-left">
            <FadeUp delay={0}>
              <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6 font-semibold">
                Portfolio
              </p>
            </FadeUp>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="text-fluid-h1 font-serif text-white flex flex-wrap justify-center md:justify-start gap-2">
                <TextReveal text="Featured" /> <TextReveal text="Projects" delay={2} className="italic gold-gradient-text font-light block w-full text-center md:text-left md:w-auto md:inline-block" />
              </h2>

              <FadeUp delay={4} className="mx-auto md:mx-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <HoverLift className="w-full sm:w-auto">
                  <Link
                    href="/projects"
                    className="w-full sm:w-auto border border-white/20 backdrop-blur-sm text-white px-8 py-4 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button flex items-center justify-center hover:bg-white hover:text-black"
                  >
                    All Projects
                  </Link>
                </HoverLift>
                <HoverLift className="w-full sm:w-auto">
                  <Link
                    href="/gallery"
                    className="w-full sm:w-auto border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-8 py-4 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button flex items-center justify-center gap-3 group hover:bg-brand-gold hover:text-black"
                  >
                    View Gallery
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </HoverLift>
              </FadeUp>
            </div>

            <div className="mt-6 min-h-[3.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={projects[activeIndex].id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: ease.standard }}
                  className="text-white/60 text-sm md:text-base leading-relaxed w-full line-clamp-2"
                >
                  {projects[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Coverflow Carousel - one project centered at a time, draggable */}
        <div className="relative">
          <motion.div
            drag="x"
            dragElastic={0.15}
            dragConstraints={{ left: 0, right: 0 }}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (info.offset.x < -DRAG_THRESHOLD) handleNext();
              else if (info.offset.x > DRAG_THRESHOLD) handlePrev();
            }}
            onWheel={handleWheel}
            // The side cards are cropped by this container's straight edges,
            // not by their own rounded corners - without a fade, that reads
            // as a hard, unfinished cut instead of a deliberate coverflow.
            style={{
              maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
            className="relative w-full h-[70vh] min-h-[520px] md:min-h-[600px] flex items-center justify-center group select-none overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {projects.map((item, index) => {
              let diff = index - activeIndex;

              // Normalize diff for infinite wrapping (shortest path around the loop)
              const half = total / 2;
              if (diff > half) diff -= total;
              if (diff < -half) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;
              const isVisible = isCenter || isLeft || isRight;

              let xPos = "0%";
              if (isLeft) xPos = "-95%";
              else if (isRight) xPos = "95%";
              else if (diff < -1) xPos = "-160%";
              else if (diff > 1) xPos = "160%";

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: xPos,
                    scale: isCenter ? 1 : 0.85,
                    opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                    zIndex: isCenter ? 30 : isVisible ? 20 : 0,
                  }}
                  transition={{ duration: duration.standard, ease: ease.standard }}
                  className={`absolute w-[90%] md:w-[60%] lg:w-[50%] h-[90%] md:h-[95%] lg:h-full rounded-panel overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${isCenter ? "" : "cursor-pointer hover:opacity-60"} ${!isVisible ? "pointer-events-none" : ""}`}
                  style={{ filter: isCenter ? "grayscale(0%)" : "grayscale(15%)" }}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                >
                  <Image
                    src={item.hero}
                    alt={item.name}
                    fill
                    draggable={false}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
                    loading="lazy"
                    className="object-cover pointer-events-none"
                  />

                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

                        {/* Snapchat-style click zones for the center image */}
                        <div className="absolute inset-0 z-10 flex cursor-pointer">
                          <div className="w-1/2 h-full flex items-center justify-start" onClick={handlePrev} />
                          <div className="w-1/2 h-full flex items-center justify-end" onClick={handleNext} />
                        </div>

                        {/* Top Left Topic Overlay */}
                        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none flex items-center gap-4">
                          <span className="w-8 h-[1px] bg-brand-gold" />
                          <p className="uppercase tracking-[0.3em] text-xs text-brand-gold font-semibold drop-shadow-md">
                            {item.category}
                          </p>
                        </div>

                        {/* Bottom Description Overlay */}
                        <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-20 pointer-events-none max-w-2xl">
                          <h3 className="text-white text-2xl md:text-4xl font-serif leading-tight mb-3">{item.name}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-white/70 text-xs md:text-sm mb-4">
                            <span>{item.location}</span>
                            <span className="inline-block w-1 h-1 rounded-full bg-brand-gold" />
                            <span>{item.year}</span>
                          </div>
                          <div className="pointer-events-auto inline-block">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                goToProject(item.slug);
                              }}
                              className="inline-flex items-center gap-2 text-brand-gold uppercase tracking-[0.2em] text-xs md:text-xs font-semibold hover:text-white transition-colors border-b border-brand-gold/30 hover:border-white pb-1"
                            >
                              View Project Details
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Small concise label for the prev/next side slides - just
                      enough context to know what's next without the full
                      center overlay (category, description, CTA). */}
                  <AnimatePresence>
                    {!isCenter && isVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3, ease: ease.standard }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none max-w-[85%] px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20"
                      >
                        <p className="text-white/90 text-xs md:text-sm font-medium text-center truncate">
                          {item.name}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Arrow Controls - overlaid on the image, outside the drag layer so they stay put during a drag gesture */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>

          {/* Index indicator */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 font-mono text-xs text-white/50 tabular-nums bg-black/30 backdrop-blur-md px-3 py-1 rounded-full pointer-events-none">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
