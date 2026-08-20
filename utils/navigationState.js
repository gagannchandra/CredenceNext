const RETURN_STATE_KEY = "credence_return_state";
const PENDING_SCROLL_KEY = "credence_pending_scroll";

export function saveReturnState(state) {
  if (typeof window === "undefined") return;
  try {
    const currentScrollY =
      state?.scrollY ??
      (window.lenis ? window.lenis.scroll : window.scrollY) ??
      0;

    const payload = {
      pathname: state?.pathname ?? "/",
      scrollY: currentScrollY,
      hash: state?.hash ?? "",
    };

    sessionStorage.setItem(RETURN_STATE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage quota or security errors
  }
}

export function getReturnState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(RETURN_STATE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearReturnState() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(RETURN_STATE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export function markPendingReturnScroll() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(PENDING_SCROLL_KEY, "true");
  } catch {
    // Ignore storage errors
  }
}

export function hasPendingReturnScroll() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(PENDING_SCROLL_KEY) === "true";
  } catch {
    return false;
  }
}

export function consumePendingReturnScroll() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
  } catch {
    // Ignore storage errors
  }
}

