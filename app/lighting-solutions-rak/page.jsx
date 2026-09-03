import LocationRAK from "@/lib_src/pages/LocationRAK";

export const metadata = {
  title: 'Lighting in Ras Al Khaimah',
  description: "Resort, hospitality, and commercial architectural lighting solutions in Ras Al Khaimah (RAK). Coastal-rated outdoor and interior LED lighting systems.",
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-solutions-rak",
  },
  openGraph: {
    title: 'Lighting in Ras Al Khaimah · Credence Lighting',
    description: "Resort, hospitality, and commercial architectural lighting solutions in Ras Al Khaimah (RAK). Coastal-rated outdoor and interior LED lighting systems.",
    url: "https://www.credencelighting.com/lighting-solutions-rak",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting in Ras Al Khaimah · Credence Lighting',
    description: "Resort, hospitality, and commercial architectural lighting solutions in Ras Al Khaimah (RAK). Coastal-rated outdoor and interior LED lighting systems.",
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationRAK />;
}
