// -------------------------------------------------------------
// Structured, service-specific detail rendered on each service page,
// keyed by the service slug in services.ts. Content is deliberately
// different per service (a student move is not a flat move is not an
// office move) so pages do not read as one template with swapped words.
// Everything here is operational fact, not a claim about credentials.
// -------------------------------------------------------------

export type ServiceDetails = {
  forWho: string;
  included: string[];
  notIncluded: string[];
  access: string;
  vanRec: string;
  equipment: string[];
  pricingFactors: string[];
  booking: string[];
};

export const serviceDetails: Record<string, ServiceDetails> = {
  "house-removals": {
    forWho:
      "Households moving within Manchester or heading out of the area, from a one-bed terrace to a family home.",
    included: [
      "Loading, transport and unloading to the room you want",
      "Furniture wrapped in blankets and secured with straps",
      "Flat-pack dismantling and reassembly on request",
      "Door and floor protection at both ends",
    ],
    notIncluded: [
      "Full packing of boxes unless you ask for it",
      "Disconnecting plumbed appliances such as washing machines",
      "Specialist piano or safe moving unless arranged in advance",
    ],
    access:
      "Terraced streets, permit bays and completion-day timing all affect a house move. We check parking and access at both ends before the day.",
    vanRec:
      "One and two-bed homes usually suit a Luton; larger houses may need two movers or a second trip. See the van guide.",
    equipment: ["Moving blankets", "Ratchet straps", "Trolley and sack truck", "Wardrobe boxes on request"],
    pricingFactors: ["Size of the home", "Distance", "Access and stairs at both ends", "Whether packing or dismantling is needed"],
    booking: [
      "Tell us the from and to postcodes and rough contents",
      "We recommend the van and crew size and quote it",
      "Confirm the date, including completion-day timing",
      "We load, transport and unload on the day",
    ],
  },
  "flat-apartment-removals": {
    forWho:
      "Anyone moving to or from a flat, studio or apartment, including city-centre high rises and converted terraces.",
    included: [
      "Careful carry down narrow stairs or via the goods lift",
      "Loading-bay and lift-slot timing built into the plan",
      "Wrapping for mattresses, sofas and screens",
      "Single-load studio and one-bed moves where possible",
    ],
    notIncluded: [
      "Booking your building's goods lift or loading bay (we will guide you)",
      "Removing doors or windows for oversized items",
      "Full packing unless requested",
    ],
    access:
      "Stairs, lift restrictions, concierge sign-in and timed loading bays are the norm in apartment blocks. Tell us the floor and whether there is a lift so we bring the right crew.",
    vanRec:
      "Most studio and one-bed flats fit a large van or Luton in a single load, keeping the cost down.",
    equipment: ["Moving blankets", "Straps", "Trolley for corridor runs", "TV and mattress protection"],
    pricingFactors: ["Floor and lift access", "Parking or loading-bay distance", "Amount being moved", "Time of week"],
    booking: [
      "Give us the block, floor and lift details",
      "We plan the load around any timed access",
      "Confirm the slot and any concierge requirements",
      "We move you, usually in a single run",
    ],
  },
  "man-and-van-hire": {
    forWho:
      "People who just need a van and a pair of hands for a couple of hours, by the hour or by the job.",
    included: [
      "A clean van with a driver who lifts and loads",
      "Option to add a second mover for heavy loads",
      "Blankets, straps and a trolley as standard",
      "Multiple stops on one booking where practical",
    ],
    notIncluded: [
      "Self-drive hire (we always provide the driver)",
      "Guaranteed same-day unless confirmed when you call",
      "Waste disposal (see rubbish removal)",
    ],
    access:
      "Tell us about stairs, parking and the heaviest item so we send the right crew and van first time.",
    vanRec:
      "One mover and a van suits boxes and small furniture; add a second for wardrobes, sofa beds and lots of stairs.",
    equipment: ["Moving blankets", "Ratchet straps", "Trolley", "Sack truck"],
    pricingFactors: ["One or two movers", "Hourly or fixed job", "Distance and stops", "When you book"],
    booking: [
      "Describe the job and how long you think it needs",
      "We suggest hourly or fixed, whichever is cheaper",
      "Confirm the time and crew size",
      "We turn up and get it shifted",
    ],
  },
  "rubbish-removal": {
    forWho:
      "Anyone clearing junk, bulky items, a garage, a garden or a full property who does not want to load a skip.",
    included: [
      "We carry it out ourselves, you lift nothing",
      "Single items up to full house and garage clearances",
      "Sorting reusable items from genuine waste",
      "Recycling where we can, disposal through proper routes",
    ],
    notIncluded: [
      "Hazardous waste such as asbestos, chemicals or gas bottles",
      "Anything we are not permitted to carry as household waste",
    ],
    access:
      "Tell us roughly how much there is and where it sits (loft, garage, garden) so we bring the right van and enough hands.",
    vanRec:
      "Clearances are priced on the volume your waste takes up in the van, which is usually cheaper than a skip.",
    equipment: ["Trolley and sack truck", "Gloves and handling kit", "Straps to secure loads"],
    pricingFactors: ["Volume of waste", "Type of items", "Access and carry distance", "Disposal route"],
    booking: [
      "Send photos or a description of what needs clearing",
      "We quote on the volume it will take up",
      "Confirm a slot, single item or full clearance",
      "We load, remove and dispose responsibly",
    ],
  },
  "furniture-delivery": {
    forWho:
      "Anyone collecting or delivering a large single item, including Marketplace, eBay, Gumtree and shop pickups.",
    included: [
      "Collection and delivery to the room you want",
      "Wrapping and strapping so items arrive undamaged",
      "Careful carry up stairs and through tight doorways",
      "Same or next-day where the run allows",
    ],
    notIncluded: [
      "Assembly beyond simple reconnection unless agreed",
      "Waiting where a seller is not ready to release the item",
    ],
    access:
      "Measure doorways and stairwells for large items, and send a photo of the item and the entrance so we plan the carry.",
    vanRec:
      "A small or long-wheelbase van suits most single items; a Luton with a tail lift helps with the heaviest pieces.",
    equipment: ["Moving blankets", "Straps", "Trolley", "Tools for minor dismantling"],
    pricingFactors: ["Distance between the two postcodes", "How awkward the item is to handle", "Stairs and access", "How soon you need it"],
    booking: [
      "Send the collection and delivery postcodes and a photo",
      "We quote the run per job",
      "Confirm the collection window with the seller",
      "We collect, transport and deliver to the room",
    ],
  },
  "student-moves": {
    forWho:
      "Students moving between halls and house shares, room to room, or clearing out at the end of tenancy around Fallowfield, Withington, Rusholme and the city centre.",
    included: [
      "Boxes, bedding, clothes and the usual student kit",
      "Multiple drops on one run for housemates moving together",
      "Small, cheap loads handled quickly",
      "Flexible timing around checkout deadlines",
    ],
    notIncluded: [
      "Long-term storage (we can move you into a unit you have booked)",
      "Packing your room unless you ask",
    ],
    access:
      "Student streets in Fallowfield and Withington are tight and parking is limited, and end-of-tenancy dates cluster in summer, so book early.",
    vanRec:
      "A single room or studio suits a small or large van; a whole house share sharing one booking often works out cheapest.",
    equipment: ["Blankets and straps", "Trolley", "Spare boxes on request"],
    pricingFactors: ["How much you are moving", "Distance", "Whether housemates share the booking", "Time of year"],
    booking: [
      "Tell us the from and to and roughly what you have",
      "Share with housemates to split the cost if you can",
      "Confirm a slot before your checkout time",
      "We move you, with multiple drops if needed",
    ],
  },
  "office-removals": {
    forWho:
      "Small offices, studios, shops and salons moving without the cost or scale of a corporate removals contract.",
    included: [
      "Desks, chairs, filing, stock and IT wrapped and moved",
      "Out-of-hours and weekend slots to cut downtime",
      "Labelling so items go back where they belong",
      "Dismantling and reassembly of desks on request",
    ],
    notIncluded: [
      "Structured cabling, server decommissioning or IT reinstallation",
      "Moves requiring specialist lifting equipment unless arranged",
    ],
    access:
      "Building management, service lifts and out-of-hours access all need planning. Tell us your quiet window and the building's rules.",
    vanRec:
      "Small offices suit a Luton with two movers; larger or multi-floor moves may need more than one run.",
    equipment: ["Moving blankets", "Straps", "Trolley and cage where useful", "Screen and equipment protection"],
    pricingFactors: ["Amount of furniture and equipment", "Out-of-hours timing", "Building access and floors", "Dismantling needs"],
    booking: [
      "Walk us through the office contents and floors",
      "We quote on size and the hours involved",
      "Confirm an out-of-hours or weekend window",
      "We move and label so you are back up fast",
    ],
  },
  "long-distance-removals": {
    forWho:
      "Anyone moving from Manchester to London or elsewhere in the UK who wants one van and one driver door to door.",
    included: [
      "A single driver and van for the whole journey",
      "A fixed price agreed before we set off",
      "Careful loading for a longer road journey",
      "One point of contact who does the move",
    ],
    notIncluded: [
      "Transfers between depots (your items stay in one van)",
      "Overnight storage unless arranged in advance",
    ],
    access:
      "Access matters at both ends of a long move. Confirm parking and any timed access in the destination city as well as here.",
    vanRec:
      "The van is matched to the load and the route; larger homes may need a Luton with a tail lift for the distance.",
    equipment: ["Moving blankets", "Straps and load bars", "Trolley", "Extra protection for the journey"],
    pricingFactors: ["Route and mileage", "Size of the load", "Access at both ends", "How far ahead you book"],
    booking: [
      "Send both postcodes and a description of the load",
      "We give a firm fixed price on the route",
      "Book ahead to lock in the day",
      "We move you door to door in one journey",
    ],
  },
};

export const getServiceDetails = (slug: string) => serviceDetails[slug];
