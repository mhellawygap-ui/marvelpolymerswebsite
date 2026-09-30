import { useNav } from "@/NavContext";

const portImg = "https://images.unsplash.com/photo-1670121180530-cfcba4438038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const regions = [
  { name: "Africa", countries: "Algeria · Morocco · Kenya · Tanzania · Nigeria · Ghana" },
  { name: "Europe", countries: "Germany · Italy · France · Spain · Poland · Romania · Czechia" },
  { name: "South America", countries: "Brazil · Chile · Colombia" },
];

export default function MaterialFinderSection() {
  const { navigate } = useNav();

  return (
    <section className="section" id="markets">
      <div className="container">
        <div className="markets-grid">
          <div className="markets-copy">
            <div className="eyebrow">Global Markets</div>
            <h2>Focused markets. Application-led growth.</h2>
            <div className="region-cards">
              {regions.map((r) => (
                <div key={r.name} className="region-card">
                  <h4>{r.name}</h4>
                  <p>{r.countries}</p>
                </div>
              ))}
            </div>
            <a
              className="btn primary"
              href="#contact"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}
              style={{ marginTop: 28, alignSelf: "flex-start" }}
            >
              Talk to Marvel <span className="arrow">↗</span>
            </a>
          </div>
          <div className="markets-visual">
            <img src={portImg} alt="International container port — Marvel global supply" />
          </div>
        </div>
      </div>
    </section>
  );
}
