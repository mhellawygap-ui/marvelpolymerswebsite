import { useState, useEffect } from "react";
import { NavCtx, type Page, parseHash, hashFor } from "@/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SuppliersSection from "@/components/SuppliersSection";
import WhyMarvelSection from "@/components/WhyMarvelSection";
import ProductsSection from "@/components/ProductsSection";
import MaterialFinderSection from "@/components/MaterialFinderSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ResourcesSection from "@/components/ResourcesSection";
import FinalCTASection from "@/components/FinalCTASection";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProductsPage from "@/pages/ProductsPage";
import FamilyPage from "@/pages/FamilyPage";
import { families } from "@/data/products";

const TITLES: Record<Page, string> = {
  home: "Marvel Polymers · Industrial Polymer Solutions",
  about: "About — Marvel Polymers",
  contact: "Contact — Marvel Polymers",
  products: "Products — Marvel Polymers",
  family: "Products — Marvel Polymers",
};

export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  const { page, anchor } = route;

  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (p: Page, a = "") => {
    const next = hashFor(p, a);
    if (window.location.hash === next) {
      scrollToAnchor(a);
    } else {
      window.location.hash = next;
    }
  };

  useEffect(() => {
    const fam = page === "family" ? families.find((f) => f.slug === anchor) : undefined;
    document.title = fam ? `${fam.name} — Marvel Polymers` : TITLES[page];
  }, [page, anchor]);

  // After the page renders, scroll to the requested section (or the top).
  useEffect(() => {
    const id = requestAnimationFrame(() => scrollToAnchor(anchor));
    return () => cancelAnimationFrame(id);
  }, [page, anchor]);

  return (
    <NavCtx.Provider value={{ page, anchor, navigate }}>
      <Header />
      {page === "home" && (
        <main>
          <HeroSection />
          <SuppliersSection />
          <WhyMarvelSection />
          <ProductsSection />
          <MaterialFinderSection />
          <IndustriesSection />
          <ProcessSection />
          <ResourcesSection />
          <FinalCTASection />
        </main>
      )}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "products" && <ProductsPage />}
      {page === "family" && <FamilyPage key={anchor} />}
      <Footer />
    </NavCtx.Provider>
  );
}

function scrollToAnchor(anchor: string) {
  const el = anchor ? document.getElementById(anchor) : null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
