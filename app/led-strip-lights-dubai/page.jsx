import LEDStripLightsDubai from "@/lib_src/pages/LEDStripLightsDubai";

export const metadata = {
  title: 'LED Strip Lights Dubai',
  description: 'High-density architectural LED strip lights in Dubai. Silicone neon flex, COB seamless strips, tunable white, and custom aluminum extrusion profiles.',
  alternates: {
    canonical: "https://www.credencelighting.com/led-strip-lights-dubai",
  },
  openGraph: {
    title: 'LED Strip Lights Dubai · Credence Lighting',
    description: 'High-density architectural LED strip lights in Dubai. Silicone neon flex, COB seamless strips, tunable white, and custom aluminum extrusion profiles.',
    url: "https://www.credencelighting.com/led-strip-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'LED Strip Lights Dubai · Credence Lighting',
    description: 'High-density architectural LED strip lights in Dubai. Silicone neon flex, COB seamless strips, tunable white, and custom aluminum extrusion profiles.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LEDStripLightsDubai />;
}
