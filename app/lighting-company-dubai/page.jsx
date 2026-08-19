import LightingCompanyDubai from "@/lib_src/pages/LightingCompanyDubai";

export const metadata = {
  title: 'Lighting Company in Dubai · Credence Lighting',
  description: 'Credence Lighting is a leading lighting company in Dubai providing architectural, commercial, and hospitality lighting. 1000+ projects, 10+ years, GCC-wide delivery.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-company-dubai",
  },
  openGraph: {
    title: 'Lighting Company in Dubai · Credence Lighting',
    description: 'Credence Lighting is a leading lighting company in Dubai providing architectural, commercial, and hospitality lighting. 1000+ projects, 10+ years, GCC-wide delivery.',
    url: "https://credencelighting.com/lighting-company-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Company in Dubai · Credence Lighting',
    description: 'Credence Lighting is a leading lighting company in Dubai providing architectural, commercial, and hospitality lighting. 1000+ projects, 10+ years, GCC-wide delivery.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LightingCompanyDubai />;
}
