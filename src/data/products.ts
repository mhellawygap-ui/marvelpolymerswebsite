/**
 * Products Home content and navigator mappings.
 * Kept separate from layout so it can later be moved into WordPress fields / a CMS.
 *
 */
import pipeBlackImg from "@/imports/pipe-black.jpg";
import rotoImg from "@/imports/roto-tanks.jpg";
import gfppImg from "@/imports/gfpp.jpg";
import coatedPipeImg from "@/imports/coated-pipe.jpg";
import perfImg from "@/imports/Performance.png";
import { familyDetails } from "@/data/familyDetails";

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
    slug: "pe-pipe-compounds",
    num: "01",
    name: "PE100 & PE80 Pipe Compounds",
    shortName: "PE Pipe Compounds",
    chip: "PE100 / PE80",
    description:
      "Ready-to-use polyethylene pipe compounds — PE100 (HDPE) and PE80 (MDPE) in black, orange, yellow and blue — for water, gas, sewer and industrial pipe networks.",
    typesLabel: "Resin Types",
    types: ["HDPE — PE100", "MDPE — PE80"],
    applicationFocus: [
      "Drinking Water Pipes",
      "Natural Gas Pipes",
      "Pressure Sewerage",
      "Irrigation & Fire Suppression",
      "Relining & Sea Outfall",
      "Industrial Pipes",
    ],
    img: pipeBlackImg,
    menuApps: "PE100 & PE80 — Water, Gas, Sewer Pipes",
  },
  {
    slug: "rotomolding",
    num: "02",
    name: "Rotomolding Powders & Micro Pellets",
    shortName: "Rotomolding",
    chip: "MDPE Roto",
    description:
      "UV-stabilized MDPE rotomolding powders and micro pellets, in black, white and custom colours, for tanks, containers and large hollow parts.",
    typesLabel: "Material Types",
    types: ["MDPE Roto Powders", "Micro Pellets"],
    applicationFocus: ["Water Tanks", "Chemical Tanks", "Containers", "Bins", "Large Hollow Parts"],
    img: rotoImg,
    menuApps: "MDPE Powders, Micro Pellets, Colour Grades",
  },
  {
    slug: "glass-fibre-pp",
    num: "03",
    name: "Glass-Fibre Reinforced PP",
    shortName: "Glass-Fibre PP",
    chip: "GF-PP",
    description:
      "Polypropylene chemically coupled with glass fibre (15–30%) for high stiffness and strength — in homopolymer and random copolymer grades.",
    typesLabel: "Resin Types",
    types: ["Homopolymer GF-PP", "Random Copolymer GF-PP"],
    applicationFocus: [
      "Injection-Molded Articles",
      "Chairs, Toys & Housewares",
      "Automotive Parts",
      "Multilayer Water Pipes",
      "Pressure Vessels & Chemical Tanks",
    ],
    img: gfppImg,
    menuApps: "GF15 · GF20 · GF30 — Homo & Random PP",
  },
  {
    slug: "pipeline-coatings",
    num: "04",
    name: "Steel Pipe Coatings",
    shortName: "Pipeline Coatings",
    chip: "3LPE / 3LPP",
    description:
      "Polyolefin topcoats for 3-layer steel pipe coating — PE topcoat for −40 °C to 85 °C service and PP topcoat up to 115 °C.",
    typesLabel: "Material Focus",
    types: ["3LPE", "3LPP"],
    applicationFocus: [
      "Steel Pipe Coating",
      "Oil & Gas Pipelines",
      "Underground Corrosion Protection",
      "High-Temperature Lines",
    ],
    img: coatedPipeImg,
    menuApps: "3LPE / 3LPP Topcoats for Steel Pipe",
  },
  {
    slug: "masterbatches",
    num: "05",
    name: "Masterbatches",
    shortName: "Masterbatches",
    chip: "Masterbatch",
    description:
      "White and P-type black colour masterbatches and filler masterbatch for PE and PP processing.",
    typesLabel: "Masterbatch Types",
    types: ["Colour Masterbatch", "Filler Masterbatch"],
    applicationFocus: ["Pipe", "Film", "Sheet", "Blow & Injection Molding", "Extrusion", "Fibre"],
    img: perfImg,
    menuApps: "White, P-Type Black, Filler",
  },
];

export interface Product {
  code: string;
  name: string;
}

/** Products shown under each family on the Products page — every product card on the family page. */
export const productsByFamily: Record<string, Product[]> = Object.fromEntries(
  Object.values(familyDetails).map((d) => [d.slug, d.grades.map((g) => ({ code: g.code ?? g.group ?? "", name: g.title }))]),
);
