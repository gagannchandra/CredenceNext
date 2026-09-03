const mytown140 = "/images/mytown/140.webp";
const mytown141 = "/images/mytown/141.webp";
const mytown145 = "/images/mytown/145.webp";
const mytown146 = "/images/mytown/146.webp";
const mytown148 = "/images/mytown/148.webp";

const gc154 = "/images/ground-control/154.webp";
const gc155 = "/images/ground-control/155.webp";

const funtura134 = "/images/Funtura/134.webp";
const funtura135 = "/images/Funtura/135.webp";


const xtremez144 = "/images/xtremez/144.webp";

const smarvy150 = "/images/Smarvy Spot/150.webp";
const smarvy151 = "/images/Smarvy Spot/151.webp";

const projects = [
  {
    id: 1,
    slug: "my-town",
    name: "My Town",
    metaTitle: "My Town Mall Lighting, Saudi Arabia",
    location: "Abha Mall & Al Rawda Mall, Saudi Arabia",
    year: "2024",
    category: "Architectural Lighting",
    hero: mytown141,
    description: "An elegant commercial lighting environment developed for immersive retail and hospitality experiences through warm ambient illumination. Featured in Abha Mall and Al Rawda Mall.",
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
    metaTitle: "Ground Control Entertainment Lighting, Bahrain",
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
    metaTitle: "Funtura Interactive Lighting, Saudi Arabia",
    location: "Atyaf Mall, Riyadh & Cenomi Mall, Saudi Arabia",
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
    metaTitle: "Xtreme Zone Lighting, Roshn Front Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
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
    metaTitle: "Smarvy Spot Retail Lighting, Al-Ahsa KSA",
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
    metaTitle: "Dubai Marina Penthouse Lighting Design",
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
    metaTitle: "Riyadh Commercial Tower Office Lighting",
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
    metaTitle: "Bahrain Bay Hotel & Spa Lighting, Manama",
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
    metaTitle: "Abu Dhabi Cultural Pavilion Facade Lighting",
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
    metaTitle: "KAFD Flagship Store Lighting, Riyadh",
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
    metaTitle: "Al Qasba Waterfront Promenade Lighting",
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

  // ---------------------------------------------------------------------------
  // Client-supplied portfolio additions (see "Credence's Website Changes").
  // Names + locations are from the client; descriptions are written from the
  // publicly documented nature of each venue. `engineeringMetrics` and real
  // project photography are intentionally absent - both need to come from
  // Credence. The gallery paths below are category-matched placeholders drawn
  // from existing site imagery and should be swapped for the real shots.
  // ---------------------------------------------------------------------------

  {
    id: 13,
    slug: "urth-cafe-roshn-front",
    name: "Urth Caffé",
    metaTitle: "Urth Caffé Lighting, Roshn Front Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Hospitality & Hotel Lighting",
    hero: "/images/hospitality/rest_pendant.webp",
    description: "Warm, layered illumination for the Riyadh outpost of the organic coffee house, tuned to its rustic timber seating, planted interior and all-day trading pattern across indoor and terrace covers.",
    gallery: ["/images/hospitality/rest_pendant.webp", "/images/hospitality/rest_dimming.webp", "/images/hospitality/4.webp"],
  },

  {
    id: 14,
    slug: "al-akaria-coworking-space",
    name: "Al Akaria Co-Working Space",
    metaTitle: "Al Akaria Co-Working Space Lighting, Riyadh",
    location: "Al Akaria, Al Olaya Street, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Commercial Office Lighting",
    hero: "/images/indoor/office_linear.webp",
    description: "Low-glare linear and task lighting for a flexible workspace on Al Olaya Street, balancing focused desk illumination against softer light in the lounge, meeting and breakout zones.",
    gallery: ["/images/indoor/office_linear.webp", "/images/indoor/office_downlight.webp", "/images/indoor/office_task.webp"],
  },

  {
    id: 15,
    slug: "villa-al-arid-riyadh",
    name: "Private Villa — Al Arid",
    metaTitle: "Private Villa Lighting, Al Arid Riyadh",
    location: "Al Arid District, North Riyadh, Saudi Arabia",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/res_chandelier.webp",
    description: "A complete residential lighting scheme for a private villa in North Riyadh, combining architectural cove detailing, decorative feature pieces and discreet circulation lighting throughout.",
    gallery: ["/images/indoor/res_chandelier.webp", "/images/indoor/4.webp", "/images/stretch-ceiling/IMG_0124.webp"],
  },

  {
    id: 16,
    slug: "elysium-residences-satwa",
    name: "Elysium Residences",
    metaTitle: "Elysium Residences Lighting, Al Satwa Dubai",
    location: "Al Satwa, Dubai, UAE",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/res_downlight.webp",
    description: "Lighting for a residential building in Al Satwa covering apartment interiors alongside the lobby, corridors and shared amenity areas, specified for consistency and low maintenance across the block.",
    gallery: ["/images/indoor/res_downlight.webp", "/images/indoor/5.webp", "/images/facade/7.webp"],
  },

  {
    id: 17,
    slug: "fitness-first",
    name: "Fitness First",
    metaTitle: "Fitness First Gym Lighting Design, UAE",
    location: "United Arab Emirates",
    year: "2025",
    category: "Fitness & Wellness Lighting",
    hero: "/images/indoor/office_tunable.webp",
    description: "Training-floor lighting for the international health club brand, prioritising even vertical illumination, controlled glare for floor-facing exercises and distinct atmospheres between the weights floor and studio spaces.",
    gallery: ["/images/indoor/office_tunable.webp", "/images/Home Automation/office_sensor.webp", "/images/stretch-ceiling/IMG_0126.webp"],
  },

  {
    id: 18,
    slug: "laduree-roshn-front",
    name: "Ladurée",
    metaTitle: "Ladurée Patisserie Lighting, Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Hospitality & Hotel Lighting",
    hero: "/images/hospitality/hotel_pendant.webp",
    description: "Boutique patisserie lighting for the French maison at Roshn Front, using high colour-fidelity accent light over the pastry display and softer ambient layers across the salon seating.",
    gallery: ["/images/hospitality/hotel_pendant.webp", "/images/hospitality/5.webp", "/images/hospitality/6.webp"],
  },

  {
    id: 19,
    slug: "fabyland",
    name: "Fabyland",
    metaTitle: "Fabyland Entertainment Lighting, UAE",
    location: "Dubai Silicon Oasis, Dubai Festival City & Sharjah Central Mall, UAE",
    year: "2025",
    category: "Entertainment Lighting",
    hero: "/images/family entertainment/80.webp",
    description: "Lighting and effects across three UAE branches of the Al Othaim Entertainment family entertainment brand, covering arcade and ride zones, bowling and billiards areas, and the party rooms.",
    gallery: ["/images/family entertainment/80.webp", "/images/family entertainment/81.webp", "/images/family entertainment/82.webp"],
  },

  {
    id: 20,
    slug: "gemo",
    name: "Gémo",
    metaTitle: "Gémo Retail Lighting, Dubai UAE",
    location: "Ibn Battuta Mall & Marina Mall, UAE",
    year: "2025",
    category: "Retail & Showroom Lighting",
    hero: "/images/Retail Lighting/3.webp",
    description: "Fashion retail lighting for two mall stores of the French clothing and footwear brand, with track-mounted accent light on wall bays and merchandising tables and even ambient cover across the shop floor.",
    gallery: ["/images/Retail Lighting/3.webp", "/images/Retail Lighting/4.webp", "/images/led-screen/2.webp"],
  },

  {
    id: 21,
    slug: "villa-palm-jumeirah",
    name: "Private Villa — Palm Jumeirah",
    metaTitle: "Private Villa Lighting, Palm Jumeirah",
    location: "Palm Jumeirah, Dubai, UAE",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/res_strip.webp",
    description: "A waterfront villa scheme pairing architectural interior lighting with marine-grade exterior fittings for the terrace, pool surround and landscaped frontage.",
    gallery: ["/images/indoor/res_strip.webp", "/images/outdoor/4.webp", "/images/outdoor/5.webp"],
  },

  {
    id: 22,
    slug: "sephora-roshn-front",
    name: "Sephora",
    metaTitle: "Sephora Store Lighting, Roshn Front Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Retail & Showroom Lighting",
    hero: "/images/Retail Lighting/5.webp",
    description: "Beauty retail lighting for the Roshn Front store, specified for faithful colour rendering at the make-up testers and mirrors alongside bright, uniform light across the open shop floor.",
    gallery: ["/images/Retail Lighting/5.webp", "/images/Retail Lighting/6.webp", "/images/stretch-ceiling/20C9BA80-EAC4-4F42-B725-D901580BB9B7.webp"],
  },

  {
    id: 23,
    slug: "orange-wheels",
    name: "Orange Wheels",
    metaTitle: "Orange Wheels Play Area Lighting, UAE",
    location: "Al Mamsha, Sharjah & Nad Al Sheba Mall, Dubai, UAE",
    year: "2025",
    category: "Entertainment Lighting",
    hero: "/images/family entertainment/83.webp",
    description: "Lighting for two branches of the children's indoor play brand, covering the soft play, role-play and climbing zones with bright, glare-controlled light and colour accents at the themed set pieces.",
    gallery: ["/images/family entertainment/83.webp", "/images/family entertainment/84.webp", "/images/family entertainment/85.webp"],
  },

  {
    id: 24,
    slug: "dyar-bakery-roshn-front",
    name: "Dyar Bakery",
    metaTitle: "Dyar Bakery Lighting, Roshn Front Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Hospitality & Hotel Lighting",
    hero: "/images/hospitality/hotel_downlight.webp",
    description: "Bakery and café lighting at Roshn Front, with warm accent light over the counter and product displays and a softer ambient layer across the seating area.",
    gallery: ["/images/hospitality/hotel_downlight.webp", "/images/hospitality/rest_spotlight.webp", "/images/hospitality/7.webp"],
  },

  {
    id: 25,
    slug: "villa-tilal-al-ghaf",
    name: "Private Villa — Tilal Al Ghaf",
    metaTitle: "Private Villa Lighting, Tilal Al Ghaf",
    location: "Tilal Al Ghaf, Dubai, UAE",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/res_step.webp",
    description: "Interior and landscape lighting for a private villa in Tilal Al Ghaf, layering recessed architectural light indoors with discreet garden and facade illumination outside.",
    gallery: ["/images/indoor/res_step.webp", "/images/outdoor/6.webp", "/images/outdoor/res_landscape.webp"],
  },

  {
    id: 26,
    slug: "rolling-wheels",
    name: "Rolling Wheels",
    metaTitle: "Rolling Wheels Play Area Lighting, Abu Dhabi",
    location: "Abu Dhabi Mall & Dalma Mall, Abu Dhabi, UAE",
    year: "2025",
    category: "Entertainment Lighting",
    hero: "/images/family entertainment/86.webp",
    description: "Family entertainment lighting across two Abu Dhabi mall venues, combining bright general illumination for the play areas with dynamic colour effects at the ride and activity zones.",
    gallery: ["/images/family entertainment/86.webp", "/images/family entertainment/87.webp", "/images/entertainment/3.webp"],
  },

  {
    id: 27,
    slug: "clay-coffee-boutique",
    name: "Clay Coffee Boutique",
    metaTitle: "Clay Coffee Boutique Lighting, Riyadh",
    location: "Roshn Front, Riyadh, Saudi Arabia",
    year: "2025",
    category: "Hospitality & Hotel Lighting",
    hero: "/images/hospitality/rest_pinhole.webp",
    description: "A speciality coffee boutique scheme at Roshn Front, using tightly controlled pinhole and accent fittings over the bar and retail shelving against a warm, low-level ambient base.",
    gallery: ["/images/hospitality/rest_pinhole.webp", "/images/hospitality/8.webp", "/images/hospitality/9.webp"],
  },

  {
    id: 28,
    slug: "gym-nation-khalidiya",
    name: "GymNation",
    metaTitle: "GymNation Gym Lighting, Abu Dhabi",
    location: "Khalidiyah Mall, Abu Dhabi, UAE",
    year: "2025",
    category: "Fitness & Wellness Lighting",
    hero: "/images/indoor/office_acoustic.webp",
    description: "Large-format gym lighting for the Khalidiyah Mall club, covering the cardio and free-weights floors and the group class studios, with separate scenes for high-energy classes and recovery zones.",
    gallery: ["/images/indoor/office_acoustic.webp", "/images/led-screen/1.webp", "/images/stretch-ceiling/IMG_0127.webp"],
  },

  {
    id: 29,
    slug: "villa-emirates-hills",
    name: "Private Villa — Emirates Hills",
    metaTitle: "Private Villa Lighting, Emirates Hills",
    location: "Emirates Hills 3, Dubai, UAE",
    year: "2025",
    category: "Luxury Residential Lighting",
    hero: "/images/indoor/6.webp",
    description: "A bespoke residential lighting design for an Emirates Hills villa, integrating architectural cove and recessed detailing with decorative fixtures and controlled exterior illumination.",
    gallery: ["/images/indoor/6.webp", "/images/indoor/7.webp", "/images/facade/8.webp"],
  },

  {
    id: 30,
    slug: "octave-fashion",
    name: "Octave Fashion",
    metaTitle: "Octave Fashion Store Lighting, UAE",
    location: "Sharjah Central Mall & Grand Mall, Al Qusais, UAE",
    year: "2025",
    category: "Retail & Showroom Lighting",
    hero: "/images/Retail Lighting/7.webp",
    description: "Menswear retail lighting for two stores of the business-casual fashion label, with accent light on garment walls and mannequins and neutral, high-fidelity light at the fitting rooms.",
    gallery: ["/images/Retail Lighting/7.webp", "/images/led-screen/3.webp", "/images/stretch-ceiling/4E0995DA-5A01-4BAE-BCAF-4F3896703E59.webp"],
  },
];

export default projects;