import { useNav } from "@/NavContext";

const tdsProducts = [
  "Select a product grade…",
  "Polyethylene — HDPE (MP-HD5502)",
  "Polyethylene — HDPE Blow Molding Grade",
  "Polyethylene — LLDPE Film Grade",
  "Polyethylene — LDPE Extrusion Grade",
  "Polypropylene — PP-H Homopolymer",
  "Polypropylene — PP-B Copolymer",
  "Polypropylene — PP-R Pipe Grade",
  "Pipeline Coatings — 3LPE Adhesive Resin",
  "Pipeline Coatings — 3LPP Adhesive Resin",
  "Engineering Thermoplastics — PA6 GF30",
  "Engineering Thermoplastics — PC General Purpose",
  "Engineering Thermoplastics — PBT GF15",
  "Thermoplastic Elastomers — TPE Shore 70A",
  "Thermoplastic Elastomers — TPV Compound",
  "Masterbatches — UV Stabilizer MB",
  "Masterbatches — Black Color MB",
  "Masterbatches — Antioxidant Concentrate",
];

export default function ResourcesSection() {
  const { navigate } = useNav();

  return (
    <section className="section alt" id="resources">
      <div className="container">
        <div className="tds-wrap">
          <div className="tds-copy">
            <div className="eyebrow">Technical Resources</div>
            <h2>Technical information when you need it.</h2>
            <p>
              Access product-specific Technical Data Sheets to support material evaluation,
              grade selection and purchasing decisions.
            </p>
          </div>
          <div className="tds-card">
            <div className="file-icon">
              <svg width="28" height="34" viewBox="0 0 28 34" fill="none" aria-hidden="true">
                <path d="M4 0h15l9 9v21a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#edf2f7" stroke="#dbe4ee" strokeWidth="1.5"/>
                <path d="M19 0v9h9" fill="none" stroke="#dbe4ee" strokeWidth="1.5"/>
                <line x1="6" y1="16" x2="22" y2="16" stroke="#012a57" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="21" x2="22" y2="21" stroke="#012a57" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="26" x2="15" y2="26" stroke="#890b16" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Technical Data Sheets</h3>
            <p>Select a product grade to review its technical specification.</p>
            <select className="tds-select" defaultValue="">
              {tdsProducts.map((t) => (
                <option key={t} value={t === "Select a product grade…" ? "" : t}>
                  {t}
                </option>
              ))}
            </select>
            <a
              className="btn primary"
              href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}
            >
              Review TDS <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
