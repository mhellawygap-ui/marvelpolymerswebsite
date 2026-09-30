import { useRef, useState } from "react";
import { useNav, hashFor, type Page } from "@/NavContext";
import { families } from "@/data/products";
import { familyDetails } from "@/data/familyDetails";
import { useFormSubmit } from "@/lib/useFormSubmit";

const STEPS = ["Material", "Quantity & delivery", "Your details"];
const MB_APPS = ["Pipe Black", "White (TiO2)", "Custom Colors", "UV Stabilizers", "Antioxidants", "Processing Aids (PPA)", "Anti-Static"];

export default function QuotePage() {
  const { anchor, navigate } = useNav();
  const { sending, error, onSubmit } = useFormSubmit("quote");
  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState(0);
  const [fam, setFam] = useState(families.some((f) => f.slug === anchor) ? anchor : "");
  const [resin, setResin] = useState("");
  const [app, setApp] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("tonnes");
  const [freq, setFreq] = useState("One-off order");
  const [country, setCountry] = useState("");
  const [fileName, setFileName] = useState("");

  const family = families.find((f) => f.slug === fam);
  const detail = fam ? familyDetails[fam] : undefined;
  const apps = detail ? (detail.visual === "masterbatch" ? MB_APPS : detail.grades.map((g) => g.title)) : [];

  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  /** Validate only the visible step before moving on. */
  const next = () => {
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${step}"]`);
    const fields = panel ? Array.from(panel.querySelectorAll<HTMLInputElement>("input, select, textarea")) : [];
    for (const f of fields) if (!f.reportValidity()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="rq">
      <section className="rq-intro">
        <div className="container">
          <div className="eyebrow">Request a Quote</div>
          <h1>Get a quote in three steps.</h1>
          <p>Tell us the material, how much you need and where it goes. We'll reply by email with options, availability and pricing.</p>
        </div>
      </section>

      <section className="rq-body">
        <div className="container rq-grid">
          <form ref={formRef} className="rq-form" onSubmit={onSubmit} noValidate={false}>
            {/* Progress */}
            <ol className="rq-progress" aria-label="Progress">
              {STEPS.map((s, i) => (
                <li key={s} className={i === step ? "active" : i < step ? "done" : ""}>
                  <span>{i < step ? "✓" : i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>

            {/* Step 1 — Material */}
            <fieldset data-step="0" hidden={step !== 0}>
              <legend>Which material do you need?</legend>
              <div className="rq-families" role="radiogroup" aria-label="Product family">
                {families.map((f) => (
                  <label key={f.slug} className={`rq-fam${fam === f.slug ? " on" : ""}`}>
                    <input type="radio" name="family" value={f.name} checked={fam === f.slug}
                      onChange={() => { setFam(f.slug); setResin(""); setApp(""); }} required />
                    <img src={f.img} alt="" loading="lazy" />
                    <span>{f.shortName}</span>
                  </label>
                ))}
                <label className={`rq-fam rq-unsure${fam === "unsure" ? " on" : ""}`}>
                  <input type="radio" name="family" value="Not sure" checked={fam === "unsure"}
                    onChange={() => { setFam("unsure"); setResin(""); setApp(""); }} />
                  <span className="rq-q" aria-hidden="true">?</span>
                  <span>Not sure yet</span>
                </label>
              </div>

              {detail && (
                <div className="rq-row">
                  <label className="rq-field">
                    <span>{family?.typesLabel.replace(/Types$/, "Type")}</span>
                    <select name="resin_type" value={resin} onChange={(e) => setResin(e.target.value)}>
                      <option value="">Not sure</option>
                      {detail.resinTypes.map((r) => <option key={r.code} value={r.code}>{r.code} — {r.name}</option>)}
                    </select>
                  </label>
                  <label className="rq-field">
                    <span>Application</span>
                    <select name="application" value={app} onChange={(e) => setApp(e.target.value)}>
                      <option value="">Not sure</option>
                      {apps.map((a) => <option key={a}>{a}</option>)}
                    </select>
                  </label>
                </div>
              )}

              <label className="rq-field">
                <span>Grade, specification or current material (optional)</span>
                <input name="grade" placeholder="e.g. PE100 black pipe compound, or the grade you use today" />
              </label>

              <label className="rq-upload">
                <input type="file" name="attachment" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
                <span className="rq-upload-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
                </span>
                <span>
                  <strong>{fileName || "Attach a TDS or specification"}</strong>
                  <small>{fileName ? "Click to change the file" : "Optional · PDF, Word, Excel or image"}</small>
                </span>
              </label>
            </fieldset>

            {/* Step 2 — Quantity & delivery */}
            <fieldset data-step="1" hidden={step !== 1}>
              <legend>How much, and where to?</legend>
              <div className="rq-row">
                <label className="rq-field">
                  <span>Quantity *</span>
                  <div className="rq-qty">
                    <input name="quantity" type="number" min="0" step="any" required={step === 1} value={qty}
                      onChange={(e) => setQty(e.target.value)} placeholder="e.g. 50" />
                    <select name="quantity_unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
                      <option value="tonnes">tonnes</option>
                      <option value="containers (20ft)">× 20ft containers</option>
                      <option value="containers (40ft)">× 40ft containers</option>
                      <option value="kg">kg</option>
                    </select>
                  </div>
                </label>
                <label className="rq-field">
                  <span>Delivery country *</span>
                  <input name="delivery_country" required={step === 1} value={country} onChange={(e) => setCountry(e.target.value)} autoComplete="country-name" />
                </label>
              </div>
              <div className="rq-field">
                <span>Order type</span>
                <div className="rq-toggle" role="radiogroup">
                  {["One-off order", "Recurring supply", "Project / tender"].map((o) => (
                    <label key={o} className={freq === o ? "on" : ""}>
                      <input type="radio" name="order_type" value={o} checked={freq === o} onChange={() => setFreq(o)} />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
              <label className="rq-field">
                <span>Needed by (optional)</span>
                <input name="needed_by" type="month" />
              </label>
            </fieldset>

            {/* Step 3 — Contact */}
            <fieldset data-step="2" hidden={step !== 2}>
              <legend>Where should we send the quote?</legend>
              <div className="rq-row">
                <label className="rq-field"><span>Full name *</span><input name="name" required={step === 2} autoComplete="name" /></label>
                <label className="rq-field"><span>Company *</span><input name="company" required={step === 2} autoComplete="organization" /></label>
              </div>
              <div className="rq-row">
                <label className="rq-field"><span>Business email *</span><input name="email" type="email" required={step === 2} autoComplete="email" /></label>
                <label className="rq-field"><span>Phone / WhatsApp</span><input name="phone" type="tel" autoComplete="tel" /></label>
              </div>
              <label className="rq-field">
                <span>Anything else we should know?</span>
                <textarea name="message" rows={4} placeholder="Processing method, target properties, packaging, delivery terms…" />
              </label>
            </fieldset>

            {error && <p className="rq-error" role="alert">{error}</p>}

            <div className="rq-nav">
              {step > 0 ? (
                <button type="button" className="btn ghost" onClick={() => setStep((s) => s - 1)}>← Back</button>
              ) : <span />}
              {step < STEPS.length - 1 ? (
                <button type="button" className="btn primary" onClick={next}>Continue <span className="arrow">→</span></button>
              ) : (
                <button type="submit" className="btn primary" disabled={sending}>
                  {sending ? "Sending…" : <>Send Quote Request <span className="arrow">↗</span></>}
                </button>
              )}
            </div>
          </form>

          {/* Live summary */}
          <aside className="rq-summary" aria-live="polite">
            <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Your request</div>
            <dl>
              <div><dt>Material</dt><dd>{family?.name ?? (fam === "unsure" ? "Not sure yet" : "—")}</dd></div>
              <div><dt>Type</dt><dd>{resin || "—"}</dd></div>
              <div><dt>Application</dt><dd>{app || "—"}</dd></div>
              <div><dt>Quantity</dt><dd>{qty ? `${qty} ${unit}` : "—"}</dd></div>
              <div><dt>Order</dt><dd>{freq}</dd></div>
              <div><dt>Deliver to</dt><dd>{country || "—"}</dd></div>
              {fileName && <div><dt>Attached</dt><dd>{fileName}</dd></div>}
            </dl>
            <p className="rq-side-note">
              Not sure what you need? <a {...link("contact")}>Ask an expert</a> instead.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
