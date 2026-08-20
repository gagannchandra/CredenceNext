import LocationBahrain from "@/lib_src/pages/LocationBahrain";

export const metadata = {
  title: 'Lighting Companies in Bahrain',
  description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-bahrain",
  },
  openGraph: {
    title: 'Lighting Companies in Bahrain · Credence Lighting',
    description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain.',
    url: "https://www.credencelighting.com/lighting-companies-bahrain",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Bahrain · Credence Lighting',
    description: 'Premium architectural, commercial, and facade lighting design and supply in Manama and across the Kingdom of Bahrain.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationBahrain />;
}
