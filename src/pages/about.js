import {
  FaSnowflake, FaUtensils, FaParking, FaWheelchair, FaLandmark, FaMapMarkerAlt,
  FaCheckCircle, FaTimesCircle, FaUsers, FaPhoneAlt,
} from "react-icons/fa";
import PageHeader from "../components/pageheader";
import useScrollReveal, { rvd } from "../hooks/useScrollReveal";
import { site, images, aboutImages } from "../data/site";
import "../style/home.css";
import "../style/pages.css";
import "../style/sections.css";
import "../style/about.css";

const stats = [
  { value: `${site.capacity}`, label: "Guest capacity" },
  { value: `${site.since}`, label: "Serving since" },
  { value: "20", label: "Car parking" },
  { value: "2", label: "AC rooms" },
];

const facilities = [
  { icon: <FaUsers />, title: "1200 guest capacity", text: "One well-planned event area for intimate gatherings and grand weddings." },
  { icon: <FaSnowflake />, title: "AC and non-AC rooms", text: "2 air-conditioned rooms, plus non-AC rooms." },
  { icon: <FaUtensils />, title: "Dining area", text: "A dedicated food area with in-house catering." },
  { icon: <FaParking />, title: "Parking", text: "Parking for 20 cars and a wide paved courtyard. No valet parking." },
  { icon: <FaWheelchair />, title: "Accessible entrance", text: "Wheelchair-accessible entrance and exit." },
  { icon: <FaLandmark />, title: "Accessible parking", text: "Wheelchair-accessible spaces in the car park." },
];

const events = [
  { title: "Weddings", text: "Grand ceremonies for up to 1200 guests.", img: aboutImages.wedding },
  { title: "Receptions", text: "An elegant stage and warm lighting.", img: aboutImages.reception },
  { title: "Corporate", text: "Conferences, launches and meetings.", img: aboutImages.corporate },
  { title: "Birthdays", text: "Parties and family celebrations.", img: aboutImages.birthday },
];

const policies = [
  { text: "Outside decorators allowed", ok: true },
  { text: "Outside DJ allowed", ok: true },
  { text: "Outside food allowed", ok: true },
  { text: "Outside alcohol not allowed", ok: false },
];

const info = [
  ["Property type", "Convention hall"],
  ["Price type", "Time-based rent"],
  ["Allowed cuisine", "Veg and non-veg"],
  ["Event areas", "1"],
  ["Valet parking", "No"],
  ["Working hours", site.hours],
];

export default function About() {
  useScrollReveal();

  return (
    <main className="about">
      <PageHeader
        title="About KMR Convention Centre"
        text={`Hosting the community of Thenkurussi since ${site.since}.`}
        image={images.front}
      />

      {/* Our story */}
      <section className="section rv-clip">
        <div className="container ab-story">
          <div className="ab-collage rv rv--left rv--slow">
            <img
              className="ab-collage__main"
              src={aboutImages.story1}
              alt="Wedding celebration in a decorated hall"
              loading="lazy"
            />
            <img
              className="ab-collage__sub"
              src={aboutImages.story2}
              alt="Elegant table decoration"
              loading="lazy"
            />
            <div className="ab-badge">
              <strong>{site.since}</strong>
              <span>Since</span>
            </div>
          </div>

          <div className="ab-story__text">
            <span className="ab-eyebrow rv rv--up">Our story</span>
            <h2 className="rv rv--up rv-title" style={rvd(1, 150)}>
              A trusted venue for every celebration
            </h2>
            <p className="rv rv--up" style={rvd(2, 150)}>
              Established in {site.since}, KMR Convention Centre is a well-known
              banquet hall in Thenkurussi, Palakkad. Its glass-fronted entrance,
              wide courtyard and large auditorium suit weddings, receptions,
              birthdays and corporate events.
            </p>
            <p className="rv rv--up" style={rvd(3, 150)}>
              Power back-up, professional lighting and sound, and a dedicated
              staff keep your event running smoothly. Packages adapt to your
              event's size, style and requirements.
            </p>
            <div className="ab-stats">
              {stats.map((s, i) => (
                <div key={s.label} className="ab-stat rv rv--up" style={rvd(i + 4, 110)}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section section--sky">
        <div className="container">
          <div className="ab-head">
            <span className="ab-eyebrow rv rv--up">What we offer</span>
            <h2 className="rv rv--up rv-title" style={rvd(1, 120)}>Facilities</h2>
          </div>

          <div className="ab-fac">
            <figure className="ab-fac__photo rv rv--left rv--slow">
              <img src={aboutImages.hall} alt="Spacious banquet hall set for an event" loading="lazy" />
              <figcaption>
                <strong>Spacious Dining area</strong>
                <span>Comfortable for large crowds</span>
              </figcaption>
            </figure>

            <div className="ab-fac__grid">
              {facilities.map((f, i) => {
                const base = (i % 2) * 140;
                return (
                  <article
                    key={f.title}
                    className="card ab-fac__card rv rv--up"
                    style={{ "--rv-d": `${base}ms` }}
                  >
                    <span className="card__icon rv rv--pop" style={{ "--rv-d": `${base + 250}ms` }}>
                      {f.icon}
                    </span>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Events we host */}
      <section className="section">
        <div className="container">
          <div className="ab-head">
            <span className="ab-eyebrow rv rv--up">Every occasion</span>
            <h2 className="rv rv--up rv-title" style={rvd(1, 120)}>Events we host</h2>
          </div>
          <div className="ab-events">
            {events.map((e, i) => (
              <article key={e.title} className="ab-event rv rv--up" style={rvd(i, 130)}>
                <img src={e.img} alt={e.title} loading="lazy" />
                <div className="ab-event__body">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Policies + info */}
      <section className="section section--sky rv-clip">
        <div className="container two-col ab-two">
          <div className="ab-panel">
            <h2 className="rv rv--up rv-title">Venue policies</h2>
            <ul className="policies">
              {policies.map((p, i) => (
                <li
                  key={p.text}
                  className={`${p.ok ? "ok" : "no"} rv rv--left`}
                  style={rvd(i + 1, 130)}
                >
                  {p.ok ? <FaCheckCircle /> : <FaTimesCircle />} {p.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="ab-panel">
            <h2 className="rv rv--up rv-title" style={rvd(1, 100)}>Good to know</h2>
            <dl className="info">
              {info.map(([k, v], i) => (
                <div key={k} className="rv rv--right" style={rvd(i + 1, 110)}>
                  <dt>{k}</dt><dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="ab-find" style={{ backgroundImage: `url(${aboutImages.cta})` }}>
        <div className="ab-find__shade" />
        <div className="ab-find__body container">
          <span className="ab-eyebrow ab-eyebrow--light rv rv--up">Visit us</span>
          <h2 className="rv rv--up rv-title" style={rvd(1, 150)}>Find us</h2>
          <p className="ab-find__addr rv rv--up" style={rvd(2, 150)}>
            <FaMapMarkerAlt /> {site.address.join(", ")}
          </p>
          <div className="actions rv rv--up" style={rvd(3, 150)}>
            <a className="btn btn--gold" href={site.map} target="_blank" rel="noreferrer">
              <FaMapMarkerAlt /> Get directions
            </a>
            <a className="btn btn--ghost" href={site.phoneLink}>
              <FaPhoneAlt /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}