"use client";

import { useEffect, useState, useMemo } from "react";

const slugify = (value) =>
  (value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

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

    const elements = headings
      .map((heading) => document.getElementById(slugify(heading.content)))
      .filter(Boolean);

    if (elements.length === 0) return;

    // Was a scroll listener that called getBoundingClientRect() on every
    // heading on every scroll frame - a forced synchronous layout per frame.
    // IntersectionObserver reports the same crossings off the main thread.
    // The top rootMargin pulls the trigger line to 150px below the viewport
    // top so a heading activates as it reaches the reading position.
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // Short sections can put two headings inside the band at once. The
        // one being read is whichever tracked heading is furthest down the
        // page (most recently scrolled past), not just the first match -
        // otherwise an earlier heading that's still barely in the band keeps
        // a later one from ever lighting up.
        for (let i = elements.length - 1; i >= 0; i--) {
          if (visible.has(elements[i].id)) {
            setActiveId(elements[i].id);
            break;
          }
        }
      },
      { rootMargin: "-150px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Set active on click rather than waiting on the IntersectionObserver -
      // the scroll animation takes up to a second, and a short section can
      // leave the heading only briefly (or never fully) alone in the band.
      setActiveId(id);
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
      <h2 id="toc-heading" className="font-sans text-sm uppercase tracking-widest text-white/60 mb-4">
        Table of Contents
      </h2>
      <nav aria-labelledby="toc-heading" className="flex flex-col gap-3 border-l border-white/10">
        {headings.map((heading, index) => {
          const id = slugify(heading.content);
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
