import AudioSolutions from "@/lib_src/pages/AudioSolutions";

export const metadata = {
  title: 'Commercial Architectural Audio Systems',
  description: 'Premium commercial audio, sound reinforcement, and acoustic systems for hospitality, luxury retail, and corporate venues in Dubai and GCC.',
  alternates: {
    canonical: "https://www.credencelighting.com/audio-solutions",
  },
  openGraph: {
    title: 'Commercial Architectural Audio Systems · Credence Lighting',
    description: 'Premium commercial audio, sound reinforcement, and acoustic systems for hospitality, luxury retail, and corporate venues in Dubai and GCC.',
    url: "https://www.credencelighting.com/audio-solutions",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Commercial Architectural Audio Systems · Credence Lighting',
    description: 'Premium commercial audio, sound reinforcement, and acoustic systems for hospitality, luxury retail, and corporate venues in Dubai and GCC.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <AudioSolutions />;
}
