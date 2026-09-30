/**
 * Products Home content and navigator mappings.
 * Kept separate from layout so it can later be moved into WordPress fields / a CMS.
 *
 * The filter mappings below (processes, applications, requirements per family) are
 * navigational only — they point a visitor to a starting family, they are not
 * technical claims. Review them with Marvel's technical team before launch.
 */
import peImg from "@/imports/PE.png";
import ppImg from "@/imports/PP.png";
import threeLpeImg from "@/imports/3LPE.png";
import paImg from "@/imports/PA.png";
import tpeImg from "@/imports/TPE-1.png";
import perfImg from "@/imports/Performance.png";

const specialtyImg =
  "https://images.unsplash.com/photo-1767884161504-8bcd877d8971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

export const PROCESS_OPTIONS = [
  "Pipe Extrusion",
  "General Extrusion",
  "Film Extrusion",
  "Blow Molding",
  "Injection Molding",
  "Rotational Molding",
  "Compression Molding",
  "Compounding",
  "Coating / Multi-Layer Coating",
  "Other / Not Sure",
] as const;

export const APPLICATION_OPTIONS = [
  "Water & Utility Piping",
  "Gas Distribution",
  "Sewage & Drainage",
  "Steel Pipeline Coating",
  "Drums & Industrial Containers",
  "Bottles",
  "Caps & Closures",
  "Flexible Film",
  "Heavy-Duty Sacks",
  "Raffia / Woven Applications",
  "Automotive Components",
  "Electrical & Electronic Components",
  "Industrial Components",
  "Seals & Flexible Parts",
  "Construction",
  "Consumer Goods",
  "Composites",
  "Other",
] as const;

export const REQUIREMENT_OPTIONS = [
  "Pressure Performance",
  "Chemical Resistance",
  "Impact Resistance",
  "Heat Resistance",
  "Flexibility",
  "UV Stability",
  "Dimensional Stability",
  "Reinforcement",
  "Flame Retardancy",
  "Color",
  "Processing Improvement",
  "Adhesion",
  "Other / Not Sure",
] as const;

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
  cta: string;
  img: string;
  /** Short line for the header mega-menu. */
  menuApps: string;
  processes: string[];
  applications: string[];
  requirements: string[];
  keywords: string[];
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
    cta: "Explore PE Solutions",
    img: peImg,
    menuApps: "Pipe, Film, Blow Molding, Rotomolding",
    processes: ["Pipe Extrusion", "General Extrusion", "Film Extrusion", "Blow Molding", "Injection Molding", "Rotational Molding"],
    applications: [
      "Water & Utility Piping",
      "Gas Distribution",
      "Sewage & Drainage",
      "Drums & Industrial Containers",
      "Bottles",
      "Caps & Closures",
      "Flexible Film",
      "Heavy-Duty Sacks",
    ],
    requirements: ["Pressure Performance"],
    keywords: ["pe", "hdpe", "mdpe", "lldpe", "ldpe", "pe100", "pe80", "pipe", "film", "rotomolding", "polyethylene"],
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
    cta: "Explore PP Solutions",
    img: ppImg,
    menuApps: "Injection Molding, Extrusion, Raffia, Automotive",
    processes: ["Pipe Extrusion", "General Extrusion", "Injection Molding", "Compounding"],
    applications: [
      "Water & Utility Piping",
      "Raffia / Woven Applications",
      "Automotive Components",
      "Industrial Components",
      "Consumer Goods",
      "Caps & Closures",
    ],
    requirements: ["Chemical Resistance", "Dimensional Stability"],
    keywords: ["pp", "pp-h", "pp-b", "pp-r", "ppr", "homopolymer", "copolymer", "raffia", "polypropylene"],
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
    cta: "Explore Pipeline Coatings",
    img: threeLpeImg,
    menuApps: "3LPE / 3LPP, Steel Pipe Anti-Corrosion",
    processes: ["Coating / Multi-Layer Coating"],
    applications: ["Steel Pipeline Coating"],
    requirements: ["Adhesion", "Impact Resistance"],
    keywords: ["3lpe", "3lpp", "coating", "adhesive", "tie-layer", "steel", "pipeline", "anti-corrosion", "oil", "gas"],
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
    cta: "Explore Engineering Thermoplastics",
    img: paImg,
    menuApps: "PA, PC, PBT — Reinforced & Specialty Grades",
    processes: ["Injection Molding", "Compounding"],
    applications: ["Automotive Components", "Electrical & Electronic Components", "Industrial Components"],
    requirements: ["Heat Resistance", "Dimensional Stability", "Reinforcement"],
    keywords: ["pa", "pa6", "pa66", "nylon", "polyamide", "pc", "polycarbonate", "pbt", "reinforced", "engineering"],
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
    cta: "Explore TPE & TPV",
    img: tpeImg,
    menuApps: "Seals, Soft-Touch, Overmolding, TPV",
    processes: ["Injection Molding", "General Extrusion"],
    applications: ["Seals & Flexible Parts", "Automotive Components", "Consumer Goods"],
    requirements: ["Flexibility"],
    keywords: ["tpe", "tpv", "elastomer", "seal", "soft-touch", "overmolding", "hose", "profile", "flexible"],
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
    cta: "Explore Performance Solutions",
    img: perfImg,
    menuApps: "Color, UV Stabilizers, Flame Retardant",
    processes: ["Compounding", "Film Extrusion", "Injection Molding", "Blow Molding"],
    applications: [
      "Drums & Industrial Containers",
      "Bottles",
      "Caps & Closures",
      "Flexible Film",
      "Heavy-Duty Sacks",
      "Industrial Components",
      "Consumer Goods",
    ],
    requirements: ["UV Stability", "Color", "Processing Improvement", "Flame Retardancy"],
    keywords: ["masterbatch", "additive", "color", "colour", "uv", "antioxidant", "anti-static", "antistatic", "flame"],
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
    cta: "Explore Specialty Materials",
    img: specialtyImg,
    menuApps: "Structural Polymers, Filled Compounds",
    processes: ["Compression Molding"],
    applications: ["Composites", "Construction"],
    requirements: ["Reinforcement"],
    keywords: ["composite", "specialty", "speciality", "matrix", "resin", "structural", "reinforcement"],
  },
];

