import Gallery from "@/lib_src/pages/Gallery";

export const metadata = {
  title: 'Lighting Design Gallery',
  description: 'Visual gallery of luxury architectural lighting projects, bespoke fixture installations, and innovative illumination concepts in Dubai and UAE.',
  alternates: {
    canonical: "https://www.credencelighting.com/gallery",
  },
  openGraph: {
    title: 'Lighting Design Gallery · Credence Lighting',
    description: 'Visual gallery of luxury architectural lighting projects, bespoke fixture installations, and innovative illumination concepts in Dubai and UAE.',
    url: "https://www.credencelighting.com/gallery",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Design Gallery · Credence Lighting',
    description: 'Visual gallery of luxury architectural lighting projects, bespoke fixture installations, and innovative illumination concepts in Dubai and UAE.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Gallery />;
}
