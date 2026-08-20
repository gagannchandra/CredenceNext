import Brands from "@/lib_src/pages/Brands";

export const metadata = {
  title: 'Client Brands & Partners',
  description: 'Visionary architects, developers, luxury hospitality operators, and premium global lighting manufacturing partners collaborated with Credence Lighting.',
  alternates: {
    canonical: "https://www.credencelighting.com/brands",
  },
  openGraph: {
    title: 'Client Brands & Partners · Credence Lighting',
    description: 'Visionary architects, developers, luxury hospitality operators, and premium global lighting manufacturing partners collaborated with Credence Lighting.',
    url: "https://www.credencelighting.com/brands",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Client Brands & Partners · Credence Lighting',
    description: 'Visionary architects, developers, luxury hospitality operators, and premium global lighting manufacturing partners collaborated with Credence Lighting.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Brands />;
}
