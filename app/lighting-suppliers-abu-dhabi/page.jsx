import LocationAbuDhabi from "@/lib_src/pages/LocationAbuDhabi";

export const metadata = {
  title: 'Lighting Suppliers in Abu Dhabi',
  description: 'Estidama-compliant architectural and commercial lighting suppliers in Abu Dhabi. Downlights, linear LEDs, exterior floodlights, and smart control systems.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-suppliers-abu-dhabi",
  },
  openGraph: {
    title: 'Lighting Suppliers in Abu Dhabi · Credence Lighting',
    description: 'Estidama-compliant architectural and commercial lighting suppliers in Abu Dhabi. Downlights, linear LEDs, exterior floodlights, and smart control systems.',
    url: "https://www.credencelighting.com/lighting-suppliers-abu-dhabi",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Suppliers in Abu Dhabi · Credence Lighting',
    description: 'Estidama-compliant architectural and commercial lighting suppliers in Abu Dhabi. Downlights, linear LEDs, exterior floodlights, and smart control systems.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationAbuDhabi />;
}
