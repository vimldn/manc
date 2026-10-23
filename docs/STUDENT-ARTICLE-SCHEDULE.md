# Manchester student moving article schedule

Approved request: write all 30 researched articles with photos, internal and external links and SEO metadata; release two articles per day.

## Publication

- First pair: 23 October 2026, live when this deployment is promoted.
- Remaining pairs: 09:00 Europe/London each day, 24 October–6 November 2026.
- The timestamps include the BST to GMT change on 25 October.
- 29 new URLs and one expanded existing article (ID 8), preserving its original URL and publication date.
- Public article routes, guide listings, related links and sitemap all use the same server-side publication gate. Future new URLs return 404 with noindex. The existing version of ID 8 remains live until its replacement date.
- No daily rebuild, manual edit or publishing cron is required. Content remains in the private server bundle until due; the repository itself is public.

## Schedule

| UK release date | Article 1 | Article 2 |
|---|---|---|
| 23 October 2026 | [Moving Out of Richmond Park, Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-richmond-park-manchester/) | [Moving Out of Unsworth Park](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-unsworth-park/) |
| 24 October 2026 | [Moving Out of Whitworth Park Halls](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-whitworth-park-halls/) | [Moving Out of Birley Halls Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-birley-halls-manchester/) |
| 25 October 2026 | [Moving Out of Peel Park Quarter](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-peel-park-quarter/) | [How Much Does Student Storage in Manchester Cost?](https://www.vanandmanmanchester.co.uk/moving-guides/student-storage-manchester-cost/) |
| 26 October 2026 | [Manchester Student Storage: Boxes or a Unit?](https://www.vanandmanmanchester.co.uk/moving-guides/manchester-student-storage-boxes-or-unit/) | [Moving from Halls to a House in Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/halls-to-student-house-manchester/) |
| 27 October 2026 | [Sharing a Moving Van with Housemates](https://www.vanandmanmanchester.co.uk/moving-guides/sharing-moving-van-housemates/) | [Moving Between University of Manchester Halls](https://www.vanandmanmanchester.co.uk/moving-guides/moving-between-university-of-manchester-halls/) |
| 28 October 2026 | [Moving Out of Ashburne Hall](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-ashburne-hall/) | [Moving Out of Sheavyn House](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-sheavyn-house/) |
| 29 October 2026 | [Moving Out of Hulme Hall and Burkhardt House](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-hulme-hall-burkhardt-house/) | [Moving Out of Dalton-Ellis Hall](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-dalton-ellis-hall/) |
| 30 October 2026 | [Moving Out of Canterbury Court and St Anselm Hall](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-canterbury-court-st-anselm-hall/) | [Moving Out of Denmark Road Student Accommodation](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-denmark-road-student-accommodation/) |
| 31 October 2026 | [Moving Out of Weston Hall, Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-weston-hall-manchester/) | [Moving Out of Archway Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-archway-manchester/) |
| 01 November 2026 | [Moving Out of Cavendish Halls Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-cavendish-halls-manchester/) | [Moving Out of Oxford Court Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-oxford-court-manchester/) |
| 02 November 2026 | [Moving Out of Needham Court](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-needham-court/) | [Moving Out of Briarfield Halls](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-briarfield-halls/) |
| 03 November 2026 | [Moving Out of John Lester and Eddie Colman Courts](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-john-lester-eddie-colman-courts/) | [Moving Out of Piccadilly Point, Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-piccadilly-point-manchester/) |
| 04 November 2026 | [Moving Out of Parkway Gate, Manchester](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-parkway-gate-manchester/) | [Moving Out of Artisan Heights](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-artisan-heights/) |
| 05 November 2026 | [Moving Out of New Medlock House](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-new-medlock-house/) | [Moving Out of Vita Circle Square](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-vita-circle-square/) |
| 06 November 2026 | [Moving Out of Vita First Street](https://www.vanandmanmanchester.co.uk/moving-guides/moving-out-vita-first-street/) | [How to Pack a Student Room for Summer Storage](https://www.vanandmanmanchester.co.uk/moving-guides/pack-student-room-summer-storage/) |

## Content and SEO

Each article includes two locally hosted, licensed Pexels photographs with descriptive alt text and credit links, unique title/description/canonical, Open Graph and Twitter image metadata, five visible FAQs, Article/FAQ/Breadcrumb structured data, official sources linked within the text, and links to relevant existing service and university pages. Images are labelled illustrative stock photos and do not claim to show the named halls.

Photo source URLs, photographer names and licence references are recorded in `src/content/student-photo-credits.json`. Sources were checked on 23 October 2026; departure dates and advertised storage prices should be reviewed before the next academic-year campaign. Specific agreements and current residence instructions take precedence. Frank’s provides storage transport; customers book the storage itself.

## Maintenance

- Editorial content: `src/content/student-moving-articles.json`.
- Release times: the `publishAt` field; keep explicit ISO timezone offsets.
- Schedule helper: `src/lib/studentArticles.ts`.
- Do not add future slugs directly to public navigation or other static pages.
- Run `node scripts/check-student-articles.cjs` and `npm run build` after substantive changes.
- Preserve `originalPublishedAt` for an expanded existing guide.

## SEO targets

| ID | Primary search phrase | URL |
|---|---|---|
| 1 | Richmond Park Manchester moving out | `/moving-guides/moving-out-richmond-park-manchester/` |
| 2 | Unsworth Park moving out | `/moving-guides/moving-out-unsworth-park/` |
| 3 | Whitworth Park moving out | `/moving-guides/moving-out-whitworth-park-halls/` |
| 4 | moving out of Birley halls | `/moving-guides/moving-out-birley-halls-manchester/` |
| 5 | Peel Park Quarter moving out | `/moving-guides/moving-out-peel-park-quarter/` |
| 6 | student storage Manchester cost | `/moving-guides/student-storage-manchester-cost/` |
| 7 | Manchester student storage boxes or unit | `/moving-guides/manchester-student-storage-boxes-or-unit/` |
| 8 | moving from halls to a house Manchester | `/moving-guides/halls-to-student-house-manchester/` |
| 9 | sharing a moving van with housemates | `/moving-guides/sharing-moving-van-housemates/` |
| 10 | moving between University of Manchester halls | `/moving-guides/moving-between-university-of-manchester-halls/` |
| 11 | Ashburne Hall moving out | `/moving-guides/moving-out-ashburne-hall/` |
| 12 | Sheavyn House moving out | `/moving-guides/moving-out-sheavyn-house/` |
| 13 | Hulme Hall moving out | `/moving-guides/moving-out-hulme-hall-burkhardt-house/` |
| 14 | Dalton Ellis Hall moving out | `/moving-guides/moving-out-dalton-ellis-hall/` |
| 15 | Canterbury Court moving out | `/moving-guides/moving-out-canterbury-court-st-anselm-hall/` |
| 16 | Denmark Road accommodation moving out | `/moving-guides/moving-out-denmark-road-student-accommodation/` |
| 17 | Weston Hall Manchester moving out | `/moving-guides/moving-out-weston-hall-manchester/` |
| 18 | Archway Manchester moving out | `/moving-guides/moving-out-archway-manchester/` |
| 19 | Cavendish halls Manchester moving out | `/moving-guides/moving-out-cavendish-halls-manchester/` |
| 20 | Oxford Court Manchester moving out | `/moving-guides/moving-out-oxford-court-manchester/` |
| 21 | Needham Court moving out | `/moving-guides/moving-out-needham-court/` |
| 22 | Briarfield Manchester moving out | `/moving-guides/moving-out-briarfield-halls/` |
| 23 | John Lester Eddie Colman moving out | `/moving-guides/moving-out-john-lester-eddie-colman-courts/` |
| 24 | Piccadilly Point moving out | `/moving-guides/moving-out-piccadilly-point-manchester/` |
| 25 | Parkway Gate moving out | `/moving-guides/moving-out-parkway-gate-manchester/` |
| 26 | Artisan Heights moving out | `/moving-guides/moving-out-artisan-heights/` |
| 27 | New Medlock House moving out | `/moving-guides/moving-out-new-medlock-house/` |
| 28 | Vita Circle Square moving out | `/moving-guides/moving-out-vita-circle-square/` |
| 29 | Vita First Street moving out | `/moving-guides/moving-out-vita-first-street/` |
| 30 | how to pack a student room for summer storage | `/moving-guides/pack-student-room-summer-storage/` |
