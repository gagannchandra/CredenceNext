import FacadeLighting from "@/lib_src/pages/FacadeLighting";

export const metadata = {
  title: 'Building Facade Lighting | Credence Lighting',
  description: 'Dynamic and architectural facade lighting solutions that transform buildings into iconic landmarks across the UAE and Saudi Arabia.',
  alternates: {
    canonical: "https://credencelighting.com/facade-lighting",
  },
  openGraph: {
    title: 'Building Facade Lighting | Credence Lighting',
    description: 'Dynamic and architectural facade lighting solutions that transform buildings into iconic landmarks across the UAE and Saudi Arabia.',
    url: "https://credencelighting.com/facade-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Building Facade Lighting | Credence Lighting',
    description: 'Dynamic and architectural facade lighting solutions that transform buildings into iconic landmarks across the UAE and Saudi Arabia.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <FacadeLighting />;
}
