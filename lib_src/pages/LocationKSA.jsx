"use client";

import { Building, Globe, Zap, ShieldCheck } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/mytown/141.webp"; 
const outdoorImg = "/images/ground-control/154.webp"; 

const seo = {
  title: "Lighting Companies in Saudi Arabia (KSA) | Credence Lighting",
  description: "Specialist lighting supplier supporting Vision 2030 projects across Saudi Arabia (KSA). We deliver architectural, commercial, and hospitality LED lighting to Riyadh, Jeddah, and NEOM."
};


const faqs = [
  { id: "ksa1", question: "Do you supply lighting for gigaprojects like NEOM and Red Sea Global?", answer: "Yes. We have the technical capability and industry connections to supply highly specialized, sustainable lighting systems that meet the rigorous environmental and dark-sky standards demanded by KSA's Vision 2030 gigaprojects." },
  { id: "ksa2", question: "Do you handle custom lighting for mosques and cultural centers?", answer: "Absolutely. We supply bespoke chandeliers, architectural floodlighting for facades, and precise interior illumination tailored to the cultural and architectural significance of Saudi heritage projects." },
  { id: "ksa3", question: "Do you have local representation in Riyadh or Jeddah?", answer: "We support the Saudi market through our dedicated export division, frequent on-site engineering visits, and strong relationships with local KSA contractors to ensure seamless installation and commissioning." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.credencelighting.com/#localbusiness-ksa",
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization"
      },
      "name": "Credence Lighting, Saudi Arabia",
      "url": "https://www.credencelighting.com/lighting-companies-saudi-arabia",
      "areaServed": {
        "@type": "Place",
        "name": "Saudi Arabia"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.7136",
        "longitude": "46.6753"
      },
      "description": "Premium architectural and commercial lighting design, supply, and installation serving Saudi Arabia."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Saudi Arabia Lighting", "item": "https://www.credencelighting.com/lighting-companies-saudi-arabia" }
      ]
    }
  ]
};

const hero = {
  location: "Saudi Arabia (KSA)",
  title: "Illuminating",
  titleItalic: "Vision 2030",
  description: "Advanced, sustainable, and SASO-compliant LED lighting solutions powering Saudi Arabia's architectural renaissance from Riyadh to the Red Sea."
};

const services = [
  { icon: Globe, title: "Gigaproject Support", description: "Bespoke lighting systems engineered for massive-scale developments and eco-tourism destinations." },
  { icon: ShieldCheck, title: "SASO Compliance", description: "Strict adherence to Saudi energy efficiency standards and SABER certification processes." },
  { icon: Building, title: "Commercial Towers", description: "Integrated smart lighting for the rapidly expanding corporate and financial hubs in Riyadh." },
  { icon: Zap, title: "Extreme Climate Resiliency", description: "LED fixtures designed to withstand the intense heat and dust of the Arabian desert." }
];

const contentBlocks = [
  { type: "heading2", content: "Supporting KSA's Architectural Transformation" },
  { type: "paragraph", content: "Saudi Arabia is undergoing the most ambitious architectural transformation in history. The sheer scale of development requires lighting companies and suppliers who can deliver not just fixtures, but comprehensive engineering solutions." },
  { type: "paragraph", content: "From ensuring zero light pollution in remote eco-resorts to synchronizing dynamic media facades in Riyadh's financial district, Credence Lighting brings extensive global expertise to the Kingdom." },
  { type: "list", items: [
    "Logistics Excellence: Streamlined cross-border shipping and export documentation for Saudi Arabia.",
    "Smart City Integration: IoT-ready lighting poles for future-proof urban developments.",
    "Sustainability First: Aligning with the Saudi Green Initiative through ultra-efficient LED technology."
  ]}
];

const relatedProjects = [
  {
    title: "Riyadh Financial District",
    description: "Human-centric lighting for modern corporate workspaces and banking headquarters.",
    image: indoorImg,
    link: "/projects"
  },
  {
    title: "Red Sea Hospitality",
    description: "Marine-grade, dark-sky compliant resort illumination for luxury tourism.",
    image: outdoorImg,
    link: "/projects"
  }
];

export default function LocationKSA() {
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
