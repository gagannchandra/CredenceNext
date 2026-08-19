import Script from "next/script";
import ClientApp from "@/components/ClientApp";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://credencelighting.com"),
  title: {
    default: "Credence Lighting · Premium Architectural & Commercial Lighting",
    template: "%s · Credence Lighting",
  },
  description:
    "Credence Lighting provides bespoke architectural, commercial, and residential luxury lighting solutions. Elevate your spaces with premium craftsmanship.",
  applicationName: "Credence Lighting",
  generator: undefined,
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
  },
  manifest: "/site.webmanifest?v=6",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020305",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
