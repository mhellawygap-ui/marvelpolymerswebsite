import { useNav, hashFor, type Page } from "@/NavContext";
import { families } from "@/data/products";
import { familyDetails, type Grade } from "@/data/familyDetails";
import { useFormSubmit } from "@/lib/useFormSubmit";

const EMAIL = "operations@marvelpolymers.com";

export default function FamilyPage() {
  const { anchor, navigate } = useNav();
  const family = families.find((f) => f.slug === anchor);
  const detail = family ? familyDetails[family.slug] : undefined;

  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  if (!family || !detail) {
    return (
      <main className="fp">
        <section className="fp-hero">
          <div className="container">
            <h1>Product family not found.</h1>
            <p><a className="btn primary" {...link("products")}>See all products</a></p>
          </div>
        </section>
      </main>
    );
  }

  const toQuote = () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const groups = Array.from(new Set(detail.grades.map((g) => g.group ?? "")));
  const gradeCount = detail.grades.length;

  return (
    <main className="fp">
      {/* 1 · Hero */}
      <section className="fp-hero">
        <div className="container fp-hero-grid">
          <div>
            <nav className="fp-crumbs" aria-label="Breadcrumb">
              <a {...link("products")}>Products</a>
              <span aria-hidden="true">/</span>
              <span>{family.shortName}</span>
            </nav>
            <h1>{family.name}</h1>
            <p className="fp-intro">{detail.intro}</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={toQuote}>Request a Quote <span className="arrow">↓</span></button>
              <a className="btn ghost" {...link("contact")}>
                Ask a Technical Question
              </a>
            </div>
          </div>
          <div className="fp-hero-visual">
            <img src={detail.heroImg ?? family.img} alt={family.name} />
            <div className="fp-stats">
              <div><strong>{detail.resinTypes.length}</strong><span>{family.typesLabel}</span></div>
              <div><strong>{gradeCount}</strong><span>Products</span></div>
              <div><strong>TDS</strong><span>On request</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Resin types */}
      <section className="section fp-section">
        <div className="container">
          <div className="fp-head">
            <h2>What's in this family.</h2>
          </div>
          <div className={`fp-types n${detail.resinTypes.length}`}>
            {detail.resinTypes.map((r, i) => (
              <article key={r.code} className="fp-type">
                <span className="fp-type-idx">{String(i + 1).padStart(2, "0")}</span>
                <strong className="fp-type-code">{r.code}</strong>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Family-specific explainer */}
      {detail.visual === "coating-layers" && <CoatingLayers />}

      {/* 4 · Applications */}
      <section className="section alt fp-section">
        <div className="container">
          <div className="fp-head">
            <h2>{detail.gradesTitle}.</h2>
          </div>

          {groups.map((g) => (
              <div key={g || "all"} className="fp-group">
                {g && <h3 className="fp-group-title">{g}</h3>}
                <div className={`fp-grades n${detail.grades.filter((x) => (x.group ?? "") === g).length}`}>
                  {detail.grades.filter((x) => (x.group ?? "") === g).map((grade) => (
                    <GradeCard key={grade.title} grade={grade} onQuote={toQuote} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 5 · Enquiry — end of the journey */}
      <QuoteSection familyName={family.name} resinTypes={detail.resinTypes.map((r) => r.code)}
        applications={detail.grades.map((g) => (g.code ? `${g.title} (${g.code})` : g.title))} />
    </main>
  );
}

function GradeCard({ grade, onQuote }: { grade: Grade; onQuote: () => void }) {
  return (
    <article className="fp-grade">
      <div className="fp-grade-img">
        <img src={grade.img} alt={grade.title} loading="lazy" />
      </div>
      <div className="fp-grade-body">
        {grade.code && <span className="fp-grade-code">{grade.code}</span>}
        <h3>{grade.title}</h3>
        <p className="fp-grade-desc">{grade.desc}</p>
        <button className="fp-grade-cta" onClick={onQuote}>Request this grade <span className="arrow">→</span></button>
      </div>
    </article>
  );
}

/* ── Pipeline coatings: how a 3-layer system is built ─────────────── */
function CoatingLayers() {
  const layers = [
    { n: "3", name: "Polyolefin topcoat", note: "PE (3LPE) or PP (3LPP) — mechanical protection", marvel: true, cls: "l3" },
    { n: "2", name: "Adhesive resin", note: "Tie-layer that bonds primer and topcoat", marvel: false, cls: "l2" },
    { n: "1", name: "Epoxy primer (FBE)", note: "Corrosion barrier on the blasted steel", marvel: false, cls: "l1" },
  ];
  return (
    <section className="section fp-section fp-layers-sec">
      <div className="container fp-layers-grid">
        <div>
          <h2>Three layers, one protection system.</h2>
          <p className="fp-lead">
            A 3-layer coating is applied over the steel pipe in sequence. Marvel supplies the polyolefin topcoat —
            PE for 3LPE or PP for 3LPP.
          </p>
        </div>
        <div className="fp-layers" aria-label="Coating layer structure">
          <div className="fp-pipe" aria-hidden="true">
            <span className="ring r3" /><span className="ring r2" /><span className="ring r1" /><span className="ring steel" />
          </div>
          <ol>
            {layers.map((l) => (
              <li key={l.n} className={l.cls}>
                <span className="fp-layer-n">{l.n}</span>
                <div>
                  <strong>{l.name}</strong>
                  <small>{l.note}</small>
                </div>
                {l.marvel && <em>Marvel supplies</em>}
              </li>
            ))}
            <li className="steel"><span className="fp-layer-n">·</span><div><strong>Steel pipe</strong><small>Substrate</small></div></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── Enquiry form ──────────────────────────────────────────────────── */
function QuoteSection({ familyName, resinTypes, applications }: { familyName: string; resinTypes: string[]; applications: string[] }) {
  const { sending, error, onSubmit } = useFormSubmit("family");

  return (
    <section className="section fp-quote" id="quote">
      <div className="container fp-quote-grid">
        <aside className="fp-quote-card">
          <h2>Tell us what you need.</h2>
          <p>Share the grade or application and we'll come back with suitable options, availability and pricing.</p>
          <ul className="fp-include">
            <li>Current grade or target application</li>
            <li>Processing method</li>
            <li>Quantity and delivery country</li>
          </ul>
          <div className="fp-direct">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="https://wa.me/201205222901" target="_blank" rel="noreferrer">WhatsApp +20 120 522 2901</a>
          </div>
        </aside>

        <form className="fp-form" onSubmit={onSubmit}>
          <input type="hidden" name="product_family" value={familyName} />

              <div className="fp-form-grid">
                <label className="fp-field"><span>Full name *</span><input name="name" required autoComplete="name" /></label>
                <label className="fp-field"><span>Company *</span><input name="company" required autoComplete="organization" /></label>
                <label className="fp-field"><span>Business email *</span><input name="email" type="email" required autoComplete="email" /></label>
                <label className="fp-field"><span>Phone / WhatsApp</span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label className="fp-field">
                  <span>Resin type</span>
                  <select name="resin" defaultValue="">
                    <option value="">Not sure</option>
                    {resinTypes.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </label>
                <label className="fp-field">
                  <span>Application</span>
                  <select name="application" defaultValue="">
                    <option value="">Not sure</option>
                    {applications.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </label>
                <label className="fp-field"><span>Quantity</span><input name="quantity" placeholder="e.g. 2 × 20ft containers / month" /></label>
                <label className="fp-field"><span>Delivery country</span><input name="country" autoComplete="country-name" /></label>
                <label className="fp-field full"><span>Message</span><textarea name="message" rows={4} placeholder="Grade, specification, current material or anything else we should know." /></label>
              </div>
              {error && <p className="rq-error" role="alert">{error}</p>}
              <button className="btn primary fp-submit" type="submit" disabled={sending}>
                {sending ? "Sending…" : <>Send Enquiry <span className="arrow">↗</span></>}
              </button>
        </form>
      </div>
    </section>
  );
}
