"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  getReturnState,
  clearReturnState,
  markPendingReturnScroll,
} from "../../utils/navigationState";

export default function BackButton({ fallback }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    const returnState = getReturnState();

    if (returnState?.pathname) {
      markPendingReturnScroll();
      clearReturnState(); // Clear the state so it doesn't contaminate future back clicks
      router.push(returnState.pathname);
      return;
    }

    // react-router exposed location.key === "default" on the very first page
    // load of a tab. Next's router doesn't expose an equivalent, so we track
    // "has this tab navigated internally yet" ourselves (see ScrollToTop.jsx,
    // which sets this flag on every route change after the first).
    const hasInternalHistory =
      typeof window !== "undefined" &&
      sessionStorage.getItem("hasInternalNav") === "true";

    if (hasInternalHistory) {
      router.back();
      return;
    }

    // If we landed directly on this page (no history), determine a smart fallback
    let defaultFallback = "/";
    if (pathname.startsWith("/product")) defaultFallback = "/products";
    else if (pathname.startsWith("/project")) defaultFallback = "/projects";
    else if (pathname.startsWith("/blog")) defaultFallback = "/blog";

    router.push(fallback || defaultFallback);
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleBack}
      className="fixed top-[88px] left-6 z-30 hidden md:flex items-center gap-2 rounded-button bg-scrim/50 px-4 py-2 text-white text-sm font-semibold tracking-[0.2em] uppercase shadow-2xl backdrop-blur-lg border border-white/10 hover:bg-scrim/70 hover:border-white/20 transition duration-300"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      <span>Back</span>
    </motion.button>
  );
}
