"use client";

import { Gamepad2, Ticket, Sparkles, Settings } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";
const seo = {
  title: "Entertainment & Theme Park Lighting | Credence Lighting",
  description: "Dynamic, programmable lighting solutions for entertainment venues, cinemas, theme parks, and arenas in the UAE and Saudi Arabia."
};

const faqs = [
  { id: "ent1", question: "Do you provide DMX-controlled lighting for entertainment venues?", answer: "Yes, we specialize in DMX512 and SPI protocols for highly dynamic, programmable lighting installations. This allows for pixel-level control, color-changing effects, and synchronization with audio-visual systems in arenas and theme parks." },
  { id: "ent2", question: "Can you supply lighting for family entertainment centers (FECs)?", answer: "Absolutely. We have extensive experience delivering lighting for FECs across the GCC, including brands like Funtura and Xtreme Zone. We provide a mix of high-energy RGBW lighting for gaming areas and comfortable architectural lighting for concourses and dining zones." },
  { id: "ent3", question: "How do you handle lighting for large scale facades and arenas?", answer: "We use high-output, IP66-rated exterior floodlights and direct-view LED pixels. These systems are designed to withstand extreme weather conditions while delivering synchronized, large-scale media facade content." },
  { id: "ent4", question: "What is the lifespan of your dynamic LED installations?", answer: "Our commercial-grade entertainment fixtures utilize high-quality LEDs (such as Osram or Cree) and robust drivers, typically offering lifespans of 50,000 to 100,000 hours, even under rigorous daily operation." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Entertainment & Leisure Lighting Solutions",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "GCC"],
      "description": "Bespoke entertainment lighting design, supply, and installation across Dubai and the GCC."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Sectors", "item": "https://www.credencelighting.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Entertainment Lighting" }
      ]
    }
  ]
};

const hero = {
  badge: "Entertainment Lighting",
  title: "Creating Immersive",
  titleItalic: "Experiences",
  description: "High-impact, dynamic lighting solutions for family entertainment centers, theme parks, cinemas, and large-scale arenas."
};

const benefits = [
  { icon: Sparkles, title: "Dynamic RGBW", description: "Color-changing and pixel-mapped lighting to create high-energy atmospheres." },
  { icon: Settings, title: "DMX & SPI Control", description: "Advanced protocols allowing seamless integration with overall show control and AV systems." },
  { icon: Ticket, title: "Wayfinding & Safety", description: "Guiding large crowds safely through dark environments without breaking the immersive illusion." },
  { icon: Gamepad2, title: "FEC Expertise", description: "Proven track record delivering complete lighting packages for major Family Entertainment Centers." }
];

const contentBlocks = [
  { type: "heading2", content: "Lighting for the Experience Economy" },
  { type: "paragraph", content: "Entertainment venues rely on sensory immersion. Whether it is a trampoline park, a bowling alley, or a massive indoor theme park, the lighting must be as dynamic as the attractions themselves. Our solutions bridge the gap between architectural illumination and theatrical show lighting." },
  { type: "list", items: [
    "Digital LED Strips: Addressable pixels for chasing effects and media integration.",
    "High-Bay Lighting: Robust, low-glare illumination for high-ceiling sports and trampoline areas.",
    "Thematic Spotlights: Gobo projectors and framing projectors to cast logos and patterns.",
    "Emergency Lighting: Unobtrusive but fully compliant central battery and standalone emergency systems."
  ]},
  { type: "callout", content: "We offer end-to-end programming services, turning complex DMX networks into easy-to-use touchscreen interfaces for venue operators." }
];

const entRgbwImg = "/images/entertainment/ent_rgbw.webp";
const entLedscreenImg = "/images/entertainment/ent_ledscreen.webp";
const entSpotlightImg = "/images/entertainment/ent_spotlight.webp";
const entPixelImg = "/images/entertainment/ent_pixel.webp";
const entLaserImg = "/images/entertainment/ent_laser.webp";
const entMovingheadImg = "/images/entertainment/ent_movinghead.webp";

const relatedProducts = [
  {
    title: "RGBW Linear Profiles",
    description: "Color-changing lines of light for dynamic ceiling designs.",
    image: entRgbwImg,
    link: "/products/entertainment"
  },
  {
    title: "LED Screens & Media Facades",
    description: "Direct-view video elements integrated into the architecture.",
    image: entLedscreenImg,
    link: "/products/led-screen"
  },
  {
    title: "Theatrical Spotlights",
    description: "High-intensity focusable spots for stage and performance areas.",
    image: entSpotlightImg,
    link: "/products/entertainment"
  },
  {
    title: "Pixel Mapping Lights",
    description: "Individually controllable LED nodes for complex visual effects.",
    image: entPixelImg,
    link: "/products/entertainment"
  },
  {
    title: "Laser Projectors",
    description: "Advanced laser effects for high-energy entertainment venues.",
    image: entLaserImg,
    link: "/products/entertainment"
  },
  {
    title: "Moving Head Fixtures",
    description: "Automated dynamic lighting for clubs and immersive arenas.",
    image: entMovingheadImg,
    link: "/products/entertainment"
  }
];

export default function EntertainmentLighting() {
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
