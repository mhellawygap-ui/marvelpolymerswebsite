/**
 * Products Home content and navigator mappings.
 * Kept separate from layout so it can later be moved into WordPress fields / a CMS.
 *
 */
import peImg from "@/imports/PE.png";
import ppImg from "@/imports/PP.png";
import threeLpeImg from "@/imports/3LPE.png";
import paImg from "@/imports/PA.png";
import tpeImg from "@/imports/TPE-1.png";
import perfImg from "@/imports/Performance.png";

const specialtyImg =
  "https://images.unsplash.com/photo-1767884161504-8bcd877d8971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

export interface Family {
  slug: string;
  num: string;
  name: string;
  shortName: string;
  chip: string;
  description: string;
  typesLabel: string;
  types: string[];
  applicationFocus: string[];
  img: string;
  /** Short line for the header mega-menu. */
  menuApps: string;
}

export const families: Family[] = [
  {
    slug: "polyethylene",
    num: "01",
    name: "Polyethylene (PE) Solutions",
    shortName: "Polyethylene",
    chip: "PE",
    description:
      "Versatile polyethylene solutions covering HDPE, MDPE / LLDPE and LDPE across infrastructure, packaging, molding and extrusion applications.",
    typesLabel: "Resin Types",
    types: ["HDPE", "MDPE / LLDPE", "LDPE"],
    applicationFocus: [
      "PE100 & PE80 Pipe Compounds",
      "Water, Gas & Sewage Infrastructure",
      "Blow Molding",
      "Injection Molding",
      "Rotomolding",
      "Film",
      "General Extrusion",
    ],
    img: peImg,
    menuApps: "Pipe, Film, Blow Molding, Rotomolding",
  },
  {
    slug: "polypropylene",
    num: "02",
    name: "Polypropylene (PP) & Compounds",
    shortName: "Polypropylene",
    chip: "PP",
    description:
      "Polypropylene materials for rigid, structural and process-driven applications where stiffness, durability, chemical resistance and efficient conversion matter.",
    typesLabel: "Resin Types",
    types: ["PP-H", "PP-B", "PP-R", "Modified PP"],
    applicationFocus: [
      "Pipes & Fittings",
      "Injection Molding",
      "Raffia / Woven Applications",
      "Automotive Components",
      "Consumer & Industrial Components",
      "Compounding",
    ],
    img: ppImg,
    menuApps: "Injection Molding, Extrusion, Raffia, Automotive",
  },
  {
    slug: "pipeline-coatings",
    num: "03",
    name: "Pipeline Coatings & Adhesive Resins",
    shortName: "Pipeline Coatings",
    chip: "3LPE / 3LPP",
    description:
      "Material systems for the external protection of steel pipelines operating across demanding infrastructure and energy environments.",
    typesLabel: "Material Focus",
    types: ["3LPE", "3LPP", "Adhesive Resins"],
    applicationFocus: [
      "Steel Pipe Coating",
      "Oil & Gas Pipelines",
      "Water Transmission",
      "Infrastructure Pipelines",
      "Adhesive / Tie-Layer Systems",
      "Multi-Layer Protection",
    ],
    img: threeLpeImg,
    menuApps: "3LPE / 3LPP, Steel Pipe Anti-Corrosion",
  },
  {
    slug: "engineering-thermoplastics",
    num: "04",
    name: "Engineering Thermoplastics",
    shortName: "Engineering Thermoplastics",
    chip: "PA / PC / PBT",
    description:
      "Engineering polymers developed for technical parts that demand higher mechanical, thermal or dimensional performance than standard commodity plastics.",
    typesLabel: "Resin Types",
    types: ["PA6", "PA66", "PC & PC Blends", "PBT"],
    applicationFocus: [
      "Automotive Parts",
      "Electrical Components",
      "Industrial Components",
      "Reinforced Compounds",
      "Heat-Resistant Applications",
      "Precision Molded Parts",
    ],
    img: paImg,
    menuApps: "PA, PC, PBT — Reinforced & Specialty Grades",
  },
  {
    slug: "thermoplastic-elastomers",
    num: "05",
    name: "Thermoplastic Elastomers",
    shortName: "TPE & TPV",
    chip: "TPE / TPV",
    description:
      "Flexible thermoplastic materials combining elastomer-like performance with thermoplastic processing efficiency.",
    typesLabel: "Resin Types",
    types: ["TPE", "TPV"],
    applicationFocus: [
      "Sealing Systems",
      "Flexible Components",
      "Automotive Applications",
      "Soft-Touch Components",
      "Hoses & Profiles",
      "Consumer Applications",
    ],
    img: tpeImg,
    menuApps: "Seals, Soft-Touch, Overmolding, TPV",
  },
  {
    slug: "performance-additives",
    num: "06",
    name: "Masterbatches & Performance Additives",
    shortName: "Performance Additives",
    chip: "Performance",
    description:
      "Functional and aesthetic solutions designed to modify color, processing behavior, durability and end-product performance.",
    typesLabel: "Solution Types",
    types: ["Color", "UV", "Antioxidant", "Processing", "Anti-Static", "Functional Additives"],
    applicationFocus: [
      "Color Modification",
      "UV Protection",
      "Processing Improvement",
      "Thermal / Oxidative Stability",
      "Anti-Static Performance",
      "Application-Specific Formulation",
    ],
    img: perfImg,
    menuApps: "Color, UV Stabilizers, Flame Retardant",
  },
  {
    slug: "specialty-composites",
    num: "07",
    name: "Specialty & Composite Materials",
    shortName: "Specialty & Composites",
    chip: "Specialty",
    description:
      "Specialized material systems for applications requiring structural performance, reinforcement or application-specific material combinations.",
    typesLabel: "Material Focus",
    types: ["Composite Materials", "Reinforcement Systems", "Specialty Matrix Resins"],
    applicationFocus: [
      "Infrastructure",
      "Industrial Structures",
      "Transportation",
      "Composite Components",
      "Specialized Manufacturing",
      "Performance-Driven Applications",
    ],
    img: specialtyImg,
    menuApps: "Structural Polymers, Filled Compounds",
  },
];

