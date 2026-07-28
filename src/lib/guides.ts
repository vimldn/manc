import type { Faq } from "./services";

// -------------------------------------------------------------
// MOVING GUIDES. Researched, substantial content that supports the
// commercial pages. Figures are taken from real, cited UK sources and
// framed as typical ranges, not invented precision. No fabricated
// statistics, no fake named authors. Byline is the operator's editorial
// team with a real last-reviewed date. Where a fact could not be verified
// verbatim (e.g. the exact council fee), the copy says so.
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
  sources?: { label: string; href: string }[]; // authority external links
  faqs?: Faq[];
};

export const guides: Guide[] = [
  {
    slug: "how-much-does-a-man-and-van-cost-in-manchester",
    title: "How Much Does a Man and Van Cost in Manchester? (2026 Guide)",
    h1: "How Much Does a Man and Van Cost in Manchester?",
    metaDescription:
      "Real 2026 man and van prices in Manchester: typical hourly rates, sample move costs, what pushes the price up, and why there is no clean air charge to factor in.",
    updated: "2026-07-28",
    answer:
      "In Manchester a man and van is usually charged by the hour. One mover and a small van typically starts around £30 to £45 an hour, and two movers with a larger van commonly run around £50 to £85 an hour, with a two to three hour minimum on most bookings. What you actually pay depends on the van size, the number of movers, the distance and how long the job takes, so the reliable way to know is to describe the move and get a quote.",
    sections: [
      {
        h2: "Typical Hourly Rates in Manchester",
        body: [
          "Most local man and van work is priced by the hour, and the rate depends mainly on how many movers and what size van you need. As a rough guide from published Manchester price guides, one mover with a small van is commonly around £30 to £45 an hour, one mover with a Luton around £45 to £60, and two movers with a larger van around £50 to £85. Across the North West as a whole, hourly rates tend to sit in the £35 to £65 range.",
          "Be careful with headline 'from £15 an hour' style adverts. Those are marketing floor prices, not what a real job costs once you add the minimum booking, the right crew and any mileage. A clear, itemised quote is worth more than the lowest teaser rate.",
        ],
      },
      {
        h2: "Minimum Booking Times",
        body: [
          "A two to three hour minimum is standard across Manchester, even if the job finishes sooner. That is why the smallest moves rarely come in under roughly £80 to £100 all in. For a single item or a quick studio run, that minimum is usually all you pay.",
        ],
      },
      {
        h2: "Sample Costs by Move Size",
        body: [
          "As an indicative guide only, published Manchester price guides put a studio move somewhere around £120 to £220, a one bed around £200 to £350, a two bed house around £320 to £550, and a three bed from around £480 upwards. A single large item is often around £35 to £90, and a sofa around £50 to £150 depending on distance.",
          "These are starting points, not a fixed menu. Your own price depends on access, stairs, how well everything is boxed and how far the two addresses are apart, which is why we quote on the actual job.",
        ],
      },
      {
        h2: "Extra Costs to Expect",
        body: [
          "Stairs with no lift, long carries from the parking spot to the door, permit-only parking and heavy or awkward items all add handling time. Weekend slots often carry a premium of roughly 10 to 25 per cent, and evening or after-hours work can add a little more. For jobs outside the immediate area, expect a mileage element, commonly somewhere around 45p to £1 a mile beyond a set radius.",
          "One charge you will not see here that you would on a London or Birmingham page: there is no clean air or congestion charge to drive in Greater Manchester. The charging Clean Air Zone was scrapped in favour of a non-charging plan in January 2025, so a moving van pays nothing on air-quality grounds anywhere in the region.",
        ],
      },
      {
        h2: "Long Distance Moves from Manchester",
        body: [
          "Long-distance moves, such as Manchester to London, are usually a fixed price rather than an open hourly clock, so a motorway delay does not run up the bill. The price reflects the load, the route and the mileage, often with a per-mile element on top of loading time, so a full van-load move over 200 miles typically runs into several hundred pounds. The honest answer is that it needs a bespoke quote rather than a single headline figure.",
        ],
      },
      {
        h2: "Getting an Accurate Quote",
        body: [
          "Give the from and to postcodes, a rough list of what you are moving, the floor and lift situation at both ends and your preferred date. That is enough to price most jobs accurately without a home visit. For larger houses, a quick video walk-through on your phone helps confirm the right van and crew. VAT may or may not apply depending on whether the operator is VAT registered, so it is worth confirming whether a quote includes it.",
        ],
      },
    ],
    related: [
      { label: "See how our pricing works", href: "/prices/" },
      { label: "What size van do I need?", href: "/moving-guides/what-size-van-do-i-need-for-my-move/" },
      { label: "Man and van vs removals company", href: "/moving-guides/man-and-van-vs-removals-company/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Greater Manchester Clean Air Plan (no charging zone)", href: "https://cleanairgm.com/clean-air-plan/" },
    ],
    faqs: [
      {
        q: "Is there a minimum booking for a man and van in Manchester?",
        a: "Yes, a two to three hour minimum is standard, even if the job finishes sooner. For a single item or a small studio move that minimum is usually the whole cost.",
      },
      {
        q: "Do I need to tip a man and van?",
        a: "It is not expected in the UK. If you are pleased with the job, many people give around £10 to £20 per mover, but there is no obligation.",
      },
      {
        q: "Is there a clean air or congestion charge for vans in Manchester?",
        a: "No. Greater Manchester has no charging Clean Air Zone and no congestion charge, so there is no emissions charge to move a van anywhere in the region.",
      },
    ],
  },
  {
    slug: "what-size-van-do-i-need-for-my-move",
    title: "What Size Van Do I Need for My Move? UK Van Size Guide",
    h1: "What Size Van Do I Need for My Move?",
    metaDescription:
      "Van sizes explained for a house or flat move: small, medium, long-wheelbase and Luton vans, approximate capacities, what each holds and why weight and access matter.",
    updated: "2026-07-28",
    answer:
      "As a rough guide, a small van suits a few boxes and single items, a medium or long-wheelbase van suits a studio or one-bed flat, and a Luton box van handles most one to two-bed moves. The right choice depends on the box count, large furniture, the total weight and access, not just the number of rooms. When in doubt, size up: one bigger van usually costs less than two trips.",
    sections: [
      {
        h2: "Common Van Sizes",
        body: [
          "Small van (short-wheelbase, such as a VW Caddy or Transit Connect): roughly 3 to 4 cubic metres of load space and a payload around 500 to 900kg. Good for a few boxes, single items and student runs.",
          "Medium van (medium-wheelbase Transit Custom or Sprinter): roughly 6 to 10 cubic metres and a payload around 800 to 1,200kg. Suits a studio or small one-bed flat.",
          "Large or long-wheelbase panel van (Transit LWB or Sprinter LWB): roughly 11 to 15 cubic metres and a payload around 1,000 to 1,500kg. Handles a one-bed and up to a small two-bed flat.",
          "Luton box van, with or without a tail lift: roughly 15 to 20 cubic metres and a payload around 900 to 1,200kg. This is the workhorse for most two and three-bed moves. The tail lift adds a powered platform for white goods and heavy items, not extra space.",
          "These figures are approximate and vary by make and model, so treat them as typical ranges rather than exact numbers.",
        ],
      },
      {
        h2: "Matching the Van to the Load",
        body: [
          "Two one-bed flats can need different vans if one person has boxed everything neatly and the other has three wardrobes and a corner sofa. Box count and large items matter as much as room count. Space also disappears fast once sofas, beds and appliances go in, so a two-bed can fill a Luton quickly.",
          "When in doubt, size up slightly. A second trip in a van that is too small usually costs more in time than the right van first time.",
        ],
      },
      {
        h2: "Weight vs Load Space",
        body: [
          "Every van has a payload limit as well as a volume limit. Heavy loads such as books, tools and full toolboxes can hit the weight limit while there is still room to spare, so a van can be legally full with space above the boxes. If you have a lot of dense, heavy items, mention it so we bring the right vehicle.",
        ],
      },
      {
        h2: "Access and Van Choice",
        body: [
          "A Luton is tall, often around 3 metres or more externally, which rules out many multi-storey car parks and height barriers, and it needs more room to park and reverse on tight terraced streets. Sometimes a slightly smaller van with an easy parking spot beats a big van you cannot get near the door.",
        ],
      },
      {
        h2: "Licence and Movers",
        body: [
          "A standard UK category B car licence covers vehicles up to 3.5 tonnes, which includes a 3.5 tonne Luton, so you do not need a special licence for a normal man and van move. Anything larger, such as a 7.5 tonne lorry for a big house, needs a higher category.",
          "As a rule of thumb, a studio or one-bed suits two movers, a two-bed two to three, and a three-bed around three, with more added for stairs, no lift or heavy items.",
        ],
      },
    ],
    related: [
      { label: "Our van size guide with quote CTAs", href: "/our-vans/" },
      { label: "How much does a man and van cost?", href: "/moving-guides/how-much-does-a-man-and-van-cost-in-manchester/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "GOV.UK driving licence categories", href: "https://www.gov.uk/driving-licence-categories" },
    ],
    faqs: [
      {
        q: "Can I drive a Luton van on a normal licence?",
        a: "Yes. A standard category B licence covers vehicles up to 3.5 tonnes, which includes a 3.5 tonne Luton van. A 7.5 tonne lorry needs a higher category.",
      },
      {
        q: "Will a one-bed flat fit in one van?",
        a: "Usually yes, in a large van or a Luton, but it depends on how much you have and whether large items dismantle. Tell us the contents and we will confirm.",
      },
      {
        q: "Do I need a tail lift?",
        a: "It is worth it for heavy items like washing machines, fridges and freezers, or where there is no step-free route to the van. For boxes and standard furniture it is not essential.",
      },
    ],
  },
  {
    slug: "man-and-van-vs-removals-company",
    title: "Man and Van vs Removals Company: Which Do You Need?",
    h1: "Man and Van vs Removals Company",
    metaDescription:
      "The real differences between a man and van and a full removals company: cost, packing, storage, insurance and BAR membership, and how to choose for your move.",
    updated: "2026-07-28",
    answer:
      "Choose a man and van for small to medium moves, single items and flexible, budget-friendly jobs. Choose a full removals company for large houses, valuable contents, or when you want packing, storage and a fully managed move handled as one package. Man and van is priced by the hour and is transport-led; a removals company quotes from a survey and brings a larger, coordinated team.",
    sections: [
      {
        h2: "Cost and Pricing",
        body: [
          "A man and van is usually charged by the hour, so you pay for the time the job takes. A full removals company prices from a survey of your home, so the quote reflects the true size of the move. For most small and medium moves a man and van works out cheaper, because you are not paying for a large team and overheads you do not need.",
          "The one thing to watch with hourly pricing is multiple trips. If a van is too small and has to go back and forth, an apparently cheap rate can climb past what a fixed quote would have cost. Getting the van size right first time is what keeps a man and van cheap.",
        ],
      },
      {
        h2: "Packing, Storage and Scale",
        body: [
          "Full-service removals typically offer professional packing and storage as part of the package, and bring bigger vehicles and a dedicated crew with a coordinator. A man and van is flexible, driver-led transport for smaller loads and quick turnarounds, with packing usually left to you unless you ask for help.",
        ],
      },
      {
        h2: "Insurance and Cover Limits",
        body: [
          "Both a man and van and a removals company should carry public liability insurance and goods-in-transit insurance, which covers your belongings against loss or damage while they are being moved. The difference is in the cover limits and terms, which vary, and a man and van may carry lower limits. The single most useful question you can ask either type of mover is what the goods-in-transit cover limit is, per item and in total.",
        ],
      },
      {
        h2: "BAR Membership and Protection",
        body: [
          "The British Association of Removers is the UK trade body for removal firms. Members pass an external audit each year and follow a Chartered Trading Standards Institute code of practice. BAR membership also brings an Advance Payment Guarantee, which protects any prepayment if the company fails before the move, and access to free independent dispute resolution through an approved ombudsman.",
          "Most man and van operators are not BAR members, so that audited standard and payment protection usually do not apply. That is a fair trade-off to understand: a man and van gives you lower cost and flexibility, while a BAR member adds a formal safety net that suits larger, higher-value moves. Neither is simply better, they suit different jobs.",
        ],
      },
      {
        h2: "Choosing Between the Two",
        body: [
          "A man and van suits small and local moves, studios and one-beds, single items, student moves, a tight budget and flexible timing. A removals company suits larger homes of three bedrooms or more, contents worth protecting, a need for packing or storage, or a completion date tied to a chain where coordination and reliability matter most.",
        ],
      },
      {
        h2: "Questions to Ask Before Booking",
        body: [
          "Ask whether the quote is hourly or fixed and what happens if it runs over or needs extra trips. Ask what the goods-in-transit and public liability cover limits are. Ask whether packing and materials are included or extra, and whether storage is available if completion dates do not line up. Clear answers up front are a good sign whichever option you choose.",
        ],
      },
    ],
    related: [
      { label: "Our man and van service", href: "/services/man-and-van-hire/" },
      { label: "House removals", href: "/services/house-removals/" },
      { label: "Insurance and compliance", href: "/insurance-and-compliance/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "British Association of Removers", href: "https://bar.co.uk/" },
    ],
    faqs: [
      {
        q: "Is a man and van cheaper than a removals company?",
        a: "For small and medium moves, usually yes, because you avoid the overheads of a large firm. For big multi-van house moves, a removals company may work out better value and less stressful.",
      },
      {
        q: "Does a man and van include insurance?",
        a: "A reputable man and van should carry public liability and goods-in-transit insurance, but cover limits vary. Always ask what the goods-in-transit limit is before you book.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-flat-move",
    title: "How to Prepare for a Flat Move in Manchester",
    h1: "How to Prepare for a Flat Move",
    metaDescription:
      "How to prepare for a flat or apartment move in Manchester: booking the goods lift and loading bay, concierge rules, measuring access, tram-track loading and a move checklist.",
    updated: "2026-07-28",
    answer:
      "Preparing for a flat move is mostly about access. Book the goods lift or loading bay in advance through building management, check the permitted move hours, tell the concierge around two weeks ahead, measure lifts and doorways for large items, and sort parking at both ends. In Manchester city centre, remember you cannot stop or load on the Metrolink tram tracks.",
    sections: [
      {
        h2: "Goods Lift and Loading Bay",
        body: [
          "Many apartment blocks require the goods or service lift and the loading bay to be booked in advance through building management, and some only allow moves within set hours, commonly a weekday daytime window. A loading bay may need booking, may already be in use when you arrive and often has a time limit. Sort these as soon as you have a date so the van is not left circling.",
        ],
      },
      {
        h2: "Concierge and Building Rules",
        body: [
          "In concierge buildings, speak to the building manager around two weeks before the move. They often want advance notice, driver details and arrival times, and some ask a mover to show proof of public liability and goods-in-transit insurance before allowing access. Ask us for a certificate if your building requires one, and request it a few days ahead for office and apartment-block moves.",
        ],
      },
      {
        h2: "Measuring Access at Both Ends",
        body: [
          "Before the day, measure the lift door width, corridors, doorways and stairwells at both ends. If a sofa or mattress will not fit the lift, it has to go up or down the stairs, which changes the time and the crew you need. Flagging a tight staircase or a narrow lift in advance means we bring enough hands.",
        ],
      },
      {
        h2: "Manchester City Centre Specifics",
        body: [
          "In the city centre, the Metrolink trams run through pedestrianised streets, and you cannot stop or load on the tram tracks, so loading has to be planned around them. The main apartment areas, Deansgate, Ancoats and the Northern Quarter across the M1 to M4 postcodes, are dense and parking is tight. In inner suburbs like Chorlton and Didsbury, residents' parking zones can mean you need a visitor permit or a bay arrangement for a large van.",
        ],
      },
      {
        h2: "Pre-Move Checklist",
        body: [
          "Book the move early: roughly four to six weeks ahead in the busy summer season, two to four weeks off-peak. Confirm your move date and key-collection time, and if you rent, check your notice period and the building's move rules. Book the lift, reserve the loading bay and arrange any parking. Use small to medium boxes so they stack on a trolley and fit in the lift, and label each with the flat number and room. Set up Royal Mail redirection, which can take up to five working days to start, and notify your utilities and broadband.",
        ],
      },
    ],
    related: [
      { label: "Flat and apartment removals", href: "/services/flat-apartment-removals/" },
      { label: "How to reserve parking for a move", href: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/" },
      { label: "Man and van in Manchester city centre", href: "/locations/manchester-city-centre/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Royal Mail redirection", href: "https://www.royalmail.com/personal/receiving-mail/redirection" },
    ],
    faqs: [
      {
        q: "How far ahead should I book the goods lift?",
        a: "As soon as you have a date. Many blocks book the lift and loading bay through building management and only allow moves in set hours, so early booking avoids a wasted trip.",
      },
      {
        q: "Does my building need to see the mover's insurance?",
        a: "Some building managers ask movers to evidence public liability and goods-in-transit insurance before allowing access. Ask us for a certificate a few days ahead if yours does.",
      },
    ],
  },
  {
    slug: "how-to-reserve-parking-for-a-move-in-manchester",
    title: "How to Reserve Parking for a Move in Manchester",
    h1: "How to Reserve Parking for a Move in Manchester",
    metaDescription:
      "How to arrange a parking bay suspension or dispensation for a move in Manchester, the notice and fee involved, the rules on loading and yellow lines, and why cones give no legal right.",
    updated: "2026-07-28",
    answer:
      "For a smooth move, arrange a legal parking spot close to the door at both ends. If your street has no loadable space, Manchester City Council offers a parking bay suspension or a dispensation to park on yellow lines, both of which need at least five working days' notice and carry a fee. A close, legal spot directly lowers the time and cost of the move.",
    sections: [
      {
        h2: "Parking and Move Costs",
        body: [
          "Every extra metre between the van and the door adds carry time, and on an hourly move that adds cost. A parking spot right outside is the cheapest thing you can arrange, so it is worth sorting before the day rather than hoping for the best.",
        ],
      },
      {
        h2: "Bay Suspension vs Dispensation",
        body: [
          "Manchester City Council offers two things for moves. A parking bay suspension temporarily reserves a pay-and-display bay so the van has a guaranteed space. A dispensation gives a named vehicle permission to park on single or double yellow lines during restricted hours, in a set spot for a set time, with a certificate that must be displayed in the vehicle.",
          "Both need at least five working days' notice, and late applications risk being refused. There is a fee, which at the time of writing is around £30 per bay or vehicle per day, so confirm the current figure when you apply. Applications go through the council's online parking portal.",
        ],
      },
      {
        h2: "Loading on Yellow Lines and Bays",
        body: [
          "You can usually load and unload on single and double yellow lines as long as there is no loading ban in force, you are not causing an obstruction, and loading is actively going on. Watch for kerb blips, the short yellow stripes painted on the kerb: a double stripe means no loading at any time, a single stripe means no loading at certain times, so check the nearby sign. You may load for as long as it takes, but the van must move off as soon as you finish.",
          "If loading is likely to take longer than about an hour, the council advises getting a dispensation rather than relying on the loading rules. Goods-vehicle loading bays typically operate Monday to Saturday, around 10am to 4pm. Note that Manchester does not use London-style red routes, so that is not something you need to worry about here.",
        ],
      },
      {
        h2: "Permit Zones and Clean Air",
        body: [
          "If your street is in a controlled parking zone or a residents' scheme, a suspension or dispensation is the way to hold a space legally, and the exact rules and hours vary by zone, so check the signage on your street. On the plus side, there is no clean air or emissions charge to bring a van into Greater Manchester: the charging Clean Air Zone was scrapped in January 2025, so a moving van pays nothing on air-quality grounds.",
        ],
      },
      {
        h2: "Simple Ways to Hold a Space",
        body: [
          "Park your own car in the spot the night before and pull it out when the van arrives. Ask a neighbour to keep the frontage clear, or time the move outside the local loading-restriction hours. One thing that does not work: cones. Putting cones out to reserve a public space without authorisation gives you no legal right to it and can itself attract a penalty, so use the council's suspension or dispensation if you need a space guaranteed.",
        ],
      },
    ],
    related: [
      { label: "Flat and apartment removals", href: "/services/flat-apartment-removals/" },
      { label: "How to prepare for a flat move", href: "/moving-guides/how-to-prepare-for-a-flat-move/" },
      { label: "Man and van in Manchester city centre", href: "/locations/manchester-city-centre/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Manchester City Council: suspensions and dispensations", href: "https://www.manchester.gov.uk/info/500345/parking_restrictions/692/" },
      { label: "Greater Manchester Clean Air Plan", href: "https://cleanairgm.com/clean-air-plan/" },
    ],
    faqs: [
      {
        q: "How much notice do I need to suspend a parking bay in Manchester?",
        a: "At least five working days. Late applications risk being refused, so apply as soon as you have a date.",
      },
      {
        q: "How much does a parking bay suspension cost?",
        a: "There is a per-day fee, which at the time of writing is around £30 per bay or vehicle per day. Confirm the current figure on the council's parking portal when you apply.",
      },
      {
        q: "Can I use cones to save a space for the removal van?",
        a: "Cones give you no legal right to a public space and can attract a penalty. To guarantee a space, apply for a council bay suspension or dispensation.",
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
