import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls to the top every time the route changes.
   If the URL has a #hash and a matching element exists, it scrolls to that instead. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Stop the browser restoring an old scroll position on refresh / back / forward
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    // "instant" ignores any global `scroll-behavior: smooth` so the new page starts at the top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}