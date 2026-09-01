"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useId } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import PageLink from "../ui/PageLink";
import MegaMenu from "./MegaMenu";
const indoorImg = "/images/indoor/1.webp"; // Using an existing image
const solutionsImg = "/images/hospitality/1.webp";
const resourcesImg = "/images/blog/funtura.webp";
const companyImg = "/images/facade/1.webp";
const projectsImg = "/images/xtremezone/136.webp";

const navItems = [
  {
    name: "Services",
    to: "/products",
    dropdown: [
      { name: "Indoor & Outdoor Lighting", to: "/products/indoor" },
      { name: "LED Screens", to: "/products/led-screen" },
      { name: "Stretch Ceiling", to: "/products/stretch-ceiling" },
      { name: "Home Automation", to: "/products/automation" },
      { name: "Audio Systems", to: "/products/audio" },
      { name: "Browse All Products", to: "/products" },
    ],
    featured: {
      title: "Architectural Indoor Collection",
      image: indoorImg,
      to: "/products",
    }
  },
  {
    name: "Sectors",
    to: "/solutions",
    dropdown: [
      { name: "Hospitality", to: "/hotel-lighting" },
      { name: "Residential", to: "/residential-lighting" },
      { name: "Retail", to: "/retail-lighting" },
      { name: "Entertainment", to: "/entertainment-lighting" },
      { name: "Commercial", to: "/office-lighting" },
      { name: "Architectural", to: "/facade-lighting" },
    ],
    featured: {
      title: "Lighting Solutions in Dubai",
      image: solutionsImg,
      to: "/lighting-company-dubai",
    }
  },
  {
    name: "Projects",
    to: "/projects",
    dropdown: [
      { name: "All Projects", to: "/projects" },
      { name: "My Town (Multiple Locations)", to: "/projects/my-town" },
      { name: "Ground Control (Bahrain)", to: "/projects/ground-control" },
      { name: "Funtura (Riyadh)", to: "/projects/funtura" },
      { name: "Xtreme Zone (Riyadh)", to: "/projects/xtreme-zone" },
      { name: "Smarvy Spot (Al-Ahsa)", to: "/projects/smarvy-spot" },
    ],
    featured: {
      title: "View Recent Case Studies",
      image: projectsImg,
      to: "/projects",
    }
  },
  {
    name: "Resources",
    to: "/blog",
    dropdown: [
      { name: "Blog", to: "/blog" },
      { name: "Guide", to: "/guides" },
      { name: "Downloads", to: "/downloads" },
      { name: "FAQs", to: "/faq" },
    ],
    featured: {
      title: "Lighting Design Insights",
      image: resourcesImg,
      to: "/blog",
    }
  },
  {
    name: "About Us",
    to: "/about",
    dropdown: [
      { name: "About", to: "/about" },
      { name: "Clients", to: "/brands" },
      { name: "Gallery", to: "/gallery" },
      { name: "Contact", to: "/contact" },
    ],
    featured: {
      title: "About Credence Lighting",
      image: companyImg,
      to: "/about",
    }
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const menuId = useId();

  // A raw window scroll listener fires on every frame and re-renders the whole
  // nav; useScroll reads from Motion's batched scroll loop and setScrolled only
  // runs on the two frames where the 40px threshold is actually crossed.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 40;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  // Escape closes the mobile drawer and returns focus to the trigger, and the
  // page behind it stops scrolling while it is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the drawer so keyboard and screen-reader users land
    // inside it rather than continuing through the page underneath.
    menuPanelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleLogoClick = () => {
    setActiveMenu(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 w-full z-40 flex justify-center px-3 pt-3"
      >
        {/* Geometry (width, padding, radius, margin) is identical in both
            states so crossing the scroll threshold repaints instead of
            re-laying-out the page. Only background, border and shadow
            transition - all compositor-cheap paint properties. */}
        <div
          className={`w-full max-w-[1600px] h-16 lg:h-[72px] rounded-panel border px-4 sm:px-6 flex items-center justify-between transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out ${
            scrolled
              ? "bg-surface-glass backdrop-blur-heavy border-border-subtle shadow-elevation-high"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          
          {/* Logo */}
          <div className="flex-1 flex justify-start items-center">
            <PageLink
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="relative flex items-center justify-center">
                {/* Sunburst/Glow Effect Background */}
                <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-button scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
                
                <Image
                  src="/logo.svg?v=2"
                  alt="Credence Lighting Logo"
                  width={40}
                  height={40}
                  priority
                  className="relative z-10 h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(200,169,107,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(200,169,107,1)] transition-all duration-500"
                />
              </div>
              <span className="hidden xl:inline-flex font-serif text-white tracking-wide text-lg group-hover:text-brand-gold transition-colors duration-500">
                Credence Lighting
              </span>
            </PageLink>
          </div>

          {/* Desktop Mega Menu */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 h-full">
            {navItems.map((item) => (
              <MegaMenu 
                key={item.name} 
                item={item} 
                active={activeMenu} 
                setActive={setActiveMenu} 
              />
            ))}
          </div>

          {/* Right Side: Desktop CTA & Mobile Hamburger */}
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop CTA */}
            <div className="hidden lg:flex shrink-0">
              <PageLink
                to="/contact"
                className="text-xs uppercase tracking-[0.15em] text-white/90 hover:text-white border border-white/20 hover:border-white transition-all px-6 py-2.5 rounded-button"
              >
                Enquire
              </PageLink>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen(true)}
              className="lg:hidden text-white flex items-center justify-center p-2"
            >
              <Menu size={28} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
          />
        )}
        {open && (
          <motion.div
            key="menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 180,
            }}
            id={menuId}
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            tabIndex={-1}
            className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[400px] bg-surface-base border-l border-white/10 z-50 flex flex-col px-6 md:px-10 py-6 overflow-y-auto lg:hidden shadow-2xl outline-none"
          >
            {/* MENU HEADER */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 shrink-0">
              <PageLink
                to="/"
                onClick={() => { handleLogoClick(); closeMenu(); }}
                className="flex items-center gap-3 shrink-0 group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-button scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
                  <Image
                    src="/logo.svg?v=2"
                    alt="Credence Lighting"
                    width={28}
                    height={28}
                    className="relative z-10 h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(200,169,107,0.8)]"
                  />
                </div>
                <span className="font-serif text-white tracking-wide text-lg">
                  Credence Lighting
                </span>
              </PageLink>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 rounded-button"
              >
                <X size={24} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            {/* LINKS */}
            <div className="relative z-10 space-y-4 flex-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <PageLink
                      to={item.to}
                      onClick={closeMenu}
                      className="text-3xl text-white font-serif py-2 flex-1"
                    >
                      {item.name}
                    </PageLink>
                    {item.dropdown && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.name} submenu`}
                        aria-expanded={mobileExpanded === item.name}
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="p-4 -mr-4 text-white/50 hover:text-brand-gold transition-colors"
                      >
                        <ChevronDown className={`transition-transform duration-300 ${mobileExpanded === item.name ? 'rotate-180' : ''}`} size={24} />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {item.dropdown && mobileExpanded === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pl-4 border-l border-white/20 mt-2 mb-6 py-2">
                          {item.dropdown.map((sub) => (
                            <PageLink
                              key={`${sub.name}-${sub.to}`}
                              to={sub.to}
                              onClick={closeMenu}
                              className="text-base text-white/70 hover:text-brand-gold transition-colors tracking-wide py-1.5"
                            >
                              {sub.name}
                            </PageLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8 pb-12"
              >
                <PageLink
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full gap-3 bg-brand-gold text-black px-6 py-4 uppercase tracking-[0.15em] text-sm font-semibold rounded-button hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300"
                >
                  Enquire
                  <ArrowUpRight size={18} aria-hidden="true" />
                </PageLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
