"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  //
  // Perf: this used to be a full-viewport <div> whose mask-image/background
  // gradient string was rebuilt with new pixel coordinates every animation
  // frame - a full-viewport paint at up to 60fps while the cursor moved.
  // The reveal/glow layers are fixed-size (matching the circle diameter) and
  // their gradients are computed once, local to the layer's own box, so only
  // `transform: translate3d(...)` changes per frame.
  //
  // The reveal layer's colour image can't just use `background-attachment:
  // fixed` to fake a "window" into a full-page image - fixed attachment
  // forces a main-thread repaint of the box every time its position relative
  // to the viewport changes, which is every frame here, defeating the point
  // of moving it via transform. Instead it's two nested layers: an outer
  // clipped/masked window that moves by (x, y), and an inner full-hero-size
  // image inside it that moves by exactly (-x, -y). The two transforms
  // cancel out, so the inner image stays visually pinned to the hero
  // (matching the grayscale plate beneath) while only ever paying for
  // transform updates, which the compositor moves without repainting either
  // layer.
  const REVEAL_SIZE = 700; // 2x the 350px reveal radius
  const GLOW_SIZE = 600; // 2x the 300px glow radius

  const [heroSize, setHeroSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setHeroSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const spotTransform = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `translate3d(${x - REVEAL_SIZE / 2}px, ${y - REVEAL_SIZE / 2}px, 0)`
  );
  const spotCounterTransform = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `translate3d(${-(x - REVEAL_SIZE / 2)}px, ${-(y - REVEAL_SIZE / 2)}px, 0)`
  );
  const glowTransform = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `translate3d(${x - GLOW_SIZE / 2}px, ${y - GLOW_SIZE / 2}px, 0)`
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
            className="hidden md:block absolute top-0 left-0 z-10 pointer-events-none overflow-hidden"
            style={{
              width: REVEAL_SIZE,
              height: REVEAL_SIZE,
              transform: spotTransform,
              willChange: "transform",
              WebkitMaskImage:
                "radial-gradient(circle 350px at 50% 50%, black 0%, transparent 100%)",
              maskImage:
                "radial-gradient(circle 350px at 50% 50%, black 0%, transparent 100%)",
            }}
          >
            {/* Counter-moves against the outer window's transform so it stays
                visually pinned to the hero, registered with the grayscale
                plate beneath - the "fixed background" effect via two
                compositor-only transforms instead of background-attachment. */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: heroSize.width || "100vw",
                height: heroSize.height || "100vh",
                transform: spotCounterTransform,
                willChange: "transform",
                backgroundImage: `url(${bgHorizontal})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="hidden md:block absolute top-0 left-0 z-10 pointer-events-none"
            style={{
              width: GLOW_SIZE,
              height: GLOW_SIZE,
              transform: glowTransform,
              willChange: "transform",
              background:
                "radial-gradient(circle 300px at 50% 50%, rgba(255,255,255,0.18), transparent 70%)",
            }}
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
