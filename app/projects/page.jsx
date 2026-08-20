import Projects from "@/lib_src/pages/Projects";

export const metadata = {
  title: 'Portfolio & Case Studies',
  description: 'Browse our signature architectural, commercial, hospitality, and entertainment lighting installations across Dubai, UAE, and the GCC region.',
  alternates: {
    canonical: "https://www.credencelighting.com/projects",
  },
  openGraph: {
    title: 'Portfolio & Case Studies · Credence Lighting',
    description: 'Browse our signature architectural, commercial, hospitality, and entertainment lighting installations across Dubai, UAE, and the GCC region.',
    url: "https://www.credencelighting.com/projects",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Portfolio & Case Studies · Credence Lighting',
    description: 'Browse our signature architectural, commercial, hospitality, and entertainment lighting installations across Dubai, UAE, and the GCC region.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Projects />;
}
