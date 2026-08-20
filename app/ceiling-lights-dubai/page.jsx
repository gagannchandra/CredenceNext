import CeilingLightsDubai from "@/lib_src/pages/CeilingLightsDubai";

export const metadata = {
  title: 'Architectural Ceiling Lights Dubai',
  description: 'Premium architectural LED ceiling lights in Dubai. Recessed downlights, trimless plaster-in profiles, surface panels, and magnetic track systems.',
  alternates: {
    canonical: "https://www.credencelighting.com/ceiling-lights-dubai",
  },
  openGraph: {
    title: 'Architectural Ceiling Lights Dubai · Credence Lighting',
    description: 'Premium architectural LED ceiling lights in Dubai. Recessed downlights, trimless plaster-in profiles, surface panels, and magnetic track systems.',
    url: "https://www.credencelighting.com/ceiling-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Architectural Ceiling Lights Dubai · Credence Lighting',
    description: 'Premium architectural LED ceiling lights in Dubai. Recessed downlights, trimless plaster-in profiles, surface panels, and magnetic track systems.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <CeilingLightsDubai />;
}
