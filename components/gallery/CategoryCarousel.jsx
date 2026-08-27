"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// `priority` marks this carousel as the one holding the page's LCP image.
// Only the first carousel in a stack should set it - the centre slide then
// loads eagerly at high fetch priority instead of waiting on the lazy-load
// observer, which on /projects and /products was delaying the largest paint
// on screen by a full network round trip.
export default function CategoryCarousel({ items, isProduct = false, isSplitLayout = false, hideLinkOverlay = false, priority = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isHovered) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, handlePrev, handleNext]);

  if (!items || items.length === 0) return null;

  return (
    <motion.div 
      className={`relative w-full flex items-center justify-center group select-none overflow-hidden rounded-panel ${
        isSplitLayout ? "h-[75vh] min-h-[600px]" : "h-[60vh] min-h-[500px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset }) => {
        if (offset.x < -50) handleNext();
        else if (offset.x > 50) handlePrev();
      }}
    >
      {items.map((item, index) => {
        const total = items.length;
        let diff = index - activeIndex;
        
        // Normalize diff to be between -total/2 and total/2 for infinite wrapping
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const isCenter = Math.abs(diff) < 0.5; // diff === 0
        const isLeft = diff >= -1.5 && diff <= -0.5; // diff === -1
        const isRight = diff >= 0.5 && diff <= 1.5; // diff === 1
        
        const isVisible = isCenter || (total > 1 && (isLeft || isRight));

        // Calculate X position based on relative distance
        let xPos = "0%";
        if (isLeft) xPos = "-85%";
        else if (isRight) xPos = "85%";
        else if (diff < -1) xPos = "-150%";
        else if (diff > 1) xPos = "150%";

        const itemWidthClasses = isSplitLayout 
          ? "w-[95%] md:w-[85%] lg:w-[75%]" 
          : "w-[90%] md:w-[60%] lg:w-[45%]";

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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${itemWidthClasses} h-[90%] md:h-[95%] lg:h-full rounded-panel overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${isCenter ? '' : 'cursor-pointer hover:opacity-70'} ${!isVisible ? 'pointer-events-none' : ''}`}
            style={{ filter: isCenter ? "grayscale(0%)" : "grayscale(20%)" }}
            onClick={() => {
              if (isLeft) handlePrev();
              if (isRight) handleNext();
            }}
          >
            <Image
              src={isProduct ? item.image : item.hero}
              alt={isProduct ? item.title : item.name}
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              {...(priority && isCenter ? { priority: true } : { loading: "lazy" })}
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
                  {/* Snapchat-style click zones for center image */}
                  <div className="absolute inset-0 z-10 flex cursor-pointer pointer-events-none">
                    <div 
                      className="w-1/2 h-full flex items-center justify-start pointer-events-auto" 
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    />
                    <div 
                      className="w-1/2 h-full flex items-center justify-end pointer-events-auto" 
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    />
                  </div>

                  {/* Project Details Link */}
                  {!isProduct && !hideLinkOverlay && (
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-auto">
                      <Link href={`/projects/${item.slug}`} 
                        className="bg-scrim/30 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-button text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors shadow-2xl"
                      >
                        View Project Details
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
