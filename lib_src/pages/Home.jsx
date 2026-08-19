"use client";

import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import ReturnScrollHandler from "@/components/ReturnScrollHandler";
import { scrollToSection } from "@/utils/scrollUtils";
import SEO from "@/components/seo/SEO";
import Loader from "@/components/ui/Loader";
import { useState } from "react";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import BrandsSection from "@/components/home/BrandsSection";
// GlobalPresence now handles its own client-only WebGL split internally
// (react-globe.gl is dynamically imported with ssr:false inside the
// component itself, gated further behind an in-view check), so it no
// longer needs to be wrapped in a top-level ssr:false dynamic import here.
// That means its heading/copy/CTA now server-render like the rest of the
// page instead of being blank until JS loads.
import GlobalPresence from "@/components/home/GlobalPresence";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import PageTransition from "@/components/ui/motion/PageTransition";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Must match between server and first client render, so start as "not
  // loading" (document doesn't exist on the server) and correct it in an
  // effect immediately after mount if the page is in fact still loading.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      return;
    }
    queueMicrotask(() => setIsLoading(true));
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Wait until loading finishes before scrolling
    const hash = window.location.hash;

    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const timer = setTimeout(() => scrollToSection(sectionId), 150);

    return () => clearTimeout(timer);
  }, [isLoading]);



  return (
    <>
    <AnimatePresence>
      {isLoading && <Loader isInitial={true} key="home-loader" />}
    </AnimatePresence>
    <PageTransition>
      <SEO
        title="Credence Lighting | Premium Lighting Solutions Dubai"
        description="Premium architectural, commercial, hospitality, and decorative lighting solutions across Dubai and the UAE. 10+ years of expertise and 1,000+ successful projects."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Credence Lighting",
            "url": "https://credencelighting.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://credencelighting.com/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
          "@id": "https://credencelighting.com/#organization",
            "name": "Credence Lighting LLC",
            "url": "https://credencelighting.com",
            "logo": "https://credencelighting.com/logo.svg",
            "description": "Premium architectural, commercial, and hospitality lighting design, supply, and installation across Dubai, UAE, and the GCC region.",
            "telephone": "+971564965660",
            "email": "info@credencelighting.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://www.instagram.com/credencelighting/",
              "https://www.linkedin.com/company/credence-lighting-llc/"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://credencelighting.com/#localbusiness",
            "parentOrganization": {
              "@id": "https://credencelighting.com/#organization"
            },
            "name": "Credence Lighting LLC",
            "image": "https://credencelighting.com/logo.svg",
            "url": "https://credencelighting.com",
            "telephone": "+971564965660",
            "email": "info@credencelighting.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.9788",
              "longitude": "55.1764"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "$$$$",
            "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE", "Saudi Arabia", "Bahrain"]
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Site Navigation",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Products",
                "url": "https://credencelighting.com/products",
                "description": "Explore our premium collection of indoor, outdoor, hospitality, and facade lighting fixtures."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Contact Us",
                "url": "https://credencelighting.com/contact",
                "description": "Get in touch with our lighting specialists in Dubai for project inquiries and quotations."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Solutions",
                "url": "https://credencelighting.com/solutions",
                "description": "Bespoke architectural, commercial, and hospitality lighting solutions tailored to your space."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Our Clients & Brands",
                "url": "https://credencelighting.com/brands",
                "description": "Discover the visionary brands, architects, and developers we partner with across the UAE."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "About Us",
                "url": "https://credencelighting.com/about",
                "description": "10+ years of experience delivering premium lighting solutions. Aesthetics meets functionality."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Featured Projects",
                "url": "https://credencelighting.com/projects",
                "description": "View our featured lighting installations across architectural, entertainment, and retail sectors."
              }
            ]
          }
        ]}
      />
      <ReturnScrollHandler />
      <main className="bg-transparent min-h-screen relative overflow-hidden">
        {/* Global Continuous Background Lighting */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-brand-gold rounded-button blur-[60px] md:blur-[150px] opacity-[0.08] will-change-transform transform-gpu"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute top-[60%] -right-[10%] w-[40vw] h-[40vw] bg-brand-gold rounded-button blur-[60px] md:blur-[150px] opacity-[0.08] will-change-transform transform-gpu"
          />
        </div>

        <div className="relative z-10">
          <Hero />
          
          <AboutSection preview={true} />

          <ProjectsSection preview={true} />
          <ProductsSection preview={true} />
          <BrandsSection preview={true} />

          <div className="min-h-screen md:min-h-[90vh]">
            <GlobalPresence />
          </div>
          <ContactSection preview={true} />
        </div>
      </main>

      <Footer />
    </PageTransition>
    </>
  );
}