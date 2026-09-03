"use client";

import { Home, Lightbulb, ShieldCheck, Sun } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";

const seo = {
  title: "Luxury Residential Lighting Design | Credence",
  description: "Transform your home with bespoke luxury residential lighting. We specialize in villa lighting design, smart home integration, and premium fixture supply."
};

const faqs = [
  { id: "rl1", question: "Do you provide lighting design for private villas?", answer: "Yes, we specialize in high-end residential and villa lighting design. Our team works closely with homeowners, architects, and interior designers to create custom lighting layouts that enhance the architectural beauty and comfort of luxury homes." },
  { id: "rl2", question: "Can you integrate the lighting with smart home systems?", answer: "Absolutely. We supply and commission smart lighting controls (such as Casambi, DALI, and KNX) that seamlessly integrate with major smart home ecosystems, allowing you to control scenes, dimming, and scheduling from your smartphone or wall panels." },
  { id: "rl3", question: "What is the best lighting for a villa's landscape?", answer: "For landscape lighting, we recommend IP65/IP67 rated fixtures that are highly durable against the UAE's heat and humidity. Using a combination of tree uplights, pathway bollards, and subtle wall grazers creates a beautiful, secure, and inviting outdoor environment at night." },
  { id: "rl4", question: "How do we hide the light fixtures in our living room ceiling?", answer: "We use trimless, deep-recessed downlights and hidden linear LED profiles in cove ceilings. This 'glare-free' approach ensures that the room is beautifully illuminated without the actual light source being visible to the eye." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Luxury Residential Lighting Solutions",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "GCC"],
      "description": "Bespoke residential lighting design, supply, and installation across Dubai and the GCC."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Sectors", "item": "https://www.credencelighting.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Residential Lighting" }
      ]
    }
  ]
};

const hero = {
  badge: "Residential Lighting",
  title: "Illuminating Bespoke",
  titleItalic: "Living Spaces",
  description: "Bespoke lighting design and premium fixture supply for exclusive villas and high-end residential projects."
};

const benefits = [
  { icon: Home, title: "Architectural Integration", description: "Trimless, invisible fixtures that blend seamlessly into the ceiling architecture." },
  { icon: Sun, title: "Circadian Wellness", description: "Dynamic tunable white systems that adjust to mimic natural daylight for improved well-being." },
  { icon: ShieldCheck, title: "Landscape & Outdoor", description: "Durable, IP-rated exterior lighting that enhances curb appeal and perimeter security." },
  { icon: Lightbulb, title: "Smart Home Automation", description: "Intuitive wireless dimming and scene-setting integrated with your home automation." }
];

const contentBlocks = [
  { type: "heading2", content: "The Art of Villa Lighting" },
  { type: "paragraph", content: "A luxury home requires more than just standard illumination; it requires a layered lighting strategy. By balancing ambient light, task lighting, and decorative accent lighting, we create environments that feel expansive during the day and intimately cozy at night. Our approach to residential lighting emphasizes visual comfort. Hiding the light source to eliminate glare while ensuring art, textures, and architectural details are perfectly highlighted." },
  { type: "list", items: [
    "Trimless Downlights: For a perfectly clean, minimalist ceiling.",
    "Linear Cove Lighting: For soft, indirect ambient illumination.",
    "Step & Pathway Lights: For safety and subtle navigation at night.",
    "Art Lighting: High-CRI spotlights to bring out the true colors of paintings and sculptures."
  ]},
  { type: "callout", content: "We offer end-to-end residential services, from the initial CAD lighting layout to the final aiming and commissioning of fixtures on-site." }
];

const resDownlightImg = "/images/indoor/res_downlight.webp";
const resLandscapeImg = "/images/outdoor/res_landscape.webp";
const resChandelierImg = "/images/indoor/res_chandelier.webp";
const resSmartImg = "/images/Home Automation/res_smart.webp";
const resStripImg = "/images/indoor/res_strip.webp";
const resStepImg = "/images/indoor/res_step.webp";

const relatedProducts = [
  {
    title: "Trimless Downlights",
    description: "Invisible, glare-free illumination for modern ceilings.",
    image: resDownlightImg,
    link: "/products/indoor"
  },
  {
    title: "Landscape Lighting",
    description: "Weather-resistant fixtures to highlight trees and facades.",
    image: resLandscapeImg,
    link: "/products/outdoor"
  },
  {
    title: "Decorative Chandeliers",
    description: "Statement pieces for dining rooms and double-height living areas.",
    image: resChandelierImg,
    link: "/products/indoor"
  },
  {
    title: "Smart Home Controls",
    description: "Integrated keypads and automation for effortless lighting scenes.",
    image: resSmartImg,
    link: "/products/automation"
  },
  {
    title: "Flexible LED Strips",
    description: "High-CRI strip lights for cove lighting, cabinetry, and accents.",
    image: resStripImg,
    link: "/products/indoor"
  },
  {
    title: "Step & Wall Lights",
    description: "Subtle illumination for staircases and exterior boundary walls.",
    image: resStepImg,
    link: "/products/outdoor"
  }
];

export default function ResidentialLighting() {
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
