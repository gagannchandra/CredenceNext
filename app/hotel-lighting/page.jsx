import HotelLighting from "@/lib_src/pages/HotelLighting";

export const metadata = {
  title: 'Hospitality',
  description: 'Bespoke hotel and resort lighting solutions in Dubai and GCC. Luxury hospitality lighting design, fixture supply, and intelligent scene controls.',
  alternates: {
    canonical: "https://www.credencelighting.com/hotel-lighting",
  },
  openGraph: {
    title: 'Hospitality · Credence Lighting',
    description: 'Bespoke hotel and resort lighting solutions in Dubai and GCC. Luxury hospitality lighting design, fixture supply, and intelligent scene controls.',
    url: "https://www.credencelighting.com/hotel-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Hospitality · Credence Lighting',
    description: 'Bespoke hotel and resort lighting solutions in Dubai and GCC. Luxury hospitality lighting design, fixture supply, and intelligent scene controls.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <HotelLighting />;
}
