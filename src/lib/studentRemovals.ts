import type { Faq, Section } from "./services";
import { priceRows } from "./pricing";

// -------------------------------------------------------------
// STUDENT REMOVALS CLUSTER.
//
// Campus and hall-level pages. These target named-institution intent
// ("university of manchester student removals") and must NOT restate the
// generic head term owned by /services/student-moves/.
//
// EVERY factual claim here is sourced from the institution's or the
// council's own pages, checked on the date in `reviewed`. Do not add a fact
// to these pages that you have not checked at source.
// -------------------------------------------------------------

/** Figures come from pricing.ts so page copy never drifts from the rate card. */
const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export type StudentPage = {
  slug: string;
  navLabel: string;
  name: string;
  h1: string;
  title: string;
  metaDescription: string;
  cardBlurb: string;
  intro: string[];
  // Short scannable facts for the top of the page. Values must be checkable.
  keyFacts: { label: string; value: string }[];
  sections: Section[];
  // Real hall names, grouped as the institution groups them.
  halls?: { group: string; note: string; names: string[] }[];
  booking: string[];
  faqs: Faq[];
  related: { label: string; path: string }[];
  // Month a human last checked the dates and hall lists on this page.
  reviewed: string;
};

export const studentPages: StudentPage[] = [
  {
    slug: "university-of-manchester",
    navLabel: "University of Manchester",
    name: "University of Manchester",
    h1: "University of Manchester Student Removals",
    title: "University of Manchester Student Removals | Man and Van Manchester",
    metaDescription:
      "Student removals for University of Manchester halls across City, Fallowfield and Victoria Park. Thirty minute drop-off windows and Oxford Road bus gates planned around. Call for a quote.",
    cardBlurb:
      "City, Fallowfield and Victoria Park halls, plus the second year move into a house share.",
    intro: [
      "University of Manchester student removals turn on three things: which of the three residential campuses you are in, a thirty minute drop-off limit at the halls themselves, and a main road that vans are not allowed to use in daylight. We run these moves through every week of September and again across the summer, when second years shift out of halls and into a house share.",
      "Welcome Week for 2026/27 runs from Monday 21 September to Friday 25 September, and Semester 1 teaching starts on Monday 28 September. The weekend either side of Welcome Week is the busiest stretch of our year, so those slots go first and there is no flexibility left in them once they have gone.",
      "The job is the same shape whether it is a car boot of boxes into Unsworth Park or a full four bedroom house share load out of [Withington](/locations/withington/). Get the van as close as the rules actually allow, carry fast with enough hands, and clear the space before anybody else needs it.",
    ],
    keyFacts: [
      { label: "Residential campuses", value: "City, Fallowfield and Victoria Park" },
      { label: "Welcome Week 2026/27", value: "Monday 21 to Friday 25 September 2026" },
      { label: "Semester 1 starts", value: "Monday 28 September 2026" },
      { label: "Drop-off at halls", value: "Restricted to 30 minutes" },
      { label: "Oxford Road", value: "No general traffic 6am to 9pm, every day" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    halls: [
      {
        group: "City Campus",
        note: "North and south of the main campus, so the Oxford Road bus gates decide the approach.",
        names: [
          "Denmark Road",
          "Horniman House",
          "Grafton Street",
          "Square Gardens",
          "Weston Hall",
          "Whitworth Park",
          "Artisan Heights",
          "Kincardine Court",
          "Parkway Gate",
          "Campus Living Village",
        ],
      },
      {
        group: "Fallowfield Campus",
        note: "A live construction site through 2026, with a much shorter hall list than students remember.",
        names: [
          "Ashburne Hall",
          "Richmond Park",
          "Sheavyn House",
          "Unsworth Park",
          "Uttley House (allocation only)",
        ],
      },
      {
        group: "Victoria Park",
        note: "Period halls and newer blocks on residential streets between Rusholme and the campus.",
        names: [
          "Burkhardt House",
          "Canterbury Court",
          "Daisy Bank Hall",
          "Dalton-Ellis Hall",
          "Hulme Hall",
          "Manchester Gardens",
          "Rusholme Place",
          "St Anselm Hall",
          "Wilmslow Park",
        ],
      },
    ],
    sections: [
      {
        h2: "The Three Residential Campuses",
        body:
          "The university splits its halls across City, Fallowfield and Victoria Park, and which one you are allocated changes the route, the carry and often the price. City halls sit on and around the Oxford Road corridor, the most restricted road in Manchester for a van. Fallowfield is two and a half miles south down Wilmslow Road and is part building site this year. Victoria Park sits between the two, a mix of Victorian halls and newer blocks on quieter residential streets.",
        bullets: [
          "City Campus means bus gates, red routes and timed loading rather than pulling up outside.",
          "Fallowfield means construction hoardings, a shifting site entrance and tight terraced streets just beyond the campus.",
          "Victoria Park means residential roads where the van can usually get close, and period buildings whose staircases decide how long the job takes.",
        ],
        outro:
          "Tell us the hall and the floor when you book, not just the campus. A third floor room in a period hall with no lift is a different job from a ground floor flat, and we would rather send two movers than have one person do it twice as slowly.",
      },
      {
        h2: "Fallowfield Campus During the Rebuild",
        body:
          "Fallowfield is mid redevelopment and the hall list is much shorter than it was. Demolition of the Owens Park Tower and Oak House finished in the summer of 2026, with Woolton Hall following shortly afterwards, so several of the buildings students still navigate by are simply not there. The first 1,000 replacement rooms are due to open in 2028, further phases in 2029, and the remaining rooms in 2030, taking the site to around 5,400 bedrooms.",
        outro:
          "The practical effect on a move is access. Site hoardings and construction traffic change where you can stop and how far the carry is, and the arrangement is not the same from one month to the next. We check the current entrance before the day rather than driving in on the assumption that last September still applies.",
        sub: {
          h3: "Fewer Fallowfield Beds Means More Private Houses",
          body:
            "With three buildings gone and the replacements years away, more students are housed in Victoria Park halls or straight into private houses around [Fallowfield](/locations/fallowfield/) and Withington. That changes the shape of the work: fewer single room drop-offs at a hall reception, and more full house share loads into terraces off Wilmslow Road where the whole street is moving on the same day.",
        },
      },
      {
        h2: "The Thirty Minute Drop-Off Limit",
        body:
          "Drop-off at the halls is restricted to thirty minutes, and you are asked to display your mobile number in the car window so staff can reach you. Car parking in halls is limited, so the plan cannot be to park up and unpack at leisure. Thirty minutes is plenty if the van is loaded in the order things come out and there are two people carrying. It is nowhere near enough if boxes have to be dug out from behind a mattress.",
        bullets: [
          "We load last in, first out, so your room comes off the van in one run.",
          "A second mover halves the carry time on a staircase, which is exactly where the thirty minutes goes.",
          "We leave the mobile number in the window and keep the van attended so it can be moved the moment it needs to be.",
        ],
        outro:
          "The arrivals period runs to the start of October, so a midweek slot rather than the Saturday means calmer halls and easier roads around them. If your arrival allows any choice in the matter, take the midweek one.",
      },
      {
        h2: "Oxford Road and the Daytime Bus Gates",
        body:
          "General traffic is not permitted on Oxford Road between 6am and 9pm, seven days a week. Buses, black cabs and pedal cycles only. Our van is not exempt, and neither is a hire van or a parent's car, which catches families out every September. The bus gates on the corridor run northbound from Whitworth Street West to Portland Street, southbound from Cavendish Street to Hulme Street, and northbound from Devas Street to Dover Street.",
        outro:
          "So a City Campus hall is not approached up Oxford Road during the day. We come in off Upper Brook Street, Hathersage Road or the side streets east of the corridor, which looks longer on a map and is faster in practice. Drive it the obvious way and the penalty notice arrives by post a fortnight later. The council publishes the current [bus gate locations and enforcement](https://www.manchester.gov.uk/info/471/parking_in_public_areas/7420/bus_gates/2) if you want to check a route yourself.",
      },
      {
        h2: "Halls to House Share Moves",
        body:
          "The second year move is the bigger job. A year in halls turns a suitcase into a room full of kitchen kit, a desk chair, a drying rack and eight boxes nobody wants to carry down three flights. Most of these runs are short, from a Fallowfield or Victoria Park hall into a terrace a mile away, so the cost sits in loading and stairs rather than mileage.",
        outro:
          "If your housemates are moving on the same day, share the van and split it between you. We can do several pickups and drops on one run when the addresses are close, and on a four person house that is usually the cheapest way it can be done. The general version of this is our [student man and van service](/services/student-moves/), and the area pages for Fallowfield and Withington cover the parking on those streets in more detail.",
      },
      {
        h2: "Storage Runs Between Contracts",
        body:
          "Hall contracts run between 41 and 51 weeks, which leaves a lot of students with a summer gap and nowhere to put anything. We do not run a storage facility and will not pretend otherwise. What we do is the transport leg: load out of halls into a unit you have booked, then bring it back out when the new contract starts.",
        outro:
          "Book the unit first and tell us the access arrangement, because self storage sites have their own loading bays, lift bookings and closing times. A site that shuts at 5pm changes what time we need to start.",
      },
      {
        h2: "What a University of Manchester Move Costs",
        body:
          "Local student moves are priced on time. One mover with a large van starts from " +
          rate("one-large") +
          ", two movers with a large van from " +
          rate("two-large") +
          ", and a single item collection such as a mattress or a desk from " +
          rate("single-item") +
          ". A hall room into a house share a mile away is typically a two to three hour job.",
        outro:
          "Those are starting points rather than fixed quotes, and the exact figure depends on the floor, the stairs and how much there is. The full breakdown and what pushes a price up sits on our [prices page](/prices/), and if you are not sure what will fit, the [van size guide](/our-vans/) beats guessing.",
      },
    ],
    booking: [
      "Tell us the hall, the floor and whether there is a lift.",
      "Give us the date and, if you have one, your allocated arrival slot.",
      "Send a rough list or a photo of the room so we bring the right van and crew.",
      "We confirm the route around the bus gates and the nearest legal stopping point.",
      "Book early for the weekend either side of Welcome Week, because those slots fill first.",
    ],
    faqs: [
      {
        q: "Can you drive up Oxford Road to my hall?",
        a: "Not between 6am and 9pm. Oxford Road is closed to general traffic in those hours, buses, black cabs and cycles only, and a van gets a penalty notice for using it. We approach City Campus halls from Upper Brook Street or the side streets instead, which is quicker anyway.",
      },
      {
        q: "How does the thirty minute drop-off limit work?",
        a: "Drop-off at the halls is restricted to thirty minutes and you display your mobile number in the window. We load the van so your room comes off in a single run, and bring a second pair of hands where there are stairs, which is what keeps the job inside the window.",
      },
      {
        q: "Is Owens Park still there?",
        a: "No. The Owens Park Tower and Oak House were demolished in the summer of 2026 and Woolton Hall followed. Fallowfield stays a construction site until the first new rooms open in 2028, so we check the current site entrance before the day rather than using last year's.",
      },
      {
        q: "Which Fallowfield halls are open for 2026/27?",
        a: "Ashburne Hall, Richmond Park, Sheavyn House, Unsworth Park and Uttley House, the last of which is allocation only. Everything else on that campus is part of the rebuild.",
      },
      {
        q: "Can several of us share one van and split the cost?",
        a: "Yes, and on a house share it is normally the cheapest way to do it. If the addresses are close together we can do multiple pickups and drops on one run.",
      },
      {
        q: "How far in advance should I book for Welcome Week?",
        a: "As early as you can for the weekend either side of 21 to 25 September 2026. Midweek slots stay available longer and the halls are calmer, so take one if your arrival allows it.",
      },
      {
        q: "Can you move me into a storage unit over the summer?",
        a: "We do the transport, not the storage. Book the unit yourself, tell us the site's access and closing time, and we will load out of halls into it, then bring it back when your new contract starts.",
      },
      {
        q: "What does a hall to house share move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". Most hall to house share runs take two to three hours. The exact price depends on the floor, the stairs and how much there is.",
      },
    ],
    related: [
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Man and van in Fallowfield", path: "/locations/fallowfield/" },
      { label: "Man and van in Withington", path: "/locations/withington/" },
      { label: "Man and van in Manchester city centre", path: "/locations/manchester-city-centre/" },
      { label: "Flat and apartment removals", path: "/services/flat-apartment-removals/" },
      {
        label: "How to reserve parking for a move in Manchester",
        path: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/",
      },
    ],
    reviewed: "September 2026",
  },
  {
    slug: "manchester-metropolitan-university",
    navLabel: "Manchester Metropolitan",
    name: "Manchester Metropolitan University",
    h1: "Manchester Metropolitan University Student Removals",
    title: "Manchester Metropolitan University Student Removals | Man and Van Manchester",
    metaDescription:
      "Student removals for Manchester Met halls at All Saints and Birley, plus the partner blocks across the city centre. Loading bays, goods lifts and bus gates handled. Call for a quote.",
    cardBlurb: "All Saints and Birley halls, plus the partner blocks students are now spread across.",
    intro: [
      "Manchester Metropolitan University student removals are a city centre job more than a suburban one. The university runs two campuses, All Saints on the Oxford Road corridor and Birley in Hulme, and its accommodation is a mix of halls on campus and partner blocks scattered through the centre.",
      "That spread got wider this year. Cambridge Halls, which held around 770 beds on the All Saints campus, closed to students in late 2025, and demolition began on Monday 9 February 2026. The replacement, built with Unite Students, will hold roughly 2,300 bedrooms, with phase one due in 2029 and phase two in 2030.",
      "So a Manchester Met move in 2026 is rarely a straight run to one address. It is a purpose built block with a booked goods lift, a loading bay with a time limit, and a security desk that wants a name before anything comes through the door. We plan for all three rather than turning up and hoping.",
    ],
    keyFacts: [
      { label: "Campuses", value: "All Saints, and Birley in Hulme (M15 6GX)" },
      { label: "Between campuses", value: "A short walk, or the Metroshuttle every 10 minutes" },
      { label: "Cambridge Halls", value: "Closed late 2025, demolition began 9 February 2026" },
      { label: "Replacement halls", value: "About 2,300 beds, phase one 2029 and phase two 2030" },
      { label: "Oxford Road", value: "No general traffic 6am to 9pm, every day" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    halls: [
      {
        group: "University Halls",
        note: "On or within a few minutes of the All Saints and Birley campuses.",
        names: [
          "Cavendish",
          "Archway",
          "Oxford Court",
          "Briarfield",
          "Birley Dale",
          "Birley Dunham",
          "Birley Naylor",
          "Birley Vine",
          "Birley Warde (quiet accommodation)",
        ],
      },
      {
        group: "Partner Halls",
        note: "Privately managed blocks across the city, each with its own lift and loading rules.",
        names: [
          "Artisan Heights",
          "Brook Hall",
          "Chandos House (new for 2026)",
          "House of Social (opened September 2025)",
          "New Medlock House",
          "Parkway Gate",
          "Ropemaker Court",
          "Rosamond House",
          "Wilmslow Park",
        ],
      },
    ],
    sections: [
      {
        h2: "All Saints and Birley",
        body:
          "All Saints sits directly on the Oxford Road corridor, which makes it the hardest campus in the city to reach by van during the day. Birley is in Hulme at M15 6GX, a short walk away or a ten minute Metroshuttle, and is reached through the Hulme street network rather than off Oxford Road at all. Knowing which of the two you are heading for changes the whole route.",
        bullets: [
          "All Saints: approached from the side streets and Upper Brook Street, never up Oxford Road between 6am and 9pm.",
          "Birley: reached through Hulme, where the roads are wider and stopping is usually easier than on the corridor.",
          "Partner blocks: scattered from the city centre out to Rusholme, each with its own bay and lift arrangement.",
        ],
        outro:
          "If you are moving between the two campuses, or out of a Birley townhouse into a city centre block, it is a short run where almost all the time goes on loading and lifts rather than driving.",
      },
      {
        h2: "Cambridge Halls Has Gone",
        body:
          "Cambridge Halls closed to students in late 2025 and demolition started on 9 February 2026, taking around 770 beds out of the middle of the All Saints campus in one go. The site is being rebuilt with Unite Students to hold roughly 2,300 bedrooms, but phase one is not due until 2029 and phase two until 2030.",
        outro:
          "For anyone moving this year the consequence is simple. The intake is spread across partner blocks instead of one building on campus, and the building site itself changes which traffic and pedestrian routes are open around All Saints. The university lists what is actually available on its [halls of residence pages](https://www.mmu.ac.uk/study/accommodation/our-halls), where Needham Court is currently showing no rooms for 2026/27.",
      },
      {
        h2: "Loading Bays and Goods Lifts",
        body:
          "Partner blocks are managed buildings, and managed buildings run on bookings. Most have a loading bay with a time limit, a goods lift that has to be reserved in advance, and a reception that signs people in. None of that is a problem if it is arranged. All of it is a problem at 10am on a Saturday in Welcome Week when three other families want the same lift.",
        bullets: [
          "Book the goods lift with the building before you book the van, then tell us the window you were given.",
          "Ask reception where the bay is and how long you have, because it is rarely the front door.",
          "Find out whether there is a service entrance, since it is often closer to the lift than the main lobby.",
        ],
        outro:
          "Send us the building name and the floor and we will tell you what we need from you before the day. A booked lift and a known bay is the difference between a two hour job and a four hour one.",
      },
      {
        h2: "Oxford Road and the Daytime Bus Gates",
        body:
          "General traffic is not permitted on Oxford Road between 6am and 9pm, seven days a week, and only buses, black cabs and pedal cycles are exempt. Because All Saints fronts onto that road, the obvious approach is the one that earns a penalty notice. The corridor bus gates run northbound from Whitworth Street West to Portland Street, southbound from Cavendish Street to Hulme Street, and northbound from Devas Street to Dover Street.",
        outro:
          "We come in off Upper Brook Street, Cambridge Street or the streets behind the campus depending on which block you are in. The council publishes the current [bus gate locations and enforcement](https://www.manchester.gov.uk/info/471/parking_in_public_areas/7420/bus_gates/2), which is worth a look if a relative is driving a car load up separately.",
      },
      {
        h2: "Moving Out of Halls Into a House Share",
        body:
          "Manchester Met second years spread south and west rather than piling into one suburb. Hulme and Moss Side are walkable to Birley, Fallowfield and Withington pull the Oxford Road crowd, and Levenshulme takes a growing share of people who want more space for the rent. These are short runs where the cost is in the carry, not the mileage.",
        outro:
          "Coming out of a managed block is the part people underestimate. The lift needs booking on the way out as well as the way in, and the bay needs booking for a load rather than an unload. Our [student man and van service](/services/student-moves/) covers the general version of these moves, while [Hulme](/locations/hulme/) and [Manchester city centre](/locations/manchester-city-centre/) go into the access on those streets.",
      },
      {
        h2: "What a Manchester Met Move Costs",
        body:
          "City centre student moves are priced on time, and in a managed block the clock runs on lifts and corridors rather than roads. One mover with a large van starts from " +
          rate("one-large") +
          ", two movers with a large van from " +
          rate("two-large") +
          ", and a single item run such as a mattress or a desk from " +
          rate("single-item") +
          ".",
        outro:
          "On an upper floor with a shared goods lift, two movers usually works out cheaper overall than one, because the bottleneck is how many trips the lift has to make rather than how fast anyone walks. The full pricing breakdown is on our [prices page](/prices/).",
      },
    ],
    booking: [
      "Tell us the block, the floor and whether the goods lift needs booking.",
      "Book the lift and the loading bay with the building, then send us the window.",
      "Give us the date and your arrival slot if the block issued one.",
      "Send a rough list or a photo so we bring the right van and crew.",
      "Book early for the September intake, when every block in the centre is busy at once.",
    ],
    faqs: [
      {
        q: "Where is Cambridge Halls now?",
        a: "It has gone. Cambridge Halls closed to students in late 2025 and demolition began on 9 February 2026. The replacement, built with Unite Students, is not due to open its first phase until 2029, so this year's intake is spread across university and partner blocks instead.",
      },
      {
        q: "Can you drive up Oxford Road to All Saints?",
        a: "Not between 6am and 9pm, when the road is restricted to buses, black cabs and cycles. We approach from Upper Brook Street, Cambridge Street or the streets behind the campus depending on the block.",
      },
      {
        q: "Do I need to book the goods lift?",
        a: "In almost every partner block, yes, and it is the single most useful thing you can do before the move. Book it with the building, tell us the window, and the job stays inside the time we quoted.",
      },
      {
        q: "How far is Birley from All Saints?",
        a: "A short walk, or the Metroshuttle which runs every ten minutes during the day. Birley is in Hulme at M15 6GX and is reached through the Hulme roads rather than off Oxford Road.",
      },
      {
        q: "Can you move me between two halls?",
        a: "Yes, room to room and block to block moves are routine. They are short runs, so the price sits in the loading and the lifts rather than the distance.",
      },
      {
        q: "Which Manchester Met halls are open for 2026/27?",
        a: "The university halls are Cavendish, Archway, Oxford Court, Briarfield and the Birley houses, which are Dale, Dunham, Naylor, Vine and Warde. Partner blocks include Artisan Heights, Brook Hall, Chandos House, House of Social, New Medlock House, Parkway Gate, Ropemaker Court, Rosamond House and Wilmslow Park. Needham Court shows no rooms for 2026/27.",
      },
      {
        q: "What does a city centre block move cost?",
        a:
          "From " +
          rate("one-large") +
          " with one mover and a large van, or from " +
          rate("two-large") +
          " with two. On an upper floor with a shared lift, two movers usually works out cheaper overall because the lift is the bottleneck.",
      },
      {
        q: "Can several of us share a booking?",
        a: "Yes. If the addresses are close, we can do several pickups and drops on one run, which is normally the cheapest way for a house share to move.",
      },
    ],
    related: [
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Man and van in Hulme", path: "/locations/hulme/" },
      { label: "Man and van in Manchester city centre", path: "/locations/manchester-city-centre/" },
      { label: "Flat and apartment removals", path: "/services/flat-apartment-removals/" },
      { label: "Furniture and single item delivery", path: "/services/furniture-delivery/" },
      {
        label: "How to prepare for a flat move",
        path: "/moving-guides/how-to-prepare-for-a-flat-move/",
      },
    ],
    reviewed: "September 2026",
  },
  {
    slug: "university-of-salford",
    navLabel: "University of Salford",
    name: "University of Salford",
    h1: "University of Salford Student Removals",
    title: "University of Salford Student Removals | Man and Van Manchester",
    metaDescription:
      "Student removals for University of Salford halls at Peel Park and Frederick Road, plus MediaCity. Crescent roadworks, arrival slots and January starts planned around. Call for a quote.",
    cardBlurb:
      "Peel Park Quarter, John Lester and Eddie Colman Courts, and the moves that happen outside September.",
    intro: [
      "University of Salford student removals run on a different calendar from the rest of Greater Manchester. Salford teaches in trimesters, so Welcome Week for 2026/27 ran from 7 to 13 September, a week or more before the Manchester universities, and there is a second wave of arrivals in January when Trimester 2 starts on 18 January 2027.",
      "The university has two halls of its own, both run by Campus Living Villages. Peel Park Quarter is on the main campus beside Peel Park and is for first year undergraduates only. John Lester and Eddie Colman Courts sits near the Frederick Road campus and houses postgraduates and returning students, including the short contracts that begin or end at the turn of the year.",
      "Salford is its own city rather than a Manchester suburb, and the campus straddles the A6 at The Crescent, which is in the middle of two major works schemes this autumn. We move students across all of it, from a single room at Peel Park into a shared house across [Salford](/locations/salford/), or out to a flat near MediaCity at [Salford Quays](/locations/salford-quays/).",
    ],
    keyFacts: [
      { label: "Campuses", value: "Peel Park (M5 4WT), Frederick Road (M6 6PU), MediaCity (M50 2HE)" },
      { label: "Welcome Week 2026/27", value: "7 to 13 September 2026" },
      { label: "Trimester 2 starts", value: "18 January 2027" },
      { label: "University halls operator", value: "Campus Living Villages" },
      { label: "Trinity Way and Chapel Street works", value: "Temporary signals until mid-November 2026" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    halls: [
      {
        group: "University Halls",
        note: "Both run by Campus Living Villages in partnership with the university.",
        names: [
          "Peel Park Quarter (first year undergraduates only)",
          "John Lester and Eddie Colman Courts (postgraduates and returning students)",
        ],
      },
      {
        group: "Private Halls the University Lists",
        note: "Independently run blocks, each with its own check-in and loading arrangements.",
        names: ["iQ Student Quarter", "Riverside House", "Sanctuary Tramways", "True Manchester"],
      },
    ],
    sections: [
      {
        h2: "Three Campuses Either Side of The Crescent",
        body:
          "The university works across three sites. Peel Park is the main campus at 43 Crescent, M5 4WT. Frederick Road sits on Broad Street at M6 6PU, with Salford Crescent station between the two. MediaCity is a separate site in the Orange Tower at Salford Quays, M50 2HE, a couple of miles away beside the ship canal. The university itself describes parking as limited and something that needs planning in advance, which is also the best summary of moving a room in or out.",
        bullets: [
          "Peel Park: the busiest arrival point, on the main A6 corridor, where the first year halls are.",
          "Frederick Road: quieter streets and a multi-storey car park with around 450 spaces, close to John Lester and Eddie Colman Courts.",
          "MediaCity: apartment blocks and managed buildings, where goods lifts and loading bays decide the timing rather than the traffic.",
        ],
        outro:
          "Tell us which site and which block, because a move into Peel Park Quarter and a move out of a Quays apartment are two very different jobs even though the university is the same.",
      },
      {
        h2: "Roadworks at The Crescent This Autumn",
        body:
          "Two schemes shape every Salford campus move until the end of 2026. The Trinity Way and Chapel Street junction improvement runs until mid-November 2026, with temporary traffic signals in place around the clock and lane closures on weekdays between 9:30am and 3:30pm, although two lanes stay open on every approach at peak times. At the same time Network Rail is adding a third platform at Salford Crescent station, due to open in December 2026.",
        outro:
          "For a van that means avoiding the middle of a weekday on the Chapel Street side where we can, and allowing more time than the distance suggests. An early start before 9:30am or an afternoon run after 3:30pm is often quicker overall than a late morning slot. The university keeps a [campus disruptions page](https://salford.ac.uk/campus/estates/campus-disruptions) with the current closures, and we check it before the day.",
      },
      {
        h2: "Arrival Slots at Peel Park Quarter",
        body:
          "Most Salford student tenancies start in Welcome Week, and the university tells new students they will usually need to book an arrival slot in advance. Peel Park Quarter's 2026/27 contracts started in September, and John Lester and Eddie Colman Courts contracts started on 7 September 2026. If you missed the main weekend, a later arrival is quieter and easier on the roads, but the building still needs to know you are coming.",
        bullets: [
          "Book your arrival slot with the hall first, then book the van to match it.",
          "Tell us the block and floor so we can bring a second mover if there are stairs to deal with.",
          "Keep the essentials in one clearly marked box, because the kettle and the bedding are always the first things wanted.",
        ],
      },
      {
        h2: "Salford Moves Happen Outside September",
        body:
          "Because Salford teaches in trimesters, its contracts are more varied than most. At John Lester and Eddie Colman Courts there is a 17 week contract that runs from 7 September 2026 to 4 January 2027, and a 24 week contract that runs from 11 January to 28 June 2027. That makes early January a genuine moving week in Salford, with one group leaving and another arriving within days of each other.",
        outro:
          "The summer end dates matter too. At Peel Park Quarter the 42 week contract ends on 22 June 2027 and the 51 week contract on 24 August 2027. At John Lester and Eddie Colman Courts they end on 28 June and 30 August 2027. Those late June dates fall weeks before the Manchester universities finish, so Salford students are moving out while the other halls are still full. The full calendar is on the university's [term dates page](https://www.salford.ac.uk/student-life/term-dates).",
      },
      {
        h2: "From Halls Into a Salford House Share",
        body:
          "After first year, most students leave Peel Park Quarter for a shared house or a flat. Plenty stay close to campus, and some head towards Salford Quays for the apartment blocks near MediaCity. The distance is usually short, so the price sits in the loading, the stairs and how well everything is boxed up.",
        outro:
          "Moving on the same day as your housemates is the cheapest way to do it, because we can collect from several rooms and drop at one address in a single run. The general version of this service is our [student man and van](/services/student-moves/) page, and if you are moving between two universities, the [University of Manchester](/student-removals/university-of-manchester/) page covers the Oxford Road side of the city.",
      },
      {
        h2: "What a University of Salford Move Costs",
        body:
          "Local student moves are priced on time. One mover with a small van starts from " +
          rate("one-small") +
          ", one mover with a large van from " +
          rate("one-large") +
          ", two movers with a large van from " +
          rate("two-large") +
          ", and a single item such as a mattress or a desk from " +
          rate("single-item") +
          ".",
        outro:
          "A room out of Peel Park Quarter into a house nearby usually fits one van load. Upper floors, a long carry from the nearest legal stopping point, or a midday run through the Crescent works all add time. The full breakdown is on our [prices page](/prices/).",
      },
    ],
    booking: [
      "Tell us the hall or house, the floor and whether there is a lift.",
      "Book your arrival or checkout slot with the building, then send us the time.",
      "Send a rough list or a photo of the room so we bring the right van.",
      "We plan the route around the Trinity Way and Chapel Street works.",
      "For a January move, book before the Christmas break because that week fills quickly.",
    ],
    faqs: [
      {
        q: "When is University of Salford Welcome Week?",
        a: "For 2026/27 it ran from 7 to 13 September 2026, with Trimester 1 teaching starting on 14 September. That is earlier than the University of Manchester and Manchester Met, so Salford arrivals come first.",
      },
      {
        q: "Who runs the Salford halls?",
        a: "Campus Living Villages runs both university halls, Peel Park Quarter and John Lester and Eddie Colman Courts, in partnership with the university. Peel Park Quarter is for first year undergraduates only.",
      },
      {
        q: "Will the roadworks at The Crescent slow my move down?",
        a: "They can. The Trinity Way and Chapel Street junction works keep temporary signals in place until mid-November 2026, with lane closures on weekdays from 9:30am to 3:30pm. We avoid that window where we can and plan the route before the day.",
      },
      {
        q: "Do you move students in January?",
        a: "Yes. Trimester 2 starts on 18 January 2027, and John Lester and Eddie Colman Courts has contracts ending on 4 January and starting on 11 January, so early January is a busy moving week in Salford.",
      },
      {
        q: "When do Salford hall contracts end in summer 2027?",
        a: "Peel Park Quarter's 42 week contract ends on 22 June 2027 and its 51 week contract on 24 August 2027. John Lester and Eddie Colman Courts end on 28 June and 30 August 2027.",
      },
      {
        q: "Is there parking at the Frederick Road campus?",
        a: "The Frederick Road multi-storey car park is open with around 450 spaces. The university still describes parking as limited and advises planning ahead, so we confirm the nearest stopping point for the van before moving day.",
      },
      {
        q: "Can you move me from Salford to a flat at Salford Quays?",
        a: "Yes, it is a short run and a regular one. The time goes on the apartment block's goods lift and loading bay, so book those with the building and tell us the window.",
      },
      {
        q: "What does a Salford student move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". Most room moves fit one van load, and the exact price depends on the floor, the carry and how much there is.",
      },
    ],
    related: [
      { label: "Man and van in Salford", path: "/locations/salford/" },
      { label: "Man and van in Salford Quays", path: "/locations/salford-quays/" },
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "University of Manchester student removals", path: "/student-removals/university-of-manchester/" },
      { label: "Flat and apartment removals", path: "/services/flat-apartment-removals/" },
      { label: "What size van do I need", path: "/moving-guides/what-size-van-do-i-need-for-my-move/" },
    ],
    reviewed: "September 2026",
  },
];

export const getStudentPage = (slug: string) => studentPages.find((p) => p.slug === slug);
