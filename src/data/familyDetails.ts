/**
 * Family detail pages — content taken from "Marvel Polymers Product Hierarchy" (Aug 2026):
 * sub-categories / resin types and specialized application grades per family.
 * Resin descriptions are short general definitions; no technical values beyond those in the hierarchy.
 * Application photos: Pexels (free to use, no attribution required).
 */

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export interface ResinType {
  code: string;
  name: string;
  desc: string;
}

export interface Grade {
  title: string;
  /** Focus / applications, as listed in the hierarchy. */
  focus: string[];
  /** Two-line brief shown on the card (SEO-friendly text). */
  desc: string;
  process: string;
  img: string;
  group?: string;
}

export interface FamilyDetail {
  slug: string;
  heroImg?: string;
  intro: string;
  resinTypes: ResinType[];
  grades: Grade[];
  gradesTitle: string;
  /** Optional family-specific explainer visual. */
  visual?: "coating-layers" | "masterbatch";
}

export const familyDetails: Record<string, FamilyDetail> = {
  polyethylene: {
    slug: "polyethylene",
    intro:
      "The most widely used polymer family — from pressure pipes under the street to the drums, crates and films that move goods. Marvel supplies HDPE, MDPE / LLDPE and LDPE grades matched to how you process and what your product must do.",
    resinTypes: [
      { code: "HDPE", name: "High-Density Polyethylene", desc: "Rigid and tough with high strength for its weight — the base for pressure pipes, blow-molded containers and crates." },
      { code: "MDPE / LLDPE", name: "Medium-Density / Linear Low-Density PE", desc: "A balance of stiffness and flexibility with good toughness — used in pipes, rotomolded tanks and strong, stretchable films." },
      { code: "LDPE", name: "Low-Density Polyethylene", desc: "Soft, flexible and easy to process — the classic choice for film and flexible packaging." },
    ],
    gradesTitle: "Application grades",
    grades: [
      { title: "PE100 & PE80 Pipe Compounds", desc: "Pressure pipe compounds for water, gas and sewage infrastructure networks.", focus: ["Water", "Gas", "Sewage Infrastructure"], process: "Pipe extrusion", img: px(9389356) },
      { title: "Blow Molding Grades", desc: "HDPE grades for drums, industrial containers and chemical bottles.", focus: ["Drums", "Containers", "Chemical Bottles"], process: "Blow molding", img: px(12845179) },
      { title: "Injection Molding Grades", desc: "Grades for crates, caps and closures that need toughness and fast cycle times.", focus: ["Crates", "Caps", "Closures"], process: "Injection molding", img: px(24517725) },
      { title: "Rotomolding Powders", desc: "UV8 and UV20 stabilized powders for tanks and large hollow parts used outdoors.", focus: ["UV8 / UV20 Stabilized Resins"], process: "Rotational molding", img: px(17854867) },
      { title: "Film Grades", desc: "Film grades for heavy-duty shipping sacks and stretch film.", focus: ["Heavy-Duty Shipping Sacks", "Stretch Film"], process: "Film extrusion", img: px(29817952) },
      { title: "General Extrusion", desc: "Extrusion grades for flexible packaging films.", focus: ["Flexible Packaging Film Grades"], process: "Extrusion", img: px(7414936) },
    ],
  },

  polypropylene: {
    slug: "polypropylene",
    intro:
      "Polypropylene brings stiffness, chemical resistance and efficient processing to rigid and structural parts. Marvel supplies homopolymer, block and random copolymers, plus modified compounds tuned for demanding parts.",
    resinTypes: [
      { code: "PP-H", name: "PP Homopolymer", desc: "Stiff and easy to process — widely used for injection molding, raffia tapes and fibre." },
      { code: "PP-B", name: "PP Block Copolymer", desc: "Improved impact strength, including at low temperatures — for crates, battery cases and automotive parts." },
      { code: "PP-R", name: "PP Random Copolymer", desc: "The material of choice for hot and cold water plumbing pipes and fittings." },
      { code: "Modified PP", name: "Modified PP Compounds", desc: "Mineral-filled, glass-fibre reinforced and impact-modified grades for structural and automotive parts." },
    ],
    gradesTitle: "Application grades",
    grades: [
      { group: "Base resin grades", title: "High MFI Injection & Raffia", desc: "High-flow PP for woven bags, raffia tapes and fibre applications.", focus: ["Woven Bags", "Fiber Application"], process: "Injection · Raffia", img: px(35972270) },
      { group: "Base resin grades", title: "High Impact Industrial", desc: "Impact copolymer grades for battery cases, heavy crates and automotive parts.", focus: ["Battery Cases", "Heavy Crates", "Automotive"], process: "Injection molding", img: px(37177070) },
      { group: "Base resin grades", title: "PP-R Plumbing Extrusion", desc: "Random copolymer grades for hot and cold water distribution pipes.", focus: ["Hot & Cold Water Distribution Pipes"], process: "Pipe extrusion", img: px(29248902) },
      { group: "Modified compounds", title: "Mineral-Filled Compounds", desc: "Talc and calcite reinforced PP compounds for added stiffness.", focus: ["Talc / Calcite Reinforced Grades"], process: "Compounding", img: px(34286024) },
      { group: "Modified compounds", title: "Glass Fiber Reinforced (GFR PP)", desc: "Glass-fibre reinforced PP for structural industrial parts.", focus: ["Structural Industrial Parts"], process: "Compounding", img: px(9242910) },
      { group: "Modified compounds", title: "Impact-Modified Compounds", desc: "Impact-modified PP compounds for automotive exterior and interior trim.", focus: ["Automotive Exterior Trim", "Interior Trim"], process: "Compounding", img: px(241188) },
    ],
  },

  "pipeline-coatings": {
    slug: "pipeline-coatings",
    intro:
      "Steel pipe coating systems that protect pipelines against corrosion and mechanical damage — for oil & gas transmission lines and high-temperature service.",
    resinTypes: [
      { code: "3LPE", name: "3-Layer Polyethylene System", desc: "PE topcoat and adhesive resin over an epoxy primer — the standard for oil & gas transmission pipelines." },
      { code: "3LPP", name: "3-Layer Polypropylene System", desc: "PP coating compounds for pipelines that run at higher operating temperatures." },
      { code: "Adhesive", name: "Adhesive Resins", desc: "The tie-layer that bonds the epoxy primer to the polyolefin topcoat." },
    ],
    gradesTitle: "Application grades",
    visual: "coating-layers",
    grades: [
      { title: "3LPE Topcoat & Adhesive Resins", desc: "PE topcoat and adhesive resins for oil and gas transmission pipelines.", focus: ["Oil & Gas Transmission Pipelines"], process: "Multi-layer coating", img: px(37793901) },
      { title: "3LPP Coating Compounds", desc: "PP coating compounds for pipelines operating at high temperatures.", focus: ["High-Temperature Pipeline Applications"], process: "Multi-layer coating", img: px(36825977) },
    ],
  },

  "engineering-thermoplastics": {
    slug: "engineering-thermoplastics",
    intro:
      "Engineering polymers for technical parts that need more strength, heat resistance or dimensional stability than commodity plastics can deliver.",
    resinTypes: [
      { code: "PA6 / PA66", name: "Polyamides", desc: "Tough, heat- and wear-resistant — available unfilled, glass-fibre reinforced or flame retardant." },
      { code: "PC", name: "Polycarbonate & Blends", desc: "Impact-resistant and dimensionally stable, as pure PC or PC/ABS alloys." },
      { code: "PBT", name: "PBT & Specialty Resins", desc: "Dimensionally stable engineering polyester for technical and electrical parts." },
    ],
    gradesTitle: "Application grades",
    grades: [
      { title: "Reinforced & Modified PA", desc: "PA6 and PA66 grades — unfilled, glass-fibre reinforced (15%–50%) or flame retardant.", focus: ["Unfilled", "Glass Fiber 15%–50%", "Flame Retardant"], process: "Injection molding", img: px(1476320) },
      { title: "PC Grades & Alloys", desc: "Pure PC and PC/ABS alloys for automotive and electrical parts.", focus: ["Pure PC", "PC/ABS Alloys", "Automotive & Electrical"], process: "Injection molding", img: px(18894298) },
      { title: "PBT Engineering Resins", desc: "PBT resins for technical components and electrical housings.", focus: ["Technical Components", "Electrical Housings"], process: "Injection molding", img: px(29032822) },
    ],
  },

  "thermoplastic-elastomers": {
    slug: "thermoplastic-elastomers",
    intro:
      "Thermoplastic elastomers combine rubber-like flexibility with the easy processing of a thermoplastic — ideal for soft-touch and sealing parts.",
    resinTypes: [
      { code: "TPE", name: "Thermoplastic Elastomer", desc: "Soft, flexible compounds for grips, soft-touch surfaces and overmolding." },
      { code: "TPV", name: "Thermoplastic Vulcanizate", desc: "A vulcanized rubber phase in a thermoplastic matrix — suited to seals and weatherstripping." },
    ],
    gradesTitle: "Soft-Touch & Sealing Solutions",
    grades: [
      { title: "Grips", desc: "Soft-touch compounds for handles, grips and overmolded parts.", focus: ["Soft-touch handles", "Overmolded grips"], process: "Injection · Overmolding", img: px(12642937) },
      { title: "Gaskets", desc: "Flexible compounds for sealing gaskets.", focus: ["Sealing gaskets"], process: "Injection molding", img: px(7937299) },
      { title: "Sealing Profiles", desc: "Extrusion compounds for window, door and sealing profiles.", focus: ["Window & door profiles"], process: "Profile extrusion", img: px(5768284) },
      { title: "Weatherstripping", desc: "TPV compounds for automotive door and window weatherstripping.", focus: ["Automotive door & window seals"], process: "Profile extrusion", img: px(17260531) },
    ],
  },

  "performance-additives": {
    slug: "performance-additives",
    intro:
      "Concentrates that color a polymer or change how it processes and performs — added at the machine to the base resin.",
    resinTypes: [
      { code: "Color", name: "Color Masterbatches", desc: "Pipe black, white and custom-matched colors." },
      { code: "Additive", name: "Additive Masterbatches", desc: "UV stabilizers, antioxidants, processing aids and anti-static." },
    ],
    gradesTitle: "Application grades",
    visual: "masterbatch",
    grades: [],
  },

  "specialty-composites": {
    slug: "specialty-composites",
    heroImg: px(33708756),
    intro:
      "Structural polymers and specialty matrix resins for industrial composite parts and civil-engineering applications.",
    resinTypes: [
      { code: "Matrix Resins", name: "Specialty Matrix Resins", desc: "Resin systems that bind fibre reinforcement into strong, lightweight composite structures." },
    ],
    gradesTitle: "Application grades",
    grades: [
      { title: "Industrial Composites", desc: "Specialty matrix resins for industrial composite components.", focus: ["Composite components", "Structural parts"], process: "Composite molding", img: px(33708756) },
      { title: "Civil Engineering Applications", desc: "Matrix resins for composite structures in civil engineering.", focus: ["Infrastructure", "Structures"], process: "Composite molding", img: px(38933029) },
    ],
  },
};
