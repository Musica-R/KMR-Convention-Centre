import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt, FaWhatsapp, FaArrowRight, FaCheck,
  FaSnowflake, FaParking, FaUsers, FaBolt
} from "react-icons/fa";
import Reviews from "../components/reviews";
import Faq from "../components/faq";
import EventsShowcase from "../components/EventsShowcase";
import SeeVenue from "../components/SeeVenue";
import { site, images } from "../data/site";
import OfferCards from "../components/Offercards";
import "../style/home.css";
import "../style/sections.css";
import "../style/offers.css";


const highlights = [
  { icon: <FaUsers />, text: `Up to ${site.capacity} guests` },
  { icon: <FaSnowflake />, text: "Air-conditioned hall and rooms" },
  { icon: <FaParking />, text: "Parking for 20 cars" },
  { icon: <FaBolt />, text: "Electricity back-up" },
];

const aboutPoints = [
  "Air-conditioned hall, rooms and bridal suite",
  "In-house catering with transparent pricing",
  "Wide courtyard and parking for 20 cars",
  "Lighting, sound and full power back-up",
];

/* Stagger helper: rvd(2) -> element animates 2 steps after the first one */
const rvd = (step, gap = 120) => ({ "--rv-d": `${step * gap}ms` });

/* Adds .rv--in to every .rv element when it scrolls into view (once) */
function useScrollReveal() {
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

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <section className="hero">
        <img className="hero__img" src={images.entrance} alt="KMR Convention Centre entrance" />
        <div className="hero__shade" />
        <div className="hero__body">
          <p className="hero__place rv rv--up" style={rvd(1, 150)}>Thenkurussi, Palakkad</p>
          <h1 className="rv rv--up" style={rvd(2, 150)}>Your celebration, under one roof.</h1>
          <p className="hero__lead rv rv--up" style={rvd(3, 150)}>
            A convention centre for up to {site.capacity} guests, with parking,
            air-conditioned rooms and in-house catering.
          </p>
          <div className="actions rv rv--up" style={rvd(4, 150)}>
            <a className="btn btn--gold" href={site.phoneLink}><FaPhoneAlt /> Call {site.phoneDisplay}</a>
            <a className="btn btn--ghost" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp us</a>
          </div>
        </div>
      </section>

      <section className="strip">
        {highlights.map((h, i) => (
          <div key={h.text} className="strip__item rv rv--up" style={rvd(i, 130)}>
            {h.icon}<span>{h.text}</span>
          </div>
        ))}
      </section>

      {/* About section */}
      <section className="section about-section">
        <div className="about-inner">
          <div className="about-media">
            <img
              className="about-img about-img--main rv rv--left"
              src={images.front}
              alt="Front view of the convention centre and courtyard"
            />
            <img
              className="about-img about-img--inset rv rv--right"
              style={rvd(2, 150)}
              src={images.entrance}
              alt="Entrance of KMR Convention Centre"
              loading="lazy"
            />
            <div className="about-badge rv rv--zoom" style={rvd(4, 150)}>
              <strong>{site.capacity}</strong>
              <span>guests capacity</span>
            </div>
          </div>

          <div className="about-content">
            <p className="about-eyebrow rv rv--up" style={rvd(0)}>About the venue</p>
            <h2 className="about-title rv rv--up" style={rvd(1)}>Space, comfort and warm hospitality</h2>
            <p className="about-text rv rv--up" style={rvd(2)}>
              KMR Convention Centre blends style, space and comfort, with elegant
              indoor spaces and outdoor areas you can tailor to your theme. It
              hosts weddings, family milestones and corporate gatherings, and
              the staff take care of the details.
            </p>
            <p className="about-text rv rv--up" style={rvd(3)}>
              Pricing is time-based, and packages adapt to your event's size and style.
            </p>

            <ul className="about-points">
              {aboutPoints.map((p, i) => (
                <li key={p} className="rv rv--up" style={rvd(4 + i, 110)}>
                  <span className="about-check"><FaCheck /></span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="about-actions rv rv--up" style={rvd(9, 100)}>
              <Link to="/about" className="btn btn--navy">Read our story <FaArrowRight /></Link>
              <a className="about-call" href={site.phoneLink}><FaPhoneAlt /> {site.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Events we host */}
      <div className="rv rv--up rv--slow">
        <EventsShowcase />
      </div>

      {/* What the venue offers */}
      <section className="section section--sky">
        <div className="container">

          <div className="rv rv--up rv--slow">
            <OfferCards heading="What the venue offers" />
          </div>

          {/* <div className="ofr-home-more rv rv--up" style={rvd(2)}>
            <Link to="/offers" className="btn btn--navy">See all facilities <FaArrowRight /></Link>
          </div>
           */}
        </div>
      </section>

      <section className="reviews-wrap">
        <div className="rv rv--up rv--slow">
          <Reviews />
        </div>
      </section>

      {/* See the venue */}
      <div className="rv rv--up rv--slow">
        <SeeVenue />
      </div>

      <section className="cta">
        <h2 className="rv rv--up" style={rvd(0)}>Planning Your Special Day ? Check Availability.</h2>
        <div className="rv rv--up" style={rvd(1, 200)}>
          <Link to="/contact" className="btn btn--gold">Send an enquiry</Link>
        </div>
      </section>

      <div className="rv rv--up rv--slow">
        <Faq />
      </div>
    </main>
  );
}