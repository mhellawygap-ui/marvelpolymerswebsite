import { createContext, useContext } from "react";

export type Page = "home" | "about" | "contact" | "products";

interface NavCtxType {
  page: Page;
  /** Section id to scroll to on the current page (e.g. "industries", or a product family slug). */
  anchor: string;
  navigate: (p: Page, anchor?: string) => void;
}

export const NavCtx = createContext<NavCtxType>({ page: "home", anchor: "", navigate: () => {} });
export const useNav = () => useContext(NavCtx);

const PAGES: Page[] = ["home", "about", "contact", "products"];

/**
 * Hash routes, so every page has a shareable link and works on static hosting:
 *   #/            → home
 *   #/about       → about
 *   #/products    → products
 *   #/products/polyethylene → products, scrolled to that family
 *   #industries   → home, scrolled to that section (plain in-page anchors keep working)
 */
export function parseHash(hash: string): { page: Page; anchor: string } {
  const h = hash.replace(/^#/, "");
  if (h.startsWith("/")) {
    const [p, a = ""] = h.slice(1).split("/");
    const page = (PAGES.includes(p as Page) ? p : "home") as Page;
    return { page, anchor: a };
  }
  return { page: "home", anchor: h };
}

export function hashFor(p: Page, anchor = ""): string {
  if (p === "home") return anchor ? `#${anchor}` : "#/";
  return `#/${p}${anchor ? `/${anchor}` : ""}`;
}
