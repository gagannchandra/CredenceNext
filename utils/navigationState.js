const RETURN_STATE_KEY = "credence_return_state";
const PENDING_SCROLL_KEY = "credence_pending_scroll";

export function saveReturnState(state) {
  const payload = {
    pathname: state.pathname ?? "/",
    scrollY: state.scrollY ?? (window.lenis ? window.lenis.scroll : window.scrollY) ?? 0,
    hash: state.hash ?? "",
  };

  sessionStorage.setItem(RETURN_STATE_KEY, JSON.stringify(payload));
}

export function getReturnState() {
  try {
    const raw = sessionStorage.getItem(RETURN_STATE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearReturnState() {
  sessionStorage.removeItem(RETURN_STATE_KEY);
}

export function markPendingReturnScroll() {
  sessionStorage.setItem(PENDING_SCROLL_KEY, "true");
}

export function hasPendingReturnScroll() {
  return sessionStorage.getItem(PENDING_SCROLL_KEY) === "true";
}

export function consumePendingReturnScroll() {
  sessionStorage.removeItem(PENDING_SCROLL_KEY);
}
