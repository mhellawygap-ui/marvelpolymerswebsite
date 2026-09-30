import { useEffect, useMemo, useState } from "react";
import { useNav, hashFor, type Page } from "@/NavContext";
import {
  families,
  applicationGroups,
  processGroups,
  PROCESS_OPTIONS,
  APPLICATION_OPTIONS,
  REQUIREMENT_OPTIONS,
  type Family,
  type Preset,
} from "@/data/products";
import sabicLogo from "@/imports/_890b16__1800_x_748_px_.png";
import gapLogo from "@/imports/_890b16__1800_x_748_px___1_.png";
import lybLogo from "@/imports/_890b16__1800_x_748_px___2_.png";
import borougeLogo from "@/imports/_890b16__1800_x_748_px___3_.png";
import exxonLogo from "@/imports/_890b16__1800_x_748_px___4_.png";
import moharamLogo from "@/imports/_890b16__1800_x_748_px___5_.png";

const producers = [
  { src: sabicLogo, alt: "SABIC" },
  { src: borougeLogo, alt: "Borouge" },
  { src: lybLogo, alt: "LyondellBasell" },
  { src: exxonLogo, alt: "ExxonMobil" },
  { src: moharamLogo, alt: "Moharam Plast" },
  { src: gapLogo, alt: "GAP Polymers" },
];

const selectionSteps = [
  { num: "01", title: "Application", q: "What are you producing?", p: "Define the component, product or infrastructure application." },
  { num: "02", title: "Process", q: "How will it be converted?", p: "Extrusion, molding, coating, compounding or another manufacturing process." },
  { num: "03", title: "Performance", q: "What must the material deliver?", p: "Mechanical, thermal, chemical, dimensional, visual or processing requirements." },
  { num: "04", title: "Material & Grade", q: "Identify relevant options.", p: "Match the requirement with suitable polymer families and available grades." },
  { num: "05", title: "Commercial Supply", q: "Move from selection to delivery.", p: "Availability, quantity, documentation, commercial structure and logistics." },
];

const techBlocks = [
  { title: "Typical Properties", items: ["Density", "Melt Flow Rate / Melt Index", "Tensile Properties", "Impact Properties", "Thermal Properties", "Additional application-specific properties"] },
  { title: "Processing", items: ["Recommended Process", "Processing Conditions", "Material Form", "Application Notes"] },
  { title: "Application", items: ["Recommended Uses", "Industry", "Performance Focus", "Alternative Material Families"] },
  { title: "Standards & Compliance", items: ["Applicable Standards", "Technical References", "Compliance Documentation where available"] },
  { title: "Documents", items: ["TDS / PDS", "SDS", "Compliance Statements", "Additional Technical Documentation"] },
];

const requirementInputs = [
  "Current material or grade",
  "Target application",
  "Processing method",
  "Required property",
  "Technical standard",
  "Annual or project quantity",
  "Delivery destination",
];

const DOC_TYPES = ["Technical Data Sheet", "Safety Data Sheet", "Compliance", "Application Guide"];

function Arrow() {
  return <span className="arrow">→</span>;
}

