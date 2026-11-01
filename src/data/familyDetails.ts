/**
 * Family detail pages — products manufactured by Moharam Plast, per the
 * "Marvel vs Moharam Plast" comparison sheet and Mr. Naji's notes (Nov 2026).
 * Structure: family → resin / material types → application grades (product cards).
 * Supplied photos live in src/imports; other photos: Pexels (free to use).
 */
import pipeBlackImg from "@/imports/pipe-black.jpg";
import pipeOrangeImg from "@/imports/pipe-orange.jpg";
import rotoImg from "@/imports/roto-tanks.jpg";
import gfppImg from "@/imports/gfpp.jpg";
import coatedPipeImg from "@/imports/coated-pipe.jpg";
import perfImg from "@/imports/Performance.png";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export interface ResinType {
  code: string;
  name: string;
  desc: string;
}

export interface Grade {
  title: string;
  /** Grade code shown on the card. */
  code?: string;
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
  "pe-pipe-compounds": {
    slug: "pe-pipe-compounds",
    heroImg: pipeOrangeImg,
    intro:
      "Our main product line: ready-to-use PE100 and PE80 pipe compounds for gas, water, plumbing, irrigation, sewer and fire-suppression networks. They are built for UV resistance, slow-crack-growth resistance and long-term hydrostatic performance, so pipes keep their pressure rating for decades.",
    resinTypes: [
      { code: "HDPE — PE100", name: "PE100 Pipe Compounds", desc: "Bimodal, high-molecular-weight hexene copolymer with an MRS of 10 MPa — for high-pressure water and gas networks." },
      { code: "MDPE — PE80", name: "PE80 Pipe Compounds", desc: "Hexene medium-density PE with an MRS of 8 MPa — flexible and coilable, for distribution and service lines." },
    ],
    gradesTitle: "Pipe compounds",
    grades: [
      { group: "PE100 — HDPE", title: "PE100 Black", code: "ETHYPIPE® EEB-5906-AAH", desc: "Black PE100 compound for pressure pipes: drinking water, natural gas, pressure sewerage, relining, sea outfall and industrial lines.", focus: ["Drinking water", "Natural gas", "Pressure sewerage", "Relining", "Sea outfall", "Industrial"], process: "Pipe extrusion", img: pipeBlackImg },
      { group: "PE100 — HDPE", title: "PE100 Orange", code: "ETHYPIPE® HDPE MP5020-100", desc: "Orange PE100 compound for natural gas distribution pipes, coloured for clear identification in the ground.", focus: ["Gas pipes"], process: "Pipe extrusion", img: pipeOrangeImg },
      { group: "PE100 — HDPE", title: "PE100 Blue", code: "ETHYPIPE® HDPE MP5022-100", desc: "Blue PE100 compound for drinking water and pressure water pipes.", focus: ["Water pipes"], process: "Pipe extrusion", img: pipeBlackImg },
      { group: "PE80 — MDPE", title: "PE80 Black", code: "ETHYPIPE® EEB-4916-AAH", desc: "Black PE80 compound for pressure pipes: drinking water, natural gas, pressure sewerage, relining, sea outfall and industrial lines.", focus: ["Drinking water", "Natural gas", "Pressure sewerage", "Relining", "Sea outfall", "Industrial"], process: "Pipe extrusion", img: pipeBlackImg },
      { group: "PE80 — MDPE", title: "PE80 Yellow", code: "ETHYPIPE® MDPE MP4010-80", desc: "Yellow PE80 compound for gas pipes — flexible and coilable for distribution and service lines.", focus: ["Gas pipes"], process: "Pipe extrusion", img: px(9389356) },
      { group: "PE80 — MDPE", title: "PE80 Blue", code: "ETHYPIPE® MDPE MP4011-80", desc: "Blue PE80 compound for water distribution and service pipes.", focus: ["Water pipes"], process: "Pipe extrusion", img: pipeBlackImg },
    ],
  },

  rotomolding: {
    slug: "rotomolding",
    intro:
      "MDPE rotomolding materials for tanks, containers and large hollow parts used outdoors. Choose a powder or micro pellets, in natural, black, white or a custom colour — all UV-stabilized.",
    resinTypes: [
      { code: "MDPE Powders", name: "Rotomolding Powders", desc: "UV-stabilized MDPE powders made from C4 / C6 prime resins, ground for even melting in the mould." },
      { code: "Micro Pellets", name: "Micro Pellets", desc: "Small, uniform pellets with good dispersion, high bulk density and good flow." },
    ],
    gradesTitle: "Rotomolding products",
    grades: [
      { group: "Powders & pellets", title: "MDPE Roto Powder MP3450U", code: "ETHYPOWDER MDPE MP3450U", desc: "UV-stabilized MDPE rotomolding powder from C4 / C6 prime resins, for water tanks and large hollow parts.", focus: ["Tanks", "Containers"], process: "Rotational molding", img: rotoImg },
      { group: "Powders & pellets", title: "MDPE Roto Powder MP3840U", code: "ETHYPOWDER MDPE MP3840U", desc: "UV-stabilized MDPE rotomolding powder for tanks, containers and bins.", focus: ["Tanks", "Bins"], process: "Rotational molding", img: px(17854867) },
      { group: "Powders & pellets", title: "Micro Pellets", desc: "MDPE micro pellets with good dispersion, high bulk density and good flow for consistent wall thickness.", focus: ["Tanks", "Containers"], process: "Rotational molding", img: perfImg },
      { group: "Colour grades", title: "Black Roto Grade", desc: "Black UV-stabilized rotomolding grade, based on MDPE MP3450U / MP3840U.", focus: ["Outdoor tanks"], process: "Rotational molding", img: rotoImg },
      { group: "Colour grades", title: "White Roto Grade", desc: "White UV-stabilized rotomolding grade, based on MDPE MP3450U / MP3840U.", focus: ["Water tanks"], process: "Rotational molding", img: rotoImg },
      { group: "Colour grades", title: "Coloured Roto Grades", desc: "Custom-coloured UV-stabilized rotomolding grades, based on MDPE MP3450U / MP3840U.", focus: ["Branded tanks", "Containers"], process: "Rotational molding", img: rotoImg },
    ],
  },

