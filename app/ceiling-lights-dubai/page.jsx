import CeilingLightsDubai from "@/lib_src/pages/CeilingLightsDubai";

export const metadata = {
  title: 'Ceiling Lights Dubai · Credence Lighting',
  description: 'Premium LED ceiling lights in Dubai — recessed downlights, surface panels, linear profiles, and decorative pendants. Visit our showroom or request a project quote.',
  alternates: {
    canonical: "https://credencelighting.com/ceiling-lights-dubai",
  },
  openGraph: {
    title: 'Ceiling Lights Dubai · Credence Lighting',
    description: 'Premium LED ceiling lights in Dubai — recessed downlights, surface panels, linear profiles, and decorative pendants. Visit our showroom or request a project quote.',
    url: "https://credencelighting.com/ceiling-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Ceiling Lights Dubai · Credence Lighting',
    description: 'Premium LED ceiling lights in Dubai — recessed downlights, surface panels, linear profiles, and decorative pendants. Visit our showroom or request a project quote.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <CeilingLightsDubai />;
}
