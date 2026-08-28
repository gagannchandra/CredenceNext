"use client";

import { motion, useReducedMotion } from "framer-motion";

// Suspense fallback for ordinary route transitions - deliberately quick and
// simple. The cinematic multi-phase sequence lives in Loader.jsx and is
// reserved for the homepage's one-time globe wait; a route swap can resolve
// in a couple hundred milliseconds; playing a scene through it every time
// would be exhausting rather than premium.
export default function RouteLoader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-surface-base)]/90 sm:bg-transparent sm:backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="relative w-10 h-10"
      >
        <span className="absolute inset-0 rounded-full border-2 border-brand-gold/20" />
        <span
          className={`absolute inset-0 rounded-full border-2 border-transparent border-t-brand-gold ${
            shouldReduceMotion ? "" : "animate-spin"
          }`}
        />
      </motion.div>
    </div>
  );
}
