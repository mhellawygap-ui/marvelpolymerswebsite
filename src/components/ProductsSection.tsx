import { useState } from "react";
import { useNav } from "@/NavContext";
import { families } from "@/data/products";

interface Product {
  slug: string;
  span: "large" | "medium";
  chip: string;
  h3: string;
  p: string;
  img: string;
}

/** Home cards come from the same family data as the Products page. */
const products: Product[] = families.map((f, i) => ({
  slug: f.slug,
  span: i < 2 ? "large" : "medium",
  chip: f.chip,
  h3: f.name,
  p: f.description,
  img: f.img,
}));

function FlipCard({ prod }: { prod: Product }) {
  const [flipped, setFlipped] = useState(false);
  const { navigate } = useNav();

  return (
    <div
      className={`flip-card ${prod.span}${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="product-card-inner">
        <div className="product-card-front">
          <img src={prod.img} alt={prod.h3} />
          <span className="chip chip-lg">{prod.chip}</span>
          <span className="flip-hint">↗</span>
        </div>
        <div className="product-card-back">
          <span className="chip chip-lg">{prod.chip}</span>
          <h3>{prod.h3}</h3>
          <p>{prod.p}</p>
          <a
            className="card-link"
            href={`#/products/${prod.slug}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate("family", prod.slug); }}
          >
            View details <span className="arrow">→</span>
          </a>
          <span className="card-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="section alt" id="products">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Materials built around application.</h2>
          </div>
          <p>Explore Marvel's portfolio by polymer family, processing method, application or technical requirement.</p>
        </div>
        <div className="product-grid">
          {products.map((prod) => (
            <FlipCard key={prod.chip} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
