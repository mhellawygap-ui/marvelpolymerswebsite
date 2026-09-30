import { useState } from "react";
import { useNav, hashFor, type Page } from "@/NavContext";
import { families } from "@/data/products";
import { familyDetails } from "@/data/familyDetails";
import { useFormSubmit } from "@/lib/useFormSubmit";

/* Short, evergreen guides — general industry knowledge, no Marvel-specific claims. */
const GUIDES: { tag: string; title: string; summary: string; body: string[]; family: string }[] = [
  {
    tag: "Pipes",
    title: "PE100 vs PE80: which pipe grade?",
    summary: "What the numbers mean and when each one is used.",
    family: "polyethylene",
    body: [
      "The number is the pipe resin's minimum required strength (MRS): 8 MPa for PE80 and 10 MPa for PE100, measured at 20 °C over a 50-year design life.",
      "The higher MRS lets a PE100 pipe carry the same pressure with a thinner wall, or a higher pressure at the same wall thickness. That makes PE100 the usual choice for pressure water and gas networks, while PE80 is still common for smaller diameters and lower-pressure lines.",
      "Always follow the pipe standard your project specifies — for example ISO 4427 for water or ISO 4437 for gas.",
    ],
  },
  {
    tag: "Polypropylene",
    title: "PP-H, PP-B or PP-R?",
    summary: "Three kinds of polypropylene and what each one is good at.",
    family: "polypropylene",
    body: [
      "PP-H (homopolymer) is made from propylene only. It is the stiffest of the three and processes easily — used for injection molding, raffia tapes and fibre — but it is less tough at low temperatures.",
      "PP-B (block or impact copolymer) contains a rubbery ethylene-propylene phase that absorbs impact, including in the cold. It suits crates, battery cases and automotive parts.",
      "PP-R (random copolymer) has ethylene spread randomly along the chain, giving flexibility and good long-term performance with hot water — which is why it is used for plumbing pipes and fittings.",
    ],
  },
  {
    tag: "Pipeline coatings",
    title: "3LPE or 3LPP coating?",
    summary: "Same three-layer build, different operating temperatures.",
    family: "pipeline-coatings",
    body: [
      "Both systems use three layers on the steel pipe: a fusion-bonded epoxy primer, an adhesive tie-layer and a thick polyolefin topcoat.",
      "3LPE uses a polyethylene topcoat and is the standard choice for most oil and gas transmission lines. 3LPP uses a polypropylene topcoat for lines that run hotter and need extra mechanical and abrasion resistance.",
      "The allowed operating temperature depends on the exact system and standard (such as ISO 21809-1), so always check it against the project specification.",
    ],
  },
  {
    tag: "Masterbatch",
    title: "Masterbatch basics",
    summary: "How color and additive concentrates are used.",
    family: "performance-additives",
    body: [
      "A masterbatch is a concentrate of pigment or additive in a carrier resin. It is mixed with the base polymer at the machine, usually at a few percent, so the whole batch doesn't have to be compounded.",
      "The carrier should be compatible with the base polymer — a PE-based masterbatch for PE products, for example.",
      "Pipe black is a special case: pipe standards set the carbon black content of the finished pipe (typically 2.0–2.5%), so the masterbatch loading and dosing are chosen to hit that range.",
    ],
  },
  {
    tag: "Buying",
    title: "What to include in a quote request",
    summary: "Five details that get you an accurate answer faster.",
    family: "",
    body: [
      "1. The material — the grade you use today, or the application and processing method if you don't know the grade.",
      "2. Any standard or specification the product must meet, such as PE100 or a customer drawing.",
      "3. Quantity, and whether it is a one-off order, recurring supply or a project.",
      "4. Delivery country and the date you need it by.",
      "5. A TDS or spec sheet if you have one — you can attach it to the quote form.",
    ],
  },
];

const FAQ = [
  { q: "Do you supply samples?", a: "No. We share the technical data sheet so you can evaluate a grade before ordering." },
  { q: "What is the minimum order quantity?", a: "It depends on the grade and its origin. We confirm the minimum with your quote." },
  { q: "Which documents do you provide?", a: "The TDS and SDS for the grade you choose. Other documents depend on the grade and producer — ask us for what you need." },
  { q: "Which markets do you deliver to?", a: "We supply across Africa, Europe and South America, and coordinate documentation, shipping and delivery through one commercial contact." },
  { q: "I don't know the exact grade. Can you still help?", a: "Yes. Tell us the application, how you process it or the material you use today, and we'll suggest suitable options." },
  { q: "How do I get a price?", a: "Use the Request a Quote form. Include the material, quantity and delivery country and we'll reply by email." },
];

