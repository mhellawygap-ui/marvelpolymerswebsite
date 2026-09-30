export default function FinalCTASection() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <div>
            <div className="eyebrow" style={{ color: "#fff", opacity: .7 }}>Start a Material Request</div>
            <h2>Looking for a specific material or grade?</h2>
            <p>Tell us what you need, how it will be used and where it should be delivered.</p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href="mailto:operations@marvelpolymers.com">
              Request a Material <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
