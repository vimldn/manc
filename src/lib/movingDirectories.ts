export type MovingDirectory = {slug:string;name:string;h1:string;desc:string;intro:string;service:string;sections:string[][];checks:string[];faqs:{q:string;a:string}[];rates:string[]};
export const movingDirectories: MovingDirectory[] = [
  {
    "slug": "apartment-buildings",
    "name": "Apartment building moving guides",
    "h1": "Moving into or out of a Manchester apartment?",
    "desc": "Moving flats in Manchester? Plan your lift, loading spot and van with Frank’s building-by-building moving guides.",
    "intro": "Got a flat to move, a lift to book and a sofa that looked much smaller in the shop? We can help. Tell us which building, which floor and where your things are going. We’ll work out the van and lifting help you need.",
    "service": "flat-apartment-removals",
    "sections": [
      [
        "Start with the building, not the van",
        "Ask reception or your managing agent which entrance movers should use, whether you need a lift slot and whether there is a vehicle height limit. Send us the actual loading entrance and any instructions, not just your residential postcode."
      ],
      [
        "What’s going in the van?",
        "A studio with boxes and a bed is a different job from a furnished two-bedroom flat. Send photos or a list of the big items. Measure the sofa, lift doors and the tightest turn on the way out. If something needs dismantling, tell us before the day."
      ],
      [
        "Moving between two high-rises?",
        "Check access at both addresses before choosing a time. If the first building has a two-hour lift slot and the second has a later appointment, let us know so we can plan the trip and explain any waiting charges."
      ]
    ],
    "checks": [
      "Exact building and tower, floor and loading entrance",
      "Lift arrangements and permitted loading times",
      "Both postcodes, move date and item list"
    ],
    "faqs": [
      {
        "q": "Can you move a single item into my flat?",
        "a": "Yes. Tell us the item’s dimensions and whether there are stairs or a lift. We’ll quote for the actual job."
      },
      {
        "q": "Do you book the lift for me?",
        "a": "Ask your building team who can reserve it. Let us know the confirmed slot and access instructions so we can plan around them."
      }
    ],
    "rates": [
      "one-small",
      "one-large",
      "two-large"
    ]
  },
  {
    "slug": "new-build-developments",
    "name": "New-build moving guides",
    "h1": "Got the keys to a new-build home?",
    "desc": "Frank’s helps you plan moving into new-build homes across Greater Manchester, from key collection to furniture delivery.",
    "intro": "Congratulations on the new place! Getting the keys is exciting; sitting outside with a van full of furniture less so. Let’s work out when you can get in and how to get everything through the door.",
    "service": "house-removals",
    "sections": [
      [
        "Get a realistic key handover time",
        "Ask your solicitor or developer when the keys are expected and whether you can take possession straight away. Avoid booking furniture deliveries for the same narrow window if the handover could change."
      ],
      [
        "Find the address a driver can actually use",
        "New postcodes don’t always appear in navigation apps straight away. Send us the development name, plot or house number and a map pin for the completed street. Ask the site team about vehicle access, unfinished roads and any restrictions on moving vans."
      ],
      [
        "Protect the new home",
        "Check the width of doors, stairs and hallways before moving large furniture. Put essentials in clearly labelled boxes and tell us where the heavy items should go. If you have separate deliveries, coordinate them so the entrance isn’t blocked."
      ]
    ],
    "checks": [
      "Confirmed completion or key handover date",
      "Plot number, full address and map pin",
      "Developer access instructions and furniture dimensions"
    ],
    "faqs": [
      {
        "q": "Can I book before completion is confirmed?",
        "a": "You can ask for a quote in advance. Tell us if the date is provisional and check the booking and rescheduling terms before committing."
      },
      {
        "q": "Can you collect furniture as well?",
        "a": "Ask us about a collection on the way or a separate delivery. We’ll price the extra stop based on the route and load."
      }
    ],
    "rates": [
      "one-large",
      "two-large",
      "two-luton"
    ]
  },
  {
    "slug": "furniture-collections",
    "name": "Furniture collection guides",
    "h1": "Found the perfect sofa? We’ll help get it home.",
    "desc": "Furniture collections across Manchester, from shops, auctions and online marketplaces. Plan pickup, lifting and delivery with Frank’s.",
    "intro": "You’ve found a bargain, but it’s not going in the boot. Give us the collection and delivery postcodes, what you’ve bought and when it’s ready. We’ll help with the lifting and the van.",
    "service": "furniture-delivery",
    "sections": [
      [
        "Before you pay or arrange collection",
        "Confirm the seller or shop allows a third party to collect, and find out what proof of purchase or authorisation is needed. Ask whether the item is assembled, boxed or upstairs. For private purchases, check condition and measurements before sending payment."
      ],
      [
        "Measure both ends",
        "Get the dimensions of the item, including any packaging. Check your doorway, staircase and lift as well as the seller’s access. A sofa fitting in the van is only half the battle."
      ],
      [
        "Agree who is doing the lifting",
        "Let us know if the seller can help or if you need two movers. Don’t assume shop staff will load a private collection. Tell us if there is a collection time limit or awkward parking."
      ]
    ],
    "checks": [
      "Collection and delivery postcodes and time window",
      "Item photos, dimensions and whether it is dismantled",
      "Seller contact or collection reference and lifting arrangements"
    ],
    "faqs": [
      {
        "q": "Can you collect from a private seller?",
        "a": "Yes, if the seller agrees to the arrangements. Confirm payment and handover directly with them and send us the pickup details."
      },
      {
        "q": "Can you collect more than one item?",
        "a": "Tell us the locations and sizes. We can quote for multiple items or stops where practical."
      }
    ],
    "rates": [
      "single-item",
      "one-small",
      "two-large"
    ]
  },
  {
    "slug": "storage-facilities",
    "name": "Storage transport guides",
    "h1": "Moving things into or out of storage in Manchester?",
    "desc": "Man and van transport to Manchester self-storage facilities. Plan your unit access, collection, loading and moving costs with Frank’s.",
    "intro": "Between homes, clearing a spare room or putting things away for a few months? Book your storage unit with the provider and we’ll help get your belongings there. Need them back again? We can quote for that too.",
    "service": "self-storage-removals",
    "sections": [
      [
        "Set up the unit before the van arrives",
        "Confirm the unit size, start date, access hours and any ID or check-in requirements with the storage operator. Ask how your movers can access the site and whether you need to be present."
      ],
      [
        "Check the route from van to unit",
        "Ask about loading doors, vehicle height limits, trolleys and lifts. Let us know the floor, unit location and approximate carry distance. A long corridor can make a difference to loading time."
      ],
      [
        "Pack for the day you need it again",
        "Label boxes on the side, keep things you may need soon towards the front and protect fragile furniture. Leave essentials and anything the provider prohibits out of the load. Ask the facility about its own insurance and security arrangements."
      ]
    ],
    "checks": [
      "Facility branch, postcode and confirmed unit booking",
      "Access code arrangements, floor and loading area (do not share codes publicly)",
      "Item list and whether it’s a drop-off or collection"
    ],
    "faqs": [
      {
        "q": "Does the moving price include storage rental?",
        "a": "No. Our quote covers the transport and moving help. You arrange and pay for the storage unit separately."
      },
      {
        "q": "Can you collect from storage without me?",
        "a": "Ask the storage operator what authorisation is required. We can discuss the job once you have confirmed access."
      }
    ],
    "rates": [
      "one-small",
      "one-large",
      "two-large"
    ]
  },
  {
    "slug": "moving-services",
    "name": "Guides for different kinds of moves",
    "h1": "Whatever’s behind your move, we can help with the heavy bit.",
    "desc": "Manchester moving help for first homes, tenancy changes, downsizing and other life changes. Find the right van and plan your move with Frank’s.",
    "intro": "Not every move starts with a shiny new set of keys. Sometimes it’s a tenancy ending, a smaller home, a new job or a change of plans. Whatever brings you here, we’ll focus on getting your things where they need to go.",
    "service": "house-removals",
    "sections": [
      [
        "Start with what needs to move",
        "Separate the things coming with you from anything staying, going to a new owner or going into storage. Tell us if you need more than one destination so we can plan the route and price it properly."
      ],
      [
        "Work around the dates that matter",
        "Check key handovers, tenancy deadlines and access at both ends. If dates don’t line up, arrange a storage unit first or ask us about splitting the transport into two bookings."
      ],
      [
        "Choose as much help as you need",
        "A few boxes might only need a small van and one mover. A full home, heavy furniture or lots of stairs may need a larger van and two people. You don’t need to know which before contacting us: a rough list is a good start."
      ]
    ],
    "checks": [
      "Both addresses and any additional stops",
      "Date, key handover and access arrangements",
      "Items to move, heavy furniture and special requirements"
    ],
    "faqs": [
      {
        "q": "Can you help if I’m moving at short notice?",
        "a": "Give us a ring and we’ll tell you what is available. Please mention any firm deadlines when you get in touch."
      },
      {
        "q": "Can you take some things to storage and some to my new home?",
        "a": "Tell us both destinations and what goes where. We can work out a suitable route and quote."
      }
    ],
    "rates": [
      "one-small",
      "one-large",
      "two-large",
      "two-luton"
    ]
  }
];
export type DirectorySpoke = {silo:string;slug:string;title:string;description:string;publishedAt:string;image:string};
// Only list published, verified pages here. Candidate inventory is separate.
export const directorySpokes: DirectorySpoke[] = [];
