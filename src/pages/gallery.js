import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PageHeader from "../components/pageheader";
import { gallery, images } from "../data/site";
import "../style/pages.css";
import "../style/home.css";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <main>
      <PageHeader title="Gallery" text="A look at the venue." image={images.front} />
      <section className="section container">
        <div className="gallery">
          {gallery.map((g) => (
            <button key={g.alt} className="gallery__item" onClick={() => setActive(g)}>
              <img src={g.src} alt={g.alt} />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-label={active.alt}>
          <button className="lightbox__close" aria-label="Close"><FaTimes /></button>
          <img src={active.src} alt={active.alt} />
        </div>
      )}
    </main>
  );
}
