import Downloads from "@/lib_src/pages/Downloads";

export const metadata = {
  title: 'Catalogues & Technical Specifications',
  description: 'Download product catalogues, photometric IES files, technical data sheets, and specification brochures from Credence Lighting in Dubai.',
  alternates: {
    canonical: "https://www.credencelighting.com/downloads",
  },
  openGraph: {
    title: 'Catalogues & Technical Specifications · Credence Lighting',
    description: 'Download product catalogues, photometric IES files, technical data sheets, and specification brochures from Credence Lighting in Dubai.',
    url: "https://www.credencelighting.com/downloads",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Catalogues & Technical Specifications · Credence Lighting',
    description: 'Download product catalogues, photometric IES files, technical data sheets, and specification brochures from Credence Lighting in Dubai.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Downloads />;
}
