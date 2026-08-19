"use client";

import { ShoppingBag, Eye, TrendingUp, Search } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";
const indoorImg = "/images/mytown/141.webp"; 
const retailImg = "/images/Smarvy Spot/150.webp"; 

const seo = {
  title: "Retail & Shop Lighting Design | Credence Lighting",
  description: "Drive sales and enhance brand identity with our bespoke retail lighting solutions. High-CRI track lighting and architectural integration for showrooms."
};

const faqs = [
  { id: "rtl1", question: "How does lighting affect retail sales?", answer: "Lighting directly impacts consumer behavior. High-contrast accent lighting draws attention to premium merchandise, while high color rendering (CRI) ensures products look vibrant and appealing. Proper lighting guides customer flow through the store and increases dwell time, which correlates directly with increased sales." },
  { id: "rtl2", question: "What is CRI and why is it important for shops?", answer: "CRI (Color Rendering Index) measures how accurately a light source reveals true colors. In retail environments—especially fashion, jewelry, and cosmetics—a CRI of 90 or higher is essential. It ensures that fabrics and materials look exactly as the designer intended, preventing customer dissatisfaction and returns." },
  { id: "rtl3", question: "What is the best lighting system for changing store layouts?", answer: "Magnetic track systems and standard 3-circuit track lighting are the most versatile solutions for retail. They allow store managers to easily add, remove, or reposition spotlights as seasonal displays and floor layouts change, without needing an electrician." },
  { id: "rtl4", question: "Can you supply lighting for multi-location retail rollouts?", answer: "Yes, we specialize in brand rollouts. We ensure consistent lighting quality, exact color temperatures, and standardized fixture aesthetics across all your retail branches in the UAE and the wider GCC region." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Retail Lighting Solutions",
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
      "description": "High-CRI architectural lighting for retail stores and showrooms."
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
  badge: "Retail Lighting",
  title: "Lighting that",
  titleItalic: "Drives Sales",
  description: "High-contrast, high-CRI lighting solutions designed to highlight merchandise, guide customer flow, and reinforce your brand identity."
};

const benefits = [
  { icon: Eye, title: "High Color Rendering", description: "CRI 90+ and specialized LED chips that make colors pop, essential for fashion and jewelry." },
  { icon: ShoppingBag, title: "Visual Merchandising", narrow: true, description: "Precision beam angles to create dramatic contrast ratios, drawing the eye exactly where you want it." },
  { icon: TrendingUp, title: "Flexible Track Systems", description: "Adaptable magnetic and 3-circuit tracks that allow easy repositioning for seasonal displays." },
  { icon: Search, title: "Window Display Lighting", description: "High-lumen outputs that punch through daylight reflection to attract foot traffic." }
];

const contentBlocks = [
  { type: "heading2", content: "The Psychology of Retail Lighting" },
  { type: "paragraph", content: "In retail, light is your silent salesperson. It creates the atmosphere, directs attention, and influences purchasing decisions. Our retail lighting strategies are designed to create 'stopping power' in window displays and comfortable, engaging environments inside the store." },
  { type: "list", items: [
    "General Ambient Lighting: Soft, diffused light that ensures customers can comfortably navigate the store.",
    "Accent Lighting: Powerful, tight-beam spotlights that create a 3:1 or 5:1 contrast ratio to highlight key merchandise.",
    "Task Lighting: Glare-free illumination at cash wraps and fitting rooms.",
    "Decorative Lighting: Pendants and chandeliers that reinforce brand aesthetics."
  ]},
  { type: "callout", content: "We offer specialized LED spectrums tailored for specific merchandise: crisp whites for jewelry, rich reds for fresh produce, and warm tones for premium fashion." }
];

const relatedProducts = [
  {
    title: "Track Spotlights",
    description: "Versatile, high-CRI spotlights for dynamic retail displays.",
    image: indoorImg,
    link: "/products/retail"
  },
  {
    title: "Magnetic Track Systems",
    description: "Minimalist, tool-free lighting tracks for modern showrooms.",
    image: retailImg,
    link: "/products/retail"
  },
  {
    title: "High-CRI Downlights",
    description: "Precision downlights that make colors and textures pop.",
    image: indoorImg,
    link: "/products/indoor"
  },
  {
    title: "Linear Aisle Lighting",
    description: "Even, high-efficiency illumination for supermarket aisles.",
    image: retailImg,
    link: "/products/indoor"
  },
  {
    title: "Window Display Lights",
    description: "High-intensity fixtures to combat daylight glare in shop windows.",
    image: indoorImg,
    link: "/products/retail"
  },
  {
    title: "Recessed Wall Washers",
    description: "Vertical illumination to highlight shelving and perimeter displays.",
    image: retailImg,
    link: "/products/indoor"
  }
];

export default function RetailLighting() {
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
