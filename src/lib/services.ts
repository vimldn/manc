export type Faq = { q: string; a: string };

export type Section = { h2: string; body: string };

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
};

export const services: Service[] = [
  {
    slug: "house-removals",
    navLabel: "House Removals",
    h1: "Man and Van House Removals in Manchester",
    title: "Man and Van House Removals in Manchester | Van and Man Manchester",
    metaDescription:
      "Man and van house removals in Manchester. Careful loading, wrapped furniture and fair prices across Didsbury, Chorlton, Salford and all of Greater Manchester. Call for a quote.",
    intro:
      "Moving house in Manchester is stressful enough without worrying about the van. Van and Man Manchester handles full house removals across the city, from a one bedroom terrace in Chorlton to a family home in Didsbury. We turn up on time, wrap your furniture properly and get everything to the new place without the drama. If you want a straight answer on price, call for a quote and we will talk you through it in plain English.",
    sections: [
      {
        h2: "House removals done properly",
        body:
          "A house move is more than shifting boxes. We protect doorframes, wrap sofas and mattresses, and stack the van so nothing shifts on the way. Whether you are moving within Manchester or heading out to nearby areas like Sale or Stretford, we plan the job around your day, not ours. Most local house moves are done in a single trip, and we will tell you honestly if you need a bigger van or a second run.",
      },
      {
        h2: "What we move and what we handle",
        body:
          "We move beds, wardrobes, sofas, white goods, boxes, garden furniture and the awkward items that never fit anywhere. We dismantle and reassemble flat pack furniture when needed and bring straps, blankets and trolleys as standard. If you have a piano, a large American fridge or anything unusually heavy, mention it when you book so we send the right van and the right number of hands.",
      },
      {
        h2: "Parking, access and Manchester streets",
        body:
          "Manchester terraces, tight back streets and permit zones can slow a move down if nobody plans for them. We know the parking realities in areas like Fallowfield, Withington and the city centre, and we will ask about access at both ends before the day so there are no surprises. If a permit or a bay suspension is needed, we will flag it early.",
      },
      {
        h2: "Clear pricing, no hidden extras",
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
    title: "Flat & Apartment Removals in Manchester | Van and Man Manchester",
    metaDescription:
      "Man and van flat and apartment removals in Manchester. Stairs, lifts, city centre high rises and tight parking sorted. Serving Manchester and nearby areas. Call for a quote.",
    intro:
      "Flat moves have their own headaches, and most of them involve stairs, lifts and nowhere to park. Van and Man Manchester moves flats and apartments across the city, from city centre high rises to converted terraces in Hulme and Old Trafford. We are used to narrow staircases, booked lift slots and loading bays, so your move goes smoothly instead of turning into an afternoon of hauling boxes.",
    sections: [
      {
        h2: "Built for stairs, lifts and high rises",
        body:
          "City centre apartment blocks often have goods lifts you need to book and loading bays with time limits. We plan around them so we are not stuck circling the block. For walk up flats in areas like Fallowfield and Rusholme, we bring the manpower to carry safely down tight stairs without scuffing walls or dropping your telly.",
      },
      {
        h2: "One bedroom flats and studios",
        body:
          "Most studio and one bedroom flat moves fit in a single van load. That keeps the cost down and the day short. We wrap the mattress, box up the loose bits if you have not already, and get you into the new place the same day. This is one of our most requested and most affordable jobs.",
      },
      {
        h2: "City centre parking and access",
        body:
          "Parking in Manchester city centre is the number one thing that trips up a flat move. We know which bays and bus lanes to avoid and how to work around a timed loading bay. Tell us the block and the floor when you book and we will plan the run so you are not paying for wasted time.",
      },
      {
        h2: "Fair prices for smaller moves",
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
    title: "Man and Van Hire in Manchester | Van and Man Manchester",
    metaDescription:
      "Flexible man and van hire in Manchester by the hour or the job. One or two movers, a clean van and fair rates across Greater Manchester. Call for a quote today.",
    intro:
      "Sometimes you do not need a full removals firm, you just need a van and a pair of hands for a couple of hours. That is exactly what man and van hire in Manchester is for. Book us by the hour or by the job, add a second mover if the load is heavy, and get your stuff shifted without paying for services you do not need. It is the flexible, cheap man and van option locals in Manchester ask for most.",
    sections: [
      {
        h2: "Hire by the hour or by the job",
        body:
          "For a quick job, hourly hire keeps the cost down and gives you full flexibility. For a bigger or longer move, a fixed job price gives you certainty. We will tell you which one works out cheaper for what you are doing rather than pushing the more expensive option.",
      },
      {
        h2: "One mover or two",
        body:
          "One man and a van is plenty for boxes, small furniture and single item runs. Add a second mover when there are heavy wardrobes, sofa beds or a lot to carry up stairs. Getting the crew size right first time is the difference between a smooth job and a slow one, so tell us what you are moving.",
      },
      {
        h2: "Clean, well kept vans",
        body:
          "Our vans are clean, insured and properly equipped with blankets, straps and a trolley. Nobody wants their sofa loaded into a filthy van, and we would not do that to you. We serve all of Manchester and nearby areas including Salford, Prestwich and Stretford.",
      },
      {
        h2: "Cheap man and van without the catch",
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
    title: "Man and Van Rubbish Removal in Manchester | Van and Man Manchester",
    metaDescription:
      "Man and van rubbish removal and house clearance in Manchester. Fast, licensed waste clearance for furniture, junk and garden waste. Serving Manchester. Call for a quote.",
    intro:
      "Got a pile of junk, an old sofa or a full house to clear? Our man and van rubbish removal service in Manchester loads it, takes it away and disposes of it responsibly, so you are not stuck making trips to the tip. We clear single items, garages, gardens and full properties across Manchester and nearby areas like Cheetham Hill and Wythenshawe. Point at it, and we will get rid of it.",
    sections: [
      {
        h2: "We load it, you relax",
        body:
          "Unlike a skip, you do not lift a thing. We carry the rubbish out of the house, garage or garden ourselves and load it into the van. That makes it ideal for heavy items like sofas, mattresses, fridges and broken furniture that you simply cannot shift on your own.",
      },
      {
        h2: "Licensed, responsible disposal",
        body:
          "Waste has to be handled by a licensed carrier, and fly tipping carries heavy fines that come back to the householder. We dispose of everything through the proper routes and recycle what we can. You get your space back with none of the risk.",
      },
      {
        h2: "House and garage clearances",
        body:
          "Clearing a full house after a move, a tenancy or a bereavement is a big job, and we handle it with care. We can clear one room or the whole property, including lofts and garages. Tell us roughly how much there is and we will bring the right van and enough hands.",
      },
      {
        h2: "Only pay for what we take",
        body:
          "We price on volume, so you only pay for the space your rubbish takes up in the van. That is usually far cheaper than hiring a skip and a lot less hassle. Ask for a quote and we will give you a clear figure for the clearance.",
      },
    ],
    faqs: [
      {
        q: "Is your rubbish removal licensed?",
        a: "Yes. Waste is disposed of through licensed routes and recycled where possible, so you are covered against fly tipping penalties.",
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
    title: "Furniture & Single Item Delivery in Manchester | Van and Man Manchester",
    metaDescription:
      "Man and van furniture delivery and single item collection in Manchester. Marketplace pickups, sofas, beds and white goods moved same day. Call for a quote.",
    intro:
      "Bought a sofa on Facebook Marketplace? Picking up a wardrobe from IKEA or a bed from across town? Our furniture and single item delivery service in Manchester collects and delivers large items quickly and carefully. It is the cheap man and van answer for those jobs that are too big for the car but too small for a full removal. We cover Manchester and nearby areas including Chorlton, Salford and Old Trafford.",
    sections: [
      {
        h2: "Marketplace and shop collections",
        body:
          "We collect from Facebook Marketplace, Gumtree, eBay and the big furniture shops around Manchester. Send us the pickup and drop off postcodes and a photo of the item, and we will sort the collection so you do not have to borrow a van or bribe a mate.",
      },
      {
        h2: "One item or a few",
        body:
          "A single sofa, a fridge, a bed frame or a couple of large boxes, we handle them all. Because it is a small job it stays cheap, and we can often fit you in the same day or next day depending on the run.",
      },
      {
        h2: "Careful handling and quick turnaround",
        body:
          "We wrap and strap items so they arrive in the same condition they left in. We know how to get a two seater up a Manchester staircase without taking a chunk out of the wall. If the item needs dismantling to get it out, we can usually help with that too.",
      },
      {
        h2: "Simple, fair pricing",
        body:
          "Single item runs are priced on the distance and how awkward the item is to handle. Give us the two postcodes and a rough description and we will give you a quick quote. No need to book a full removal for one settee.",
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
    title: "Student Man and Van in Manchester | Van and Man Manchester",
    metaDescription:
      "Cheap student man and van in Manchester. Halls, house shares and end of tenancy moves around Fallowfield, Withington and the universities. Call for a quote.",
    intro:
      "Manchester is a student city, and student moves have their own rhythm: halls to a house share, room to room, or the great August scramble when everyone changes address at once. Our student man and van service is the cheap, no fuss way to shift your stuff around Fallowfield, Withington, Rusholme and the city centre without roping in your flatmates and a hired estate car.",
    sections: [
      {
        h2: "Halls, house shares and room swaps",
        body:
          "Whether you are leaving halls, moving into a shared house or just swapping rooms, we handle the boxes, the bed and the inevitable mountain of clothes. We know the student areas well, so we plan around the tight terraced streets of Fallowfield and the parking around the universities.",
      },
      {
        h2: "Split the cost with housemates",
        body:
          "Moving on the same day as your housemates? Share the van and split the cost. It is often the cheapest way for a whole house to move at once, and we can do several drops on one run if the addresses are close together.",
      },
      {
        h2: "End of tenancy timing",
        body:
          "Student tenancies tend to end on the same few days in the summer, and those slots fill up fast. Book early for late June through September and you will not be left scrambling. We will work around your checkout time so you are out before the deposit is at risk.",
      },
      {
        h2: "Cheap and simple",
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
    title: "Office & Business Removals in Manchester | Van and Man Manchester",
    metaDescription:
      "Man and van office and business removals in Manchester. Desks, IT, stock and small office moves handled with minimal downtime across Greater Manchester. Call for a quote.",
    intro:
      "Moving an office is not just a bigger house move, it is a move where downtime costs money. Our office and business removals service in Manchester shifts desks, chairs, IT kit and stock quickly and carefully, often out of hours, so your business is back up and running fast. We cover the city centre, Salford Quays and business parks across Greater Manchester.",
    sections: [
      {
        h2: "Small office and studio moves",
        body:
          "We are ideal for small offices, studios, salons and shops that do not need a huge corporate removals contract. A man and van, or two, gets you moved without the enterprise price tag. We handle desks, filing, stock and the awkward bits that always get left to the end.",
      },
      {
        h2: "Out of hours to cut downtime",
        body:
          "The best time to move a business is when it is closed. We can work evenings or weekends so you lose as little trading time as possible. Tell us your quiet window and we will plan the move around it.",
      },
      {
        h2: "IT, stock and equipment",
        body:
          "Screens, servers and equipment need proper handling. We wrap and secure IT kit and keep everything labelled so it goes back where it belongs at the other end. If you need items dismantled and rebuilt, we can help with that as part of the job.",
      },
      {
        h2: "Priced for small business",
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
    title: "Long Distance Man and Van from Manchester to London & UK | Van and Man Manchester",
    metaDescription:
      "Long distance man and van from Manchester to London and anywhere in the UK. Fixed prices, careful handling and one clear point of contact. Call for a quote.",
    intro:
      "Moving further than across town? We run long distance man and van jobs from Manchester to London and anywhere else in the UK. It is one of our most requested routes, whether you are a student heading south, a professional relocating, or someone who bought furniture at the other end of the country. One driver, one van, one clear price, door to door.",
    sections: [
      {
        h2: "Manchester to London and back",
        body:
          "The Manchester to London run is our most popular long distance route, and we do it both ways: man and van London to Manchester and Manchester to London. Because it is a single driver and van doing the whole journey, your belongings are not passed between depots or left sitting on a pallet. They go straight from your old door to your new one.",
      },
      {
        h2: "Fixed prices for long journeys",
        body:
          "Long distance jobs are priced as a fixed figure based on the route, the load and the mileage, so you know the cost before we set off. That is far clearer than an hourly rate that balloons in motorway traffic. Ask for a quote with both postcodes and what you are moving and we will give you a firm price.",
      },
      {
        h2: "Anywhere in the UK",
        body:
          "It is not just London. We take jobs from Manchester to Birmingham, Leeds, Liverpool, Bristol, the South Coast and beyond. If you can name the two postcodes, we can price the run. Longer jobs may be best booked a little in advance to lock in the day.",
      },
      {
        h2: "One point of contact",
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
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
