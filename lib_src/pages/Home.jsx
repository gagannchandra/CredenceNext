"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/layout/Footer";
import ReturnScrollHandler from "@/components/ReturnScrollHandler";
import { scrollToSection } from "@/utils/scrollUtils";
import SEO from "@/components/seo/SEO";
import Loader from "@/components/ui/Loader";

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
//
// The globe (and a page-level loader gated on it) previously loaded eagerly
// on every homepage visit, to avoid a pop-in when scrolling down to it. That
// pulled three.js's full module graph (core, module, webgpu, tsl, three-globe,
// d3-geo, h3-js, polished - ~83kB gzipped) into the critical path of every
// first visit and made the whole page feel slower to load. GlobalPresence's
// own in-view gate (see its useInView hook) now does what it was built for:
// nothing globe-related loads until the visitor scrolls near it.
import GlobalPresence from "@/components/home/GlobalPresence";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import PageTransition from "@/components/ui/motion/PageTransition";

// Once shown in this tab, later visits to "/" (client-side nav away and
// back) skip the loader - it's a first-impression flourish, not something
// worth replaying every time someone bounces back to the homepage.
const LOADER_SEEN_KEY = "credence:home-loader-seen";

export default function Home() {
  // The original full-screen splash here was gated on `window.load`, which
  // waits for every image on the page - it covered the hero for the whole of
  // that wait, so the hero could never be the LCP element. A later version
  // was gated on the 3D globe finishing loading, which "fixed" that but
  // forced the globe to load eagerly on every visit (~83kB of three.js in
  // the critical path) to have something to wait for - regressing load
  // performance instead. This version depends on neither: it's a fixed,
  // short (~1.5s) timer-driven intro that doesn't wait on any network
  // resource, so it can't block or slow down anything real.
  // Always starts true so server and client render the same thing on first
  // paint (reading sessionStorage here would desync them and trigger a
  // hydration mismatch) - the "already seen" check below runs client-only,
  // one effect tick later, and closes the loader immediately if it applies.
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderDone = () => {
    try {
      sessionStorage.setItem(LOADER_SEEN_KEY, "true");
    } catch {
      // sessionStorage can throw in private-browsing / quota-exceeded cases - non-fatal
    }
    setShowLoader(false);
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem(LOADER_SEEN_KEY) === "true") {
        queueMicrotask(() => setShowLoader(false));
      }
    } catch {
      // sessionStorage can throw in private-browsing / quota-exceeded cases - non-fatal
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const timer = setTimeout(() => scrollToSection(sectionId), 150);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    <AnimatePresence>
      {showLoader && <Loader onDone={handleLoaderDone} />}
    </AnimatePresence>
    <PageTransition>
      <SEO
        title="Credence Lighting · Architectural & Commercial Lighting Dubai"
        description="Premier architectural, commercial, and hospitality lighting design, supply, and installation across Dubai and the UAE. 10+ years of expertise and 1,000+ completed projects."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Credence Lighting",
            "url": "https://www.credencelighting.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.credencelighting.com/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.credencelighting.com/#organization",
            "name": "Credence Lighting LLC",
            "url": "https://www.credencelighting.com",
            "logo": "https://www.credencelighting.com/logo.svg",
            "description": "Premier architectural, commercial, and hospitality lighting design, supply, and installation across Dubai, UAE, and the GCC region.",
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
            "@id": "https://www.credencelighting.com/#localbusiness",
            "parentOrganization": {
              "@id": "https://www.credencelighting.com/#organization"
            },
            "name": "Credence Lighting LLC",
            "image": "https://www.credencelighting.com/logo.svg",
            "url": "https://www.credencelighting.com",
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
            "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "UAE", "Saudi Arabia", "Bahrain"]
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Site Navigation",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Architectural Lighting Products",
                "url": "https://www.credencelighting.com/products",
                "description": "Explore our portfolio of indoor downlights, outdoor landscape fixtures, facade illumination, and smart automation systems."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Lighting Solutions & Services",
                "url": "https://www.credencelighting.com/solutions",
                "description": "Bespoke architectural, commercial, hospitality, and residential lighting solutions tailored to your space."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Portfolio & Case Studies",
                "url": "https://www.credencelighting.com/projects",
                "description": "Signature architectural, commercial, and entertainment lighting projects delivered across Dubai and the GCC."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "About Us",
                "url": "https://www.credencelighting.com/about",
                "description": "Learn about Credence Lighting, premier architectural lighting design and supply consultants in Dubai."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Insights & Articles",
                "url": "https://www.credencelighting.com/blog",
                "description": "Expert architectural lighting design guides, municipal standards, and industry technology insights."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Contact Us",
                "url": "https://www.credencelighting.com/contact",
                "description": "Consult with our lighting design specialists in Dubai for project inquiries, photometric planning, and quotations."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 7,
                "name": "Lighting Company in Dubai",
                "url": "https://www.credencelighting.com/lighting-company-dubai",
                "description": "Leading lighting company in Dubai offering end-to-end design, fixture supply, and commissioning across the UAE."
              },
              {
                "@type": "SiteNavigationElement",
                "position": 8,
                "name": "Lighting Showroom in Dubai",
                "url": "https://www.credencelighting.com/lighting-showroom-dubai",
                "description": "Experience live architectural lighting displays, tunable white LEDs, and control systems at our Dubai showroom."
              }
            ]
          }
        ]}
      />
      <ReturnScrollHandler />
      <div className="bg-transparent relative overflow-hidden">
        <div className="relative z-10">
          <Hero />
          
          <AboutSection preview={true} />

          <ProjectsSection preview={true} />
          <ProductsSection preview={true} />
          <BrandsSection preview={true} />

          <GlobalPresence />
          <ContactSection preview={true} />
        </div>
      </div>

      <Footer />
    </PageTransition>
    </>
  );
}