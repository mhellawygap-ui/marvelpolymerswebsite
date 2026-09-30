import factoryImg from "@/imports/_890b16__8_.png";
import { useNav } from "@/NavContext";
import TeamSection from "@/components/TeamSection";

const principles = [
  {
    num: "01",
    title: "Application-Led Selection",
    desc: "We start with end use, processing and performance requirements — not just the resin family.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 10v8l5 3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Specialized Portfolio",
    desc: "Polymer families, compounds, coatings, engineering materials and performance additives — under one commercial relationship.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="10" height="10" rx="2" />
        <rect x="20" y="6" width="10" height="10" rx="2" />
        <rect x="6" y="20" width="10" height="10" rx="2" />
        <rect x="20" y="20" width="10" height="10" rx="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Technical + Commercial Support",
    desc: "Material guidance combined with sourcing, documentation and commercial coordination.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28V16l10-8 10 8v12" />
        <rect x="14" y="20" width="8" height="8" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Flexible Supply Models",
    desc: "Support for project-based, recurring and international supply requirements across different commercial structures.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h24M18 6v24" />
        <circle cx="18" cy="18" r="12" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "International Coordination",
    desc: "Sourcing, logistics and delivery planning managed through one commercial flow — for Africa, Europe and beyond.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="14" />
        <path d="M4 18h28M18 4c-4 4-6 8-6 14s2 10 6 14M18 4c4 4 6 8 6 14s-2 10-6 14" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "One Point of Contact",
    desc: "A simpler route from requirement to material options, technical documents and commercial decision.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zM6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      </svg>
    ),
  },
];

function VisionIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="20" cy="20" rx="16" ry="9" />
      <circle cx="20" cy="20" r="4" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" stroke="none" />
      <line x1="20" y1="4" x2="20" y2="8" />
      <line x1="20" y1="32" x2="20" y2="36" />
      <line x1="4" y1="20" x2="8" y2="20" />
      <line x1="32" y1="20" x2="36" y2="20" />
    </svg>
  );
}

export default function AboutPage() {
  const { navigate } = useNav();

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="eyebrow">About Marvel Polymers</div>
            <h1>A technical-commercial partner for industrial polymer supply.</h1>
            <p>
              Marvel Polymers connects industrial customers with specialized polymer solutions,
              application-focused guidance and dependable supply support.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
                Talk to Marvel <span className="arrow">↗</span>
              </a>
              <a className="btn ghost" href="#/products" onClick={(e) => { e.preventDefault(); navigate("products"); }}>
                Explore Products
              </a>
            </div>
          </div>
          <div className="page-visual">
            <img src={factoryImg} alt="Marvel Polymers factory production line" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container story-grid">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>Built around the application, not just the resin.</h2>
          </div>
          <div>
            <p>
              Material selection is only one part of a successful supply decision. Marvel considers
              the application, processing method, technical requirements, commercial structure and
              delivery needs together — helping customers simplify complex sourcing decisions.
            </p>
            <p>
              Our role is to connect industrial requirements with appropriate polymer families,
              suitable sourcing options, available technical documentation and a clear commercial
              path to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Marvel Different */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What Makes Marvel Different</div>
              <h2>Technical thinking. Commercial execution.</h2>
            </div>
            <p>A focused model built to make industrial material sourcing easier to evaluate, structure and manage.</p>
          </div>
          <div className="principles">
            {principles.map((p) => (
              <article key={p.num} className="principle">
                <div className="principle-header">
                  <div className="principle-num">{p.num}</div>
                  <div className="principle-icon" style={{ color: "var(--burgundy)" }}>{p.icon}</div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <TeamSection />

      {/* Vision & Mission */}
      <section className="section alt">
        <div className="container story-grid">
          <div>
            <div style={{ color: "var(--burgundy)", marginBottom: 14 }}><VisionIcon /></div>
            <div className="eyebrow">Vision</div>
            <h2>Trusted polymer solutions across industrial markets.</h2>
            <p>
              To become a trusted international partner for specialized polymer solutions across
              infrastructure, mobility and industrial manufacturing.
            </p>
          </div>
          <div>
            <div style={{ color: "var(--burgundy)", marginBottom: 14 }}><MissionIcon /></div>
            <div className="eyebrow">Mission</div>
            <h2>Make complex sourcing simpler.</h2>
            <p>
              To connect industrial customers with the right polymer materials, technical guidance
              and dependable supply solutions — making complex sourcing simpler, faster and more
              commercially effective.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Start a Conversation</div>
              <h2>Have a material requirement?</h2>
              <p>
                Share your application, specification or current grade and let us help identify the
                appropriate next step.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" href="#/quote" onClick={(e) => { e.preventDefault(); navigate("quote"); }}>
                Request a Quote <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
