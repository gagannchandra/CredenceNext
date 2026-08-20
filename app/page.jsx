import Home from "@/lib_src/pages/Home";

const titleText = "Credence Lighting · Architectural & Commercial Lighting Dubai";
const description =
  "Premier architectural, commercial, and hospitality lighting design, supply, and installation across Dubai and the UAE. 10+ years of expertise and 1,000+ completed projects.";

export const metadata = {
  title: {
    absolute: titleText,
  },
  description,
  alternates: {
    canonical: "https://www.credencelighting.com/",
  },
  openGraph: {
    title: titleText,
    description,
    url: "https://www.credencelighting.com/",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description,
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <Home />;
}
