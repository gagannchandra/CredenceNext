"use client";

import { Mountain, Hotel, Building2, Trees } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/mytown/141.webp"; 
const outdoorImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Lighting Companies in Ras Al Khaimah | Credence Lighting",
  description: "Credence Lighting is a trusted lighting company in Ras Al Khaimah. We supply IP-rated landscape, facade, and luxury hotel lighting for RAK's booming tourism sector."
};


const faqs = [
  { id: "rak1", question: "Do you provide lighting for coastal resorts and beach hotels in RAK?", answer: "Yes, Ras Al Khaimah's booming coastal tourism requires lighting that can withstand high humidity and salt spray. As specialized lighting suppliers in Ras Al Khaimah, we supply marine-grade, 316L stainless steel and anodized aluminum fixtures specifically designed for beachfront environments." },
  { id: "rak2", question: "Can you design lighting that minimizes light pollution for mountain resorts?", answer: "Absolutely. For eco-tourism projects in the Hajar Mountains, we employ 'Dark Sky' compliant lighting strategies. We use heavily shielded, low-glare fixtures that illuminate pathways safely without obscuring the natural starlight." },
  { id: "rak3", question: "What smart controls do you recommend for large resorts?", answer: "We recommend a hybrid approach: DALI for precise indoor control of ballrooms and lobbies, combined with Casambi wireless mesh networks for outdoor landscape lighting, reducing the need for extensive trenching and cabling." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.credencelighting.com/#localbusiness-rak",
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization"
      },
      "name": "Credence Lighting — Ras Al Khaimah",
      "url": "https://www.credencelighting.com/lighting-solutions-rak",
      "areaServed": {
        "@type": "Place",
        "name": "Ras Al Khaimah"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.6741",
        "longitude": "55.9804"
      },
      "description": "Premium architectural and commercial lighting design, supply, and installation serving Ras Al Khaimah."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Ras Al Khaimah Lighting", "item": "https://www.credencelighting.com/lighting-solutions-rak" }
      ]
    }
  ]
};

const hero = {
  location: "Ras Al Khaimah (RAK)",
  title: "Lighting Companies in",
  titleItalic: "Ras Al Khaimah",
  description: "Durable, Dark-Sky compliant, and luxurious LED lighting solutions for Ras Al Khaimah's expanding resorts, hotels, and mountain retreats."
};

const services = [
  { icon: Hotel, title: "Resort & Hotel Lighting", description: "Bespoke decorative and architectural lighting for 5-star beachfront properties and luxury retreats." },
  { icon: Trees, title: "Coastal Landscape Illumination", description: "Marine-grade IP67/68 fixtures that resist salt, high humidity, and extreme UAE summer heat." },
  { icon: Mountain, title: "Eco-Tourism Lighting", description: "Dark Sky compliant designs that protect local wildlife and preserve night sky visibility in mountain regions." },
  { icon: Building2, title: "Entertainment & Facade", description: "Dynamic, programmable DMX lighting for large-scale entertainment venues and stunning resort facades." }
];

const contentBlocks = [
  { type: "heading2", content: "Preserving Nature While Elevating Luxury" },
  { type: "paragraph", content: "Ras Al Khaimah represents a unique intersection of luxury hospitality and rugged natural beauty. Lighting projects here must respect the environment while delivering a 5-star guest experience. As a premier lighting company in Ras Al Khaimah, our approach focuses on low-impact, highly durable illumination." },
  { type: "paragraph", content: "We partner with developers and architects to use specialized optics that push light exactly where it is needed—onto pathways, facades, and dining areas—while ensuring zero upward light spill to protect the natural habitat." },
  { type: "list", items: [
    "Corrosion Resistance: All outdoor fixtures undergo 1,000+ hour salt-spray testing.",
    "Wildlife Sensitivity: Amber and red-spectrum LEDs available for turtle-nesting beaches.",
    "Integrated Smart Poles: Combining lighting, WiFi, and security cameras into single, aesthetic landscape poles."
  ]}
];

const relatedProjects = [
  {
    title: "Eco-Resort Illumination",
    description: "Low-glare, Dark Sky compliant pathway and landscape lighting for a mountain retreat.",
    image: outdoorImg,
    link: "/projects"
  },
  {
    title: "Beachfront Hotel Lighting",
    description: "Marine-grade facade lighting and warm-dimming restaurant interiors for a coastal resort.",
    image: indoorImg,
    link: "/projects"
  }
];

export default function LocationRAK() {
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
