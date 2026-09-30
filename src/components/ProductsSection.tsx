import { useState } from "react";
import peImg from "@/imports/PE.png";
import ppImg from "@/imports/PP.png";
import threeLpeImg from "@/imports/3LPE.png";
import paImg from "@/imports/PA.png";
import tpeImg from "@/imports/TPE-1.png";
import perfImg from "@/imports/Performance.png";

const specImg = "https://images.unsplash.com/photo-1767884161504-8bcd877d8971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

interface Product {
  span: "large" | "medium";
  chip: string;
  h3: string;
  p: string;
  img: string;
}

const products: Product[] = [
  {
    span: "large",
    chip: "PE",
    h3: "Polyethylene (PE) Solutions",
    p: "HDPE, MDPE / LLDPE and LDPE for pipe, blow molding, injection, rotomolding, film and extrusion.",
    img: peImg,
  },
  {
    span: "large",
    chip: "PP",
    h3: "Polypropylene (PP) & Compounds",
    p: "PP-H, PP-B, PP-R and modified compounds for industrial, plumbing, raffia and automotive applications.",
    img: ppImg,
  },
  {
    span: "medium",
    chip: "3LPE / 3LPP",
    h3: "Pipeline Coatings & Adhesive Resins",
    p: "Steel pipe coating and adhesive systems for demanding transmission environments.",
    img: threeLpeImg,
  },
  {
    span: "medium",
    chip: "PA / PC / PBT",
    h3: "Engineering Thermoplastics",
    p: "Reinforced, modified and specialty engineering grades for technical parts.",
    img: paImg,
  },
  {
    span: "medium",
    chip: "TPE / TPV",
    h3: "Thermoplastic Elastomers",
    p: "Flexible, sealing and soft-touch compounds for industrial and consumer applications.",
    img: tpeImg,
  },
  {
    span: "large",
    chip: "Performance",
    h3: "Masterbatches & Performance Additives",
    p: "Color formulations, UV stabilizers, antioxidants, processing aids and anti-static solutions.",
    img: perfImg,
  },
  {
    span: "large",
    chip: "Specialty",
    h3: "Specialty & Composite Materials",
    p: "Structural polymers and specialty matrix resins for industrial composites and civil engineering applications.",
    img: specImg,
  },
];

function FlipCard({ prod }: { prod: Product }) {
  const [flipped, setFlipped] = useState(false);

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
          <span className="card-arrow">↗</span>
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
            <div className="eyebrow">Product Solutions</div>
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
