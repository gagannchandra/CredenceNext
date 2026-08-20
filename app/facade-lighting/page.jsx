import FacadeLighting from "@/lib_src/pages/FacadeLighting";

export const metadata = {
  title: 'Architectural Facade & Exterior Lighting',
  description: 'Dynamic and architectural facade lighting systems in Dubai. Exterior media facades, DMX pixel mapping, floodlights, and linear grazers across the GCC.',
  alternates: {
    canonical: "https://www.credencelighting.com/facade-lighting",
  },
  openGraph: {
    title: 'Architectural Facade & Exterior Lighting · Credence Lighting',
    description: 'Dynamic and architectural facade lighting systems in Dubai. Exterior media facades, DMX pixel mapping, floodlights, and linear grazers across the GCC.',
    url: "https://www.credencelighting.com/facade-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Architectural Facade & Exterior Lighting · Credence Lighting',
    description: 'Dynamic and architectural facade lighting systems in Dubai. Exterior media facades, DMX pixel mapping, floodlights, and linear grazers across the GCC.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <FacadeLighting />;
}
