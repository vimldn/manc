import type { Faq } from "./services";

// -------------------------------------------------------------
// MOVING GUIDES. Researched, substantial content that supports the
// commercial pages. Figures are taken from real, cited UK sources and
// framed as typical ranges, not invented precision. No fabricated
// statistics, no fake named authors. Byline is the operator's editorial
// team with a real last-reviewed date. Where a fact could not be verified
// verbatim (e.g. the exact council fee), the copy says so.
// -------------------------------------------------------------

// `bullets` renders as a list between the body paragraphs and `outro`.
// Body, bullet and outro text may carry inline [label](/path/) links, which
// RichText resolves, so internal links sit in the prose rather than being
// bolted on at the end.
export type GuideSection = {
  h2: string;
  body: string[];
  bullets?: string[];
  outro?: string[];
};

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
    title: "Man and Van Costs in 2026 | Frank's Van and Man Manchester",
    h1: "How Much Does a Man and Van Cost in Manchester?",
    metaDescription:
      "Real 2026 man and van prices in Manchester: typical hourly rates, sample move costs, what pushes the price up, and why there is no clean air charge to factor in.",
    updated: "2026-07-28",
    answer:
      "In Manchester a man and van is usually charged by the hour. One mover and a small van typically starts around £30 to £45 an hour, and two movers with a larger van commonly run around £50 to £85 an hour, with a two to three hour minimum on most bookings. What you actually pay depends on the van size, the number of movers, the distance and how long the job takes, so the reliable way to know is to describe the move and get a quote.",
    sections: [
      {
        // First-party prices. These figures MUST match priceRows in
        // pricing.ts; update both together or the site contradicts itself.
        h2: "Our Current Man and Van Prices in Manchester",
        body: ["For our own service, current guide prices start at:"],
        bullets: [
          "One mover with a small van: £35 per hour",
          "One mover with a larger van: £45 per hour",
          "Two movers with a larger van: £50 per hour",
          "Two movers with a Luton van: £60 per hour",
          "Single-item delivery: £40",
          "Long-distance moves: fixed-price quote",
        ],
        outro: [
          "Most local bookings have a two to three hour minimum.",
          "These are guide prices rather than guaranteed quotes because the final cost depends on the load, access, distance and number of movers. The full breakdown, including what each van and crew combination suits, is on our [man and van prices page](/prices/).",
        ],
      },
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
    title: "What Size Van Do I Need? | Frank's Van and Man Manchester",
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
    title: "Man and Van vs Removals Company | Frank's Van and Man Manchester",
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
    title: "How to Prepare for a Flat Move | Frank's Van and Man Manchester",
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
    title: "Reserving Parking for a Move | Frank's Van and Man Manchester",
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
  {
    slug: "keys-delayed-moving-day",
    title: "Keys Delayed on Moving Day? | Frank's Van and Man Manchester",
    h1: "Keys Delayed on Moving Day | What Happens and Who Pays",
    metaDescription:
      "Why keys are late on completion day, the 2pm rule in the Standard Conditions of Sale, notice to complete, and what to do with a loaded van while you wait.",
    updated: "2026-10-02",
    answer:
      "Keys are released only after completion, and completion only happens when the money reaches the seller's solicitor. If your keys are late, the money is usually stuck somewhere in the chain. CHAPS, the system solicitors use, takes customer payments only until 5.40pm, and under the Standard Conditions of Sale money that arrives after 2.00pm is treated as completing on the next working day when the bills and any compensation are worked out. Keep the van loaded, tell your removal firm early, and ask your conveyancer exactly where the money is.",
    sections: [
      {
        h2: "Why the Keys Are Late",
        body: [
          "On most sales the keys are left with the estate agent, who releases them when the seller's solicitor confirms completion. Completion is the moment the purchase money arrives, and in a chain each sale waits for the money from the one below it. One late mortgage advance at the bottom of a chain of four holds up all four sets of keys.",
          "The money moves by CHAPS, the Bank of England's same-day payment system, which it describes as commonly used by solicitors and conveyancers to complete property transactions. CHAPS is usually open from 6am to 6pm, Monday to Friday, excluding bank holidays, and customer payments must be submitted by 5.40pm. A completion that has not been sent by then does not happen that day at all.",
        ],
        outro: [
          "The government's home buying guide puts it plainly: delays in paying the seller are more common in long chains, and when they happen you may not get access to your new home when expected.",
        ],
      },
      {
        h2: "The 2pm Rule in the Contract",
        body: [
          "Most residential sales in England use the Law Society's Standard Conditions of Sale. They say that if the money is received after 2.00pm, completion is treated as taking place on the next working day as a result of the buyer's default, for the purposes of apportioning the bills and working out compensation for late completion.",
          "There is an important exception. Where the sale is with vacant possession and the buyer is ready to pay but cannot until after 2.00pm because the seller has not moved out, the 2.00pm rule does not apply and the seller is treated as the one in default. A contract can also set a different time by special condition, so the time in yours is worth checking before the day.",
        ],
        bullets: [
          "Money in before 2.00pm: completion that day.",
          "Money in after 2.00pm: treated as the next working day for bills and compensation, at the buyer's cost.",
          "Seller still in the house: the seller takes the blame, not the buyer.",
        ],
      },
      {
        h2: "When Completion Slips by a Day or More",
        body: [
          "If completion does not happen on the agreed date at all, either side who is ready, able and willing to complete can serve a notice to complete. Under the Standard Conditions the other side then has ten working days to complete, not counting the day the notice is given, and time becomes of the essence, so missing that deadline is a serious breach.",
          "The party at fault also pays compensation for late completion, calculated at the contract rate set out in the contract. The government's guide adds that a seller who withdraws may be liable for your costs and even compensation. None of that is something to agree on the doorstep: ask your conveyancer before you accept or pay anything.",
        ],
      },
      {
        h2: "What to Do With a Loaded Van",
        body: [
          "The government's guide warns that completion delays may incur additional charges from your removal company and tells you to check the policy in advance. That is the right instinct. Ask before moving day [what waiting time costs](/moving-guides/removal-company-waiting-charges/), and whether the crew can stay with the van or has another job that afternoon.",
          "If the keys look like coming late in the day, waiting is usually cheapest. If they are not coming that day, there are two choices: unload back into the old house if the buyer allows it, or take the load [into storage overnight](/services/self-storage-removals/) and bring it out when the keys arrive. Both cost more than a move that happens on time, which is why a short call to your conveyancer at lunchtime is worth more than an hour of waiting outside the agent's office.",
        ],
        outro: [
          "In Manchester a slipped completion can cost you twice. A council parking suspension is booked for a date, costs £30 per bay per day and needs five working days' notice, so a move that slips a day cannot simply carry the suspension with it. Our guide to [reserving parking for a move](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) explains how the booking works.",
        ],
      },
      {
        h2: "Days That Make Delays More Likely",
        body: [
          "The government's guide notes that Fridays and the first and last days of the month are often very busy for removals, and suggests avoiding them for better rates and availability. They are also the days chains are most crowded, and a Friday completion that misses the CHAPS cut-off cannot be put right until Monday.",
          "If you have any say in the date, a midweek completion early in the month gives everyone in the chain the most room to recover from a late payment. If you do not, book the van for the full day rather than the morning, so a late release does not turn into a second booking. Our [same-day man and van service](/services/same-day-man-and-van/) is the backstop if the original firm cannot wait.",
        ],
      },
      {
        h2: "Renting Rather Than Buying",
        body: [
          "There is no completion on a rental, so keys are usually handed over at the start of the tenancy once the paperwork is signed. In England, any new private tenancy agreed on or after 1 May 2026 is an assured periodic tenancy under the Renters' Rights Act. Your landlord cannot ask for or accept rent before you have signed the agreement, and once it is signed can ask for at most one month's rent in advance.",
          "That makes the signing, not the money, the thing to chase. If the agreement is not signed, the keys are not coming, so get it signed before the van is loaded rather than on the doorstep.",
        ],
      },
      {
        h2: "Faster Bank Payments Will Not Mean Earlier Keys",
        body: [
          "On 24 February 2026 the Bank of England confirmed that CHAPS will open at 1.30am from September 2027 rather than 6am. That extends the morning, not the afternoon: the 6pm close stays, and the 2.00pm time in the Standard Conditions is a contract term, not a banking one.",
          "So the practical advice does not change. Keys depend on every payment in the chain arriving, and the earliest any of them can arrive is still the moment the last solicitor in the chain presses send.",
        ],
      },
    ],
    related: [
      { label: "Self-storage removals", href: "/services/self-storage-removals/" },
      { label: "How to reserve parking for a move in Manchester", href: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/" },
      { label: "Same-day man and van", href: "/services/same-day-man-and-van/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Bank of England: CHAPS", href: "https://www.bankofengland.co.uk/payments/chaps" },
      { label: "GOV.UK: how to buy a home", href: "https://www.gov.uk/government/publications/how-to-buy-a-home/how-to-buy" },
    ],
    faqs: [
      {
        q: "What time do you get the keys on completion day?",
        a: "Only after completion, which happens when the purchase money reaches the seller's solicitor. There is no fixed time, and in a chain it depends on every payment below yours. Under the Standard Conditions of Sale money received after 2.00pm is treated as completing the next working day for the purposes of bills and compensation.",
      },
      {
        q: "Why have I not got my keys on completion day?",
        a: "Almost always because the money has not reached the seller's solicitor yet, often because a payment lower down the chain is late. CHAPS takes customer payments only until 5.40pm on weekdays.",
      },
      {
        q: "Who pays if completion is late?",
        a: "The party at fault pays compensation for late completion at the contract rate. If the seller has not moved out of a vacant possession sale, the seller is treated as in default. Ask your conveyancer before agreeing anything.",
      },
      {
        q: "What happens if completion does not happen on the agreed day?",
        a: "Either side who is ready to complete can serve a notice to complete. Under the Standard Conditions the other side then has ten working days, excluding the day of the notice, and time becomes of the essence.",
      },
      {
        q: "Will my removal company charge if the keys are late?",
        a: "Often, yes. The government's home buying guide warns that completion delays may incur additional charges from your removal company and says to check their policy in advance.",
      },
      {
        q: "When do I get the keys to a rented flat?",
        a: "At the start of the tenancy once the agreement is signed. In England a landlord cannot accept rent before you sign, and can then ask for at most one month in advance.",
      },
    ],
  },
  {
    slug: "removal-company-not-turned-up",
    title: "Removal Company Not Turned Up? | Frank's Van and Man Manchester",
    h1: "Removal Company Not Turned Up | Your Rights and Next Steps",
    metaDescription:
      "What to do when a removal company does not turn up: the Consumer Rights Act remedies, getting a deposit back by Section 75 or chargeback, and reporting the firm.",
    updated: "2026-10-02",
    answer:
      "A removal company that does not turn up on the booked date has broken its contract. Get its answer in writing, then book a replacement for the same day. Under the Consumer Rights Act 2015 you can ask for the service to be done again at the firm's cost or for a price reduction of up to the full price, refunded within 14 days. If it will not pay, Section 75 covers a credit card deposit and chargeback covers a debit card.",
    sections: [
      {
        h2: "A Booked Date Is Part of the Contract",
        body: [
          "The Consumer Rights Act 2015 makes what a trader says or writes about a service binding where you relied on it when you booked. A confirmed date and arrival time on a booking email or text is exactly that. The same Act requires the service to be performed with reasonable care and skill, and a firm cannot write those rights out of its terms.",
          "So a no-show is not a grey area. Before you do anything else, send the firm a short message asking whether it is coming and when, and keep the reply. A written answer, or a written silence, is what every later step relies on.",
        ],
        bullets: [
          "Screenshot the booking confirmation with the date, time and price.",
          "Message the firm rather than only phoning, so there is a record.",
          "Note the time you gave up waiting and booked someone else.",
        ],
      },
      {
        h2: "Getting the Move Done the Same Day",
        body: [
          "The priority on the day is the move, not the argument. If you are on a completion or a tenancy end date, a replacement van today is worth more than a refund next week. A firm with a free crew can often still do a flat or a small house in the afternoon, and our [same-day man and van service](/services/same-day-man-and-van/) exists for exactly this.",
          "The government's home buying guide notes that Fridays and the first and last days of the month are often very busy for removals, so a no-show on one of those days is the hardest to replace. Ring round early rather than waiting another hour for the first firm.",
        ],
      },
      {
        h2: "Your Remedies Under the Consumer Rights Act",
        body: [
          "Where a service is not performed as agreed, the Act gives you two remedies against the firm. The first is repeat performance: the trader must do the job properly within a reasonable time and without significant inconvenience to you, and bear any cost of doing so. The second is a price reduction, which can be the full amount you paid.",
          "A refund under the price reduction remedy must be given without undue delay, and in any event within 14 days beginning with the day the trader agrees you are entitled to it, using the same means of payment you used unless you agree otherwise, and without any fee. If the move has already been done by someone else, repeat performance is no use to you, and the price reduction is the remedy to ask for.",
        ],
      },
      {
        h2: "Getting a Deposit Back From the Card Company",
        body: [
          "If the firm will not refund, how you paid decides what happens next. Section 75 of the Consumer Credit Act makes a credit card company jointly responsible where the price was more than £100 and no more than £30,000, even if you only paid part of it on the card. Citizens Advice gives the example of a £50 deposit paid by credit card on a £250 purchase, where the full £250 can be claimed.",
          "If you paid by debit card, ask your bank for a chargeback. The Financial Ombudsman Service says you usually have around 120 days to raise one. If the card company does not send a final response within eight weeks, or you are unhappy with it, you can take the complaint to the ombudsman.",
        ],
        outro: [
          "That is the strongest argument for paying any removals deposit by credit card. A bank transfer to a firm that then disappears has none of this protection.",
        ],
      },
      {
        h2: "Reporting the Firm",
        body: [
          "Complaints about traders go to Trading Standards through the Citizens Advice consumer helpline, on 0808 223 1133, Monday to Friday from 9am to 5pm. Citizens Advice passes the information on, and it is clear that you cannot report to Trading Standards yourself.",
          "Consumer law also got sharper teeth recently. The Digital Markets, Competition and Consumers Act 2024 came into force in April 2025, and on 15 April 2026 the Competition and Markets Authority used its new powers for the first time to fine the AA and BSM driving schools £4.2 million over a booking fee not shown up front. If a removals quote grew hidden extras before the day, say so when you report it.",
        ],
      },
      {
        h2: "Choosing a Firm That Turns Up",
        body: [
          "A written quote with the date, arrival time and price, a deposit paid on a credit card, and a phone number that a person answers the day before are the three cheapest protections there are. Ask for all three when you book, and treat a firm that will not put the date in writing as a firm that may not turn up on it.",
          "Larger removal companies that belong to the British Association of Removers carry extra protection for advance payments, which suits bigger moves. Our guide to a [man and van against a removals company](/moving-guides/man-and-van-vs-removals-company/) sets out what that covers and when it is worth paying for.",
        ],
      },
    ],
    related: [
      { label: "Same-day man and van", href: "/services/same-day-man-and-van/" },
      { label: "Man and van vs removals company", href: "/moving-guides/man-and-van-vs-removals-company/" },
      { label: "Keys delayed on moving day", href: "/moving-guides/keys-delayed-moving-day/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Consumer Rights Act 2015: services", href: "https://www.legislation.gov.uk/ukpga/2015/15/part/1/chapter/4" },
      { label: "Citizens Advice: getting your money back if you paid by card", href: "https://www.citizensadvice.org.uk/consumer/somethings-gone-wrong-with-a-purchase/getting-your-money-back-if-you-paid-by-card-or-paypal/" },
    ],
    faqs: [
      {
        q: "What should I do if my removal company does not turn up?",
        a: "Message the firm for a written answer, keep the booking confirmation, and book a replacement for the same day. Then ask the original firm for a refund under the Consumer Rights Act.",
      },
      {
        q: "Can I get my removals deposit back?",
        a: "Yes. A no-show is a breach of contract, and the price reduction remedy can be the full amount paid, refunded within 14 days. If the firm will not pay, use Section 75 for a credit card or chargeback for a debit card.",
      },
      {
        q: "Does Section 75 cover a removals deposit?",
        a: "Yes, if the total price was more than £100 and no more than £30,000, even if only the deposit went on the credit card.",
      },
      {
        q: "How long do I have to ask for a chargeback?",
        a: "The Financial Ombudsman Service says you usually have around 120 days to raise a chargeback with your bank.",
      },
      {
        q: "Who do I report a removal company to?",
        a: "Trading Standards, through the Citizens Advice consumer helpline on 0808 223 1133, Monday to Friday from 9am to 5pm. Citizens Advice passes the complaint on.",
      },
      {
        q: "What if the removal company is just late rather than not coming at all?",
        a: "A confirmed arrival time is part of the contract too. Get a revised time in writing, and if it no longer works for your completion or tenancy date, treat it as a no-show and book someone else.",
      },
    ],
  },
  {
    slug: "removal-company-waiting-charges",
    title: "Removal Company Waiting Charges | Frank's Van and Man Manchester",
    h1: "Removal Company Waiting Charges | When They Apply and When You Can Refuse",
    metaDescription:
      "How removal firms charge for waiting on completion day, what published terms actually say, and the consumer rule that makes an unagreed extra charge unpayable.",
    updated: "2026-10-05",
    answer:
      "A waiting charge is what a removal firm bills when the crew is held up, almost always waiting for keys on completion day. There is no standard rate: published terms run from an hour free to charges from the first minute, with the clock starting anywhere from 1pm to 5pm. One rule protects you: under the Consumer Contracts Regulations an extra payment is not due unless you gave express consent to it before you were bound by the contract, and a pre-ticked box does not count.",
    sections: [
      {
        h2: "Why the Van Ends Up Waiting",
        body: [
          "A crew can load in the morning and then sit outside the new house for hours, because the keys are released only once completion money arrives. Our guide to [keys being delayed on moving day](/moving-guides/keys-delayed-moving-day/) explains why that happens and what the contract says about it.",
          "The removals trade sees the same problem from the other side. In April 2026 the British Association of Removers launched its Getting Britain Moving report in Westminster, calling for keys to be released by 1pm on moving day and for a mandated minimum period between exchange and completion, so households and removers have time to plan.",
        ],
      },
      {
        h2: "What Published Terms Actually Say",
        body: [
          "We read the waiting clauses of a range of UK removal firms in October 2026. The free period ran from nothing to an hour. The clock started anywhere from 1pm to 5pm on the day. Charges were set per mover per hour, per vehicle, or as a flat hourly rate, and some firms charged any part hour as a whole one.",
          "One typical example allows up to an hour of waiting during each move, then charges £10 per hour or part hour for each mover, and where the customer is waiting on legal completion that free hour does not start before 1pm. Two movers waiting three hours past the free period would cost £60 on those terms. Other firms charge several times that.",
        ],
        bullets: [
          "When does the waiting clock start: a fixed time, or when the crew arrives?",
          "Is there a free period, and how long is it?",
          "Is it charged per mover, per van, or a flat rate?",
          "Are part hours charged as whole hours?",
          "Is there a cap, or a point where the whole job is re-priced?",
        ],
        outro: [
          "Ask all five before you book, and get the answers in the written quote. The government's home buying guide gives the same advice: completion delays may incur additional charges from your removal company, so check its policy in advance.",
        ],
      },
      {
        h2: "The Rule That Makes an Unagreed Charge Unpayable",
        body: [
          "Regulation 40 of the Consumer Contracts Regulations 2013 says that no payment is payable in addition to the agreed price for the main service unless, before you became bound by the contract, the trader obtained your express consent. Consent does not count if it is inferred from you not changing a default option, such as a pre-ticked box. If a trader takes an extra payment that was not agreed that way, the contract is treated as requiring the trader to pay it back.",
          "So a waiting charge set out in the quote you accepted is payable on its terms. A waiting charge that first appears on the day, or that was buried in a box you never actively ticked, is one you can challenge. The Consumer Rights Act 2015 points the same way: what a firm says or writes before you book, and rely on, becomes part of the contract, and where no price was agreed for a service you pay a reasonable price and no more.",
        ],
      },
      {
        h2: "When the Chain Caused the Delay",
        body: [
          "If the keys were late because someone in the chain did not complete on time, the Standard Conditions of Sale make the party at fault pay compensation for late completion at the contract rate, which the conditions define as the Law Society's interest rate. That compensation is between buyer and seller. It does not change what you owe the removal firm on the day.",
          "Whether you can recover a waiting charge from the party who caused the delay is a question for your conveyancer, and it is worth asking before you pay rather than after. Keep the removal firm's invoice showing the waiting time separately.",
        ],
      },
      {
        h2: "How We Handle Waiting",
        body: [
          "Our position is on our [prices page](/prices/): if keys, completions or building management hold the job up, waiting time may apply, and we tell you the terms up front rather than on the day. On an hourly booking that means you know before the move what an hour of waiting costs and when it starts.",
          "The cheapest wait is the one you avoid. Book the move for a weekday that is not a Friday where you can, keep the van loaded rather than half unloaded, and if the keys are clearly not coming that day, move the load into [storage overnight](/services/self-storage-removals/) rather than paying a crew to sit outside.",
        ],
      },
    ],
    related: [
      { label: "Keys delayed on moving day", href: "/moving-guides/keys-delayed-moving-day/" },
      { label: "Removal company not turned up", href: "/moving-guides/removal-company-not-turned-up/" },
      { label: "Man and van prices in Manchester", href: "/prices/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Consumer Contracts Regulations 2013, regulation 40", href: "https://www.legislation.gov.uk/uksi/2013/3134/regulation/40" },
      { label: "British Association of Removers: Getting Britain Moving", href: "https://bar.co.uk/getting-britain-moving/" },
    ],
    faqs: [
      {
        q: "Do removal companies charge for waiting?",
        a: "Many do, but the terms vary widely. Published clauses range from an hour free to charges from the start, with the clock starting anywhere from 1pm to 5pm, charged per mover, per van or as a flat hourly rate.",
      },
      {
        q: "How much do removal companies charge for waiting time?",
        a: "There is no standard rate. One typical published clause charges £10 per hour or part hour for each mover after a free hour that does not start before 1pm on a completion day; other firms charge considerably more.",
      },
      {
        q: "Can a removal company add a waiting charge on the day?",
        a: "Not one you did not agree to. Under regulation 40 of the Consumer Contracts Regulations an extra payment is only due if you gave express consent before you were bound by the contract, and a pre-ticked box does not count.",
      },
      {
        q: "Can I claim waiting charges back from the seller?",
        a: "The Standard Conditions of Sale make the party at fault pay compensation for late completion, but that is between buyer and seller. Ask your conveyancer whether a waiting charge can be recovered before you pay it.",
      },
      {
        q: "Is there a waiting charge waiver?",
        a: "Some firms sell one as an add-on. Read what it covers and for how many hours, and compare it with simply booking a firm whose standard terms include a free waiting period.",
      },
      {
        q: "What is the best way to avoid waiting charges?",
        a: "Avoid Friday completions where you can, agree the waiting terms in writing before you book, and if the keys are not coming that day, put the load into storage rather than paying for a crew to wait.",
      },
    ],
  },
  {
    slug: "how-long-does-moving-house-take",
    title: "How Long Does Moving House Take? | Frank's Van and Man Manchester",
    h1: "How Long Moving House Takes | From Offer to Moving Day",
    metaDescription:
      "How long moving house takes: around 120 days from offer to completion in 2026, how long exchange to completion runs, renters' notice periods and the moving day itself.",
    updated: "2026-10-05",
    answer:
      "Buying a home takes around 120 days on average from an accepted offer to completion, according to the government's June 2026 home buying reform roadmap, and around one in three transactions fall through. Renting is quicker to leave: from 1 May 2026 a tenant in England gives two months' notice. The move itself is a day for most homes, from a few hours for a flat to a long day for a family house.",
    sections: [
      {
        h2: "From Offer to Completion",
        body: [
          "The government's home buying and selling reform roadmap, published on 19 June 2026, says it takes around 120 days on average to complete after an offer is accepted, that the journey is now around 60% longer than it was in 2007, and that around one in three transactions fall through.",
          "Most of that time is conveyancing: searches, mortgage offers, enquiries and the chain lining up behind a single date. The roadmap's plans to shorten it come in stages: a non-statutory code of practice for estate agents later this year, a consultation next year on mandatory qualifications for estate and letting agents, and further legislation when parliamentary time allows. None of that will shorten a sale that is already under way.",
        ],
      },
      {
        h2: "Exchange to Completion",
        body: [
          "The completion date is fixed at exchange of contracts. Where a contract uses the Standard Conditions of Sale and says nothing else, completion is twenty working days after the date of the contract, about four weeks, though buyers and sellers often agree something shorter.",
          "That gap is the window for booking the move, and it is often tighter than people expect. The British Association of Removers has called for a mandated minimum period between exchange and completion for exactly that reason. In Manchester the gap also has to cover a council parking suspension, which needs five working days' notice; our guide to [reserving parking for a move](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) has the detail.",
        ],
      },
      {
        h2: "Leaving a Rented Home",
        body: [
          "Renting moves faster. In England, from 1 May 2026, a tenant on an assured periodic tenancy can end it by giving two months' notice in writing, for example by letter, email or text, on the day the rent is due or the day before. A landlord ending a tenancy has to use the correct forms and usually give four months' notice, though it can be shorter on some grounds.",
          "So a renter who finds a new place can usually be out within about two months of deciding to go. Book the van once the notice is given, not once the new contract is signed, because the end date is the one you cannot move.",
        ],
      },
      {
        h2: "The Moving Day Itself",
        body: [
          "There is no official figure for how long the day takes, because it depends on the stairs, the carry and how ready the boxes are. One national removals comparison site, reallymoving, estimates six to seven hours for a two bedroom home and ten to twelve hours or more for four or more rooms. Those are estimates for a full removal crew, not a promise.",
          "A studio or a one bedroom flat with everything boxed is usually a few hours, which is why our minimum booking is typically two to three hours. A family house with a loft, a garage and furniture to dismantle is a full day. What makes it longer is mostly within your control: boxes not packed when the van arrives, a parking spot two streets away, or a lift that has not been booked.",
        ],
        bullets: [
          "Pack everything except the last night's essentials before the day.",
          "Book parking or a lift slot at both ends ahead of time.",
          "Measure the big items against doors and stairs at the new place.",
        ],
        outro: [
          "If you would rather hand over the packing as well, our [packing service](/services/packing-services/) takes that part of the day off you, and it is quicker to price than to explain on the morning.",
        ],
      },
      {
        h2: "The Days That Take Longest",
        body: [
          "The government's home buying guide notes that Fridays and the first and last days of the month are often very busy for removals, and suggests avoiding them for better rates and availability. They are also the days chains are most crowded, so a completion on one of them is the most likely to run late into the afternoon.",
          "If the date is yours to choose, midweek and mid-month gives you the most room. If it is not, book the van for the whole day and read our guide to [removal company waiting charges](/moving-guides/removal-company-waiting-charges/) before you sign the quote.",
        ],
      },
    ],
    related: [
      { label: "Keys delayed on moving day", href: "/moving-guides/keys-delayed-moving-day/" },
      { label: "What size van do I need?", href: "/moving-guides/what-size-van-do-i-need-for-my-move/" },
      { label: "How much does a man and van cost in Manchester?", href: "/moving-guides/how-much-does-a-man-and-van-cost-in-manchester/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "GOV.UK: home buying and selling reform roadmap", href: "https://www.gov.uk/government/consultations/home-buying-and-selling-reform/outcome/home-buying-and-selling-reform-roadmap" },
      { label: "GOV.UK: Renters' Rights Act overview for tenants", href: "https://www.gov.uk/guidance/renters-rights-act-overview-for-tenants" },
    ],
    faqs: [
      {
        q: "How long does it take to move house from offer to completion?",
        a: "Around 120 days on average, according to the government's June 2026 home buying reform roadmap, which also says the journey is around 60% longer than in 2007.",
      },
      {
        q: "How long between exchange and completion?",
        a: "Under the Standard Conditions of Sale, twenty working days after the contract unless the parties agree otherwise. Many buyers and sellers agree a shorter gap.",
      },
      {
        q: "How many house sales fall through?",
        a: "The government's June 2026 roadmap says around one in three transactions fall through.",
      },
      {
        q: "How much notice do I give to leave a rented home in England?",
        a: "From 1 May 2026, two months' notice in writing, given on the day the rent is due or the day before. A landlord usually has to give four months.",
      },
      {
        q: "How long does the moving day itself take?",
        a: "A boxed-up flat is usually a few hours. One comparison site estimates six to seven hours for a two bedroom home and ten to twelve hours or more for four or more rooms.",
      },
      {
        q: "Is completion day the same as moving day?",
        a: "It usually is, because completion day is the first day you can get into the new home. Some buyers book the move a day later to give themselves room if the keys run late.",
      },
    ],
  },
  {
    slug: "what-removal-companies-wont-move",
    title: "What Removal Companies Won't Move | Frank's Van and Man Manchester",
    h1: "What Removal Companies Won't Move",
    metaDescription:
      "The items removal firms refuse and why: fuel, gas and paint, valuables, plants and food, the jobs removers do not normally do, and where refused items go in Greater Manchester.",
    updated: "2026-10-07",
    answer:
      "Removal firms refuse anything flammable or pressurised, such as gas bottles, petrol, paint and aerosols, and most published terms also leave cash, jewellery, important documents, plants, perishable food and animals to you. The hazardous list has a legal reason: the exemption that lets you carry fuel in your own car does not cover someone moving goods for another person. Sort those items before the day, and tell the crew about anything unusual when you book.",
    sections: [
      {
        h2: "Fuel, Gas and Anything That Burns",
        body: [
          "Government guidance on carrying dangerous goods by road has an exemption for private individuals: goods packaged for retail sale and intended for their personal or domestic use or their leisure or sporting activities. Where those goods are flammable liquids in refillable containers, the total must not exceed 60 litres per container and 240 litres per vehicle.",
          "That exemption is for you carrying your own things. The guidance is explicit that the separate exemption for carrying goods to a place of work applies only to a worker carrying them for immediate use by that worker, and would not apply to a driver delivering goods for use by someone else. A crew moving your mower fuel and patio heater gas is carrying goods for someone else, which is why removal firms refuse them.",
        ],
        bullets: [
          "Gas bottles, full or empty, including camping and barbecue gas.",
          "Petrol, diesel and the fuel left in a mower or strimmer.",
          "Paint, paint thinners, oils and garden or cleaning chemicals.",
          "Aerosols and anything else marked flammable or under pressure.",
        ],
        outro: [
          "Drain the mower, use up or return the gas, and either move the rest in your own car within the private limits or dispose of it before the day.",
        ],
      },
      {
        h2: "Things Most Firms Leave to You",
        body: [
          "Published removal terms are strikingly similar on what they exclude. Alongside the hazardous list they usually leave out money, jewellery, deeds and important documents, and collections such as stamps or coins; plants; perishable and frozen food; and live animals. Several also list firearms.",
          "None of that means the item cannot travel. It means it travels with you. The [packing service](/services/packing-services/) page sets out the bag that should go in your car rather than the van: passports, keys, medication and chargers. Pets and plants go the same way, and a freezer should be run down and defrosted the day before rather than moved full.",
        ],
      },
      {
        h2: "Jobs Removers Do Not Normally Do",
        body: [
          "The British Association of Removers' Code of Practice, re-approved in September 2026, requires members to point out the services a customer might expect but which would not normally be provided. Its list is disconnecting and reconnecting kitchen and household appliances, taking down and rehanging curtains, clearing out cellars, lofts and attics, dismantling and rebuilding bedroom and kitchen furniture, children's climbing frames, greenhouses, garden sheds and planters, and looking after plants.",
          "Some of those are things we do as a matter of course on a man and van job. We [take apart and rebuild beds, wardrobes and desks](/services/furniture-dismantling/) so they fit through the door, and we [clear lofts and garages](/services/rubbish-removal/) as part of a move or on their own. Gas and plumbing work is different: a gas cooker needs a Gas Safe engineer, and a washing machine should be disconnected and drained before the van arrives.",
        ],
      },
      {
        h2: "Where the Refused Items Go in Greater Manchester",
        body: [
          "Recycle for Greater Manchester says gas bottles must never go in a household bin because they may explode if crushed. Take them to a recycling centre, or have them refilled or returned to the supplier. Liquid paint must not be poured down the drain: brush a small amount onto scrap paper or cardboard to dry, or mix a larger amount with dry soil, sand or sawdust until it hardens, after which it can go in the household bin.",
          "Usable paint can be donated at the 10 Renew paint donation points at recycling centres across Greater Manchester, or through Community RePaint, which has locations in Bolton, Rochdale, Moss Side and Wythenshawe. Empty paint cans go to your nearest household waste recycling centre. If you are taking a carload rather than a van, no permit is needed; a van, including a hire van, needs a free permit applied for in advance.",
        ],
      },
      {
        h2: "Tell the Crew Before the Day",
        body: [
          "The BAR code requires members to give a fixed price written quotation with a clear description of the work. That only works if the description is right, and the most common surprise on moving day is an item nobody mentioned: a piano in the back room, a shed full of tools, or a garage shelf of paint tins.",
          "List anything heavy, awkward, valuable or hazardous when you ask for a price. The crew can then plan for it, refuse it in good time so you can make other arrangements, or tell you how it should be prepared, rather than leaving it on the pavement on the day.",
        ],
      },
    ],
    related: [
      { label: "Packing services", href: "/services/packing-services/" },
      { label: "Furniture dismantling and assembly", href: "/services/furniture-dismantling/" },
      { label: "Damage during a house move", href: "/moving-guides/damage-during-house-move/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "GOV.UK: carriage of fuel by private individuals", href: "https://www.gov.uk/government/publications/carriage-of-dangerous-goods-guidance-note-23/carriage-by-private-individuals-of-diesel-un1202-petrol-un1203-and-kerosene-un1223-by-road" },
      { label: "Recycle for Greater Manchester: gas bottles", href: "https://recycleforgreatermanchester.com/recycling-guide/gas-bottles/" },
    ],
    faqs: [
      {
        q: "What will removal companies not move?",
        a: "Anything flammable or pressurised, such as gas bottles, petrol, paint and aerosols, and in most published terms also cash, jewellery, important documents, plants, perishable food and animals, which travel with you instead.",
      },
      {
        q: "Will removal companies move gas bottles?",
        a: "Generally no. The government's private-individual exemption covers you carrying your own goods, and the guidance says the work exemption would not apply to a driver delivering goods for use by someone else.",
      },
      {
        q: "Can I move petrol in my own car?",
        a: "Within limits. For flammable liquids in refillable containers carried by a private individual, the total must not exceed 60 litres per container and 240 litres per vehicle.",
      },
      {
        q: "Will removers move my plants?",
        a: "Many exclude plants in their terms, and the BAR code lists looking after plants among services not normally provided. Move them in your own car where you can.",
      },
      {
        q: "How do I get rid of old paint in Manchester?",
        a: "Never down the drain. Dry small amounts on cardboard or harden larger amounts with soil, sand or sawdust, then bin it. Usable paint can go to a Renew paint donation point or Community RePaint.",
      },
      {
        q: "Do removers disconnect washing machines and cookers?",
        a: "Not normally. The BAR code lists disconnecting and reconnecting appliances among services removers do not usually provide. Gas cookers need a Gas Safe engineer.",
      },
    ],
  },
  {
    slug: "damage-during-house-move",
    title: "Damage During a House Move | Frank's Van and Man Manchester",
    h1: "Damage During a House Move | What Happens and How to Claim",
    metaDescription:
      "What to do if a removal company damages your furniture: report deadlines, per-item limits, your own home insurance, what the trade ombudsman will not handle, and small claims.",
    updated: "2026-10-07",
    answer:
      "Report the damage to the firm in writing straight away, with photos, because removal contracts set short deadlines: one published contract allows 7 days from delivery. Unless you declared a value, liability is often capped per item, at £50 per item in the same contract. The firm must carry out the move with reasonable care and skill. If it will not pay, check your home insurance, and a small claim costs from £35 to issue with free mediation for claims up to £10,000.",
    sections: [
      {
        h2: "Report It in Writing, Quickly",
        body: [
          "The single most important thing is the deadline. The British Association of Removers' Code of Practice requires members to draw your attention to the limits of liability and the time limit for making claims in their terms, and those limits are short. One published removals contract requires you to notify any loss or damage within 7 days of delivery, unless the firm agrees to extend it.",
          "So check the furniture as it comes off the van, photograph anything damaged where it stands, keep the damaged item rather than throwing it away, and send the firm a written message the same day. On our own moves we ask for the same: tell us as soon as you notice it and keep the item, so we can [make the claim under our cover](/insurance-and-compliance/).",
        ],
        bullets: [
          "Photograph the damage before anything is moved or repaired.",
          "Keep the damaged item and any packaging it came in.",
          "Report it in writing on the day, even if you are not sure of the cost yet.",
        ],
      },
      {
        h2: "What the Firm Is Responsible For",
        body: [
          "Under the Consumer Rights Act 2015, a trader must perform a service with reasonable care and skill, and a contract term cannot exclude that duty. The Act also says a trader can never exclude or restrict liability for death or personal injury resulting from negligence, and that agreeing to or knowing about such a term does not mean you accepted the risk.",
          "Limits on how much a firm pays for damaged goods are a different matter. They are common, they are not automatically void, and whether a particular limit is fair depends on the contract. The practical answer is to read the liability clause before you book, not after something breaks.",
        ],
      },
      {
        h2: "Per-Item Limits and Declared Values",
        body: [
          "Most removal contracts limit what they pay unless you declare a value. In one published contract, if no value is declared the firm's liability is limited to a maximum of £50 per item, and an item is defined as any one article, suite, pair, set, complete case, package, carton or other container.",
          "That definition matters. Under it, a packed carton of china is one item, worth £50 however many plates are inside, and a three piece suite is one item too. If you own anything worth more than the per-item limit, declare its value when you book and ask what it costs to cover it properly. If you are packing fragile things yourself, that is also when to ask whether owner-packed boxes are covered at all; our [packing service](/services/packing-services/) is one way round the question.",
        ],
      },
      {
        h2: "Your Own Home Insurance",
        body: [
          "Some contents policies include cover while you move, but the detail matters. Direct Line's home insurance policy, for example, pays for loss of or damage to contents while they are being moved from your home to another home, where the cause is one listed in its core cover or accidental damage sections, and covers contents in temporary storage for up to 72 hours.",
          "The same policy will not pay for damage to china, glass, earthenware or other fragile items, or bikes, during the move. Every insurer is different, so read the moving home section of your own policy before the day, and if fragile items are excluded, decide whether to declare them to the removal firm or move them yourself.",
        ],
      },
      {
        h2: "When the Trade Body Cannot Help",
        body: [
          "BAR members offer independent dispute resolution, but it is not the route for a damage claim. BAR's own consumer guide, published in August 2026, says otherwise: its ombudsman will not consider a claim for compensation for damage to goods during the move, damage due to alleged poor packing, or a dispute about the adequacy of an insurance cover limit such as £40 per box.",
          "Those are insurance matters and go through the firm's insurer. The ombudsman does handle other complaints about members, and those have to be referred within 12 months of the move. Our guide to a [man and van against a removals company](/moving-guides/man-and-van-vs-removals-company/) covers what BAR membership does and does not add.",
        ],
      },
      {
        h2: "Small Claims as the Last Step",
        body: [
          "If the firm will not pay and there is no insurance route, the county court small claims track is the last step. On GOV.UK's current fees, issuing a claim costs £35 for claims up to £300, rising to £455 for claims between £5,000.01 and £10,000.",
          "If your claim is £10,000 or less and the firm disputes it, you will be told you must attend mediation, which is free and takes up to an hour by phone. You have six years from the move to bring a claim for breach of contract, but the sooner you act the easier the evidence is to find.",
        ],
      },
    ],
    related: [
      { label: "Insurance and compliance", href: "/insurance-and-compliance/" },
      { label: "Removal company not turned up", href: "/moving-guides/removal-company-not-turned-up/" },
      { label: "What removal companies won't move", href: "/moving-guides/what-removal-companies-wont-move/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Consumer Rights Act 2015, section 65", href: "https://www.legislation.gov.uk/ukpga/2015/15/section/65" },
      { label: "GOV.UK: court fees for a money claim", href: "https://www.gov.uk/make-court-claim-for-money/court-fees" },
    ],
    faqs: [
      {
        q: "What should I do if a removal company damages my furniture?",
        a: "Photograph it, keep the item and report it to the firm in writing the same day. Removal contracts often set a short deadline, such as 7 days from delivery.",
      },
      {
        q: "Is a removal company liable for damage?",
        a: "It must carry out the move with reasonable care and skill under the Consumer Rights Act, but most contracts limit what they pay per item unless you declared a value. One published contract caps it at £50 per item.",
      },
      {
        q: "Does home insurance cover damage during a house move?",
        a: "Often, with conditions. Direct Line's policy, for example, covers contents being moved to another home and up to 72 hours in storage, but not china, glass or other fragile items. Check your own policy.",
      },
      {
        q: "Will the BAR ombudsman deal with a damage claim?",
        a: "No. BAR's August 2026 consumer guide says its ombudsman will not consider claims for compensation for damaged goods, poor packing or the adequacy of cover limits. Those go through the firm's insurer.",
      },
      {
        q: "How much does it cost to make a small claim?",
        a: "From £35 for claims up to £300 to £455 for claims between £5,000.01 and £10,000. Disputed claims of £10,000 or less go to free mediation first.",
      },
      {
        q: "What if the removal company damaged my walls or doors?",
        a: "Report it the same way, with photos taken before any repair. Damage to the property is usually covered by the firm's public liability insurance rather than its goods in transit cover.",
      },
    ],
  },
  {
    slug: "moving-house-in-the-rain",
    title: "Moving House in the Rain | Frank's Van and Man Manchester",
    h1: "Moving House in the Rain",
    metaDescription:
      "How often it rains on a Manchester move, keeping mattresses, sofas and electricals dry, protecting floors, and what your insurance says about bad weather.",
    updated: "2026-10-08",
    answer:
      "Rain rarely stops a move, but it changes how one is done: floors get covered, mattresses and sofas get wrapped, electricals stay dry and nothing is left on the pavement. Around Manchester it is worth planning for. The Met Office station at Woodford, in Stockport, averages about 156 days a year with at least 1mm of rain, and the driest months for a move are in spring.",
    sections: [
      {
        h2: "How Often It Rains on a Manchester Move",
        body: [
          "The Met Office publishes long-term averages for Woodford, in Stockport, the closest of its listed stations to south Manchester. Over 1991 to 2020 it averaged 868.4mm of rain a year and 156.49 days with 1mm or more. December is the wettest month at 96.98mm and has the most rain days, 15.70. March is the driest at 52.53mm, and May and April have the fewest rain days, 10.84 and 10.96.",
          "The hills to the north are wetter. Rochdale averaged 1,197.22mm and 170.75 rain days a year over the same period. So a spring move in south Manchester has the best odds of staying dry, and any move in the north of the county should assume a shower at some point. The Met Office publishes the full monthly table for Woodford.",
        ],
        bullets: [
          "Driest months for a move: March, April and May.",
          "Wettest: October to January, with December the worst.",
          "Check the Met Office warnings and the GOV.UK flood check the evening before.",
        ],
      },
      {
        h2: "Mattresses, Sofas and Anything Soft",
        body: [
          "Upholstery and mattresses soak up rain and are slow to dry out. Wrap mattresses in plastic covers before they leave the bedroom, keep sofas wrapped in blankets and covers between the door and the van, and load them from the doorstep straight in rather than staging them on the pavement.",
          "A soaked mattress is also a disposal problem. Manchester City Council's bulky collection will not take items that become too heavy after being left out in the rain, and gives mattresses as the example. If something soft is not coming with you, keep it under cover until it goes, or have it [taken away in the van](/services/rubbish-removal/) the same day.",
        ],
      },
      {
        h2: "Floors, Doorways and Slips",
        body: [
          "The Health and Safety Executive's guidance on slips makes a simple point that matters on a wet moving day: if rainwater gets onto a smooth surface inside or outside a building, it may create a slip hazard, and good entrance design such as canopies can help. A hallway of laminate or tiles can become the riskiest part of the route once the crew has walked in from the street a dozen times.",
          "So the floor gets covered before the first item moves, at both ends. Door and floor protection is part of a [house removal](/services/house-removals/) with us as standard, and on a wet day it matters more than anything else on the list. Keep a towel and a mat at the door, and leave the porch clear so the crew is not putting things down outside.",
        ],
      },
      {
        h2: "Electricals and Boxes",
        body: [
          "Televisions, computers and anything with a plug travel best in their original boxes or wrapped and bagged, and they go in the van early and deep, away from the doors. If an appliance does get properly soaked, Electrical Safety First's advice for flood-damaged appliances is not to use it until a registered electrician has checked it, and that is the safe rule to follow.",
          "Cardboard boxes are fine in a shower but not left standing in one. Close and tape the tops, stack them inside the door rather than on the path, and use plastic crates for anything you cannot afford to get wet, such as paperwork and photographs.",
        ],
      },
      {
        h2: "What Your Insurance Says About Bad Weather",
        body: [
          "Contents insurance can cover a move, but the wording is narrow. One council tenants' contents policy, for example, covers accidental loss or damage to contents while they are being moved by a professional removal contractor directly between the old home and the new one, which leaves open what happens to things you move yourself.",
          "Storm cover is narrower still. In April 2025 Which? examined 133 policy documents from 67 insurers and found that 20% contained a potentially unfair definition of storm, and that over half of those only covered damage where high winds were involved. Read the storm and removal sections of your own policy before moving day.",
        ],
      },
    ],
    related: [
      { label: "House removals in Manchester", href: "/services/house-removals/" },
      { label: "How long does moving house take?", href: "/moving-guides/how-long-does-moving-house-take/" },
      { label: "Damage during a house move", href: "/moving-guides/damage-during-house-move/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "Met Office: Woodford climate averages", href: "https://www.metoffice.gov.uk/research/climate/maps-and-data/location-specific-long-term-averages/gcqrrn04p" },
      { label: "Which?: storm definitions in home insurance", href: "https://www.which.co.uk/news/article/does-your-home-insurance-define-storms-unfairly-at8wa7q2inFI" },
    ],
    faqs: [
      {
        q: "Can you move house in the rain?",
        a: "Yes. Rain changes how a move is done rather than whether it happens: floors are covered, soft items are wrapped and loaded straight in, and nothing waits on the pavement.",
      },
      {
        q: "How often does it rain in Manchester?",
        a: "The Met Office station at Woodford averaged 156.49 days a year with 1mm of rain or more over 1991 to 2020, and 868.4mm a year in total. Rochdale, in the north of the county, averaged 1,197.22mm.",
      },
      {
        q: "What is the driest month to move house in Manchester?",
        a: "March is the driest month at Woodford by rainfall, at 52.53mm, and May and April have the fewest rain days. December is the wettest.",
      },
      {
        q: "How do I keep a mattress dry on moving day?",
        a: "Put it in a plastic mattress cover before it leaves the bedroom and load it straight from the door into the van. A soaked mattress is heavy, slow to dry and, in Manchester, may be refused by the council's bulky collection.",
      },
      {
        q: "Does insurance cover rain damage during a move?",
        a: "It depends on your policy. Some contents policies cover goods moved by a professional removal contractor, and storm definitions vary: Which? found 20% of 133 policies had a potentially unfair one.",
      },
      {
        q: "Should I cancel my move if it is raining?",
        a: "Usually not. Unless there is a Met Office warning or flooding on the route, a wet move is just a slower and more careful one.",
      },
    ],
  },
  {
    slug: "will-my-sofa-fit",
    title: "Will My Sofa Fit Through the Door? | Frank's Van and Man Manchester",
    h1: "Will My Sofa Fit Through the Door | How to Measure It",
    metaDescription:
      "How to check a sofa will fit: the diagonal depth measurement, how wide UK doors are, why new Greater Manchester homes are built wider, and what to do if it does not fit.",
    updated: "2026-10-08",
    answer:
      "Measure the sofa's diagonal depth, not just its depth, and compare it with the clear width of the narrowest door and turn on the way in. If the diagonal depth is less than the clear width, the sofa can usually be tipped on its back and turned through. New entrance doors in England must give at least 775mm of clear width, and new homes in Greater Manchester are built to a wider standard, but older terraces can be tighter.",
    sections: [
      {
        h2: "The Measurement That Matters Is Diagonal Depth",
        body: [
          "A sofa goes through a door on its back or on its end, not the way it sits in the room, so its depth is the wrong number. Darlings of Chelsea's fitting guide sets out the method: take the cushions off, lay a straight edge against the most prominent parts of the back and the arm, then measure from that line to the rear corner of the sofa. That is the diagonal depth.",
          "The rule in the same guide is that the diagonal depth must be less than the entry width, and the sofa's width must be less than either the door height or the clear space beyond the door. Loaf's guide adds the other way in: if the sofa will not tip through, a crew can try carrying it upright, which works if the door frame is taller than the sofa is long.",
        ],
        bullets: [
          "Measure the sofa's width, height, depth and diagonal depth.",
          "Measure the clear width and height of every door on the route, not just the front door.",
          "Measure the hallway beyond each door, because that is where the sofa has to turn.",
        ],
      },
      {
        h2: "How Wide UK Doors Actually Are",
        body: [
          "Building regulations set minimums for new homes, and they are measured as clear opening width, not the size of the door leaf. Approved Document M measures it from the inside face of the door when open to the inside edge of the frame or stop, which is always less than the door itself. Under the basic standard an entrance door must give at least 775mm, and a standard 826mm door leaf is deemed to provide that.",
          "Internal doors and corridors are paired: a 750mm door needs a 900mm corridor when you approach it head-on, or 1,200mm when you approach it from the side, while from the side a 775mm door needs a 1,050mm corridor and an 800mm door a 900mm one. The stricter accessible and adaptable standard, known as M4(2), raises the entrance door to 850mm.",
        ],
      },
      {
        h2: "New Greater Manchester Homes Are Built Wider",
        body: [
          "There is a local twist. Places for Everyone, the joint development plan for nine Greater Manchester districts, requires all new dwellings to meet the nationally described space standards and to be built to the accessible and adaptable M4(2) standard, unless specific site conditions make that impracticable. That means wider entrance doors and wider hallways in homes approved under the plan.",
          "The catch is that it only applies to new homes. An older terrace or semi was built long before either standard, and its front door and the turn at the bottom of the stairs are the usual tight spots. If you are moving from a new build into an older house, measure the old house, not the new one.",
        ],
      },
      {
        h2: "When It Does Not Fit",
        body: [
          "There are usually options before giving up. Loaf says its sofa legs can be removed, with standard legs between 3.5cm and 12cm tall, and some of its models have removable arms. Taking off the legs, the arms or the door itself is often the difference, and it is exactly what our [furniture dismantling service](/services/furniture-dismantling/) does.",
          "Buy before you measure and it can get expensive. SCS's terms say a redelivery charge applies where products have to be redelivered because of access problems, and Sofas & Stuff offers a £59 access check while making clear the customer remains responsible for access. A sofa made to your specification is also outside the usual 14-day right to cancel, because the Consumer Contracts Regulations exclude goods made to the consumer's specifications.",
        ],
        outro: [
          "If you are buying second-hand, measure before you agree to collect. Our [furniture delivery service](/services/furniture-delivery/) collects sofas from shops and private sellers, and we would rather know the door width before the van goes than after.",
        ],
      },
    ],
    related: [
      { label: "Furniture dismantling and assembly", href: "/services/furniture-dismantling/" },
      { label: "Furniture and single item delivery", href: "/services/furniture-delivery/" },
      { label: "How to prepare for a flat move", href: "/moving-guides/how-to-prepare-for-a-flat-move/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "GOV.UK: Approved Document M, volume 1", href: "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf" },
      { label: "GMCA: Places for Everyone joint development plan", href: "https://www.greatermanchester-ca.gov.uk/media/2drduk0t/places-for-everyone-joint-development-plan-dec24.pdf" },
    ],
    faqs: [
      {
        q: "How do I know if my sofa will fit through the door?",
        a: "Measure the sofa's diagonal depth with the cushions off and compare it with the clear width of the narrowest door on the route. If the diagonal depth is smaller, the sofa can usually be tipped through.",
      },
      {
        q: "How wide is a standard front door in the UK?",
        a: "For new homes in England, an entrance door must give at least 775mm of clear opening width under Approved Document M, and a standard 826mm door leaf is deemed to provide it. The stricter M4(2) standard requires 850mm.",
      },
      {
        q: "Are new build homes in Manchester easier for sofas?",
        a: "Usually. Places for Everyone requires new homes in the plan area to be built to the M4(2) accessible standard unless site conditions make it impracticable, which means wider doors and hallways than older terraces.",
      },
      {
        q: "What if my sofa does not fit?",
        a: "Try removing the legs, the arms or the door first. Some sofas have removable legs or arms, and a crew can often carry a sofa upright if the door frame is taller than the sofa is long.",
      },
      {
        q: "Can I return a sofa that does not fit?",
        a: "It depends. Retailers can charge for redelivery where access is the problem, and made-to-order sofas are outside the usual 14-day cancellation right because they are made to your specification.",
      },
      {
        q: "Will you take a sofa apart to get it in?",
        a: "Where it is built to come apart, yes. We remove legs, arms and doors as part of the move and put them back once the sofa is in the room.",
      },
    ],
  },
  {
    slug: "how-many-moving-boxes",
    title: "How Many Moving Boxes Do I Need? | Frank's Van and Man Manchester",
    h1: "How Many Boxes Do I Need to Move House | Counts by Home Size",
    metaDescription:
      "How many boxes you need to move house, by home size, why moving kits run short, how heavy a box should be, and what to do with the cardboard in Manchester.",
    updated: "2026-10-09",
    answer:
      "As a rough guide, Pickfords' published estimates are 10 to 15 boxes for a studio, 15 to 23 for a one bedroom flat, 23 to 40 for a two bedroom house and 40 to 65 for a three bedroom house. Moving kits sold for a one or two bedroom home often hold far fewer: Macfarlane's has 15. Buy a kit, count as you pack, top up the difference, and keep heavy things in small boxes.",
    sections: [
      {
        h2: "Box Counts by Home Size",
        body: [
          "Pickfords publishes a box estimate by home size and splits it by box size, which is the more useful part. Its figures are a starting point, not a promise: a minimalist two bedroom flat and a two bedroom house with a full loft are very different jobs.",
        ],
        bullets: [
          "Studio flat: 10 to 15 boxes.",
          "One bedroom flat: 15 to 23 boxes, of which 6 to 10 small, 6 to 8 medium and 3 to 5 large.",
          "Two bedroom house: 23 to 40 boxes, of which 10 to 15 small, 10 to 15 medium and 5 to 10 large.",
          "Three bedroom house: 40 to 65 boxes, with 15 to 25 each of small and medium.",
        ],
        outro: [
          "Notice that the small and medium boxes make up most of the count. That is deliberate: they are the sizes that stay liftable when they are full.",
        ],
      },
      {
        h2: "Why Moving Kits Run Short",
        body: [
          "Box kits are sold by home size, and they are usually smaller than the estimates. Macfarlane Packaging's kit for a one to two bedroom house contains 15 boxes: 5 small at 381 by 381 by 203mm, 7 medium at 406mm square, and 3 large at 610 by 457 by 457mm. Against Pickfords' estimate of 15 to 40 boxes for the same homes, that covers the bottom of the range.",
          "So treat a kit as the first delivery rather than the whole order. Start with the rooms that need the most small boxes, usually the books and the kitchen, and you will know within a day how many more you need.",
        ],
      },
      {
        h2: "Heavy Things Go in Small Boxes",
        body: [
          "Pickfords suggests fill weights of up to 5kg for a small box, 8kg for a medium and 10kg for a large. The reason is the person carrying it. The Health and Safety Executive's guidance on manual handling is clear that the law does not set specific weight limits, and that its own guideline figures are not safe limits for lifting and carrying. The highest figures in its lifting guidelines are 25kg for men and 16kg for women.",
          "A large box full of books can pass those figures. Books, tins, tools and records go in small boxes; duvets, cushions and lampshades go in the large ones. If you would rather not do the kitchen yourself, our [packing service](/services/packing-services/) can take the part of the house that takes longest and breaks most easily.",
        ],
        bullets: [
          "Small boxes: books, tins, tools, paperwork, records.",
          "Medium boxes: kitchenware, toys, shoes, small appliances.",
          "Large boxes: bedding, cushions, lampshades and other light, bulky things.",
        ],
      },
      {
        h2: "What to Do With the Cardboard in Manchester",
        body: [
          "Once you have unpacked, Recycle for Greater Manchester's advice for Manchester households is that cardboard goes in the paper and card bin, flattened to save space. Cardboard can also go to a household waste recycling centre, though Manchester's Reliance Street site is closed for major improvement works and is due to reopen in early 2027.",
          "A full house of boxes will not fit in one bin collection. Flatten and stack them somewhere dry, give good ones away to the next person moving, or have them taken in the van on the way out. Taking them to a recycling centre in a hired van needs a permit, one of the [self-drive rules](/services/loading-unloading/) that catch people out.",
        ],
      },
    ],
    related: [
      { label: "Packing services", href: "/services/packing-services/" },
      { label: "What size van do I need?", href: "/moving-guides/what-size-van-do-i-need-for-my-move/" },
      { label: "Moving house in the rain", href: "/moving-guides/moving-house-in-the-rain/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "HSE: manual handling at work (INDG143)", href: "https://www.hse.gov.uk/pubns/indg143.pdf" },
      { label: "Recycle for Greater Manchester: Manchester recycling", href: "https://recycleforgreatermanchester.com/recycling-in-your-area/manchester/" },
    ],
    faqs: [
      {
        q: "How many boxes do I need for a one bedroom flat?",
        a: "Pickfords estimates 15 to 23 boxes for a one bedroom flat: 6 to 10 small, 6 to 8 medium and 3 to 5 large.",
      },
      {
        q: "How many boxes do I need for a three bedroom house?",
        a: "Pickfords estimates 40 to 65 boxes for a three bedroom house, with 15 to 25 each of small and medium boxes.",
      },
      {
        q: "Is a moving kit enough?",
        a: "Often not. Macfarlane's kit for a one to two bedroom house has 15 boxes, which is the bottom of Pickfords' 15 to 40 estimate for those homes. Treat a kit as a starting point.",
      },
      {
        q: "How heavy should a moving box be?",
        a: "Pickfords suggests up to 5kg for a small box, 8kg for a medium and 10kg for a large. HSE's guideline figures for lifting go no higher than 25kg for men and 16kg for women, and HSE says they are not safe limits.",
      },
      {
        q: "Where do moving boxes go in Manchester?",
        a: "In the paper and card bin, flattened, or to a household waste recycling centre. Reliance Street is closed for improvement works until early 2027.",
      },
      {
        q: "What should go in small boxes?",
        a: "Anything heavy for its size: books, tins, tools, paperwork and records. Large boxes are for light, bulky things like bedding and cushions.",
      },
    ],
  },
  {
    slug: "moving-out-rental-checklist",
    title: "Moving Out of a Rental Checklist | Frank's Van and Man Manchester",
    h1: "Moving Out of a Rental Checklist for England",
    metaDescription:
      "A moving out checklist for renters in England under the 2026 rules: notice and rent, what a landlord can charge when you leave, getting the deposit back, and clearing out.",
    updated: "2026-10-09",
    answer:
      "Give notice in writing, keep paying rent until the tenancy ends, then leave the home as you found it and agree the deposit. Since 1 May 2026 a landlord cannot charge you more than the rent they would have received if you leave without full notice, and once you both agree how much deposit comes back, it must be returned within 10 days.",
    sections: [
      {
        h2: "Notice and Rent",
        body: [
          "Private tenancies agreed in England from 1 May 2026 are rolling, and you end one by giving [two months' notice in writing](/moving-guides/how-long-does-moving-house-take/), on the day the rent is due or the day before. Two points catch people out. You keep paying rent during the notice period, right up to the day the tenancy ends. And if you change your mind after giving notice, you can only stay if your landlord agrees in writing.",
          "The government's old \"How to rent\" guide was withdrawn on 1 May 2026. The current guidance is GOV.UK's guide to assured periodic tenancies for tenants.",
        ],
      },
      {
        h2: "What Your Landlord Can Charge When You Leave",
        body: [
          "The government's guidance on tenancy fees, published on 1 May 2026, sets out what can and cannot be charged. If you leave without giving the right notice, the charge cannot be more than the rent the landlord would have received had you given the right amount of notice. If you lose a key, the landlord can recover the cost of replacing it, but must give you written evidence that the cost is reasonable.",
          "Late rent has limits too. A fee can only be charged once rent is at least two weeks overdue, and the maximum rate is 3% above the Bank of England's base rate, applied only to the overdue amount. Anything outside those rules can be challenged before it comes out of your deposit.",
        ],
      },
      {
        h2: "Getting Your Deposit Back",
        body: [
          "Your deposit should be protected in one of three government-backed schemes: the Deposit Protection Service, mydeposits or the Tenancy Deposit Scheme. Once you and your landlord agree how much you will get back, it must be returned within 10 days.",
          "If you cannot agree, the scheme offers a free dispute resolution service. Using it is optional and both of you have to agree to it, but if you do, the decision on the deposit is final, so the evidence matters. The checklist below is the evidence to collect.",
        ],
        bullets: [
          "Photograph every room, the inside of the oven and fridge, and any marks, on the last day.",
          "Take meter readings, with photos, and send them to the suppliers.",
          "Return every key you were given, and get a receipt or a message confirming it.",
          "Compare the home with the check-in inventory, room by room.",
          "Send your forwarding address to the landlord in writing.",
        ],
      },
      {
        h2: "Clearing the Last Things",
        body: [
          "Anything left behind is something a landlord may charge to clear. Manchester City Council offers one free bulky collection a year of up to three items, but it needs booking ahead and the items have to be on the pavement by 7am on the day, which may not fit the last day of a tenancy.",
          "If the timing is tight, a [clearance in the van](/services/rubbish-removal/) on moving day takes the last things away at the same time as the move. If there is a wardrobe or a bed frame that has to come apart to get out, we can [take it apart](/services/furniture-dismantling/) as part of the same job, so the room is empty when the landlord walks in.",
        ],
      },
    ],
    related: [
      { label: "How long does moving house take?", href: "/moving-guides/how-long-does-moving-house-take/" },
      { label: "Keys delayed on moving day", href: "/moving-guides/keys-delayed-moving-day/" },
      { label: "Student moves in Manchester", href: "/services/student-moves/" },
      { label: "Get a quote", href: "/quote/" },
    ],
    sources: [
      { label: "GOV.UK: fees you can charge as part of a tenancy", href: "https://www.gov.uk/guidance/fees-you-can-charge-as-part-of-a-tenancy" },
      { label: "GOV.UK: tenancy deposit protection", href: "https://www.gov.uk/tenancy-deposit-protection" },
    ],
    faqs: [
      {
        q: "Do I have to pay rent during my notice period?",
        a: "Yes. GOV.UK's guidance for tenants says you need to continue to pay rent during the notice period before the tenancy ends.",
      },
      {
        q: "Can my landlord charge me for leaving early?",
        a: "Only up to a limit. Under the guidance published on 1 May 2026, the charge cannot be more than the rent the landlord would have received had you given the right notice.",
      },
      {
        q: "How long does my landlord have to return my deposit?",
        a: "Within 10 days of you both agreeing how much you will get back. If you cannot agree, the deposit stays protected and the scheme's free dispute service can decide.",
      },
      {
        q: "Can I change my mind after giving notice?",
        a: "Only if your landlord agrees in writing. Otherwise the tenancy ends on the date your notice runs out.",
      },
      {
        q: "Is the How to rent guide still current?",
        a: "No. GOV.UK withdrew it on 1 May 2026 and points tenants to its guidance on assured periodic tenancies instead.",
      },
      {
        q: "What should I photograph when I move out?",
        a: "Every room, the inside of the oven and fridge, any marks or damage, and the meter readings, all on the last day, so you have evidence if the deposit is disputed.",
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
