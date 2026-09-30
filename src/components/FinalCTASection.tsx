export default function FinalCTASection() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <div>
            <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Request a Quote</div>
            <h2>Looking for a specific material or grade?</h2>
            <p>Tell us what you need, how it will be used and where it should be delivered.</p>
            <p style={{ marginTop: 12 }}><a href="#/contact" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>Not sure yet? Ask an expert →</a></p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href="#/quote">
              Request a Quote <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
