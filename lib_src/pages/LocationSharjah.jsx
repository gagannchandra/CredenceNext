"use client";

import { Building2, Factory, Shield, Hammer } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/Funtura/134.webp"; 
const outdoorImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Lighting Companies in Sharjah | Credence Lighting",
  description: "Credence Lighting is a leading lighting supplier for Sharjah and the Northern Emirates. Specializing in heavy-duty industrial, warehousing, and commercial lighting solutions."
};


const faqs = [
  { id: "shj1", question: "Do you supply high-bay lighting for warehouses in Sharjah Industrial Area?", answer: "Yes, we specialize in high-output, durable high-bay LED fixtures designed specifically for logistics centers, factories, and warehouses across Sharjah Industrial Area and SAIF Zone." },
  { id: "shj2", question: "Can you provide explosion-proof lighting for manufacturing facilities?", answer: "Absolutely. For hazardous environments, we supply certified explosion-proof (ATEX) lighting that guarantees safety without compromising on illumination quality." },
  { id: "shj3", question: "Are your lighting products approved by SEWA?", answer: "Our lighting products comply with the strict standards set by the Sharjah Electricity, Water and Gas Authority (SEWA), ensuring high power factors and minimal harmonic distortion to the grid." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
          "@id": "https://credencelighting.com/#organization",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9788",
            "longitude": "55.1764"
          },
      "name": "Credence Lighting",
      "url": "https://credencelighting.com/lighting-companies-sharjah",
      "areaServed": {
        "@type": "City",
        "name": "Sharjah"
      },
      "description": "Industrial and commercial lighting specialists serving Sharjah and SAIF Zone."
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const hero = {
  location: "Sharjah",
  title: "Lighting Companies in",
  titleItalic: "Sharjah",
  description: "Engineered LED lighting solutions built to withstand the rigorous demands of Sharjah's bustling industrial zones and commercial hubs."
};

const services = [
  { icon: Factory, title: "Industrial LED Lighting", description: "High-bay UFO LEDs and linear trunking systems optimized for tall racking and heavy machinery in SAIF Zone." },
  { icon: Shield, title: "Hazardous Area Lighting", description: "ATEX-certified fixtures designed for safety in oil & gas, chemical, and specialized manufacturing facilities." },
  { icon: Building2, title: "Commercial LED Solutions", description: "Energy-efficient panel lights and architectural downlights for corporate offices and retail centers across Sharjah." },
  { icon: Hammer, title: "Retrofit & Modernization", description: "Exterior lighting retrofits that modernize older commercial buildings along major highways." }
];

const contentBlocks = [
  { type: "heading2", content: "Powering the Industrial Heart of the UAE" },
  { type: "paragraph", content: "Sharjah is home to some of the largest industrial and manufacturing zones in the Middle East. Lighting in these environments is about safety, productivity, and extreme reliability. Dust, heat, and vibration quickly destroy standard fixtures. As a trusted lighting supplier in Sharjah, Credence Lighting delivers industrial-grade luminaires that feature die-cast aluminum heat sinks, IK10 impact resistance, and IP66 dust/water protection." },
  { type: "paragraph", content: "We partner with contractors and facility managers to ensure every lighting upgrade or new build meets SEWA regulations while drastically reducing energy consumption." },
  { type: "list", items: [
    "SEWA Compliance: Ensuring electrical safety and grid harmony for large-scale operations.",
    "Thermal Management: Fixtures rated for ambient temperatures up to 55°C.",
    "Smart Sensors: Microwave motion sensors for warehouse aisles to save energy when forklifts are absent."
  ]}
];

const relatedProjects = [
  {
    title: "Logistics Center Illumination",
    description: "Intelligent high-bay lighting with aisle-specific occupancy sensing for a major Sharjah warehouse.",
    image: indoorImg,
    link: "/projects"
  },
  {
    title: "Commercial Exterior Retrofit",
    description: "High-efficiency facade and parking lot illumination for a commercial complex.",
    image: outdoorImg,
    link: "/projects"
  }
];

export default function LocationSharjah() {
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
