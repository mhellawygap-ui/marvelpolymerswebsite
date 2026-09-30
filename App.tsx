import { useState, useEffect } from "react";
import { NavCtx, type Page } from "@/NavContext";
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

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title =
      page === "about"
        ? "About — Marvel Polymers"
        : page === "contact"
        ? "Contact — Marvel Polymers"
        : "Marvel Polymers · Industrial Polymer Solutions";
  }, [page]);

  return (
    <NavCtx.Provider value={{ page, navigate }}>
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
      <Footer />
    </NavCtx.Provider>
  );
}
