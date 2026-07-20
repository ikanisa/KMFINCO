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

- `/api/contact` validates consent and delivers enquiries through an approved webhook or Resend configuration.
- `/api/book` validates meeting requests, checks Google Calendar free/busy availability, and creates a Calendar event with Google Meet and attendee notifications.
- Both experiences fail safely when production credentials are absent: contact opens a prepared email and booking produces a dated Google Calendar invitation.
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
