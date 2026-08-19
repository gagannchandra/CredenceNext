"use client";

import { Sun, Warehouse, Zap, HardHat } from "lucide-react";
import LocationTemplate from "@/components/templates/LocationTemplate";
const indoorImg = "/images/ground-control/154.webp"; 
const outdoorImg = "/images/mytown/141.webp"; 

const seo = {
  title: "Lighting Solutions in Ajman | Credence Lighting",
  description: "Cost-effective, high-quality lighting solutions for Ajman, UAQ, and the Northern Emirates. We supply residential, commercial, and industrial lighting projects."
};


const faqs = [
  { id: "aj1", question: "Do you offer lighting retrofits for existing buildings in Ajman?", answer: "Yes, we specialize in LED retrofits for older commercial and residential buildings in Ajman, helping property owners drastically reduce their electricity bills and maintenance costs." },
  { id: "aj2", question: "What are the most cost-effective lighting solutions for large warehouses?", answer: "For large storage facilities, we recommend LED Linear Trunking Systems. They are incredibly fast to install, provide uniform light distribution across wide aisles, and offer the best return on investment (ROI) compared to traditional high-bays." },
  { id: "aj3", question: "How quickly can you deliver fixtures to Ajman?", answer: "We maintain local stock in the UAE for fast-moving items, allowing for delivery to Ajman and the Northern Emirates within 24 to 48 hours for standard architectural and commercial fixtures." }
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
      "url": "https://credencelighting.com/lighting-solutions-ajman",
      "areaServed": {
        "@type": "City",
        "name": "Ajman"
      },
      "description": "Cost-effective architectural and commercial lighting for Ajman and the Northern Emirates."
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
  location: "Ajman & Northern Emirates",
  title: "Lighting Solutions in",
  titleItalic: "Ajman",
  description: "High-value, reliable LED lighting solutions supporting the rapid urban and industrial expansion across Ajman and the Northern Emirates."
};

const services = [
  { icon: Zap, title: "LED Retrofit & Upgrades", description: "Upgrading legacy fluorescent and HID systems to energy-saving LED technology for rapid ROI." },
  { icon: Warehouse, title: "Industrial LED Lighting", description: "Cost-effective linear and high-bay lighting engineered for expanding industrial free zones and storage facilities." },
  { icon: Sun, title: "Residential Illumination", description: "Durable, high-quality architectural lighting for mid-to-high rise residential towers and communities." },
  { icon: HardHat, title: "Contractor Support", description: "Dedicated technical support, rapid UAE delivery, and competitive pricing models designed for main contractors." }
];

const contentBlocks = [
  { type: "heading2", content: "Supporting the Northern Emirates' Growth" },
  { type: "paragraph", content: "As Ajman and the surrounding emirates continue to expand their residential and industrial footprint, developers require a lighting company that balances strict budgets with long-term reliability. We bridge this gap by offering value-engineered alternatives that do not compromise on light quality, warranties, or safety." },
  { type: "paragraph", content: "Whether you need robust LED solutions for a massive warehouse in Ajman Free Zone, or architectural lighting for new residential communities, our team ensures fast delivery and exceptional performance." },
  { type: "callout", content: "Our value-engineering team can review your existing lighting design and propose alternative specifications that meet the exact same photometric requirements at a significantly lower capital cost." }
];

const relatedProjects = [
  {
    title: "Residential Tower Lighting",
    description: "Complete interior and emergency lighting supply for a 30-story residential development.",
    image: indoorImg,
    link: "/projects"
  },
  {
    title: "Warehouse Lighting Systems",
    description: "Rapid deployment of linear trunking systems for bulk storage and logistics centers.",
    image: outdoorImg,
    link: "/projects"
  }
];

export default function LocationAjman() {
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
