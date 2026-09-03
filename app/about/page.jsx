import About from "@/lib_src/pages/About";

export const metadata = {
  title: 'Our Lighting Story',
  description: 'Learn about Credence Lighting, premier architectural and commercial lighting consultants in Dubai, UAE, delivering luxury lighting projects across the GCC.',
  alternates: {
    canonical: "https://www.credencelighting.com/about",
  },
  openGraph: {
    title: 'Our Lighting Story · Credence Lighting',
    description: 'Learn about Credence Lighting, premier architectural and commercial lighting consultants in Dubai, UAE, delivering luxury lighting projects across the GCC.',
    url: "https://www.credencelighting.com/about",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Lighting Story · Credence Lighting',
    description: 'Learn about Credence Lighting, premier architectural and commercial lighting consultants in Dubai, UAE, delivering luxury lighting projects across the GCC.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <About />;
}
