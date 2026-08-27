"use client";

import { Building2, Lightbulb, Ship, Landmark } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/ground-control/154.webp"; 
const outdoorImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Lighting Suppliers in Abu Dhabi | Credence Lighting",
  description: "Credence Lighting is a premier lighting supplier and design firm serving Abu Dhabi and Al Ain. We provide bespoke architectural, commercial, and hospitality lighting solutions."
};


const faqs = [
  { id: "ad1", question: "Do you supply lighting for government and commercial projects in Abu Dhabi?", answer: "Yes, we regularly provide services to main contractors and government entities in Abu Dhabi as trusted lighting suppliers. We deliver ESTIDAMA-compliant lighting for commercial buildings, public spaces, and infrastructure projects." },
  { id: "ad2", question: "What is ESTIDAMA and how does your lighting comply?", answer: "ESTIDAMA is Abu Dhabi's sustainability framework. We ensure our LED fixtures meet strict luminous efficacy standards (lumens per watt) and integrate with smart controls to fulfill the Pearl Rating System requirements for energy efficiency." },
  { id: "ad3", question: "Can you deliver lighting fixtures directly to sites in Al Ain or Ruwais?", answer: "Absolutely. Our logistics network covers the entirety of the Abu Dhabi emirate, ensuring safe and timely delivery to construction sites in Abu Dhabi city, Al Ain, and the Western Region." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.credencelighting.com/#localbusiness-abu-dhabi",
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization"
      },
      "name": "Credence Lighting, Abu Dhabi",
      "url": "https://www.credencelighting.com/lighting-suppliers-abu-dhabi",
      "areaServed": {
        "@type": "Place",
        "name": "Abu Dhabi"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.4539",
        "longitude": "54.3773"
      },
      "description": "Premium architectural and commercial lighting design, supply, and installation serving Abu Dhabi."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Abu Dhabi Lighting", "item": "https://www.credencelighting.com/lighting-suppliers-abu-dhabi" }
      ]
    }
  ]
};

const hero = {
  location: "Abu Dhabi",
  title: "Lighting Suppliers in",
  titleItalic: "Abu Dhabi",
  description: "Delivering world-class lighting design and supply for Abu Dhabi's growing commercial, hospitality, and cultural sectors."
};

const services = [
  { icon: Landmark, title: "Cultural & Museum Lighting", description: "Precision framing projectors and high-CRI lighting for delicate artifacts and expansive exhibitions across Abu Dhabi's cultural districts." },
  { icon: Building2, title: "Commercial LED Solutions", description: "ESTIDAMA-compliant LED systems and smart controls tailored for modern corporate headquarters." },
  { icon: Ship, title: "Coastal & Marine Lighting", description: "Corrosion-resistant, 316L stainless steel fixtures engineered specifically for Abu Dhabi's harsh coastal developments." },
  { icon: Lightbulb, title: "Hospitality Lighting", description: "Bespoke decorative and architectural lighting for high-end resorts and hotels in the capital." }
];

const contentBlocks = [
  { type: "heading2", content: "Expert Lighting Solutions for Abu Dhabi's Vision 2030" },
  { type: "paragraph", content: "Abu Dhabi is characterized by its commitment to sustainability, cultural heritage, and modern infrastructure. Lighting projects here require a deep understanding of ESTIDAMA building regulations and a focus on long-term reliability in challenging coastal environments." },
  { type: "paragraph", content: "As leading lighting suppliers in Abu Dhabi, Credence Lighting delivers robust, highly efficient lighting systems that align with the capital's ambitious development goals. We partner with architects and contractors to ensure every fixture meets the highest standards." },
  { type: "list", items: [
    "Sustainability Focus: High-efficacy LED chips exceeding local Abu Dhabi energy codes.",
    "Durability: Specialized coatings and marine-grade materials for coastal proximity.",
    "Control Integration: KNX and DALI systems for centralized building management."
  ]}
];

const relatedProjects = [
  {
    title: "Commercial Facade Lighting",
    description: "Dynamic facade lighting and human-centric office illumination.",
    image: indoorImg,
    link: "/projects"
  },
  {
    title: "Coastal Landscape Illumination",
    description: "Landscape and pathway lighting designed to withstand high salinity conditions.",
    image: outdoorImg,
    link: "/projects"
  }
];

export default function LocationAbuDhabi() {
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
