import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaUsers,
} from "react-icons/fa";
import { site, gallery } from "../data/site";
import "../style/seeVenue.css";

/*
  Staircase layout (4 columns x 4 rows).
  "order" is the reveal sequence, one photo at a time:
    order 0        -> 1 photo  (top, col 4)
    order 1-2      -> 2 photos (row 2)
    order 3-5      -> 3 photos (row 3)
    order 6-9      -> 4 photos (bottom row)
*/
const TILES = [
  { col: 4, row: 1, order: 0 },

  { col: 3, row: 2, order: 1 },
  { col: 4, row: 2, order: 2 },

  { col: 2, row: 3, order: 3 },
  { col: 3, row: 3, order: 4 },
  { col: 4, row: 3, order: 5 },

  { col: 1, row: 4, order: 6 },
  { col: 2, row: 4, order: 7 },
  { col: 3, row: 4, order: 8 },
  { col: 4, row: 4, order: 9 },
];

const PARAGRAPHS = [
  "A look at the hall, the courtyard and the spaces where your celebration comes together. Air-conditioned rooms, a bridal suite, in-house catering and parking for 20 cars, all under one roof.",
  `The main hall comfortably hosts up to ${site.capacity} guests, so weddings, receptions and engagements can be as grand as you plan them. The wide paved courtyard gives you room to welcome guests, take photographs and arrange your own outdoor set-up.`,
  "Two air-conditioned rooms and a private bridal room keep families and wedding parties comfortable, while lighting, sound, a DJ set-up and full electricity back-up keep the day running smoothly. Outside decorators are welcome, and you are free to visit during working hours before you book.",
];

export default function SeeVenue() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // starts once the section is clearly on screen
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Uses the photos in data/site.js. If there are fewer than 10,
  // they repeat until all 10 slots are filled.
  const photos = gallery.length ? gallery : [];

  return (
    <section
      ref={sectionRef}
      className={`svn ${visible ? "svn--visible" : ""}`}
    >
      <div className="svn__inner">
        <div className="svn__grid">
          {/* Heading and paragraphs (top-left) */}
          <header className="svn__head">
            <p className="svn__eyebrow">{site.name}</p>
            <h2 className="svn__title">See the venue</h2>
            <span className="svn__rule" />
            {PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 24)} className="svn__text">
                {p}
              </p>
            ))}
          </header>

          {/* Site details (left, beside the steps) */}
          <div className="svn__details">
            <ul className="svn__list">
              <li>
                <span className="svn__icon"><FaUsers /></span>
                <div>
                  <strong>Capacity</strong>
                  <span>Up to {site.capacity} guests</span>
                </div>
              </li>
              <li>
                <span className="svn__icon"><FaClock /></span>
                <div>
                  <strong>Visiting hours</strong>
                  <span>{site.hours}</span>
                </div>
              </li>
              <li>
                <span className="svn__icon"><FaMapMarkerAlt /></span>
                <div>
                  <strong>Address</strong>
                  <span>{site.address.join(", ")}</span>
                </div>
              </li>
              <li>
                <span className="svn__icon"><FaPhoneAlt /></span>
                <div>
                  <strong>Call to book</strong>
                  <a href={site.phoneLink}>{site.phoneDisplay}</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Since badge (left, next to the third row) */}
          <div className="svn__since">
            <strong>{site.since}</strong>
            <span>Hosting celebrations since</span>
            <Link to="/gallery" className="svn__more">
              Open gallery <FaArrowRight />
            </Link>
          </div>

          {photos.length > 0 &&
            TILES.map((t) => {
              const photo = photos[t.order % photos.length];
              return (
                <figure
                  key={`${t.col}-${t.row}`}
                  className="svn__tile"
                  style={{
                    "--svn-col": t.col,
                    "--svn-row": t.row,
                    "--svn-order": t.order,
                  }}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </figure>
              );
            })}
        </div>
      </div>
    </section>
  );
}