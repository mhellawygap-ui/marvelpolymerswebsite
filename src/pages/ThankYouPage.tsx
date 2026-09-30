import { useNav, hashFor, type Page } from "@/NavContext";

const COPY: Record<string, { eyebrow: string; title: string; text: string }> = {
  quote: {
    eyebrow: "Quote request received",
    title: "Thank you — we're on it.",
    text: "Our team will review your material, quantity and delivery details and reply by email with suitable options, availability and pricing.",
  },
  family: {
    eyebrow: "Enquiry received",
    title: "Thank you — we're on it.",
    text: "Our team will review your requirement and reply by email with suitable grades, availability and pricing.",
  },
  documents: {
    eyebrow: "Document request received",
    title: "Thank you — your documents are on the way.",
    text: "We'll check the grade you selected and email the available technical documentation.",
  },
  contact: {
    eyebrow: "Message received",
    title: "Thank you for getting in touch.",
    text: "A member of our team will reply to your message by email.",
  },
};

const STEPS = [
  { t: "We review", d: "Your requirement goes to the right specialist." },
  { t: "We match", d: "Suitable grades and supply options are identified." },
  { t: "We reply", d: "You receive options by email — ask us anything along the way." },
];

export default function ThankYouPage() {
  const { anchor, navigate } = useNav();
  const c = COPY[anchor] ?? COPY.contact;
  const link = (p: Page, a = "") => ({
    href: hashFor(p, a),
    onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate(p, a); },
  });

  return (
    <main className="ty">
      <section className="ty-hero">
        <div className="container ty-wrap">
          <div className="ty-check" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="eyebrow">{c.eyebrow}</div>
          <h1>{c.title}</h1>
          <p>{c.text}</p>

          {anchor !== "contact" && (
            <ol className="ty-steps">
              {STEPS.map((s, i) => (
                <li key={s.t}>
                  <span>{i + 1}</span>
                  <strong>{s.t}</strong>
                  <small>{s.d}</small>
                </li>
              ))}
            </ol>
          )}

          <div className="hero-actions ty-actions">
            <a className="btn primary" {...link("products")}>Browse Products <span className="arrow">→</span></a>
            <a className="btn ghost" {...link("home")}>Back to Home</a>
          </div>
          <p className="ty-note">
            Need something urgently? Email <a href="mailto:operations@marvelpolymers.com">operations@marvelpolymers.com</a> or
            WhatsApp <a href="https://wa.me/201205222901" target="_blank" rel="noreferrer">+20 120 522 2901</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
