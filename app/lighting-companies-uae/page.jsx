import LocationUAE from "@/lib_src/pages/LocationUAE";

export const metadata = {
  title: 'Lighting in UAE',
  description: 'Comprehensive architectural and commercial lighting solutions across the UAE. End-to-end lighting design, fixture supply, and installation in all emirates.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-uae",
  },
  openGraph: {
    title: 'Lighting in UAE · Credence Lighting',
    description: 'Comprehensive architectural and commercial lighting solutions across the UAE. End-to-end lighting design, fixture supply, and installation in all emirates.',
    url: "https://www.credencelighting.com/lighting-companies-uae",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting in UAE · Credence Lighting',
    description: 'Comprehensive architectural and commercial lighting solutions across the UAE. End-to-end lighting design, fixture supply, and installation in all emirates.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationUAE />;
}
