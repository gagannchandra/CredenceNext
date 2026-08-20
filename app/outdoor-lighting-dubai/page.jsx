import OutdoorLightingDubai from "@/lib_src/pages/OutdoorLightingDubai";

export const metadata = {
  title: 'Outdoor & Landscape Lighting Dubai',
  description: 'IP65/IP67 architectural outdoor and landscape lighting in Dubai. In-ground uplights, bollards, step lights, facade luminaires, and underwater pool lights.',
  alternates: {
    canonical: "https://www.credencelighting.com/outdoor-lighting-dubai",
  },
  openGraph: {
    title: 'Outdoor & Landscape Lighting Dubai · Credence Lighting',
    description: 'IP65/IP67 architectural outdoor and landscape lighting in Dubai. In-ground uplights, bollards, step lights, facade luminaires, and underwater pool lights.',
    url: "https://www.credencelighting.com/outdoor-lighting-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Outdoor & Landscape Lighting Dubai · Credence Lighting',
    description: 'IP65/IP67 architectural outdoor and landscape lighting in Dubai. In-ground uplights, bollards, step lights, facade luminaires, and underwater pool lights.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <OutdoorLightingDubai />;
}
