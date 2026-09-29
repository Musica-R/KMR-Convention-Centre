import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
} from "react-icons/fa";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { site } from "../data/site";
import "../style/footer.css";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { label: "Facebook", href: site.facebook || "#", icon: <FaFacebookF /> },
  { label: "Instagram", href: site.instagram || "#", icon: <FaInstagram /> },
  { label: "YouTube", href: site.youtube || "#", icon: <FaYoutube /> },
  { label: "Location", href: site.map, icon: <FaMapMarkerAlt /> },
];

export default function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">KMR</span>
              <span className="footer__logo-divider" aria-hidden="true" />
              <span className="footer__logo-text">Convention Centre</span>
            </div>

            <p className="footer__about">
              Weddings, receptions and family functions for up to 1200 guests in
              Thenkurussi, Palakkad since {site.since}.
            </p>

            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="footer__social"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="footer__tagline">
              <span className="footer__tagline-line" />
              <span className="footer__tagline-text">
                Your Special Moments <span>Our Priority</span>
              </span>
              <span className="footer__tagline-line" />
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">
                    <FaChevronRight className="footer__chevron" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <a href={site.phoneLink} className="footer__contact-item">
                  <span className="footer__icon"><FaPhoneAlt /></span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__contact-item"
                >
                  <span className="footer__icon"><FaWhatsapp /></span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.map}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__contact-item"
                >
                  <span className="footer__icon"><FaMapMarkerAlt /></span>
                  Kunnukadu, Thenkurussi
                </a>
              </li>
              <li>
                <div className="footer__contact-item">
                  <span className="footer__icon"><FiClock /></span>
                  Mon – Sun, 9:00 am – 5:00 pm
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer__col">
            <h4 className="footer__title">Plan Your Event</h4>
            <p className="footer__cta-text">
              Let us make your special day unforgettable with our elegant venues
              and exceptional service.
            </p>
            <a href={site.phoneLink} className="footer__btn">
              <FaPhoneAlt />
              <span>Call to book</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bar">

        <div className="footer__bar-inner">

          <p className="footer__copy">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}