/**
 * Single source of truth for brand facts, navigation and the hero visual.
 * Every page/component imports from here so copy never contradicts itself.
 */

export const BRAND = {
  name: "Mara Voss",
  mark: "MV",
  role: "Multidisciplinary Designer & Art Director",
  kicker: "Multidisciplinary designer — Portland, OR",
  headline: ["Design that", "earns a second look."],
  intro:
    "I build brands, digital products and motion systems for people who care how things feel. Nine years, two continents, one stubborn belief: clarity is the loudest thing in the room.",
  email: "hello@maravoss.studio",
  location: "Portland, OR",
  timezone: "PST (UTC−8)",
  availability: "Booking select projects for Q3 2025",
  resumePath: "/resume.html",
  yearsActive: 9,
  foundedYear: 2016,
  projectCount: 8,
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const DISCIPLINES = [
  "Brand Identity",
  "Art Direction",
  "Digital Product",
  "Motion & 3D",
  "Packaging",
  "Editorial",
] as const;

export const SOCIALS = [
  { label: "Instagram", handle: "@maravoss.studio", href: "https://www.instagram.com/" },
  { label: "Read.cv", handle: "maravoss", href: "https://read.cv/" },
  { label: "Behance", handle: "maravoss", href: "https://www.behance.net/" },
] as const;

export const PROJECT_TYPES = [
  "Brand identity",
  "Website or digital product",
  "Motion or 3D",
  "Art direction / photography",
  "Something else",
] as const;

/** Hero photograph: dark studio desk, lime raking light, no signage. */
export const HERO_IMAGE = {
  url: "https://dala-staging-public-data-storage.s3.eu-west-1.amazonaws.com/generated-images/421de9fb-5d96-4be3-ab39-155cb5cc9c9a/hero-studio-desk-3e8a3509-1795454102196.webp",
  alt: "Overhead view of a designer's graphite desk: printed proofs, paper swatches and a half-finished sketch under a single lime accent light.",
} as const;