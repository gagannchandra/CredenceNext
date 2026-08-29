"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import products from "../../data/products";
import { useRouter, usePathname } from "next/navigation";
import { saveReturnState } from "../../utils/navigationState";
import { slugify } from "../../utils/routeUtils";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import HoverLift from "../ui/motion/HoverLift";
import useTiltHover from "../ui/motion/useTiltHover";
import { duration, ease } from "../../utils/motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

// How far (px) a drag has to travel before it commits to advancing a slide
// rather than snapping back to the current one.
const DRAG_THRESHOLD = 60;

const categories = [
  "All",
  "Indoor",
  "Outdoor",
  "Hospitality",
  "Facade",
  "Entertainment",
  "LED Screen",
  "Stretch Ceiling",
  "Automation",
  "Retail",
  "Audio",
  "Explosion Proof",
];

const categoryDescriptions = {
  Indoor: "Indoor Lighting offers a vast range of modern lighting products designed for residential, commercial, and architectural interiors. Powered by advanced lighting technology, our solutions deliver superior efficiency, comfort, and visual performance.",
  Outdoor: "Outdoor Lighting is designed to enhance exteriors with power, precision, and durability. Our extensive range of outdoor lighting solutions combines advanced technology with robust engineering to deliver high performance in all environments.",
  Hospitality: "Hospitality Lighting enhances ambience and guest experience through a wide range of refined lighting solutions. Powered by advanced technology, our lighting delivers visual comfort, elegance, and efficiency.",
  Facade: "Facade Lighting enhances architectural identity and visual impact with a wide range of advanced lighting solutions. Powered by cutting-edge technology, our systems deliver precise illumination and dynamic effects.",
  Entertainment: "Entertainment Lighting delivers high-impact visuals and immersive experiences through a wide range of dynamic lighting solutions. Powered by advanced control technology, our systems create precision effects, movement, and atmosphere.",
  "LED Screen": "LED Screens deliver powerful visual impact with a wide range of modern display solutions for indoor, outdoor, stage, and advertising applications. Powered by advanced display technology, our screens offer high brightness, clarity, and seamless performance.",
  "Stretch Ceiling": "Stretch Ceiling Solutions enhance interiors with modern design, seamless finishes, and creative flexibility. Our wide range of stretch ceiling systems integrates advanced technology with precision fabrication for flawless results.",
  Automation: "Home Automation Systems bring comfort, control, and efficiency through a wide range of smart solutions. Powered by advanced technology, our systems seamlessly integrate lighting, climate, security, and AV control.",
  Retail: "Retail Lighting enhances product visibility and customer experience through a wide range of modern lighting solutions. Powered by advanced lighting technology, our systems deliver precise illumination, visual comfort, and energy efficiency.",
  Audio: "We deliver innovative audio solutions for residential, commercial, hospitality, and retail spaces. From background music and public address systems to conference and entertainment audio, our team provides complete design, supply, installation, and support.",
  "Explosion Proof": "Certified ATEX and IECEx flameproof lighting engineered for hazardous industrial environments, oil & gas facilities, chemical plants, refineries, and hazardous highway corridors. Built with copper-free cast aluminum enclosures and high-impact tempered glass.",
};

