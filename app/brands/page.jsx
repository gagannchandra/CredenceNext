import Brands from "@/lib_src/pages/Brands";

export const metadata = {
  title: 'Our Clients & Brands | Credence Lighting Dubai',
  description: 'Discover the visionary brands, architects, and developers we partner with across the UAE.',
  alternates: {
    canonical: "https://credencelighting.com/brands",
  },
  openGraph: {
    title: 'Our Clients & Brands | Credence Lighting Dubai',
    description: 'Discover the visionary brands, architects, and developers we partner with across the UAE.',
    url: "https://credencelighting.com/brands",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Clients & Brands | Credence Lighting Dubai',
    description: 'Discover the visionary brands, architects, and developers we partner with across the UAE.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Brands />;
}
