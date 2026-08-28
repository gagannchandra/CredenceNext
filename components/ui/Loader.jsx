"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Homepage-only brand intro. Unlike the previous version, this is NOT gated
// on any network resource (the 3D globe, images, anything) - it runs purely
// on fixed internal timers and calls `onDone` when finished. That was the
// bug last time: waiting on the globe meant eager-loading three.js's full
// module graph (~83kB gzipped) into the critical path of every visit. This
// costs nothing extra to load (logo + framer-motion are already on the page)
// and never blocks on the network, so it can't regress load performance.
const FACADE_MS = 650;
const TOTAL_MS = 1450;

export default function Loader({ onDone }) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState("facade");
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    queueMicrotask(() => {
      setDubaiTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    });

    if (shouldReduceMotion) {
      onDone?.();
      return;
    }

    const toTime = setTimeout(() => setPhase("time"), FACADE_MS);
    const toDone = setTimeout(() => onDone?.(), TOTAL_MS);

    return () => {
      clearTimeout(toTime);
      clearTimeout(toDone);
    };
    // onDone is passed fresh each render from Home; only fire this sequence once, on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={
        shouldReduceMotion
          ? { opacity: 0, transition: { duration: 0.25 } }
          : { y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
      }
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--color-surface-base)] select-none"
    >
      {/* Film-grain texture - a static, inline SVG turbulence filter, so it
          costs nothing beyond this tiny data URI. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute w-[100vw] h-[100vw] sm:w-[700px] sm:h-[700px] bg-brand-gold/10 sm:bg-brand-gold/15 blur-[40px] sm:blur-[180px] rounded-button pointer-events-none" />

      <AnimatePresence mode="wait">
        {phase === "facade" ? (
          <motion.div
            key="facade"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center px-4"
          >
            <div className="relative flex items-center justify-center will-change-transform transform-gpu">
              <div className="absolute inset-0 bg-brand-gold/30 blur-2xl rounded-button scale-[1.5] pointer-events-none" />
              <Image
                src="/logo.svg?v=2"
                alt="Credence Lighting"
                width={96}
                height={96}
                priority
                className="relative z-10 h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(200,169,107,0.7)]"
              />
            </div>

            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="mt-5 font-serif italic text-2xl text-white tracking-wide"
            >
              Credence Lighting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="text-brand-gold/80 uppercase tracking-[0.35em] text-[10px] sm:text-xs text-center mt-2"
            >
              Innovative Lighting &bull; Integrated Solutions
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="time"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
              <span className="font-serif font-bold uppercase text-[22vw] tracking-[0.1em] text-white opacity-[0.05]">
                Dubai
              </span>
            </div>

            <div className="z-10 flex flex-col items-center gap-3">
              <span className="text-4xl sm:text-5xl font-light tracking-tight text-white tabular-nums">
                {dubaiTime || "—"}
              </span>
              <span className="bg-brand-gold text-black px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em]">
                Dubai, UAE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
