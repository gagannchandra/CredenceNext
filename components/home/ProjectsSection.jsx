"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import { useRouter, usePathname } from "next/navigation";
import { saveReturnState } from "../../utils/navigationState";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import HoverLift from "../ui/motion/HoverLift";
import useTiltHover from "../ui/motion/useTiltHover";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

// Distinguishes a real drag from a click so dragging the rail doesn't
// accidentally navigate to whatever card the pointer lifted over.
const DRAG_CLICK_THRESHOLD = 6;

function ProjectCard({ item, index, onSelect }) {
  const { handlers, tiltStyle, glowStyle } = useTiltHover({ max: 6 });

  return (
    <motion.div
      data-card
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
      onClick={() => onSelect(item.slug)}
      style={tiltStyle}
      {...handlers}
      className="group relative shrink-0 snap-start w-[78vw] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[4/5] overflow-hidden rounded-panel cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500 bg-surface-elevated [transform-style:preserve-3d]"
    >
      <Image
        src={item.hero}
        alt={item.name}
        fill
        draggable={false}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 440px, 480px"
        loading="lazy"
        className="object-cover pointer-events-none transition-transform duration-1000 group-hover:scale-[1.08] opacity-85 group-hover:opacity-100"
      />

      {glowStyle && (
        <motion.div aria-hidden="true" className="absolute inset-0 pointer-events-none mix-blend-overlay" style={glowStyle} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

      <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <span className="uppercase tracking-[0.25em] text-[10px] text-brand-gold font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {item.category}
        </span>
        <span className="text-white/50 text-xs font-mono">{item.year}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 pointer-events-none">
        <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight mb-2">{item.name}</h3>
        <p className="text-white/60 text-xs uppercase tracking-[0.15em] mb-4">{item.location}</p>
        <span className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.2em] font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          View Project
          <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ hideHeader = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const trackRef = useRef(null);
  const dragState = useRef({ pointerId: null, startX: 0, startScrollLeft: 0, moved: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const goToProject = useCallback(
    (slug) => {
      saveReturnState({ pathname, hash: pathname === "/" ? "#projects" : "", scrollY: window.scrollY });
      router.push(`/projects/${slug}`);
    },
    [pathname, router]
  );

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const gap = 24;
    const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track || e.pointerType === "touch") return; // native touch scrolling handles itself
    track.setPointerCapture(e.pointerId);
    dragState.current = { pointerId: e.pointerId, startX: e.clientX, startScrollLeft: track.scrollLeft, moved: 0 };
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    const track = trackRef.current;
    if (!track || dragState.current.pointerId !== e.pointerId) return;
    const dx = e.clientX - dragState.current.startX;
    dragState.current.moved = Math.max(dragState.current.moved, Math.abs(dx));
    track.scrollLeft = dragState.current.startScrollLeft - dx;
  };

  const endDrag = () => {
    const track = trackRef.current;
    if (track && dragState.current.pointerId != null) {
      track.releasePointerCapture(dragState.current.pointerId);
    }
    dragState.current.pointerId = null;
    setIsDragging(false);
  };

  const handleCardClick = (slug) => {
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) return;
    goToProject(slug);
  };

  return (
    <section id="projects" className="text-white px-4 md:px-12 py-12 md:py-24 relative overflow-hidden bg-transparent z-10">

      <div className="max-w-[1500px] mx-auto relative z-10">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
              <FadeUp delay={0}>
                <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6 font-semibold">
                  Portfolio
                </p>
              </FadeUp>
              <h2 className="text-fluid-h2 font-serif text-white flex flex-wrap justify-center md:justify-start gap-2">
                <TextReveal text="Featured" /> <TextReveal text="Projects" delay={2} className="italic gold-gradient-text font-light block w-full text-center md:text-left md:w-auto md:inline-block" />
              </h2>
            </div>

            <FadeUp delay={4} className="mx-auto md:mx-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
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
        )}

        {/* Horizontal Project Showcase */}
        <div className="relative">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            data-lenis-prevent
            className={`flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-12 md:px-12 select-none ${
              isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"
            }`}
          >
            {projects.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} onSelect={handleCardClick} />
            ))}

            {/* View All CTA Card */}
            <Link
              href="/projects"
              data-card
              className="group relative shrink-0 snap-start w-[78vw] sm:w-[380px] md:w-[300px] aspect-[4/5] overflow-hidden rounded-panel border border-dashed border-white/20 hover:border-brand-gold/50 flex flex-col items-center justify-center gap-4 text-center p-8 transition-colors duration-500 bg-surface-elevated/40"
            >
              <span className="w-14 h-14 rounded-full border border-white/20 group-hover:border-brand-gold flex items-center justify-center transition-colors duration-300">
                <ArrowRight size={20} aria-hidden="true" className="text-white group-hover:text-brand-gold transition-colors duration-300" />
              </span>
              <div>
                <p className="text-white font-serif text-xl mb-1">View All Projects</p>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em]">{projects.length} Case Studies</p>
              </div>
            </Link>
          </div>

          {/* Arrow Controls */}
          <div className="hidden md:flex items-center justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
