import Downloads from "@/lib_src/pages/Downloads";

export const metadata = {
  title: 'Lighting Catalogues & Downloads | Credence Lighting',
  description: 'Download our latest product catalogues, technical specifications, and brochures for premium lighting solutions in the UAE.',
  alternates: {
    canonical: "https://credencelighting.com/downloads",
  },
  openGraph: {
    title: 'Lighting Catalogues & Downloads | Credence Lighting',
    description: 'Download our latest product catalogues, technical specifications, and brochures for premium lighting solutions in the UAE.',
    url: "https://credencelighting.com/downloads",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Catalogues & Downloads | Credence Lighting',
    description: 'Download our latest product catalogues, technical specifications, and brochures for premium lighting solutions in the UAE.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Downloads />;
}
