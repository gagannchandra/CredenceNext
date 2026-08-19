import LocationSharjah from "@/lib_src/pages/LocationSharjah";

export const metadata = {
  title: 'Lighting Companies in Sharjah | Credence Lighting',
  description: 'Credence Lighting is a leading lighting supplier for Sharjah and the Northern Emirates. Specializing in heavy-duty industrial, warehousing, and commercial lighting solutions.',
  alternates: {
    canonical: "https://credencelighting.com/lighting-companies-sharjah",
  },
  openGraph: {
    title: 'Lighting Companies in Sharjah | Credence Lighting',
    description: 'Credence Lighting is a leading lighting supplier for Sharjah and the Northern Emirates. Specializing in heavy-duty industrial, warehousing, and commercial lighting solutions.',
    url: "https://credencelighting.com/lighting-companies-sharjah",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Lighting Companies in Sharjah | Credence Lighting',
    description: 'Credence Lighting is a leading lighting supplier for Sharjah and the Northern Emirates. Specializing in heavy-duty industrial, warehousing, and commercial lighting solutions.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <LocationSharjah />;
}
