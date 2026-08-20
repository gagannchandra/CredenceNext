import EntertainmentLighting from "@/lib_src/pages/EntertainmentLighting";

export const metadata = {
  title: 'Entertainment & Theme Park Lighting',
  description: 'Dynamic, programmable lighting and LED display solutions for theme parks, cinemas, arenas, and entertainment attractions in the UAE and KSA.',
  alternates: {
    canonical: "https://www.credencelighting.com/entertainment-lighting",
  },
  openGraph: {
    title: 'Entertainment & Theme Park Lighting · Credence Lighting',
    description: 'Dynamic, programmable lighting and LED display solutions for theme parks, cinemas, arenas, and entertainment attractions in the UAE and KSA.',
    url: "https://www.credencelighting.com/entertainment-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Entertainment & Theme Park Lighting · Credence Lighting',
    description: 'Dynamic, programmable lighting and LED display solutions for theme parks, cinemas, arenas, and entertainment attractions in the UAE and KSA.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <EntertainmentLighting />;
}
