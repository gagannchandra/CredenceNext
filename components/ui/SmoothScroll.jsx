"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

// Side-effect-only component: initializes Lenis smooth scrolling globally.
// Deliberately renders no DOM and takes no children, so it can be mounted
// as a client-only sibling without wrapping (and therefore blocking SSR
// of) the actual page content.
export default function SmoothScroll() {
  // Lenis replaces native scrolling with eased, momentum-based scrolling,
  // which is exactly the class of motion prefers-reduced-motion asks us to
  // drop. Motion-sensitive visitors keep the browser's own scrolling.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    // Consumers (footer back-to-top, article TOC, FAQ scrollspy) check for
    // window.lenis and fall back to window.scrollTo when it is absent, so
    // leaving it unset under reduced motion degrades cleanly.
    window.lenis = lenis;

    let rfId;
    function raf(time) {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    }
    rfId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rfId);
      window.lenis = null;
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return null;
}
