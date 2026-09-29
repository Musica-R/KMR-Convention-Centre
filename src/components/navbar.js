import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { site } from "../data/site";
import "../style/navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid || open ? "nav--solid" : ""}`}>
      <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
        <span className="nav__mark">KMR</span>
        <span className="nav__name">Convention Centre</span>
      </Link>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <a className="nav__cta" href={site.phoneLink}>
          <FaPhoneAlt /> Call to book
        </a>
      </nav>

      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
