import RestaurantLighting from "@/lib_src/pages/RestaurantLighting";

export const metadata = {
  title: 'Restaurant Lighting',
  description: 'Atmospheric restaurant, bar, and fine-dining lighting design in Dubai. Warm dimming LEDs, bespoke decorative fixtures, and custom architectural scene controls.',
  alternates: {
    canonical: "https://www.credencelighting.com/restaurant-lighting",
  },
  openGraph: {
    title: 'Restaurant Lighting · Credence Lighting',
    description: 'Atmospheric restaurant, bar, and fine-dining lighting design in Dubai. Warm dimming LEDs, bespoke decorative fixtures, and custom architectural scene controls.',
    url: "https://www.credencelighting.com/restaurant-lighting",
    siteName: "Credence Lighting",
    images: ["https://www.credencelighting.com/meta.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Restaurant Lighting · Credence Lighting',
    description: 'Atmospheric restaurant, bar, and fine-dining lighting design in Dubai. Warm dimming LEDs, bespoke decorative fixtures, and custom architectural scene controls.',
    images: ["https://www.credencelighting.com/meta.png"],
  },
};

export default function Page() {
  return <RestaurantLighting />;
}
