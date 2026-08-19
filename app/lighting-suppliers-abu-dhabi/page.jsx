import LocationAbuDhabi from "@/lib_src/pages/LocationAbuDhabi";

export const metadata = {
  title: 'Lighting Suppliers in Abu Dhabi | Credence Lighting',
  description: 'Credence Lighting is a premier lighting supplier and design firm serving Abu Dhabi and Al Ain. We provide bespoke architectural, commercial, and hospitality lighting solutions.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-suppliers-abu-dhabi",
  },
  openGraph: {
    title: 'Lighting Suppliers in Abu Dhabi | Credence Lighting',
    description: 'Credence Lighting is a premier lighting supplier and design firm serving Abu Dhabi and Al Ain. We provide bespoke architectural, commercial, and hospitality lighting solutions.',
    url: "https://credencelighting.com/lighting-suppliers-abu-dhabi",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Suppliers in Abu Dhabi | Credence Lighting',
    description: 'Credence Lighting is a premier lighting supplier and design firm serving Abu Dhabi and Al Ain. We provide bespoke architectural, commercial, and hospitality lighting solutions.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationAbuDhabi />;
}
