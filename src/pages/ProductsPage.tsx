import { useEffect, useRef } from "react";
import { useNav, hashFor, type Page } from "@/NavContext";
import { families, productsByFamily, type Family } from "@/data/products";

const ALL = "all";

export default function ProductsPage() {
  const { anchor, navigate } = useNav();
  const active = families.some((f) => f.slug === anchor) ? anchor : ALL;
  const shown = active === ALL ? families : families.filter((f) => f.slug === active);
  const tabsRef = useRef<HTMLElement>(null);

  // Keep the selected tab visible when the tab strip scrolls sideways (phones).
  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLElement>(".pp-tab.active");
    const strip = tabsRef.current;
    if (el && strip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({ left: el.offsetLeft - 14, behavior: "smooth" });
    }
  }, [active]);

  const total = families.reduce((n, f) => n + productsByFamily[f.slug].length, 0);

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
          <h1>Our products.</h1>
          <p>
            Polymer materials for infrastructure, packaging, automotive and industrial applications. Pick a
            family to see only its products.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="pp-tabbar">
        <div className="container">
          <nav className="pp-tabs" aria-label="Product families" ref={tabsRef}>
            <a className={`pp-tab${active === ALL ? " active" : ""}`} aria-current={active === ALL ? "page" : undefined} {...link("products", ALL)}>
              All <span className="pp-count">{total}</span>
            </a>
            {families.map((f) => (
              <a
                key={f.slug}
                className={`pp-tab${active === f.slug ? " active" : ""}`}
                aria-current={active === f.slug ? "page" : undefined}
                {...link("products", f.slug)}
              >
                {f.shortName} <span className="pp-count">{productsByFamily[f.slug].length}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Product shelves */}
      <section className="pp-shelves" id={ALL}>
        <div className="container">
          {shown.map((f) => (
            <Shelf key={f.slug} family={f} single={active !== ALL} link={link} />
          ))}
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

function Shelf({
  family: f,
  single,
  link,
}: {
  family: Family;
  single: boolean;
  link: (p: Page, a?: string) => { href: string; onClick: (e: React.MouseEvent) => void };
}) {
  const items = productsByFamily[f.slug];
  return (
    <article className={`pp-shelf${single ? " single" : ""}`} id={f.slug}>
      <header className="pp-shelf-head">
        <div className="pp-shelf-img">
          <img src={f.img} alt={f.name} loading="lazy" />
          <span className="chip chip-lg">{f.chip}</span>
        </div>
        <div className="pp-shelf-info">
          <span className="pp-shelf-num">{f.num}</span>
          <h2>{f.name}</h2>
          <p>{f.description}</p>
          {!single && (
            <a className="pp-shelf-link" {...link("products", f.slug)}>
              Only show {f.shortName} <span className="arrow">→</span>
            </a>
          )}
        </div>
      </header>
      <ul className="pp-items">
        {items.map((p) => (
          <li key={p.code}>
            <a className="pp-item" {...link("contact")}>
              <span className="pp-item-code">{p.code}</span>
              <span className="pp-item-name">{p.name}</span>
              <span className="pp-item-cta">Request <span className="arrow">↗</span></span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
