import Gallery from "@/lib_src/pages/Gallery";

export const metadata = {
  title: 'Lighting Gallery | Inspiration & Installations',
  description: 'View our gallery of premium lighting installations and architectural lighting inspiration across Dubai and the UAE.',
  alternates: {
    canonical: "https://credencelighting.com/gallery",
  },
  openGraph: {
    title: 'Lighting Gallery | Inspiration & Installations',
    description: 'View our gallery of premium lighting installations and architectural lighting inspiration across Dubai and the UAE.',
    url: "https://credencelighting.com/gallery",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Gallery | Inspiration & Installations',
    description: 'View our gallery of premium lighting installations and architectural lighting inspiration across Dubai and the UAE.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Gallery />;
}
