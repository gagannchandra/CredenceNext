"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/ui/motion/PageTransition";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const moveLight = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", moveLight);
    return () => window.removeEventListener("mousemove", moveLight);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | Credence Lighting</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <section className="relative min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden">
        
        {/* INTERACTIVE SPOTLIGHT */}
        <div
          className="absolute inset-0 transition duration-700 ease-out opacity-40 mix-blend-screen pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(200,169,107,0.15), transparent 40%)`,
          }}
        />

        {/* ELEGANT GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        {/* MASSIVE BACKGROUND 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h1 className="text-[40vw] font-serif leading-none text-white/[0.015] select-none tracking-tighter">
            404
          </h1>
        </motion.div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full">
          
          {/* DECORATIVE TOP LINE */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-brand-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-5"
          >
            Error 404
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-[80px] text-white font-serif tracking-wide mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/50 text-base md:text-xl max-w-lg mx-auto leading-relaxed font-light mb-14"
          >
            The destination you are looking for has been moved or no longer exists in our collections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col items-center gap-8"
          >
            <Link href="/"
              className="group relative flex items-center justify-center px-12 py-5 border border-brand-gold/30 text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase overflow-hidden hover:border-brand-gold transition-colors duration-500 bg-black/20 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center">
                Return to Homepage
              </span>
            </Link>

            {/* COUNTDOWN */}
            <div className="flex items-center text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase">
              <svg className="w-4 h-4 mr-3 animate-spin text-brand-gold/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="16 48" />
              </svg>
              Auto-redirect in <span className="text-brand-gold ml-2 w-4 text-center">{countdown}</span>s
            </div>
          </motion.div>

          {/* DECORATIVE BOTTOM LINE */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent mt-16"
          />

        </div>
      </section>
    </PageTransition>
  );
}