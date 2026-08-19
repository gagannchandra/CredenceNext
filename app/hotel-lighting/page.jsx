import HotelLighting from "@/lib_src/pages/HotelLighting";

export const metadata = {
  title: 'Hotel Lighting Solutions & Suppliers | Credence Lighting',
  description: 'Bespoke hotel lighting solutions designed to elevate guest experiences. We provide luxury hospitality lighting design, supply, and commissioning across the GCC.',
  alternates: {
    canonical: "https://credencelighting.com/hotel-lighting",
  },
  openGraph: {
    title: 'Hotel Lighting Solutions & Suppliers | Credence Lighting',
    description: 'Bespoke hotel lighting solutions designed to elevate guest experiences. We provide luxury hospitality lighting design, supply, and commissioning across the GCC.',
    url: "https://credencelighting.com/hotel-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Hotel Lighting Solutions & Suppliers | Credence Lighting',
    description: 'Bespoke hotel lighting solutions designed to elevate guest experiences. We provide luxury hospitality lighting design, supply, and commissioning across the GCC.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <HotelLighting />;
}
