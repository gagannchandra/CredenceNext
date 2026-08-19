import Contact from "@/lib_src/pages/Contact";

export const metadata = {
  title: 'Contact Credence Lighting | Lighting Experts Dubai',
  description: 'Get in touch with our lighting specialists in Dubai for project inquiries and quotations.',
  alternates: {
    canonical: "https://credencelighting.com/contact",
  },
  openGraph: {
    title: 'Contact Credence Lighting | Lighting Experts Dubai',
    description: 'Get in touch with our lighting specialists in Dubai for project inquiries and quotations.',
    url: "https://credencelighting.com/contact",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contact Credence Lighting | Lighting Experts Dubai',
    description: 'Get in touch with our lighting specialists in Dubai for project inquiries and quotations.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Contact />;
}
