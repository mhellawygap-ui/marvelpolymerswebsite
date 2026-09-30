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
  const gradeCount = detail.visual === "masterbatch" ? 7 : detail.grades.length;

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
            <span className="chip chip-lg">{family.chip}</span>
            <h1>{family.name}</h1>
            <p className="fp-intro">{detail.intro}</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={toQuote}>Request a Quote <span className="arrow">↓</span></button>
              <a className="btn ghost" href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Technical question — ${family.name}`)}`}>
                Ask a Technical Question
              </a>
            </div>
          </div>
          <div className="fp-hero-visual">
            <img src={detail.heroImg ?? family.img} alt={family.name} />
            <div className="fp-stats">
              <div><strong>{detail.resinTypes.length}</strong><span>{family.typesLabel}</span></div>
              <div><strong>{gradeCount}</strong><span>Application grades</span></div>
              <div><strong>TDS</strong><span>On request</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Resin types */}
      <section className="section fp-section">
        <div className="container">
          <div className="fp-head">
            <div className="eyebrow">{family.typesLabel}</div>
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
            <div className="eyebrow">Applications</div>
            <h2>{detail.gradesTitle}.</h2>
          </div>

          {detail.visual === "masterbatch" ? (
            <Masterbatch />
          ) : (
            groups.map((g) => (
              <div key={g || "all"} className="fp-group">
                {g && <h3 className="fp-group-title">{g}</h3>}
                <div className={`fp-grades n${detail.grades.filter((x) => (x.group ?? "") === g).length}`}>
                  {detail.grades.filter((x) => (x.group ?? "") === g).map((grade) => (
                    <GradeCard key={grade.title} grade={grade} onQuote={toQuote} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 5 · Enquiry — end of the journey */}
      <QuoteSection familyName={family.name} resinTypes={detail.resinTypes.map((r) => r.code)}
        applications={detail.visual === "masterbatch" ? MB_OPTIONS : detail.grades.map((g) => g.title)} />
    </main>
  );
}

function GradeCard({ grade, onQuote }: { grade: Grade; onQuote: () => void }) {
  return (
    <article className="fp-grade">
      <div className="fp-grade-img">
        <img src={grade.img} alt={grade.title} loading="lazy" />
        <span className="fp-process">{grade.process}</span>
      </div>
      <div className="fp-grade-body">
        <h3>{grade.title}</h3>
        <ul className="fp-focus">{grade.focus.map((f) => <li key={f}>{f}</li>)}</ul>
        <button className="fp-grade-cta" onClick={onQuote}>Request this grade <span className="arrow">→</span></button>
      </div>
    </article>
  );
}

/* ── Pipeline coatings: how a 3-layer system is built ─────────────── */
function CoatingLayers() {
  const layers = [
    { n: "3", name: "Polyolefin topcoat", note: "PE (3LPE) or PP (3LPP) — mechanical protection", marvel: true, cls: "l3" },
    { n: "2", name: "Adhesive resin", note: "Tie-layer that bonds primer and topcoat", marvel: true, cls: "l2" },
    { n: "1", name: "Epoxy primer (FBE)", note: "Corrosion barrier on the blasted steel", marvel: false, cls: "l1" },
  ];
  return (
    <section className="section fp-section fp-layers-sec">
      <div className="container fp-layers-grid">
        <div>
          <div className="eyebrow">How it works</div>
          <h2>Three layers, one protection system.</h2>
          <p className="fp-lead">
            A 3-layer coating is applied over the steel pipe in sequence. Marvel supplies the adhesive resin and the
            polyolefin topcoat.
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

/* ── Masterbatches: color swatches + additive functions ───────────── */
const MB_OPTIONS = ["Pipe Black", "White (TiO2)", "Custom Colors", "UV Stabilizers", "Antioxidants", "Processing Aids (PPA)", "Anti-Static"];

function Masterbatch() {
  const colors = [
    { name: "Pipe Black", note: "Carbon black 20–50%", cls: "sw-black" },
    { name: "White", note: "TiO2", cls: "sw-white" },
    { name: "Custom Colors", note: "Matched to your target", cls: "sw-custom" },
  ];
  const additives = [
    { name: "UV Stabilizers", note: "Protect parts exposed to sunlight", icon: "M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
    { name: "Antioxidants", note: "Resist heat and oxidation during processing and use", icon: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" },
    { name: "Processing Aids (PPA)", note: "Smoother, more efficient extrusion", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" },
    { name: "Anti-Static", note: "Reduce dust pick-up and static build-up", icon: "M13 2L4 14h7l-1 8 9-12h-7l1-8z" },
  ];
  return (
    <div className="fp-mb">
      <div className="fp-mb-col">
        <h3 className="fp-group-title">Color Formulations</h3>
        <div className="fp-swatches">
          {colors.map((c) => (
            <div key={c.name} className="fp-swatch">
              <span className={`sw ${c.cls}`} aria-hidden="true" />
              <strong>{c.name}</strong>
              <small>{c.note}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="fp-mb-col">
        <h3 className="fp-group-title">Performance Additives</h3>
        <div className="fp-additives">
          {additives.map((a) => (
            <div key={a.name} className="fp-additive">
              <span className="fp-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={a.icon} /></svg>
              </span>
              <div>
                <strong>{a.name}</strong>
                <small>{a.note}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Enquiry form ──────────────────────────────────────────────────── */
function QuoteSection({ familyName, resinTypes, applications }: { familyName: string; resinTypes: string[]; applications: string[] }) {
  const { sending, error, onSubmit } = useFormSubmit("family");

  return (
    <section className="section fp-quote" id="quote">
      <div className="container fp-quote-grid">
        <aside className="fp-quote-card">
          <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Request a Quote</div>
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
