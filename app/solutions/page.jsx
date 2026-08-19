import Solutions from "@/lib_src/pages/Solutions";

export const metadata = {
  title: 'Lighting Solutions | Credence Lighting Dubai',
  description: 'Bespoke architectural, commercial, and hospitality lighting solutions tailored to your space.',
  alternates: {
    canonical: "https://credencelighting.com/solutions",
  },
  openGraph: {
    title: 'Lighting Solutions | Credence Lighting Dubai',
    description: 'Bespoke architectural, commercial, and hospitality lighting solutions tailored to your space.',
    url: "https://credencelighting.com/solutions",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Solutions | Credence Lighting Dubai',
    description: 'Bespoke architectural, commercial, and hospitality lighting solutions tailored to your space.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Solutions />;
}
