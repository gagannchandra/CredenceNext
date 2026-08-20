"use client";

import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/home/AboutSection";
import SEO from "@/components/seo/SEO";

import PageTransition from "@/components/ui/motion/PageTransition";

export default function About() {

  return (
    <PageTransition>
      <SEO 
        title="About Credence Lighting | Premium Lighting Experts Dubai" 
        description="10+ years of experience delivering premium lighting solutions. Aesthetics meets functionality." 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.credencelighting.com/#organization",
            "name": "Credence Lighting LLC",
            "url": "https://www.credencelighting.com",
            "logo": "https://www.credencelighting.com/logo.svg",
            "description": "Credence Lighting is a premium lighting company in Dubai providing architectural, commercial, and hospitality lighting design, supply, and installation across the UAE and GCC.",
            "foundingDate": "2014",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 10
            },
            "telephone": "+971564965660",
            "email": "info@credencelighting.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971564965660",
              "contactType": "customer service",
              "email": "info@credencelighting.com",
              "areaServed": ["AE", "SA", "BH"],
              "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
              "https://www.instagram.com/credencelighting/",
              "https://www.linkedin.com/company/credence-lighting-llc/",
              "https://maps.app.goo.gl/ec2HMCDNXYtYviV7A",
              "https://www.facebook.com/credencelighting",
              "https://www.youtube.com/@credencelighting"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.credencelighting.com/about" }
            ]
          }
        ]}
      />
      <main className="relative bg-transparent pt-10 pb-20 overflow-hidden">
        {/* SHARED BACKGROUND GLOW */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-gold/10 blur-[60px] md:blur-[200px] pointer-events-none" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
        
        {/* SHARED GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative z-10">
          <AboutSection asPage />
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