export default function ProductsPage() {
  const { anchor, navigate } = useNav();

  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  /* ── Navigator state ─────────────────────────── */
  const [q, setQ] = useState("");
  const [fam, setFam] = useState("");
  const [proc, setProc] = useState("");
  const [app, setApp] = useState("");
  const [req, setReq] = useState("");
  const [preset, setPreset] = useState<Preset | null>(null);
  const [shown, setShown] = useState(false);

  const results = useMemo(() => {
    if (preset) return families.filter((f) => preset.slugs.includes(f.slug));
    const tokens = q.toLowerCase().split(/[\s,;/]+/).filter(Boolean);
    return families.filter((f) => {
      if (fam && f.slug !== fam) return false;
      if (proc && proc !== "Other / Not Sure" && !f.processes.includes(proc)) return false;
      if (app && app !== "Other" && !f.applications.includes(app)) return false;
      if (req && req !== "Other / Not Sure" && !f.requirements.includes(req)) return false;
      if (tokens.length) {
        const hay = [f.name, f.chip, ...f.types, ...f.applicationFocus, ...f.processes, ...f.applications, ...f.requirements, ...f.keywords]
          .join(" ")
          .toLowerCase();
        return tokens.every((t) => hay.includes(t));
      }
      return true;
    });
  }, [q, fam, proc, app, req, preset]);

  const clearAll = () => {
    setQ(""); setFam(""); setProc(""); setApp(""); setReq(""); setPreset(null); setShown(false);
  };

  const applyPreset = (p: Preset) => {
    setPreset(p);
    setShown(true);
    navigate("products", "find");
  };

  /* ── Family tabs (deep-linkable via #/products/<slug>) ── */
  const [active, setActive] = useState<string>(families[0].slug);
  useEffect(() => {
    if (families.some((f) => f.slug === anchor)) setActive(anchor);
  }, [anchor]);
  const current = families.find((f) => f.slug === active) ?? families[0];

  /* ── Document search ─────────────────────────── */
  const [docQ, setDocQ] = useState("");
  const [docFam, setDocFam] = useState("");
  const [docType, setDocType] = useState("");
  const [docSearched, setDocSearched] = useState(false);

  return (
    <main className="pp">
      {/* 01 HERO */}
      <section className="page-hero pp-hero">
        <div className="container pp-hero-grid">
          <div>
            <div className="eyebrow">Product Solutions</div>
            <h1>Materials Selected Around the Application.</h1>
            <p>
              From commodity polyolefins to engineering compounds, pipeline coating systems and performance
              additives, Marvel connects material requirements with the right polymer family, processing route
              and application focus.
            </p>
            <div className="hero-actions">
              <a className="btn primary" {...link("products", "find")}>
                Find Your Material <span className="arrow">↗</span>
              </a>
              <a className="btn ghost" {...link("contact")}>
                Request a Specific Grade
              </a>
            </div>
            <p className="pp-hero-note">
              Know the application but not the grade? Start with how the material will be processed or used.
            </p>
          </div>
          <div className="pp-mosaic" aria-hidden="true">
            {families.slice(0, 6).map((f, i) => (
              <div key={f.slug} className={`pp-tile pp-tile-${i + 1}`}>
                <img src={f.img} alt="" loading={i < 2 ? "eager" : "lazy"} />
                <span className="chip">{f.chip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 SMART MATERIAL NAVIGATOR */}
      <section className="section" id="find">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Material Navigator</div>
              <h2>Find the right starting point.</h2>
            </div>
            <p>
              You don't always need a resin name or grade number to begin. Search Marvel's portfolio by what
              matters to your application.
            </p>
          </div>

          <form
            className="pp-nav"
            onSubmit={(e) => { e.preventDefault(); setPreset(null); setShown(true); }}
          >
            <label className="pp-search">
              <span className="pp-label">Search material, application, process or standard</span>
              <span className="pp-search-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setPreset(null); }}
                  placeholder="PE100, blow molding, automotive, injection, ISO 4427..."
                />
              </span>
            </label>

            <div className="pp-filters">
              <FilterSelect label="Material Family" value={fam} onChange={(v) => { setFam(v); setPreset(null); }}
                options={families.map((f) => ({ value: f.slug, label: f.name }))} />
              <FilterSelect label="Processing Method" value={proc} onChange={(v) => { setProc(v); setPreset(null); }}
                options={PROCESS_OPTIONS.map((o) => ({ value: o, label: o }))} />
              <FilterSelect label="Application" value={app} onChange={(v) => { setApp(v); setPreset(null); }}
                options={APPLICATION_OPTIONS.map((o) => ({ value: o, label: o }))} />
              <FilterSelect label="Performance / Requirement" value={req} onChange={(v) => { setReq(v); setPreset(null); }}
                options={REQUIREMENT_OPTIONS.map((o) => ({ value: o, label: o }))} />
            </div>

            <div className="pp-nav-actions">
              <button className="btn primary" type="submit">
                Show Relevant Materials <span className="arrow">↗</span>
              </button>
              {(shown || q || fam || proc || app || req) && (
                <button type="button" className="pp-clear" onClick={clearAll}>Clear all</button>
              )}
            </div>

            {shown && (
              <div className="pp-results" aria-live="polite">
                <div className="pp-results-head">
                  {preset ? (
                    <span className="pp-preset">
                      {preset.title}
                      <button type="button" aria-label="Clear" onClick={() => { setPreset(null); setShown(false); }}>✕</button>
                    </span>
                  ) : (
                    <span>{results.length} of {families.length} material families match</span>
                  )}
                </div>
                {results.length > 0 ? (
                  <div className="pp-result-list">
                    {results.map((f) => (
                      <a key={f.slug} className="pp-result" {...link("products", f.slug)}>
                        <img src={f.img} alt="" loading="lazy" />
                        <div>
                          <span className="pp-num">{f.num}</span>
                          <strong>{f.name}</strong>
                          <small>{f.types.join(" · ")}</small>
                        </div>
                        <span className="pp-go">→</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="pp-empty">
                    No family matches that combination yet. Send us the application or current grade and we'll
                    point you to the right options.
                  </p>
                )}
              </div>
            )}
          </form>

          <div className="pp-assist">
            <div>
              <strong>Not sure which filter to use?</strong>
              <p>Send us the application or your current grade and Marvel can help identify relevant material options.</p>
            </div>
            <a className="btn ghost" {...link("contact")}>Ask Marvel <Arrow /></a>
          </div>
        </div>
      </section>

      {/* 03 PRODUCT FAMILIES */}
      <section className="section alt" id="families">
        {families.map((f) => <span key={f.slug} id={f.slug} className="pp-anchor" />)}
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our Portfolio</div>
              <h2>Seven Material Families. Multiple Ways to Solve the Application.</h2>
            </div>
            <p>
              Explore the portfolio by material family. Each category brings together relevant resin types,
              processing routes, specialized grades and application focus in one place.
            </p>
          </div>

          <div className="pp-tabs" role="tablist" aria-label="Material families">
            {families.map((f) => (
              <button
                key={f.slug}
                role="tab"
                aria-selected={f.slug === active}
                className={`pp-tab${f.slug === active ? " active" : ""}`}
                onClick={() => setActive(f.slug)}
              >
                <span className="pp-num">{f.num}</span>
                {f.shortName}
              </button>
            ))}
          </div>

          <FamilyPanel family={current} link={link} />
        </div>
      </section>

      {/* 04 BROWSE BY APPLICATION */}
      <section className="section" id="applications">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Start with the Application</div>
              <h2>What are you making?</h2>
            </div>
            <p>Material selection begins with the performance expected from the final product.</p>
          </div>
          <div className="pp-app-grid">
            {applicationGroups.map((g) => (
              <button key={g.title} className="pp-app" onClick={() => applyPreset(g)}>
                <h3>{g.title}</h3>
                <p className="pp-app-detail">{g.detail}</p>
                <div className="pp-app-likely">
                  <small>Likely material families</small>
                  <span>{g.likely}</span>
                </div>
                <span className="pp-app-cta">View Relevant Materials <Arrow /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 05 BROWSE BY PROCESS */}
      <section className="section alt" id="processes">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Processing Methods</div>
              <h2>Start with how you manufacture.</h2>
            </div>
            <p>Processing requirements can narrow material selection before a specific grade is considered.</p>
          </div>
          <div className="pp-process">
            {processGroups.map((g, i) => (
              <button key={g.title} className="pp-proc" onClick={() => applyPreset(g)}>
                <span className="pp-proc-dot">{String(i + 1).padStart(2, "0")}</span>
                <strong>{g.title}</strong>
                <small>{g.detail}</small>
              </button>
            ))}
          </div>
          <div className="pp-center">
            <a className="btn ghost" {...link("products", "find")}>Browse by Processing Method <Arrow /></a>
          </div>
        </div>
      </section>

      {/* 06 HOW MARVEL STRUCTURES PRODUCT SELECTION */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Application-Led Selection</div>
              <h2>From requirement to relevant material options.</h2>
            </div>
          </div>
          <ol className="pp-flow">
            {selectionSteps.map((s) => (
              <li key={s.num}>
                <span className="pp-flow-num">{s.num}</span>
                <small>{s.title}</small>
                <strong>{s.q}</strong>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
          <div className="pp-center">
            <a className="btn primary" {...link("contact")}>Discuss an Application <span className="arrow">↗</span></a>
          </div>
        </div>
      </section>

      {/* 07 TECHNICAL INFORMATION */}
      <section className="section alt" id="technical">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Technical Data</div>
              <h2>The information behind the material.</h2>
            </div>
            <p>
              Where available, Marvel product pages bring together the technical and commercial information
              needed to evaluate a material before enquiry.
            </p>
          </div>
          <div className="pp-tech">
            {techBlocks.map((b) => (
              <div key={b.title} className="pp-tech-card">
                <h3>{b.title}</h3>
                <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="pp-center">
            <a className="btn ghost" {...link("home", "resources")}>Explore Technical Resources <Arrow /></a>
          </div>
        </div>
      </section>

      {/* 08 DON'T KNOW THE EXACT GRADE? */}
      <section className="section" id="request">
        <div className="container">
          <div className="pp-grade">
            <div>
              <div className="eyebrow">Don't know the exact grade?</div>
              <h2>You don't need a grade number to start.</h2>
              <p>
                Share any information you already have. Marvel can use the requirement as the starting point for
                identifying relevant options.
              </p>
              <div className="hero-actions">
                <a className="btn primary" {...link("contact")}>Send Your Requirement <span className="arrow">↗</span></a>
                <a className="btn ghost" {...link("contact")}>Upload a TDS</a>
              </div>
            </div>
            <ul className="pp-checklist">
              {requirementInputs.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 09 DOCUMENT / GRADE SEARCH */}
      <section className="section alt" id="documents">
        <div className="container pp-docs">
          <div>
            <div className="eyebrow">Looking for Documentation?</div>
            <h2>Search by material or grade.</h2>
          </div>
          <form
            className="pp-doc-form"
            onSubmit={(e) => { e.preventDefault(); setDocSearched(true); }}
          >
            <input
              className="pp-doc-input"
              value={docQ}
              onChange={(e) => { setDocQ(e.target.value); setDocSearched(false); }}
              placeholder="Enter material, grade, producer or document name"
            />
            <div className="pp-doc-row">
              <FilterSelect label="Product Family" value={docFam} onChange={setDocFam}
                options={families.map((f) => ({ value: f.slug, label: f.name }))} />
              <FilterSelect label="Document Type" value={docType} onChange={setDocType}
                options={DOC_TYPES.map((o) => ({ value: o, label: o }))} />
            </div>
            <button className="btn primary" type="submit">Search Documents <span className="arrow">↗</span></button>
            {docSearched && (
              <div className="pp-doc-result" aria-live="polite">
                <strong>The online document library is being prepared.</strong>
                <p>
                  Tell us the grade and document you need{docQ ? ` (${docQ})` : ""} and we'll send the available
                  documentation directly.
                </p>
              </div>
            )}
            <p className="pp-doc-micro">
              Can't find the document you need?{" "}
              <a {...link("contact")}>Request Technical Documentation →</a>
            </p>
          </form>
        </div>
      </section>

      {/* 10 PRODUCER / SOURCING CONTEXT */}
      <section className="section pp-supply">
        <div className="container">
          <div className="pp-supply-grid">
            <div>
              <div className="eyebrow">Supply Network</div>
              <h2>Access material options from established polymer producers.</h2>
              <p>
                Marvel works across a network of polymer producers and supply sources to support different material,
                application and commercial requirements.
              </p>
            </div>
            <div>
              <div className="pp-logos">
                {producers.map((p) => <img key={p.alt} src={p.src} alt={p.alt} loading="lazy" />)}
              </div>
              <p className="pp-disclaimer">
                Availability, producer origin and documentation vary by grade, specification and market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 FINAL CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Material Request</div>
              <h2>Already know what you need?</h2>
              <p>
                Send us the grade, specification, application or current TDS. We'll use your requirement as the
                starting point for the commercial and technical discussion.
              </p>
              <p className="pp-cta-contact">
                <a href="mailto:operations@marvelpolymers.com">operations@marvelpolymers.com</a>
                <span>·</span>
                <a href="tel:+201205222901">+20 120 522 2901</a>
              </p>
            </div>
            <div className="cta-actions pp-cta-actions">
              <a className="btn primary" {...link("contact")}>Request a Material <span className="arrow">↗</span></a>
              <a className="btn pp-btn-outline" {...link("contact")}>Contact Marvel</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterSelect({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="pp-select">
      <span className="pp-label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Any</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

function FamilyPanel({
  family: f,
  link,
}: {
  family: Family;
  link: (p: Page, a?: string) => { href: string; onClick: (e: React.MouseEvent) => void };
}) {
  return (
    <div className="pp-panel" role="tabpanel" key={f.slug}>
      <div className="pp-panel-visual">
        <img src={f.img} alt={f.name} />
        <span className="chip chip-lg">{f.chip}</span>
      </div>
      <div className="pp-panel-body">
        <span className="pp-panel-num">{f.num}</span>
        <h3>{f.name}</h3>
        <p>{f.description}</p>
        <div className="pp-panel-block">
          <small>{f.typesLabel}</small>
          <div className="pp-types">{f.types.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
        <div className="pp-panel-block">
          <small>Application Focus</small>
          <ul className="pp-focus">{f.applicationFocus.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <a className="btn primary" {...link("products", f.slug)}>
          {f.cta} <Arrow />
        </a>
      </div>
    </div>
  );
}
