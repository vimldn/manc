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
          "So unlike a move to [Birmingham](/routes/manchester-to-birmingham/) or [Bristol](/routes/manchester-to-bristol/), there is no daily charge to plan around at the Liverpool end.",
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
  {
    slug: "manchester-to-sheffield",
    navLabel: "Manchester to Sheffield",
    name: "Manchester to Sheffield",
    h1: "Manchester to Sheffield Removals",
    title: "Man and Van Manchester to Sheffield | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Sheffield and back: Woodhead, the Snake Pass or the motorway, the A57 works at Mottram, Sheffield's £10 clean air zone charge for vans, bay suspensions and the cost. Get a quote.",
    cardBlurb: "Over the Peak District to a clean air zone that charges vans and not cars.",
    intro: [
      "Manchester to Sheffield is a short run on the map and often a slow one, because both direct roads cross the Peak District.",
      "The price works the same in both directions. What needs planning is the road on the day, the works at Mottram on the way out of Greater Manchester, and a Sheffield clean air zone that charges vans while leaving private cars alone.",
    ],
    keyFacts: [
      { label: "Clean air zone", value: "Inner ring road and city centre, £10 a day for a non-compliant van" },
      { label: "Private cars", value: "Not charged by the Sheffield zone" },
      { label: "Bay suspension", value: "£31.60 admin, then £18.95 per 5m a day in the city centre, £6.45 elsewhere" },
      { label: "Notice for a suspension", value: "At least 14 days, paid 9 days ahead" },
      { label: "M67 junctions 3 to 4", value: "Closed overnight on weekdays until the end of December 2026" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "Woodhead, the Snake Pass or the Motorway",
        body:
          "There are two direct roads and one long way round. The A628 over the Woodhead Pass and the A57 over the Snake Pass both cross open moorland, and both close for weather and for repairs to hillsides that move. Derbyshire County Council shut the Snake Pass between Glossop and Ladybower Reservoir from 15 June to 3 July 2026 to start drilling at the Doctor's Gate landslip, and says three more landslip sites need investigating before a permanent repair can be designed.",
        outro:
          "The long way round is the M62 east, the same road as a [move to Leeds](/routes/manchester-to-leeds/), then the M1 south into Sheffield: more miles, but mostly motorway. Which road the van takes is decided on the morning by the weather and the traffic, and it does not change the fixed price.",
      },
      {
        h2: "The A57 Works at Mottram",
        body:
          "Both Pennine roads leave Greater Manchester through Mottram in Longdendale, where National Highways is building the A57 Link Roads: a dual carriageway from junction 4 of the M67 to Mottram Moor, and a single carriageway on to Woolley Bridge, to take through traffic out of the village. Work started in December 2024, and National Highways gives the finish only as its 2026 to 2031 road period.",
        outro:
          "Its update of 7 October 2026 has the M67 closed overnight between junctions 3 and 4 in both directions, 8pm to 6am from Monday to Friday, until the end of December, and Old Road closed from 8pm on Friday 6 November to 6am on Monday 9 November. A daytime move does not meet the overnight closures, and the [National Highways scheme page](https://nationalhighways.co.uk/our-roads/north-west/a57-link-roads) carries the current list.",
      },
      {
        h2: "Sheffield's Clean Air Zone",
        body:
          "Sheffield charges vehicles that drive within or enter its inner ring road and city centre. The zone is aimed at commercial traffic: a non-compliant van, taxi or other light goods vehicle pays £10 a day, and private cars do not pay at all, apart from some SUVs and four-by-fours. The charge can be paid up to six days before, on the day, or up to six days after.",
        outro:
          "Miss the payment and the council issues a £120 penalty, cut to £60 if it is paid within 14 days, on top of the charge itself. Most of Sheffield's suburbs are outside the zone. A city centre flat is the case to check, and the council's [charges page](https://www.sheffield.gov.uk/clean-air-zone-sheffield/clean-air-zone-charges-and-how-pay) links to the vehicle checker. If either address is inside, we say so when we quote.",
      },
      {
        h2: "Parking at the Sheffield End",
        body:
          "Sheffield City Council charges for a bay suspension in two parts: a £31.60 administration fee that is never refunded, and a daily charge for each 5 metre section of bay, £18.95 inside the city centre controlled parking zone and £6.45 everywhere else. The application has to reach the council at least 14 days before the date, and the full payment at least 9 days before.",
        outro:
          "On those charges, a 10 metre stretch outside the city centre for one day comes to £44.50, and the same inside the city centre zone to £69.50. A cancellation received in writing at least two working days before the start can be refunded, less the administration fee. Fourteen days is a long lead time, so if the Sheffield address has bays outside, apply as soon as the date is fixed.",
      },
      {
        h2: "What a Manchester to Sheffield Move Costs",
        body:
          "Sheffield is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. A Sheffield bay suspension is paid to the council, not to us, and because it has to be paid nine days ahead, it belongs in the budget early.",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Sheffield address is inside the inner ring road.",
      "For a long load, apply to Sheffield City Council for a bay suspension at least 14 days ahead.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Does a removal van pay Sheffield's clean air zone charge?",
        a: "Only a van that does not meet the standard and drives within or into the inner ring road and city centre. It pays £10 a day, and the charge can be paid up to six days before or after.",
      },
      {
        q: "Will I pay the clean air zone charge driving my own car to Sheffield?",
        a: "No. Sheffield's zone does not charge private cars, apart from some SUVs and four-by-fours. The vehicles it charges are vans, taxis, buses, coaches, lorries and campervans that do not meet the standard.",
      },
      {
        q: "How much is a parking bay suspension in Sheffield?",
        a: "A £31.60 administration fee, which is not refunded, plus £18.95 per 5 metre section per day in the city centre controlled parking zone or £6.45 per section elsewhere.",
      },
      {
        q: "How much notice does Sheffield need for a bay suspension?",
        a: "The application must be in at least 14 days before the date, and full payment made at least 9 days before the suspension starts.",
      },
      {
        q: "Which road does the van take from Manchester to Sheffield?",
        a: "The Woodhead Pass, the Snake Pass, or the M62 and M1, chosen on the morning by the weather and the traffic. The Peak District roads are shorter but close for weather and repairs. The price is the same whichever is used.",
      },
      {
        q: "Are there road closures at Mottram?",
        a: "Overnight ones. For the A57 Link Roads works, the M67 between junctions 3 and 4 is closed 8pm to 6am, Monday to Friday, until the end of December 2026. Daytime moves are not affected.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Leeds removals", path: "/routes/manchester-to-leeds/" },
      { label: "Manchester to Birmingham removals", path: "/routes/manchester-to-birmingham/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Packing services", path: "/services/packing-services/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "manchester-to-edinburgh",
    navLabel: "Manchester to Edinburgh",
    name: "Manchester to Edinburgh",
    h1: "Manchester to Edinburgh Removals",
    title: "Man and Van Manchester to Edinburgh | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Edinburgh and back: a full day up the M6 and M74, Edinburgh's low emission zone penalties, loading dispensations, the Scottish date of entry and the cost. Get a quote.",
    cardBlurb: "A full day up the M6 to a low emission zone that fines rather than charges.",
    intro: [
      "Manchester to Edinburgh is a full day's work for a van: more than 200 miles each way, with loading at one end and unloading at the other.",
      "The price works the same in both directions. The Edinburgh end has its own rules: a low emission zone that issues penalties instead of selling a day pass, a council that grants dispensations to load on yellow lines, and a Scottish buying process where moving day is the date of entry.",
    ],
    keyFacts: [
      { label: "Low emission zone", value: "City centre, penalty from £60 for a non-compliant van" },
      { label: "Repeat penalties", value: "£120, £240, then £480" },
      { label: "Van standard", value: "Euro 6 diesel or Euro 4 petrol" },
      { label: "Loading dispensation", value: "£16 a request, at least 24 hours' notice" },
      { label: "Drivers' hours", value: "10 hours' driving and 11 on duty a day" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "A Full Day on the M6 and M74",
        body:
          "The run goes north on the M6 past Preston, Lancaster and Carlisle, into Scotland on the M74, and across to Edinburgh for the last stretch. It is more than 200 miles each way, and a goods van driven for work comes under the GB domestic drivers' hours rules: no more than 10 hours' driving and 11 hours on duty in a working day.",
        outro:
          "With loading at one end and unloading at the other, an Edinburgh job uses most of that day. It starts early, and a late key release at either end costs far more time than it would on a local job.",
      },
      {
        h2: "Edinburgh's Low Emission Zone",
        body:
          "Edinburgh's zone is a ring round the city centre, running from Tollcross west to Palmerston Place, along Queen Street to Picardy Place, round Abbeyhill, Holyrood Road and the Pleasance, and back to Tollcross by the Meadows. Enforcement began on 1 June 2024. A van has to meet Euro 6 if it is diesel or Euro 4 if it is petrol, and the boundary roads themselves are outside the zone, so any vehicle can drive them.",
        outro:
          "Unlike [Birmingham](/routes/manchester-to-birmingham/) or [Sheffield](/routes/manchester-to-sheffield/), there is no daily charge to pay. A non-compliant vehicle that drives in gets a penalty: £60 the first time, then £120, £240 and £480, halved if paid within 14 days, and back to £60 after 90 days without entering. The council recorded 2,397 contraventions in September 2026 alone, and its [penalty charges page](https://www.edinburgh.gov.uk/low-emission-zone/lez-penalty-charges/3) sets out the scale. If either address is inside the zone, we say so when we quote.",
      },
      {
        h2: "Loading on Edinburgh's Yellow Lines",
        body:
          "The City of Edinburgh Council's answer for a removal is a dispensation, which it lists for furniture and home removals: permission to load or unload on a single yellow line for longer than 30 minutes. It costs £16 for each request, per vehicle and location, needs at least 24 hours' notice, and has to be paid by card by 3pm on the last working day before.",
        outro:
          "Where the van needs bays rather than a yellow line, the council suspends them at the public parking rate for that street, with no lower rate for permit bays, paid in full before the request is processed and with at least three working days' notice for resident permit bays. Both are on the council's [dispensations and suspensions page](https://www.edinburgh.gov.uk/parking-spaces/dispensations-suspensions/1).",
      },
      {
        h2: "Moving Day Is the Date of Entry",
        body:
          "Buying in Scotland runs differently from England. The offer names the date you want the keys, the solicitors exchange letters called missives, and once the missives are concluded they form a binding contract. On the agreed date of entry your solicitor settles: the purchase money goes over, and in return the solicitor receives the disposition, the deeds and the keys.",
        outro:
          "A Manchester sale completes under English rules on the same day, so two sets of solicitors have to line the dates up. Book the van for the date of entry, and tell us early if either side looks like slipping; [keys delayed on moving day](/moving-guides/keys-delayed-moving-day/) covers what happens if one does.",
      },
      {
        h2: "What a Manchester to Edinburgh Move Costs",
        body:
          "Edinburgh is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. Any Edinburgh dispensation or suspension is paid to the council, not to us. If late keys could push the unloading into a second day, agree what that costs before the move rather than on the day.",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Edinburgh address is inside the low emission zone.",
      "For loading on a single yellow line, apply for an Edinburgh dispensation at least 24 hours ahead.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Does a removal van pay to enter Edinburgh's low emission zone?",
        a: "No, there is no charge to pay. A van that does not meet Euro 6 for diesel or Euro 4 for petrol must stay out, and driving in brings a penalty starting at £60.",
      },
      {
        q: "How much is an Edinburgh low emission zone fine?",
        a: "£60 for the first, then £120, £240 and £480 for repeat entries, halved if paid within 14 days. The scale goes back to £60 after 90 days without entering the zone.",
      },
      {
        q: "Does the low emission zone cover all of Edinburgh?",
        a: "No. It is a ring round the city centre, from Tollcross to Palmerston Place, Queen Street, Picardy Place, Abbeyhill and the Pleasance. The boundary roads themselves can be driven by any vehicle.",
      },
      {
        q: "Can a removal van load on a yellow line in Edinburgh?",
        a: "For longer than 30 minutes on a single yellow line it needs a dispensation from the council, which costs £16 per request and needs at least 24 hours' notice.",
      },
      {
        q: "Can a man and van do Manchester to Edinburgh in a day?",
        a: "Yes, for most loads, but it is a full day. A goods van driven for work is limited to 10 hours' driving and 11 hours on duty a day, so the job starts early and late keys at either end matter.",
      },
      {
        q: "When do I get the keys when buying in Scotland?",
        a: "On the date of entry, at settlement. Your solicitor pays over the purchase money and receives the disposition, the deeds and the keys in return.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Sheffield removals", path: "/routes/manchester-to-sheffield/" },
      { label: "Manchester to Birmingham removals", path: "/routes/manchester-to-birmingham/" },
      { label: "Keys delayed on moving day", path: "/moving-guides/keys-delayed-moving-day/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "manchester-to-glasgow",
    navLabel: "Manchester to Glasgow",
    name: "Manchester to Glasgow",
    h1: "Manchester to Glasgow Removals",
    title: "Man and Van Manchester to Glasgow | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Glasgow and back: a full day up the M6 and M74, Glasgow's city centre low emission zone, Scotland's pavement parking ban and its 20 minute loading limit, and the cost. Get a quote.",
    cardBlurb: "Up the M74 to a low emission zone and a pavement parking ban.",
    intro: [
      "Manchester to Glasgow is a full day for a van: more than 200 miles each way up the M6 and the M74, with loading at one end and unloading at the other.",
      "The price works the same in both directions. At the Glasgow end, two Scottish rules shape the day: a city centre low emission zone enforced by penalties, and a national ban on pavement parking that gives a removal van 20 minutes at most.",
    ],
    keyFacts: [
      { label: "Low emission zone", value: "City centre inside the M8, the Clyde and High Street" },
      { label: "First LEZ penalty", value: "£60, or £30 if paid within 14 days" },
      { label: "Repeat LEZ penalties", value: "Double within 90 days, up to £480 for a van" },
      { label: "Pavement parking", value: "£100 penalty, or £50 if paid within 14 days" },
      { label: "Loading on a pavement", value: "No more than 20 minutes, and only if there is no other way" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M74 and the Way Into Glasgow",
        body:
          "The run is the M6 north past Preston, Lancaster and Carlisle, then the M74 into Glasgow. It is the same full day as a [move to Edinburgh](/routes/manchester-to-edinburgh/), with the same limit on a goods van driven for work: no more than 10 hours at the wheel in a working day, so the job starts early.",
        outro:
          "The last mile depends on where the van leaves the motorway. The M8 runs round the north and west of the city centre and is not part of the low emission zone, so the van can travel round the centre on it without entering the zone.",
      },
      {
        h2: "Glasgow's Low Emission Zone",
        body:
          "Glasgow's zone covers the city centre, bounded by the M8 to the north and west, the River Clyde to the south and Saltmarket and High Street to the east. Penalties began in June 2023, residents had until 1 June 2024, and the zone now runs 24 hours a day, every day. A van has to meet Euro 6 if it is diesel or Euro 4 if it is petrol.",
        outro:
          "There is nothing to buy at the door, and you cannot prepay. A non-compliant vehicle that drives in gets a £60 penalty, halved if paid within 14 days, which doubles each time the same vehicle enters within 90 days, up to £480 for a car or van; the Scottish Government sets the scale on its [LEZ fines page](https://www.mygov.scot/low-emission-zones/fines). Glasgow issued 29,838 penalties between April 2024 and March 2025. If either address is inside the zone, we say so when we quote.",
      },
      {
        h2: "The Pavement Parking Ban",
        body:
          "Scotland bans parking on the pavement, double parking and parking at dropped kerbs, and councils have been able to fine for it since 11 December 2023. The penalty is £100, reduced to £50 if paid within 14 days, and Glasgow City Council enforces it. A removal van gets one narrow exception, set out in [section 55 of the Transport (Scotland) Act 2019](https://www.legislation.gov.uk/asp/2019/17/section/55): loading or unloading at premises in the course of business, where it cannot reasonably be done without the pavement, with no part of the van within 1.5 metres of the far edge of the pavement, and for no more than 20 minutes in one go.",
        outro:
          "Twenty minutes does not empty a van, so on a narrow Glasgow street the van stands on the road wherever that is legal, and a long load needs a proper place to stop. Glasgow City Council handles parking dispensations and bay suspensions, so if the street is tight, apply to the council as soon as the date is fixed and we will say what the street needs.",
      },
      {
        h2: "What a Manchester to Glasgow Move Costs",
        body:
          "Glasgow is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. Any council dispensation or suspension is paid to the council, not to us. If you are buying, moving day is the Scottish date of entry, when your solicitor settles and receives the keys, so book the van for that date and tell us early if it looks like slipping.",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Glasgow address is inside the low emission zone.",
      "If the Glasgow street is narrow or always full, ask the council about a dispensation or suspension early.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Does a removal van pay to enter Glasgow's low emission zone?",
        a: "No. There is no charge to pay and no way to prepay. A van that does not meet Euro 6 for diesel or Euro 4 for petrol must stay out, and driving in brings a penalty starting at £60.",
      },
      {
        q: "How much is a Glasgow low emission zone fine?",
        a: "£60, halved if paid within 14 days. It doubles each time the same vehicle enters within 90 days, up to £480 for a car or van, and only one penalty is issued per day.",
      },
      {
        q: "Is the M8 in Glasgow's low emission zone?",
        a: "No. The M8 forms the zone's northern and western edge but the motorway itself is not included.",
      },
      {
        q: "Can a removal van park on the pavement in Glasgow?",
        a: "Only to load or unload in the course of business where there is no reasonable alternative, with no part of the van within 1.5 metres of the far edge of the pavement, and for no more than 20 minutes at a time.",
      },
      {
        q: "What is the fine for pavement parking in Glasgow?",
        a: "£100, reduced to £50 if paid within 14 days. The same ban covers double parking and parking at dropped kerbs.",
      },
      {
        q: "Can a man and van do Manchester to Glasgow in a day?",
        a: "Yes, for most loads, but it is a full day. A goods van driven for work is limited to 10 hours' driving a day, so the job starts early.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Edinburgh removals", path: "/routes/manchester-to-edinburgh/" },
      { label: "Manchester to Sheffield removals", path: "/routes/manchester-to-sheffield/" },
      { label: "Completion day when moving house", path: "/moving-guides/completion-day-moving-house/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "October 2026",
  },
  {
    slug: "manchester-to-bristol",
    navLabel: "Manchester to Bristol",
    name: "Manchester to Bristol",
    h1: "Manchester to Bristol Removals",
    title: "Man and Van Manchester to Bristol | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Bristol and back: the M6 and M5 run, Almondsbury roadworks to February 2027, Bristol's Clean Air Zone and £9 van charge, and £38 bay suspensions.",
    cardBlurb: "Down the M5 to a Clean Air Zone, a £9 van charge and £38 bay suspensions.",
    intro: [
      "Manchester to Bristol is about 170 miles down the M6 and the M5, which makes it a full day for a van once loading and unloading are added at each end.",
      "The price works the same in both directions. At the Bristol end, three things shape the day: roadworks at the Almondsbury Interchange until February 2027, a city centre Clean Air Zone that charges older vans, and council bay suspensions that are quick to book but never confirmed.",
    ],
    keyFacts: [
      { label: "Clean Air Zone", value: "Class D, 1.18 square miles of central Bristol" },
      { label: "Non-compliant van", value: "£9 a day, the same as a car" },
      { label: "Paying the charge", value: "Up to 6 days before or 6 days after" },
      { label: "Clean Air Zone penalty", value: "£120 plus the charge, or £60 within 14 days" },
      { label: "Bay suspension", value: "£38 a day for up to 5 metres" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M6, the M5 and Almondsbury",
        body:
          "The run is the M6 south to Birmingham and the M5 the rest of the way, and the M5 meets the M4 at the Almondsbury Interchange just north of Bristol. National Highways is working on that interchange from 15 September 2026 to February 2027, so the last stretch in can be slower than the rest of the trip.",
        outro:
          "The way home is where it matters most. From 11 October to December 2026 the link from the M4 westbound onto the M5 northbound is closed around the clock, so a van leaving Bristol on the M32 and the M4 cannot use it to turn north. We plan the return around the closure before the day rather than finding it on the slip road.",
      },
      {
        h2: "Bristol's Clean Air Zone",
        body:
          "Bristol runs a Class D Clean Air Zone covering 1.18 square miles of the city centre, and it operates 24 hours a day, every day of the year. Since it started on 28 November 2022, a van under 3.5 tonnes that does not meet the standard pays £9 a day, the same as a car. Diesel vans meet it at Euro 6, roughly the end of 2015 or newer, and petrol vans at Euro 4, roughly 2006 or newer.",
        outro:
          "The charge is paid online, up to six days before the trip or by 11:59pm on the sixth day after; the government sets the rules out on its [clean air zone page](https://www.gov.uk/guidance/driving-in-a-clean-air-zone). Miss it and Bristol issues a £120 penalty on top of the charge, reduced to £60 plus the charge if paid within 14 days, and the council is chasing them: in March 2026 it was reported to have £22 million of Clean Air Zone fines unpaid. If either address is inside the zone, we say so when we quote.",
      },
      {
        h2: "Suspending a Bay in Bristol",
        body:
          "Bristol City Council suspends a parking bay for £38 a day for one vehicle up to 5 metres long, and a domestic removal is one of the reasons it accepts. Where there is no bay, it can cone off a stretch of road or yellow lines instead, at £38 a day for each 5 metres, up to £152 a day.",
        outro:
          "Allow three working days for the application, and do not wait for a reply: the council says it will not contact you to confirm approval, only if it needs more information. Apply through the council's [parking suspension page](https://www.bristol.gov.uk/residents/parking/parking-suspension-dispensations-and-coning-requests/suspensions) as soon as the date is fixed, and ask for the length the van needs rather than one car's space, because most removal vans are longer than 5 metres.",
      },
      {
        h2: "What a Manchester to Bristol Move Costs",
        body:
          "Bristol is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. A bay suspension or coning is paid to the council, not to us. If you are buying, the van is booked for [completion day](/moving-guides/completion-day-moving-house/), and the earlier we know the date, the easier the run is to plan around the roadworks.",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Bristol address is inside the Clean Air Zone.",
      "If there are bays or yellow lines outside the Bristol address, apply to the council at least three working days ahead.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Do vans pay to enter Bristol's Clean Air Zone?",
        a: "Only if they do not meet the standard. A non-compliant van under 3.5 tonnes pays £9 a day, the same as a car. Diesel vans meet it at Euro 6 and petrol vans at Euro 4.",
      },
      {
        q: "How long do I have to pay the Bristol Clean Air Zone charge?",
        a: "You can pay up to six days before you travel, on the day, or by 11:59pm on the sixth day after you drive in.",
      },
      {
        q: "What is the fine for not paying Bristol's Clean Air Zone charge?",
        a: "A £120 penalty charge notice plus the unpaid charge, reduced to £60 plus the charge if paid within 14 days.",
      },
      {
        q: "How much does it cost to suspend a parking bay in Bristol for a move?",
        a: "£38 a day for one vehicle up to 5 metres long. On a road without bays, coning costs £38 a day per 5 metres, up to £152 a day. Allow three working days, and the council will not confirm approval.",
      },
      {
        q: "Are there roadworks on the M5 near Bristol?",
        a: "Yes. National Highways is working on the M4 and M5 Almondsbury Interchange from 15 September 2026 to February 2027, and the link from the M4 westbound to the M5 northbound is closed around the clock from 11 October to December 2026.",
      },
      {
        q: "Can a man and van do Manchester to Bristol in a day?",
        a: "Yes, for most loads. It is about 170 miles each way, so the job starts early.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Birmingham removals", path: "/routes/manchester-to-birmingham/" },
      { label: "Manchester to Sheffield removals", path: "/routes/manchester-to-sheffield/" },
      { label: "Completion day when moving house", path: "/moving-guides/completion-day-moving-house/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "November 2026",
  },
  {
    slug: "manchester-to-newcastle",
    navLabel: "Manchester to Newcastle",
    name: "Manchester to Newcastle",
    h1: "Manchester to Newcastle Removals",
    title: "Man and Van Manchester to Newcastle | Frank's Van and Man Manchester",
    metaDescription:
      "Man and van from Manchester to Newcastle and back: 142 miles on the M62 and A1(M), the Simister Island works, Tyneside's Clean Air Zone and £12.50 van charge, and the Tyne Bridge restoration.",
    cardBlurb: "Over the Pennines to a £12.50 van charge and a bridge under restoration.",
    intro: [
      "Manchester to Newcastle is about 142 miles, east on the M62 and north up the A1(M), which with loading at both ends makes a full day for the van.",
      "The price works the same in both directions. At the Newcastle end, the city's Clean Air Zone charges older vans but not private cars, and the Tyne Bridge is part way through a restoration due to finish in 2028.",
    ],
    keyFacts: [
      { label: "Clean Air Zone", value: "Class C, Newcastle city centre and the Tyne crossings" },
      { label: "Non-compliant van", value: "£12.50 a day; private cars are not charged" },
      { label: "Paying the charge", value: "Up to 6 days before or 6 days after" },
      { label: "Clean Air Zone penalty", value: "£120 plus the charge, or £60 within 14 days" },
      { label: "Tyne Bridge", value: "Restoration due to finish in 2028" },
      { label: "Long distance move", value: rate("long-distance") },
    ],
    sections: [
      {
        h2: "The M62, the A1(M) and Simister Island",
        body:
          "The run leaves Manchester on the M60 and joins the M62 at Simister Island, junction 18, then crosses the Pennines to the A1(M) and heads north to Tyneside. [National Highways](https://nationalhighways.co.uk/roads-and-travel/road-projects/north-west/m60-junction-18-simister-island-interchange/) started rebuilding Simister Island in summer 2026, in a scheme due to run to 2029 or 2030, and overnight works there are under way now.",
        outro:
          "On a run this long the start time matters more than the route. A goods van driven for work is limited to 10 hours at the wheel in a working day, so a full load to Newcastle is planned as one long day with an early start.",
      },
      {
        h2: "Newcastle's Clean Air Zone",
        body:
          "Newcastle and Gateshead run a Class C Clean Air Zone covering Newcastle city centre and the routes over the Tyne, Swing, High Level and Redheugh bridges. Private cars are not charged, but since 17 July 2023 a van that does not meet the standard has paid £12.50 a day. A van meets it with a Euro 6 diesel or a Euro 4 petrol engine.",
        outro:
          "The charge can be paid up to six days before the trip or by 11:59pm on the sixth day after; the councils set the rules out on their [van drivers page](https://www.breathe-cleanair.com/van-drivers). Miss it and the penalty is £120 plus the charge, reduced to £60 plus the charge if paid within 14 days. The zone is staying for now: in June 2025 the councils' clean air programme reported that nitrogen dioxide had fallen 9% across the city since 2023, but Percy Street in the city centre and Stephenson Road in Heaton were still over the legal limit. If either address is inside the zone, we say so when we quote.",
      },
      {
        h2: "The Tyne Bridge Restoration",
        body:
          "The Tyne Bridge is being restored in time for its centenary in 2028. The plan set out in April 2026 was for scaffolding on the deck from autumn 2026, to build a protection deck above the carriageway, followed by work on the main arch in 2027.",
        outro:
          "All four central crossings, the Tyne, Swing, High Level and Redheugh bridges, sit inside the Clean Air Zone, so a non-compliant van coming over from Gateshead pays the same charge whichever one it uses. If the address is south of the river, tell us, because the way in changes the plan.",
      },
      {
        h2: "What a Manchester to Newcastle Move Costs",
        body:
          "Newcastle is priced as a [long distance move](/services/long-distance-removals/): one fixed figure for the route, the load and the mileage, agreed before the day. If the street at the Newcastle end is busy, ask the council about a bay suspension as soon as the date is fixed, and if you are buying, the van is booked for [completion day](/moving-guides/completion-day-moving-house/).",
        outro: "The starting bands for each service are [on the rate card](/prices/).",
      },
    ],
    booking: [
      "Send us both addresses, with floors and whether there is a lift.",
      "Tell us roughly what is moving, or send a few photos.",
      "Check whether the Newcastle address is inside the Clean Air Zone or south of the river.",
      "If the Newcastle street is busy, ask the council about a bay suspension early.",
      "We confirm the date, the van and the fixed price in writing before the day.",
    ],
    faqs: [
      {
        q: "Do vans pay to enter Newcastle's Clean Air Zone?",
        a: "Only if they do not meet the standard. A non-compliant van pays £12.50 a day; a van with a Euro 6 diesel or Euro 4 petrol engine pays nothing, and private cars are not charged.",
      },
      {
        q: "What is the fine for not paying Newcastle's Clean Air Zone charge?",
        a: "£120 plus the unpaid charge, reduced to £60 plus the charge if paid within 14 days.",
      },
      {
        q: "Are the Tyne bridges in the Clean Air Zone?",
        a: "Yes. The zone covers Newcastle city centre and the routes over the Tyne, Swing, High Level and Redheugh bridges.",
      },
      {
        q: "When will the Tyne Bridge restoration finish?",
        a: "It is due to be complete in time for the bridge's centenary in 2028, with work on the main arch planned for 2027.",
      },
      {
        q: "Are there roadworks at Simister Island?",
        a: "Yes. National Highways started rebuilding junction 18 of the M60, where the M62 begins, in summer 2026, and the scheme runs to 2029 or 2030.",
      },
      {
        q: "Can a man and van do Manchester to Newcastle in a day?",
        a: "Yes, for most loads. It is about 142 miles each way, so the job starts early.",
      },
    ],
    related: [
      { label: "Long distance man and van from Manchester", path: "/services/long-distance-removals/" },
      { label: "Manchester to Leeds removals", path: "/routes/manchester-to-leeds/" },
      { label: "Manchester to Edinburgh removals", path: "/routes/manchester-to-edinburgh/" },
      { label: "Completion day when moving house", path: "/moving-guides/completion-day-moving-house/" },
      { label: "House removals", path: "/services/house-removals/" },
      { label: "Prices", path: "/prices/" },
    ],
    reviewed: "November 2026",
  },
];

export const getRoutePage = (slug: string) => routePages.find((p) => p.slug === slug);

export { rate };
