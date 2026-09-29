import { Link } from "react-router-dom";
import { FaRing, FaGlassCheers, FaBirthdayCake, FaBriefcase } from "react-icons/fa";
import PageHeader from "../components/pageheader";
import useScrollReveal, { rvd } from "../hooks/useScrollReveal";
import { images } from "../data/site";
import "../style/pages.css";
import "../style/home.css";
import "../style/eventsPage.css";

// Event photos live in: public/assets/  (same files as the home page showcase)
const events = [
  {
    icon: <FaRing />,
    title: "Weddings",
    text: "Make your wedding day truly unforgettable with a beautiful and spacious venue designed to bring every special moment together. From the ceremony and celebrations to dining and guest gatherings, our auditorium, dining area, and courtyard provide a comfortable and welcoming setting for your family and friends. With convenient parking and thoughtfully arranged spaces, you can enjoy your special day while your guests relax, celebrate, and create wonderful memories with you.",
    img: "/assets/wed.jpg",
  },
  {
    icon: <FaGlassCheers />,
    title: "Receptions",
    text: "Celebrate your reception in a spacious and welcoming venue where every detail is designed to make your celebration comfortable and memorable. Our stage-ready hall provides an ideal setting for grand entrances, special performances, speeches, and celebrations, while comfortable seating and a separate dining area make it easy for your guests to enjoy the occasion. Whether you are planning an intimate gathering or a lively celebration, the space can be arranged to suit your needs.",
    img: "/assets/rec.jpg",
  },
  {
    icon: <FaBirthdayCake />,
    title: "Birthdays & Family Functions",
    text: "Turn your special family occasions into beautiful memories with a comfortable venue that brings everyone together. Perfect for birthdays, engagements, naming ceremonies, anniversaries, family get-togethers, and other meaningful celebrations, the space offers plenty of room for guests to relax, interact, enjoy food, and celebrate together. Whether it is a small family gathering or a larger celebration, our flexible venue provides a warm and enjoyable atmosphere for every occasion.",
    img: "/assets/fam.jpg",
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Events",
    text: "Create a professional and comfortable environment for your next corporate gathering with a spacious air-conditioned hall designed for a variety of business occasions. From team meetings and conferences to product launches, seminars, training sessions, and annual celebrations, the venue provides a convenient setting for bringing your team, clients, and guests together. With comfortable seating and a well-planned event space, you can focus on your program while giving your guests a pleasant experience.",
    img: "/assets/cor.jpg",
  },
];

const steps = [
  { title: "Call or message us", text: "Tell us the date, event type and guest count." },
  { title: "Visit the venue", text: "See the hall, dining area and parking in person." },
  { title: "Confirm your package", text: "Pick a package that fits your event and budget." },
];

export default function Events() {
  useScrollReveal();

  return (
    <main>
      <PageHeader
        title="Events"
        text="One venue, for every kind of celebration."
        image={images.entrance}
      />

      {/* Alternating rows: 1st text left / image right, 2nd image left / text right, ... */}
      <section className="section rv-clip">
        <div className="container evp-list">
          {events.map((e, i) => {
            const flip = i % 2 === 1;
            const textDir = flip ? "rv--right" : "rv--left";
            const mediaDir = flip ? "rv--left" : "rv--right";

            return (
              <article
                key={e.title}
                className={`evp-row${flip ? " evp-row--flip" : ""}`}
              >
                <div className="evp-content">
                  <span className={`card__icon evp-icon rv rv--pop`} style={rvd(0)}>
                    {e.icon}
                  </span>
                  <h3 className={`evp-title rv rv-title ${textDir}`} style={rvd(1, 130)}>
                    {e.title}
                  </h3>
                  <p className={`evp-text rv ${textDir}`} style={rvd(2, 130)}>
                    {e.text}
                  </p>
                </div>

                <div className={`evp-media rv rv--slow ${mediaDir}`} style={rvd(1, 100)}>
                  <div className="evp-photo">
                    <img
                      src={e.img}
                      alt={`${e.title} at KMR Convention Centre`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* How booking works */}
      <section className="section section--sky">
        <div className="container">
          <h2 className="rv rv--up rv-title">How booking works</h2>
          <ol className="steps">
            {steps.map((s, i) => {
              const base = i * 170;
              return (
                <li
                  key={s.title}
                  className="rv rv--up"
                  style={{ "--rv-d": `${base}ms` }}
                >
                  <h3 className="rv rv--up" style={{ "--rv-d": `${base + 250}ms` }}>{s.title}</h3>
                  <p className="rv rv--up" style={{ "--rv-d": `${base + 380}ms` }}>{s.text}</p>
                </li>
              );
            })}
          </ol>
          <div className="rv rv--up" style={rvd(1, 200)}>
            <Link to="/contact" className="btn btn--navy">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </main>
  );
}