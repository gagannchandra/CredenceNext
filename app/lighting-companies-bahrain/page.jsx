import LocationBahrain from "@/lib_src/pages/LocationBahrain";

export const metadata = {
  title: 'Lighting Companies in Bahrain | Credence Lighting',
  description: 'Specialized architectural lighting supplier for Bahrain. We provide complete LED lighting solutions for commercial towers, luxury hospitality, and high-end residential projects.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-companies-bahrain",
  },
  openGraph: {
    title: 'Lighting Companies in Bahrain | Credence Lighting',
    description: 'Specialized architectural lighting supplier for Bahrain. We provide complete LED lighting solutions for commercial towers, luxury hospitality, and high-end residential projects.',
    url: "https://credencelighting.com/lighting-companies-bahrain",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Bahrain | Credence Lighting',
    description: 'Specialized architectural lighting supplier for Bahrain. We provide complete LED lighting solutions for commercial towers, luxury hospitality, and high-end residential projects.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationBahrain />;
}
