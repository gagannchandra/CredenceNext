import LightingCompanyDubai from "@/lib_src/pages/LightingCompanyDubai";

export const metadata = {
  title: 'Lighting Company Dubai',
  description: 'Credence Lighting is an architectural and commercial lighting company in Dubai, UAE. Design, supply, and installation for luxury projects across GCC.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-company-dubai",
  },
  openGraph: {
    title: 'Lighting Company Dubai · Credence Lighting',
    description: 'Credence Lighting is an architectural and commercial lighting company in Dubai, UAE. Design, supply, and installation for luxury projects across GCC.',
    url: "https://www.credencelighting.com/lighting-company-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Company Dubai · Credence Lighting',
    description: 'Credence Lighting is an architectural and commercial lighting company in Dubai, UAE. Design, supply, and installation for luxury projects across GCC.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LightingCompanyDubai />;
}
