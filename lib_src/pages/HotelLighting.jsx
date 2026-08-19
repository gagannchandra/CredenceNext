"use client";

import { Lightbulb, Settings, Compass, Sparkles } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";

const seo = {
  title: "Hotel Lighting Solutions & Suppliers | Credence Lighting",
  description: "Bespoke hotel lighting solutions designed to elevate guest experiences. We provide luxury hospitality lighting design, supply, and commissioning across the GCC."
};

const faqs = [
  { id: "hl1", question: "How does hotel lighting affect the guest experience?", answer: "Lighting is arguably the most critical element in hotel design. It dictates the ambiance, sets the mood upon check-in, guides guests through corridors, and provides comfort in the guestrooms. High-quality lighting with proper color temperature and dimming controls can significantly enhance perceived luxury and guest satisfaction." },
  { id: "hl2", question: "What is the recommended color temperature for hotel lobbies?", answer: "We generally recommend a warm color temperature between 2700K and 3000K for hotel lobbies to create a welcoming, luxurious atmosphere. During daytime, dynamic tunable white systems can adjust the temperature to match natural daylight (up to 4000K), gradually warming up as evening approaches." },
  { id: "hl3", question: "Do you supply customized decorative fixtures for hotels?", answer: "Yes. In addition to architectural lighting, we work with premium European and regional brands to supply bespoke decorative chandeliers, pendants, and wall sconces tailored specifically to the interior designer's vision." },
  { id: "hl4", question: "How can we reduce energy costs in our hotel lighting?", answer: "By upgrading to high-efficiency LED fixtures and implementing smart lighting controls (such as DALI or Casambi). Occupancy sensors in corridors and daylight harvesting in lobbies can reduce lighting energy consumption by up to 60% without compromising the guest experience." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Hotel Lighting Design and Supply",
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
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "Oman"],
      "description": "Bespoke hotel lighting solutions designed to elevate guest experiences."
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
  badge: "Hospitality Lighting",
  title: "Elevating the",
  titleItalic: "Guest Experience",
  description: "From striking lobby installations to intimate guestroom ambiance, we provide end-to-end lighting solutions for the world's most prestigious hotel brands."
};

const benefits = [
  { icon: Sparkles, title: "Lobby & Atrium Lighting", description: "Dramatic, multi-layered lighting designs that create an unforgettable first impression while guiding guest circulation." },
  { icon: Compass, title: "Corridor & Wayfinding", description: "Soft, glare-free illumination combined with integrated emergency lighting and smart occupancy controls." },
  { icon: Settings, title: "Guestroom Automation", description: "Intuitive lighting controls that allow guests to set scenes for reading, relaxing, or working with a single touch." },
  { icon: Lightbulb, title: "Facade & Landscape", description: "IP-rated exterior lighting that defines the hotel's nighttime architecture and provides safe, beautiful outdoor spaces." }
];

const stats = [
  ["50+", "Hotels Completed"],
  ["5-Star", "Brand Standards"],
  ["60%", "Energy Savings"],
  ["10yr", "Design Lifespan"]
];

const contentBlocks = [
  { type: "heading2", content: "The Role of Lighting in Hospitality" },
  { type: "paragraph", content: "In the hospitality industry, lighting is not merely functional—it is emotional. The moment a guest steps into a hotel, the lighting sets the tone for their entire stay. A poorly lit lobby feels sterile; an overly bright restaurant feels like a cafeteria. At Credence Lighting, we understand that luxury is defined by nuances: the perfect grazing angle on a textured wall, the complete absence of glare, and the seamless transition from day to night." },
  { type: "callout", content: "We provide services to architects, interior designers, and hotel operators to ensure our lighting systems meet stringent brand standards while pushing the boundaries of creative design." },
  { type: "heading2", content: "Technical Considerations for Hotel Lighting" },
  { type: "list", items: [
    "High CRI (90+): Essential for restaurants to make food look appetizing and in guestroom mirrors for accurate skin tones.",
    "Flicker-Free Dimming: Crucial for guest comfort and for avoiding banding when guests take photos or videos.",
    "Tunable White Technology: Adjusting color temperature throughout the day to support guest circadian rhythms.",
    "Centralized Control Systems: Allowing hotel management to monitor energy usage and automate lighting scenes based on the time of day."
  ]},
  { type: "quote", content: "True luxury in hotel lighting is when the guest feels perfectly comfortable without ever noticing the light fixtures themselves." }
];

const hotelDownlightImg = "/images/hospitality/hotel_downlight.webp";
const hotelFacadeImg = "/images/facade/hotel_facade.webp";
const hotelPendantImg = "/images/hospitality/hotel_pendant.webp";
const hotelStripImg = "/images/hospitality/hotel_strip.webp";
const hotelBollardImg = "/images/hospitality/hotel_bollard.webp";

const hotelSmartImg = "/images/Home Automation/hotel_smart.webp";

const relatedProducts = [
  {
    title: "Hospitality Downlights",
    description: "Deep-recessed, low-glare downlights perfect for lobbies and guestrooms.",
    image: hotelDownlightImg,
    link: "/products/hospitality"
  },
  {
    title: "Exterior Facade Systems",
    description: "Durable, IP67-rated grazers and floodlights for stunning exterior illumination.",
    image: hotelFacadeImg,
    link: "/products/facade"
  },
  {
    title: "Decorative Pendants",
    description: "Statement chandeliers and pendants for atriums and dining areas.",
    image: hotelPendantImg,
    link: "/products/hospitality"
  },
  {
    title: "LED Strip Lighting",
    description: "Concealed linear lighting for coves, headboards, and accent details.",
    image: hotelStripImg,
    link: "/products/indoor"
  },
  {
    title: "Landscape Bollards",
    description: "Elegant pathway lighting for hotel gardens and pool decks.",
    image: hotelBollardImg,
    link: "/products/outdoor"
  },
  {
    title: "Smart Room Controls",
    description: "Integrated keypads and automation for personalized guest experiences.",
    image: hotelSmartImg,
    link: "/products/automation"
  }
];

export default function HotelLighting() {
  return (
    <IndustryTemplate 
      seo={seo}
      schema={schema}
      hero={hero}
      stats={stats}
      benefits={benefits}
      contentBlocks={contentBlocks}
      relatedProducts={relatedProducts}
      faqs={faqs}
    />
  );
}
