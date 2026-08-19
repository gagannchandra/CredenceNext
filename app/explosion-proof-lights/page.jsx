import ExplosionProofLights from "@/lib_src/pages/ExplosionProofLights";

export const metadata = {
  title: 'Explosion Proof Lights Dubai · ATEX & IECEx Certified Lighting UAE',
  description: 'Premium ATEX & IECEx certified explosion-proof LED lights in Dubai & UAE. Flameproof high bays, linear battens, floodlights, and hazardous highway luminaires. Engineered for oil, gas, and petrochemical environments.',
  alternates: {
    canonical: "https://credencelighting.com/explosion-proof-lights",
  },
  openGraph: {
    title: 'Explosion Proof Lights Dubai · ATEX & IECEx Certified Lighting UAE',
    description: 'Premium ATEX & IECEx certified explosion-proof LED lights in Dubai & UAE. Flameproof high bays, linear battens, floodlights, and hazardous highway luminaires.',
    url: "https://credencelighting.com/explosion-proof-lights",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/images/explosion-proof/hero.webp"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Explosion Proof Lights Dubai · ATEX & IECEx Certified Lighting UAE',
    description: 'Premium ATEX & IECEx certified explosion-proof LED lights in Dubai & UAE. Flameproof high bays, linear battens, floodlights, and hazardous highway luminaires.',
    images: ["https://credencelighting.com/images/explosion-proof/hero.webp"],
  },
};

export default function Page() {
  return <ExplosionProofLights />;
}
