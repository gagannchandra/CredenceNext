"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Side-effect-only component: initializes Lenis smooth scrolling globally.
// Deliberately renders no DOM and takes no children, so it can be mounted
// as a client-only sibling without wrapping (and therefore blocking SSR
// of) the actual page content.
export default function SmoothScroll() {
  useEffect(() => {
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
  }, []);

  return null;
}
