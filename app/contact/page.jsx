import Contact from "@/lib_src/pages/Contact";

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Credence Lighting in Dubai, UAE. Schedule a design consultation or request a project quotation with our architectural lighting specialists.',
  alternates: {
    canonical: "https://www.credencelighting.com/contact",
  },
  openGraph: {
    title: 'Contact Us · Credence Lighting',
    description: 'Contact Credence Lighting in Dubai, UAE. Schedule a design consultation or request a project quotation with our architectural lighting specialists.',
    url: "https://www.credencelighting.com/contact",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contact Us · Credence Lighting',
    description: 'Contact Credence Lighting in Dubai, UAE. Schedule a design consultation or request a project quotation with our architectural lighting specialists.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Contact />;
}
