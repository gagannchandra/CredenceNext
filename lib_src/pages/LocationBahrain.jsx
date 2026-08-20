"use client";

import { Waves, Building2, HardHat, Lightbulb } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/Smarvy Spot/150.webp"; 
const outdoorImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Lighting Companies in Bahrain | Credence Lighting",
  description: "Specialized architectural lighting supplier for Bahrain. We provide complete LED lighting solutions for commercial towers, luxury hospitality, and high-end residential projects."
};


const faqs = [
  { id: "bh1", question: "Do you supply lighting to Bahrain from the UAE?", answer: "Yes, we regularly export and supply lighting packages to Bahrain. Thanks to the GCC customs union and our established logistics providers, we ensure rapid and cost-effective delivery via the King Fahd Causeway." },
  { id: "bh2", question: "Are your fixtures suitable for Bahrain's high humidity?", answer: "Absolutely. Bahrain's island geography means exterior lighting must be highly resistant to humidity and salt. As an experienced lighting supplier, we specify IP66/IP67 rated fixtures with anti-corrosion marine-grade treatments specifically for these environments." },
  { id: "bh3", question: "Can you assist with the lighting design for my project in Manama?", answer: "Yes, our in-house design team provides comprehensive lighting calculations (DIALux), 3D renderings, and AutoCAD layouts for projects located anywhere in Bahrain." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.credencelighting.com/#localbusiness-bahrain",
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization"
      },
      "name": "Credence Lighting — Bahrain",
      "url": "https://www.credencelighting.com/lighting-companies-bahrain",
      "areaServed": {
        "@type": "Place",
        "name": "Bahrain"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.0667",
        "longitude": "50.5577"
      },
      "description": "Premium architectural and commercial lighting design, supply, and installation serving Bahrain."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Bahrain Lighting", "item": "https://www.credencelighting.com/lighting-companies-bahrain" }
      ]
    }
  ]
};

const hero = {
  location: "Kingdom of Bahrain",
  title: "Lighting Companies in",
  titleItalic: "Bahrain",
  description: "Delivering world-class LED lighting design and robust, marine-grade fixtures for Bahrain's commercial, residential, and hospitality sectors."
};

const services = [
  { icon: Waves, title: "Marine-Grade Exteriors", description: "Corrosion-resistant landscape and facade lighting built for island environments and extreme humidity." },
  { icon: Building2, title: "Commercial Infrastructure", description: "Energy-efficient interior lighting and smart controls for Manama's corporate towers and retail malls." },
  { icon: Lightbulb, title: "Hospitality & Retail", description: "High-CRI architectural and decorative lighting to elevate the guest and shopper experience." },
  { icon: HardHat, title: "Contractor Support", description: "Seamless cross-border logistics and dedicated technical support for Bahraini main contractors." }
];

const contentBlocks = [
  { type: "heading2", content: "Lighting Bahrain's Skyline" },
  { type: "paragraph", content: "Bahrain’s unique blend of deep historical roots and modern urban development requires a nuanced approach to lighting. From illuminating heritage sites in Muharraq to providing cutting-edge dynamic lighting for skyscrapers in Bahrain Bay, our solutions are tailored to the specific climatic and aesthetic demands of the Kingdom." },
  { type: "paragraph", content: "As one of the trusted lighting companies serving Bahrain, Credence Lighting partners with local developers to ensure that every fixture delivered meets rigorous quality standards, whether it's a bespoke chandelier for a luxury hotel or highly efficient LED downlights for a commercial office." },
  { type: "list", items: [
    "Efficient Logistics: Fast GCC ground transport directly to site via the causeway.",
    "Custom Manufacturing: Bespoke fixtures to meet unique architectural requirements.",
    "Comprehensive Support: Remote programming and on-site commissioning services."
  ]}
];

const relatedProjects = [
  {
    title: "Luxury Island Villa",
    description: "Complete interior and landscape lighting utilizing trimless, glare-free LED fixtures.",
    image: indoorImg,
    link: "/projects"
  },
  {
    title: "Manama Retail Mall",
    description: "High-contrast track lighting and dynamic facade illumination.",
    image: outdoorImg,
    link: "/projects"
  }
];

export default function LocationBahrain() {
  return (
    <LocationTemplate 
      seo={seo}
      schema={schema}
      hero={hero}
      services={services}
      contentBlocks={contentBlocks}
      relatedProjects={relatedProjects}
      faqs={faqs}
    />
  );
}
