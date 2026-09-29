import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../style/backToTop.css";

const SHOW_AFTER = 400; // px scrolled before the button appears
const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > SHOW_AFTER);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`btt${visible ? " btt--show" : ""}`}
      onClick={goTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg className="btt__ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="btt__track" cx="24" cy="24" r={RADIUS} />
        <circle
          className="btt__bar"
          cx="24"
          cy="24"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <FaArrowUp className="btt__icon" />
    </button>
  );
}