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
    title: "University of Manchester Student Removals | Frank's Van and Man Manchester",
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
    title: "Manchester Metropolitan University Student Removals | Frank's Van and Man Manchester",
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
    title: "University of Salford Student Removals | Frank's Van and Man Manchester",
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
  {
    slug: "victoria-park",
    navLabel: "Victoria Park",
    name: "Victoria Park",
    h1: "Student Removals Victoria Park Manchester",
    title: "Student Removals Victoria Park Manchester | Frank's Van and Man Manchester",
    metaDescription:
      "Student removals in Victoria Park, M14: the 1837 gated estate, the Rusholme and Moss Side permit scheme on Upper and Lower Park Road, Anson Road and the private halls. Get a quote.",
    cardBlurb:
      "The old gated estate south of the university, its 2024 permit scheme, and the private halls on Upper Park Road.",
    intro: [
      "Victoria Park is a conservation area three kilometres south of the city centre, between the backs of Wilmslow Road and Anson Road, and a student move here runs on residential streets rather than campus roads.",
      "Several [University of Manchester halls](/student-removals/university-of-manchester/) sit inside the estate alongside private halls and houses. This page is about the streets themselves: the residents' parking scheme that went live in January 2024, Anson Road, and the long front gardens that set the length of the carry.",
      "Runs across to [Longsight](/locations/longsight/) on the east side or down Wilmslow Road to [Fallowfield](/locations/fallowfield/) are short, so the time on the day goes on loading rather than driving.",
    ],
    keyFacts: [
      { label: "Conservation area", value: "Designated March 1972" },
      { label: "Estate launched", value: "1837, as a 70 acre private estate" },
      { label: "Residents' parking", value: "Rusholme and Moss Side scheme, live since January 2024" },
      { label: "Not in the scheme", value: "Anson Road" },
      { label: "Visitor permit", value: "£45 a year for up to 10 vehicles" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    sections: [
      {
        h2: "A Gated Estate From 1837",
        body:
          "Victoria Park was laid out as a 70 acre private estate and launched in 1837. Historic England describes it as the first gated suburban residential park in Manchester and one of the earliest in the country, and the council records that for decades access could be gained only by paying a toll at the entrance gates. Anson Road was cut through it in the 1920s, and the council designated what remained a conservation area in March 1972.",
        outro:
          "The listing for one of the original houses, on Oxford Place, sets out the estate's early history in Historic England's [Brook House entry](https://historicengland.org.uk/listing/the-list/list-entry/1479087).",
      },
      {
        h2: "Wide Roads, Verges and Long Front Gardens",
        body:
          "The council's appraisal describes the roads as nearly all wide, some laid out in gentle curves and some with grass verges. Park Crescent is a circular road that works like a roundabout. Where the verges meet driveways they have been damaged by car tyres, and the most vulnerable stretches have been paved with granite setts.",
        outro:
          "For a van that means room to stop but a longer walk. The council notes that Dalton Hall is the only building in the conservation area close to the back of the pavement; everything else sits behind broad gardens with trees, some behind walls high enough to hide the house from the road. We keep the van on the road, not the verge, so the carry is the length of the front garden. Tell us whether it is a front door at the end of a drive or a flat at the back of a large house, because that sets the time more than the mileage does.",
      },
      {
        h2: "Residents' Parking Since January 2024",
        body:
          "Victoria Park is inside the Rusholme and Moss Side residents' parking scheme, whose restrictions came into force in January 2024. No bays are marked. Each street has a sign at its entrance giving the permit hours, and outside those hours there is no restriction. A permit does not allow parking on double yellow lines at any time, or on single yellows during the restricted hours.",
        bullets: [
          "In the scheme: Upper Park Road, Lower Park Road, Conyngham Road, Park Crescent, Park Range, Crescent Range, Kent Road West and Oxford Place.",
          "Only some house numbers on Daisy Bank Road and Denison Road are listed.",
          "Anson Road is not on the list.",
        ],
        outro:
          "If you live on one of those streets, the household visitor permit lets you register vehicles online and change them as often as you need, and when the council consulted on the scheme it set that permit at £45 a year for up to 10 vehicles. Ask us for the van's registration a few days before. Otherwise we read the sign on the day and work to its hours. The full street list is on the council's [scheme address page](https://www.manchester.gov.uk/parking/parking-at-your-home/resident-parking-schemes/rusholme-and-moss-side-residents-parking-scheme/list-of-addresses-included-in-the-scheme).",
      },
      {
        h2: "Anson Road and the Approach",
        body:
          "Anson Road forms the eastern edge of the conservation area. The council describes it as a major radial route from the city centre, and says that together with the Rusholme shops on Wilmslow Road it makes traffic noise a problem for the estate. It is outside the permit scheme, but it is a main road, and a van loading on it holds up everything behind it.",
        outro:
          "So we load from the side streets wherever the house allows, and keep Anson Road for the drive. Coming from town it is also the way in, because Oxford Road is open only to buses, black cabs and cycles from 6am to 9pm every day. If a side street has no space at all on the day, [reserving parking for the move](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) is the fallback.",
      },
      {
        h2: "Private Halls on Upper Park Road",
        body:
          "Not every hall in Victoria Park belongs to the university. Njoy Student Living runs Langdale Hall on Upper Park Road, M14 5RJ, which it reserves for second years and above, and points first years to its Langdale Courtyard and Carfax Court flats instead. Langdale Hall rooms are let on 51 week and 45 week contracts.",
        outro:
          "Those contract lengths decide the summer. A 45 week contract ends weeks before a 51 week one, and a room on the shorter contract either goes home, goes into [summer storage](/services/student-storage-manchester/), or moves straight to next year's house. Check the end date on your own contract, because that, not the term timetable, is when the room has to be empty.",
      },
      {
        h2: "What a Victoria Park Move Costs",
        body:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". A room in a hall or a house share is usually one van load. On these streets the time goes on the walk from the road to the front door and up the stairs, so the floor and the length of the garden matter more than the distance.",
        outro: "Every band we quote from is [published on the rate card](/prices/).",
      },
    ],
    booking: [
      "Tell us the street and house number, and whether the room is at the front or the back of the building.",
      "Check the sign at the entrance to your street for the permit hours, or tell us the street and we will.",
      "If you are in the scheme, register the van on your visitor permit once we send the registration.",
      "Give us your contract end date, not the term date.",
      "We confirm the time, the van and the price in writing before the day.",
    ],
    faqs: [
      {
        q: "Is Victoria Park in a residents' parking zone?",
        a: "Its main roads are. Victoria Park is inside the Rusholme and Moss Side scheme, live since January 2024, which lists Upper Park Road, Lower Park Road, Conyngham Road, Park Crescent, Park Range, Crescent Range, Kent Road West and Oxford Place. Anson Road is not on the list.",
      },
      {
        q: "Can a removal van park in the Rusholme and Moss Side scheme?",
        a: "Outside the hours on the street sign there is no restriction. Inside them, a resident can register the van on the household visitor permit, which the council set at £45 a year for up to 10 vehicles when it consulted on the scheme.",
      },
      {
        q: "Who runs Langdale Hall in Victoria Park?",
        a: "Njoy Student Living, from Langdale Hall on Upper Park Road, M14 5RJ. It reserves Langdale Hall for second years and above and offers first years its Langdale Courtyard and Carfax Court flats.",
      },
      {
        q: "Is Victoria Park part of the University of Manchester?",
        a: "No. It is a residential conservation area, designated in March 1972, that contains several University of Manchester halls alongside private halls and houses.",
      },
      {
        q: "Can you drive up Oxford Road to Victoria Park?",
        a: "Not between 6am and 9pm, when Oxford Road's bus gates are open only to buses, black cabs and cycles, and a penalty notice is £70. A van from town comes down Anson Road instead.",
      },
      {
        q: "Why does a Victoria Park move take longer than the distance suggests?",
        a: "Because of the carry. The council notes that Dalton Hall is the only building in the conservation area close to the pavement, and the rest sit behind broad front gardens, so every box walks the length of the garden.",
      },
      {
        q: "What does a Victoria Park student move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". Most room moves fit one van load, and the exact price depends on the floor, the carry and how much there is.",
      },
    ],
    related: [
      { label: "University of Manchester student removals", path: "/student-removals/university-of-manchester/" },
      { label: "Man and van in Longsight", path: "/locations/longsight/" },
      { label: "Man and van in Fallowfield", path: "/locations/fallowfield/" },
      { label: "Student storage in Manchester", path: "/services/student-storage-manchester/" },
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Reserving parking for a move", path: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "international-students",
    navLabel: "International Students",
    name: "International Students",
    h1: "International Student Removals Manchester",
    title: "International Student Removals Manchester | Frank's Van and Man Manchester",
    metaDescription:
      "International student removals in Manchester: the airport run, arriving before your contract, customs relief on shipped belongings, eVisas, council tax and the shorter Graduate visa from 2027.",
    cardBlurb:
      "Arriving through Manchester Airport, shipping boxes in under customs relief, and the end of course move under the new Graduate visa rules.",
    intro: [
      "An international student's Manchester move comes in two halves: two suitcases off a plane in September, and a room's worth of belongings to sort out when the course ends.",
      "The University of Manchester says it welcomes one of the largest international student populations in the UK each year. We move students at all three universities, from [Manchester Met](/student-removals/manchester-metropolitan-university/) blocks in the city centre to the halls at [Salford](/student-removals/university-of-salford/) and the [University of Manchester](/student-removals/university-of-manchester/).",
      "This page covers what is different when you come from abroad: the airport, the dates on your visa, customs on anything you ship, council tax once you leave halls, and the 2027 change to the Graduate visa that moves the end of course date for a lot of people.",
    ],
    keyFacts: [
      { label: "Airport to city centre", value: "14km, about 20 minutes by train" },
      { label: "Taxi to university accommodation", value: "£25 to £35, 25 to 30 minutes" },
      { label: "Earliest arrival, course over 6 months", value: "1 month before, never before the visa start date" },
      { label: "Shipped belongings", value: "Student customs relief, CPC 40 00 C06, no ToR1 form" },
      { label: "Graduate visa from 1 January 2027", value: "18 months, down from 2 years" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    sections: [
      {
        h2: "Manchester Airport and the First Night",
        body:
          "Manchester Airport is 14 kilometres south of the city centre. The University of Manchester says the train to Piccadilly or Oxford Road takes about 20 minutes, and that a taxi to university accommodation is likely to cost £25 to £35 and take 25 to 30 minutes, depending on traffic and luggage. TfGM lists the 43 and 103 buses from the airport to Piccadilly Gardens among the routes serving the Oxford Road campus.",
        outro:
          "The university ran an airport welcome desk in the arrivals halls from 8am to 8pm on 16 to 18 September 2026. Outside those days you make your own way, and its advice is to check you can get into your accommodation on the day you land, in line with your contract start date. Suitcases fit in a taxi. A van is for what comes later: the bedding, desk chair and kitchen kit bought in the first week, and any boxes sent on ahead.",
      },
      {
        h2: "Arriving Before Your Contract Starts",
        body:
          "GOV.UK lets you arrive up to one month before a course that lasts more than six months, or up to one week before a shorter one, but never before the start date on your visa. Hall and private contracts do not always start that early, so some students land with a gap of days between the flight and the keys.",
        outro:
          "If that happens, the boxes have to wait somewhere. We can bring them over from wherever you are staying once the room opens, and for a gap of weeks rather than days, [storage](/services/student-storage-manchester/) bridges the dates.",
      },
      {
        h2: "Customs Relief on Shipped Belongings",
        body:
          "If you are coming to the UK for full-time study, you can ship your personal belongings in under customs relief without the ToR1 form that people moving here permanently fill in. GOV.UK tells students to have their shipping agent declare the goods under customs procedure code 40 00 C06 and to send evidence of the period of study with the entry. The relief covers clothing, the things you need for your studies, including a computer, and household effects. Alcohol and tobacco are excluded.",
        outro:
          "The usual rule that you must have owned the goods for six months before moving does not apply to students. If you stay in the UK after graduating, you can claim transfer of residence relief within 12 months of graduation using the ToR1 form. The detail is in GOV.UK's [transfer of residence guidance](https://www.gov.uk/guidance/transfer-of-residence-to-great-britain).",
      },
      {
        h2: "Your eVisa and Renting a Room",
        body:
          "Biometric residence permits have gone. GOV.UK says all BRPs have now expired and been replaced by eVisas, a digital record of your immigration status. You travel with the passport you have added to your UKVI account, and you use a share code from that account when you rent a home or start a job.",
        outro:
          "In England a private landlord checks your right to rent before the tenancy starts, so have the share code ready before moving day rather than on it. A late check means [a late key](/moving-guides/keys-delayed-moving-day/), and a late key leaves the van waiting at the kerb.",
      },
      {
        h2: "Council Tax Once You Leave Halls",
        body:
          "Halls of residence are automatically exempt from council tax in Manchester. A house or flat is not. If everyone living there is a full-time student you will usually have to apply for the exemption, with your student ID, your university, your course dates and the address, and tell the council when your course ends.",
        outro:
          "One rule matters to international students in particular. The council can also exempt a home where a full-time student's partner or dependant is not a British citizen and is not allowed to work or claim benefits in the UK, and it asks for a copy of the visa and proof of no recourse to public funds. Apply when you move into the house, not when the first bill arrives.",
      },
      {
        h2: "When the Course Ends",
        body:
          "On a course of 12 months or longer, a Student visa runs for four months after the course end date; on a course of six to twelve months, for two. If you want to stay and work, you apply for the Graduate visa from inside the UK before the Student visa expires, and you can apply as soon as the university has told the Home Office you have completed the course, without waiting for graduation.",
        outro:
          "The length is changing. A Graduate visa lasts two years if you apply on or before 31 December 2026, and 18 months if you apply on or after 1 January 2027. Staying on usually means leaving a student room for a first flat on an ordinary tenancy, and a room's worth of belongings with a desk and a bike is a single [van load](/services/man-and-van-hire/). The dates are on GOV.UK's [Graduate visa page](https://www.gov.uk/graduate-visa).",
      },
      {
        h2: "Going Home for Good",
        body:
          "Leaving the UK means splitting a room three ways: what goes in the suitcase, what is shipped, and what stays behind. Shipping overseas is a job for a freight forwarder or a student shipping company. The Manchester end of it is a van job: furniture that has been sold [delivered to its new owner](/services/furniture-delivery/) across town, and whatever nobody wants [cleared](/services/rubbish-removal/) rather than left for the landlord.",
        outro:
          "Book that end of it for before the visa and the contract run out, not after. A room still full on the last day of a contract is the most expensive version of the move.",
      },
      {
        h2: "What an International Student Move Costs",
        body:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". A room in halls is usually one van load, and the price depends on the floor, the carry and how much there is, the same as for any student move.",
        outro: "Every band we quote from is [published on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us your hall or street address and your contract start or end date.",
      "If boxes are arriving separately, tell us roughly how many and where they will be.",
      "Tell us the floor, whether there is a lift, and the nearest place to stop.",
      "We confirm the time, the van and the price in writing before the day.",
    ],
    faqs: [
      {
        q: "How do I get from Manchester Airport to my accommodation?",
        a: "The University of Manchester says the train to Piccadilly or Oxford Road takes about 20 minutes, and a taxi to university accommodation costs around £25 to £35 and takes 25 to 30 minutes. TfGM lists the 43 and 103 buses from the airport among the routes serving the Oxford Road campus.",
      },
      {
        q: "How early can I arrive in Manchester before my course?",
        a: "Up to one month before a course that lasts more than six months, or one week before a shorter one, but never before the start date on your visa. Check your accommodation contract start date as well.",
      },
      {
        q: "Do I pay import duty on belongings I ship to the UK as a student?",
        a: "Not usually, if you are coming for full-time study. Students can claim customs relief without the ToR1 form: the shipping agent declares the goods under customs procedure code 40 00 C06, with evidence of your period of study. Alcohol and tobacco are excluded.",
      },
      {
        q: "Do I still need my BRP?",
        a: "No. GOV.UK says all BRPs have now expired and have been replaced by eVisas. An expired card can still be used for a few account tasks, such as signing in and getting a share code, until 31 December 2026 at the latest.",
      },
      {
        q: "Do international students pay council tax in Manchester?",
        a: "Not in halls, which are automatically exempt. In a house or flat where everyone is a full-time student you usually need to apply for the exemption. A home can also be exempt where a student's partner or dependant is not British and is not allowed to work or claim benefits.",
      },
      {
        q: "How long can I stay after my course ends?",
        a: "On a course of 12 months or longer, a Student visa runs for four months after the course end date. On a course of six to twelve months, it runs for two.",
      },
      {
        q: "How long is the Graduate visa?",
        a: "Two years if you apply on or before 31 December 2026, and 18 months if you apply on or after 1 January 2027. You must apply from inside the UK before your Student visa expires.",
      },
      {
        q: "Can you ship my belongings home?",
        a: "Overseas shipping is a job for a freight forwarder or a student shipping company. We handle the Manchester side: furniture to new owners, unwanted items cleared, and the move into a flat if you are staying.",
      },
    ],
    related: [
      { label: "University of Manchester student removals", path: "/student-removals/university-of-manchester/" },
      { label: "Manchester Met student removals", path: "/student-removals/manchester-metropolitan-university/" },
      { label: "University of Salford student removals", path: "/student-removals/university-of-salford/" },
      { label: "Student storage in Manchester", path: "/services/student-storage-manchester/" },
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Keys delayed on moving day", path: "/moving-guides/keys-delayed-moving-day/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "hulme",
    navLabel: "Hulme",
    name: "Hulme",
    h1: "Student Removals Hulme Manchester",
    title: "Student Removals Hulme Manchester | Frank's Van and Man Manchester",
    metaDescription:
      "Student removals in Hulme, M15: Briarfield and the Birley halls, the four Hulme resident parking zones and their hours, the Loxford Street permit area and the Birley Fields plans. Get a quote.",
    cardBlurb:
      "Briarfield and the Birley halls, the four Hulme permit zones, and the streets where a van cannot park at any hour.",
    intro: [
      "Hulme sits just south of the city centre, and a student move here is shaped by Manchester Met halls, four resident parking zones and one area where only permit holders can park at any hour.",
      "Manchester Student Homes, the universities' housing service, describes Hulme in its [neighbourhood guide](https://www.manchesterstudenthomes.com/Pages/neighbourhood%20guides) as host to Manchester Met's Birley campus and a 10 to 15 minute walk from the universities. The rest of the [Manchester Met halls](/student-removals/manchester-metropolitan-university/), in the city centre, run on loading bays and goods lifts. Hulme runs on permit zones, and knowing which one a street is in decides where the van stands.",
      "One name catches people out. Hulme Hall is a University of Manchester hall in [Victoria Park](/student-removals/victoria-park/), not in Hulme, so check the postcode before you book.",
    ],
    keyFacts: [
      { label: "Briarfield Hall", value: "23 Stretford Road, Hulme, M15 6DD" },
      { label: "Birley arrival address", value: "53 Bonsall Street, M15 6GX" },
      { label: "Resident parking zones", value: "H1, H2, H4 and the Loxford Street area" },
      { label: "H1, H2 and H4", value: "Free for 2 or 3 hours, 8am to 6pm weekdays; no limit outside those hours" },
      { label: "Loxford Street area", value: "Permit holders only, at all times" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    sections: [
      {
        h2: "Briarfield and the Birley Halls",
        body:
          "Manchester Met gives Briarfield Hall's address as 23 Stretford Road, Hulme, M15 6DD, and students check in and collect their fob at the Wilmott reception desk. For the Birley halls the university asks arrivals to use 53 Bonsall Street, M15 6GX; keycards come from the Brooks Building outside the accommodation, or from Archway Halls after the check-in weekend.",
        bullets: [
          "Briarfield Hall: 23 Stretford Road, M15 6DD, fobs from the Wilmott reception desk.",
          "Birley townhouses Dale and Naylor: Bonsall Street, M15 6GR and M15 6GU.",
          "Birley arrivals: 53 Bonsall Street, M15 6GX, keycards from the Brooks Building.",
        ],
        outro:
          "Parking at the Birley halls is limited to Blue Badge holders, so the van stops on the street. That is where the permit zones come in.",
      },
      {
        h2: "Four Permit Zones and When They Apply",
        body:
          "Hulme has a council resident parking scheme in four areas: the Hulme High Street area (H1), Arnott Crescent and the Monton Estate (H2), Old Birley Street and the Royce Road and Rolls Crescent area (H4), and the Loxford Street area. In the first three, anyone can park for two or three hours between 8am and 6pm on weekdays, and a permit is needed only to stay longer. In H1 and H4 the council says there are no restrictions outside those hours.",
        outro:
          "That makes a Hulme move easier to time than most. A single room fits inside a two hour stay, a Saturday move sits outside the scheme hours, and a longer weekday job can start late in the afternoon. A permit never covers double yellow lines, and the council's own note is that normal loading rules apply. The street lists are on the council's [Hulme resident parking scheme page](https://www.manchester.gov.uk/parking/parking-at-your-home/resident-parking-schemes/hulme-resident-parking-scheme).",
      },
      {
        h2: "Loxford Street Is Permits Only",
        body:
          "The Loxford Street area works differently. The council's rule there is resident permit holder parking only, at all times, and the area takes in listed addresses on Bonsall Street, Hornchurch Court, Broomwood Walk, Chevril Close and parts of Clarendon Street. There is no free first two hours and no weekend gap.",
        outro:
          "For a move from one of those addresses we plan where the van stands before the day, and the walk from the nearest legal spot goes into the time. Give us the exact address, flat number included, so we can check it against the council's list.",
      },
      {
        h2: "Renting a Student House in Hulme",
        body:
          "Hulme is outside every selective licensing area the council lists, and the council has no additional HMO licensing scheme. Mandatory HMO licensing still applies: a privately rented house occupied by five or more people forming two or more households, who share a kitchen, bathroom or laundry, must be licensed.",
        outro:
          "So for a house share of five or more, ask the landlord for the licence before you sign. Since 1 May 2026 most private tenancies in England are rolling tenancies with no end date, student houses included, so a house share now ends on [notice under the new rules](/moving-guides/moving-out-rental-checklist/) rather than on a date in the contract.",
      },
      {
        h2: "Birley Fields and What Comes Next",
        body:
          "On 17 March 2026 the council chose Glenbrook to develop the Birley Fields site in Hulme, which it described as underused for many years. The current proposals are for 293 affordable homes with a largely car-free layout, and the developer said it would consult ahead of a planning application later in 2026.",
        outro:
          "It is housing rather than student accommodation, and nothing has been built yet, so for now it changes nothing about a move. Once work starts, the streets around it will change, and we check access in the week of the move rather than relying on last year's route.",
      },
      {
        h2: "What a Hulme Move Costs",
        body:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". A room in Briarfield or Birley is usually one van load, and the price depends on the floor, the walk from the van and how much there is.",
        outro: "Every band we quote from is [published on the rate card](/prices/).",
      },
    ],
    booking: [
      "Give us the hall and flat number, or the full street address.",
      "Tell us whether the street is in a permit zone, or give us the street and we will check.",
      "For a Loxford Street area address, tell us where visitors usually park.",
      "Say whether the move is on a weekday or a weekend, because that changes the parking.",
      "We confirm the time, the van and the price in writing before the day.",
    ],
    faqs: [
      {
        q: "Do I need a parking permit to move in Hulme?",
        a: "Usually not. In the H1, H2 and H4 zones anyone can park for two or three hours between 8am and 6pm on weekdays, and in H1 and H4 there are no restrictions outside those hours. The Loxford Street area is the exception: permit holders only, at all times.",
      },
      {
        q: "Can a removal van park in the Loxford Street area?",
        a: "Not in the resident bays. The council's rule there is permit holder parking only at all times, so we plan where the van stands before the day.",
      },
      {
        q: "Where do Birley students collect their keys?",
        a: "Manchester Met asks arrivals to use 53 Bonsall Street, M15 6GX, and to collect keycards from the Brooks Building outside the accommodation, or from Archway Halls after the check-in weekend.",
      },
      {
        q: "Is Hulme Hall in Hulme?",
        a: "No. Hulme Hall is a University of Manchester hall in Victoria Park. The Manchester Met halls in Hulme are Briarfield and the Birley halls.",
      },
      {
        q: "Does a Hulme student house need an HMO licence?",
        a: "If five or more people from two or more households share it, yes, under mandatory HMO licensing. Hulme is not in a selective licensing area and the council has no additional HMO licensing scheme.",
      },
      {
        q: "What is happening at Birley Fields?",
        a: "In March 2026 the council chose Glenbrook to develop the site, with proposals for 293 affordable homes and a largely car-free layout. A planning application was expected later in 2026.",
      },
      {
        q: "What does a Hulme student move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". Most room moves fit one van load.",
      },
    ],
    related: [
      { label: "Manchester Met student removals", path: "/student-removals/manchester-metropolitan-university/" },
      { label: "Man and van in Hulme", path: "/locations/hulme/" },
      { label: "Man and van in Moss Side", path: "/locations/moss-side/" },
      { label: "Student removals in Victoria Park", path: "/student-removals/victoria-park/" },
      { label: "Student storage in Manchester", path: "/services/student-storage-manchester/" },
      { label: "Moving out of a rental", path: "/moving-guides/moving-out-rental-checklist/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "end-of-term",
    navLabel: "End of Term",
    name: "End of Term",
    h1: "End of Term Student Removals Manchester",
    title: "End of Term Student Removals Manchester | Frank's Van and Man Manchester",
    metaDescription:
      "End of term student removals in Manchester: the 10am hall deadline, key returns, charges for what is left behind, Give It Don't Bin It, the council's bulky collection and the new rules for student houses.",
    cardBlurb:
      "Hall check-out rules, where unwanted things go, and the first summer of rolling tenancies for student houses.",
    intro: [
      "At the end of the year a Manchester student move runs to the hall's deadline, not the van's: Manchester Met wants rooms empty by 10am on the last day.",
      "The contract dates themselves are on each university's page: the [University of Manchester](/student-removals/university-of-manchester/), [Manchester Met](/student-removals/manchester-metropolitan-university/) and [Salford](/student-removals/university-of-salford/). This page covers the move out: the check-out rules, what happens to anything left behind, where unwanted things can go, and what changed in 2026 for students leaving private houses.",
    ],
    keyFacts: [
      { label: "Manchester Met halls", value: "Empty by 10:00am on the last day" },
      { label: "Left in a Manchester Met room", value: "Held for 7 days, then disposed of" },
      { label: "University of Manchester keys", value: "Labelled envelope with your UID, to reception or the drop box" },
      { label: "Council bulky collection", value: "One free collection of up to 3 items a year, then £32" },
      { label: "Private student houses", value: "Rolling tenancies since 1 May 2026" },
      { label: "Van and one mover", value: "From " + rate("one-large") },
    ],
    sections: [
      {
        h2: "The 10am Deadline in Manchester Met Halls",
        body:
          "Manchester Met's 2026/27 terms say you must vacate the room and remove all your possessions by 10:00am on the last day of your period of residence. Keys, fobs and key cards go back to hall reception, with charges for new locks or replacement fobs. The room has to be left clean and in the condition it started in, fair wear and tear excepted, and charges for rubbish removal apply.",
        outro:
          "Anything left behind is held for seven days after the university tells you, and then disposed of. If the room is not being used over the summer, you are charged the standard daily hall rent until your belongings are collected or cleared. So a Manchester Met move goes the day before the last day, or first thing on it, never in the afternoon.",
      },
      {
        h2: "Checking Out of University of Manchester Halls",
        body:
          "The University of Manchester suggests starting about a month before your leaving date. Your room is checked against the original inventory and must be left clean, tidy and in its original condition, with any charge capped at what the university spends to repair, replace or clean. Everything goes, including duvets, pillows and bikes; bikes left behind are removed and donated. Keys go in an envelope or small bag marked with your University ID, handed in at reception or put in the key drop box out of hours.",
        outro:
          "If belongings are left, the university contacts you and daily charges apply until the room is cleared. It also says halls have no storage areas and belongings are not insured outside the dates of your licence, so if the next place is not ready, the gap needs [storage](/services/student-storage-manchester/) rather than a corner of the hall.",
      },
      {
        h2: "Give It Don't Bin It",
        body:
          "Give It Don't Bin It is the end of year donation campaign run by the University of Manchester, Manchester Met, both students' unions and Manchester City Council, and 2026 was its 14th year. The university ran pop-up donation points on 29 and 30 June 2026, with donations going to the British Heart Foundation, Fallowfield and Withington Foodbank and the Bideford Centre in Wythenshawe. It says the previous year's donations raised over £204,000 for the British Heart Foundation and kept over 100 tonnes of unwanted items out of landfill.",
        outro:
          "The reason is the street. In summer 2024 an extra 194 tonnes of waste was collected from Fallowfield, Ladybarn and Withington alone. The university's donation points open from the end of May, so sort the room before the van day rather than on it. The campaign is set out in the university's [Give It Don't Bin It announcement](https://www.socialresponsibility.manchester.ac.uk/all-news/give-it-dont-bin-it-2/).",
      },
      {
        h2: "Large Items and the Council Collection",
        body:
          "For furniture nobody wants, Manchester City Council offers one free bulky collection of up to three items a year. After that it costs £32 for up to three items and £64 for up to six. Items have to be on the pavement beside the road at the front of the property; the council will not collect from front gardens, driveways or bin stores.",
        outro:
          "A broken desk chair or a bed frame that will not survive another move is the usual leftover. If there is more than the council will take, or no time to wait for a collection date, a [clearance on the day](/services/rubbish-removal/) takes it with the move.",
      },
      {
        h2: "Student Houses Are Rolling Tenancies Now",
        body:
          "Summer 2027 is the first end of year in which private student houses run on the new rules. Since 1 May 2026 assured periodic tenancies have replaced assured shorthold tenancies in England, and GOV.UK says an assured periodic tenancy cannot have an end date. Halls are outside the change: Manchester Met's terms describe its halls as a licence, outside the Renters' Rights Act 2025, and purpose-built student blocks signed up to the national code are excluded too.",
        outro:
          "For a house share that means the end date is set by notice, not by the contract. Manchester Student Homes says a tenant gives at least two months' notice, timed to the rent cycle, and that in a joint tenancy one person's notice ends it for everyone. Agree the leaving date as a house, give [notice the way the new rules require](/moving-guides/moving-out-rental-checklist/), then book the van.",
      },
      {
        h2: "Deposits and the Summer Gap",
        body:
          "In a private house the deposit has to come back within 10 days of you and the landlord agreeing the amount, according to GOV.UK's [deposit protection guidance](https://www.gov.uk/tenancy-deposit-protection). Manchester Student Homes adds that a landlord cannot charge for professional cleaning unless the house was professionally cleaned at check-in.",
        outro:
          "The summer gap is the other trap. Manchester Student Homes explains that a summer retainer holds next year's house for you but usually comes without access, so the new house may not open the day the old one closes. Agree the move-in date with the new landlord before you book the move out.",
      },
      {
        h2: "The Mancunian Way Weekend",
        body:
          "The council closes the Mancunian Way every year for its safety inspection, and the closure lands in moving season. In 2026 the main road and all its slip roads were shut in both directions from 6am on Saturday 27 June to 6am on Monday 29 June.",
        outro:
          "A van crossing the south side of the city centre that weekend is on the diversion with everyone else. The 2027 date has not been published yet; when it is, we plan the end of year runs around it.",
      },
      {
        h2: "What an End of Term Move Costs",
        body:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". A room in halls is usually one van load. Housemates leaving on the same day can share a van run, which brings the cost per room down.",
        outro: "Every band we quote from is [published on the rate card](/prices/).",
      },
    ],
    booking: [
      "Tell us your hall, flat and room number, and the last day of your contract.",
      "Book for the day before the last day, or first thing on it.",
      "Donate or clear what is not coming before the van arrives.",
      "Say where it is going: home, storage or next year's house.",
      "We confirm the time, the van and the price in writing before the day.",
    ],
    faqs: [
      {
        q: "What time do I have to leave Manchester Met halls?",
        a: "By 10:00am on the last day of your period of residence, with all your possessions removed and your keys, fobs or cards returned to hall reception.",
      },
      {
        q: "What happens to things I leave in my hall room?",
        a: "At Manchester Met they are held for seven days after you are told and then disposed of, and daily hall rent can be charged until they are cleared. At the University of Manchester daily charges apply until the room is cleared, and bikes left behind are donated.",
      },
      {
        q: "How do I return my keys at the University of Manchester?",
        a: "Put the key or card in an envelope or small bag marked with your University ID and hand it in at reception, or use the key drop box outside opening hours. Do not leave it in the room.",
      },
      {
        q: "Where can I donate things at the end of term in Manchester?",
        a: "Through Give It Don't Bin It, run by both universities, both students' unions and the council. In 2026 the University of Manchester ran pop-up donation points on 29 and 30 June, with donations going to the British Heart Foundation and two local charities.",
      },
      {
        q: "Will the council collect my old furniture?",
        a: "Manchester City Council gives one free bulky collection of up to three items a year, then charges £32 for up to three items. Items must be on the pavement at the front of the property.",
      },
      {
        q: "Does my student house contract still end on a fixed date?",
        a: "Not for a private house let since the new rules started on 1 May 2026: an assured periodic tenancy has no end date and ends on notice. Halls and national code student blocks keep fixed end dates.",
      },
      {
        q: "How quickly should I get my deposit back?",
        a: "GOV.UK says the landlord must return it within 10 days of you both agreeing how much you will get back.",
      },
      {
        q: "What does an end of term move cost?",
        a:
          "One mover with a large van starts from " +
          rate("one-large") +
          " and two movers from " +
          rate("two-large") +
          ". Most hall rooms fit one van load.",
      },
    ],
    related: [
      { label: "University of Manchester student removals", path: "/student-removals/university-of-manchester/" },
      { label: "Manchester Met student removals", path: "/student-removals/manchester-metropolitan-university/" },
      { label: "University of Salford student removals", path: "/student-removals/university-of-salford/" },
      { label: "Student storage in Manchester", path: "/services/student-storage-manchester/" },
      { label: "Moving out of a rental", path: "/moving-guides/moving-out-rental-checklist/" },
      { label: "Rubbish removal", path: "/services/rubbish-removal/" },
    ],
    reviewed: "October 2026",
  },
];

export const getStudentPage = (slug: string) => studentPages.find((p) => p.slug === slug);
