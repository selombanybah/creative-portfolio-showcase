export type Category = "Branding" | "Digital" | "Motion & 3D" | "Photography";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: Category;
  year: string;
  coverUrl: string;
  coverAlt: string;
  secondaryUrl?: string;
  secondaryAlt?: string;
  aspect: "tall" | "wide" | "square";
  summary: string;
  scope: string[];
  tools: string[];
  description: string[];
  outcome: string;
};

export const CATEGORIES: Category[] = [
  "Branding",
  "Digital",
  "Motion & 3D",
  "Photography",
];

export const projects: Project[] = [
  {
    id: "terra-goods",
    title: "Terra Goods",
    client: "Terra Goods Co-op",
    category: "Branding",
    year: "2024",
    coverUrl: "https://picsum.photos/id/486/1000/1300",
    coverAlt: "Sage and bone coloured packaging and stationery laid out on a plaster surface.",
    secondaryUrl: "https://picsum.photos/id/534/1600/1000",
    secondaryAlt: "Printed identity proofs and paper stock samples spread across a work desk.",
    aspect: "tall",
    summary:
      "An identity and packaging system for a zero-waste grocer opening its first permanent storefront.",
    scope: ["Brand strategy", "Identity system", "Packaging", "Signage"],
    tools: ["Illustrator", "InDesign", "Figma"],
    description: [
      "Terra Goods started as a buying club of forty households and needed to look like an institution before it had the budget of one. We anchored the identity on a single idea — produce as it actually arrives, dirt and all — then built a flexible kit around it: a hand-drawn wordmark, a sage-and-bone palette pulled from crate labels, and a stamp system the staff can apply on the shop floor.",
      "Packaging had to survive a refill counter. Every container is unbranded clay or glass with a paper band, so the identity lives on compostable labels and a chalkboard grid rather than printed boxes. I wrote the tone of voice, set the type hierarchy for shelf talkers, and art directed the launch photography over two weekends in the co-op's stockroom.",
    ],
    outcome:
      "The storefront opened with 40% more founding members than projected, and the label kit shipped as a template the co-op now runs without a designer.",
  },
  {
    id: "kiln-and-co",
    title: "Kiln & Co.",
    client: "Kiln & Co. Ceramics",
    category: "Branding",
    year: "2023",
    coverUrl:
      "https://dala-staging-public-data-storage.s3.eu-west-1.amazonaws.com/generated-images/421de9fb-5d96-4be3-ab39-155cb5cc9c9a/brand-kiln-0c7880b7-1795454118036.webp",
    coverAlt: "Ceramic packaging boxes, twine and an unglazed vessel on a warm concrete shelf.",
    aspect: "square",
    summary:
      "A quiet identity and shipping system for a two-kiln pottery studio selling direct from the wheel.",
    scope: ["Naming", "Identity", "Packaging", "Photography direction"],
    tools: ["Illustrator", "Photoshop", "Dimension"],
    description: [
      "Kiln & Co. made the shift from wholesale orders to a direct shop in the middle of 2023 and was losing money on breakage. The brief was almost engineering: a mark that survives being stamped into wet clay, packaging that survives a courier, and a look that still feels handmade when it lands on someone's doorstep.",
      "We built the mark from a single carved letterform so it reads at 12mm on a pot base, then designed a two-piece pulp insert with the studio's glaze-specific care card. The clay-and-oatmeal palette keeps the photography warm; the only saturated colour in the system is the terracotta used on the return label.",
    ],
    outcome:
      "Breakage claims fell by two thirds in the first shipping quarter, and the studio's direct channel overtook wholesale within eight months.",
  },
  {
    id: "atlas-analytics",
    title: "Atlas Analytics",
    client: "Atlas Analytics",
    category: "Digital",
    year: "2025",
    coverUrl: "https://picsum.photos/id/180/1600/1000",
    coverAlt: "Laptop on a dark desk showing an abstract analytics dashboard interface.",
    secondaryUrl: "https://picsum.photos/id/532/1600/1000",
    secondaryAlt: "Wireframe sketches and sticky notes covering a desk during a design sprint.",
    aspect: "wide",
    summary:
      "A dashboard redesign that turned a wall of charts into three questions a team can actually answer.",
    scope: ["Product strategy", "Design system", "Dashboard UI", "Prototyping"],
    tools: ["Figma", "Framer", "Maze"],
    description: [
      "Atlas shipped twelve chart types and no opinion about which one mattered. Support tickets said the same thing in different words: after login, people did not know what to look at. We ran nine sessions with analysts and cut the landing view down to three questions — is anything broken, what changed, what needs a decision — and let the charts follow from there.",
      "The redesign introduced a layered overview, a comparison rail that holds up to four cohorts, and a chart spec that constrains colour to a single accent so anomalies are the only thing that glows. I built the component library in Figma with tokens mirrored to the front-end repo, and prototyped the empty and slow-loading states that the old product never had.",
    ],
    outcome:
      "Time-to-first-insight in usability testing dropped from 96 seconds to 19, and the design system now ships to four product squads.",
  },
  {
    id: "pulse-trainer",
    title: "Pulse Trainer",
    client: "Pulse Labs",
    category: "Digital",
    year: "2024",
    coverUrl:
      "https://images.pexels.com/photos/186841/pexels-photo-186841.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverAlt: "Smartphone held at an angle, screen glowing with an abstract fitness interface.",
    aspect: "tall",
    summary:
      "Onboarding and weekly training screens for a strength app that people opened once and abandoned.",
    scope: ["Onboarding flow", "Mobile UI", "Motion spec", "Copy"],
    tools: ["Figma", "After Effects", "Rive"],
    description: [
      "Pulse had good programming logic and a terrible first four minutes. New lifters met a questionnaire about one-rep maxes before they had touched a barbell. We rebuilt onboarding as a single question per screen with a live demo loop behind it, replaced the jargon with plain descriptions of effort, and moved every preference to a later, optional pass.",
      "The weekly view became a three-card stack — today, this week, your trend — with a lime accent reserved for the single next action. I wrote the microcopy, specified the haptic and transition timing, and handed the team a Rive file for the progress ring so engineering did not have to reimplement easing by hand.",
    ],
    outcome:
      "Day-7 retention rose 22% in the A/B cohort, and the onboarding flow now onboards 60% of signups without a support ticket.",
  },
  {
    id: "chroma-loop",
    title: "Chroma Loop",
    client: "Northline Film Festival",
    category: "Motion & 3D",
    year: "2025",
    coverUrl:
      "https://images.pexels.com/photos/740584/pexels-photo-740584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverAlt: "Abstract polished metal form curving through a dark studio space.",
    aspect: "wide",
    summary:
      "A title sequence and motion toolkit for a regional film festival's twenty-second edition.",
    scope: ["Title design", "3D direction", "Motion toolkit", "Sound direction"],
    tools: ["Cinema 4D", "After Effects", "Octane"],
    description: [
      "A festival identity has to work on a forty-foot screen, a badge, and a phone in someone's pocket. Northline wanted the anniversary to feel like light moving through film stock, so we built a chrome ribbon that unspools through the programme: 6 seconds for the cinema bumpers, 1.5 for social, and a still frame that reads as a poster without a single word added.",
      "The whole system is procedural — three lighting rigs, one material, a fixed camera path — which meant the festival's own editors could re-render variants for each of the 74 films in the programme without touching the scene. I directed the sound design too: a low tape hiss that resolves into the festival sting.",
    ],
    outcome:
      "The bumper ran before all 74 screenings, and the social cut became the festival's most-shared asset in its history.",
  },
  {
    id: "bloom-lab",
    title: "Bloom Lab",
    client: "Bloom Lab (self-initiated)",
    category: "Motion & 3D",
    year: "2023",
    coverUrl: "https://picsum.photos/id/798/1600/1000",
    coverAlt: "Surreal soft-body floral form rendered in lime and charcoal against darkness.",
    aspect: "square",
    summary:
      "A self-set study in soft-body simulation: one form, five materials, no client brief.",
    scope: ["Concept", "3D simulation", "Lighting", "Loop editing"],
    tools: ["Houdini", "Blender", "Redshift"],
    description: [
      "I keep a folder of studies that exist only to answer a question. This one asked whether a flower could read as machinery — petals behaving like silicone membranes under pressure, breathing on a four-second cycle. Everything is a single simulated mesh, re-shaded five ways, with no post-processing beyond a light grain pass.",
      "The series ran as a silent loop on a gallery screen in a Portland design week show and later became the visual language for a fragrance brief I could not name at the time. Most of the work was in the failure states: the first forty sims tore, and the version that shipped is the one where the tear was timed rather than prevented.",
    ],
    outcome:
      "Selected for two group shows and licensed into a fragrance campaign the following year.",
  },
  {
    id: "meridian-rooms",
    title: "Meridian Rooms",
    client: "Meridian Hotels",
    category: "Photography",
    year: "2024",
    coverUrl:
      "https://images.pexels.com/photos/256090/pexels-photo-256090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverAlt: "Minimal interior corridor with strong directional daylight across a plaster wall.",
    aspect: "tall",
    summary:
      "Art direction and a 240-frame photographic library for a fourteen-room hotel in a converted warehouse.",
    scope: ["Art direction", "Photography", "Retouching", "Image system"],
    tools: ["Sony A7 IV", "Capture One", "Lightroom"],
    description: [
      "Meridian's rooms are almost entirely about light, which makes them hard to sell with a phone camera and a wide lens. We shot a single day across the building with two primes, following the sun rather than styling each room, and agreed on one rule: no props that the hotel does not own.",
      "The library is built for reuse — every space in three crops, a consistent 5100K white balance so the site does not flicker as you scroll, and a monochrome set for the booking engine where coloured images tested poorly. I art directed the styling, shot it myself, and delivered a retouching spec the hotel's team applies to new rooms.",
    ],
    outcome:
      "Direct bookings grew 31% year over year, and the library is the hotel's only photography asset three years running.",
  },
  {
    id: "facade-study",
    title: "Facade Study",
    client: "Personal series",
    category: "Photography",
    year: "2022",
    coverUrl:
      "https://images.pexels.com/photos/275230/pexels-photo-275230.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverAlt: "Geometric modern building facade of repeating windows in flat daylight.",
    aspect: "wide",
    summary:
      "A twenty-four month study of Portland's post-war commercial facades, shot at the same hour.",
    scope: ["Concept", "Photography", "Sequencing", "Self-published book"],
    tools: ["Pentax 67", "Portra 400", "InDesign"],
    description: [
      "Every Sunday for two years I photographed one block of downtown Portland between 4 and 5pm, when the sun is low enough to flatten a building into geometry. The constraint was the point: same hour, same film stock, no people, no signage. What emerged was a record of a city quietly replacing its own surfaces.",
      "The series became a 96-page book, printed in an edition of 300 on uncoated stock so the shadows sit in the paper instead of on top of it. Sequencing is strictly geographic — you walk the grid rather than the timeline — which makes the newer facades feel like interruptions.",
    ],
    outcome:
      "Edition sold out in five weeks; twelve prints are held in a private Portland collection.",
  },
];