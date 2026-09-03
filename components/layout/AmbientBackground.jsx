"use client";

import { useEffect } from "react";

// Pauses the ambient orb blur animation when the tab isn't visible. The
// three orbs are `filter: blur(80px)`, which is expensive to rasterize on
// every transform tick - there's no reason to keep paying that cost while
// the tab is backgrounded and nobody can see it.
function usePauseWhenHidden() {
  useEffect(() => {
    const root = document.documentElement;
    const applyState = () => {
      root.classList.toggle("ambient-paused", document.hidden);
    };
    applyState();
    document.addEventListener("visibilitychange", applyState);
    return () => document.removeEventListener("visibilitychange", applyState);
  }, []);
}

const AmbientBackground = () => {
  usePauseWhenHidden();

  return (
    <>
      <div className="ambient-bg-container">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>
      <div className="ambient-grid-overlay"></div>
      <div className="ambient-noise-overlay"></div>
    </>
  );
};

export default AmbientBackground;
