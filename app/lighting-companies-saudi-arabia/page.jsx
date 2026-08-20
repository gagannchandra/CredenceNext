import LocationKSA from "@/lib_src/pages/LocationKSA";

export const metadata = {
  title: 'Lighting Companies in Saudi Arabia',
  description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-saudi-arabia",
  },
  openGraph: {
    title: 'Lighting Companies in Saudi Arabia · Credence Lighting',
    description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
    url: "https://www.credencelighting.com/lighting-companies-saudi-arabia",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Saudi Arabia · Credence Lighting',
    description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationKSA />;
}
