"use client";

import { useEffect, useState, useMemo } from "react";

export default function ArticleTOC({ blocks = [] }) {
  const [activeId, setActiveId] = useState("");
  const headings = useMemo(() => {
    if (!Array.isArray(blocks)) return [];
    return blocks.filter(
      (b) => (b.type === "heading2" || b.type === "heading3") && typeof b.content === "string"
    );
  }, [blocks]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const headingElements = headings
        .map((h) => {
          const id = (h.content || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return document.getElementById(id);
        })
        .filter(Boolean);

      let currentActiveId = "";
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 150) {
          currentActiveId = el.id;
        }
      }

      if (currentActiveId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(el, { offset: -100, duration: 1.0 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="sticky top-32 p-6 border border-white/10 rounded-panel bg-surface-elevated">
      <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">Table of Contents</h4>
      <nav className="flex flex-col gap-3 border-l border-white/10">
        {headings.map((heading, index) => {
          const id = (heading.content || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const isActive = activeId === id;

          return (
            <button
              key={index}
              onClick={() => scrollToHeading(id)}
              className={`text-center md:text-left pl-4 text-sm transition-colors duration-300 border-l-2 -ml-[1px] ${
                isActive
                  ? "border-brand-gold text-brand-gold"
                  : "border-transparent text-white/60 hover:text-white"
              } ${heading.type === "heading3" ? "ml-2" : ""}`}
            >
              {heading.content}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
