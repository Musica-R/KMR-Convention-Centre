import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaDirections } from "react-icons/fa";
import PageHeader from "../components/pageheader";
import { site, images } from "../data/site";
import "../style/home.css";
import "../style/pages.css";
import "../style/sections.css";
import "../style/home.css";

const initial = { name: "", event: "Wedding", date: "", guests: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend needed: the enquiry opens in WhatsApp, ready to send.
  const send = (e) => {
    e.preventDefault();
    const text =
      `Hello KMR Convention Centre,\n` +
      `Name: ${form.name}\nEvent: ${form.event}\nDate: ${form.date}\n` +
      `Guests: ${form.guests}\n${form.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main>
      <PageHeader title="Contact" text="Check availability and get pricing for your date." image={images.entrance} />
      <section className="section container contact">
        <div className="contact__info">
          <h2>Talk to us</h2>
          <a href={site.phoneLink}><FaPhoneAlt /> {site.phoneDisplay}</a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
          <p className="hours"><FaClock /> <span>{site.hours}</span></p>
          <p className="hours"><FaMapMarkerAlt /> <span>{site.address.join(", ")}</span></p>

          <div className="mapcard">
            <img src={images.front} alt="KMR Convention Centre building" />
            <div className="mapcard__body">
              <strong>Visit before you book</strong>
              <span>See the hall, dining area and parking in person.</span>
              <a className="btn btn--gold" href={site.map} target="_blank" rel="noreferrer"><FaDirections /> Get directions</a>
              <a className="mapcard__alt" href={site.mapShare} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={send}>
          <h2>Send an enquiry</h2>
          <label>Your name
            <input name="name" value={form.name} onChange={set} required autoComplete="name" />
          </label>
          <div className="form__row">
            <label>Event type
              <select name="event" value={form.event} onChange={set}>
                <option>Wedding</option>
                <option>Reception</option>
                <option>Birthday / family function</option>
                <option>Corporate event</option>
              </select>
            </label>
            <label>Event date
              <input type="date" name="date" value={form.date} onChange={set} required />
            </label>
          </div>
          <label>Number of guests
            <input type="number" min="1" name="guests" value={form.guests} onChange={set} />
          </label>
          <label>Message
            <textarea name="message" rows="4" value={form.message} onChange={set} />
          </label>
          <button className="btn btn--gold" type="submit"><FaWhatsapp /> Send on WhatsApp</button>
        </form>
      </section>
    </main>
  );
}
