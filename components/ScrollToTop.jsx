"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { hasPendingReturnScroll } from "../utils/navigationState";
import { scrollToTop } from "../utils/scrollUtils";

export default function ScrollToTop() {
  const pathname = usePathname();

  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // Mark that this tab has performed at least one internal navigation,
    // once the *second* pathname is seen (skip the initial mount).
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      sessionStorage.setItem("hasInternalNav", "true");
    }

    if (hasPendingReturnScroll() && pathname === "/") {
      return;
    }

    scrollToTop(true);
  }, [pathname]);

  return null;
}
