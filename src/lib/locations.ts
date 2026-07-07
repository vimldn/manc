import type { Faq } from "./services";

export type Location = {
  slug: string;
  name: string;
  postcode: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string;
  local: string[]; // unique local paragraphs
  neighbours: string[]; // nearby area names mentioned in copy
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "manchester-city-centre",
    name: "Manchester City Centre",
    postcode: "M1 / M4",
    h1: "Man and Van in Manchester City Centre",
    title: "Man and Van in Manchester City Centre (M1, M4) | Van and Man Manchester",
    metaDescription:
      "Man and van in Manchester city centre. Apartment moves around the Northern Quarter, Ancoats and Deansgate, with loading bays and timed access handled. Call for a quote.",
    intro:
      "Man and van in Manchester city centre means one thing above all else: sorting the access before you sort the move. Between the Northern Quarter, Ancoats, Deansgate and Piccadilly, most of what we move here is apartments in blocks with goods lifts, timed loading bays and nowhere obvious to park. We do this run constantly, so we plan around it instead of getting caught out by it.",
    local: [
      "The city centre is apartment country. From new build towers around Deansgate and First Street to the converted mills of Ancoats and the Northern Quarter, almost every move here involves a lift you may need to book and a loading bay with a time limit. Tell us the building and the floor when you book and we will plan the run so we are not paying a warden for the privilege of parking.",
      "Parking is the number one thing that slows a city centre move down. Bus lanes, red routes and permit bays are everywhere between Piccadilly and Spinningfields. We know which loading spots work and how long we realistically have, so we load fast and clear out before the traffic warden appears. If your block has a proper loading bay, that makes the whole job cheaper and quicker.",
      "Whether you are moving into a studio near Piccadilly, a two bed in Ancoats or out to nearby areas like Salford Quays and Hulme, we keep the job tight and the price fair. Most city centre flat moves are a single van load, which keeps the cost down.",
    ],
    neighbours: ["Ancoats", "Salford Quays", "Hulme"],
    faqs: [
      {
        q: "Can you handle a city centre apartment with only a goods lift?",
        a: "Yes, that is most of what we do here. Book the lift slot if your building requires it and tell us the floor, and we will plan the load around it.",
      },
      {
        q: "Where will you park in the city centre?",
        a: "We use loading bays and timed spots and load quickly. If your block has a bookable loading bay, let us know and we will use it.",
      },
    ],
  },
  {
    slug: "salford",
    name: "Salford",
    postcode: "M5 / M6",
    h1: "Man and Van in Salford",
    title: "Man and Van in Salford (M5, M6) | Van and Man Manchester",
    metaDescription:
      "Man and van in Salford. House and flat removals across Ordsall, Pendleton and Eccles with fair prices and careful handling. Call for a quote.",
    intro:
      "Man and van in Salford covers a real mix, from the terraces of Ordsall and Pendleton to the new apartments near the river and out towards Eccles. Van and Man Manchester works right across Salford, and being just across the water from the city centre we are often here within the hour. Whatever the property, we turn up on time and get it done without fuss.",
    local: [
      "Salford ranges from tight terraced streets to modern riverside flats, and the two need slightly different handling. On the terraces around Ordsall and Pendleton, access and parking are the things to plan for. In the newer developments near the Quays and along the Irwell, it is lifts and loading bays. We deal with both every week.",
      "Because Salford sits right next to Manchester city centre and MediaCity, it is a popular spot for young professionals and families, which means a lot of moves in and out. We handle house removals, flat moves, single item deliveries and rubbish clearances across the M5 and M6 postcodes.",
      "From Salford we can easily reach nearby areas including the city centre, Salford Quays and Prestwich, so if you are moving between them it is a short, cheap job. Ask for a quote and we will price it on the size of the move and the distance.",
    ],
    neighbours: ["Salford Quays", "Prestwich", "Manchester City Centre"],
    faqs: [
      {
        q: "Do you cover all of Salford?",
        a: "Yes, from Ordsall and Pendleton through to Eccles and the Quays. Give us your postcode and we will confirm and quote.",
      },
      {
        q: "How quickly can you get to Salford?",
        a: "Salford is right next to the city centre, so we are often nearby. Get in touch and we will tell you the soonest slot.",
      },
    ],
  },
  {
    slug: "didsbury",
    name: "Didsbury",
    postcode: "M20",
    h1: "Man and Van in Didsbury",
    title: "Man and Van in Didsbury (M20) | Van and Man Manchester",
    metaDescription:
      "Man and van in Didsbury. Family house removals and flat moves across West and East Didsbury with careful handling of period furniture. Call for a quote.",
    intro:
      "Man and van in Didsbury tends to mean family homes, Victorian semis and the odd tricky staircase. Van and Man Manchester covers West Didsbury, East Didsbury and the village, moving everything from a full family house to a single wardrobe. We look after period furniture properly, because a lot of Didsbury homes are full of it.",
    local: [
      "Didsbury is one of the leafier parts of south Manchester, with a lot of Victorian and Edwardian semis around School Lane, Wilmslow Road and the village. These homes are lovely but the staircases can be narrow and the furniture is often solid and heavy, so we bring the right crew and plenty of blankets.",
      "West Didsbury and East Didsbury both sit on the tram line, and the residential streets can get tight for parking around the busy times. We plan the load so we are not blocking the road or holding up your neighbours. For families moving locally, most jobs are a single well planned run.",
      "From Didsbury we easily reach nearby areas including Withington, Chorlton and Fallowfield, so moves between these south Manchester suburbs are quick and cheap. Ask for a quote and we will give you a clear figure for the job.",
    ],
    neighbours: ["Withington", "Chorlton", "Fallowfield"],
    faqs: [
      {
        q: "Can you move heavy period furniture?",
        a: "Yes. A lot of Didsbury homes have solid Victorian pieces, and we bring the crew and blankets to move them safely down narrow stairs.",
      },
      {
        q: "Do you cover both West and East Didsbury?",
        a: "Yes, plus the village and surrounding M20 streets. Tell us your postcode and we will quote it.",
      },
    ],
  },
  {
    slug: "chorlton",
    name: "Chorlton",
    postcode: "M21",
    h1: "Man and Van in Chorlton",
    title: "Man and Van in Chorlton (M21) | Van and Man Manchester",
    metaDescription:
      "Man and van in Chorlton. House and flat removals around Beech Road and Chorlton Green with careful handling and fair prices. Call for a quote.",
    intro:
      "Man and van in Chorlton usually means terraced houses, young families and the busy streets around Beech Road and Chorlton Green. Van and Man Manchester covers all of M21, moving households, single items and Marketplace pickups across this popular corner of south Manchester. We know the streets, so parking and access do not catch us out.",
    local: [
      "Chorlton is full of Victorian terraces and semis, and it has become one of the most sought after spots in south Manchester for young families and professionals. That means plenty of people moving in, out and around the area. The streets near Beech Road and Chorlton Green get busy, so we plan parking around it.",
      "The terraces here often have those classic tight hallways and steep stairs, which is fine when you know what you are doing. We bring the manpower and the right kit to get sofas and beds up and down without damage. Single item and furniture collections are also popular here given all the local buying and selling.",
      "From Chorlton we are minutes from nearby areas including Didsbury, Stretford and Old Trafford, so local moves stay short and cheap. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Didsbury", "Stretford", "Old Trafford"],
    faqs: [
      {
        q: "Can you park on the terraced streets around Beech Road?",
        a: "We plan parking and access before the day so we load efficiently without blocking the street. Just let us know the address when you book.",
      },
      {
        q: "Do you do Marketplace collections in Chorlton?",
        a: "Yes, plenty. Send the collection and delivery postcodes and a photo of the item and we will quote the run.",
      },
    ],
  },
  {
    slug: "fallowfield",
    name: "Fallowfield",
    postcode: "M14",
    h1: "Man and Van in Fallowfield",
    title: "Man and Van in Fallowfield (M14) | Van and Man Manchester",
    metaDescription:
      "Cheap man and van in Fallowfield. Student moves, house shares and end of tenancy runs around Wilmslow Road and the M14 terraces. Call for a quote.",
    intro:
      "Man and van in Fallowfield is student territory, and we know it inside out. Van and Man Manchester covers all of M14, handling halls to house share moves, room swaps and the end of tenancy scramble around Wilmslow Road. It is the cheap, reliable man and van locals and students in Fallowfield actually call.",
    local: [
      "Fallowfield is one of the biggest student areas in the country, packed with shared terraced houses off Wilmslow Road and around Ladybarn. In the summer the whole area moves at once as tenancies turn over, so if you are moving in June, July, August or September, book early to get the slot you want.",
      "The terraced streets here are tight and get busy with parking, especially near the halls and along the main road. We know the area well and plan the load so we are in and out without holding anyone up. Housemates moving together can share a van and split the cost, which keeps it as cheap as possible.",
      "From Fallowfield we cover nearby areas including Withington, Rusholme and Didsbury, so moves between the student suburbs are quick. Ask for a quote and we will keep it low for the job.",
    ],
    neighbours: ["Withington", "Rusholme", "Didsbury"],
    faqs: [
      {
        q: "Do you get booked up at end of tenancy?",
        a: "Yes, late June to September is our busiest time in Fallowfield. Book as early as you can to lock in your date.",
      },
      {
        q: "Can my housemates and I share a booking?",
        a: "Yes, and it usually works out cheapest. We can do several drops on one run if the addresses are close together.",
      },
    ],
  },
  {
    slug: "withington",
    name: "Withington",
    postcode: "M20",
    h1: "Man and Van in Withington",
    title: "Man and Van in Withington (M20) | Van and Man Manchester",
    metaDescription:
      "Man and van in Withington. Student and young professional moves around Wilmslow Road and the M20 terraces at fair prices. Call for a quote.",
    intro:
      "Man and van in Withington covers a mix of students and young professionals, with terraced streets running off Wilmslow Road. Van and Man Manchester handles flat moves, house shares and single item deliveries across the area. It sits between Fallowfield and Didsbury, so we know the roads and the parking well.",
    local: [
      "Withington has that student and young professional blend, with rows of terraces and converted flats around the village and off Wilmslow Road. Moves here are often small, one or two bedrooms, which keeps them cheap and quick, usually a single van load.",
      "Being on the busy Wilmslow Road corridor, timing and parking matter. We plan around the traffic and the tight streets so the job runs smoothly. End of tenancy periods get busy given the student presence, so book ahead in summer.",
      "From Withington we are minutes from nearby areas including Fallowfield, Didsbury and Chorlton. Moves between them are short and low cost. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Fallowfield", "Didsbury", "Chorlton"],
    faqs: [
      {
        q: "Are most Withington moves a single van load?",
        a: "Usually yes, as a lot of moves here are one or two bed flats and house shares, which keeps the price down.",
      },
      {
        q: "Do you cover the whole M20 area?",
        a: "Yes, Withington, Didsbury and the surrounding streets. Give us your postcode and we will confirm and quote.",
      },
    ],
  },
  {
    slug: "old-trafford",
    name: "Old Trafford",
    postcode: "M16",
    h1: "Man and Van in Old Trafford",
    title: "Man and Van in Old Trafford (M16) | Van and Man Manchester",
    metaDescription:
      "Man and van in Old Trafford. House and flat removals across M16 with match day parking planned around. Fair prices and careful handling. Call for a quote.",
    intro:
      "Man and van in Old Trafford means terraces, apartments and, on the wrong day, football and cricket crowds. Van and Man Manchester covers all of M16, and we always check the fixture list before we quote a match day move so parking and access are planned, not a nasty surprise.",
    local: [
      "Old Trafford is a busy, well connected part of Manchester with a lot of Victorian terraces and newer apartment blocks. On match days at the football or cricket, the whole area fills up with traffic and parking vanishes, so we plan moves around the fixtures wherever we can.",
      "The terraced streets have the usual tight halls and stairs, which we are well used to. Apartment moves near the ground and towards the city centre involve the usual lift and loading bay planning. Either way we bring the right kit and enough hands.",
      "From Old Trafford we quickly reach nearby areas including Stretford, Chorlton and the city centre, so local moves are short and cheap. Ask for a quote and mention the date so we can check for events.",
    ],
    neighbours: ["Stretford", "Chorlton", "Manchester City Centre"],
    faqs: [
      {
        q: "Can you move on a match day?",
        a: "Yes, but tell us the date so we can plan around the fixture. Parking and traffic near the grounds need working around on match days.",
      },
      {
        q: "Do you cover the whole of M16?",
        a: "Yes, across Old Trafford and the surrounding streets. Give us your postcode and we will quote it.",
      },
    ],
  },
  {
    slug: "hulme",
    name: "Hulme",
    postcode: "M15",
    h1: "Man and Van in Hulme",
    title: "Man and Van in Hulme (M15) | Van and Man Manchester",
    metaDescription:
      "Man and van in Hulme. Student and apartment moves near the universities in M15 at cheap, fair prices. Call for a quote.",
    intro:
      "Man and van in Hulme is a lot of student and young professional moves, given how close it is to the universities and the city centre. Van and Man Manchester covers M15, handling apartment moves, house shares and single item runs quickly and cheaply. We know the modern blocks and the access around them.",
    local: [
      "Hulme has been heavily regenerated, so alongside older housing there are plenty of modern apartment blocks and student developments near Manchester Metropolitan University and the University of Manchester. That means a lot of lift and loading bay moves, which we plan around.",
      "Its location right on the edge of the city centre makes it one of the quicker areas for us to reach and one of the cheaper areas to move within. Most flat moves here are a single van load, which keeps the cost down and the day short.",
      "From Hulme we cover nearby areas including the city centre, Old Trafford and Fallowfield. Moves between them are short and low cost. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Manchester City Centre", "Old Trafford", "Fallowfield"],
    faqs: [
      {
        q: "Do you move students near the universities?",
        a: "Yes, that is a lot of what we do in Hulme given how close it is to both universities. Book early in the summer as it gets busy.",
      },
      {
        q: "Can you handle apartment blocks with lifts?",
        a: "Yes. Tell us the floor and whether the lift needs booking and we will plan the load around it.",
      },
    ],
  },
  {
    slug: "wythenshawe",
    name: "Wythenshawe",
    postcode: "M22",
    h1: "Man and Van in Wythenshawe",
    title: "Man and Van in Wythenshawe (M22) | Van and Man Manchester",
    metaDescription:
      "Man and van in Wythenshawe. House removals, clearances and single item runs across M22 near the airport. Fair prices. Call for a quote.",
    intro:
      "Man and van in Wythenshawe covers a large, spread out part of south Manchester near the airport. Van and Man Manchester handles house removals, rubbish clearances and single item deliveries across M22. The good news for Wythenshawe is that it is generally easier to park and access than the inner city, which keeps jobs efficient.",
    local: [
      "Wythenshawe is one of the largest districts in Manchester, with a lot of housing spread across a wide area near Manchester Airport. Streets here are generally wider and easier to park on than the inner city terraces, which often makes moves quicker and more straightforward.",
      "We handle full house removals, single item deliveries and rubbish and furniture clearances right across the M22 postcode. Because homes here tend to have driveways or on street space, loading is usually simple, and we can often get a bigger van right up to the door.",
      "From Wythenshawe we reach nearby areas including Sale, Didsbury and the airport, so both local moves and airport area runs are easy to arrange. Ask for a quote and we will price it on the size of the job.",
    ],
    neighbours: ["Sale", "Didsbury", "Manchester Airport"],
    faqs: [
      {
        q: "Is parking easier in Wythenshawe?",
        a: "Generally yes. Wider streets and driveways mean loading is often simpler than in the inner city, which can keep the job quicker.",
      },
      {
        q: "Do you do house clearances in Wythenshawe?",
        a: "Yes, from single items up to full house and garage clearances across M22. Tell us the size and we will quote it.",
      },
    ],
  },
  {
    slug: "cheetham-hill",
    name: "Cheetham Hill",
    postcode: "M8",
    h1: "Man and Van in Cheetham Hill",
    title: "Man and Van in Cheetham Hill (M8) | Van and Man Manchester",
    metaDescription:
      "Man and van in Cheetham Hill. House and flat removals, clearances and deliveries across M8 just north of the city centre. Call for a quote.",
    intro:
      "Man and van in Cheetham Hill sits just north of the city centre, so we are often nearby and quick to reach you. Van and Man Manchester covers M8, handling house and flat removals, single item deliveries and rubbish clearances. The wholesale district here also means we get plenty of stock and furniture collection jobs.",
    local: [
      "Cheetham Hill is a busy, mixed area just north of the city centre, known for its terraced housing and its wholesale and retail district along Cheetham Hill Road. That mix means we handle everything from household moves to furniture and stock collections for small businesses.",
      "Being so close to the city centre, Cheetham Hill is one of the quicker areas for us to reach and a cheap area to move within or out of. The main road can get busy, so we plan the load and the timing to keep the job smooth.",
      "From Cheetham Hill we cover nearby areas including the city centre, Prestwich and Salford, so moves between them are short and low cost. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Manchester City Centre", "Prestwich", "Salford"],
    faqs: [
      {
        q: "Do you do stock or furniture collections for shops?",
        a: "Yes. With the wholesale district here we get a lot of stock and furniture runs. Send the details and we will quote it.",
      },
      {
        q: "How quickly can you reach Cheetham Hill?",
        a: "It is just north of the city centre, so we are often nearby. Get in touch and we will tell you the soonest slot.",
      },
    ],
  },
  {
    slug: "prestwich",
    name: "Prestwich",
    postcode: "M25",
    h1: "Man and Van in Prestwich",
    title: "Man and Van in Prestwich (M25) | Van and Man Manchester",
    metaDescription:
      "Man and van in Prestwich. Family house removals and flat moves across M25 near Heaton Park with fair prices. Call for a quote.",
    intro:
      "Man and van in Prestwich means a lot of family homes and semis in the leafy suburb near Heaton Park. Van and Man Manchester covers M25, handling house removals, flat moves and single item deliveries. It is a popular spot for families, which keeps us busy with full household moves.",
    local: [
      "Prestwich is a well liked suburb to the north of Manchester, close to Heaton Park, with a mix of semis, terraces and newer homes. It draws a lot of families, so full house removals are common, and we bring the crew and the kit to handle a proper household move.",
      "The residential streets are generally manageable for parking, and many homes have driveways or on street space, which makes loading straightforward. We plan the run around your day so the move is calm rather than chaotic.",
      "From Prestwich we cover nearby areas including Salford, Cheetham Hill and Whitefield, so moves between them are short and cheap. Ask for a quote and we will give you a clear figure for the job.",
    ],
    neighbours: ["Salford", "Cheetham Hill", "Whitefield"],
    faqs: [
      {
        q: "Do you handle full family house moves in Prestwich?",
        a: "Yes, that is common here. We bring the right van and crew for a full household move and plan it around your day.",
      },
      {
        q: "Do you cover all of M25?",
        a: "Yes, across Prestwich and the surrounding streets. Give us your postcode and we will confirm and quote.",
      },
    ],
  },
  {
    slug: "stretford",
    name: "Stretford",
    postcode: "M32",
    h1: "Man and Van in Stretford",
    title: "Man and Van in Stretford (M32) | Van and Man Manchester",
    metaDescription:
      "Man and van in Stretford. House and flat removals and deliveries across M32 near the Trafford Centre and tram line. Call for a quote.",
    intro:
      "Man and van in Stretford covers the area between Manchester and Trafford, close to the tram line and the Trafford Centre. Van and Man Manchester handles house removals, flat moves and single item runs across M32. Good tram and road links make it an easy area for us to reach and move around.",
    local: [
      "Stretford sits handily between Manchester city centre and Trafford, with terraces, semis and newer developments, and it is well served by the tram. That connectivity makes it popular with commuters and families, and keeps us busy with a steady mix of house and flat moves.",
      "The terraced streets have the usual tight access, while the newer homes are more straightforward to load. Being near the Trafford Centre, we also get a lot of furniture and single item collections from the shops there. We plan parking around the busier roads.",
      "From Stretford we quickly reach nearby areas including Old Trafford, Chorlton and Sale, so local moves are short and cheap. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Old Trafford", "Chorlton", "Sale"],
    faqs: [
      {
        q: "Do you collect furniture from the Trafford Centre?",
        a: "Yes, that is a common run from Stretford. Send the item details and delivery postcode and we will quote the collection.",
      },
      {
        q: "Do you cover the whole of M32?",
        a: "Yes, across Stretford and the surrounding streets. Give us your postcode and we will confirm and quote.",
      },
    ],
  },
  {
    slug: "sale",
    name: "Sale",
    postcode: "M33",
    h1: "Man and Van in Sale",
    title: "Man and Van in Sale (M33) | Van and Man Manchester",
    metaDescription:
      "Man and van in Sale. Family house removals and flat moves across M33 in Trafford with careful handling and fair prices. Call for a quote.",
    intro:
      "Man and van in Sale means family homes, semis and a well connected Trafford suburb on the tram line. Van and Man Manchester covers M33, handling full house removals, flat moves and single item deliveries. Sale is a popular family area, so household moves are our bread and butter here.",
    local: [
      "Sale is a sought after Trafford suburb with a lot of semis and family homes, good schools and easy tram access into Manchester. Families move here and within here regularly, so we handle plenty of full household removals as well as smaller flat moves near the town centre.",
      "Many homes have driveways or on street parking, which makes loading straightforward and keeps jobs efficient. Near Sale Water Park and the town centre the streets get busier, so we plan timing and parking around it.",
      "From Sale we cover nearby areas including Stretford, Wythenshawe and Altrincham, so moves between them are short and cheap. Ask for a quote and we will give you a clear figure for the job.",
    ],
    neighbours: ["Stretford", "Wythenshawe", "Altrincham"],
    faqs: [
      {
        q: "Do you do family house removals in Sale?",
        a: "Yes, that is common here given all the family homes. We bring the right van and crew and plan it around your day.",
      },
      {
        q: "Do you cover all of M33?",
        a: "Yes, across Sale and the surrounding streets. Give us your postcode and we will confirm and quote.",
      },
    ],
  },
  {
    slug: "salford-quays",
    name: "Salford Quays",
    postcode: "M50",
    h1: "Man and Van in Salford Quays",
    title: "Man and Van in Salford Quays (M50) | Van and Man Manchester",
    metaDescription:
      "Man and van in Salford Quays. Apartment moves around MediaCity with lifts and loading bays handled. Fast, fair and reliable. Call for a quote.",
    intro:
      "Man and van in Salford Quays is almost all apartment moves, given the towers around MediaCity and the waterfront. Van and Man Manchester covers M50, and we plan every job around the goods lifts, concierge desks and timed loading bays that come with modern blocks. Tell us the building and floor and we will handle the rest.",
    local: [
      "Salford Quays and MediaCity are dominated by modern high rise apartments, popular with professionals working in and around the media and tech sector. Almost every move here involves a goods lift you may need to book, a concierge to sign in with and a loading bay with a time limit.",
      "We do this run regularly, so we know how the blocks work and how to load quickly within the loading bay window. That planning is the difference between a smooth hour and an afternoon of trips up and down in the lift. Most Quays flat moves are a single van load.",
      "From Salford Quays we are moments from nearby areas including the city centre, Salford and Old Trafford, so moves between them are short and cheap. Ask for a quote and we will price it on what you are moving.",
    ],
    neighbours: ["Manchester City Centre", "Salford", "Old Trafford"],
    faqs: [
      {
        q: "Do you know how the MediaCity apartment blocks work?",
        a: "Yes, we move here regularly. Book the goods lift if required and let us know the concierge arrangements and floor, and we will plan around them.",
      },
      {
        q: "Are Quays flat moves usually cheap?",
        a: "Most are a single van load, which keeps the cost down. The main thing is planning the lift and loading bay, which we handle.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
