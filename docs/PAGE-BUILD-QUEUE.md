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
| 8 | 2026-09-24 | P1 | Man and Van Eccles | `/locations/eccles/` |
| 8 | 2026-09-24 | P1 | Man and Van Worsley | `/locations/worsley/` |
| 9 | 2026-09-25 | P1 | Man and Van Swinton | `/locations/swinton/` |
| 9 | 2026-09-25 | P1 | Man and Van Bolton | `/locations/bolton/` |
| 10 | 2026-09-28 | P1 | Man and Van Bury | `/locations/bury/` |
| 10 | 2026-09-28 | P1 | Man and Van Oldham | `/locations/oldham/` |
| 11 | 2026-09-29 | P1 | Man and Van Rochdale | `/locations/rochdale/` |
| 11 | 2026-09-29 | P1 | Man and Van Wigan | `/locations/wigan/` |
| 12 | 2026-10-01 | P1 | Furniture Assembly and Dismantling | `/services/furniture-dismantling/` |
| 12 | 2026-10-01 | P1 | Loading and Unloading Service | `/services/loading-unloading/` |
| 13 | 2026-10-02 | P1 | Keys Delayed on Moving Day | `/moving-guides/keys-delayed-moving-day/` |
| 13 | 2026-10-02 | P1 | Removal Company Not Turned Up | `/moving-guides/removal-company-not-turned-up/` |
| 14 | 2026-10-05 | P1 | Removal Company Waiting Charges | `/moving-guides/removal-company-waiting-charges/` |
| 14 | 2026-10-05 | P1 | How Long Does Moving House Take? | `/moving-guides/how-long-does-moving-house-take/` |
| 15 | 2026-10-07 | P1 | What Removal Companies Won't Move | `/moving-guides/what-removal-companies-wont-move/` |
| 15 | 2026-10-07 | P1 | Damage During a House Move | `/moving-guides/damage-during-house-move/` |
| 16 | 2026-10-08 | P1 | Moving House in the Rain | `/moving-guides/moving-house-in-the-rain/` |
| 16 | 2026-10-08 | P1 | Will My Sofa Fit Through the Door? | `/moving-guides/will-my-sofa-fit/` |
| 17 | 2026-10-09 | P1 | How Many Boxes Do I Need to Move House? | `/moving-guides/how-many-moving-boxes/` |
| 17 | 2026-10-09 | P1 | Moving Out of a Rental Checklist | `/moving-guides/moving-out-rental-checklist/` |
| 18 | 2026-10-13 | P1 | Moving House With Children | `/moving-guides/moving-house-with-children/` |
| 18 | 2026-10-13 | P1 | Moving House With Pets | `/moving-guides/moving-house-with-pets/` |
| 19 | 2026-10-21 | P1 | Student Removals Victoria Park Manchester | `/student-removals/victoria-park/` |
| 19 | 2026-10-21 | P1 | International Student Removals Manchester | `/student-removals/international-students/` |
| 20 | 2026-10-22 | P1 | Student Removals Hulme Manchester | `/student-removals/hulme/` |
| 20 | 2026-10-22 | P1 | End of Term Student Removals Manchester | `/student-removals/end-of-term/` |
| 21 | 2026-10-22 | P1 | Moving Home From Manchester University | `/student-removals/moving-home/` |
| 21 | 2026-10-22 | P1 | Moving From Halls to a Student House in Manchester (guide) | `/moving-guides/halls-to-student-house-manchester/` |
| 22 | 2026-10-22 | P2 | RNCM Student Removals | `/student-removals/rncm/` |
| 22 | 2026-10-22 | P2 | UA92 Student Removals | `/student-removals/ua92/` |
| 23 | 2026-10-23 | P2 | University of Law Manchester Student Removals | `/student-removals/university-of-law/` |
| 23 | 2026-10-23 | P2 | BPP Manchester Student Removals | `/student-removals/bpp/` |
| 24 | 2026-10-26 | P2 | University of Bolton Student Removals (now University of Greater Manchester) | `/student-removals/university-of-bolton/` |
| 24 | 2026-10-26 | P2 | Manchester to Liverpool Removals | `/routes/manchester-to-liverpool/` |
| 25 | 2026-10-27 | P2 | Manchester to Leeds Removals | `/routes/manchester-to-leeds/` |
| 25 | 2026-10-27 | P2 | Manchester to Birmingham Removals | `/routes/manchester-to-birmingham/` |
| 26 | 2026-10-28 | P2 | Manchester to Sheffield Removals | `/routes/manchester-to-sheffield/` |
| 26 | 2026-10-28 | P2 | Manchester to Edinburgh Removals | `/routes/manchester-to-edinburgh/` |

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
| blocked | P1 | Summer Student Moves Manchester | `/student-removals/summer-moves/` | needs decision 10 |
| blocked | P1 | Moving Into Manchester University Halls (guide) | `/moving-guides/moving-into-manchester-university-halls/` | needs decision 11 |
| 27 | P2 | Manchester to Glasgow Removals | `/routes/manchester-to-glasgow/` | Scottish LEZ; Edinburgh page already explains Scottish LEZs are penalties not charges, so lead Glasgow on its own zone and rules |
| 27 | P2 | Moving Day Completion Guide | `/moving-guides/completion-day-moving-house/` | gap-check against keys-delayed guide |
| 28 | P2 | Seller Hasn't Moved Out on Completion Day | `/moving-guides/seller-not-moved-out/` | |
| 28 | P2 | How Far in Advance Should I Book Removals? | `/moving-guides/how-far-in-advance-book-removals/` | |
| later | P0 | Student Removals Fallowfield, Withington, Rusholme | `/student-removals/...` | needs decision 1 |
| later | P0 | Last-Minute Removals | `/services/last-minute-removals/` | needs decision 6, same-day page now live |
| later | P0 | Small Removals | `/services/small-removals/` | needs decision 5 |
| later | P0 | House Clearance | `/services/house-clearance/` | needs decision 4 |

