import sabicLogo from "@/imports/_890b16__1800_x_748_px_.png";
import gapLogo from "@/imports/_890b16__1800_x_748_px___1_.png";
import lybLogo from "@/imports/_890b16__1800_x_748_px___2_.png";
import borougeLogo from "@/imports/_890b16__1800_x_748_px___3_.png";
import exxonLogo from "@/imports/_890b16__1800_x_748_px___4_.png";
import moharamLogo from "@/imports/_890b16__1800_x_748_px___5_.png";

const partners = [
  { src: sabicLogo, alt: "SABIC" },
  { src: borougeLogo, alt: "Borouge" },
  { src: lybLogo, alt: "LyondellBasell" },
  { src: exxonLogo, alt: "ExxonMobil" },
  { src: moharamLogo, alt: "Moharam Plast" },
  { src: gapLogo, alt: "GAP Polymers" },
];

export default function SuppliersSection() {
  return (
    <section style={{ background: "var(--soft)", padding: "36px 0" }}>
      <div className="container">
        <div className="partners-strip">
          <p className="partners-lead">
            Materials sourced across leading<br />producers &amp; suppliers
          </p>
          <div className="partners-logos">
            {partners.map((p) => (
              <img key={p.alt} src={p.src} alt={p.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
