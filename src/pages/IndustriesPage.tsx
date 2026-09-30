import { useNav, hashFor, type Page } from "@/NavContext";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  const { navigate } = useNav();
  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  return (
    <main className="ind">
      <section className="pp-intro">
        <div className="container">
          <h1>Industries we supply.</h1>
          <p>Start from what you make. Each industry shows the parts we support and the materials behind them.</p>
          <nav className="pp-jump" aria-label="Industries">
            {industries.map((i) => (
              <a key={i.slug} {...link("industries", i.slug)}>{i.short}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="ind-list">
        <div className="container">
          {industries.map((ind, idx) => (
            <article key={ind.slug} id={ind.slug} className={`ind-panel${idx % 2 ? " flip" : ""}`}>
              <div className="ind-img">
                <img src={ind.img} alt={ind.name} loading={idx < 2 ? "eager" : "lazy"} />
                <span className="ind-num">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="ind-body">
                <h2>{ind.name}</h2>
                <p>{ind.intro}</p>
                <div className="ind-block">
                  <small>Typical parts</small>
                  <ul className="ind-parts">{ind.parts.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div className="ind-block">
                  <small>Materials we supply</small>
                  <div className="ind-mats">
                    {ind.materials.map(([slug, label]) => (
                      <a key={label} className="ind-mat" {...link("family", slug)}>
                        {label} <span className="arrow">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Don't see your industry?</h2>
              <p>Tell us what you make and how you process it — we'll point you to the right materials.</p>
            </div>
            <div className="cta-actions" style={{ flexWrap: "wrap", gap: 12 }}>
              <a className="btn primary" {...link("quote")}>Request a Quote <span className="arrow">↗</span></a>
              <a className="btn btn-outline-light" {...link("contact")}>Ask an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
