import About from "@/lib_src/pages/About";

export const metadata = {
  title: 'About Credence Lighting | Premium Lighting Experts Dubai',
  description: '10+ years of experience delivering premium lighting solutions. Aesthetics meets functionality.',
  alternates: {
    canonical: "https://credencelighting.com/about",
  },
  openGraph: {
    title: 'About Credence Lighting | Premium Lighting Experts Dubai',
    description: '10+ years of experience delivering premium lighting solutions. Aesthetics meets functionality.',
    url: "https://credencelighting.com/about",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Credence Lighting | Premium Lighting Experts Dubai',
    description: '10+ years of experience delivering premium lighting solutions. Aesthetics meets functionality.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <About />;
}
