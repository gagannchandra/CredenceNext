"use client";

import { Utensils, Coffee, Moon, Palette } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";
const indoorImg = "/images/ground-control/154.webp"; 
const restImg = "/images/xtremezone/136.webp"; 

const seo = {
  title: "Restaurant & Cafe Lighting Design | Credence Lighting",
  description: "Create the perfect dining ambiance with our bespoke restaurant and cafe lighting solutions. We specialize in warm dimming, decorative supply, and mood lighting."
};

const faqs = [
  { id: "rest1", question: "Why is lighting so important in a restaurant?", answer: "Lighting defines the dining atmosphere. It affects everything from how appetizing the food looks to how long guests decide to stay. Good restaurant lighting creates an intimate, comfortable space that encourages guests to relax, while poor lighting can make a space feel frantic or uninviting." },
  { id: "rest2", question: "What is Warm Dimming technology?", answer: "Warm Dimming (or Dim-to-Warm) mimics the behavior of traditional halogen bulbs. As you dim the LED fixture, the color temperature automatically shifts from a crisp 3000K down to a very warm, candle-like 1800K. This is essential for restaurants transitioning from a bright lunch service to an intimate dinner setting." },
  { id: "rest3", question: "How do you highlight tables without blinding guests?", answer: "We use deep-recessed, narrow-beam pinhole downlights positioned directly over the tables. The light source is hidden deep within the ceiling, ensuring zero glare at eye level, while the beam punches down to illuminate the food and the table surface." },
  { id: "rest4", question: "Do you provide decorative pendants and wall lights for cafes?", answer: "Yes, we supply a wide range of decorative lighting from premium international brands. We can also assist in sourcing bespoke, custom-manufactured decorative pieces based on the interior designer's concepts." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Restaurant Lighting Design",
      "provider": {
        "@type": "LocalBusiness",
          "@id": "https://credencelighting.com/#organization",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9788",
            "longitude": "55.1764"
          },
        "name": "Credence Lighting",
        "url": "https://credencelighting.com"
      },
      "description": "Ambiance-focused lighting solutions for dining venues and cafes."
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
  badge: "F&B Lighting",
  title: "Setting the Perfect",
  titleItalic: "Dining Ambiance",
  description: "From bustling daytime cafes to intimate fine-dining restaurants, we engineer lighting solutions that make food look appetizing and guests feel relaxed."
};

const benefits = [
  { icon: Moon, title: "Warm Dimming", description: "Smooth transition to ultra-warm, candle-like color temperatures for evening service." },
  { icon: Utensils, title: "Table Highlighting", description: "Pin-spot lighting that illuminates the dish while keeping the surrounding space intimate and glare-free." },
  { icon: Palette, title: "High Color Rendering", description: "CRI 90+ fixtures ensuring that culinary creations and fresh ingredients look vibrant and appealing." },
  { icon: Coffee, title: "Decorative Integration", description: "Seamless blending of architectural downlights with feature pendants and wall sconces." }
];

const contentBlocks = [
  { type: "heading2", content: "Crafting the Culinary Experience" },
  { type: "paragraph", content: "In the Food & Beverage industry, interior design and lighting are as important as the menu itself. A restaurant's lighting must be highly flexible. It needs to accommodate cleaning staff in the morning, provide an energetic vibe for the lunch rush, and transition seamlessly into a moody, romantic atmosphere for dinner." },
  { type: "list", items: [
    "Pinhole Downlights: Hidden light sources for dramatic tabletop illumination.",
    "Bar & Counter Lighting: Linear profiles and mini-pendants to define the bar area.",
    "Kitchen Lighting: High-output, IP-rated, easy-to-clean fixtures for the back of house.",
    "Facade & Signage: Welcoming exterior illumination that draws diners in."
  ]},
  { type: "callout", content: "We implement advanced DALI and Casambi control systems that automatically transition the lighting scenes based on the time of day, ensuring the ambiance is always perfect without staff intervention." }
];

const restPinholeImg = "/images/hospitality/rest_pinhole.webp";
const restPendantImg = "/images/hospitality/rest_pendant.webp";
const restDimmingImg = "/images/hospitality/rest_dimming.webp";
const restSpotlightImg = "/images/hospitality/rest_spotlight.webp";

const relatedProducts = [
  {
    title: "Pinhole Downlights",
    description: "Deep-recessed spots for dramatic, glare-free table lighting.",
    image: restPinholeImg,
    link: "/products/hospitality"
  },
  {
    title: "Decorative Pendants",
    description: "Statement pieces to define bar and dining areas.",
    image: restPendantImg,
    link: "/products/indoor"
  },
  {
    title: "Warm Dimming Downlights",
    description: "Smooth transition to warmer tones as lights dim for evening service.",
    image: restDimmingImg,
    link: "/products/hospitality"
  },
  {
    title: "Miniature Spotlights",
    description: "Discreet spots to highlight artwork and architectural features.",
    image: restSpotlightImg,
    link: "/products/indoor"
  },
  {
    title: "Table Lamps (Battery)",
    description: "Rechargeable, cordless table lamps for intimate dining ambiance.",
    image: restImg,
    link: "/products/hospitality"
  },
  {
    title: "Track Lighting",
    description: "Flexible lighting for changing table layouts and seasonal displays.",
    image: indoorImg,
    link: "/products/indoor"
  }
];

export default function RestaurantLighting() {
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