function BentoCard({ item, index, bentoClass, onSelect }) {
  const { handlers, tiltStyle, glowStyle } = useTiltHover({ max: 6 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: duration.standard, delay: index * 0.05, ease: ease.standard }}
      onClick={onSelect}
      style={tiltStyle}
      {...handlers}
      className={`group relative overflow-hidden rounded-card cursor-pointer shadow-elevation-low hover:shadow-elevation-high transition-all duration-500 bg-surface-elevated [transform-style:preserve-3d] ${bentoClass}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        loading="lazy"
        className="object-cover transition-transform duration-1000 group-hover:scale-[1.08] opacity-80 group-hover:opacity-100"
      />

      {glowStyle && (
        <motion.div aria-hidden="true" className="absolute inset-0 pointer-events-none mix-blend-overlay" style={glowStyle} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight">{item.category}</h3>
      </div>
    </motion.div>
  );
}

export default function ProductsSection({ hideHeader = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("All");
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const filteredProducts = active === "All" ? products.slice(0, 6) : products.filter((item) => item.category === active);

  // Representative product for each category (used in All view)
  const representativeProducts = categories
    .filter((c) => c !== "All")
    .map((c) => products.find((p) => p.category === c))
    .filter(Boolean);

  const handlePrev = () => {
    setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide for category view
  useEffect(() => {
    if (active !== "All" && filteredProducts.length > 1) {
      const interval = setInterval(() => {
        setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
      }, 5000); // 5 seconds auto-slide
      return () => clearInterval(interval);
    }
  }, [active, filteredProducts.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      if (active === "All") return;
      if (e.key === "ArrowLeft") {
        setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, filteredProducts.length]);

  // Bento Box Layout configurations for 'All' view
  const getBentoClasses = (index) => {
    const patterns = [
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2", // Item 0
      "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1", // Item 1
      "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1", // Item 2
      "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2", // Item 3
      "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1", // Item 4
      "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", // Item 5
      "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1", // Item 6
      "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1", // Item 7
    ];
    return patterns[index % 8];
  };

  return (
    <section id="products" className="text-white px-4 md:px-12 py-8 md:py-16 relative overflow-hidden bg-transparent z-10">

      <div className="max-w-[1500px] mx-auto relative z-10">
        {!hideHeader && (
          <div className="mb-16 text-center md:text-left">
            <FadeUp delay={0}>
              <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6 font-semibold">
                Premium Collection
              </p>
            </FadeUp>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <h2 className="text-fluid-h1 font-serif text-white flex flex-wrap justify-center md:justify-start gap-2">
                <TextReveal text="Our Product" /> <TextReveal text="Range" delay={2} className="italic text-brand-gold font-light block w-full text-center md:text-left md:w-auto md:inline-block" />
              </h2>

              <FadeUp delay={4} className="mx-auto md:mx-0 w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <HoverLift className="w-full sm:w-auto">
                  <Link
                    href="/products"
                    className="w-full sm:w-auto border border-white/20 backdrop-blur-sm text-white px-8 py-4 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button flex items-center justify-center hover:bg-white hover:text-black"
                  >
                    All Products
                  </Link>
                </HoverLift>
                <HoverLift className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-8 py-4 tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded-button flex items-center justify-center gap-3 group hover:bg-brand-gold hover:text-black"
                  >
                    Enquire
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </HoverLift>
              </FadeUp>
            </div>

            <div className="mt-6 min-h-[3.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: ease.standard }}
                  className="text-white/60 text-sm md:text-base leading-relaxed w-full line-clamp-2"
                >
                  {active === "All"
                    ? "Our full fixture range, from architectural downlights to explosion-proof luminaires."
                    : categoryDescriptions[active]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Category Filters with Sliding Indicator */}
        <div className="flex flex-wrap gap-2 mb-20 relative z-20">
          {categories.map((item) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setActiveProductIndex(0);
                }}
                className={`relative px-6 py-3 text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-button overflow-hidden ${isActive ? "text-black font-semibold" : "text-white/60 hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold/80 shadow-glow"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: duration.standard }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

        {/* Display Mode: All vs Category */}
        <div className="min-h-[600px]">
          {active === "All" ? (
            // Bento Grid View for All Categories
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] grid-flow-dense"
            >
              <AnimatePresence>
                {representativeProducts.map((item, index) => (
                  <BentoCard
                    key={item.id}
                    item={item}
                    index={index}
                    bentoClass={getBentoClasses(index)}
                    onSelect={() => {
                      setActive(item.category);
                      setActiveProductIndex(0);
                    }}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            // Featured View for Specific Category - Continuous Coverflow Carousel
            <div className="relative">
              <motion.div
                drag="x"
                dragElastic={0.15}
                dragConstraints={{ left: 0, right: 0 }}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -DRAG_THRESHOLD) handleNext();
                  else if (info.offset.x > DRAG_THRESHOLD) handlePrev();
                }}
                className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center group select-none overflow-hidden rounded-panel cursor-grab active:cursor-grabbing"
              >
              {filteredProducts.map((item, index) => {
                const total = filteredProducts.length;
                let diff = index - activeProductIndex;

                // Normalize diff to be between -total/2 and total/2 for infinite wrapping
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isCenter = Math.abs(diff) < 0.5; // diff === 0
                const isLeft = diff >= -1.5 && diff <= -0.5; // diff === -1
                const isRight = diff >= 0.5 && diff <= 1.5; // diff === 1

                const isVisible = isCenter || isLeft || isRight;

                // Calculate X position based on relative distance (increased spacing)
                let xPos = "0%";
                if (isLeft) xPos = "-95%";
                else if (isRight) xPos = "95%";
                else if (diff < -1) xPos = "-160%";
                else if (diff > 1) xPos = "160%";

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      x: xPos,
                      scale: isCenter ? 1 : 0.85,
                      opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                      zIndex: isCenter ? 30 : isVisible ? 20 : 0,
                    }}
                    transition={{ duration: duration.standard, ease: ease.standard }}
                    className={`absolute w-[90%] md:w-[60%] lg:w-[50%] h-[90%] md:h-[95%] lg:h-full rounded-panel overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${isCenter ? '' : 'cursor-pointer hover:opacity-60'} ${!isVisible ? 'pointer-events-none' : ''}`}
                    style={{ filter: isCenter ? "grayscale(0%)" : "grayscale(15%)" }}
                    onClick={() => {
                      if (isCenter) {
                        saveReturnState({ pathname: pathname, hash: pathname === "/" ? "#products" : "", scrollY: window.scrollY });
                        router.push(`/products/${slugify(item.category)}`);
                      }
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
                      loading="lazy"
                      className="object-cover pointer-events-none"
                    />

                    <AnimatePresence>
                      {isCenter && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 z-10"
                        >
                          {/* Gradient Overlays for Text Readability */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

                          {/* Snapchat-style click zones for center image */}
                          <div className="absolute inset-0 z-10 flex cursor-pointer">
                            <div
                              className="w-1/2 h-full flex items-center justify-start"
                              onClick={handlePrev}
                            />
                            <div
                              className="w-1/2 h-full flex items-center justify-end"
                              onClick={handleNext}
                            />
                          </div>

                          {/* Top Left Topic Overlay */}
                          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-brand-gold" />
                            <p className="uppercase tracking-[0.3em] text-xs text-brand-gold font-semibold drop-shadow-md">
                              {active} Collection
                            </p>
                          </div>

                          {/* Bottom Description Overlay */}
                          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-20 pointer-events-none max-w-2xl">
                            <p className="text-white/90 text-sm md:text-lg leading-[1.8] font-light shadow-black drop-shadow-lg mb-4">
                              {categoryDescriptions[active]}
                            </p>
                            <div className="pointer-events-auto inline-block">
                              <button onClick={(e) => {
                                e.stopPropagation();
                                saveReturnState({ pathname: pathname, hash: pathname === "/" ? "#products" : "", scrollY: window.scrollY });
                                router.push(`/products/${slugify(item.category)}`);
                              }} className="text-brand-gold uppercase tracking-[0.2em] text-xs md:text-xs font-semibold hover:text-white transition-colors border-b border-brand-gold/30 hover:border-white pb-1">
                                View Collection Details
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              </motion.div>

              {/* Arrow Controls - overlaid on the image, outside the drag layer */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous product"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next product"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              {/* Index indicator */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 font-mono text-xs text-white/50 tabular-nums bg-black/30 backdrop-blur-md px-3 py-1 rounded-full pointer-events-none">
                {String(activeProductIndex + 1).padStart(2, "0")} / {String(filteredProducts.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
