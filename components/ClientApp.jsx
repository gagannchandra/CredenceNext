"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import RouteLoader from "./ui/RouteLoader";
import ScrollToTop from "./ScrollToTop";
import WhatsappFloat from "./ui/WhatsappFloat";
import AmbientBackground from "./layout/AmbientBackground";
import Navbar from "./layout/Navbar";
import BackButton from "./ui/BackButton";
import ErrorBoundary from "./ui/ErrorBoundary";

// Lenis touches `window` at module-load time, so it stays a client-only leaf.
// Crucially it does not wrap {children} - it is a sibling - so the actual page
// content below is free to render on the server like any normal Next.js page.
const SmoothScroll = dynamic(() => import("./ui/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("./ui/CustomCursor"), { ssr: false });

export default function ClientApp({ children }) {
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-brand-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <SmoothScroll />
      <CustomCursor />
      <AmbientBackground />
      <Navbar />
      <ScrollToTop />
      {pathname !== "/" && <BackButton />}

      <ErrorBoundary>
        <Suspense fallback={<RouteLoader />}>
          <main id="main-content">{children}</main>
        </Suspense>
      </ErrorBoundary>

      <WhatsappFloat />
    </>
  );
}