export default function ResourcesPage() {
  const { navigate } = useNav();
  const { sending, error, onSubmit } = useFormSubmit("documents");
  const [fam, setFam] = useState("");
  const [openGuide, setOpenGuide] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const detail = fam ? familyDetails[fam] : undefined;
  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  return (
    <main className="res">
      <section className="pp-intro">
        <div className="container">
          <div className="eyebrow">Resources</div>
          <h1>Technical resources.</h1>
          <p>Request data sheets, read short material guides and find answers to common buying questions.</p>
          <nav className="pp-jump" aria-label="Resources">
            <a {...link("resources", "documents")}>Technical documents</a>
            <a {...link("resources", "guides")}>Guides</a>
            <a {...link("resources", "faq")}>FAQ</a>
          </nav>
        </div>
      </section>

      {/* Documents */}
      <section className="section res-docs" id="documents">
        <div className="container res-docs-grid">
          <div>
            <div className="eyebrow">Technical Documents</div>
            <h2>Request a TDS or SDS.</h2>
            <p className="res-lead">Pick the product and document you need. We'll email the available documentation for that grade.</p>
            <ul className="res-doclist">
              <li><span className="res-doc-ic">TDS</span><div><strong>Technical Data Sheet</strong><small>Typical properties and processing guidance</small></div></li>
              <li><span className="res-doc-ic">SDS</span><div><strong>Safety Data Sheet</strong><small>Handling, storage and safety information</small></div></li>
            </ul>
          </div>

          <form className="fp-form res-form" onSubmit={onSubmit}>
            <div className="fp-form-grid">
              <label className="fp-field">
                <span>Product family *</span>
                <select name="family" required value={fam} onChange={(e) => setFam(e.target.value)}>
                  <option value="" disabled>Choose a family</option>
                  {families.map((f) => <option key={f.slug} value={f.slug}>{f.name}</option>)}
                </select>
              </label>
              <label className="fp-field">
                <span>{detail ? families.find((f) => f.slug === fam)?.typesLabel.replace(/Types$/, "Type") : "Type"}</span>
                <select name="resin_type" disabled={!detail} defaultValue="">
                  <option value="">{detail ? "Any / not sure" : "Choose a family first"}</option>
                  {detail?.resinTypes.map((r) => <option key={r.code} value={r.code}>{r.code} — {r.name}</option>)}
                </select>
              </label>
              <label className="fp-field full"><span>Grade name (if known)</span><input name="grade" placeholder="e.g. the grade on your current TDS" /></label>
              <div className="fp-field full">
                <span>Documents *</span>
                <div className="res-checks">
                  <label><input type="checkbox" name="documents" value="TDS" defaultChecked /> TDS</label>
                  <label><input type="checkbox" name="documents" value="SDS" /> SDS</label>
                </div>
              </div>
              <label className="fp-field"><span>Full name *</span><input name="name" required autoComplete="name" /></label>
              <label className="fp-field"><span>Company *</span><input name="company" required autoComplete="organization" /></label>
              <label className="fp-field"><span>Business email *</span><input name="email" type="email" required autoComplete="email" /></label>
              <label className="fp-field"><span>Country</span><input name="country" autoComplete="country-name" /></label>
            </div>
            {error && <p className="rq-error" role="alert">{error}</p>}
            <button className="btn primary fp-submit" type="submit" disabled={sending}>
              {sending ? "Sending…" : <>Request Documents <span className="arrow">↗</span></>}
            </button>
          </form>
        </div>
      </section>

      {/* Guides */}
      <section className="section alt" id="guides">
        <div className="container">
          <div className="fp-head">
            <div className="eyebrow">Guides</div>
            <h2>Short material guides.</h2>
          </div>
          <div className="res-guides">
            {GUIDES.map((g, i) => {
              const open = openGuide === i;
              return (
                <article key={g.title} className={`res-guide${open ? " open" : ""}`}>
                  <button className="res-guide-head" aria-expanded={open} onClick={() => setOpenGuide(open ? null : i)}>
                    <span className="res-tag">{g.tag}</span>
                    <span className="res-guide-title">
                      <strong>{g.title}</strong>
                      <small>{g.summary}</small>
                    </span>
                    <span className="res-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div className="res-guide-body">
                      {g.body.map((p) => <p key={p}>{p}</p>)}
                      <div className="res-guide-links">
                        {g.family && <a {...link("family", g.family)}>See the {families.find((f) => f.slug === g.family)?.shortName} page →</a>}
                        <a {...link("quote", g.family)}>Request a Quote →</a>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container res-faq-grid">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2>Buying questions, answered.</h2>
            <p className="res-lead">Can't find your answer? <a {...link("contact")}>Ask an expert</a>.</p>
          </div>
          <div className="res-faq">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`res-faq-item${open ? " open" : ""}`}>
                  <button aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                    {f.q}<span aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p>{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