After Altrincham the only P0 pages left are the blocked ones below, so the
queue moves on to the P1 location pages.

Note for the next council page: Bury, Oldham, Rochdale and Wigan all publish no
dispensation fee, so four pages already make that negative point. Lead any
further borough page on what the council does publish, not on the absence.
Wigan Council's own site is Cloudflare-blocked from this machine; everything on
that page came from its statutory notices on Public Notice Portal, its
EasiPermits portal and the developer's own site.

The eight P1 student pages above were skipped when the queue moved on to the
P1 location pages on day 6 and were never logged. Found and restored on
2026-10-13; they come before any P2 work.

Victoria Park (day 19) is built on the area, not the halls: the UoM page owns
the Victoria Park hall list and the Oxford Road bus gate section, and the
Longsight page owns the conservation area boundary. Keep it that way.

Hulme (day 20) is the student page for M15: Briarfield, Birley, the four permit
zones. /locations/hulme/ stays the generic man and van page. End of Term (day
20) owns the move-out rules and donation and waste; the hall end dates stay on
the university pages and /services/student-storage-manchester/.

## Indexing

Quota was already spent when tried on 2026-10-28. Request on the next free day: `/routes/manchester-to-sheffield/` and `/routes/manchester-to-edinburgh/` (day 26).

GSC Request Indexing quota is shared across the whole fleet account and was
already spent on 2026-10-22. Request first on the next free day: `/prices/`
(Discovered, not indexed), then the newest student pages. Home, house removals,
man and van hire, student moves, the student hub, the UoM page, student storage
and long distance were all indexed on 2026-10-22. Sitemap resubmitted 2026-10-22.

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

9. **Can Movers Dismantle Furniture?** (`/moving-guides/do-removal-companies-dismantle-furniture/`, P1).
   The live `/services/furniture-dismantling/` page owns the intent, and the BAR
   clause 3.6 list is already on the won't-move guide. Answered as an FAQ on the
   service page instead of a separate URL (2026-10-09).
10. **Summer Student Moves Manchester** (`/student-removals/summer-moves/`, P1).
   The summer gap is owned twice already: `/services/student-storage-manchester/`
   ("Why Manchester Students End Up Needing Storage") and the End of Term page
   ("Deposits and the Summer Gap", summer retainers). Recommendation: drop it,
   or build it only if a distinct summer query turns up (2026-10-22).
11. **Moving Into Manchester University Halls** (guide, P1). The UoM, Manchester
   Met and Salford pages are the move-in pages: arrival addresses, key
   collection, the thirty minute drop-off limit and the bus gates. A city-wide
   guide would split that intent four ways. Recommendation: drop it
   (2026-10-22).

## Clean to build with no decision

- 15 of the 17 new location pages (everything except Northern Quarter and the
  Rusholme duplicate).
- Storage and packing services. Neither word appears anywhere in the current
  service copy.
- All six route pages. No sibling van and man repo mentions Manchester and none
  has a routes segment, so Manchester can own both directions of each pair.
- Bolton, Bury, Oldham, Rochdale, Wigan, Stockport and Altrincham have no
  sibling site, so there is no cross-domain clash on those location pages.
