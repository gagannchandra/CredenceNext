import ResidentialLighting from "@/lib_src/pages/ResidentialLighting";

export const metadata = {
  title: 'Luxury Residential Lighting Design | Credence',
  description: 'Transform your home with bespoke luxury residential lighting. We specialize in villa lighting design, smart home integration, and premium fixture supply.',
  alternates: {
    canonical: "https://credencelighting.com/residential-lighting",
  },
  openGraph: {
    title: 'Luxury Residential Lighting Design | Credence',
    description: 'Transform your home with bespoke luxury residential lighting. We specialize in villa lighting design, smart home integration, and premium fixture supply.',
    url: "https://credencelighting.com/residential-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Luxury Residential Lighting Design | Credence',
    description: 'Transform your home with bespoke luxury residential lighting. We specialize in villa lighting design, smart home integration, and premium fixture supply.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <ResidentialLighting />;
}
