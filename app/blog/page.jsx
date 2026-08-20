import Blog from "@/lib_src/pages/Blog";

export const metadata = {
  title: 'Insights & Articles',
  description: 'Expert lighting design articles, technical guides, regulatory standards, and architectural illumination trends from Credence Lighting in Dubai.',
  alternates: {
    canonical: "https://www.credencelighting.com/blog",
  },
  openGraph: {
    title: 'Insights & Articles · Credence Lighting',
    description: 'Expert lighting design articles, technical guides, regulatory standards, and architectural illumination trends from Credence Lighting in Dubai.',
    url: "https://www.credencelighting.com/blog",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Insights & Articles · Credence Lighting',
    description: 'Expert lighting design articles, technical guides, regulatory standards, and architectural illumination trends from Credence Lighting in Dubai.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Blog />;
}
