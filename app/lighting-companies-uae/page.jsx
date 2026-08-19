import LocationUAE from "@/lib_src/pages/LocationUAE";

export const metadata = {
  title: 'Top Lighting Companies in UAE | Credence Lighting',
  description: 'Credence Lighting is one of the premier lighting companies in the UAE. We provide comprehensive LED lighting design, supply, and integration across all emirates.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-companies-uae",
  },
  openGraph: {
    title: 'Top Lighting Companies in UAE | Credence Lighting',
    description: 'Credence Lighting is one of the premier lighting companies in the UAE. We provide comprehensive LED lighting design, supply, and integration across all emirates.',
    url: "https://credencelighting.com/lighting-companies-uae",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Top Lighting Companies in UAE | Credence Lighting',
    description: 'Credence Lighting is one of the premier lighting companies in the UAE. We provide comprehensive LED lighting design, supply, and integration across all emirates.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationUAE />;
}
