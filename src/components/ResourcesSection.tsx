import { useNav } from "@/NavContext";
import { families } from "@/data/products";
import { familyDetails } from "@/data/familyDetails";

const tdsProducts = [
  "Select a product grade…",
  ...families.flatMap((f) =>
    familyDetails[f.slug].grades.map((g) => `${f.shortName} — ${g.title}${g.code ? ` (${g.code})` : ""}`),
  ),
];

export default function ResourcesSection() {
  const { navigate } = useNav();

  return (
    <section className="section alt" id="resources">
      <div className="container">
        <div className="tds-wrap">
          <div className="tds-copy">
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
                <line x1="6" y1="16" x2="22" y2="16" stroke="#182c55" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="21" x2="22" y2="21" stroke="#182c55" strokeWidth="1.5" strokeLinecap="round"/>
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
              href="#/resources/documents"
              onClick={(e) => { e.preventDefault(); navigate("resources", "documents"); }}
            >
              Review TDS <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
