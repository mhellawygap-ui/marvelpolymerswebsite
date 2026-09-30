/** Industries page content. Materials link to the family pages; parts come from the product hierarchy. */
const us = (id: string) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200`;

export interface Industry {
  slug: string;
  name: string;
  short: string;
  img: string;
  intro: string;
  parts: string[];
  /** [family slug, label shown on the chip] */
  materials: [string, string][];
}

export const industries: Industry[] = [
  {
    slug: "infrastructure",
    short: "Infrastructure & Water",
    name: "Infrastructure, Water & Utility Piping",
    img: us("1693907986952-3cd372e4c9d8"),
    intro: "Pipe networks are built to last for decades, so the resin has to hold pressure, resist cracking and stay stable in the ground and in sunlight.",
    parts: ["Pressure water pipes", "Gas distribution pipes", "Sewage & drainage", "Hot & cold plumbing"],
    materials: [["polyethylene", "PE100 / PE80"], ["polypropylene", "PP-R"], ["performance-additives", "Pipe black & UV"]],
  },
  {
    slug: "oil-gas",
    short: "Oil & Gas",
    name: "Oil & Gas Pipeline Infrastructure",
    img: us("1559510981-10719ce4266a"),
    intro: "Steel transmission lines depend on their external coating to stop corrosion and survive handling, burial and operating temperature.",
    parts: ["Transmission pipeline coating", "High-temperature lines", "Adhesive tie-layers"],
    materials: [["pipeline-coatings", "3LPE"], ["pipeline-coatings", "3LPP"], ["pipeline-coatings", "Adhesive resins"]],
  },
  {
    slug: "automotive",
    short: "Automotive",
    name: "Automotive & Transportation",
    img: us("1777642328916-d96fc156f32b"),
    intro: "Vehicle parts need impact strength, heat resistance and a good finish — at the lowest possible weight.",
    parts: ["Battery cases", "Interior & exterior trim", "Electrical & technical parts", "Seals & weatherstripping"],
    materials: [["polypropylene", "Impact-modified & GFR PP"], ["engineering-thermoplastics", "PA · PC/ABS · PBT"], ["thermoplastic-elastomers", "TPE / TPV"]],
  },
  {
    slug: "industrial",
    short: "Industrial",
    name: "Industrial Manufacturing",
    img: us("1496247749665-49cf5b1022e9"),
    intro: "Crates, drums and technical parts that are handled hard every day need toughness, stiffness and consistent processing.",
    parts: ["Heavy crates", "Drums & containers", "Structural industrial parts", "Composite components"],
    materials: [["polyethylene", "HDPE"], ["polypropylene", "PP-B & compounds"], ["engineering-thermoplastics", "Reinforced PA"], ["specialty-composites", "Matrix resins"]],
  },
  {
    slug: "packaging",
    short: "Packaging",
    name: "Packaging & Rotomolding",
    img: us("1720414574223-9f634e6035c6"),
    intro: "From stretch film to water tanks, packaging grades must run fast on the line and protect what's inside.",
    parts: ["Heavy-duty sacks", "Stretch & flexible film", "Bottles, caps & closures", "Rotomolded tanks"],
    materials: [["polyethylene", "LDPE · LLDPE · HDPE"], ["polypropylene", "PP-H raffia"], ["performance-additives", "Color & UV masterbatch"]],
  },
  {
    slug: "electrical",
    short: "Electrical",
    name: "Electrical & Electronics",
    img: "https://images.pexels.com/photos/7286937/pexels-photo-7286937.jpeg?auto=compress&cs=tinysrgb&w=1200",
    intro: "Housings, connectors and components that must stay dimensionally stable, insulate reliably and, where required, resist flame.",
    parts: ["Electrical housings", "Connectors & technical components", "PC/ABS enclosures"],
    materials: [["engineering-thermoplastics", "PBT · PC · FR PA"], ["performance-additives", "Anti-static"]],
  },
];
