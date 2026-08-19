import AudioSolutions from "@/lib_src/pages/AudioSolutions";

export const metadata = {
  title: 'Commercial Audio & Sound Systems | Credence Lighting',
  description: 'Premium commercial audio and sound systems for hospitality, retail, and corporate environments. Integrated AV solutions across the UAE and GCC.',
  alternates: {
    canonical: "https://credencelighting.com/audio-solutions",
  },
  openGraph: {
    title: 'Commercial Audio & Sound Systems | Credence Lighting',
    description: 'Premium commercial audio and sound systems for hospitality, retail, and corporate environments. Integrated AV solutions across the UAE and GCC.',
    url: "https://credencelighting.com/audio-solutions",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Commercial Audio & Sound Systems | Credence Lighting',
    description: 'Premium commercial audio and sound systems for hospitality, retail, and corporate environments. Integrated AV solutions across the UAE and GCC.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <AudioSolutions />;
}
