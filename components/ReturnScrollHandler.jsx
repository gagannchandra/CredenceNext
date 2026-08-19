import { useLayoutEffect } from "react";
import {
  clearReturnState,
  consumePendingReturnScroll,
  getReturnState,
  hasPendingReturnScroll,
} from "../utils/navigationState";
import { restoreScrollPosition } from "../utils/scrollUtils";

export default function ReturnScrollHandler() {
  useLayoutEffect(() => {
    if (!hasPendingReturnScroll()) return;

    const state = getReturnState();
    consumePendingReturnScroll();

    if (!state) return;

    restoreScrollPosition(state);
    clearReturnState();
  }, []);

  return null;
}
