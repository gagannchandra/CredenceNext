export function scrollToTop(immediate = true) {
  if (window.lenis) {
    window.lenis.scrollTo(0, { immediate });
  } else {
    const behavior = immediate ? "auto" : "smooth";
    window.scrollTo({ top: 0, left: 0, behavior });
  }
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (!element) return;

  if (window.lenis) {
    window.lenis.scrollTo(element, { duration: 1.2 });
  } else {
    element.scrollIntoView({ behavior: "auto", block: "start" });
  }

  window.history.replaceState(null, "", `#${sectionId}`);
}

export function restoreScrollPosition({ hash, scrollY }) {
  if (hash) {
    const element = document.querySelector(hash);

    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { immediate: true });
      } else {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
      return true;
    }
  }

  if (typeof scrollY === "number") {
    if (window.lenis) {
      window.lenis.scrollTo(scrollY, { immediate: true });
    } else {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    }
    return true;
  }

  return false;
}
