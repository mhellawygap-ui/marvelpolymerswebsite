import { useEffect, useRef } from "react";

const steps = [
  { num: "01", title: "Requirement", desc: "Application, grade, specification or target performance." },
  { num: "02", title: "Selection", desc: "Relevant family, grade or alternative options." },
  { num: "03", title: "Sourcing", desc: "Availability and suitable supply options." },
  { num: "04", title: "Commercial Plan", desc: "Quantity, schedule, pricing structure and destination." },
  { num: "05", title: "Logistics", desc: "Documentation, shipping and delivery coordination." },
  { num: "06", title: "Delivery", desc: "Material reaches the required destination." },
];

export default function ProcessSection() {
  const procRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = procRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("proc-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>From requirement to delivered solution.</h2>
          </div>
          <p>A clear technical-commercial journey built around your actual material requirement.</p>
        </div>
        <div className="process" ref={procRef}>
          {steps.map((s, i) => (
            <div key={s.num} className="step" style={{ "--step-i": i } as React.CSSProperties}>
              <div className="icon">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
