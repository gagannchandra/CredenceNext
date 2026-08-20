"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";

export default function Magnetic({ children, intensity = 0.25 }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouse = (e) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * intensity);
    y.set(middleY * intensity);
  };

  const reset = () => {
    if (shouldReduceMotion) return;
    x.set(0);
    y.set(0);
  };

  if (shouldReduceMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }}
    >
      {children}
    </motion.div>
  );
}
