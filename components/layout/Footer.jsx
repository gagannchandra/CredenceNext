"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "../ui/motion/FadeUp";
import TextReveal from "../ui/motion/TextReveal";

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white border-t border-border-subtle overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 pt-24 pb-16">

        {/* PRE-FOOTER CTA */}
        <FadeUp delay={0} className="mb-24 flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center justify-center mb-10 group relative">
            {/* Sunburst/Glow Effect Background */}
            <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-full scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
            
            <img
              src="/logo.svg?v=2"
              alt="Credence Lighting"
              
              className="relative z-10 h-12 w-auto object-contain opacity-90 drop-shadow-[0_0_12px_rgba(200,169,107,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(200,169,107,1)] group-hover:opacity-100 transition-all duration-500"
            />
          </Link>
          <h3 className="text-fluid-h1 font-serif flex flex-wrap justify-center gap-2 mb-8">
            <TextReveal text="Illuminating Spaces" />
            <TextReveal text="With Elegance" delay={2} className="italic text-brand-gold" />
          </h3>
          <p className="text-white/40 leading-[1.8] max-w-lg">
            Premium architectural and commercial lighting
            solutions crafted to elevate atmosphere,
            functionality, and spatial identity.
          </p>
        </FadeUp>

        {/* 4-COLUMN LINK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-border-subtle pt-16">


          <FadeUp delay={2} className="text-center md:text-left">

            <p className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium">
              Navigation
            </p>

            <div className="space-y-3 text-white/40 text-sm">

              <Link href="/" className="block hover:text-white transition duration-300 touch-glow">
                Home
              </Link>

              <Link href="/about" className="block hover:text-white transition duration-300 touch-glow">
                About
              </Link>

              <Link href="/products" className="block hover:text-white transition duration-300 touch-glow">
                Products
              </Link>

              <Link href="/downloads" className="block hover:text-white transition duration-300 touch-glow">
                Downloads
              </Link>

              <Link href="/projects" className="block hover:text-white transition duration-300 touch-glow">
                Projects
              </Link>

              <Link href="/blog" className="block hover:text-white transition duration-300 touch-glow">
                Blog
              </Link>

              <Link href="/faq" className="block hover:text-white transition duration-300 touch-glow">
                FAQ
              </Link>

              <Link href="/contact" className="block hover:text-white transition duration-300 touch-glow">
                Contact
              </Link>

            </div>

          </FadeUp>

          {/* SOLUTIONS */}
          <FadeUp delay={3} className="text-center md:text-left">

            <p className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium">
              Solutions
            </p>

            <div className="space-y-3 text-white/40 text-sm">

              <Link href="/lighting-company-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Lighting Company Dubai
              </Link>

              <Link href="/lighting-showroom-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Showroom Dubai
              </Link>

              <Link href="/ceiling-lights-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Ceiling Lights
              </Link>

              <Link href="/outdoor-lighting-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Outdoor Lighting
              </Link>

              <Link href="/pendant-lights-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Pendant Lights
              </Link>

              <Link href="/led-strip-lights-dubai" className="block hover:text-white transition duration-300 touch-glow">
                LED Strip Lights
              </Link>

              <Link href="/explosion-proof-lights" className="block hover:text-white transition duration-300 touch-glow">
                Explosion Proof Lights
              </Link>

            </div>

          </FadeUp>

          {/* LOCATIONS */}
          <FadeUp delay={4} className="text-center md:text-left">

            <p className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium">
              Locations
            </p>

            <div className="space-y-3 text-white/40 text-sm">

              <Link href="/lighting-company-dubai" className="block hover:text-white transition duration-300 touch-glow">
                Dubai
              </Link>

              <Link href="/lighting-companies-uae" className="block hover:text-white transition duration-300 touch-glow">
                UAE
              </Link>

              <Link href="/lighting-suppliers-abu-dhabi" className="block hover:text-white transition duration-300 touch-glow">
                Abu Dhabi
              </Link>

              <Link href="/lighting-companies-sharjah" className="block hover:text-white transition duration-300 touch-glow">
                Sharjah
              </Link>

              <Link href="/lighting-solutions-ajman" className="block hover:text-white transition duration-300 touch-glow">
                Ajman
              </Link>

              <Link href="/lighting-solutions-rak" className="block hover:text-white transition duration-300 touch-glow">
                Ras Al Khaimah
              </Link>

              <Link href="/lighting-companies-saudi-arabia" className="block hover:text-white transition duration-300 touch-glow">
                Saudi Arabia
              </Link>

              <Link href="/lighting-companies-bahrain" className="block hover:text-white transition duration-300 touch-glow">
                Bahrain
              </Link>

            </div>

          </FadeUp>

          {/* CONTACT */}
          <FadeUp delay={5} className="text-center md:text-left">

            <p className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium">
              Contact
            </p>

            <div className="space-y-4 text-white/40 text-sm">
              <a
                href="https://maps.app.goo.gl/ec2HMCDNXYtYviV7A"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors duration-300"
              >
                <strong className="font-medium text-white/80">Credence Lighting LLC</strong>
                <br />
                Unit E77, Arabtec Eastern Model
                <br />
                Dubai Investment Park 1
                <br />
                Dubai, United Arab Emirates
              </a>

              <a href="mailto:info@credencelighting.com" className="block hover:text-white transition-colors duration-300">
                info@credencelighting.com
              </a>

              <a href="tel:+971564965660" className="block hover:text-white transition-colors duration-300">
                +971 564 965 660
              </a>

            </div>

          </FadeUp>

        </div>

        {/* LOWER SECTION */}
        <div className="mt-16 pt-8 border-t border-border-subtle">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* SOCIALS */}
            <div className="flex gap-6">

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/40 hover:text-white transition duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 8l6 4-6 4V8z" />
                  <path fillRule="evenodd" d="M20 5.5a3 3 0 0 0-2.12-.88H6.12A3 3 0 0 0 4 5.5 3 3 0 0 0 3.5 8.9v6.2a3 3 0 0 0 .5 2.4 3 3 0 0 0 2.12.88h11.76a3 3 0 0 0 2.12-.88 3 3 0 0 0 .5-2.4V8.9a3 3 0 0 0-.5-2.4z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/credencelighting/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.99.37 4 4 0 0 1 7.99-.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.86v-6.98h-2.2V12h2.2V9.8c0-2.17 1.28-3.37 3.24-3.37.94 0 1.92.17 1.92.17v2.12h-1.09c-1.08 0-1.42.67-1.42 1.35V12h2.42l-.39 2.88h-2.03v6.98A10 10 0 0 0 22 12Z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/company/credence-lighting-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5Zm.02 5.13H2.5V21h4.98V8.63H5Zm7.64 0h-4.7V21h4.7v-6.34c0-3.4 4.35-3.67 4.35 0V21h4.7v-7.42c0-6.32-6.8-6.08-9.05-2.55V8.63Z" />
                </svg>
              </motion.a>

            </div>

            {/* BACK TO TOP */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white transition duration-300 flex items-center gap-2"
            >
              Back To Top

              <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300">
                ↗
              </span>
            </button>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">

            <p className="text-white/60 text-xs">
              © 2026 Credence Lighting LLC. All Rights Reserved.
            </p>

            <p className="uppercase tracking-[0.15em] text-[10px] text-white/60">
              Crafted With Precision
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}