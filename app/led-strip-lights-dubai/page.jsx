import LEDStripLightsDubai from "@/lib_src/pages/LEDStripLightsDubai";

export const metadata = {
  title: 'LED Strip Lights Dubai · Credence Lighting',
  description: 'Premium LED strip lights in Dubai — flexible strips, neon flex, RGBW, IP-rated outdoor strips, and high-density architectural profiles. Cut-to-length service available.',
  alternates: {
    canonical: "https://credencelighting.com/led-strip-lights-dubai",
  },
  openGraph: {
    title: 'LED Strip Lights Dubai · Credence Lighting',
    description: 'Premium LED strip lights in Dubai — flexible strips, neon flex, RGBW, IP-rated outdoor strips, and high-density architectural profiles. Cut-to-length service available.',
    url: "https://credencelighting.com/led-strip-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'LED Strip Lights Dubai · Credence Lighting',
    description: 'Premium LED strip lights in Dubai — flexible strips, neon flex, RGBW, IP-rated outdoor strips, and high-density architectural profiles. Cut-to-length service available.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LEDStripLightsDubai />;
}
