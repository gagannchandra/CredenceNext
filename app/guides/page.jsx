import Guides from "@/lib_src/pages/Guides";

const title = 'Lighting Guides';
const fullTitle = 'Lighting Guides · Credence Lighting';
const description = 'Practical lighting guides from Credence Lighting Dubai: choosing fixtures, LED installation, dimming protocols, CRI, colour temperature, IP ratings and office lux standards.';
const url = "https://www.credencelighting.com/guides";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: fullTitle,
    description,
    url,
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Guides />;
}
