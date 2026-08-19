import RestaurantLighting from "@/lib_src/pages/RestaurantLighting";

export const metadata = {
  title: 'Restaurant & Cafe Lighting Design | Credence Lighting',
  description: 'Create the perfect dining ambiance with our bespoke restaurant and cafe lighting solutions. We specialize in warm dimming, decorative supply, and mood lighting.',
  alternates: {
    canonical: "https://credencelighting.com/restaurant-lighting",
  },
  openGraph: {
    title: 'Restaurant & Cafe Lighting Design | Credence Lighting',
    description: 'Create the perfect dining ambiance with our bespoke restaurant and cafe lighting solutions. We specialize in warm dimming, decorative supply, and mood lighting.',
    url: "https://credencelighting.com/restaurant-lighting",
    siteName: "Credence Lighting",
    images: ["https://credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Restaurant & Cafe Lighting Design | Credence Lighting',
    description: 'Create the perfect dining ambiance with our bespoke restaurant and cafe lighting solutions. We specialize in warm dimming, decorative supply, and mood lighting.',
    images: ["https://credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <RestaurantLighting />;
}
