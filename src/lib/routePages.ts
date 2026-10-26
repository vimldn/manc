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
          "So unlike a move to Birmingham or Bristol, there is no daily charge to plan around at the Liverpool end.",
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
];

export const getRoutePage = (slug: string) => routePages.find((p) => p.slug === slug);

export { rate };
