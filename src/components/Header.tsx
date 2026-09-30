import { useState } from "react";
import logo from "@/imports/_890b16__1800_x_748_px___1700_x_400_px_.png";
import { useNav, hashFor, type Page } from "@/NavContext";
import { families } from "@/data/products";

const productCategories = families.map((f) => ({ num: f.num, name: f.name, apps: f.menuApps, slug: f.slug }));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate } = useNav();

  const go = (p: Page, anchor = "") => {
    navigate(p, anchor);
    setMobileOpen(false);
  };
  const link = (p: Page, anchor = "") => ({
    href: hashFor(p, anchor),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); go(p, anchor); },
  });

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
          <a className="brand" {...link("home")}>
            <img src={logo} alt="Marvel Polymers" style={{ width: 170, height: "auto" }} />
          </a>

          <nav className="links">
            <div className="mega-wrap">
              <a className="products-link" {...link("products")}>
                Products
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="mega-panel">
                {productCategories.map((cat) => (
                  <a key={cat.num} className="mega-item" {...link("family", cat.slug)}>
                    <span className="mega-num">{cat.num}</span>
                    <div>
                      <p className="mega-name">{cat.name}</p>
                      <p className="mega-apps">{cat.apps}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <a {...link("industries")}>Industries</a>
            <a {...link("resources")}>Resources</a>
            <a {...link("about")}>About</a>
            <a {...link("contact")}>Contact</a>
          </nav>

          <a className="btn primary" {...link("quote")}>
            Request a Quote <span className="arrow">↗</span>
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
                { label: "Products", page: "products" as Page, anchor: "" },
                { label: "Industries", page: "industries" as Page, anchor: "" },
                { label: "Resources", page: "resources" as Page, anchor: "" },
                { label: "About", page: "about" as Page, anchor: "" },
                { label: "Contact", page: "contact" as Page, anchor: "" },
              ].map((item, i, arr) => (
                <a
                  key={item.label}
                  {...link(item.page, item.anchor)}
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
                {...link("quote")}
                className="btn primary"
                style={{ marginTop: 14, width: "100%", justifyContent: "center" }}
              >
                Request a Quote <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
