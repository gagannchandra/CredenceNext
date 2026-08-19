import RetailLighting from "@/lib_src/pages/RetailLighting";

export const metadata = {
  title: 'Retail & Shop Lighting Design | Credence Lighting',
  description: 'Drive sales and enhance brand identity with our bespoke retail lighting solutions. High-CRI track lighting and architectural integration for showrooms.',
  alternates: {
    canonical: "https://credencelighting.com/retail-lighting",
  },
  openGraph: {
    title: 'Retail & Shop Lighting Design | Credence Lighting',
    description: 'Drive sales and enhance brand identity with our bespoke retail lighting solutions. High-CRI track lighting and architectural integration for showrooms.',
    url: "https://credencelighting.com/retail-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Retail & Shop Lighting Design | Credence Lighting',
    description: 'Drive sales and enhance brand identity with our bespoke retail lighting solutions. High-CRI track lighting and architectural integration for showrooms.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <RetailLighting />;
}
