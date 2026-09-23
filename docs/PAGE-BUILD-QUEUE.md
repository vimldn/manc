# Manchester page build queue

Two pages per day, in the priority order of the approved plan (P0, then P1,
then P2). 74 pages, so roughly 37 build days.

Depth standard is the Cardiff build (`vanandmancardiff`): real local detail,
multi-paragraph sections, a checkable facts block, hall or street level
specifics, 5 or more FAQs, inline contextual links through the repo's own
`RichText` parser, and exactly two authority external links per page.

Every page is researched at source before it is written. Dates, hall lists and
restrictions are taken from the institution's or the council's own pages and
stamped with a `reviewed` month. Nothing on these pages is invented, and no
price is stated that is not in `src/lib/pricing.ts`.

Every page is checked at 375px before it is committed. A table inside the
two column grid needs `min-w-0` on the `<article>`, or it forces the whole
page to scroll sideways on a phone.

## Done

| Day | Date | Priority | Page | URL |
|---|---|---|---|---|
| 1 | 2026-09-11 | P0 | University of Manchester Student Removals | `/student-removals/university-of-manchester/` |
| 1 | 2026-09-11 | P0 | Manchester Metropolitan University Student Removals | `/student-removals/manchester-metropolitan-university/` |
| 2 | 2026-09-13 | P0 | University of Salford Student Removals | `/student-removals/university-of-salford/` |
| 2 | 2026-09-13 | P0 | Student Storage Moves Manchester | `/services/student-storage-manchester/` |
| 3 | 2026-09-14 | P0 | Same-Day Man and Van Manchester | `/services/same-day-man-and-van/` |
| 3 | 2026-09-14 | P0 | Packing Services Manchester | `/services/packing-services/` |
| 4 | 2026-09-15 | P0 | Self-Storage Removals Manchester | `/services/self-storage-removals/` |
| 4 | 2026-09-15 | P0 | Man and Van Ancoats | `/locations/ancoats/` |
| 5 | 2026-09-16 | P0 | Man and Van Levenshulme | `/locations/levenshulme/` |
| 5 | 2026-09-16 | P0 | Man and Van Stockport | `/locations/stockport/` |
| 6 | 2026-09-18 | P0 | Man and Van Altrincham | `/locations/altrincham/` |
| 6 | 2026-09-18 | P1 | Man and Van Ardwick | `/locations/ardwick/` |
| 7 | 2026-09-23 | P1 | Man and Van Longsight | `/locations/longsight/` |
| 7 | 2026-09-23 | P1 | Man and Van Moss Side | `/locations/moss-side/` |

Day 1 also built the segment itself: `src/lib/studentRemovals.ts`, the
`/student-removals/` hub, the `[slug]` route, sitemap entries, and header and
footer navigation.

New location pages are bespoke routes at `src/app/locations/<slug>/page.tsx`
with their own section structure. They stay in `locations.ts` with
`customPage: true` so nav, sitemap and the quote form list them, and the shared
`[location]` route skips them.

## Next up

Blocked P0 items are skipped, not dropped, and are built as soon as the
decision below is made. Day 3 skipped Fallowfield, Withington and Rusholme
student pages for that reason.

| Day | Priority | Page | URL | State |
|---|---|---|---|---|
| 8 | P1 | Man and Van Eccles | `/locations/eccles/` | ready, bespoke route (Salford council rules) |
| 8 | P1 | Man and Van Worsley | `/locations/worsley/` | ready, bespoke route |
| later | P0 | Student Removals Fallowfield, Withington, Rusholme | `/student-removals/...` | needs decision 1 |
| later | P0 | Last-Minute Removals | `/services/last-minute-removals/` | needs decision 6, same-day page now live |
| later | P0 | Small Removals | `/services/small-removals/` | needs decision 5 |
| later | P0 | House Clearance | `/services/house-clearance/` | needs decision 4 |

After Altrincham the only P0 pages left are the blocked ones below, so the
queue moves on to the P1 location pages.

## Decisions needed before the pages they block

These are collisions with pages that are already live. Building over them
would split one intent across two URLs.

1. **Fallowfield, Withington and Rusholme student pages.** The live location
   pages already target student intent. `/locations/fallowfield/` opens with
   "man and van in Fallowfield is student territory" and covers halls, end of
   tenancy and housemates sharing a van. Recommendation: build the student area
   pages as planned and re-angle the location pages onto general household and
   professional moves, so each URL owns one intent. The alternative is to drop
   the three student area pages and leave the location pages as they are.
2. **`/services/student-moves/` versus the `/student-removals/` hub.** The live
   service page owns "student man and van manchester". Recommendation: 301 it
   into the hub once the cluster has four or more pages, and keep the hub as the
   head-term page. Not done yet, so both exist for now.
3. **IKEA, sofa and Facebook Marketplace collection pages.** The live
   `/services/furniture-delivery/` page already names IKEA, Facebook
   Marketplace, Gumtree, eBay, sofas, single items and same-day collection.
   Either split that page's content out into the three children and reduce it to
   a hub, or drop the three.
4. **`/services/house-clearance/` versus `/services/rubbish-removal/`.** The
   live page already sells "a full house to clear" and "full properties".
5. **`/services/small-removals/`.** Overlaps `/services/man-and-van-hire/` and
   `/services/flat-apartment-removals/` with no distinct query left.
6. **Same-day, last-minute and "moving tomorrow and haven't packed".** Three
   URLs on one intent. Recommendation: one service page plus one guide.
7. **`/locations/northern-quarter/`.** Sits inside the live
   `/locations/manchester-city-centre/` page.
8. **Three guides duplicate live guides.** Apartment loading bays against the
   live parking reservation guide, city centre apartment move against the live
   flat move guide, and what makes removals more expensive against the live
   Manchester cost guide.

## Clean to build with no decision

- 15 of the 17 new location pages (everything except Northern Quarter and the
  Rusholme duplicate).
- Storage and packing services. Neither word appears anywhere in the current
  service copy.
- All six route pages. No sibling van and man repo mentions Manchester and none
  has a routes segment, so Manchester can own both directions of each pair.
- Bolton, Bury, Oldham, Rochdale, Wigan, Stockport and Altrincham have no
  sibling site, so there is no cross-domain clash on those location pages.
