import heroImg from "@/imports/_890b16__7_.png";
import mark from "@/imports/marvel-mark.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy-col">
          <h1>
            Specialized polymers for{" "}
            <span className="accent">demanding applications.</span>
          </h1>
          <p className="hero-copy">
            Application-led material selection, technical-commercial support and dependable polymer supply for infrastructure, mobility, manufacturing and industrial applications.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#/quote">
              Request a Quote <span className="arrow">↗</span>
            </a>
            <a className="btn ghost" href="#/products">
              Explore Products <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-mark" src={mark} alt="" />
          <div className="hero-frame">
            <img src={heroImg} alt="Marvel polymer supply and logistics" />
          </div>
          <div className="floating-card">
            <strong>From material requirement to delivered solution.</strong>
            <small>Selection • Sourcing • Commercial support • Logistics</small>
          </div>
        </div>
      </div>
    </section>
  );
}
