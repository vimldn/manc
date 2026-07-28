import type { Faq } from "./services";

// -------------------------------------------------------------
// MOVING GUIDES. Useful content that supports the commercial pages.
// No fabricated statistics, no fake named authors. The byline is the
// operator's editorial team and each guide carries a real last-reviewed
// date. Keep answers direct and link to the relevant service and quote.
// -------------------------------------------------------------

export type GuideSection = { h2: string; body: string[] };

export type Guide = {
  slug: string;
  title: string; // meta title
  h1: string;
  metaDescription: string;
  updated: string; // ISO last-reviewed date
  answer: string; // the direct answer, shown first
  sections: GuideSection[];
  related: { label: string; href: string }[];
  faqs?: Faq[];
};

export const guides: Guide[] = [
  {
    slug: "how-much-does-a-man-and-van-cost-in-manchester",
    title: "How Much Does a Man and Van Cost in Manchester?",
    h1: "How Much Does a Man and Van Cost in Manchester?",
    metaDescription:
      "What affects the cost of a man and van in Manchester, how hourly and fixed pricing works, and how to get an accurate quote for your move.",
    updated: "2026-07-28",
    answer:
      "The cost of a man and van in Manchester depends mainly on the van size, the number of movers, the distance and how long the job takes. Small flat and single-item moves are the cheapest, while full house and long-distance moves cost more. The most reliable way to know is to describe the job and get a quote.",
    sections: [
      {
        h2: "Hourly rates versus fixed prices",
        body: [
          "Local moves are usually priced by the hour, which keeps short jobs cheap and only charges you for the time you use. Longer moves and long-distance jobs are usually a fixed price agreed before the day, so a motorway delay does not push the cost up.",
          "If your job could go either way, ask for both. A good operator will tell you which works out cheaper rather than defaulting to the pricier option.",
        ],
      },
      {
        h2: "What pushes the price up",
        body: [
          "Stairs with no lift, long carries from the parking spot to the door, permit-only parking and heavy or awkward items all add handling time. So does waiting for keys or a completion. None of these should be a surprise if you mention them when you book.",
          "Extras such as packing, flat-pack dismantling and reassembly are optional. You only pay for them if you want them.",
        ],
      },
      {
        h2: "How to get an accurate quote",
        body: [
          "Give the from and to postcodes, a rough list of what you are moving, the floor and lift situation at both ends, and your preferred date. That is enough to price most jobs accurately without a home visit.",
          "For larger houses, a quick video walk-through on your phone helps confirm the right van and crew.",
        ],
      },
    ],
    related: [
      { label: "See how our pricing works", href: "/prices/" },
      { label: "What size van do I need?", href: "/our-vans/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    faqs: [
      {
        q: "Is a man and van cheaper than a removals company?",
        a: "For small and medium moves, usually yes. A man and van skips the overheads of a large firm. For big multi-van house moves a removals company may suit better.",
      },
    ],
  },
  {
    slug: "what-size-van-do-i-need-for-my-move",
    title: "What Size Van Do I Need for My Move?",
    h1: "What Size Van Do I Need for My Move?",
    metaDescription:
      "A simple guide to choosing the right van size for your move, from a single item to a house, and why access and box count matter as much as room count.",
    updated: "2026-07-28",
    answer:
      "As a rough guide, a small van suits single items and a few boxes, a long-wheelbase van suits a studio or small one-bed flat, and a Luton suits a one to two-bed home. The right choice depends on the box count, large furniture and whether items dismantle, not just the number of rooms.",
    sections: [
      {
        h2: "Match the van to the load, not just the rooms",
        body: [
          "Two one-bed flats can need different vans if one person has boxed everything neatly and the other has three wardrobes and a corner sofa. Box count and large items matter as much as room count.",
          "When in doubt, size up slightly. A second trip in a van that is too small usually costs more than the right van first time.",
        ],
      },
      {
        h2: "Access can change the answer",
        body: [
          "A Luton needs more room to park and reverse than a small van, which matters on tight terraced streets and in city-centre loading bays. Sometimes a slightly smaller van with an easy parking spot beats a big van you cannot get close to the door.",
        ],
      },
    ],
    related: [
      { label: "Full van size guide", href: "/our-vans/" },
      { label: "How pricing works", href: "/prices/" },
      { label: "Get a quote", href: "/quote/" },
    ],
  },
  {
    slug: "man-and-van-vs-removals-company",
    title: "Man and Van vs Removals Company: Which Do You Need?",
    h1: "Man and Van vs Removals Company",
    metaDescription:
      "The real differences between a man and van and a full removals company, and how to choose the right one for your Manchester move and budget.",
    updated: "2026-07-28",
    answer:
      "Choose a man and van for small to medium moves, single items and flexible, budget-friendly jobs. Choose a full removals company for large multi-van house moves, or when you want full packing, storage and insurance handled as one big package. Many Manchester moves fall squarely in man-and-van territory.",
    sections: [
      {
        h2: "Where a man and van wins",
        body: [
          "Flats, studios, student moves, single items and short-notice jobs are ideal for a man and van. You get one point of contact who does the move, flexible timing and a lower price without a call centre in the middle.",
        ],
      },
      {
        h2: "Where a removals company suits better",
        body: [
          "Large family homes that need several vans, a full packing team and integrated storage are often better with a dedicated removals firm. If you want everything from packing to unpacking managed as one contract, that is their model.",
        ],
      },
      {
        h2: "Questions to ask either way",
        body: [
          "Ask what the price includes, whether there is a minimum booking, what cover applies to your belongings and how waiting time is handled. Clear answers up front are a good sign whichever option you pick.",
        ],
      },
    ],
    related: [
      { label: "Our man and van service", href: "/services/man-and-van-hire/" },
      { label: "House removals", href: "/services/house-removals/" },
      { label: "Get a quote", href: "/quote/" },
    ],
  },
  {
    slug: "how-to-prepare-for-a-flat-move",
    title: "How to Prepare for a Flat Move in Manchester",
    h1: "How to Prepare for a Flat Move",
    metaDescription:
      "Practical steps to prepare for a flat or apartment move in Manchester, including lifts, loading bays, concierge access and parking.",
    updated: "2026-07-28",
    answer:
      "Preparing for a flat move is mostly about access. Book the goods lift if your building has one, check loading-bay time limits, tell the concierge, sort parking at both ends and have everything boxed before the van arrives. Get those right and the move itself is quick.",
    sections: [
      {
        h2: "Sort the lift and loading bay early",
        body: [
          "Many Manchester apartment blocks have a bookable goods lift and a loading bay with a time limit. Book the lift slot as soon as you have a date, and ask building management about the loading bay so the van is not left circling.",
        ],
      },
      {
        h2: "Tell the concierge and check the rules",
        body: [
          "Some blocks need movers signed in, restrict move times or ask for proof of insurance. A quick call to the concierge or building manager a few days ahead avoids a wasted trip. Ask us for a certificate if they need one.",
        ],
      },
      {
        h2: "Pack before the van arrives",
        body: [
          "Boxing everything before the crew turns up is the single biggest thing you can do to keep an hourly-priced move cheap. Label boxes by room so unloading at the new place is fast.",
        ],
      },
    ],
    related: [
      { label: "Flat and apartment removals", href: "/services/flat-apartment-removals/" },
      { label: "Reserve parking for a move", href: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/" },
      { label: "Get a quote", href: "/quote/" },
    ],
  },
  {
    slug: "how-to-reserve-parking-for-a-move-in-manchester",
    title: "How to Reserve Parking for a Move in Manchester",
    h1: "How to Reserve Parking for a Move in Manchester",
    metaDescription:
      "How to arrange parking or a bay suspension for a move in Manchester, why it matters for the cost, and what to do in permit and loading-bay zones.",
    updated: "2026-07-28",
    answer:
      "For a smooth move, arrange a legal parking spot close to the door at both ends. In permit or double-yellow zones you may need a bay suspension or dispensation from the council, which takes a few working days to arrange, so sort it early. A close, legal spot directly lowers the time and cost of the move.",
    sections: [
      {
        h2: "Why parking affects the price",
        body: [
          "Every extra metre between the van and the door adds carry time, and on an hourly move that adds cost. A parking spot right outside is the cheapest thing you can arrange for free.",
        ],
      },
      {
        h2: "Permit zones and bay suspensions",
        body: [
          "If your street is permit-only or has no loadable space, contact the local council about a temporary bay suspension or dispensation for removals. These usually need a few working days' notice, so do not leave it to the last minute.",
          "In the city centre, check for red routes, bus lanes and timed loading restrictions near the block, and tell us what you find so we plan the load.",
        ],
      },
      {
        h2: "Simple options that work",
        body: [
          "Ask a neighbour to hold a space with a car until the van arrives, use a private driveway if you have one, or book a nearby loading bay where the building offers it. Small steps like these keep the whole day quicker.",
        ],
      },
    ],
    related: [
      { label: "Flat and apartment removals", href: "/services/flat-apartment-removals/" },
      { label: "Man and van in Manchester city centre", href: "/locations/manchester-city-centre/" },
      { label: "Get a quote", href: "/quote/" },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
