"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const isClickable = !!e.target?.closest?.('a, button, [role="button"], .cursor-pointer, input, textarea, select');
      setIsHovered((prev) => (prev === isClickable ? prev : isClickable));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);



  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, a, button, input, textarea, select, .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* OUTER RING (Trailing motion). Fixed at its largest (hovered) size and
          scaled down at rest via `transform: scale()` instead of animating
          width/height - scale is compositor-only, width/height force layout
          + paint on every frame of the 0.3s transition, and this element
          re-triggers that transition on almost every mouseover across the
          page. */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-button hidden md:flex items-center justify-center border"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: 42,
          height: 42,
        }}
        initial={{
          scale: 22 / 42,
          backgroundColor: "rgba(200, 169, 107, 0)",
          borderColor: "rgba(255, 255, 255, 0.25)",
        }}
        animate={{
          scale: isHovered ? 1 : 22 / 42,
          backgroundColor: isHovered ? "rgba(200, 169, 107, 0.08)" : "rgba(200, 169, 107, 0)",
          borderColor: isHovered ? "rgba(200, 169, 107, 0.5)" : "rgba(255, 255, 255, 0.25)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* LIGHT GLOW */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99997] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(200, 169, 107, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* INNER DOT (Instant motion). Same fixed-size-plus-scale trick as the
          outer ring - avoids layout thrash on every hover boundary. */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-button hidden md:block bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 10,
          height: 10,
        }}
        animate={{
          scale: isHovered ? 0.8 : 1,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );
}
