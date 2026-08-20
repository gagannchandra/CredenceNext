"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { hasPendingReturnScroll } from "../utils/navigationState";
import { scrollToTop } from "../utils/scrollUtils";

export default function ScrollToTop() {
  const pathname = usePathname();

  const isFirstRender = useRef(true);

  useEffect(() => {
    // Mark that this tab has performed at least one internal navigation,
    // once the *second* pathname is seen (skip the initial mount).
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("hasInternalNav", "true");
        } catch {
          // Ignore storage quota or security errors
        }
      }
    }

    if (hasPendingReturnScroll() && pathname === "/") {
      return;
    }

    scrollToTop(true);
  }, [pathname]);

  return null;
}
