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
      
      {/* OUTER RING (Trailing motion) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-button hidden md:flex items-center justify-center border"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{
          width: 22,
          height: 22,
          backgroundColor: "rgba(200, 169, 107, 0)",
          borderColor: "rgba(255, 255, 255, 0.25)",
        }}
        animate={{
          width: isHovered ? 42 : 22,
          height: isHovered ? 42 : 22,
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

      {/* INNER DOT (Instant motion) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-button hidden md:block bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 8 : 10,
          height: isHovered ? 8 : 10,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );
}
