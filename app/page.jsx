import Home from "@/lib_src/pages/Home";

const title = "Credence Lighting | Premium Lighting Solutions Dubai";
const description =
  "Premium architectural, commercial, hospitality, and decorative lighting solutions across Dubai and the UAE. 10+ years of expertise and 1,000+ successful projects.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://credencelighting.com/",
  },
  openGraph: {
    title,
    description,
    url: "https://credencelighting.com/",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Home />;
}
