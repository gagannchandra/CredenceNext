import LightingShowroomDubai from "@/lib_src/pages/LightingShowroomDubai";

export const metadata = {
  title: 'Lighting Showroom Dubai · Credence Lighting',
  description: "Visit Credence Lighting's showroom in Dubai Investment Park. See premium LED fixtures, control systems, and architectural lighting in working displays. Book a visit today.",
  alternates: {
    canonical: "https://credencelighting.com/lighting-showroom-dubai",
  },
  openGraph: {
    title: 'Lighting Showroom Dubai · Credence Lighting',
    description: "Visit Credence Lighting's showroom in Dubai Investment Park. See premium LED fixtures, control systems, and architectural lighting in working displays. Book a visit today.",
    url: "https://credencelighting.com/lighting-showroom-dubai",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Showroom Dubai · Credence Lighting',
    description: "Visit Credence Lighting's showroom in Dubai Investment Park. See premium LED fixtures, control systems, and architectural lighting in working displays. Book a visit today.",
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LightingShowroomDubai />;
}
