import Faq from "@/lib_src/pages/Faq";

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions regarding architectural lighting design, supply, Dubai municipal regulations, DEWA compliance, and warranty terms.',
  alternates: {
    canonical: "https://www.credencelighting.com/faq",
  },
  openGraph: {
    title: 'Frequently Asked Questions · Credence Lighting',
    description: 'Answers to common questions regarding architectural lighting design, supply, Dubai municipal regulations, DEWA compliance, and warranty terms.',
    url: "https://www.credencelighting.com/faq",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Frequently Asked Questions · Credence Lighting',
    description: 'Answers to common questions regarding architectural lighting design, supply, Dubai municipal regulations, DEWA compliance, and warranty terms.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Faq />;
}
