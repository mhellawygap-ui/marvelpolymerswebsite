import { useRef } from "react";

const team = [
  {
    name: "Ahmed Al-Rashidi",
    title: "Managing Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Sara Khalil",
    title: "Head of Technical",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Omar Farouk",
    title: "Commercial Director",
    img: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Nadia El-Sayed",
    title: "Supply Chain Manager",
    img: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Karim Mansour",
    title: "Polymer Specialist",
    img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Layla Hassan",
    title: "Business Development",
    img: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>The people behind Marvel.</h2>
          </div>
          <p>A focused team of polymer specialists, commercial coordinators and logistics experts.</p>
        </div>
        <div className="team-carousel">
          <div className="team-track" ref={trackRef}>
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar-wrap">
                  <img className="team-avatar" src={m.img} alt={m.name} />
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-title">{m.title}</div>
              </div>
            ))}
          </div>
          <div className="team-arrows">
            <button className="team-arrow" onClick={() => scroll("left")} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="team-arrow" onClick={() => scroll("right")} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
