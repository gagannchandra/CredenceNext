import Faq from "@/lib_src/pages/Faq";

export const metadata = {
  title: 'FAQ · Lighting Questions Answered · Credence',
  description: 'Find answers to common questions about architectural lighting, LED products, smart controls, outdoor fixtures, and lighting design services from Credence Lighting Dubai.',
  alternates: {
    canonical: "https://credencelighting.com/faq",
  },
  openGraph: {
    title: 'FAQ · Lighting Questions Answered · Credence',
    description: 'Find answers to common questions about architectural lighting, LED products, smart controls, outdoor fixtures, and lighting design services from Credence Lighting Dubai.',
    url: "https://credencelighting.com/faq",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'FAQ · Lighting Questions Answered · Credence',
    description: 'Find answers to common questions about architectural lighting, LED products, smart controls, outdoor fixtures, and lighting design services from Credence Lighting Dubai.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Faq />;
}
