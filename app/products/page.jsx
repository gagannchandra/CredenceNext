import Products from "@/lib_src/pages/Products";

export const metadata = {
  title: 'Lighting Products Dubai | Indoor, Outdoor & Architectural Lighting',
  description: 'Explore our premium collection of indoor, outdoor, hospitality, and facade lighting fixtures.',
  alternates: {
    canonical: "https://credencelighting.com/products",
  },
  openGraph: {
    title: 'Lighting Products Dubai | Indoor, Outdoor & Architectural Lighting',
    description: 'Explore our premium collection of indoor, outdoor, hospitality, and facade lighting fixtures.',
    url: "https://credencelighting.com/products",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Products Dubai | Indoor, Outdoor & Architectural Lighting',
    description: 'Explore our premium collection of indoor, outdoor, hospitality, and facade lighting fixtures.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Products />;
}
