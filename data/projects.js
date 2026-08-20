const mytown140 = "/images/mytown/140.webp";
const mytown141 = "/images/mytown/141.webp";
const mytown145 = "/images/mytown/145.webp";
const mytown146 = "/images/mytown/146.webp";
const mytown148 = "/images/mytown/148.webp";

const gc154 = "/images/ground-control/154.webp";
const gc155 = "/images/ground-control/155.webp";

const funtura134 = "/images/Funtura/134.webp";
const funtura135 = "/images/Funtura/135.webp";

const xtreme136 = "/images/xtremezone/136.webp";
const xtreme137 = "/images/xtremezone/137.webp";

const xtremez144 = "/images/xtremez/144.webp";

const smarvy150 = "/images/Smarvy Spot/150.webp";
const smarvy151 = "/images/Smarvy Spot/151.webp";

const projects = [
  {
    id: 1,
    slug: "my-town",
    name: "My Town",
    location: "Multiple Locations, Saudi Arabia",
    year: "2024",
    category: "Architectural Lighting",
    hero: mytown141,
    description: "An elegant commercial lighting environment developed for immersive retail and hospitality experiences through warm ambient illumination. Featured in Faisaliah Mall (Riyadh), Lavanda Park Mall, Dareen Mall (Dammam), and Jeddah Village Mall.",
    gallery: [mytown140, mytown141, mytown145, mytown146, mytown148],
    engineeringMetrics: {
      luxLevel: "350 Lux avg",
      lpd: "4.8 W/m²",
      cri: "CRI 95+ (R9 > 80)",
      controls: "DALI-2 & Casambi Mesh",
      energySaved: "-38% vs ASHRAE 90.1",
    },
  },

  {
    id: 2,
    slug: "ground-control",
    name: "Ground Control",
    location: "Galleria Mall, Bahrain",
    year: "2024",
    category: "Entertainment Lighting",
    hero: gc154,
    description: "A premium entertainment and immersive lighting project focused on dynamic fixtures and video integration.",
    gallery: [gc154, gc155],
    engineeringMetrics: {
      luxLevel: "Dynamic 150-600 Lux",
      lpd: "5.2 W/m²",
      cri: "CRI 90+ (Full RGBW)",
      controls: "ArtNet / DMX512 Pixel Mapping",
      energySaved: "-32% vs Conventional",
    },
  },

  {
    id: 3,
    slug: "funtura",
    name: "Funtura",
    location: "Al Atyaf Mall, Riyadh",
    year: "2024",
    category: "Interactive Lighting",
    hero: funtura134,
    description: "Interactive retail lighting with responsive control systems and feature installations.",
    gallery: [funtura134, funtura135],
    engineeringMetrics: {
      luxLevel: "450 Lux uniform",
      lpd: "4.5 W/m²",
      cri: "CRI 92+",
      controls: "Sensory Interactive DMX",
      energySaved: "-35% vs Baseline",
    },
  },

  {
    id: 4,
    slug: "xtreme-zone",
    name: "Xtreme Zone",
    location: "Al Shifa, Dammam, Saudi Arabia",
    year: "2024",
    category: "Linear Lighting",
    hero: xtreme136,
    description: "Large-format linear installations and architectural lighting used for immersive entertainment spaces.",
    gallery: [xtreme136, xtreme137],
    engineeringMetrics: {
      luxLevel: "500 Lux direct/indirect",
      lpd: "4.1 W/m²",
      cri: "CRI 90+",
      controls: "0-10V Master Zoning",
      energySaved: "-40% Energy Reduction",
    },
  },

  {
    id: 5,
    slug: "xtreme-z",
    name: "Xtreme Z",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    category: "Architectural Lighting",
    hero: xtremez144,
    description: "Premium architectural lighting installation featuring advanced illumination design and ambient atmosphere creation.",
    gallery: [xtremez144],
    engineeringMetrics: {
      luxLevel: "400 Lux ambient",
      lpd: "4.4 W/m²",
      cri: "CRI 95+",
      controls: "Casambi Bluetooth Mesh",
      energySaved: "-36% Consumption",
    },
  },

  {
    id: 6,
    slug: "smarvy-spot",
    name: "Smarvy Spot",
    location: "Alamer Mall, Al-Ahsa, Saudi Arabia",
    year: "2024",
    category: "Retail Lighting",
    hero: smarvy150,
    description: "Dynamic retail lighting solution designed to enhance product visibility and create an engaging shopping environment.",
    gallery: [smarvy150, smarvy151],
    engineeringMetrics: {
      luxLevel: "800 Lux accent / 400 Lux ambient",
      lpd: "5.0 W/m²",
      cri: "CRI 97 (Vivid Spectrum)",
      controls: "DALI Track System",
      energySaved: "-44% vs Ceramic Metal Halide",
    },
  },

  {
    id: 7,
    slug: "dubai-marina-penthouse",
    name: "Dubai Marina Luxury Penthouse",
    location: "Dubai Marina, Dubai, UAE",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/1.webp",
    description: "Architectural cove lighting and human-centric circadian illumination for a ultra-luxury triplex penthouse with panoramic Arabian Gulf views.",
    gallery: ["/images/indoor/1.webp", "/images/indoor/2.webp", "/images/indoor/3.webp"],
    engineeringMetrics: {
      luxLevel: "150-300 Lux tunable",
      lpd: "3.6 W/m²",
      cri: "CRI 98+ (True Sunlight)",
      controls: "KNX & DALI-2 Circadian Engine",
      energySaved: "-46% Green Building Certified",
    },
  },

  {
    id: 8,
    slug: "riyadh-business-tower",
    name: "Riyadh Commercial Tower",
    location: "King Fahd Road, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Commercial Office Lighting",
    hero: "/images/facade/1.webp",
    description: "Corporate headquarters architectural lighting combining low-glare UGR<16 recessed luminaires with an automated facade media installation.",
    gallery: ["/images/facade/1.webp", "/images/facade/2.webp", "/images/facade/3.webp"],
    engineeringMetrics: {
      luxLevel: "500 Lux (Workplace EN 12464-1)",
      lpd: "3.9 W/m²",
      cri: "CRI 90+ (UGR < 16)",
      controls: "DALI-2 Multi-Sensor Network",
      energySaved: "-52% vs Conventional Fluorescent",
    },
  },

  {
    id: 9,
    slug: "bahrain-bay-resort",
    name: "Bahrain Bay Hotel & Spa",
    location: "Manama, Kingdom of Bahrain",
    year: "2024",
    category: "Hospitality & Hotel Lighting",
    hero: "/images/hospitality/1.webp",
    description: "Bespoke warm dimming (1800K-3000K) and architectural lighting design for a five-star waterfront hospitality resort and spa.",
    gallery: ["/images/hospitality/1.webp", "/images/hospitality/2.webp", "/images/hospitality/3.webp"],
    engineeringMetrics: {
      luxLevel: "100-250 Lux warm dimming",
      lpd: "4.2 W/m²",
      cri: "CRI 96+",
      controls: "Casambi Luxury Scene Controller",
      energySaved: "-41% Hotel Energy Standard",
    },
  },

  {
    id: 10,
    slug: "abu-dhabi-cultural-pavilion",
    name: "Abu Dhabi Cultural Pavilion",
    location: "Saadiyat Cultural District, Abu Dhabi, UAE",
    year: "2025",
    category: "Architectural Facade Lighting",
    hero: "/images/facade/4.webp",
    description: "High-precision geometric facade grazing and Estidama Pearl-compliant exterior floodlighting for a major cultural landmark.",
    gallery: ["/images/facade/4.webp", "/images/facade/5.webp", "/images/facade/6.webp"],
    engineeringMetrics: {
      luxLevel: "Grazing Beam 400 Lux",
      lpd: "3.4 W/m²",
      cri: "CRI 90+ (IP67 Ingress)",
      controls: "DMX RDM Architectural Hub",
      energySaved: "-48% Estidama Pearl 3 Rated",
    },
  },

  {
    id: 11,
    slug: "kafd-flagship-retail",
    name: "KAFD Luxury Flagship Store",
    location: "King Abdullah Financial District, Riyadh, KSA",
    year: "2025",
    category: "Retail & Showroom Lighting",
    hero: "/images/Retail Lighting/1.webp",
    description: "Precision museum-grade spot and magnetic track lighting with high color saturation (Gamut Rg 102) for high-end jewelry and luxury fashion.",
    gallery: ["/images/Retail Lighting/1.webp", "/images/Retail Lighting/2.webp"],
    engineeringMetrics: {
      luxLevel: "1200 Lux focal / 400 Lux ambient",
      lpd: "5.4 W/m²",
      cri: "CRI 98 (Rg 102, Rf 96)",
      controls: "Magnetic Track Micro-DALI",
      energySaved: "-39% Efficiency vs Standard",
    },
  },

  {
    id: 12,
    slug: "al-qasba-promenade",
    name: "Al Qasba Waterfront Promenade",
    location: "Sharjah, UAE",
    year: "2024",
    category: "Outdoor & Landscape Lighting",
    hero: "/images/outdoor/1.webp",
    description: "Dark-sky friendly pedestrian illumination, integrated IP68 underwater fountain luminaires, and marine-grade corrosion resistant bollards.",
    gallery: ["/images/outdoor/1.webp", "/images/outdoor/2.webp", "/images/outdoor/3.webp"],
    engineeringMetrics: {
      luxLevel: "30 Lux pathway / IP68 underwater",
      lpd: "2.1 W/m²",
      cri: "CRI 85+ (Corrosion Proof C5-M)",
      controls: "Astronomical Timeclock & DALI",
      energySaved: "-55% Dark-Sky Certified",
    },
  },
];

export default projects;