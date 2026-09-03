"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";

// 3D pointer-tilt + cursor-following glow for hover cards. Everything here
// only ever touches transform and a background-position-style gradient
// (compositor/paint-local, never layout), and it's spring-smoothed so it
// reads as premium rather than twitchy. Mount-time only, not scroll-linked,
// so it can't contend with Lenis.
export default function useTiltHover({ max = 8 } = {}) {
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 25, mass: 0.5 });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowSpringX = useSpring(glowX, { stiffness: 200, damping: 30 });
  const glowSpringY = useSpring(glowY, { stiffness: 200, damping: 30 });
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowSpringX}% ${glowSpringY}%, rgba(255,255,255,0.16), transparent 55%)`;

  // The card's rect is read once per hover (mouseenter), not on every
  // mousemove - getBoundingClientRect() forces a synchronous layout read,
  // and native mousemove can fire well over 100 times/sec on a high-poll-rate
  // mouse. A hovered card doesn't reflow mid-hover, so one read is enough.
  const rectRef = useRef(null);

  const onMouseEnter = (event) => {
    if (shouldReduceMotion) return;
    rectRef.current = event.currentTarget.getBoundingClientRect();
  };

  const onMouseMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = rectRef.current ?? event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set((0.5 - py) * max * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const onMouseLeave = () => {
    rectRef.current = null;
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    handlers: shouldReduceMotion ? {} : { onMouseEnter, onMouseMove, onMouseLeave },
    tiltStyle: shouldReduceMotion
      ? undefined
      : { rotateX: springX, rotateY: springY, transformPerspective: 800 },
    glowStyle: shouldReduceMotion ? undefined : { background: glowBackground },
  };
}
