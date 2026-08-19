import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    name: "Products",
    to: "/products",
    dropdown: [
      { name: "Indoor Lighting", to: "/products/indoor" },
      { name: "Outdoor Lighting", to: "/products/outdoor" },
      { name: "Explosion Proof Lights", to: "/explosion-proof-lights" },
      { name: "Hospitality Lighting", to: "/products/hospitality" },
      { name: "Facade Lighting", to: "/facade-lighting" },
      { name: "Smart Lighting", to: "/products/automation" },
      { name: "Browse All Products", to: "/products" },
    ],
    featured: {
      title: "Indoor Collection",
      image: indoorImg, // We should ensure this path exists or use a robust fallback
    }
  },
  {
    name: "Solutions",
    to: "/solutions",
    dropdown: [
      { name: "Hospitality", to: "/hotel-lighting" },
      { name: "Explosion Proof Solutions", to: "/explosion-proof-lights" },
      { name: "Retail", to: "/retail-lighting" },
      { name: "Entertainment", to: "/entertainment-lighting" },
      { name: "Facade Lighting", to: "/facade-lighting" },
      { name: "Audio & Sound", to: "/audio-solutions" },
      { name: "View All Solutions", to: "/solutions" },
    ],
    featured: {
      title: "Lighting Solutions",
      image: solutionsImg,
    }
  },
  {
    name: "Projects",
    to: "/projects",
    dropdown: [
      { name: "My Town", to: "/projects/my-town" },
      { name: "Ground Control", to: "/projects/ground-control" },
      { name: "Funtura", to: "/projects/funtura" },
      { name: "Xtreme Zone", to: "/projects/xtreme-zone" },
      { name: "Smarvy Spot", to: "/projects/smarvy-spot" },
      { name: "Browse All Projects", to: "/projects" },
    ],
    featured: {
      title: "Featured Projects",
      image: projectsImg,
    }
  },
  {
    name: "Resources",
    to: "/blog",
    dropdown: [
      { name: "Blog", to: "/blog" },
      { name: "Guides", to: "/faq" }, // Using FAQ for guides temporarily
      { name: "Downloads", to: "/downloads" },
      { name: "FAQs", to: "/faq" },
    ],
    featured: {
      title: "Latest Insights",
      image: resourcesImg,
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
      title: "Our Heritage",
      image: companyImg,
    }
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* PERSISTENT DESKTOP & MOBILE NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40">
        {/* Subtle gradient at the top for legibility without a box */}
        <div className={`absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none h-32 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
        
        <div className={`mx-auto transition-all duration-500 flex items-center justify-between relative z-10 ${
          scrolled 
            ? "mt-4 w-[96%] md:w-[92%] rounded-panel bg-surface-glass backdrop-blur-heavy border border-border-subtle shadow-elevation-high px-6 py-4"
            : "mt-0 w-full rounded-none bg-transparent border-transparent shadow-none px-6 md:px-12 py-6 md:py-8"
        }`}>
          
          {/* Logo */}
          <div className="flex-1 flex justify-start items-center">
            <PageLink
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="relative flex items-center justify-center">
                {/* Sunburst/Glow Effect Background */}
                <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-full scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
                
                <img
                  src="/logo.svg?v=2"
                  alt="Credence Lighting"
                  
                  fetchPriority="high"
                  className="relative z-10 h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(200,169,107,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(200,169,107,1)] transition-all duration-500"
                />
              </div>
              <span className="hidden lg:inline-flex font-serif text-white tracking-wide text-lg group-hover:text-[#c8a96b] transition-colors duration-500">
                Credence Lighting
              </span>
            </PageLink>
          </div>

          {/* Desktop Mega Menu */}
          <div className="hidden lg:flex items-center justify-center gap-10 h-full">
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
              aria-label="Open Menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-white flex items-center justify-center p-2"
            >
              <Menu size={28} strokeWidth={1.5} />
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
            className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[400px] bg-surface-base border-l border-white/10 z-50 flex flex-col px-6 md:px-10 py-6 overflow-y-auto lg:hidden shadow-2xl"
          >
            {/* MENU HEADER */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 shrink-0">
              <PageLink
                to="/"
                onClick={() => { handleLogoClick(); closeMenu(); }}
                className="flex items-center gap-3 shrink-0 group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#c8a96b]/30 blur-xl rounded-full scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
                  <img
                    src="/logo.svg?v=2"
                    alt="Credence Lighting"
                    
                    className="relative z-10 h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(200,169,107,0.8)]"
                  />
                </div>
                <span className="font-serif text-white tracking-wide text-lg">
                  Credence Lighting
                </span>
              </PageLink>
              <button
                aria-label="Close Menu"
                onClick={closeMenu}
                className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 rounded-full"
              >
                <X size={24} strokeWidth={1.5} />
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
                        onClick={() => setExpandedMobile(expandedMobile === item.name ? null : item.name)}
                        className="p-4 -mr-4 text-white/50 hover:text-brand-gold transition-colors"
                      >
                        <ChevronDown className={`transition-transform duration-300 ${expandedMobile === item.name ? 'rotate-180' : ''}`} size={24} />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {item.dropdown && expandedMobile === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pl-4 border-l border-white/20 mt-2 mb-6 py-2">
                          {item.dropdown.map((sub) => (
                            <PageLink
                              key={sub.name}
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
                  className="flex items-center justify-center w-full gap-3 bg-brand-gold text-black px-6 py-4 uppercase tracking-[0.15em] text-sm font-bold rounded-button shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow"
                >
                  Enquire Now
                  <ArrowUpRight size={18} />
                </PageLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
