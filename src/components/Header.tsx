import { useState } from "react";
import logo from "@/imports/_890b16__1800_x_748_px___1700_x_400_px_.png";
import { useNav, type Page } from "@/NavContext";

const productCategories = [
  { num: "01", name: "Polyethylene (PE) Solutions", apps: "Pipe, Film, Blow Molding, Rotomolding" },
  { num: "02", name: "Polypropylene (PP) & Compounds", apps: "Injection Molding, Extrusion, Raffia, Automotive" },
  { num: "03", name: "Pipeline Coatings & Adhesive Resins", apps: "3LPE / 3LPP, Steel Pipe Anti-Corrosion" },
  { num: "04", name: "Engineering Thermoplastics", apps: "PA, PC, PBT — Reinforced & Specialty Grades" },
  { num: "05", name: "Thermoplastic Elastomers (TPE)", apps: "Seals, Soft-Touch, Overmolding, TPV" },
  { num: "06", name: "Masterbatches & Performance Additives", apps: "Color, UV Stabilizers, Flame Retardant" },
  { num: "07", name: "Specialty & Composite Materials", apps: "Structural Polymers, Filled Compounds" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate } = useNav();

  const go = (p: Page) => {
    navigate(p);
    setMobileOpen(false);
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Industrial polymer solutions • Alexandria, Egypt</span>
          <span>operations@marvelpolymers.com &nbsp; | &nbsp; +20 120 522 2901</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>
            <img src={logo} alt="Marvel Polymers" style={{ width: 170, height: "auto" }} />
          </a>

          <nav className="links">
            <div className="mega-wrap">
              <a href="#products" className="products-link" onClick={(e) => { e.preventDefault(); go("home"); }}>
                Products
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="mega-panel">
                {productCategories.map((cat) => (
                  <a key={cat.num} href="#products" className="mega-item" onClick={(e) => { e.preventDefault(); go("home"); }}>
                    <span className="mega-num">{cat.num}</span>
                    <div>
                      <p className="mega-name">{cat.name}</p>
                      <p className="mega-apps">{cat.apps}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <a href="#industries" onClick={(e) => { e.preventDefault(); go("home"); }}>Industries</a>
            <a href="#resources" onClick={(e) => { e.preventDefault(); go("home"); }}>Resources</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Contact</a>
          </nav>

          <a className="btn primary" href="#contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>
            Request a Material <span className="arrow">↗</span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="container" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: 0, left: 20, right: 20, padding: "20px",
              background: "white", display: "flex", flexDirection: "column",
              alignItems: "flex-start", border: "1px solid var(--line)",
              borderRadius: "16px", boxShadow: "var(--shadow)", zIndex: 100,
            }}>
              {[
                { label: "Products", page: "home" as Page },
                { label: "Industries", page: "home" as Page },
                { label: "Resources", page: "home" as Page },
                { label: "About", page: "about" as Page },
                { label: "Contact", page: "contact" as Page },
              ].map((item, i, arr) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); go(item.page); }}
                  style={{
                    fontSize: "1rem", fontWeight: 700, color: "var(--navy)",
                    padding: "10px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                    width: "100%",
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn primary"
                style={{ marginTop: 14, width: "100%", justifyContent: "center" }}
                onClick={(e) => { e.preventDefault(); go("contact"); }}
              >
                Request a Material <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
