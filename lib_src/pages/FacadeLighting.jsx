"use client";

import { Building, ShieldCheck, Settings, Sun } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";
const facadeImg1 = "/images/facade/1.webp"; 
const facadeImg2 = "/images/facade/2.webp"; 

const seo = {
  title: "Building Facade Lighting | Credence Lighting",
  description: "Dynamic and architectural facade lighting solutions that transform buildings into iconic landmarks across the UAE and Saudi Arabia."
};

const faqs = [
  { id: "facade1", question: "Do you offer programmable media facades?", answer: "Yes, we specialize in high-resolution LED pixel nodes and linear media tubes that can turn any building facade into a dynamic video display or programmable light show." },
  { id: "facade2", question: "Are your facade fixtures weather-resistant?", answer: "Absolutely. All our exterior facade lighting products are rated IP66 or IP67, built with marine-grade materials to withstand extreme temperatures, sand, and humidity in the Middle East." },
  { id: "facade3", question: "Can facade lighting be energy efficient?", answer: "We utilize the latest high-efficacy LED technology paired with intelligent control systems. By programming schedules and dimming levels, we ensure your building stands out while minimizing energy consumption." },
  { id: "facade4", question: "How do you handle maintenance for high-rise facades?", answer: "We design with maintenance in mind. We use fixtures with long lifespans (up to 100,000 hours) and modular designs. We also offer DALI and DMX systems with remote monitoring to detect faults before they become visible issues." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Architectural Facade Lighting Solutions",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "GCC"],
      "description": "Bespoke exterior facade lighting design, supply, and installation across Dubai and the GCC."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Sectors", "item": "https://www.credencelighting.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Exterior Facade Lighting" }
      ]
    }
  ]
};

const hero = {
  badge: "Facade Lighting",
  title: "Transforming",
  titleItalic: "Skylines",
  description: "Architectural and dynamic media facade illumination designed to make your building a landmark of the night."
};

const benefits = [
  { icon: Building, title: "Architectural Focus", description: "Precision optics that graze and highlight structural details without spilling into the night sky." },
  { icon: Settings, title: "Dynamic Controls", description: "DMX and SPI control systems for synchronized, building-wide color and animation effects." },
  { icon: ShieldCheck, title: "Extreme Durability", description: "IP66/IP67 rated fixtures built specifically to survive the harsh Middle Eastern climate." },
  { icon: Sun, title: "Energy Efficient", description: "High-efficacy LEDs paired with smart scheduling to reduce operational costs." }
];

const contentBlocks = [
  { type: "heading2", content: "Making Your Building Iconic" },
  { type: "paragraph", content: "A building's facade is its public face, and at night, lighting is the only way to express its identity. We design and supply facade lighting systems that range from subtle, elegant architectural grazing to high-energy, full-motion media displays. Our goal is to enhance the architect's vision while ensuring the system is robust enough to last decades." },
  { type: "list", items: [
    "Wall Washers & Grazers: High-power linear fixtures designed to smoothly illuminate tall surfaces and textures.",
    "Media Pixels & Tubes: Direct-view LED nodes that combine to create low-resolution or high-resolution video screens across the building exterior.",
    "Floodlights & Projectors: Precision-aimed fixtures for highlighting crowns, spires, and specific architectural features.",
    "Control Infrastructure: Complete fiber-optic and DMX network design to ensure flawless communication across massive structures."
  ]},
  { type: "callout", content: "Our engineering team provides comprehensive mock-ups and photometric calculations to guarantee that the final result perfectly matches the initial rendering." }
];

const relatedProducts = [
  {
    title: "Linear Wall Washers",
    description: "Powerful illumination for flat facades and textured walls.",
    image: facadeImg1,
    link: "/products/facade" 
  },
  {
    title: "Media Pixel Nodes",
    description: "Direct-view addressable LEDs for dynamic media facades.",
    image: facadeImg2,
    link: "/products/facade"
  },
  {
    title: "Exterior Floodlights",
    description: "Precision projectors for highlighting architectural crowns and features.",
    image: facadeImg1,
    link: "/products/facade"
  },
  {
    title: "Inground Uplights",
    description: "Robust IP67 drive-over lights for illuminating from the base.",
    image: facadeImg2,
    link: "/products/facade"
  },
  {
    title: "Facade Controllers",
    description: "DMX and SPI master controllers for building-wide synchronization.",
    image: facadeImg1,
    link: "/products/facade"
  }
];

export default function FacadeLighting() {
  return (
    <IndustryTemplate 
      seo={seo}
      schema={schema}
      hero={hero}
      benefits={benefits}
      contentBlocks={contentBlocks}
      relatedProducts={relatedProducts}
      faqs={faqs}
    />
  );
}
