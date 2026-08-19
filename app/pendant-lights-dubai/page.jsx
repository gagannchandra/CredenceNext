import PendantLightsDubai from "@/lib_src/pages/PendantLightsDubai";

export const metadata = {
  title: 'Pendant Lights Dubai · Credence Lighting',
  description: 'Premium pendant lights and hanging fixtures for Dubai homes, hotels, and commercial spaces. Statement pendants, custom designs, and kitchen island lighting.',
  alternates: {
    canonical: "https://credencelighting.com/pendant-lights-dubai",
  },
  openGraph: {
    title: 'Pendant Lights Dubai · Credence Lighting',
    description: 'Premium pendant lights and hanging fixtures for Dubai homes, hotels, and commercial spaces. Statement pendants, custom designs, and kitchen island lighting.',
    url: "https://credencelighting.com/pendant-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Pendant Lights Dubai · Credence Lighting',
    description: 'Premium pendant lights and hanging fixtures for Dubai homes, hotels, and commercial spaces. Statement pendants, custom designs, and kitchen island lighting.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <PendantLightsDubai />;
}
