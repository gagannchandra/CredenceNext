import OfficeLighting from "@/lib_src/pages/OfficeLighting";

export const metadata = {
  title: 'Commercial Office Lighting Solutions | Credence',
  description: 'Boost productivity and wellness with our commercial office lighting solutions. We provide Human Centric Lighting (HCL) design and supply for modern workspaces.',
  alternates: {
    canonical: "https://credencelighting.com/office-lighting",
  },
  openGraph: {
    title: 'Commercial Office Lighting Solutions | Credence',
    description: 'Boost productivity and wellness with our commercial office lighting solutions. We provide Human Centric Lighting (HCL) design and supply for modern workspaces.',
    url: "https://credencelighting.com/office-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Commercial Office Lighting Solutions | Credence',
    description: 'Boost productivity and wellness with our commercial office lighting solutions. We provide Human Centric Lighting (HCL) design and supply for modern workspaces.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <OfficeLighting />;
}
