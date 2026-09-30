import { useNav, hashFor, type Page } from "@/NavContext";
import { families, type Family } from "@/data/products";

/** Card sizes follow the home-page product grid: 2 wide · 3 narrow · 2 wide. */
const SIZES = ["wide", "wide", "narrow", "narrow", "narrow", "wide", "wide"];

export default function ProductsPage() {
  const { navigate } = useNav();

  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  return (
    <main className="pp">
      {/* Intro */}
      <section className="pp-intro">
        <div className="container">
          <div className="eyebrow">Products</div>
          <h1>Our product families.</h1>
          <p>
            Seven material families for infrastructure, packaging, automotive and industrial applications.
            Choose a family to see its grades and applications.
          </p>
          <nav className="pp-jump" aria-label="Product families">
            {families.map((f) => (
              <a key={f.slug} {...link("products", f.slug)}>{f.shortName}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* Families */}
      <section className="section alt pp-families">
        <div className="container">
          <div className="pp-grid">
            {families.map((f, i) => (
              <FamilyCard key={f.slug} family={f} size={SIZES[i]} link={link} />
            ))}
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Need help choosing?</div>
              <h2>Not sure which material fits?</h2>
              <p>
                Tell us the application, how you process it or the grade you use today. We'll suggest the right
                options.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" {...link("contact")}>
                Ask Marvel <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FamilyCard({
  family: f,
  size,
  link,
}: {
  family: Family;
  size: string;
  link: (p: Page, a?: string) => { href: string; onClick: (e: React.MouseEvent) => void };
}) {
  return (
    <a id={f.slug} className={`pp-card ${size}`} {...link("products", f.slug)}>
      <div className="pp-card-img">
        <img src={f.img} alt={f.name} loading="lazy" />
        <span className="chip chip-lg">{f.chip}</span>
      </div>
      <div className="pp-card-body">
        <span className="pp-card-num">{f.num}</span>
        <h3>{f.name}</h3>
        <p>{f.description}</p>
        <div className="pp-card-types">
          {f.types.map((t) => <span key={t}>{t}</span>)}
        </div>
        <span className="pp-card-cta">View products <span className="arrow">→</span></span>
      </div>
    </a>
  );
}
