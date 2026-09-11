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

## Done

| Day | Date | Priority | Page | URL |
|---|---|---|---|---|
| 1 | 2026-09-11 | P0 | University of Manchester Student Removals | `/student-removals/university-of-manchester/` |
| 1 | 2026-09-11 | P0 | Manchester Metropolitan University Student Removals | `/student-removals/manchester-metropolitan-university/` |

Day 1 also built the segment itself: `src/lib/studentRemovals.ts`, the
`/student-removals/` hub, the `[slug]` route, sitemap entries, and header and
footer navigation.

## Next up

| Day | Priority | Page | URL | State |
|---|---|---|---|---|
| 2 | P0 | University of Salford Student Removals | `/student-removals/university-of-salford/` | ready |
| 2 | P0 | Student Storage and Storage Moves Manchester | `/services/student-storage-manchester/` | ready |
| 3 | P0 | Student Removals Fallowfield | `/student-removals/fallowfield/` | needs a decision |
| 3 | P0 | Student Removals Withington | `/student-removals/withington/` | needs a decision |

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
