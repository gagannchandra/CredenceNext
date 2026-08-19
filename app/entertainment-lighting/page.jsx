import EntertainmentLighting from "@/lib_src/pages/EntertainmentLighting";

export const metadata = {
  title: 'Entertainment & Theme Park Lighting | Credence Lighting',
  description: 'Dynamic, programmable lighting solutions for entertainment venues, cinemas, theme parks, and arenas in the UAE and Saudi Arabia.',
  alternates: {
    canonical: "https://credencelighting.com/entertainment-lighting",
  },
  openGraph: {
    title: 'Entertainment & Theme Park Lighting | Credence Lighting',
    description: 'Dynamic, programmable lighting solutions for entertainment venues, cinemas, theme parks, and arenas in the UAE and Saudi Arabia.',
    url: "https://credencelighting.com/entertainment-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Entertainment & Theme Park Lighting | Credence Lighting',
    description: 'Dynamic, programmable lighting solutions for entertainment venues, cinemas, theme parks, and arenas in the UAE and Saudi Arabia.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <EntertainmentLighting />;
}
