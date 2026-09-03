import ExplosionProofLights from "@/lib_src/pages/ExplosionProofLights";

export const metadata = {
  title: 'Explosion Proof Lighting',
  description: 'ATEX & IECEx certified explosion-proof LED lighting in Dubai and UAE. Zone 1, 2, 21, and 22 hazardous area luminaires for industrial and energy facilities.',
  alternates: {
    canonical: "https://www.credencelighting.com/explosion-proof-lights",
  },
  openGraph: {
    title: 'Explosion Proof Lighting · Credence Lighting',
    description: 'ATEX & IECEx certified explosion-proof LED lighting in Dubai and UAE. Zone 1, 2, 21, and 22 hazardous area luminaires for industrial and energy facilities.',
    url: "https://www.credencelighting.com/explosion-proof-lights",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/images/explosion-proof/hero.webp"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Explosion Proof Lighting · Credence Lighting',
    description: 'ATEX & IECEx certified explosion-proof LED lighting in Dubai and UAE. Zone 1, 2, 21, and 22 hazardous area luminaires for industrial and energy facilities.',
    images: ["https://www.credencelighting.com/images/explosion-proof/hero.webp"],
  },
};

export default function Page() {
  return <ExplosionProofLights />;
}
