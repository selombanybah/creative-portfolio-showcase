export const PORTRAIT = {
  url: "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1600",
  alt: "Mara Voss at her studio desk, working by window light.",
} as const;

export const BIO = [
  "I am Mara Voss, a designer and art director working between Portland and Copenhagen. I spent six years inside studios — two of them as design lead on brand systems for food and culture clients — before going independent in 2016. Since then the work has been roughly half identity, half product, with motion running through both.",
  "My process is short and unglamorous: read everything, talk to the people who use the thing, then make one decision the whole project can sit on. I design in the browser earlier than most, write my own copy more often than not, and hand over systems rather than pictures. I do not take more than three engagements at a time, and I say no to work I would have to pretend to care about.",
];

export const FACTS = [
  { label: "Based in", value: "Portland, OR" },
  { label: "Working since", value: "2016" },
  { label: "Focus", value: "Brand · Product · Motion" },
  { label: "Engagements", value: "3 max at a time" },
] as const;

export const CAPABILITIES = [
  "Brand strategy & naming",
  "Identity systems",
  "Packaging & print",
  "Product & interface design",
  "Design systems",
  "3D & motion direction",
  "Art direction",
  "Photography",
];

export type Award = { title: string; detail: string; year: string };

export const AWARDS: Award[] = [
  { title: "Awwwards", detail: "Honorable Mention — Atlas Analytics", year: "2025" },
  { title: "Type Directors Club", detail: "Certificate of Excellence — Terra Goods", year: "2024" },
  { title: "D&AD", detail: "New Blood Pencil — Identity", year: "2022" },
  { title: "Communication Arts", detail: "Typography Annual — Facade Study", year: "2023" },
  { title: "Portland Design Week", detail: "Selected exhibitor — Bloom Lab", year: "2023" },
];

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mara rewrote the brief before she designed anything, and the rewrite was better than what we asked for. Six months later our staff still use her templates without a designer in the room.",
    name: "Dana Whitlock",
    role: "Founder, Terra Goods Co-op",
  },
  {
    quote:
      "She killed half our charts and made the other half worth reading. That is not a popular move inside a data company, and she made the case for it with our own support tickets.",
    name: "Ivan Petrov",
    role: "Head of Product, Atlas Analytics",
  },
  {
    quote:
      "The only art director we have worked with who shot the building instead of styling it. Three years on, we still book rooms using her images.",
    name: "Noor Haddad",
    role: "General Manager, Meridian Hotels",
  },
];