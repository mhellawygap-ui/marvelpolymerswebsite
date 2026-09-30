import { useNav } from "@/NavContext";
import { useFormSubmit } from "@/lib/useFormSubmit";

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
  const { sending, error, onSubmit } = useFormSubmit("contact");

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero" style={{ paddingBottom: 52 }}>
        <div className="container">
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
                background: "linear-gradient(135deg, rgba(24,44,85,.5) 0%, rgba(137,11,22,.2) 100%)",
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
            <>
                <h2 style={{ color: "var(--navy)", fontSize: "1.9rem", margin: "8px 0 24px" }}>
                  Tell us what you need.
                </h2>
                <form onSubmit={onSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label>Full Name</label>
                      <input name="name" required placeholder="Your name" autoComplete="name" />
                    </div>
                    <div className="form-field">
                      <label>Company</label>
                      <input name="company" required placeholder="Company name" autoComplete="organization" />
                    </div>
                    <div className="form-field">
                      <label>Country</label>
                      <input name="country" placeholder="Country" autoComplete="country-name" />
                    </div>
                    <div className="form-field">
                      <label>Business Email</label>
                      <input name="email" required type="email" placeholder="name@company.com" autoComplete="email" />
                    </div>
                    <div className="form-field">
                      <label>Phone / WhatsApp</label>
                      <input name="phone" type="tel" placeholder="+20 ..." autoComplete="tel" />
                    </div>
                    <div className="form-field">
                      <label>Enquiry Type</label>
                      <select name="enquiry_type">
                        {enquiryTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field full">
                      <label>Message / Material Requirement</label>
                      <textarea name="message" placeholder="Share the material, grade, application, processing method, quantity or delivery destination if known." />
                    </div>
                    <div className="form-field full" style={{ alignItems: "flex-start" }}>
                      {error && <p className="rq-error" role="alert">{error}</p>}
                      <button className="btn primary" type="submit" disabled={sending}>
                        {sending ? "Sending…" : <>Send Enquiry <span className="arrow">↗</span></>}
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
          </div>
        </div>
      </section>
    </main>
  );
}
