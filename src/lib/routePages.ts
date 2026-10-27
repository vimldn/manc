import type { StudentPage } from "./studentRemovals";
import { priceRows } from "./pricing";

// -------------------------------------------------------------
// ROUTE PAGES. One page per city pair, covering both directions. They target
// "man and van manchester to [city]" and must not restate the generic
// long distance head term owned by /services/long-distance-removals/.
//
// Every fact is checked at source on the date in `reviewed`. Tolls, parking
// rules and works change, so re-check them before editing a page.
// -------------------------------------------------------------

/** Figures come from pricing.ts so page copy never drifts from the rate card. */
const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// Same shape as the student pages, so the layout is shared; `halls` is unused.
export type RoutePage = StudentPage;

export const routePages: RoutePage[] = [
  {
    slug: "manchester-to-liverpool",
    navLabel: "Manchester to Liverpool",
    name: "Manchester to Liverpool",
    h1: "Manchester to Liverpool Removals",
    title: "Man and Van Manchester to Liverpool | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Liverpool and back: the M62 or the East Lancashire Road, when the Mersey tolls apply, Liverpool's bay suspensions and match day zones, and what it costs. Get a quote.",
    cardBlurb: "Thirty-one miles west, and a Liverpool end with no free city centre parking.",
    intro: [
      "Manchester to Liverpool is a short run, 31 miles by rail, and a van covers it by the M62 or the East Lancashire Road in either direction.",
      "The price works the same way both ways. What shapes the day is the Liverpool end: no free parking in the city centre between 7am and 11pm, permit-only streets around Anfield and Goodison, and a bay suspension that the council can take up to ten working days to approve.",
    ],
    keyFacts: [
      { label: "Rail distance", value: "31 miles, Piccadilly to Lime Street" },
      { label: "Liverpool bay suspension", value: "£30 per 5m bay per day, plus a £50 fee" },
      { label: "Liverpool city centre", value: "No free parking 7am to 11pm" },
      { label: "Clean air zone", value: "None in Liverpool" },
      { label: "Fastest train", value: "47 minutes, Piccadilly to Lime Street" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M62 or the East Lancashire Road",
        body:
          "Two roads do the work: the M62, and the A580 East Lancashire Road, which runs from Salford to the north of Liverpool. Neither crosses a toll. The tolled crossings in this corner of the North West are the Mersey Gateway and Silver Jubilee bridges at Runcorn and Widnes, and the Mersey tunnels to the Wirral, and a move only meets them if it is going to or coming from that side of the river.",
        outro:
          "If a route does use one, the toll is in the quote rather than added afterwards. The choice of road depends on where the two addresses are and the time of day, and we pick it on the morning rather than in advance.",
      },
      {
        h2: "Parking at the Liverpool End",
        body:
          "Liverpool City Council says there is no free parking within the city centre between 7am and 11pm, and waiting restrictions apply wherever there is not a marked bay. Around the Everton and Liverpool football grounds, the football match residents' parking zones are for resident permit holders only.",
        outro:
          "For a longer job, the council will suspend parking bays to complete a removal. Each five metre bay costs £30 a day, plus a one-off £50 administration fee; the council emails its decision within ten working days, takes payment by bank transfer and does not authorise the suspension until it is paid. The process is on the council's [bay suspension page](https://liverpool.gov.uk/parking-roads-and-travel/parking-permits/apply-to-suspend-parking-bays/).",
      },
      {
        h2: "No Clean Air Zone in Liverpool",
        body:
          "Liverpool does not charge vans to drive in. GOV.UK's list of charging clean air zones in England covers Bath, Birmingham, Bradford, Bristol, Portsmouth, Sheffield and Tyneside, and Liverpool's own cabinet moved away from a charging model in favour of other measures. GOV.UK keeps the list on its [clean air zones page](https://www.gov.uk/clean-air-zones).",
        outro:
          "So unlike a move to [Birmingham](/routes/manchester-to-birmingham/) or Bristol, there is no daily charge to plan around at the Liverpool end.",
      },
      {
        h2: "Moving Light by Train",
        body:
          "For a student with bags and a laptop, the train is quick. TransPennine Express runs from Manchester Piccadilly to Liverpool Lime Street in as little as 47 minutes, with trains from 5.03am to 11.45pm. It allows up to three items of luggage, including one small enough to hold on your lap and two others up to 30 x 70 x 90cm.",
        outro:
          "Anything bigger is a van job. A bed frame, a desk or a sofa will not go on a train, and a room with furniture in it is usually one [student man and van](/services/student-moves/) load either way.",
      },
      {
        h2: "Buses Coming Under Public Control",
        body:
          "If you are moving to Liverpool without a car, the bus network is changing. The Liverpool City Region is bringing its buses under public control in stages: the Wirral network switched over on 25 October 2026, and Liverpool, Knowsley and Sefton follow by the end of 2027.",
        outro:
          "It changes nothing about the move itself, but it is worth checking the routes near the new address before you sign a tenancy.",
      },
      {
        h2: "What a Manchester to Liverpool Move Costs",
        body:
          "A move to or from Liverpool is priced as a [long distance move](/services/long-distance-removals/): a fixed price on the route, the load and the mileage, agreed before the day. A room or a studio flat is usually one van load, and a full house is priced on what is in it.",
        outro: "Every band we quote from is [published on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "If the Liverpool street is in the city centre or a match day zone, say so.",
      "Decide whether to suspend a bay in Liverpool; allow at least ten working days.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "How far is Manchester from Liverpool?",
        a: "TransPennine Express gives 31 miles by rail between Manchester Piccadilly and Liverpool Lime Street. By road the distance depends on the two addresses and the route.",
      },
      {
        q: "Are there tolls between Manchester and Liverpool?",
        a: "Not on the M62 or the East Lancashire Road. The tolled crossings are the Mersey Gateway and Silver Jubilee bridges and the Mersey tunnels, which only come into a move going across the river.",
      },
      {
        q: "Does Liverpool have a clean air zone?",
        a: "No charging zone. GOV.UK lists Bath, Birmingham, Bradford, Bristol, Portsmouth, Sheffield and Tyneside, and Liverpool moved away from a charging model.",
      },
      {
        q: "How do I suspend a parking bay in Liverpool for a move?",
        a: "Apply to Liverpool City Council. Each five metre bay costs £30 a day plus a one-off £50 fee, the council decides within ten working days, and the suspension is only authorised once paid.",
      },
      {
        q: "Can I park on match days near Anfield or Goodison?",
        a: "Not in the football match residents' parking zones, which are for resident permit holders only. Plan a move in those streets around the fixtures.",
      },
      {
        q: "How long is the train from Manchester to Liverpool?",
        a: "TransPennine Express runs from Piccadilly to Lime Street in as little as 47 minutes and allows up to three items of luggage.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Flat and apartment removals", path: "/services/flat-apartment-removals/" },
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Moving home from university", path: "/student-removals/moving-home/" },
      { label: "Reserving parking for a move", path: "/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "manchester-to-leeds",
    navLabel: "Manchester to Leeds",
    name: "Manchester to Leeds",
    h1: "Manchester to Leeds Removals",
    title: "Man and Van Manchester to Leeds | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Leeds and back: the M62 over the Pennines and the Scammonden night closures, Leeds loading limits and bay suspensions, Bradford's clean air zone, and the cost. Get a quote.",
    cardBlurb: "Over the Pennines on the M62, with Leeds loading rules waiting at the far end.",
    intro: [
      "Manchester to Leeds is the move over the Pennines. TransPennine Express puts it at 36 miles from Manchester Victoria, and a van takes the M62 across the moors in either direction.",
      "The price works the same both ways. What shapes the day is the motorway and the Leeds end: night closures at Scammonden Bridge until early November, a 20 minute limit on loading from a yellow line, and a city centre Loop where the council grants no parking dispensations at all.",
    ],
    keyFacts: [
      { label: "Rail distance", value: "36 miles, Victoria to Leeds" },
      { label: "Fastest train", value: "47 minutes from Victoria" },
      { label: "M62 junctions 22 to 24", value: "Night closures, works due to end January 2027" },
      { label: "Loading in Leeds", value: "Up to 20 minutes on a yellow line or in a bay" },
      { label: "Clean air zone", value: "None in Leeds; Bradford charges vans £9 a day" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M62 Over the Pennines",
        body:
          "The M62 is the direct road, climbing over the moors between Rochdale and Huddersfield with no tolls on the way. This autumn it has a pinch point. National Highways is replacing the parapets on Scammonden Bridge over the M62, which means overnight closures of the motorway between junctions 22 and 24.",
        outro:
          "The closures run from 9pm to 6am: eastbound only from 26 to 30 October, then both directions from 2 to 6 November, with the whole job due to finish in January 2027. A daytime move never meets them, but a van that sets off before 6am to beat the traffic could, and the signed diversion follows the A672, A58, A646 and A629. National Highways posts the latest dates on its [Scammonden Bridge page](https://nationalhighways.co.uk/our-roads/yorkshire-and-north-east/m62-scammonden-bridge-parapet-replacement/), and we check it the day before.",
      },
      {
        h2: "Parking and Loading at the Leeds End",
        body:
          "Leeds City Council allows a vehicle up to 20 minutes to load or unload in a permitted parking bay or on yellow lines, and only for as long as the job needs. Its wardens watch for five minutes before deciding nothing is happening, and the council's own policy accepts that carrying things to an upper floor can leave a van unattended for a while.",
        outro:
          "A full flat or house takes longer than 20 minutes, so a long job needs the bays suspended. Leeds charges suspensions per bay per day, charges nothing for a Sunday though its permission is still needed, and says removal vans do not need a separate dispensation. On the Loop, the ring around the city centre, it grants no dispensations at all. The detail is in the council's [parking policies and exemptions](https://www.leeds.gov.uk/parking-roads-and-travel/parking/parking-tickets-and-bus-lane-fines/penalty-charge-notices-parking-policies-and-exemptions).",
      },
      {
        h2: "No Clean Air Zone in Leeds, One in Bradford",
        body:
          "Leeds planned a charging clean air zone and then dropped it. In October 2020 the council said the zone was no longer required, because businesses had moved to cleaner vehicles faster than expected, and Leeds is not among the charging zones listed by GOV.UK.",
        outro:
          "Bradford, next door, does charge. Its zone covers more than nine square miles; cars go free, but a van below Euro 6 diesel or Euro 4 petrol pays £9 a day. It only matters if one of the two addresses is inside Bradford's zone, and if it is, we say so when we quote.",
      },
      {
        h2: "Moving Light by Train",
        body:
          "TransPennine Express runs from Manchester Victoria to Leeds in as little as 47 minutes, with trains from 04:21 until after midnight, and allows three items of luggage: one small enough for your lap and two others up to 30 x 70 x 90cm. The line is in the middle of the Transpennine Route Upgrade, and Network Rail plans a further 38-day closure of Huddersfield station from after the last train on Christmas Eve 2026, with trains running on diversionary routes wherever they can.",
        outro:
          "So a student going home or starting a new term over Christmas should not count on the train. Bags, a desk chair and a monitor make one [student man and van](/services/student-moves/) run, and the van is not held up by a closed station.",
      },
      {
        h2: "Austhorpe Lane Closed in East Leeds",
        body:
          "The rail upgrade closes roads too. In Cross Gates, the Austhorpe Lane bridges are shut to all vehicles and pedestrians from 7 April 2026 to 15 January 2027 while they are rebuilt high enough for the overhead wires of the electrified line between Manchester, Leeds and York.",
        outro:
          "The rest of Austhorpe Lane stays open, and traffic is signed round by Austhorpe Road, Station Road, Ring Road Halton and Whitkirk Lane. If you are moving to or from Cross Gates or Whitkirk, tell us the street and we plan the approach around it.",
      },
      {
        h2: "What a Manchester to Leeds Move Costs",
        body:
          "Leeds is priced as a [long distance move](/services/long-distance-removals/) rather than by the hour: one fixed figure for the route, the load and the mileage, agreed before the day. A Sunday move can also save the bay suspension charge in Leeds, since the council does not charge for Sunday suspensions.",
        outro: "The starting bands for every service sit [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Tell us if the Leeds street is on or inside the Loop, or has only yellow lines outside.",
      "For a long load in Leeds, ask the council's parking services to suspend the bays; a Sunday suspension is free.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "How far is Leeds from Manchester?",
        a: "TransPennine Express gives 36 miles from Manchester Victoria to Leeds by rail. By road it depends on the two addresses, and most runs use the M62.",
      },
      {
        q: "Is the M62 closed at Scammonden?",
        a: "Only overnight. National Highways is closing the M62 between junctions 22 and 24 from 9pm to 6am on set nights until 6 November 2026 while it replaces the Scammonden Bridge parapets, and expects to finish the work in January 2027.",
      },
      {
        q: "Does Leeds have a clean air zone?",
        a: "No. Leeds dropped its planned charging zone in 2020. Bradford does have one, which charges a non-compliant van £9 a day and does not charge cars.",
      },
      {
        q: "Does a removal van need a parking dispensation in Leeds?",
        a: "No. Leeds City Council says removal vans do not require one. For a load longer than the 20 minute loading limit, the bays are suspended instead, charged per bay per day and free on a Sunday.",
      },
      {
        q: "How long can a van load on a yellow line in Leeds?",
        a: "Up to 20 minutes, and only for as long as the loading actually takes. Wardens watch for five minutes before treating a vehicle as parked rather than loading.",
      },
      {
        q: "Will trains run between Manchester and Leeds over Christmas 2026?",
        a: "Expect disruption. Network Rail plans a 38-day closure of Huddersfield station from after the last train on Christmas Eve, with trains on diversionary routes wherever possible.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Liverpool removals", path: "/routes/manchester-to-liverpool/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Student man and van in Manchester", path: "/services/student-moves/" },
      { label: "Moving home from university", path: "/student-removals/moving-home/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "manchester-to-birmingham",
    navLabel: "Manchester to Birmingham",
    name: "Manchester to Birmingham",
    h1: "Manchester to Birmingham Removals",
    title: "Man and Van Manchester to Birmingham | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Birmingham and back: the M6 and its night closures, Birmingham's £8 clean air zone, bay suspension fees, the bin strike and bulky waste, and the cost. Get a quote.",
    cardBlurb: "Down the M6 to a clean air zone, a bin strike and £18.90 parking bays.",
    intro: [
      "Manchester to Birmingham is a run down the M6 in either direction, and a one-day job for a van even with loading and unloading at both ends.",
      "The price works the same both ways. The Birmingham end is where the planning goes: a clean air zone inside the Middleway that charges a van below the standard £8 a day, bay suspensions at £18.90 a bay plus set-up charges, and a bin strike that has paused the council's bulky waste collections.",
    ],
    keyFacts: [
      { label: "Clean air zone", value: "Inside the A4540 Middleway, £8 a day for a non-compliant van" },
      { label: "Bay suspension", value: "£18.90 per bay per day, plus £87.60 set-up and £18.90 admin" },
      { label: "Notice for a suspension", value: "At least 48 hours" },
      { label: "Parking dispensation", value: "£23.90 per vehicle per day" },
      { label: "Council bulky waste", value: "New requests paused during the strike" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M6 and Its Night Closures",
        body:
          "The M6 does the work, joined at junction 19 near Knutsford or junction 20 at Lymm depending on the Manchester address. Two National Highways schemes sit on it this autumn: resurfacing from junction 16 at Crewe to junction 19 at Knutsford, running from 14 October 2026 to summer 2027 with overnight lane and slip road closures, and resurfacing between junctions 7 and 10 on the edge of Birmingham until 13 November, with the motorway shut overnight in one direction at a time.",
        outro:
          "Both work at night, between 9pm and 6am on most dates, so a daytime move does not meet them; an early start or a late run home can. Whether the run takes the M6 Toll instead is decided on the morning by the traffic, and if it does, the toll is part of the fixed price.",
      },
      {
        h2: "Birmingham's Clean Air Zone",
        body:
          "Birmingham charges inside the A4540 Middleway, though not on the Middleway itself, 24 hours a day and every day of the year. A car, taxi or van that does not meet the standard pays £8 for each day it enters, counted midnight to midnight; for vans the standard is Euro 6 for diesel and Euro 4 for petrol. The charge can be paid up to six days before, on the day or up to six days after, and an unpaid charge brings a £120 penalty.",
        outro:
          "Most of the city's suburbs are outside it. The case to check is a flat in the city centre, and the zone's own [postcode checker on Brum Breathes](https://www.brumbreathes.co.uk/info/25/welcome-2/45/charges-operation-1) gives the answer. If either address is inside, we say so when we quote.",
      },
      {
        h2: "Parking at the Birmingham End",
        body:
          "Birmingham City Council suspends bays for £18.90 per bay per day for up to three bays, every day including Sundays and bank holidays, plus £87.60 to set the suspension up on site and an £18.90 administration charge. Everything is paid before the suspension starts, and the council needs at least 48 hours' notice. Inside the city centre controlled parking zones the request goes to a different team.",
        outro:
          "On those charges, one bay for one day works out at £125.40. Where a suspension is not possible, the council can grant a dispensation to park in a set place for £23.90 per vehicle per day, again with 48 hours' notice, but only with a clear reason and no suitable parking nearby. Both are set out on the council's [suspensions and dispensations page](https://www.birmingham.gov.uk/info/20109/parking/516/apply_for_parking_suspensions_or_dispensations).",
      },
      {
        h2: "The Bin Strike and What Is Not Coming",
        body:
          "Birmingham's bin strike has run for 21 months, and on 6 October 2026 the council's leader said a resolution was very close. Until it is settled, the council has paused new requests for bulky waste collections, though collections booked before the pause still go ahead. Its tips are open, but a resident arriving in a van has to book a slot and bring proof of a Birmingham address, and the mobile waste centres take nothing from vans.",
        outro:
          "So whichever way you are moving, do not count on the council to take away what is not coming. Sort it before the van is loaded, and if something has to go, our [rubbish removal](/services/rubbish-removal/) can take it on the same visit.",
      },
      {
        h2: "What a Manchester to Birmingham Move Costs",
        body:
          "Birmingham is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. Any Birmingham suspension or dispensation is paid to the council, not to us, and unlike some cities Birmingham charges for Sundays too, so it belongs in the budget whichever day you pick.",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Birmingham address is inside the Middleway clean air zone.",
      "For a long load, ask Birmingham City Council to suspend the bays at least 48 hours ahead.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Does a removal van pay Birmingham's clean air zone charge?",
        a: "Only if it does not meet the standard and drives inside the A4540 Middleway. A non-compliant van pays £8 a day; Euro 6 diesels and Euro 4 petrols are not charged.",
      },
      {
        q: "How long do I have to pay the Birmingham clean air zone charge?",
        a: "Thirteen days in all: up to six days before the journey, on the day, or up to six days after. An unpaid charge brings a £120 penalty.",
      },
      {
        q: "How much is a parking bay suspension in Birmingham?",
        a: "£18.90 per bay per day for up to three bays, including Sundays and bank holidays, plus £87.60 for set-up and £18.90 for administration. One bay for one day comes to £125.40.",
      },
      {
        q: "How much notice does Birmingham need for a suspension?",
        a: "At least 48 hours, and the charges must be paid before the suspension starts. A dispensation also needs 48 hours and costs £23.90 per vehicle per day.",
      },
      {
        q: "Can I book a bulky waste collection in Birmingham?",
        a: "Not while the bin strike lasts. The council has paused new bulky waste requests, though collections booked before the pause still go ahead.",
      },
      {
        q: "Is the M6 closed at night between Manchester and Birmingham?",
        a: "In places. There are overnight closures between junctions 7 and 10 until 13 November 2026, and overnight lane and slip road closures between junctions 16 and 19 until summer 2027. Daytime traffic is not affected.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Leeds removals", path: "/routes/manchester-to-leeds/" },
      { label: "Manchester to Liverpool removals", path: "/routes/manchester-to-liverpool/" },
      { label: "Rubbish removal", path: "/services/rubbish-removal/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
];

export const getRoutePage = (slug: string) => routePages.find((p) => p.slug === slug);

export { rate };
