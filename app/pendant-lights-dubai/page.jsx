import PendantLightsDubai from "@/lib_src/pages/PendantLightsDubai";

export const metadata = {
  title: 'Decorative Pendant Lights Dubai',
  description: 'Luxury decorative pendant lights and statement chandeliers in Dubai. Bespoke feature lighting for luxury villas, boutique hotels, and dining venues.',
  alternates: {
    canonical: "https://www.credencelighting.com/pendant-lights-dubai",
  },
  openGraph: {
    title: 'Decorative Pendant Lights Dubai · Credence Lighting',
    description: 'Luxury decorative pendant lights and statement chandeliers in Dubai. Bespoke feature lighting for luxury villas, boutique hotels, and dining venues.',
    url: "https://www.credencelighting.com/pendant-lights-dubai",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Decorative Pendant Lights Dubai · Credence Lighting',
    description: 'Luxury decorative pendant lights and statement chandeliers in Dubai. Bespoke feature lighting for luxury villas, boutique hotels, and dining venues.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <PendantLightsDubai />;
}
