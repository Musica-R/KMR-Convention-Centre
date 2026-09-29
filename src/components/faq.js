import { useState } from "react";
import { FiChevronDown, FiPhone,
  FiMail,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";
import { faqs, searches, site } from "../data/site";
import hall from "../assets/faq-hall.png";
import "../style/faq.css";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const [topic, setTopic] = useState(0);

  return (
    <section className="kfaq">
      <div className="kfaq__main">
        <div className="kfaq__hallwrap" aria-hidden="true">
          {/* <img className="kfaq__hall" src={hall} alt="" /> */}
        </div>
      
        <div className="container kfaq__grid">
          {/* ---------- Left column ---------- */}
          <div className="kfaq__intro">
            <p className="kfaq__eyebrow">
              <span>Help &amp; Information</span>
              <i />
            </p>
            <h2 className="kfaq__title">Frequently Asked Questions</h2>
            <p className="kfaq__lead">
              Find quick answers to common questions about {site.name}. If you
              need more help, feel free to contact us.
            </p>

            <div className="kfaq__topics-head">
              <span className="kfaq__topics-icon">
                <FiSearch />
              </span>
              <h3>Quick Topics</h3>
            </div>

            <ul className="kfaq__chips">
              {searches.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <button
                      type="button"
                      className={`kfaq__chip ${topic === i ? "is-active" : ""}`}
                      aria-pressed={topic === i}
                      onClick={() => setTopic(i)}
                    >
                      <Icon /> {s.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Right column ---------- */}
          <div className="kfaq__list">
            {faqs.map((f, i) => {
              const Icon = f.icon;
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`kfaq__item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="kfaq__q"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className={`kfaq__icon kfaq__icon--${f.tone}`}>
                      <Icon />
                    </span>
                    <span className="kfaq__qtext">{f.q}</span>
                    <FiChevronDown className="kfaq__chev" />
                  </button>

                  <div
                    className="kfaq__a"
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                  >
                    <div className="kfaq__a-clip">
                      <div className="kfaq__answer">
                        <p>{f.a}</p>
                        {f.actions && (
                          <div className="kfaq__actions">
                            <a className="kfaq__pill" href={site.phoneLink}>
                              <FiPhone /> Call us
                            </a>
                            <a
                              className="kfaq__pill kfaq__pill--wa"
                              href={`https://wa.me/${site.whatsapp}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaWhatsapp /> WhatsApp
                            </a>
                            <a
                              className="kfaq__pill kfaq__pill--mail"
                              href="/contact"
                            >
                              <FiMail /> Send Enquiry
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Bottom contact strip ---------- */}
      <div className="kfaq__strip">
        <div className="container kfaq__strip-grid">
          <ul className="kfaq__contacts">
            <li>
              <FiMapPin />
              <span>
                {site.name}
                <br />
                Palakkad
              </span>
            </li>
            <li>
              <FiPhone />
              <a href={site.phoneLink}>{site.phoneDisplay}</a>
            </li>
            <li>
              <FaWhatsapp />
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <div className="kfaq__more">
            <h3>
              <i /> Have More Questions? <i />
            </h3>
            <p>
              We&rsquo;re here to help! Get in touch with our team for
              personalised assistance.
            </p>
          </div>

          <a className="kfaq__book" href={site.phoneLink}>
            <FiPhone /> Call to Book
          </a>
        </div>
      </div>
    </section>
  );
}