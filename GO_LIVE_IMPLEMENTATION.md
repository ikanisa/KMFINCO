# KM FINCO go-live implementation

Updated: 20 July 2026

## Implemented in the website

- Public email and `mailto:` links: `hello@kmfinco.com`
- Phone and `tel:` links: `+35679428604`
- Official WhatsApp link: `https://wa.me/35679428604`
- First-party booking page at `/book`
- Native Google Calendar API integration that exchanges an OAuth refresh token, checks free/busy availability, creates the event, adds the prospective client as an attendee, requests a Google Meet conference and sends Calendar updates
- Correctly dated, pre-addressed Google Calendar fallback when the production Calendar credentials are unavailable
- Optional Google Calendar Appointment Schedule URL
- Contact form that opens a prepared `mailto:` draft without server-side email delivery or submission storage
- Cross-border service-area statement without inventing an office address
- Privacy policy at `/privacy`
- Required enquiry-form privacy consent
- Consent-gated Google Analytics 4 loader and conversion events for email, phone, WhatsApp, booking, LinkedIn and form submission
- Production canonical URL, sitemap, robots and structured data updated to `https://kmfinco.com`
- Google Search Console verification metadata hook
- Configurable verified LinkedIn company-profile link
- Branded 404 page
- Responsive desktop/mobile layouts and automated rendering tests

## Activation values still required

The website reads these values from the hosting environment. Add them only after the underlying account or destination has been verified.

| Requirement | Environment value | Current safe behaviour |
| --- | --- | --- |
| Public mailbox | `NEXT_PUBLIC_CONTACT_EMAIL` | Defaults to `hello@kmfinco.com`; mailbox and MX delivery must be provisioned and tested |
| Google Calendar API | `GOOGLE_CALENDAR_CLIENT_ID`, `GOOGLE_CALENDAR_CLIENT_SECRET`, `GOOGLE_CALENDAR_REFRESH_TOKEN`, `GOOGLE_CALENDAR_ID`, `GOOGLE_CALENDAR_TIMEZONE` | Produces a correctly dated Calendar invitation; credentials activate free/busy checking, event creation, attendee notifications and Google Meet |
| Public appointment schedule | `NEXT_PUBLIC_GOOGLE_BOOKING_URL` | Optional secondary route to KM FINCO's Google Appointment Schedule |
| LinkedIn company page | `NEXT_PUBLIC_LINKEDIN_URL` | Link remains hidden to avoid publishing an unverified profile |
| Google Analytics 4 | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics and consent banner remain off |
| Search Console | `GOOGLE_SITE_VERIFICATION` | Verification meta tag remains absent |

## External go-live actions

1. Restore access to the Sites project referenced in `.openai/hosting.json`, or explicitly approve replacing that project ID with a newly created Sites project.
2. Publish the validated source and attach the apex domain `kmfinco.com` plus the chosen `www` redirect.
3. Add the domain-validation records returned by Sites to the authoritative DNS zone.
4. Provision `hello@kmfinco.com`, configure SPF, DKIM and DMARC, and test inbound and outbound delivery.
5. Create Google OAuth web credentials with Calendar access for the approved KM FINCO host account, obtain an offline refresh token, and set the five server-side `GOOGLE_CALENDAR_*` values. Optionally create a public Appointment Schedule and add its URL as `NEXT_PUBLIC_GOOGLE_BOOKING_URL`. The currently connected personal Calendar identity is not published by the website.
6. Supply and verify KM FINCO's official LinkedIn company-page URL.
7. Create the GA4 property/data stream, supply the `G-` measurement ID, verify consent behaviour, and mark the implemented conversion events as key events where appropriate.
8. Add `https://kmfinco.com` to Google Search Console, supply the HTML-tag token or complete DNS verification, then submit `https://kmfinco.com/sitemap.xml`.
9. Have counsel/privacy leadership confirm the privacy-policy wording, legal entity/controller name, jurisdiction and retention periods before public launch.

## Verification completed

- Production build passes.
- Lint passes after final validation.
- Seven rendered-route and server-integration test suites pass, including contact channels, privacy, canonical domain, sitemap, robots, 404 behaviour, validation, safe unconfigured booking behaviour, free/busy checking and Google Meet event creation.
- Browser QA passes at desktop and mobile widths with no horizontal overflow or console errors.
- Contact form requires name, work email, message and privacy consent.
- Analytics does not load without both a configured GA4 ID and visitor consent.
- The booking form was completed in browser QA and produced a dated, pre-addressed Google Calendar invitation with the selected 30-minute time.
- Google Drive was searched for authoritative KMFINCO identity and activation data. The available project brief confirms the combined service model but contains no verified office address, LinkedIn URL, mailbox record, analytics ID, Search Console token or Appointment Schedule URL.

## Hosting blocker

The configured Sites project ID currently returns `project_not_found` for the connected Sites account. No custom-domain or deployment mutation was attempted after that ownership check failed.

## Live domain and mail-DNS state

Checked on 20 July 2026:

- `https://kmfinco.com` is publicly reachable, but it currently serves a GoDaddy Website Builder “Launching Soon” page rather than this repository.
- The apex A records resolve to GoDaddy infrastructure (`76.223.105.230` and `13.248.243.5`), and `www.kmfinco.com` aliases to the apex domain. Replacing this site requires access to the authoritative DNS/GoDaddy account and the approved production hosting target.
- Mail exchanger DNS points to Microsoft 365 (`kmfinco-com.mail.protection.outlook.com`), an SPF record is present, DMARC is set to `p=quarantine`, and autodiscover points to Outlook.
- Common Microsoft 365 DKIM selector records (`selector1` and `selector2`) were not found. This does not prove DKIM is absent under every possible selector, but DKIM must be confirmed in the Microsoft 365 tenant before launch.
- DNS records do not prove that `hello@kmfinco.com` exists or can send and receive. Perform authenticated inbound/outbound delivery tests before publishing it as the operational mailbox.
