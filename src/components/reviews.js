import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { reviews } from "../data/site";
import "../style/sections.css";
import "../style/reviews.css";

/* Layout variant per card, in order (matches the reference mosaic) */
const VARIANTS = ["portrait", "quote", "bubble", "rating", "split"];

/* Guest profile images (Unsplash profile-photo format) */
const unsplash = (id, w = 240, h = 240) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&crop=faces&q=80`;

const PEOPLE = [
  {
    name: "Priya Nair",
    role: "Wedding Host",
    photo: "photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Corporate Event Planner",
    photo: "photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    name: "Anitha Krishnan",
    role: "Reception Guest",
    photo: "photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    role: "Family Function Host",
    photo: "photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    name: "Meera Raghavan",
    role: "Engagement Ceremony Host",
    photo: "photo-1534528741775-53994a69daeb",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="gr-stars" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} aria-hidden="true" />
      ))}
    </div>
  );
}

function Avatar({ person, size = 240, className = "" }) {
  return (
    <img
      className={`gr-avatar ${className}`}
      src={unsplash(person.photo, size, size)}
      alt={person.name}
      width={size}
      height={size}
      loading="lazy"
    />
  );
}

function Person({ person }) {
  return (
    <div className="gr-person">
      <strong className="gr-person__name">{person.name}</strong>
      <span className="gr-person__role">{person.role}</span>
    </div>
  );
}

function Card({ review, person, variant }) {
  switch (variant) {
    /* Tall photo card */
    case "portrait":
      return (
        <figure className="gr-card gr-card--portrait">
          <img
            className="gr-portrait__img"
            src={unsplash(person.photo, 640, 800)}
            alt={person.name}
            loading="lazy"
          />
          <div className="gr-portrait__body">
            <Stars count={person.rating} />
            <blockquote className="gr-quote">
              <h3>{review.title}</h3>
              <p>{review.text}</p>
            </blockquote>
            <figcaption>
              <Person person={person} />
            </figcaption>
          </div>
        </figure>
      );

    /* Quote mark on top, avatar + name at the bottom */
    case "quote":
      return (
        <figure className="gr-card gr-card--quote">
          <FaQuoteLeft className="gr-icon" aria-hidden="true" />
          <blockquote className="gr-quote">
            <h3>{review.title}</h3>
            <p>{review.text}</p>
          </blockquote>
          <figcaption className="gr-foot">
            <Person person={person} />
            <Avatar person={person} size={96} className="gr-avatar--sm" />
          </figcaption>
        </figure>
      );

    /* Speech bubble, centred avatar, stars, closing quote mark */
    case "bubble":
      return (
        <figure className="gr-card gr-card--bubble">
          <Avatar person={person} size={120} className="gr-avatar--ring" />
          <Stars count={person.rating} />
          <blockquote className="gr-quote">
            <h3>{review.title}</h3>
            <p>{review.text}</p>
          </blockquote>
          <figcaption>
            <Person person={person} />
          </figcaption>
          <FaQuoteRight className="gr-icon gr-icon--end" aria-hidden="true" />
        </figure>
      );

    /* Header row: title + stars on the left, avatar on the right */
    case "rating":
      return (
        <figure className="gr-card gr-card--rating">
          <div className="gr-rating__head">
            <div>
              <h3>{review.title}</h3>
              <Stars count={person.rating} />
            </div>
            <Avatar person={person} size={110} className="gr-avatar--ring" />
          </div>
          <blockquote className="gr-quote">
            <p>{review.text}</p>
          </blockquote>
          <figcaption>
            <Person person={person} />
          </figcaption>
        </figure>
      );

    /* Photo on the left, text on the right */
    default:
      return (
        <figure className="gr-card gr-card--split">
          <img
            className="gr-split__img"
            src={unsplash(person.photo, 360, 480)}
            alt={person.name}
            loading="lazy"
          />
          <div className="gr-split__body">
            <FaQuoteLeft className="gr-icon gr-icon--sm" aria-hidden="true" />
            <blockquote className="gr-quote">
              <h3>{review.title}</h3>
              <p>{review.text}</p>
            </blockquote>
            <figcaption>
              <Person person={person} />
            </figcaption>
          </div>
        </figure>
      );
  }
}

export default function Reviews() {
  return (
    <section className="section container gr-section">
      <h2>What guests say</h2>
      <div className="gr-grid">
        {reviews.slice(0, VARIANTS.length).map((r, i) => (
          <Card
            key={r.title}
            review={r}
            person={PEOPLE[i % PEOPLE.length]}
            variant={VARIANTS[i]}
          />
        ))}
      </div>
    </section>
  );
}