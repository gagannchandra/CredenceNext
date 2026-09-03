import LocationKSA from "@/lib_src/pages/LocationKSA";

export const metadata = {
  title: 'Lighting in Saudi Arabia',
  description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-saudi-arabia",
    // Next.js 16 shallow-merges metadata per key, so this object replaces
    // (not extends) the root layout's `alternates` - the hreflang cluster
    // has to be repeated on every page in it for reciprocity.
    languages: {
      "en": "https://www.credencelighting.com/",
      "en-AE": "https://www.credencelighting.com/",
      "en-SA": "https://www.credencelighting.com/lighting-companies-saudi-arabia",
      "en-BH": "https://www.credencelighting.com/lighting-companies-bahrain",
      "ar-AE": "https://www.credencelighting.com/",
      "ar-SA": "https://www.credencelighting.com/lighting-companies-saudi-arabia",
      "x-default": "https://www.credencelighting.com/",
    },
  },
  openGraph: {
    title: 'Lighting in Saudi Arabia · Credence Lighting',
    description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
    url: "https://www.credencelighting.com/lighting-companies-saudi-arabia",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting in Saudi Arabia · Credence Lighting',
    description: 'SASO-compliant architectural, commercial, and giga-project lighting supply and design across Riyadh, Jeddah, and Saudi Arabia (KSA).',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationKSA />;
}
