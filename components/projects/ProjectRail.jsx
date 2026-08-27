"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Distance from the top of the viewport that a project section should land at
// once scrolled to — clears the fixed navbar in its scrolled (compact) state.
const SCROLL_OFFSET = 120;

/**
 * Sticky index for the /projects page.
 *
 * The listing stacks 30 full-height project blocks, which is a long scroll to
 * traverse blind. This rail keeps the whole portfolio in view, tracks which
 * project you're currently looking at, and jumps straight to any other one.
 *
 * Desktop only by design: a fixed-width column has nowhere to live under
 * `lg`, and the mobile listing already reads as a simple linear feed.
 */
export default function ProjectRail({ projects }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? null);
  const railRef = useRef(null);
  const itemRefs = useRef(new Map());

  // Scroll-spy: the active project is whichever section is crossing a thin
  // band in the upper third of the viewport. The asymmetric rootMargin
  // collapses the viewport to that band, so exactly one section qualifies at
  // a time even though each is far taller than the screen.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = projects
      .map(({ slug }) => document.getElementById(`project-${slug}`))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActiveSlug(hit.target.dataset.slug);
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [projects]);

  // Keep the active entry visible inside the rail's own scroll area without
  // touching page scroll (which `scrollIntoView` would happily do).
  useEffect(() => {
    const rail = railRef.current;
    const item = itemRefs.current.get(activeSlug);
    if (!rail || !item) return;

    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.offsetHeight;
    const viewTop = rail.scrollTop;
    const viewBottom = viewTop + rail.clientHeight;

    if (itemTop < viewTop) {
      rail.scrollTo({ top: itemTop - 16, behavior: "smooth" });
    } else if (itemBottom > viewBottom) {
      rail.scrollTo({ top: itemBottom - rail.clientHeight + 16, behavior: "smooth" });
    }
  }, [activeSlug]);

  const jumpTo = useCallback((slug) => {
    const target = document.getElementById(`project-${slug}`);
    if (!target) return;

    // Lenis owns the scroll position on this site; calling native scroll
    // APIs while it's running fights its rAF loop and stutters.
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: -SCROLL_OFFSET });
    } else {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET,
        behavior: "smooth",
      });
    }
  }, []);

  const activeIndex = projects.findIndex((p) => p.slug === activeSlug);

  return (
    <nav
      aria-label="Project index"
      className="hidden lg:block w-[260px] shrink-0"
    >
      <div className="sticky top-44 flex flex-col max-h-[calc(100vh-13rem)]">
        {/* Heading + progress */}
        <div className="shrink-0 pb-5 mb-2 border-b border-white/10">
          <p className="uppercase tracking-[0.3em] text-[10px] text-brand-gold font-medium mb-3">
            All Projects
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl text-white leading-none tabular-nums">
              {activeIndex >= 0
                ? String(activeIndex + 1).padStart(2, "0")
                : "--"}
            </span>
            <span className="font-mono text-xs text-white/30 leading-none">
              / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-brand-gold transition-[width] duration-500 ease-out"
              style={{
                width:
                  activeIndex >= 0
                    ? `${((activeIndex + 1) / projects.length) * 100}%`
                    : "0%",
              }}
            />
          </div>
        </div>

        {/* Scrollable list */}
        <div
          ref={railRef}
          className="project-rail-scroll min-h-0 flex-1 overflow-y-auto pr-2 -mr-2 py-2"
        >
          <ul className="flex flex-col">
            {projects.map((project, index) => {
              const isActive = project.slug === activeSlug;
              return (
                <li key={project.id}>
                  <button
                    type="button"
                    ref={(node) => {
                      if (node) itemRefs.current.set(project.slug, node);
                      else itemRefs.current.delete(project.slug);
                    }}
                    onClick={() => jumpTo(project.slug)}
                    aria-current={isActive ? "true" : undefined}
                    className="group w-full text-left flex items-start gap-3 py-2.5 pl-3 pr-1 relative"
                  >
                    {/* Active tick */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full bg-brand-gold transition-all duration-300 ${
                        isActive
                          ? "h-[70%] opacity-100"
                          : "h-0 opacity-0 group-hover:h-[40%] group-hover:opacity-50"
                      }`}
                    />

                    <span
                      className={`font-mono text-[10px] leading-5 tabular-nums shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "text-brand-gold"
                          : "text-white/25 group-hover:text-white/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm leading-5 truncate transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/90"
                        }`}
                      >
                        {project.name}
                      </span>
                      <span
                        className={`block text-[10px] leading-4 truncate uppercase tracking-[0.12em] transition-all duration-300 ${
                          isActive
                            ? "text-brand-gold/70 max-h-4 opacity-100 mt-0.5"
                            : "text-white/25 max-h-0 opacity-0 group-hover:max-h-4 group-hover:opacity-100 group-hover:mt-0.5"
                        }`}
                      >
                        {project.location}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
