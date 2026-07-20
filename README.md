# KM FINCO

A premium multi-page advisory website combining audit, assurance, management consulting, tax, accounting, corporate, fiduciary, investment and family-office expertise.

## Routes

- `/` — firm overview
- `/services` — connected expertise
- `/services/audit-assurance`
- `/services/management-consulting`
- `/services/tax-accounting-payroll`
- `/services/corporate-fiduciary`
- `/services/investment-family-office`
- `/about`
- `/insights`
- `/contact`
- `/book` — Google Calendar and Google Meet booking
- `/privacy`

## First-party integrations

- `/api/book` validates meeting requests, checks Google Calendar free/busy availability, and creates a Calendar event with Google Meet and attendee notifications.
- Every primary website action uses the label “Book a Meeting” and routes to `/book`.
- Confirmed Calendar events invite the prospective client, `bosco@ikanisa.com`, and `kmifsud@kmconsultants.com.mt` with `sendUpdates=all`.
- The contact form does not use a server-side email service or store submissions. It opens a pre-addressed draft in the visitor's email application.
- Booking fails safely when production credentials are absent by producing a dated Google Calendar invitation.
- Required hosted values are listed in `.env.example` and `GO_LIVE_IMPLEMENTATION.md`.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run lint
```

The production build is created with `npm run build`. Design comparison evidence is stored in `qa/`, and the final design QA record is in `design-qa.md`.
