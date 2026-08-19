import Projects from "@/lib_src/pages/Projects";

export const metadata = {
  title: 'Featured Projects | Credence Lighting Dubai',
  description: 'View our featured lighting installations across architectural, entertainment, and retail sectors.',
  alternates: {
    canonical: "https://credencelighting.com/projects",
  },
  openGraph: {
    title: 'Featured Projects | Credence Lighting Dubai',
    description: 'View our featured lighting installations across architectural, entertainment, and retail sectors.',
    url: "https://credencelighting.com/projects",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Featured Projects | Credence Lighting Dubai',
    description: 'View our featured lighting installations across architectural, entertainment, and retail sectors.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Projects />;
}
