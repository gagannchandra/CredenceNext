import Products from "@/lib_src/pages/Products";

export const metadata = {
  title: 'Services',
  description: 'Explore our architectural lighting portfolio: indoor downlights, linear profiles, outdoor landscape fixtures, facade systems, and smart controls in Dubai.',
  alternates: {
    canonical: "https://www.credencelighting.com/products",
  },
  openGraph: {
    title: 'Services · Credence Lighting',
    description: 'Explore our architectural lighting portfolio: indoor downlights, linear profiles, outdoor landscape fixtures, facade systems, and smart controls in Dubai.',
    url: "https://www.credencelighting.com/products",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Services · Credence Lighting',
    description: 'Explore our architectural lighting portfolio: indoor downlights, linear profiles, outdoor landscape fixtures, facade systems, and smart controls in Dubai.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Products />;
}
