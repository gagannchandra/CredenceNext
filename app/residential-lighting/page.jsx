import ResidentialLighting from "@/lib_src/pages/ResidentialLighting";

export const metadata = {
  title: 'Luxury Residential Lighting Solutions',
  description: 'Bespoke luxury residential and villa lighting design in Dubai. Architectural cove lighting, smart home automation, high-CRI fixtures, and ambient layering.',
  alternates: {
    canonical: "https://www.credencelighting.com/residential-lighting",
  },
  openGraph: {
    title: 'Luxury Residential Lighting Solutions · Credence Lighting',
    description: 'Bespoke luxury residential and villa lighting design in Dubai. Architectural cove lighting, smart home automation, high-CRI fixtures, and ambient layering.',
    url: "https://www.credencelighting.com/residential-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Luxury Residential Lighting Solutions · Credence Lighting',
    description: 'Bespoke luxury residential and villa lighting design in Dubai. Architectural cove lighting, smart home automation, high-CRI fixtures, and ambient layering.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <ResidentialLighting />;
}
