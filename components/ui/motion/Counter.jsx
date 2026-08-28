"use client";

import { useRef } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";

// Animated count-up for stat numbers ("1000+", "30+", ...). Counts from 0
// to the parsed value once scrolled into view, writing straight to the DOM
// via the animation's onUpdate instead of React state - the digits change
// every frame, but nothing above them re-renders, so it stays a pure
// compositor/paint-local cost the same way a CSS animation would.
export default function Counter({ value, className = "", duration = 1.8 }) {
  const shouldReduceMotion = useReducedMotion();
  const nodeRef = useRef(null);
  const hasRun = useRef(false);

  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const handleEnter = () => {
    if (hasRun.current || target === null) return;
    hasRun.current = true;
    const node = nodeRef.current;
    if (!node) return;

    if (shouldReduceMotion) {
      node.textContent = value;
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  };

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={handleEnter}
    >
      {value}
    </motion.span>
  );
}
