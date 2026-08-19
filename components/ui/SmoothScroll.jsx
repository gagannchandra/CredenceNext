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
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: true,
    });

    window.lenis = lenis;

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return null;
}
