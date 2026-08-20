import LocationSharjah from "@/lib_src/pages/LocationSharjah";

export const metadata = {
  title: 'Lighting Companies in Sharjah',
  description: 'Commercial, architectural, and heritage lighting solutions in Sharjah. Energy-efficient LED luminaires and lighting controls for projects across the emirate.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-companies-sharjah",
  },
  openGraph: {
    title: 'Lighting Companies in Sharjah · Credence Lighting',
    description: 'Commercial, architectural, and heritage lighting solutions in Sharjah. Energy-efficient LED luminaires and lighting controls for projects across the emirate.',
    url: "https://www.credencelighting.com/lighting-companies-sharjah",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Sharjah · Credence Lighting',
    description: 'Commercial, architectural, and heritage lighting solutions in Sharjah. Energy-efficient LED luminaires and lighting controls for projects across the emirate.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationSharjah />;
}
