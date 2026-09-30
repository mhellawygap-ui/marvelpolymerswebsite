import { useEffect, useRef } from "react";
import whyImg from "@/imports/Why_Marvel_Untitled__1672_x_534_px_.png";

export default function WhyMarvelSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("why-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Why Marvel</div>
            <h2>More than polymer supply.</h2>
          </div>
          <p>We connect technical requirements with suitable material families, practical sourcing and commercially structured supply.</p>
        </div>

        <div style={{ marginBottom: 48, borderRadius: 22, overflow: "hidden" }}>
          <img
            src={whyImg}
            alt="From application requirement to polymer selection, technical support and global delivery"
            style={{ width: "100%", display: "block", objectFit: "contain" }}
          />
        </div>

        <div className="value-grid" ref={gridRef}>
          {[
            { num: "01", h3: "Application-Led Selection", p: "Start with the end use, processing method and target performance — not just a resin name." },
            { num: "02", h3: "Specialized Portfolio", p: "Polymer families, compounds, coatings, engineering materials and performance additives." },
            { num: "03", h3: "Technical + Commercial Support", p: "Material guidance combined with sourcing, documentation and commercial coordination." },
            { num: "04", h3: "Global Supply", p: "Support for project, recurring and international supply requirements through one commercial contact." },
          ].map((v) => (
            <article className="value" key={v.num}>
              <div className="value-inner">
                <div className="value-top">
                  <div className="num">{v.num}</div>
                  <h3>{v.h3}</h3>
                </div>
                <p>{v.p}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
