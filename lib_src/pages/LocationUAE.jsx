"use client";

import { Map, Truck, Lightbulb, Settings } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/Funtura/134.webp"; 
const outdoorImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Top Lighting Companies in UAE | Credence Lighting",
  description: "Credence Lighting is one of the premier lighting companies in the UAE. We provide comprehensive LED lighting design, supply, and integration across all emirates."
};


const faqs = [
  { id: "uae1", question: "Which emirates do you provide lighting services for?", answer: "We supply and execute projects across all seven emirates of the UAE: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah." },
  { id: "uae2", question: "Are you a direct LED light supplier in the UAE?", answer: "Yes, we are a leading LED light supplier in the UAE. We maintain a significant inventory of architectural downlights, LED strips, drivers, and control systems at our central UAE warehouse, allowing us to support fast-track projects and immediate mock-up requests." },
  { id: "uae3", question: "Do you supply lighting for large commercial projects?", answer: "Absolutely. As one of the top lighting companies in Dubai and the wider UAE, we have the capacity and brand partnerships to supply extensive commercial, hospitality, and retail developments." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.credencelighting.com/#localbusiness-uae",
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization"
      },
      "name": "Credence Lighting, United Arab Emirates",
      "url": "https://www.credencelighting.com/lighting-companies-uae",
      "areaServed": {
        "@type": "Place",
        "name": "United Arab Emirates"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "description": "Premium architectural and commercial lighting design, supply, and installation serving United Arab Emirates."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "United Arab Emirates Lighting", "item": "https://www.credencelighting.com/lighting-companies-uae" }
      ]
    }
  ]
};

const hero = {
  location: "United Arab Emirates",
  title: "Top Lighting Companies in",
  titleItalic: "the UAE",
  description: "A trusted LED lighting supplier and design partner for architects, contractors, and developers driving innovation across all seven emirates."
};

const services = [
  { icon: Map, title: "UAE-Wide Reach", description: "Dedicated sales and technical support teams serving projects from Abu Dhabi to Fujairah." },
  { icon: Truck, title: "Local LED Stock", description: "Fast-track delivery for standard architectural fixtures and control components directly from our UAE inventory." },
  { icon: Lightbulb, title: "Lighting Design", description: "In-house DIALux planning, 3D rendering, and local regulatory compliance (ESTIDAMA, Dubai Municipality)." },
  { icon: Settings, title: "Installation Support", description: "On-site aiming, focusing, and programming of smart lighting networks by our technical teams." }
];

const contentBlocks = [
  { type: "heading2", content: "A Decade of Excellence in the UAE" },
  { type: "paragraph", content: "The United Arab Emirates sets global benchmarks for architecture and infrastructure. To succeed here, a lighting supplier must deliver unparalleled quality, adapt to rapidly changing project timelines, and deeply understand the nuances of local regulations. As one of the top lighting companies in the UAE, Credence Lighting has spent over a decade building a reputation for reliability." },
  { type: "paragraph", content: "Whether you need a specialized LED light supplier in Dubai for a luxury villa, or comprehensive facade lighting for a massive commercial tower in Abu Dhabi, we deliver end-to-end solutions that meet the highest standards of the region." },
  { type: "list", items: [
    "End-to-End Service: From concept design to post-installation maintenance and programming.",
    "Global Brand Portfolio: Authorized suppliers of top-tier European and Asian lighting manufacturers.",
    "Custom Solutions: Bespoke fixture manufacturing tailored to unique Middle Eastern architectural details."
  ]}
];

const relatedProjects = [
  {
    title: "Public Realm Lighting",
    description: "Public realm and highway lighting engineered to withstand the extreme UAE summer climate.",
    image: outdoorImg,
    link: "/projects"
  },
  {
    title: "Corporate Headquarters",
    description: "Multi-floor smart lighting rollout for a major UAE banking institution.",
    image: indoorImg,
    link: "/projects"
  }
];

export default function LocationUAE() {
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
