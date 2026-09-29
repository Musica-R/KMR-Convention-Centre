import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaRing,
  FaGlassCheers,
  FaBirthdayCake,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import "../style/eventsShowcase.css";

// Put your event photos in: public/assets/
// (wed.jpg, rec.jpg, fam.jpg, cor.jpg)
const defaultEvents = [
  {
    icon: <FaRing />,
    title: "Weddings",
    text: "Ceremony, feast and a wide courtyard for every guest.",
    img: "/assets/wed.jpg",
  },
  {
    icon: <FaGlassCheers />,
    title: "Receptions",
    text: "Stage, seating and a dedicated dining area.",
    img: "/assets/rec.jpg",
  },
  {
    icon: <FaBirthdayCake />,
    title: "Family functions",
    text: "Birthdays, engagements and get-togethers.",
    img: "/assets/fam.jpg",
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate",
    text: "Meetings, launches and annual days.",
    img: "/assets/cor.jpg",
  },
];

export default function EventsShowcase({
  title = "Events we host",
  events = defaultEvents,
  venueName = "KMR Convention Centre",
  linkTo = "/events",
  linkLabel = "See all events",
}) {
  const rootRef = useRef(null);

  /* Adds .is-in to the section, heading, each card and the link
     the first time they scroll into view. Self-contained: it does
     not depend on any page-level hook. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = [root, ...root.querySelectorAll(".evs-r")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="evs" ref={rootRef}>
      <div className="evs-inner">
        <header className="evs-head evs-r">
          <h2 className="evs-heading">{title}</h2>
        </header>

        <div className="evs-grid">
          {events.map((e, i) => (
            <article
              key={e.title}
              className="evs-item evs-r"
              style={{ "--evs-d": `${Math.min(i, 3) * 150}ms` }}
            >
              <div className="evs-photo">
                <img
                  src={e.img}
                  alt={`${e.title} at ${venueName}`}
                  loading="lazy"
                />
              </div>
              <span className="evs-line" aria-hidden="true" />
              <span className="evs-icon">{e.icon}</span>
              <h3 className="evs-title">{e.title}</h3>
              <p className="evs-text">{e.text}</p>
            </article>
          ))}
        </div>

        <Link to={linkTo} className="evs-link evs-r">
          {linkLabel} <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}