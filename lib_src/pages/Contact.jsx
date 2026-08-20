"use client";

import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import SEO from "@/components/seo/SEO";

import PageTransition from "@/components/ui/motion/PageTransition";

export default function Contact() {

  return (
    <PageTransition>
      <SEO 
        title="Contact Credence Lighting | Lighting Experts Dubai" 
        description="Get in touch with our lighting specialists in Dubai for project inquiries and quotations." 
        schema={[{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.credencelighting.com/#organization",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9788",
            "longitude": "55.1764"
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
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "$$$$",
          "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE", "Saudi Arabia", "Bahrain"],
          "sameAs": [
            "https://www.instagram.com/credencelighting/",
            "https://www.linkedin.com/company/credence-lighting-llc/",
            "https://maps.app.goo.gl/ec2HMCDNXYtYviV7A",
            "https://www.facebook.com/credencelighting",
            "https://www.youtube.com/@credencelighting"
          ]
        }, {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.credencelighting.com/contact" }
          ]
        }]}
      />
      <div className="bg-transparent pt-10">
        <ContactSection asPage />
      </div>
      <Footer />
    </PageTransition>
  );
}
