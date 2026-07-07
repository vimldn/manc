# Van and Man Manchester

Rank-and-rent local lead generation site for the "man and van Manchester" niche.
Next.js (App Router) + TypeScript + Tailwind. Deployable on Vercel.

## Stack
- Next.js 14 (App Router, static generation for all content pages)
- TypeScript, Tailwind CSS
- `trailingSlash: true`

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Architecture
Flat, crawlable, service + location silos.

- `/` homepage
- `/services/` hub + `/services/[service]/` (8 pages, SSG)
- `/locations/` hub + `/locations/[location]/` (14 areas, SSG)
- `/quote/`, `/contact/`, `/about/`, `/thank-you/`
- `/privacy-policy/`, `/terms/`
- `/api/lead` form handler
- `sitemap.xml` (generated, hardcoded LAST_MODIFIED) + `robots.txt`

## Content is data-driven
- Services: `src/lib/services.ts`
- Locations: `src/lib/locations.ts`
- Site config (name, phone, domain, areas): `src/lib/config.ts`
- Schema (JSON-LD): `src/lib/schema.ts`

Add a service or area by adding one object to the relevant data file. The page,
sitemap entry, nav dropdown, footer link and internal links update automatically.

## BEFORE YOU RENT IT OUT (do these)
1. `src/lib/config.ts` - set the real operator phone (`phoneDisplay`, `phoneTel`)
   and email. The placeholder is `0161 000 0000` - do not leave it live.
2. `src/app/api/lead/route.ts` - wire the lead handler to email / Zapier /
   Google Sheets / CRM (set `LEAD_WEBHOOK_URL` in Vercel).
3. `src/lib/schema.ts` - if the operator has a real registered address, add it
   to the MovingCompany schema (marked with a TODO).
4. Reviews: the homepage testimonials block is intentionally empty. Only add
   REAL, verifiable reviews. Do not ship fabricated testimonials or ratings.
5. Review `privacy-policy` and `terms` for accuracy / UK GDPR before launch.

## SEO notes
- Schema: MovingCompany (LocalBusiness subtype), Service, FAQPage,
  BreadcrumbList, WebSite, WebPage, CollectionPage. No fake review schema.
- Keyword-driven service silo (removals, hire, rubbish removal, furniture,
  student, office, long distance) and 14 Manchester area pages including the
  postcodes seen in search data (M8, M14, M15, M16, M22 etc).
- One H1 per page; H2/H3 hierarchy; unique title + meta + canonical per page.
