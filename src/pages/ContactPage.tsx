import { useState } from "react";
import { useNav } from "@/NavContext";

const enquiryTypes = [
  "Product / Material Enquiry",
  "Technical Documents",
  "Commercial / Supply",
  "Partnership",
  "General Enquiry",
];

const contactDetails = [
  {
    label: "Email",
    value: "operations@marvelpolymers.com",
    href: "mailto:operations@marvelpolymers.com",
  },
  {
    label: "Phone / WhatsApp",
    value: "+20 120 522 2901",
    href: "tel:+201205222901",
  },
  {
    label: "Address",
    value: "El-Nahda Industrial Zone,\nAlexandria, Egypt",
  },
  {
    label: "Best for",
    value: "Product enquiries · Technical documents · Commercial supply · Partnerships",
  },
];

export default function ContactPage() {
  const { navigate } = useNav();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero" style={{ paddingBottom: 52 }}>
        <div className="container">
          <div className="eyebrow">Contact Marvel</div>
          <h1 style={{ maxWidth: 820, marginBottom: 16 }}>
            Start a conversation about your material requirement.
          </h1>
          <p style={{ maxWidth: 680 }}>
            Contact Marvel for product enquiries, technical-commercial questions, supply
            requirements or partnership discussions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container contact-grid">

          {/* Left: contact card */}
          <aside className="contact-card">
            <div className="eyebrow" style={{ color: "#fff", opacity: .65 }}>Marvel Polymers</div>
            <h2>Talk directly with our team.</h2>
            {contactDetails.map((item) => (
              <div key={item.label} className="contact-item">
                <small>{item.label}</small>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span style={{ whiteSpace: "pre-line" }}>{item.value}</span>
                )}
              </div>
            ))}

            {/* Location visual */}
            <div style={{
              marginTop: 28,
              borderRadius: 16,
              overflow: "hidden",
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              padding: "20px 22px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: ".82rem", color: "rgba(255,255,255,.7)", fontWeight: 600 }}>El-Nahda Industrial Zone, Alexandria</span>
              </div>
              <div style={{
                height: 120,
                borderRadius: 12,
                background: "linear-gradient(135deg, rgba(1,42,87,.5) 0%, rgba(137,11,22,.2) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="4" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "#f0fdf4", border: "2px solid #86efac",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ color: "var(--navy)", marginBottom: 10 }}>Enquiry received</h3>
                <p style={{ color: "var(--muted)", marginBottom: 24 }}>
                  Thank you. A member of our team will follow up on your material enquiry shortly.
                </p>
                <button
                  className="btn ghost"
                  onClick={() => navigate("home")}
                  style={{ fontSize: ".9rem" }}
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <>
                <div className="eyebrow">Send an Enquiry</div>
                <h2 style={{ color: "var(--navy)", fontSize: "1.9rem", margin: "8px 0 24px" }}>
                  Tell us what you need.
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label>Full Name</label>
                      <input required placeholder="Your name" />
                    </div>
                    <div className="form-field">
                      <label>Company</label>
                      <input required placeholder="Company name" />
                    </div>
                    <div className="form-field">
                      <label>Country</label>
                      <input placeholder="Country" />
                    </div>
                    <div className="form-field">
                      <label>Business Email</label>
                      <input required type="email" placeholder="name@company.com" />
                    </div>
                    <div className="form-field">
                      <label>Phone / WhatsApp</label>
                      <input placeholder="+20 ..." />
                    </div>
                    <div className="form-field">
                      <label>Enquiry Type</label>
                      <select>
                        {enquiryTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field full">
                      <label>Message / Material Requirement</label>
                      <textarea placeholder="Share the material, grade, application, processing method, quantity or delivery destination if known." />
                    </div>
                    <div className="form-field full" style={{ alignItems: "flex-start" }}>
                      <button className="btn primary" type="submit">
                        Send Enquiry <span className="arrow">↗</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="location-box">
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: 6 }}>Have a specific grade or TDS?</strong>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem" }}>
                    Mention it in the message above. We will respond with relevant grade data and
                    commercial options as quickly as possible.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
