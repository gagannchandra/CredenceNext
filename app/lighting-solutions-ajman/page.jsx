import LocationAjman from "@/lib_src/pages/LocationAjman";

export const metadata = {
  title: 'Lighting Solutions in Ajman',
  description: 'Premier architectural and commercial LED lighting design and supply services in Ajman, UAE for retail, hospitality, and residential properties.',
  alternates: {
    canonical: "https://www.credencelighting.com/lighting-solutions-ajman",
  },
  openGraph: {
    title: 'Lighting Solutions in Ajman · Credence Lighting',
    description: 'Premier architectural and commercial LED lighting design and supply services in Ajman, UAE for retail, hospitality, and residential properties.',
    url: "https://www.credencelighting.com/lighting-solutions-ajman",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Solutions in Ajman · Credence Lighting',
    description: 'Premier architectural and commercial LED lighting design and supply services in Ajman, UAE for retail, hospitality, and residential properties.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationAjman />;
}
