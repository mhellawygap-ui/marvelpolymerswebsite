/** Industries page content. Materials link to the family pages; parts come from the product hierarchy. */
import rotoImg from "@/imports/roto-tanks.jpg";

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
    parts: ["Drinking water pipes", "Natural gas pipes", "Pressure sewerage", "Irrigation", "Fire suppression", "Sea outfall & relining"],
    materials: [["pe-pipe-compounds", "PE100"], ["pe-pipe-compounds", "PE80"]],
  },
  {
    slug: "oil-gas",
    short: "Oil & Gas",
    name: "Oil & Gas Pipeline Infrastructure",
    img: us("1559510981-10719ce4266a"),
    intro: "Steel transmission lines depend on their external coating to stop corrosion and survive handling, burial and operating temperature.",
    parts: ["Transmission pipeline coating", "Underground corrosion protection", "High-temperature lines", "Adhesive tie-layers"],
    materials: [["pipeline-coatings", "3LPE topcoat"], ["pipeline-coatings", "3LPP topcoat"], ["pipeline-coatings", "Adhesive resins"]],
  },
  {
    slug: "automotive",
    short: "Automotive",
    name: "Automotive & Transportation",
    img: us("1777642328916-d96fc156f32b"),
    intro: "Vehicle parts need stiffness, strength and heat resistance at the lowest possible weight — where glass-fibre reinforced PP replaces heavier materials.",
    parts: ["Structural interior parts", "Under-the-hood components", "Brackets & carriers"],
    materials: [["glass-fibre-pp", "Glass-fibre reinforced PP"]],
  },
  {
    slug: "rotomolding",
    short: "Rotomolding",
    name: "Rotomolding",
    img: rotoImg,
    intro: "Tanks and large hollow parts stand outdoors for years, so the material must melt evenly in the mould and resist sunlight.",
    parts: ["Water tanks", "Chemical tanks", "Containers", "Bins"],
    materials: [["rotomolding", "MDPE roto powders"], ["rotomolding", "Micro pellets"]],
  },
];
