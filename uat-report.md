# KM FINCO production UAT and QA report

Date: 20 July 2026  
Local test profiles: desktop 1440 × 1000, reference 960 × 689, mobile 390 × 844  
Production URL: `https://km-finco-advisory-2026.bosco560038.chatgpt.site`

## Acceptance summary

| Route | Desktop | Mobile | Images | SEO | Result |
| --- | --- | --- | --- | --- | --- |
| `/` | Pass | Pass | 8/8 unique, loaded | Pass | Pass |
| `/services` | Pass | Pass | 7/7 unique, loaded | Pass | Pass |
| `/services/audit-assurance` | Pass | Pass | 5/5 unique, loaded | Pass | Pass |
| `/services/management-consulting` | Pass | Pass | 5/5 unique, loaded | Pass | Pass |
| `/services/tax-accounting-payroll` | Pass | Pass | 5/5 unique, loaded | Pass | Pass |
| `/services/corporate-fiduciary` | Pass | Pass | 5/5 unique, loaded | Pass | Pass |
| `/services/investment-family-office` | Pass | Pass | 5/5 unique, loaded | Pass | Pass |
| `/about` | Pass | Pass | 3/3 unique, loaded | Pass | Pass |
| `/insights` | Pass | Pass | 6/6 unique, loaded | Pass | Pass |
| `/contact` | Pass | Pass | 1/1 unique, loaded | Pass | Pass |

## Functional journeys

| Journey | Acceptance check | Result |
| --- | --- | --- |
| Primary navigation | Desktop links resolve; mobile menu opens/closes and exposes all primary destinations | Pass |
| Service discovery | Homepage capability rail, service disclosures and service-index cards resolve to the five service pages | Pass |
| Audit and management consulting | Dedicated pages, offerings, outcomes and conversion sections render with unique imagery | Pass |
| Contact validation | Empty submit focuses the first required field and preserves native validity states | Pass |
| Contact success | Valid test data renders the live success status and “Send another note” control | Pass |
| Keyboard | Logical initial focus order and visible 3px focus indicator | Pass |
| Responsive | No horizontal overflow on any route at desktop or mobile profiles | Pass |
| Runtime | No console log errors or uncaught exceptions during the full route run | Pass |

## Image and performance hygiene

- 36 newly generated section images are deployed as WebP at 1536 × 1024.
- Combined weight of the new image set: 3,298,380 bytes (3.15 MiB).
- Hero images use explicit dimensions and eager loading; below-the-fold images use native lazy loading and async decoding.
- Every visible content image has a descriptive `alt` attribute and a unique source within its route.

## SEO acceptance

- Unique title and description on all ten routes.
- Absolute canonical URLs on all ten routes.
- Open Graph and X/Twitter metadata with absolute social image origin.
- Organisation/ProfessionalService structured data in the root document.
- `robots.txt` and `sitemap.xml` return HTTP 200 with correct content types.
- Sitemap contains all ten canonical routes and points to the production origin.

## Deployment note

The visible contact flow is a front-end success-state demonstration. It does not transmit or persist contact data because no approved mailbox, CRM or form endpoint has been supplied.

## Evidence

- `qa/comparison-v3.png`
- `qa/local-v3/desktop-contact-sheet.jpg`
- `qa/local-v3/mobile-contact-sheet.jpg`
- `qa/generated-sections-contact-sheet.jpg`
- Individual route captures in `qa/local-v3/`

Final local result: passed
