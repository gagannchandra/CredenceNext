import LocationAjman from "@/lib_src/pages/LocationAjman";

export const metadata = {
  title: 'Lighting Solutions in Ajman | Credence Lighting',
  description: 'Cost-effective, high-quality lighting solutions for Ajman, UAQ, and the Northern Emirates. We supply residential, commercial, and industrial lighting projects.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-solutions-ajman",
  },
  openGraph: {
    title: 'Lighting Solutions in Ajman | Credence Lighting',
    description: 'Cost-effective, high-quality lighting solutions for Ajman, UAQ, and the Northern Emirates. We supply residential, commercial, and industrial lighting projects.',
    url: "https://credencelighting.com/lighting-solutions-ajman",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Solutions in Ajman | Credence Lighting',
    description: 'Cost-effective, high-quality lighting solutions for Ajman, UAQ, and the Northern Emirates. We supply residential, commercial, and industrial lighting projects.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationAjman />;
}
