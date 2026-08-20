import LightingShowroomDubai from "@/lib_src/pages/LightingShowroomDubai";

export const metadata = {
  title: 'Lighting Showroom in Dubai',
  description: "Visit the Credence Lighting architectural showroom in Dubai Investment Park (DIP 1). Experience working luminaire displays and smart lighting controls.",
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-showroom-dubai",
  },
  openGraph: {
    title: 'Lighting Showroom in Dubai · Credence Lighting',
    description: "Visit the Credence Lighting architectural showroom in Dubai Investment Park (DIP 1). Experience working luminaire displays and smart lighting controls.",
    url: "https://www.credencelighting.com/lighting-showroom-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Showroom in Dubai · Credence Lighting',
    description: "Visit the Credence Lighting architectural showroom in Dubai Investment Park (DIP 1). Experience working luminaire displays and smart lighting controls.",
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LightingShowroomDubai />;
}
