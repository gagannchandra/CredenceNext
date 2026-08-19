import Blog from "@/lib_src/pages/Blog";

export const metadata = {
  title: 'Lighting Design Insights | Credence Lighting Blog',
  description: 'Stay updated on the latest architectural lighting trends, technology, and design guides from our experts in Dubai.',
  alternates: {
    canonical: "https://credencelighting.com/blog",
  },
  openGraph: {
    title: 'Lighting Design Insights | Credence Lighting Blog',
    description: 'Stay updated on the latest architectural lighting trends, technology, and design guides from our experts in Dubai.',
    url: "https://credencelighting.com/blog",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Design Insights | Credence Lighting Blog',
    description: 'Stay updated on the latest architectural lighting trends, technology, and design guides from our experts in Dubai.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Blog />;
}
