"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import PageLink from "@/components/ui/PageLink";
import products from "@/data/products";
import { slugify } from "@/utils/routeUtils";
import SEO from "@/components/seo/SEO";

const categoriesList = [
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
};

export default function ProductDetails() {
  const { slug } = useParams();
  const router = useRouter();
  
  // Backward compatibility: might still get raw name like "LED%20Screen"
  const matchedCategory = categoriesList.find(c => slugify(c) === slug) || decodeURIComponent(slug);
  const categoryProducts = products.filter((item) => item.category === matchedCategory);

  const currentIndex = categoriesList.findIndex(c => c === matchedCategory);
  const previousCategory = categoriesList[currentIndex === 0 ? categoriesList.length - 1 : currentIndex - 1];
  const nextCategory = categoriesList[currentIndex === categoriesList.length - 1 ? 0 : currentIndex + 1];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [prevMatchedCategory, setPrevMatchedCategory] = useState(matchedCategory);
  if (matchedCategory !== prevMatchedCategory) {
    setPrevMatchedCategory(matchedCategory);
    setActiveImageIndex(0);
  }

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveImageIndex((prev) => (prev === 0 ? categoryProducts.length - 1 : prev - 1));
  }, [categoryProducts.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveImageIndex((prev) => (prev === categoryProducts.length - 1 ? 0 : prev + 1));
  }, [categoryProducts.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 0
    })
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isLightboxOpen]);

  if (categoryProducts.length === 0) {
    return (
      <div className="h-screen bg-transparent flex flex-col items-center justify-center text-white text-3xl font-serif">
        Collection Not Found
      </div>
    );
  }

  const sampleProduct = categoryProducts[0];
  // sampleProduct.image is a bundled Vite asset (/assets/xxx.webp) — relative path.
  // og:image requires an absolute URL.
  const seoImage = sampleProduct.image
    ? (sampleProduct.image.startsWith('http') ? sampleProduct.image : `https://credencelighting.com${sampleProduct.image}`)
    : 'https://credencelighting.com/meta.png';

  return (
    <main className="bg-transparent min-h-screen relative overflow-x-hidden text-white">
      <SEO 
        title={`${matchedCategory} Lighting Collection · Credence Lighting`}
        description={`Explore our premium ${matchedCategory.toLowerCase()} lighting collection. Discover luxury ${sampleProduct.title.toLowerCase()}s engineered for uncompromised performance and aesthetic excellence.`}
        image={seoImage}
        schema={[{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": sampleProduct.title,
          "image": sampleProduct.image,
          "description": categoryDescriptions[matchedCategory] || sampleProduct.subtitle,
          "brand": {
            "@type": "Brand",
            "name": "Credence Lighting"
          },
          "category": matchedCategory
        }]}
      />
      {/* Background Decorative Gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-gold rounded-button blur-[60px] md:blur-[160px] opacity-[0.07]" />
        <div className="absolute top-[70%] right-[5%] w-[40%] h-[40%] bg-brand-gold rounded-button blur-[60px] md:blur-[150px] opacity-[0.07]" />
      </div>
      

      <section className="relative pt-24 md:pt-32 pb-24 px-6 md:px-12 z-10 max-w-[1500px] mx-auto flex flex-col items-center gap-12 lg:gap-20">
        
        {/* TOP: Details */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="uppercase tracking-[0.4em] text-xs font-semibold text-brand-gold mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-brand-gold hidden sm:block"></span>
            {matchedCategory} Collection
            <span className="w-8 h-[1px] bg-brand-gold hidden sm:block"></span>
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-white text-fluid-h1 font-serif mb-6"
          >
            {sampleProduct.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-white/50 uppercase tracking-[0.25em] text-xs mb-8 font-medium"
          >
            {sampleProduct.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <p className={`text-white/70 text-base md:text-lg leading-[1.8] font-light transition-all duration-300 ${!isTextExpanded ? 'line-clamp-3 md:line-clamp-none' : ''}`}>
              {categoryDescriptions[matchedCategory] || `Discover our premium ${sampleProduct.title}, curated specifically for ${matchedCategory.toLowerCase()} applications. Engineered for uncompromised performance and aesthetic excellence, it seamlessly integrates into modern luxury spaces.`}
            </p>
            <button 
              onClick={() => setIsTextExpanded(!isTextExpanded)}
              className="md:hidden mt-3 text-brand-gold text-xs uppercase tracking-wider font-semibold"
            >
              {isTextExpanded ? 'Show Less' : 'Learn More'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <PageLink
              to="/contact"
              className="inline-flex items-center justify-center bg-white/5 border border-border-subtle text-white px-12 py-4 tracking-[0.2em] uppercase text-xs font-medium hover:bg-white hover:border-white hover:text-black transition-all duration-500 rounded-sm group"
            >
              Enquire Now
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </PageLink>
          </motion.div>
        </div>

        {/* BOTTOM: Gallery Format */}
        <div className="w-full columns-1 sm:columns-2 md:columns-2 gap-4 md:gap-6 relative z-10">
          {categoryProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 50px 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              onClick={() => {
                setActiveImageIndex(idx);
                setIsLightboxOpen(true);
              }}
              className="w-full mb-4 md:mb-6 overflow-hidden rounded-card border border-border-subtle bg-surface-elevated relative group break-inside-avoid cursor-pointer"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <p className="text-white text-sm font-medium drop-shadow-md">{prod.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 z-40 pointer-events-none">
        <div className="flex items-center gap-4 md:gap-8 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl pointer-events-auto">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              router.push(`/products/${slugify(previousCategory)}`);
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:bg-white/10"
            aria-label="Previous collection"
          >
            <span className="text-xl leading-none -translate-y-[1px]">←</span>
          </button>
          
          <span className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap">
            Change Collection
          </span>

          <button
             onClick={() => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              router.push(`/products/${slugify(nextCategory)}`);
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:bg-white/10"
            aria-label="Next collection"
          >
            <span className="text-xl leading-none -translate-y-[1px]">→</span>
          </button>
        </div>
      </div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white transition-colors z-50 p-2"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all z-50 hover:scale-110"
              aria-label="Previous image"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all z-50 hover:scale-110"
              aria-label="Next image"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest z-50">
              {activeImageIndex + 1} / {categoryProducts.length}
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-[90vw] md:max-w-[85vw] h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={activeImageIndex}
                  src={categoryProducts[activeImageIndex].image}
                  alt={categoryProducts[activeImageIndex].title}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}