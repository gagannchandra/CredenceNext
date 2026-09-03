import ExplosionProofLights from "@/lib_src/pages/ExplosionProofLights";

export const metadata = {
  title: 'Explosion Proof Lights Dubai',
  description: 'ATEX & IECEx certified explosion-proof lighting suppliers in Dubai. Heavy-duty hazardous area LED floodlights, high bays, and emergency luminaires in UAE.',
  alternates: {
    canonical: "https://www.credencelighting.com/explosion-proof-lights-dubai",
  },
  openGraph: {
    title: 'Explosion Proof Lights Dubai · Credence Lighting',
    description: 'ATEX & IECEx certified explosion-proof lighting suppliers in Dubai. Heavy-duty hazardous area LED floodlights, high bays, and emergency luminaires in UAE.',
    url: "https://www.credencelighting.com/explosion-proof-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/images/explosion-proof/hero.webp"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Explosion Proof Lights Dubai · Credence Lighting',
    description: 'ATEX & IECEx certified explosion-proof lighting suppliers in Dubai. Heavy-duty hazardous area LED floodlights, high bays, and emergency luminaires in UAE.',
    images: ["https://www.credencelighting.com/images/explosion-proof/hero.webp"],
  },
};

export default function Page() {
  return <ExplosionProofLights />;
}
