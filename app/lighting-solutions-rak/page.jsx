import LocationRAK from "@/lib_src/pages/LocationRAK";

export const metadata = {
  title: 'Lighting Companies in Ras Al Khaimah | Credence Lighting',
  description: "Credence Lighting is a trusted lighting company in Ras Al Khaimah. We supply IP-rated landscape, facade, and luxury hotel lighting for RAK's booming tourism sector.",
  alternates: {
    canonical: "https://credencelighting.com/lighting-solutions-rak",
  },
  openGraph: {
    title: 'Lighting Companies in Ras Al Khaimah | Credence Lighting',
    description: "Credence Lighting is a trusted lighting company in Ras Al Khaimah. We supply IP-rated landscape, facade, and luxury hotel lighting for RAK's booming tourism sector.",
    url: "https://credencelighting.com/lighting-solutions-rak",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Ras Al Khaimah | Credence Lighting',
    description: "Credence Lighting is a trusted lighting company in Ras Al Khaimah. We supply IP-rated landscape, facade, and luxury hotel lighting for RAK's booming tourism sector.",
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationRAK />;
}