export interface Preset {
  title: string;
  detail: string;
  likely: string;
  slugs: string[];
}

export const applicationGroups: Preset[] = [
  {
    title: "Infrastructure & Pressure Pipes",
    detail: "Water · Gas · Sewage · Industrial Networks",
    likely: "PE · PP · Pipeline Systems",
    slugs: ["polyethylene", "polypropylene", "pipeline-coatings"],
  },
  {
    title: "Rigid Packaging & Containers",
    detail: "Drums · Bottles · Containers · Caps & Closures",
    likely: "HDPE · PP · Performance Additives",
    slugs: ["polyethylene", "polypropylene", "performance-additives"],
  },
  {
    title: "Flexible Film & Packaging",
    detail: "Film · Sacks · Liners · Flexible Packaging",
    likely: "LDPE · LLDPE · HDPE · Additives",
    slugs: ["polyethylene", "performance-additives"],
  },
  {
    title: "Automotive & Transportation",
    detail: "Structural Parts · Under-Hood Components · Seals · Interior Parts",
    likely: "Modified PP · PA · PBT · PC · TPE / TPV",
    slugs: ["polypropylene", "engineering-thermoplastics", "thermoplastic-elastomers"],
  },
  {
    title: "Pipeline Protection",
    detail: "External Steel Pipe Coating · Adhesion · Mechanical Protection",
    likely: "3LPE · 3LPP · Adhesive Resins",
    slugs: ["pipeline-coatings"],
  },
  {
    title: "Industrial & Consumer Components",
    detail: "Molded Parts · Appliances · Technical Components",
    likely: "PP · Engineering Thermoplastics · TPE · Additives",
    slugs: ["polypropylene", "engineering-thermoplastics", "thermoplastic-elastomers", "performance-additives"],
  },
  {
    title: "Rotational Molding",
    detail: "Tanks · Containers · Large Hollow Components",
    likely: "PE Rotomolding Powders",
    slugs: ["polyethylene"],
  },
  {
    title: "Composite Applications",
    detail: "Infrastructure · Transportation · Structural Components",
    likely: "Specialty & Composite Materials",
    slugs: ["specialty-composites"],
  },
];

export const processGroups: Preset[] = [
  { title: "Extrusion", detail: "Pipe · Profile · Sheet · General Extrusion", likely: "", slugs: ["polyethylene", "polypropylene", "thermoplastic-elastomers"] },
  { title: "Film Extrusion", detail: "Blown Film · Flexible Packaging · Industrial Film", likely: "", slugs: ["polyethylene", "performance-additives"] },
  { title: "Injection Molding", detail: "Crates · Caps · Technical Components · Automotive Parts", likely: "", slugs: ["polyethylene", "polypropylene", "engineering-thermoplastics", "thermoplastic-elastomers"] },
  { title: "Blow Molding", detail: "Bottles · Drums · Industrial Containers", likely: "", slugs: ["polyethylene"] },
  { title: "Rotational Molding", detail: "Tanks · Large Containers · Hollow Products", likely: "", slugs: ["polyethylene"] },
  { title: "Compounding", detail: "Modified Performance · Reinforcement · Functional Additives", likely: "", slugs: ["polypropylene", "engineering-thermoplastics", "performance-additives"] },
  { title: "Pipeline Coating", detail: "3LPE · 3LPP · Adhesive / Tie-Layer Systems", likely: "", slugs: ["pipeline-coatings"] },
];
