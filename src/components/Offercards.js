import { useEffect, useRef } from "react";
import { offers } from "../data/Offers";
import "../style/offers.css";

// Cycles through four ribbon colours. With 3 columns, row 2 starts one tone later,
// so no column repeats the same colour.
const tones = ["navy", "gold", "wine", "teal"];

export default function OfferCards({ heading }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-ofr-reveal]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // No animation support / reduced motion: show everything immediately
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // Everything that enters in the same moment is staggered one by one,
        // in reading order (top to bottom, then left to right)
        const shown = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const dy = a.boundingClientRect.top - b.boundingClientRect.top;
            return Math.abs(dy) > 8 ? dy : a.boundingClientRect.left - b.boundingClientRect.left;
          });

        shown.forEach((entry, k) => {
          entry.target.style.setProperty("--ofr-d", `${k * 150}ms`);
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const words = heading ? heading.split(" ") : [];

  return (
    <div ref={wrapRef}>
      {heading && (
        <h2 className="ofr-home-title" data-ofr-reveal>
          {words.map((w, i) => (
            <span key={i}>
              <span className="ofr-word" style={{ "--ofr-w": i }}>{w}</span>
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h2>
      )}

      <div className="ofr-grid">
        {offers.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            data-ofr-reveal
            className={`ofr-card ofr-card--${tones[i % tones.length]}`}
          >
            <div className="ofr-ribbon">
              <h3>{title}</h3>
            </div>

            <div className="ofr-card__body">
              <p className="ofr-card__text">{text}</p>
              <span className="ofr-tab" aria-hidden="true" />
              <span className="ofr-badge" aria-hidden="true">
                <Icon />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}