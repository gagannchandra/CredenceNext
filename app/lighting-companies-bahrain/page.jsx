import LocationBahrain from "@/lib_src/pages/LocationBahrain";

export const metadata = {
  title: 'Lighting in Bahrain',
  description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain, backed by 10+ years of GCC delivery.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-bahrain",
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
    title: 'Lighting in Bahrain · Credence Lighting',
    description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain, backed by 10+ years of GCC delivery.',
    url: "https://www.credencelighting.com/lighting-companies-bahrain",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting in Bahrain · Credence Lighting',
    description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain, backed by 10+ years of GCC delivery.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationBahrain />;
}
