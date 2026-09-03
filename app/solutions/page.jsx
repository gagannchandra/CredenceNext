import Solutions from "@/lib_src/pages/Solutions";

export const metadata = {
  title: 'Sectors',
  description: 'Comprehensive architectural, commercial, hospitality, and residential lighting solutions engineered for superior performance and elegance across the UAE.',
  alternates: {
    canonical: "https://www.credencelighting.com/solutions",
  },
  openGraph: {
    title: 'Sectors · Credence Lighting',
    description: 'Comprehensive architectural, commercial, hospitality, and residential lighting solutions engineered for superior performance and elegance across the UAE.',
    url: "https://www.credencelighting.com/solutions",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Sectors · Credence Lighting',
    description: 'Comprehensive architectural, commercial, hospitality, and residential lighting solutions engineered for superior performance and elegance across the UAE.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Solutions />;
}
