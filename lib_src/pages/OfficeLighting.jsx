"use client";

import { Building, Eye, Zap, Settings } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";

const seo = {
  title: "Commercial Office Lighting Solutions | Credence",
  description: "Boost productivity and wellness with our commercial office lighting solutions. We provide Human Centric Lighting (HCL) design and supply for modern workspaces."
};

const faqs = [
  { id: "ol1", question: "What is Human Centric Lighting (HCL) in an office?", answer: "Human Centric Lighting involves using tunable white LEDs to mimic the natural progression of daylight. By providing cooler, brighter light in the morning for alertness and warmer, dimmer light in the late afternoon, HCL helps maintain employees' natural circadian rhythms, boosting productivity and well-being." },
  { id: "ol2", question: "What is the standard lux level for an open plan office?", answer: "According to global lighting standards, general open-plan office desks should have an illuminance of 500 lux. However, the surrounding areas like corridors can be kept around 200-300 lux to create visual hierarchy and save energy." },
  { id: "ol3", question: "How do you prevent glare on computer screens?", answer: "We utilize fixtures with a UGR (Unified Glare Rating) of less than 19. These fixtures feature specialized micro-prismatic diffusers or deep reflectors that ensure the light is directed downwards without reflecting off monitors or causing eye strain." },
  { id: "ol4", question: "Can office lighting help achieve LEED or WELL certification?", answer: "Yes. Our high-efficiency LED solutions, combined with daylight harvesting sensors and HCL strategies, contribute significantly to points under both the LEED (Energy & Atmosphere) and WELL (Light Concept) building standards." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Corporate Office Lighting Solutions",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "GCC"],
      "description": "Bespoke commercial office lighting design, supply, and installation across Dubai and the GCC."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.credencelighting.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Commercial Office Lighting" }
      ]
    }
  ]
};

const hero = {
  badge: "Commercial Lighting",
  title: "Human-Centric Lighting for Modern",
  titleItalic: "Workspaces",
  description: "Ergonomic, energy-efficient, and wellness-driven lighting solutions designed for corporate offices and commercial headquarters."
};

const benefits = [
  { icon: Eye, title: "Glare-Free Visual Comfort", description: "Visual comfort is paramount. We supply fixtures that eliminate screen glare (UGR < 19) and prevent eye strain." },
  { icon: Zap, title: "Energy & Sensor Optimization", description: "Ultra-efficient LEDs paired with occupancy and daylight sensors maximize energy savings." },
  { icon: Building, title: "Architectural Aesthetics", description: "Sleek linear profiles and acoustic lighting that complement modern, exposed-ceiling office designs." },
  { icon: Settings, title: "Smart Control & DALI", description: "DALI and Casambi networks for automated scheduling and individual desk-level control." }
];

const contentBlocks = [
  { type: "heading2", content: "Designing for Productivity and Well-being" },
  { type: "paragraph", content: "The modern office has evolved from rows of sterile cubicles into dynamic, interactive hubs. The lighting must evolve with it. Poor office lighting leads to fatigue, eye strain, and decreased productivity. At Credence Lighting, we design workspaces using Human Centric Lighting principles, prioritizing the biological and emotional needs of the employees." },
  { type: "list", items: [
    "Open Plan Desks: UGR<19 linear pendants delivering 500 lux on the work plane.",
    "Meeting Rooms: Flexible, dimmable solutions for presentations and video conferencing.",
    "Breakout Zones: Warmer, softer lighting to encourage relaxation and informal meetings.",
    "Corridors & Receptions: Striking architectural statements that reinforce corporate branding."
  ]},
  { type: "callout", content: "We assist corporate clients in achieving WELL and LEED certifications through advanced energy modeling and sustainable fixture selection." }
];

const officeLinearImg = "/images/indoor/office_linear.webp";
const officeAcousticImg = "/images/indoor/office_acoustic.webp";
const officeTunableImg = "/images/indoor/office_tunable.webp";
const officeTaskImg = "/images/indoor/office_task.webp";
const officeSensorImg = "/images/Home Automation/office_sensor.webp";
const officeDownlightImg = "/images/indoor/office_downlight.webp";

const relatedProducts = [
  {
    title: "Linear Suspended Profiles",
    description: "Sleek, low-glare linear lighting for open-plan desks.",
    image: officeLinearImg,
    link: "/products/indoor"
  },
  {
    title: "Acoustic Lighting",
    description: "Fixtures that illuminate while absorbing office noise.",
    image: officeAcousticImg,
    link: "/products/indoor"
  },
  {
    title: "Tunable White Panels",
    description: "HCL-ready LED panels that adjust color temperature throughout the day.",
    image: officeTunableImg,
    link: "/products/indoor"
  },
  {
    title: "Task Lighting",
    description: "Adjustable desk lamps for individualized workstation illumination.",
    image: officeTaskImg,
    link: "/products/indoor"
  },
  {
    title: "Occupancy Sensors",
    description: "Smart sensors that maximize energy savings in meeting rooms.",
    image: officeSensorImg,
    link: "/products/automation"
  },
  {
    title: "Recessed Downlights",
    description: "Low-UGR downlights for glare-free illumination in corridors and lobbies.",
    image: officeDownlightImg,
    link: "/products/indoor"
  }
];

export default function OfficeLighting() {
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
