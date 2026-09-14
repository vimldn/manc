import { priceRows } from "./pricing";

export type Faq = { q: string; a: string };

/** Figures come from pricing.ts so page copy never drifts from the rate card. */
const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// `bullets` renders as a list under the paragraph; `outro` is a closing
// paragraph after it. Both optional, so existing prose-only sections are
// unaffected.
export type Section = {
  h2: string;
  body: string;
  bullets?: string[];
  outro?: string;
  // An H3 block nested under this section. Body text may carry inline
  // [label](/path/) links, resolved by RichText.
  sub?: { h3: string; body: string };
};

export type Service = {
  slug: string;
  navLabel: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string;
  sections: Section[];
  faqs: Faq[];
  related: string[]; // slugs
  // Schema overrides. serviceType defaults to the H1 and areaServedSchema to
  // Manchester; set these only where the real coverage differs.
  serviceType?: string;
  areaServedSchema?: { "@type": string; name: string };
  // Heading for the genuine-jobs block near the FAQs. Defaults to
  // "Recent <navLabel> Moves" when not set.
  recentMovesHeading?: string;
};

export const services: Service[] = [
  {
    slug: "house-removals",
    navLabel: "House Removals",
    h1: "Man and Van House Removals in Manchester",
    title: "Man and Van House Removals in Manchester | Man and Van Manchester",
    metaDescription:
      "Man and van house removals in Manchester. Careful loading, wrapped furniture and fair prices across Didsbury, Chorlton, Salford and all of Greater Manchester. Call for a quote.",
    intro:
      "Moving house in Manchester is stressful enough without worrying about the van. Man and Van Manchester handles full house removals across the city, from a one bedroom terrace in Chorlton to a family home in Didsbury. We turn up on time, wrap your furniture properly and get everything to the new place without the drama. If you want a straight answer on price, call for a quote and we will talk you through it clearly.",
    sections: [
      {
        h2: "House Removals Done Properly",
        body:
          "A house move is more than shifting boxes. We protect doorframes, wrap sofas and mattresses, and stack the van so nothing shifts on the way. Whether you are moving within Manchester or heading out to nearby areas like Sale or Stretford, we plan the job around your day, not ours. Most local house moves are done in a single trip, and we will tell you honestly if you need a bigger van or a second run.",
      },
      {
        h2: "What We Move and What We Handle",
        body:
          "We move beds, wardrobes, sofas, white goods, boxes, garden furniture and the awkward items that never fit anywhere. We dismantle and reassemble flat pack furniture when needed and bring straps, blankets and trolleys as standard. If you have a piano, a large American fridge or anything unusually heavy, mention it when you book so we send the right van and the right number of hands.",
      },
      {
        h2: "Parking, Access and Manchester Streets",
        body:
          "Manchester terraces, tight back streets and permit zones can slow a move down if nobody plans for them. We know the parking realities in areas like Fallowfield, Withington and the city centre, and we will ask about access at both ends before the day so there are no surprises. If a permit or a bay suspension is needed, we will flag it early.",
      },
      {
        h2: "Clear Pricing, No Hidden Extras",
        body:
          "We quote on the size of the move, the distance and how many hours it is likely to take. No vague hourly traps and no fuel surprises added at the end. Ask for a quote and you get a figure you can plan around. If your move is smaller, our man and van hire option may work out cheaper, and we will tell you if that is the better fit.",
      },
    ],
    faqs: [
      {
        q: "How much does a house removal in Manchester cost?",
        a: "It depends on the size of your home, the distance and access at both ends. Give us a quick description of what you are moving and we will give you a clear quote with no hidden extras.",
      },
      {
        q: "Do you provide packing materials?",
        a: "We bring blankets, straps and trolleys as standard to protect your furniture. If you need boxes or full packing help, ask when you book and we will sort it.",
      },
      {
        q: "Can you move me on a weekend?",
        a: "Yes. We cover Manchester seven days a week, including weekends and evenings. Weekend slots book up fast, so get in touch early.",
      },
    ],
    related: ["flat-apartment-removals", "man-and-van-hire", "long-distance-removals"],
  },
  {
    slug: "flat-apartment-removals",
    navLabel: "Flat & Apartment Removals",
    h1: "Flat and Apartment Removals in Manchester",
    title: "Flat & Apartment Removals in Manchester | Man and Van Manchester",
    metaDescription:
      "Man and van flat and apartment removals in Manchester. Stairs, lifts, city centre high rises and tight parking sorted. Serving Manchester and nearby areas. Call for a quote.",
    intro:
      "Flat moves have their own headaches, and most of them involve stairs, lifts and nowhere to park. Man and Van Manchester moves flats and apartments across the city, from city centre high rises to converted terraces in Hulme and Old Trafford. We are used to narrow staircases, booked lift slots and loading bays, so your move goes smoothly instead of turning into an afternoon of hauling boxes.",
    sections: [
      {
        h2: "Built for Stairs, Lifts and High Rises",
        body:
          "City centre apartment blocks often have goods lifts you need to book and loading bays with time limits. We plan around them so we are not stuck circling the block. For walk up flats in areas like Fallowfield and Rusholme, we bring the manpower to carry safely down tight stairs without scuffing walls or dropping your telly.",
      },
      {
        h2: "One Bedroom Flats and Studios",
        body:
          "Most studio and one bedroom flat moves fit in a single van load. That keeps the cost down and the day short. We wrap the mattress, box up the loose bits if you have not already, and get you into the new place the same day. This is one of our most requested and most affordable jobs.",
      },
      {
        h2: "City Centre Parking and Access",
        body:
          "Parking in Manchester city centre is the number one thing that trips up a flat move. We know which bays and bus lanes to avoid and how to work around a timed loading bay. Tell us the block and the floor when you book and we will plan the run so you are not paying for wasted time.",
      },
      {
        h2: "Fair Prices for Smaller Moves",
        body:
          "Because flat moves are usually smaller, they are usually cheaper. We quote on what you are actually moving rather than a one size fits all figure. If it is only a few large items, our furniture and single item delivery service may be the better call, and we will point you to it.",
      },
    ],
    faqs: [
      {
        q: "Do you charge extra for stairs or no lift?",
        a: "We factor stairs and access into the quote up front so there are no surprises on the day. Just tell us the floor and whether there is a lift when you get in touch.",
      },
      {
        q: "Can you move a studio flat in one trip?",
        a: "Most studios and one bedroom flats go in a single van load, which keeps the price down. We will confirm when we hear what you are moving.",
      },
      {
        q: "Do I need to book a lift or loading bay?",
        a: "If your building has a bookable goods lift or a timed loading bay, book it if you can and let us know the slot. If you are not sure, we will help you work it out.",
      },
    ],
    related: ["house-removals", "furniture-delivery", "student-moves"],
  },
  {
    slug: "man-and-van-hire",
    navLabel: "Man and Van Hire",
    h1: "Man and Van Hire in Manchester",
    title: "Man and Van Hire in Manchester | Man and Van Manchester",
    metaDescription:
      "Flexible man and van hire in Manchester by the hour or the job. One or two movers, a clean van and fair rates across Greater Manchester. Call for a quote today.",
    intro:
      "Sometimes you do not need a full removals firm, you just need a van and a pair of hands for a couple of hours. That is exactly what man and van hire in Manchester is for. Book us by the hour or by the job, add a second mover if the load is heavy, and get your stuff shifted without paying for services you do not need. It is the flexible, cheap man and van option locals in Manchester ask for most.",
    sections: [
      {
        h2: "Hire by the Hour or by the Job",
        body:
          "For a quick job, hourly hire keeps the cost down and gives you full flexibility. For a bigger or longer move, a fixed job price gives you certainty. We will tell you which one works out cheaper for what you are doing rather than pushing the more expensive option.",
      },
      {
        h2: "One Mover or Two",
        body:
          "One man and a van is plenty for boxes, small furniture and single item runs. Add a second mover when there are heavy wardrobes, sofa beds or a lot to carry up stairs. Getting the crew size right first time is the difference between a smooth job and a slow one, so tell us what you are moving.",
      },
      {
        h2: "Clean, Well Kept Vans",
        body:
          "Our vans are clean, insured and properly equipped with blankets, straps and a trolley. Nobody wants their sofa loaded into a filthy van, and we would not do that to you. We serve all of Manchester and nearby areas including Salford, Prestwich and Stretford.",
      },
      {
        h2: "Cheap Man and Van Without the Catch",
        body:
          "Cheap should not mean unreliable. We keep our rates competitive by being efficient, not by cutting corners or hiding fees. Ask for a quote and you get a clear rate before we start. That is why so many Manchester customers come back to us and send their friends.",
      },
    ],
    faqs: [
      {
        q: "How much is man and van hire per hour in Manchester?",
        a: "Our hourly rate depends on whether you need one or two movers and when you book. Tell us the job and we will give you a clear rate before anything starts.",
      },
      {
        q: "Is there a minimum booking?",
        a: "Most jobs have a short minimum so it is worth our while to turn out. We will be upfront about it when you call so there are no surprises.",
      },
      {
        q: "Can I help load to save money?",
        a: "Of course. Plenty of customers muck in to keep the time down. Just leave the heavy and awkward items to us so nothing gets damaged.",
      },
    ],
    related: ["house-removals", "furniture-delivery", "rubbish-removal"],
  },
  {
    slug: "rubbish-removal",
    navLabel: "Rubbish Removal",
    h1: "Man and Van Rubbish Removal in Manchester",
    title: "Man and Van Rubbish Removal in Manchester | Man and Van Manchester",
    metaDescription:
      "Man and van rubbish removal and house clearance in Manchester. Responsible waste clearance for furniture, junk and garden waste. Serving Manchester. Call for a quote.",
    intro:
      "Got a pile of junk, an old sofa or a full house to clear? Our man and van rubbish removal service in Manchester loads it, takes it away and disposes of it responsibly, so you are not stuck making trips to the tip. We clear single items, garages, gardens and full properties across Manchester and nearby areas like Cheetham Hill and Wythenshawe. Point at it, and we will get rid of it.",
    sections: [
      {
        h2: "We Load It, You Relax",
        body:
          "Unlike a skip, you do not lift a thing. We carry the rubbish out of the house, garage or garden ourselves and load it into the van. That makes it ideal for heavy items like sofas, mattresses, fridges and broken furniture that you simply cannot shift on your own.",
      },
      {
        h2: "Responsible Disposal",
        body:
          "Household waste has to be passed to a registered waste carrier, and fly tipping carries heavy fines that trace back to the householder. We dispose of what we collect through the proper routes and recycle where we can. If you would like to see our waste carrier registration before we take anything away, just ask.",
      },
      {
        h2: "House and Garage Clearances",
        body:
          "Clearing a full house after a move, a tenancy or a bereavement is a big job, and we handle it with care. We can clear one room or the whole property, including lofts and garages. Tell us roughly how much there is and we will bring the right van and enough hands.",
      },
      {
        h2: "Only Pay for What We Take",
        body:
          "We price on volume, so you only pay for the space your rubbish takes up in the van. That is usually far cheaper than hiring a skip and a lot less hassle. Ask for a quote and we will give you a clear figure for the clearance.",
      },
    ],
    faqs: [
      {
        q: "How do you dispose of the waste?",
        a: "Household waste must be handled by a registered waste carrier. We dispose of what we collect through the proper routes and recycle where we can. Ask us for our waste carrier registration details before booking a clearance.",
      },
      {
        q: "How is rubbish removal priced?",
        a: "We price on how much space your waste takes up in the van, so you only pay for what we actually take. Tell us what you have and we will quote it.",
      },
      {
        q: "Can you clear a full house?",
        a: "Yes. We handle single items right up to full house and garage clearances across Manchester. Let us know the size and we will bring the right van and crew.",
      },
    ],
    related: ["man-and-van-hire", "furniture-delivery", "house-removals"],
  },
  {
    slug: "furniture-delivery",
    navLabel: "Furniture & Single Items",
    h1: "Furniture and Single Item Delivery in Manchester",
    title: "Furniture & Single Item Delivery in Manchester | Man and Van Manchester",
    metaDescription:
      "Man and van furniture delivery and single item collection in Manchester. Marketplace pickups, sofas, beds and white goods moved same day. Call for a quote.",
    intro:
      "Bought a sofa on Facebook Marketplace? Picking up a wardrobe from IKEA or a bed from across town? Our furniture and single item delivery service in Manchester collects and delivers large items quickly and carefully. It is the cheap man and van answer for those jobs that are too big for the car but too small for a full removal. We cover Manchester and nearby areas including Chorlton, Salford and Old Trafford.",
    sections: [
      {
        h2: "Marketplace and Shop Collections",
        body:
          "We collect from Facebook Marketplace, Gumtree, eBay and the big furniture shops around Manchester. Send us the pickup and drop off postcodes and a photo of the item, and we will sort the collection so you do not have to borrow a van or bribe a mate.",
      },
      {
        h2: "One Item or a Few",
        body:
          "A single sofa, a fridge, a bed frame or a couple of large boxes, we handle them all. Because it is a small job it stays cheap, and we can often fit you in the same day or next day depending on the run.",
      },
      {
        h2: "Careful Handling and Quick Turnaround",
        body:
          "We wrap and strap items so they arrive in the same condition they left in. We know how to get a two seater up a Manchester staircase without taking a chunk out of the wall. If the item needs dismantling to get it out, we can usually help with that too.",
      },
      {
        h2: "Simple, Fair Pricing",
        body:
          "Single item runs are priced on the distance and how awkward the item is to handle. Give us the two postcodes and a rough description and we will give you a quick quote. No need to book a full removal for one settee.",
        sub: {
          h3: "Single Item Delivery Prices",
          body:
            "Single-item deliveries currently [start from £40](/prices/). The final price depends on the collection and delivery distance, the size and weight of the item, stairs or difficult access and how urgently the collection is needed. For the quickest quote, send us both postcodes and a photo of the item.",
        },
      },
    ],
    faqs: [
      {
        q: "Can you collect a Marketplace purchase for me?",
        a: "Yes, that is one of our most common jobs. Send the collection and delivery postcodes and a photo of the item and we will quote it.",
      },
      {
        q: "Do you deliver same day?",
        a: "Often yes, depending on where the item is and how the day is running. Get in touch and we will tell you the soonest slot.",
      },
      {
        q: "Will you help carry it upstairs?",
        a: "Yes. We carry the item to the room you want it in, not just to the front door. Let us know if there are stairs so we bring enough hands.",
      },
    ],
    related: ["man-and-van-hire", "flat-apartment-removals", "student-moves"],
  },
  {
    slug: "student-moves",
    navLabel: "Student Moves",
    h1: "Student Man and Van in Manchester",
    title: "Student Man and Van in Manchester | Man and Van Manchester",
    metaDescription:
      "Cheap student man and van in Manchester. Halls, house shares and end of tenancy moves around Fallowfield, Withington and the universities. Call for a quote.",
    intro:
      "Manchester is a student city, and student moves have their own rhythm: halls to a house share, room to room, or the great August scramble when everyone changes address at once. Our student man and van service is the cheap, no fuss way to shift your stuff around Fallowfield, Withington, Rusholme and the city centre without roping in your flatmates and a hired estate car.",
    sections: [
      {
        h2: "Halls, House Shares and Room Swaps",
        body:
          "Whether you are leaving halls, moving into a shared house or just swapping rooms, we handle the boxes, the bed and the inevitable mountain of clothes. We know the student areas well, so we plan around the tight terraced streets of Fallowfield and the parking around the universities.",
      },
      {
        h2: "Split the Cost With Housemates",
        body:
          "Moving on the same day as your housemates? Share the van and split the cost. It is often the cheapest way for a whole house to move at once, and we can do several drops on one run if the addresses are close together.",
      },
      {
        h2: "End of Tenancy Timing",
        body:
          "Student tenancies tend to end on the same few days in the summer, and those slots fill up fast. Book early for late June through September and you will not be left scrambling. We will work around your checkout time so you are out before the deposit is at risk.",
      },
      {
        h2: "Cheap and Simple",
        body:
          "Students want cheap and reliable, and that is exactly what we aim for. Clear price, on time, sorted. Ask for a quote and we will keep it as low as we sensibly can for the job.",
      },
    ],
    faqs: [
      {
        q: "How much is a student move in Manchester?",
        a: "Student moves are usually small and cheap. Tell us where you are moving from and to and roughly what you have, and we will give you a low, clear quote.",
      },
      {
        q: "Can several of us share one booking?",
        a: "Yes, and it usually works out cheapest that way. We can do multiple drops on one run if the addresses are close by.",
      },
      {
        q: "Do you get busy at the end of tenancy?",
        a: "Very. Late June to September is the peak, so book as early as you can to get the slot you want.",
      },
    ],
    related: ["flat-apartment-removals", "furniture-delivery", "man-and-van-hire"],
  },
  {
    slug: "office-removals",
    navLabel: "Office & Business",
    h1: "Office and Business Removals in Manchester",
    title: "Office & Business Removals in Manchester | Man and Van Manchester",
    metaDescription:
      "Man and van office and business removals in Manchester. Desks, IT, stock and small office moves handled with minimal downtime across Greater Manchester. Call for a quote.",
    intro:
      "Moving an office is not just a bigger house move, it is a move where downtime costs money. Our office and business removals service in Manchester shifts desks, chairs, IT kit and stock quickly and carefully, often out of hours, so your business is back up and running fast. We cover the city centre, Salford Quays and business parks across Greater Manchester.",
    sections: [
      {
        h2: "Small Office and Studio Moves",
        body:
          "We are ideal for small offices, studios, salons and shops that do not need a huge corporate removals contract. A man and van, or two, gets you moved without the enterprise price tag. We handle desks, filing, stock and the awkward bits that always get left to the end.",
      },
      {
        h2: "Out of Hours to Cut Downtime",
        body:
          "The best time to move a business is when it is closed. We can work evenings or weekends so you lose as little trading time as possible. Tell us your quiet window and we will plan the move around it.",
      },
      {
        h2: "IT, Stock and Equipment",
        body:
          "Screens, servers and equipment need proper handling. We wrap and secure IT kit and keep everything labelled so it goes back where it belongs at the other end. If you need items dismantled and rebuilt, we can help with that as part of the job.",
      },
      {
        h2: "Priced for Small Business",
        body:
          "We quote clearly on the size of the move and the hours involved, so you can budget it properly. No corporate padding. Ask for a quote and we will give you a straight figure for your office move in Manchester.",
      },
    ],
    faqs: [
      {
        q: "Can you move our office at the weekend?",
        a: "Yes. Out of hours and weekend moves are exactly what we recommend for businesses, to keep downtime to a minimum.",
      },
      {
        q: "Do you handle IT equipment?",
        a: "We wrap and secure screens, servers and equipment and keep everything labelled so reinstallation is quick at the new site.",
      },
      {
        q: "Is this suitable for a small shop or studio?",
        a: "Definitely. Small offices, shops, salons and studios are our sweet spot. Tell us what you have and we will quote it.",
      },
    ],
    related: ["house-removals", "man-and-van-hire", "long-distance-removals"],
  },
  {
    slug: "long-distance-removals",
    navLabel: "Long Distance",
    h1: "Long Distance Man and Van from Manchester",
    title: "Long Distance Man and Van from Manchester to London & UK | Man and Van Manchester",
    metaDescription:
      "Long distance man and van from Manchester to London and anywhere in the UK. Fixed prices, careful handling and one clear point of contact. Call for a quote.",
    intro:
      "Moving further than across town? We run long distance man and van jobs from Manchester to London and anywhere else in the UK. It is one of our most requested routes, whether you are a student heading south, a professional relocating, or someone who bought furniture at the other end of the country. One driver, one van, one clear price, door to door.",
    sections: [
      {
        h2: "Manchester to London Man and Van: Quick Answer",
        body:
          "Need a man and van from Manchester to London? We provide fixed-price, door-to-door long-distance moves from Manchester to London and across the UK. Your belongings stay in the same van from collection to delivery rather than being transferred between depots. To get a firm quote, send us both postcodes, your preferred moving date, details of stairs or lifts and a rough list or photos of what you are moving.",
      },
      {
        h2: "Manchester to London and Back",
        body:
          "The Manchester to London run is our most popular long distance route, and we do it both ways: man and van London to Manchester and Manchester to London. Because it is a single driver and van doing the whole journey, your belongings are not passed between depots or left sitting on a pallet. They go straight from your old door to your new one.",
      },
      {
        h2: "Fixed Prices for Long Journeys",
        body:
          "Long distance jobs are priced as a fixed figure based on the route, the load and the mileage, so you know the cost before we set off. That is far clearer than an hourly rate that balloons in motorway traffic. Ask for a quote with both postcodes and what you are moving and we will give you a firm price.",
      },
      {
        h2: "What We Need to Price a Long-Distance Move",
        body: "We can price most long-distance moves without a home visit. Send us:",
        bullets: [
          "Collection postcode",
          "Delivery postcode",
          "Preferred moving date",
          "Rough list of furniture, boxes and other items",
          "Photos or a short video if the load is difficult to describe",
          "Floor number at both properties",
          "Whether there is a lift",
          "Parking or loading restrictions",
          "Any unusually heavy or awkward items",
          "Any extra collection or delivery stops",
        ],
        outro:
          "We then match the van and number of movers to the job and give you a clear price before the move is booked.",
      },
      {
        h2: "Anywhere in the UK",
        body:
          "It is not just London. We take jobs from Manchester to Birmingham, Leeds, Liverpool, Bristol, the South Coast and beyond. If you can name the two postcodes, we can price the run. Longer jobs may be best booked a little in advance to lock in the day.",
      },
      {
        h2: "One Point of Contact",
        body:
          "With a big national firm you get a call centre. With us you get the person doing the move. That means fewer crossed wires and someone who actually knows where your stuff is. It is why customers trust us with the longer, higher stakes jobs.",
      },
    ],
    faqs: [
      {
        q: "How much is a man and van from Manchester to London?",
        a: "It is a fixed price based on your load and the exact route. Send both postcodes and a description of what you are moving and we will give you a firm quote.",
      },
      {
        q: "Do you do the London to Manchester direction too?",
        a: "Yes, we run the route both ways. Whether you are moving down to London or up to Manchester, we can price it.",
      },
      {
        q: "Do I need to book long distance moves in advance?",
        a: "It helps. Long journeys take up a full day, so booking ahead means you get the date you want at the best price.",
      },
    ],
    related: ["house-removals", "office-removals", "furniture-delivery"],
    serviceType: "Long-distance removals and man and van",
    areaServedSchema: { "@type": "Country", name: "United Kingdom" },
    recentMovesHeading: "Recent Manchester to London Moves",
  },
  {
    // Transport to and from storage only. The business does not run a storage
    // facility, so this page must never say or imply that it stores anything.
    slug: "student-storage-manchester",
    navLabel: "Student Storage Moves",
    h1: "Student Storage Moves in Manchester",
    title: "Student Storage Moves in Manchester | Man and Van Manchester",
    metaDescription:
      "Student storage moves in Manchester: we move your room out of halls or a house share into the storage unit you book, then back again for the new contract. Call for a quote.",
    intro:
      "Student storage in Manchester is two van runs with a gap in the middle: out of halls or a house share when the contract ends, into a storage unit or somewhere safe, and back out again when the next place is ready. We do both runs. We do not run a storage facility ourselves, so you book the unit and we handle the loading, the lifting and the driving at each end. The gap between contracts is wider than most students expect, and in 2026 it changed shape for anyone in a shared house.",
    sections: [
      {
        h2: "Why Manchester Students End Up Needing Storage",
        body:
          "Hall contracts finish in early summer and the next tenancy rarely starts the day after. At the University of Manchester, most 41 week halls end on 1 July 2027 and most 42 week halls end between 3 and 11 July 2027, while the new year's rooms are not handed over until mid September. Manchester Met's 2025/26 halls ran for 44 weeks and ended on 18 July 2026. At Salford's Peel Park Quarter the 42 week contract ends on 22 June 2027. Anyone going home for the summer, or starting a house share in September, has around two months with belongings and nowhere to put them.",
        bullets: [
          "University of Manchester: most 41 week halls end on 1 July 2027 and most 42 week halls between 3 and 11 July.",
          "Manchester Met: 44 week contracts, with 2025/26 rooms cleared by 10am on 18 July 2026.",
          "University of Salford: Peel Park Quarter's 42 week contract ends on 22 June 2027.",
        ],
        outro:
          "Each campus page has the hall by hall detail, for the [University of Manchester](/student-removals/university-of-manchester/), [Manchester Met](/student-removals/manchester-metropolitan-university/) and the [University of Salford](/student-removals/university-of-salford/).",
      },
      {
        h2: "What Happens to Things Left in Halls",
        body:
          "Leaving boxes behind is not a plan. University of Manchester halls do not have storage areas, belongings are not insured outside the dates of your licence agreement, and if anything is left behind the university charges daily until the room is cleared and may dispose of what is not collected. Manchester Met gives you seven days' notice to collect anything left, after which it can dispose of it, and a room booked for the summer can be cleared without notice. Its rooms have to be empty by 10am on the last day of the contract.",
        outro:
          "So the storage run needs booking for the final day of the contract or earlier, not the day after. The University of Manchester sets this out on its [moving out guidance](https://www.residents.manchester.ac.uk/moving-out/moving-guidance/), which is worth reading before you pick a date.",
      },
      {
        h2: "House Shares Changed on 1 May 2026",
        body:
          "Since 1 May 2026, all assured shorthold tenancies in England have become assured periodic tenancies, and landlords can no longer use section 21. For students in shared houses that removes the neat twelve month contract with a fixed end date. Tenants can give notice to leave, and landlords need a legal ground to take the property back.",
        sub: {
          h3: "The Student Possession Ground",
          body:
            "One of those grounds is written for student houses. A landlord can recover a house in multiple occupation let to full time students so it can be relet to students for the next academic year, provided the landlord gave written notice of this at the start of the tenancy, and the possession date falls between 1 June and 30 September. It does not apply to purpose built student accommodation. In practice it means some Manchester house shares will be handed back in the summer, which is exactly the gap a storage run fills. The government summarises the rules in its [Renters' Rights Act overview](https://www.gov.uk/guidance/renters-rights-act-an-overview-for-landlords).",
        },
      },
      {
        h2: "A Storage Unit or a Box Service",
        body:
          "There are two ways to store a student room. A box service collects packed boxes from your room and charges by the week, which suits someone with a suitcase and a few boxes going home for the summer. A self storage unit plus a van suits anyone with furniture, a desk, a bike or a whole house of housemates sharing one unit, because the cost of the unit is split and everything goes in one run.",
        bullets: [
          "Choose a box service for a handful of boxes and no furniture.",
          "Choose a unit and a van for furniture, bikes, or three or four housemates sharing.",
          "Split one unit between housemates and book one van run to collect from each room.",
        ],
        outro:
          "Self storage branches close to the student areas include sites in Hulme, Old Trafford, Salford and the city centre. Pick one close to where you will be living in September rather than where you are leaving, because the return run is the one that happens during the busiest week of the year.",
      },
      {
        h2: "What to Ask the Storage Site Before You Book",
        body:
          "Storage sites have their own rules, and the van has to fit around them. A unit that looked cheap online can add an hour to the job if the loading bay is round the back and the lift is booked out.",
        bullets: [
          "What are the access hours, and are they the same at weekends?",
          "Is there a covered loading bay, and how close is it to the unit?",
          "Does the site provide trolleys, and do upper floor units need a lift booking?",
          "What size unit fits a single room, and what fits a four person house?",
          "Can someone else collect on your behalf if you have already gone home?",
        ],
        outro:
          "Send us the answers with your quote request and we will plan the timing so the van arrives inside the access hours with the load packed in the order it goes in.",
      },
      {
        h2: "What a Student Storage Move Costs",
        body:
          "Storage moves are priced on time, like any local job. One mover with a small van starts from " +
          rate("one-small") +
          ", one mover with a large van from " +
          rate("one-large") +
          ", and two movers with a large van from " +
          rate("two-large") +
          ". A handful of boxes or a single item into a unit can be done as a single item job from " +
          rate("single-item") +
          ".",
        outro:
          "Remember to budget for two runs, one into storage and one back out, plus the storage site's own charge, which is separate from ours. Sharing a van with housemates on both runs is the cheapest way to do it. The full breakdown is on our [prices page](/prices/), and the [van size guide](/our-vans/) helps work out which van a room needs.",
      },
    ],
    faqs: [
      {
        q: "Do you store belongings yourselves?",
        a: "No. We do not run a storage facility. You book the storage unit or box service, and we move your things into it at the end of your contract and back out when the new one starts.",
      },
      {
        q: "Can I leave my things in University of Manchester halls over the summer?",
        a: "No. The university says halls do not have storage areas and belongings are not insured outside your licence dates. Anything left behind is charged daily until cleared and may be disposed of.",
      },
      {
        q: "When do I have to be out of Manchester Met halls?",
        a: "By 10am on the last day of your contract. In 2025/26 that was 18 July 2026. Belongings left behind can be disposed of after seven days' notice.",
      },
      {
        q: "Has the Renters' Rights Act changed student house moves?",
        a: "Yes. Since 1 May 2026, tenancies in England are periodic rather than fixed term. A landlord of a student house in multiple occupation who gave written notice at the start can take it back for new students between 1 June and 30 September.",
      },
      {
        q: "Can housemates share one storage unit and one van?",
        a: "Yes, and it is usually the cheapest way to do it. We collect from each room on one run and load everything into the shared unit.",
      },
      {
        q: "When should I book the return run in September?",
        a: "As early as possible. Mid September is the busiest moving week in Manchester because the halls hand over rooms across the same few days.",
      },
      {
        q: "What does a storage move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and a single item job from " +
          rate("single-item") +
          ". Budget for two runs and for the storage site's own charge, which is separate from ours.",
      },
    ],
    related: ["student-moves", "man-and-van-hire", "furniture-delivery"],
    serviceType: "Student storage moves",
    recentMovesHeading: "Recent Student Storage Moves",
  },
  {
    // Same-day availability is never guaranteed (see serviceDetails). This page
    // must say availability is confirmed when you call, not promise a van.
    slug: "same-day-man-and-van",
    navLabel: "Same-Day Man and Van",
    h1: "Same-Day Man and Van in Manchester",
    title: "Same-Day Man and Van in Manchester | Man and Van Manchester",
    metaDescription:
      "Same-day man and van in Manchester when a van and crew are free. Loading rules, kerb blips and late completions explained, with prices from our rate card. Call to check today.",
    intro:
      "A same-day man and van in Manchester comes down to two questions: is a van and crew free today, and is there somewhere legal to stop at both ends. We answer the first as soon as you call, and we plan the second before we set off. Same-day slots depend on how the day's runs fall, so we never promise one before we have checked, but a single item, a flat or a room is often something we can fit in.",
    sections: [
      {
        h2: "How a Same-Day Booking Works",
        body:
          "Call or send a quote request with both postcodes, what needs moving and the floor at each end. We check the day's runs and tell you straight away whether a van is free and roughly when. Small jobs fit into gaps more easily than a full house, so the more precisely you describe the load, the better the chance of a slot today.",
        bullets: [
          "Both postcodes, and whether either end is a flat with a lift.",
          "A list or a photo of the items, including anything heavy or awkward.",
          "Any time you have to be out of, or into, the property by.",
          "Whether keys are in hand or still waiting on a solicitor.",
        ],
        outro:
          "If today is already full, we will tell you that rather than keep you waiting, and offer the earliest slot we do have.",
      },
      {
        h2: "Parking When There Is No Time to Book a Bay",
        body:
          "The usual way to guarantee a space for a removal van is not available on the day. Manchester City Council will suspend a pay and display bay for domestic removals, or issue a dispensation to park on yellow lines, but both cost £30 a day and need a minimum of five working days' notice. A same-day move has to work within the ordinary loading rules instead.",
        outro:
          "Those rules are more generous than most people think. Many traffic orders let a vehicle stop on single or double yellow lines to load or unload, and the council says you can load for as long as it takes, provided the vehicle is moved immediately afterwards. Loading is observed, so a civil enforcement officer can issue a ticket if it is not genuine. The council sets this out on its [loading and unloading page](https://www.manchester.gov.uk/parking/tickets-and-fines/parking-restrictions/loading-and-unloading), and our guide to [reserving parking for a move](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) covers the bookable options for when you do have notice.",
      },
      {
        h2: "Where a Van Cannot Stop at All",
        body:
          "Some kerbs are off limits even for loading, and a same-day move has no time to find out the hard way. Rule 247 of the Highway Code says not to load or unload where there are yellow markings on the kerb and upright signs showing restrictions. The council adds pedestrian crossing zigzags and anywhere signed no stopping, such as bus stops, taxi ranks, school markings and disabled bays, and a breach can mean a fine of up to £70.",
        bullets: [
          "Kerb blips: short yellow marks on the kerb mean a loading ban at the times on the nearby sign.",
          "Bus lanes: their hours differ from place to place and are signed, and a lane with no times shown applies around the clock.",
          "Bus gates: the council warns they may not show up on a satnav, so a route planned on a phone can still drive straight through one.",
        ],
        outro:
          "Around the universities the biggest one is Oxford Road, which is closed to general traffic from 6am to 9pm every day. Our [University of Manchester](/student-removals/university-of-manchester/) page covers the approach to the halls on that corridor.",
      },
      {
        h2: "No Clean Air Charge for the Van",
        body:
          "A same-day van can come from anywhere in the region without a daily charge. There are no clean air charges to drive anywhere in Greater Manchester. On 23 January 2025 the government approved an investment-led clean air plan with no charging zone, the local authorities have since removed the signs, and Greater Manchester Police has taken over the cameras for its own use.",
        outro:
          "The detail of the plan is on the [Clean Air Greater Manchester](https://cleanairgm.com/clean-air-plan/) site. For you it simply means the price of a same-day job is the van, the crew and the time, with no zone charge on top.",
      },
      {
        h2: "When Completion Day Runs Late",
        body:
          "House sales are one of the reasons plans change on the day. Under the Law Society's Standard Conditions of Sale, money that reaches the seller after 2pm is treated as arriving on the next working day, so a chain that runs late can push the keys into the afternoon or beyond. A van booked for the morning may not be able to wait that long.",
        outro:
          "If that happens, call us with the time the solicitor expects the keys and we will tell you whether an afternoon slot is free. Keep the van waiting as short as possible by having everything boxed and by the door before it arrives.",
      },
      {
        h2: "Jobs That Suit a Same-Day Van",
        body:
          "Same-day works best for jobs that fit one van and a few hours. A sofa or a bed from a seller across town, a room out of halls, a studio flat or a load into a storage unit are all the kind of job that can slot into a gap in the day.",
        bullets: [
          "Single items and Marketplace pickups from a seller across town.",
          "Studio and one bedroom flat moves that fit a single van load.",
          "Student room moves and runs into or out of a storage unit.",
        ],
        outro:
          "Single items have their own page on [furniture delivery](/services/furniture-delivery/), and storage runs are covered on [student storage moves](/services/student-storage-manchester/). A full house on the same day is possible occasionally, but it needs two movers and most of a day, so the chance of a slot is much lower. Ask anyway, and we will tell you honestly.",
      },
      {
        h2: "What a Same-Day Move Costs",
        body:
          "A same-day job is priced the same way as any other local move, on time. One mover with a small van starts from " +
          rate("one-small") +
          ", one mover with a large van from " +
          rate("one-large") +
          ", two movers with a large van from " +
          rate("two-large") +
          ", and a single item collection and drop from " +
          rate("single-item") +
          ". Minimum bookings are typically two to three hours.",
        outro:
          "Access at both ends is what moves the price, especially a long carry from the nearest legal stopping point or stairs with no lift. The full breakdown is on our [prices page](/prices/).",
      },
    ],
    faqs: [
      {
        q: "Can you guarantee a same-day van?",
        a: "No, and nobody honest can. Same-day slots depend on how the day's runs fall. Call with the details and we will tell you straight away whether a van is free and roughly when.",
      },
      {
        q: "Can I get a parking suspension for a same-day move?",
        a: "No. Manchester City Council needs a minimum of five working days' notice for a bay suspension or a yellow line dispensation, both at £30 a day. A same-day move uses the normal loading rules instead.",
      },
      {
        q: "Can a van load on double yellow lines in Manchester?",
        a: "Often, yes. Many traffic orders allow loading on single and double yellow lines for as long as it takes, as long as the van moves straight afterwards. You cannot load where kerb blips and signs show a loading ban, on crossing zigzags or where signs say no stopping.",
      },
      {
        q: "Is there a Clean Air Zone charge for vans in Manchester?",
        a: "No. There are no clean air charges anywhere in Greater Manchester. The government approved a non-charging clean air plan on 23 January 2025.",
      },
      {
        q: "My keys are late on completion day. Can you help?",
        a: "Call us with the time your solicitor expects the keys. Money that arrives after 2pm is treated as arriving the next working day under the standard conditions, so we will check whether an afternoon slot is free.",
      },
      {
        q: "What jobs are easiest to fit in on the same day?",
        a: "Single items, Marketplace pickups, studio and one bedroom flats, student rooms and storage runs. A full house is possible occasionally but much harder to fit in at short notice.",
      },
      {
        q: "How much is a same-day man and van?",
        a:
          "The same as any local job. One mover with a large van starts from " +
          rate("one-large") +
          " and a single item from " +
          rate("single-item") +
          ", with minimum bookings typically two to three hours.",
      },
    ],
    related: ["man-and-van-hire", "furniture-delivery", "flat-apartment-removals"],
    serviceType: "Same-day man and van",
  },
  {
    slug: "packing-services",
    navLabel: "Packing Services",
    h1: "Packing Services in Manchester",
    title: "Packing Services in Manchester | Man and Van Manchester",
    metaDescription:
      "Packing services in Manchester: a full pack, a part pack or just the fragile things, added to your move. Why who packed the box matters, and what to do with the cardboard. Call for a quote.",
    intro:
      "Packing services in Manchester are an optional extra on any move, added only if you want them. Some people want every room boxed before the van arrives, some want only the kitchen and the glassware, and some just want to know how to pack so the move goes quickly. We do all three, and we are honest about the one thing that matters most: who packed a box changes who is responsible if something inside it breaks.",
    sections: [
      {
        h2: "Full Pack, Part Pack or the Fragile Things",
        body:
          "Packing adds time to the job rather than a fixed fee, so you choose how much of it you want. A full pack suits anyone short of time or moving a whole house. A part pack covers the rooms that take longest, usually the kitchen, the loft and anywhere with glass. A fragile-only pack leaves the books and clothes to you and puts the breakables in our hands.",
        bullets: [
          "Full pack: every room boxed, wrapped and labelled before loading.",
          "Part pack: the kitchen, glassware, pictures and mirrors, or whichever rooms you choose.",
          "Fragile only: plates, glasses, lamps, screens and ornaments wrapped and boxed properly.",
        ],
        outro:
          "Tell us which you want when you ask for a quote, along with roughly how many rooms, so we allow the right time and bring enough materials.",
      },
      {
        h2: "Why Who Packed the Box Matters",
        body:
          "This is the part most people only find out after something breaks. The British Association of Removers says that under most removal company insurances, the company can only accept liability for damage to items it packed itself. A box of glasses you packed and taped up is, in most cases, your responsibility even if it travels in our van.",
        outro:
          "So if there is anything valuable or fragile, it is worth having it packed professionally even when you box everything else yourself. The association's [packing tips](https://bar.co.uk/top-ten-packing-tips/) explain the point in more detail, and what our own cover includes is set out on our [insurance and compliance page](/insurance-and-compliance/).",
      },
      {
        h2: "Appliances and Items to Sort Before Packing Day",
        body:
          "Some things need dealing with before anyone starts boxing. The British Association of Removers notes that, unless agreed in advance, a removal company will not disconnect gas or electric appliances such as cookers, nor white goods with water hoses such as dishwashers and washing machines. Gas appliances need a Gas Safe registered engineer, and anything with water in it needs draining or defrosting first.",
        bullets: [
          "Book a Gas Safe engineer for a gas cooker well before moving day.",
          "Defrost the freezer the day before and drain the washing machine.",
          "Keep gas bottles, fuel, paint and other flammable items out of packed boxes and tell us if you have any.",
          "Keep passports, keys, medication and chargers in a bag that travels with you, not in the van.",
        ],
      },
      {
        h2: "Packing for a Manchester Flat or Terrace",
        body:
          "How a house is packed changes how fast it can be carried. A Victorian terrace in Levenshulme or Chorlton often has a narrow staircase, and a city centre apartment has a goods lift with a booked slot and other residents waiting. Both reward small, heavy boxes and large, light ones rather than a few enormous boxes nobody can lift down a stairwell.",
        bullets: [
          "Books and tins go in small boxes, bedding and cushions in large ones.",
          "Every box is labelled with the room it is going to, not the room it came from.",
          "Boxes are stacked by the door in the order they will be loaded, so the van fills without a second trip.",
        ],
        outro:
          "In a building with a booked lift, a well packed flat can be the difference between finishing inside the slot and having to book another. Our [flat and apartment removals](/services/flat-apartment-removals/) page covers the lift and loading bay side of the job.",
      },
      {
        h2: "Getting Rid of the Cardboard Afterwards",
        body:
          "A packed house leaves a lot of cardboard behind. In Manchester the blue bin is for paper and card, and the council asks you to crush down boxes and large pieces of cardboard so as much as possible fits. Recycle for Greater Manchester adds that boxes should be flattened and cleared of bubble wrap, plastic and polystyrene first, and that cardboard can also go to a recycling centre.",
        outro:
          "If you are taking it to a recycling centre in a van or a hire van yourself, you need a free van permit. You apply two working days before your first visit, the van must be registered to a home address in one of the nine Greater Manchester councils, and the permit covers 18 visits a year, resetting on 1 April. Vans over 5.3 metres or 3.5 tonnes are not allowed, and trade waste is not accepted. The rules are on the [van permit page](https://recycleforgreatermanchester.com/van-permit/).",
      },
      {
        h2: "Materials and What Packing Costs",
        body:
          "Packing adds time to the job, and our rate card charges for time. One mover with a small van starts from " +
          rate("one-small") +
          ", one mover with a large van from " +
          rate("one-large") +
          ", and two movers with a large van from " +
          rate("two-large") +
          ". Boxes, tape and wrapping materials are priced on the quote, depending on how much of the house you want packed.",
        outro:
          "A part pack of the kitchen and the fragile items is usually the best value, because those are the rooms that take longest to do yourself and the ones most likely to break. The full pricing breakdown is on our [prices page](/prices/).",
      },
    ],
    faqs: [
      {
        q: "Do I have to use your packing service?",
        a: "No. Packing is an optional extra, added only if you want it. Plenty of people pack themselves and ask us to do only the fragile items.",
      },
      {
        q: "Are boxes I pack myself covered if something breaks?",
        a: "Usually not. The British Association of Removers says most removal company insurances only accept liability for damage to items the company packed. Have fragile and valuable items packed professionally if you want them covered.",
      },
      {
        q: "Will you disconnect my washing machine or cooker?",
        a: "Not unless it is agreed in advance. Gas appliances need a Gas Safe registered engineer, and washing machines and dishwashers need disconnecting and draining before moving day.",
      },
      {
        q: "Can you pack just the kitchen?",
        a: "Yes. The kitchen and the glassware are the most common part pack, because they take longest and break most easily.",
      },
      {
        q: "What should I not put in a packed box?",
        a: "Gas bottles, fuel, paint and other flammable items should stay out of packed boxes, and passports, keys, medication and chargers should travel with you rather than in the van.",
      },
      {
        q: "What do I do with the empty boxes in Manchester?",
        a: "Flatten them for the blue bin, which takes paper and card, or take them to a recycling centre. A van at a recycling centre needs a free Recycle for Greater Manchester permit, applied for two working days before your first visit.",
      },
      {
        q: "How much does packing cost?",
        a:
          "Packing adds time to the job, and our rate card starts from " +
          rate("one-small") +
          " for one mover, with materials priced on the quote. A part pack of the kitchen and fragile items is usually the best value.",
      },
    ],
    related: ["house-removals", "flat-apartment-removals", "long-distance-removals"],
    serviceType: "Packing services",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
