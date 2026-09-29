import { useEffect } from "react";

/* Stagger helper: rvd(2) -> element animates 2 steps after the first one */
export const rvd = (step, gap = 120) => ({ "--rv-d": `${step * gap}ms` });

/* Adds .rv--in to every .rv element when it scrolls into view (once) */
export default function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".rv");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("rv--in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv--in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}