  "glass-fibre-pp": {
    slug: "glass-fibre-pp",
    intro:
      "Glass-fibre reinforced polypropylene — glass fibre chemically coupled to the PP matrix for high stiffness and strength. Used for injection-molded articles, chairs, toys, housewares, automotive parts, pipes, pressure vessels and chemical storage tanks.",
    resinTypes: [
      { code: "Homopolymer", name: "GF-Reinforced PP Homopolymer", desc: "Highest stiffness — for injection-molded structural parts, furniture, housewares and automotive components." },
      { code: "Random Copolymer", name: "GF-Reinforced PP Random Copolymer", desc: "Glass-fibre reinforced random copolymer for multilayer water pipes and fittings." },
    ],
    gradesTitle: "Glass-fibre PP grades",
    grades: [
      { group: "Homopolymer", title: "PP GF15", code: "PP MP1015-GF15", desc: "Homopolymer PP with 15% glass fibre for stiff injection-molded parts and housewares.", focus: ["Injection molding"], process: "Injection molding", img: px(9242910) },
      { group: "Homopolymer", title: "PP GF20", code: "PP MP1020-GF20", desc: "Homopolymer PP with 20% glass fibre for chairs, toys and automotive parts.", focus: ["Furniture", "Automotive"], process: "Injection molding", img: px(37177070) },
      { group: "Homopolymer", title: "PP GF30", code: "PP MP1030-GF30", desc: "Homopolymer PP with 30% glass fibre for high-stiffness structural parts, pressure vessels and chemical tanks.", focus: ["Structural parts", "Tanks"], process: "Injection molding", img: px(241188) },
      { group: "Random copolymer", title: "PP-R GF20", code: "PP MP1040-GF20", desc: "Random copolymer PP with 20% glass fibre for multilayer water pipes.", focus: ["Multilayer pipes"], process: "Pipe extrusion", img: gfppImg },
      { group: "Random copolymer", title: "PP-R GF15", code: "PP MP9030-GF15", desc: "Random copolymer PP with 15% glass fibre for multilayer water pipes and fittings.", focus: ["Multilayer pipes"], process: "Pipe extrusion", img: gfppImg },
    ],
  },

  "pipeline-coatings": {
    slug: "pipeline-coatings",
    heroImg: coatedPipeImg,
    intro:
      "Polyolefin topcoats for 3-layer steel pipe coating — protecting oil & gas and underground pipelines against corrosion and mechanical damage, even under severe laying conditions.",
    resinTypes: [
      { code: "3LPE", name: "PE Topcoat", desc: "HDPE topcoat for high running speeds and thin layers, from −40 °C to 85 °C with a grafted adhesive." },
      { code: "3LPP", name: "PP Topcoat", desc: "PP topcoat for pipelines that run at higher temperatures, up to 115 °C." },
    ],
    gradesTitle: "Topcoat grades",
    visual: "coating-layers",
    grades: [
      { title: "3LPE Topcoat — Black", code: "MP COAT 5205", desc: "Black HDPE topcoat for oil & gas and underground steel pipelines, −40 °C to 85 °C.", focus: ["Oil & gas", "Underground lines"], process: "Multi-layer coating", img: coatedPipeImg },
      { title: "3LPE Topcoat — Yellow", code: "MP-COAT 5040", desc: "Yellow HDPE topcoat for steel pipe corrosion protection, −40 °C to 85 °C.", focus: ["Steel pipe coating"], process: "Multi-layer coating", img: px(37793901) },
      { title: "3LPP Topcoat — White", code: "PP MP COAT 9010", desc: "White PP topcoat for high-temperature pipelines, up to 115 °C.", focus: ["High-temperature lines"], process: "Multi-layer coating", img: px(36825977) },
    ],
  },

  masterbatches: {
    slug: "masterbatches",
    intro:
      "Colour and filler concentrates added at the machine to the base resin — for pipe, film, sheet, molding, extrusion and fibre.",
    resinTypes: [
      { code: "Colour", name: "Colour Masterbatch", desc: "White and P-type black concentrates with excellent dispersion, UV stability and heat resistance." },
      { code: "Filler", name: "Filler Masterbatch", desc: "Mineral filler concentrate that lowers material cost and improves stiffness." },
    ],
    gradesTitle: "Masterbatch grades",
    grades: [
      { group: "Colour masterbatch", title: "White PE Masterbatch", code: "MBU2010-T40", desc: "White masterbatch with excellent dispersibility, colour fastness, UV stability, high opacity and heat resistance.", focus: ["Film", "Molding"], process: "All processes", img: px(7414936) },
      { group: "Colour masterbatch", title: "P-Type Black Masterbatch", code: "MB1105-C40", desc: "High pigment concentration for deep blackness, with excellent dispersion and UV and heat resistance. For blowing, injection, extrusion, fibre, film, pipe and sheet.", focus: ["Pipe", "Film", "Sheet"], process: "All processes", img: perfImg },
      { group: "Filler masterbatch", title: "Filler Masterbatch", code: "MP 1903-C80", desc: "Filler masterbatch to reduce material cost and improve stiffness in PE and PP products.", focus: ["Film", "Molding"], process: "All processes", img: px(34286024) },
    ],
  },
};
