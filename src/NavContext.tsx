import { createContext, useContext } from "react";

export type Page = "home" | "about" | "contact" | "products" | "family" | "industries" | "resources" | "quote" | "thanks" | "privacy" | "terms" | "cookies";

interface NavCtxType {
  page: Page;
  /** Section id to scroll to on the current page (e.g. "industries", or a product family slug). */
  anchor: string;
  navigate: (p: Page, anchor?: string) => void;
}

export const NavCtx = createContext<NavCtxType>({ page: "home", anchor: "", navigate: () => {} });
export const useNav = () => useContext(NavCtx);

const PAGES: Page[] = ["home", "about", "contact", "products", "family", "industries", "resources", "quote", "thanks", "privacy", "terms", "cookies"];

/**
 * Hash routes, so every page has a shareable link and works on static hosting:
 *   #/            → home
 *   #/about       → about
 *   #/products    → products (All tab)
 *   #/products/filter/pe-pipe-compounds → products, filtered to one family tab
 *   #/products/pe-pipe-compounds → that family's detail page
 *   #/industries/automotive → industries page, scrolled to that industry
 *   #/resources/guides      → resources page, scrolled to that section
 *   #/quote/pe-pipe-compounds    → quote form, pre-filled with that family
 *   #/thanks/quote          → thank-you page for that form
 *   #industries   → home, scrolled to that section (plain in-page anchors keep working)
 */
/** Old family slugs from before the Moharam Plast update, so shared links still land somewhere useful. */
const OLD_SLUGS: Record<string, string> = {
  polyethylene: "pe-pipe-compounds",
  polypropylene: "glass-fibre-pp",
  "specialty-composites": "glass-fibre-pp",
  "performance-additives": "masterbatches",
};

export function parseHash(hash: string): { page: Page; anchor: string } {
  const h = hash.replace(/^#/, "");
  if (h.startsWith("/")) {
    const [p, rawA = "", rawB = ""] = h.slice(1).split("/");
    const a = OLD_SLUGS[rawA] ?? rawA;
    const b = OLD_SLUGS[rawB] ?? rawB;
    if (p === "products") {
      if (a === "filter") return { page: "products", anchor: b };
      if (a && a !== "all") return { page: "family", anchor: a };
      return { page: "products", anchor: a };
    }
    const page = (PAGES.includes(p as Page) ? p : "home") as Page;
    return { page, anchor: a };
  }
  return { page: "home", anchor: h };
}

export function hashFor(p: Page, anchor = ""): string {
  if (p === "home") return anchor ? `#${anchor}` : "#/";
  if (p === "family") return `#/products/${anchor}`;
  if (p === "products" && anchor && anchor !== "all") return `#/products/filter/${anchor}`;
  return `#/${p}${anchor ? `/${anchor}` : ""}`;
}
