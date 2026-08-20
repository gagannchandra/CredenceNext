import OfficeLighting from "@/lib_src/pages/OfficeLighting";

export const metadata = {
  title: 'Commercial Office Lighting Solutions',
  description: 'Human-centric commercial office lighting solutions in Dubai. Low-glare (UGR<19), energy-efficient, and DALI-controlled workspace lighting systems.',
  alternates: {
    canonical: "https://www.credencelighting.com/office-lighting",
  },
  openGraph: {
    title: 'Commercial Office Lighting Solutions · Credence Lighting',
    description: 'Human-centric commercial office lighting solutions in Dubai. Low-glare (UGR<19), energy-efficient, and DALI-controlled workspace lighting systems.',
    url: "https://www.credencelighting.com/office-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Commercial Office Lighting Solutions · Credence Lighting',
    description: 'Human-centric commercial office lighting solutions in Dubai. Low-glare (UGR<19), energy-efficient, and DALI-controlled workspace lighting systems.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <OfficeLighting />;
}
