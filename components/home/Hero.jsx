"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const bgHorizontal = "/images/homepage/horizontal.webp";
const bgVertical = "/images/homepage/vertical.webp";

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Spotlight mask: the colour image is revealed only where the cursor is, so
  // the visitor "lights" the room. Motivated motion (Section 5) - it is the
  // page's one metaphor and it is what a lighting company sells.
  const maskImage = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle 350px at ${x}px ${y}px, black 0%, transparent 100%)`
  );

  const glowBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 70%)`
  );

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
      // 100dvh, not h-screen: on iOS Safari the address bar makes 100vh taller
      // than the visible viewport, so the hero jumped on first scroll.
      className="relative min-h-[100dvh] w-full bg-transparent flex items-center justify-center overflow-hidden"
    >
      {/* Base greyscale plate. Stays a raw <picture> rather than next/image
          because the two sources are art-directed crops (portrait vs
          landscape), not one image at two widths. */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet={bgHorizontal} />
          <img
            src={bgVertical}
            alt="A hotel interior lit by Credence architectural fixtures"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover grayscale brightness-[0.25]"
          />
        </picture>
      </div>

      {/* Colour reveal, desktop pointer only. Reduced motion gets the static
          greyscale plate, which still reads as a finished hero. */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="hidden md:block absolute inset-0 z-10"
            style={{
              backgroundImage: `url(${bgHorizontal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="hidden md:block absolute inset-0 z-10 pointer-events-none"
            style={{ background: glowBackground }}
          />
        </>
      )}

      <div className="relative z-20 text-center px-6 max-w-5xl pointer-events-none flex flex-col items-center">
        <h1 className="flex flex-col items-center animate-hero-title">
          <span className="text-white text-fluid-h1 font-serif">Luminous</span>
          {/* leading-[1.1] + pb reserve: "Sophistication" has a descender and
              Playfair italic clips it at leading-none (Section 4.1). */}
          <span className="italic gold-gradient-text text-fluid-h1 font-serif mt-2 leading-[1.1] pb-2">
            Sophistication
          </span>
          {/* Keeps the ranking phrase inside the H1 without a second, hidden
              H1 competing with the visible one. */}
          <span className="sr-only">
            : premium architectural lighting solutions in Dubai
          </span>
        </h1>

        <p className="text-white/70 mt-8 text-fluid-p tracking-wide animate-hero-subtitle max-w-xl">
          Architectural lighting design, supply, and commissioning across Dubai
          and the GCC.
        </p>
      </div>
    </section>
  );
}
