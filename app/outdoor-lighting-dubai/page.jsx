import OutdoorLightingDubai from "@/lib_src/pages/OutdoorLightingDubai";

export const metadata = {
  title: 'Outdoor Lighting Dubai · Credence Lighting',
  description: 'Premium outdoor lighting in Dubai — garden lights, wall lights, facade fixtures, and landscape lighting. IP-rated for Gulf climate. Visit our showroom.',
  alternates: {
    canonical: "https://credencelighting.com/outdoor-lighting-dubai",
  },
  openGraph: {
    title: 'Outdoor Lighting Dubai · Credence Lighting',
    description: 'Premium outdoor lighting in Dubai — garden lights, wall lights, facade fixtures, and landscape lighting. IP-rated for Gulf climate. Visit our showroom.',
    url: "https://credencelighting.com/outdoor-lighting-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Outdoor Lighting Dubai · Credence Lighting',
    description: 'Premium outdoor lighting in Dubai — garden lights, wall lights, facade fixtures, and landscape lighting. IP-rated for Gulf climate. Visit our showroom.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <OutdoorLightingDubai />;
}
