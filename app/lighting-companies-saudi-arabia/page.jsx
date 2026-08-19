import LocationKSA from "@/lib_src/pages/LocationKSA";

export const metadata = {
  title: 'Lighting Companies in Saudi Arabia (KSA) | Credence Lighting',
  description: 'Specialist lighting supplier supporting Vision 2030 projects across Saudi Arabia (KSA). We deliver architectural, commercial, and hospitality LED lighting to Riyadh, Jeddah, and NEOM.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-companies-saudi-arabia",
  },
  openGraph: {
    title: 'Lighting Companies in Saudi Arabia (KSA) | Credence Lighting',
    description: 'Specialist lighting supplier supporting Vision 2030 projects across Saudi Arabia (KSA). We deliver architectural, commercial, and hospitality LED lighting to Riyadh, Jeddah, and NEOM.',
    url: "https://credencelighting.com/lighting-companies-saudi-arabia",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Saudi Arabia (KSA) | Credence Lighting',
    description: 'Specialist lighting supplier supporting Vision 2030 projects across Saudi Arabia (KSA). We deliver architectural, commercial, and hospitality LED lighting to Riyadh, Jeddah, and NEOM.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationKSA />;
}
