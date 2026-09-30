const industries = [
  {
    className: "industry industry-span2 industry-tall",
    img: "https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Water utility piping infrastructure",
    h3: "Infrastructure, Water & Utility Piping",
    slug: "infrastructure",
    p: "PE100 / PE80, HDPE, PP-R and performance additives.",
  },
  {
    className: "industry",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Industrial manufacturing factory floor",
    h3: "Industrial Manufacturing",
    slug: "industrial",
    p: "Materials for crates, drums, containers and technical parts.",
  },
  {
    className: "industry",
    img: "https://images.unsplash.com/photo-1777642328916-d96fc156f32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Automotive assembly line with robotic arms",
    h3: "Automotive & Transportation",
    slug: "automotive",
    p: "Modified PP, engineering thermoplastics and TPE / TPV.",
  },
  {
    className: "industry industry-tall",
    img: "https://images.unsplash.com/photo-1559510981-10719ce4266a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Oil and gas pipeline infrastructure",
    h3: "Oil & Gas Pipeline Infrastructure",
    slug: "oil-gas",
    p: "3LPE, 3LPP and adhesive resin systems.",
  },
  {
    className: "industry",
    img: "https://images.unsplash.com/photo-1720414574223-9f634e6035c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Industrial plastic containers and packaging",
    h3: "Rotational Molding & Packaging",
    slug: "packaging",
    p: "UV-stabilized powders, film grades and color solutions.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="section alt" id="industries">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Built for industries where material performance matters.</h2>
          </div>
          <p>Connect the material family with the real processing, durability and supply requirements of the end application.</p>
        </div>
        <div className="industry-grid">
          {industries.map((ind) => (
            <a key={ind.h3} className={ind.className} href={`#/industries/${ind.slug}`}>
              <img src={ind.img} alt={ind.alt} />
              <div className="industry-content">
                <h3>{ind.h3}</h3>
                <p>{ind.p}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