export interface Product {
  code: string;
  name: string;
}

/** Products shown under each family tab. Names are the standard material names only. */
export const productsByFamily: Record<string, Product[]> = {
  polyethylene: [
    { code: "HDPE", name: "High-Density Polyethylene" },
    { code: "MDPE", name: "Medium-Density Polyethylene" },
    { code: "LLDPE", name: "Linear Low-Density Polyethylene" },
    { code: "LDPE", name: "Low-Density Polyethylene" },
    { code: "PE100 / PE80", name: "Polyethylene Pipe Compounds" },
  ],
  polypropylene: [
    { code: "PP-H", name: "Polypropylene Homopolymer" },
    { code: "PP-B", name: "Polypropylene Block Copolymer" },
    { code: "PP-R", name: "Polypropylene Random Copolymer" },
    { code: "Modified PP", name: "Modified Polypropylene Compounds" },
  ],
  "pipeline-coatings": [
    { code: "3LPE", name: "Three-Layer Polyethylene Coating" },
    { code: "3LPP", name: "Three-Layer Polypropylene Coating" },
    { code: "Adhesive", name: "Adhesive / Tie-Layer Resins" },
  ],
  "engineering-thermoplastics": [
    { code: "PA6", name: "Polyamide 6" },
    { code: "PA66", name: "Polyamide 66" },
    { code: "PC", name: "Polycarbonate & PC Blends" },
    { code: "PBT", name: "Polybutylene Terephthalate" },
  ],
  "thermoplastic-elastomers": [
    { code: "TPE", name: "Thermoplastic Elastomer" },
    { code: "TPV", name: "Thermoplastic Vulcanizate" },
  ],
  "performance-additives": [
    { code: "Color", name: "Color Masterbatches" },
    { code: "UV", name: "UV Stabilizer Masterbatches" },
    { code: "AO", name: "Antioxidant Masterbatches" },
    { code: "Processing", name: "Processing Aids" },
    { code: "Anti-Static", name: "Anti-Static Additives" },
    { code: "Functional", name: "Functional Additives" },
  ],
  "specialty-composites": [
    { code: "Composites", name: "Composite Materials" },
    { code: "Reinforcement", name: "Reinforcement Systems" },
    { code: "Matrix Resins", name: "Specialty Matrix Resins" },
  ],
};
