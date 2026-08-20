"use client";

import { Speaker, Mic2, Settings2, ShieldCheck } from "lucide-react";
import IndustryTemplate from "@/components/templates/IndustryTemplate";
const seo = {
  title: "Commercial Audio & Sound Systems | Credence Lighting",
  description: "Premium commercial audio and sound systems for hospitality, retail, and corporate environments. Integrated AV solutions across the UAE and GCC."
};

const faqs = [
  { id: "audio1", question: "Do you provide complete audio system design?", answer: "Yes, we provide end-to-end audio solutions including acoustic design, hardware specification, installation, and tuning to ensure optimal sound coverage and clarity for any environment." },
  { id: "audio2", question: "Can audio systems be integrated with lighting controls?", answer: "Absolutely. We specialize in unified control systems (like KNX or Crestron) where lighting scenes and background music can be controlled simultaneously from a single interface." },
  { id: "audio3", question: "What types of venues do you supply sound systems for?", answer: "We supply background music (BGM) and foreground audio systems for hotels, restaurants, retail showrooms, corporate boardrooms, and large-scale entertainment venues." },
  { id: "audio4", question: "Do you offer hidden or architectural speakers?", answer: "Yes, we carry a range of invisible speakers that can be plastered over, as well as discreet pendant and flush-mount ceiling speakers that match our lighting fixtures for a clean ceiling aesthetic." }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Integrated Audio & Acoustic Solutions",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com"
      },
      "areaServed": ["UAE", "Saudi Arabia", "Bahrain", "GCC"],
      "description": "Bespoke commercial audio and acoustic design, hardware supply, and installation across Dubai and the GCC."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.credencelighting.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Commercial Audio Solutions" }
      ]
    }
  ]
};

const hero = {
  badge: "Audio & Sound Solutions",
  title: "Immersive Audio",
  titleItalic: "Systems",
  description: "High-fidelity commercial sound and public address systems designed for perfect clarity, coverage, and integration with architectural spaces."
};

const benefits = [
  { icon: Speaker, title: "Acoustic Design", description: "Strategic speaker placement based on acoustic modeling for even SPL coverage." },
  { icon: Settings2, title: "Smart Integration", description: "Seamlessly connect your audio zones with lighting and AV control systems." },
  { icon: Mic2, title: "Public Address", description: "Clear, reliable PA and voice evacuation systems compliant with civil defense codes." },
  { icon: ShieldCheck, title: "Premium Brands", description: "Supplying top-tier professional audio equipment for uncompromising sound quality." }
];

const contentBlocks = [
  { type: "heading2", content: "Sound that Complements the Space" },
  { type: "paragraph", content: "Great architecture and lighting must be accompanied by great sound. Whether you need subtle background music (BGM) to set the mood in a luxury hotel lobby, or a high-impact foreground system for a vibrant restaurant, we deliver audio solutions that perform flawlessly without disrupting the visual design. Our approach treats audio as an architectural element, integrating it seamlessly into the environment." },
  { type: "list", items: [
    "Invisible Speakers: Audiophile-grade speakers that are completely hidden behind drywall or plaster, providing magical sound with zero visual impact.",
    "Pendant & Surface Mounts: Stylish fixtures designed to blend with exposed ceiling architectures and industrial aesthetics.",
    "DSP & Matrix Routing: Advanced digital signal processing to manage multiple audio zones effortlessly from a centralized control interface.",
    "Outdoor Audio: Weather-proof (IP-rated) landscape speakers and subterranean subwoofers for immersive gardens and pool decks."
  ]},
  { type: "heading2", content: "Acoustic Modeling & Design" },
  { type: "paragraph", content: "Before a single speaker is installed, our engineering team utilizes advanced acoustic modeling software (such as EASE) to simulate the audio performance within your specific architectural space. We analyze reverberation times, material reflections, and ambient noise floors to strategically place speakers. This scientific approach guarantees even sound pressure levels (SPL) and perfect vocal intelligibility across every zone, eliminating dead spots and uncomfortable acoustic peaks." },
  { type: "callout", content: "Our audio systems are designed to integrate flawlessly with your lighting controls (KNX, DALI, Crestron), allowing you to recall unified 'Scenes' that adjust both lighting and music simultaneously." }
];

const audioCeilingImg = "/images/sound/audio_ceiling.webp";
const audioInvisibleImg = "/images/sound/audio_invisible.webp";
const audioLandscapeImg = "/images/sound/audio_landscape.webp";
const audioDspImg = "/images/sound/audio_dsp.webp";
const audioPaImg = "/images/sound/audio_pa.webp";
const audioHometheaterImg = "/images/sound/audio_hometheater.webp";

const relatedProducts = [
  {
    title: "Ceiling & Pendant Speakers",
    description: "Architectural speakers designed to match lighting form factors.",
    image: audioCeilingImg,
    link: "/products/audio" 
  },
  {
    title: "Invisible Speakers",
    description: "Plaster-over speakers for a completely hidden audio experience.",
    image: audioInvisibleImg,
    link: "/products/audio"
  },
  {
    title: "Landscape Audio",
    description: "Durable, high-performance sound for outdoor environments.",
    image: audioLandscapeImg,
    link: "/products/audio"
  },
  {
    title: "DSP & Amplifiers",
    description: "Professional grade processing and amplification for multi-zone control.",
    image: audioDspImg,
    link: "/products/audio"
  },
  {
    title: "Public Address Systems",
    description: "Clear and reliable paging and voice evacuation audio setups.",
    image: audioPaImg,
    link: "/products/audio"
  },
  {
    title: "Home Theater Audio",
    description: "Immersive surround sound solutions for private cinemas.",
    image: audioHometheaterImg,
    link: "/products/audio"
  }
];

export default function AudioSolutions() {
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
