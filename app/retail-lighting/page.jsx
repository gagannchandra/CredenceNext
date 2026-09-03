import RetailLighting from "@/lib_src/pages/RetailLighting";

export const metadata = {
  title: 'Retail',
  description: 'High-CRI retail and luxury showroom lighting design in Dubai. Accent track lights, display illumination, and immersive visual merchandising systems.',
  alternates: {
    canonical: "https://www.credencelighting.com/retail-lighting",
  },
  openGraph: {
    title: 'Retail · Credence Lighting',
    description: 'High-CRI retail and luxury showroom lighting design in Dubai. Accent track lights, display illumination, and immersive visual merchandising systems.',
    url: "https://www.credencelighting.com/retail-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Retail · Credence Lighting',
    description: 'High-CRI retail and luxury showroom lighting design in Dubai. Accent track lights, display illumination, and immersive visual merchandising systems.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <RetailLighting />;
}
