// -------------------------------------------------------------
// SITE CONFIG - single source of truth.
// When you rent this site out, change the phone number and (optionally)
// the address here in ONE place and it updates everywhere.
// -------------------------------------------------------------

export const site = {
  name: "Van and Man Manchester",
  legalName: "Van and Man Manchester",
  domain: "vanandmanmanchester.co.uk",
  url: "https://www.vanandmanmanchester.co.uk",

  // PLACEHOLDER PHONE - swap for the real operator's number before going live.
  // Manchester dialling code is 0161. Do not leave the 000 0000 placeholder live.
  phoneDisplay: "0161 000 0000",
  phoneTel: "+441610000000",

  // Email is optional. Point the lead API at the operator's inbox / Zapier / CRM.
  email: "quotes@vanandmanmanchester.co.uk",

  // MovingCompany schema uses areaServed + telephone. Street address is left
  // out on purpose (mobile service, no shopfront). If the operator has a real
  // registered address, add it in Schema.tsx where the TODO is marked.
  city: "Manchester",
  region: "Greater Manchester",
  country: "United Kingdom",

  // Registered address (serviced office). Shown in the footer and used in the
  // MovingCompany schema. Keep this identical to the Google Business Profile.
  address: {
    street: "3 Piccadilly Place",
    locality: "Manchester",
    region: "Greater Manchester",
    postcode: "M1 3BN",
    countryCode: "GB",
    // The postcode geocodes to a neighbouring unit, so the map pin uses the
    // exact building name to land on the right spot. Displayed address stays
    // the clean "3 Piccadilly Place" above.
    mapQuery: "Orega Serviced Offices - Piccadilly Place - Manchester M1 3BN",
  },

  hours: "Mon to Sun, 7am to 9pm",

  // Short strapline used in headers / meta.
  strapline: "Reliable man and van removals across Manchester",
};

// Primary "nearby areas" surfaced on the homepage and in copy.
export const primaryAreas = [
  "Manchester City Centre",
  "Salford",
  "Didsbury",
  "Chorlton",
  "Fallowfield",
];
