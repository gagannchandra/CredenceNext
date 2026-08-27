"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import FadeUp from "../ui/motion/FadeUp";
import TextReveal from "../ui/motion/TextReveal";

// Real brand marks instead of hand-drawn <path> approximations. One family
// (Font Awesome 6 brands, already a dependency via WhatsappFloat) so the
// glyphs share optical weight.
const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@credencelighting",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/credencelighting/",
    Icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/credencelighting",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/credence-lighting-llc/",
    Icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white border-t border-border-subtle overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 pt-24 pb-16">

        {/* PRE-FOOTER CTA */}
        <FadeUp delay={0} className="mb-24 flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center justify-center mb-10 group relative">
            {/* Sunburst/Glow Effect Background */}
            <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-button scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
            
            <Image
              src="/logo.svg?v=2"
              alt="Credence Lighting Logo"
              width={48}
              height={48}
              className="relative z-10 h-12 w-auto object-contain opacity-90 drop-shadow-[0_0_12px_rgba(200,169,107,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(200,169,107,1)] group-hover:opacity-100 transition-all duration-500"
            />
          </Link>
          <h3 className="text-fluid-h1 font-serif flex flex-wrap justify-center gap-2 mb-8">
            <TextReveal text="Illuminating Spaces" />
            <TextReveal text="With Elegance" delay={2} className="italic text-brand-gold" />
          </h3>
          <p className="text-white/60 leading-[1.8] max-w-lg">
            Architectural and commercial lighting for hospitality, retail,
            workplace, and residential projects across the UAE and the wider
            GCC.
          </p>
        </FadeUp>

        {/* 4-COLUMN LINK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-border-subtle pt-16">


          <FadeUp delay={2} className="text-center md:text-left">

            <h2 className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium font-sans">
              Navigation
            </h2>

            <nav aria-label="Footer navigation" className="space-y-3 text-white/60 text-sm">

              <Link href="/" className="block hover:text-white transition duration-300 touch-glow">
                Home
              </Link>

              <Link href="/about" className="block hover:text-white transition duration-300 touch-glow">
                About
              </Link>

              <Link href="/products" className="block hover:text-white transition duration-300 touch-glow">
                Services
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

              <Link href="/guides" className="block hover:text-white transition duration-300 touch-glow">
                Guides
              </Link>

              <Link href="/faq" className="block hover:text-white transition duration-300 touch-glow">
                FAQ
              </Link>

              <Link href="/contact" className="block hover:text-white transition duration-300 touch-glow">
                Contact
              </Link>

            </nav>

          </FadeUp>

          {/* SECTORS */}
          <FadeUp delay={3} className="text-center md:text-left">

            <h2 className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium font-sans">
              Sectors
            </h2>

            <nav aria-label="Footer sectors" className="space-y-3 text-white/60 text-sm">

              <Link href="/residential-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Residential
              </Link>

              <Link href="/hotel-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Hospitality
              </Link>

              <Link href="/retail-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Retail
              </Link>

              <Link href="/office-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Commercial
              </Link>

              <Link href="/facade-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Architectural
              </Link>

              <Link href="/entertainment-lighting" className="block hover:text-white transition duration-300 touch-glow">
                Entertainment
              </Link>

            </nav>

          </FadeUp>

          {/* LOCATIONS */}
          <FadeUp delay={4} className="text-center md:text-left">

            <h2 className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium font-sans">
              Locations
            </h2>

            <nav aria-label="Footer locations" className="space-y-3 text-white/60 text-sm">

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

            </nav>

          </FadeUp>

          {/* CONTACT */}
          <FadeUp delay={5} className="text-center md:text-left">

            <h2 className="uppercase tracking-[0.1em] text-xs text-brand-gold mb-6 font-medium font-sans">
              Contact
            </h2>

            <address className="not-italic space-y-4 text-white/60 text-sm">
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

            </address>

          </FadeUp>

        </div>

        {/* LOWER SECTION */}
        <div className="mt-16 pt-8 border-t border-border-subtle">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* SOCIALS */}
            <ul className="flex gap-6 list-none m-0 p-0">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  if (window.lenis) {
                    window.lenis.scrollTo(0);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
              className="group uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white transition duration-300 flex items-center gap-2"
            >
              Back To Top
              <ArrowUp
                size={14}
                aria-hidden="true"
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">

            <p className="text-white/60 text-xs">
              © 2026 Credence Lighting LLC. All Rights Reserved.
            </p>

            <Link
              href="/contact"
              className="text-xs text-white/60 hover:text-white transition-colors duration-300"
            >
              Dubai, United Arab Emirates
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}