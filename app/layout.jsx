import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import ClientApp from "@/components/ClientApp";
import "./globals.css";

// The brand type stack was declared in styles/tokens.css but never actually
// loaded, so every page rendered in system-ui / Georgia. next/font self-hosts
// both families, emits `size-adjust` fallback metrics (no CLS on swap), and
// exposes them as CSS variables that tokens.css maps onto --font-sans /
// --font-serif.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  // Display cuts only: headings and the italic accent word. Loading the full
  // weight range would ship four extra files nothing on the site references.
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://www.credencelighting.com"),
  title: {
    default: "Credence Lighting · Architectural & Commercial Lighting Dubai",
    template: "%s · Credence Lighting",
  },
  description:
    "Credence Lighting is a premier architectural, commercial, and hospitality lighting design and supply company in Dubai, delivering bespoke luxury lighting across the UAE and GCC.",
  applicationName: "Credence Lighting",
  authors: [{ name: "Credence Lighting LLC", url: "https://www.credencelighting.com" }],
  creator: "Credence Lighting LLC",
  publisher: "Credence Lighting LLC",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.credencelighting.com/",
    languages: {
      "en": "https://www.credencelighting.com/",
      "en-AE": "https://www.credencelighting.com/",
      "en-SA": "https://www.credencelighting.com/lighting-companies-saudi-arabia",
      "en-BH": "https://www.credencelighting.com/lighting-companies-bahrain",
      "ar-AE": "https://www.credencelighting.com/",
      "ar-SA": "https://www.credencelighting.com/lighting-companies-saudi-arabia",
      "x-default": "https://www.credencelighting.com/",
    },
  },
  openGraph: {
    title: "Credence Lighting · Architectural & Commercial Lighting Dubai",
    description:
      "Credence Lighting is a premier architectural, commercial, and hospitality lighting design and supply company in Dubai, delivering bespoke luxury lighting across the UAE and GCC.",
    url: "https://www.credencelighting.com/",
    siteName: "Credence Lighting",
    images: [
      {
        url: "https://www.credencelighting.com/meta.png",
        width: 1200,
        height: 630,
        alt: "Credence Lighting, luxury architectural and commercial lighting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credence Lighting · Architectural & Commercial Lighting Dubai",
    description:
      "Credence Lighting is a premier architectural, commercial, and hospitality lighting design and supply company in Dubai, delivering bespoke luxury lighting across the UAE and GCC.",
    images: ["https://www.credencelighting.com/meta.png"],
    creator: "@CredenceLighting",
    site: "@CredenceLighting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg?v=6",
    apple: "/favicon.svg?v=6",
  },
  manifest: "/site.webmanifest?v=6",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020305",
  colorScheme: "dark",
};

const rootOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.credencelighting.com/#organization",
      "name": "Credence Lighting LLC",
      "alternateName": ["Credence Lighting", "Credence Dubai", "Credence Architectural Lighting"],
      "url": "https://www.credencelighting.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.credencelighting.com/#logo",
        "url": "https://www.credencelighting.com/logo.svg",
        "caption": "Credence Lighting LLC Logo"
      },
      "image": "https://www.credencelighting.com/meta.png",
      "description": "Premier architectural, commercial, and hospitality lighting design, fixture supply, and smart automation company based in Dubai, UAE.",
      "telephone": "+971564965660",
      "email": "info@credencelighting.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit E77, Arabtec Eastern Model, Dubai Investment Park 1",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.9788",
        "longitude": "55.1764"
      },
      "sameAs": [
        "https://www.instagram.com/credencelighting/",
        "https://www.linkedin.com/company/credence-lighting-llc/",
        "https://maps.app.goo.gl/ec2HMCDNXYtYviV7A",
        "https://www.facebook.com/credencelighting",
        "https://www.youtube.com/@credencelighting"
      ],
      "areaServed": [
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Bahrain" },
        { "@type": "Country", "name": "Oman" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Kuwait" }
      ],
      "knowsAbout": [
        "Architectural Lighting Design",
        "Human Centric Lighting (HCL)",
        "DALI-2 and Casambi Smart Lighting Controls",
        "Commercial and Hospitality Illumination",
        "Facade Floodlighting and Pixel Mapping",
        "ATEX and IECEx Explosion Proof Fixtures",
        "Estidama Pearl and SASO Lighting Compliance"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.credencelighting.com/#website",
      "url": "https://www.credencelighting.com",
      "name": "Credence Lighting",
      "publisher": {
        "@id": "https://www.credencelighting.com/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootOrganizationSchema) }}
        />
        {/* Hardware sniffer: downgrade visuals for low-end devices (ported verbatim from index.html) */}
        <Script id="hardware-sniffer" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var cores = navigator.hardwareConcurrency || 8;
                var memory = navigator.deviceMemory || 8;
                if (cores <= 4 || memory < 4) {
                  document.documentElement.classList.add('perf-low');
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <div id="root">
          <ClientApp>{children}</ClientApp>
        </div>
      </body>
    </html>
  );
}
