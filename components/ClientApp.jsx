"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Loader from "./ui/Loader";
import ScrollToTop from "./ScrollToTop";
import WhatsappFloat from "./ui/WhatsappFloat";
import AmbientBackground from "./layout/AmbientBackground";
import Navbar from "./layout/Navbar";
import BackButton from "./ui/BackButton";
import ErrorBoundary from "./ui/ErrorBoundary";

// These two touch `window`/`document`/WebGL at module-load or mount time in
// ways that aren't safe to execute on the server, so they're isolated as
// client-only leaves. Crucially, neither wraps {children} - they're
// siblings - so the actual page content below is free to render on the
// server like any normal Next.js page.
const SmoothScroll = dynamic(() => import("./ui/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("./ui/CustomCursor"), { ssr: false });

export default function ClientApp({ children }) {
  const pathname = usePathname();

  return (
    <HelmetProvider>
      <SmoothScroll />
      <AmbientBackground />
      <Navbar />
      <CustomCursor />
      <ScrollToTop />
      {pathname !== "/" && <BackButton />}

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <div key={pathname}>{children}</div>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>

      <WhatsappFloat />
    </HelmetProvider>
  );
}
