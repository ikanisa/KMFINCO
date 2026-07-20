# KM FINCO website go-live readiness audit

Audit date: 20 July 2026
Repository: `ikanisa/KMFINCO`
Local path: `/Users/mjmwestby/Documents/KMFINCO/KMFINCO-repo`
Baseline audited commit: `7980500b67dc3e6ca77f378cbe87632d5488edf5`

## Post-audit implementation status

The identified repository-level gaps have been implemented on branch `codex/go-live-readiness`: direct email, phone and WhatsApp channels; a contact form that prepares a `mailto:` draft without server-side email delivery or storage; a native Google Calendar/Meet booking route; service-area wording; privacy and consent; consent-gated analytics hooks; canonical domain/SEO updates; Search Console verification support; a verified-only LinkedIn hook; and a branded 404 page. The expanded build, lint, browser and seven-test validation suite passes.

Public launch remains blocked by external account ownership and production values rather than missing repository code. The exact activation checklist is maintained in `GO_LIVE_IMPLEMENTATION.md`.

Live checks on 20 July 2026 found that `https://kmfinco.com` currently serves a GoDaddy Website Builder “Launching Soon” page. Its apex records still point to GoDaddy, while mail DNS points to Microsoft 365 and includes SPF, DMARC (`p=quarantine`) and Outlook autodiscover. The operational mailbox and DKIM signing remain unverified. The configured Sites project continues to return `project_not_found` to the connected account.

## Executive verdict

The website is technically close to launch: the current repository builds, lints, renders all ten routes, has responsive navigation, has SEO metadata, has structured data, has a sitemap/robots implementation, and passes the current rendered HTML tests.

Go-live is not fully ready for a public business launch because the production hosting/access state and lead-capture path are not complete. The recorded production URL returns HTTP 401 to an unauthenticated request, and the Sites project ID in `.openai/hosting.json` is not visible to the current connected Sites account. The contact form is currently a front-end success-state demonstration only; it does not email, store, or route inquiries.

## Validation results

- `pnpm run build`: pass
- `pnpm run lint`: pass
- `node --test tests/rendered-html.test.mjs`: pass, 4/4 tests
- Browser-observed desktop/mobile route checks: pass for representative Home, Services, and Contact viewports
- Ten-route DOM checks: one `h1`, one `main`, no missing image alt text, no horizontal overflow, no browser console errors
- Mobile interaction check: menu opens and exposes all primary links with `aria-expanded="true"`
- Contact validation check: empty submit focuses the first invalid field
- Contact success check: valid local test data shows the success state

## Confirmed strengths

- Premium visual direction and consistent advisory tone across Home, Services, Contact and service pages.
- Clear primary CTA: “Start a conversation.”
- Responsive mobile navigation is implemented with a real disclosure button.
- Good baseline accessibility hygiene: semantic headings, labels on contact fields, visible focus styling, image alt text, reduced-motion CSS.
- SEO basics are present: metadata base, canonical URLs, Open Graph/X metadata, `sitemap.ts`, `robots.ts`, and Organization/ProfessionalService JSON-LD.
- Asset weight is reasonable for an image-led advisory site: `public/` is about 3.9 MB, with WebP section imagery and a 149 KB social image.

## Blocking go-live issues

1. Public production access is not verified.
   - The recorded production URL is `https://km-finco-advisory-2026.bosco560038.chatgpt.site`.
   - Unauthenticated request returned HTTP 401.
   - Sites connector returned `project_not_found` for `appgprj_6a5e28dbdfac81919b9393e0d6fdd5d8`.
   - Action needed: confirm hosting owner/account, access policy, and desired public/custom domain.

2. Contact form does not transmit or persist leads.
   - `ContactForm` calls `event.preventDefault()` and then sets a local success state.
   - Action needed: connect an approved destination such as email, CRM, database, or serverless form endpoint.

3. Direct contact routes are missing.
   - No visible email, phone, WhatsApp, calendar booking, physical address, map link, or social/business profile links were found in the rendered pages.
   - Action needed: add verified contact details and fallback channels.

## High-priority readiness gaps

- Add a real contact submission backend with spam protection and operational ownership.
- Add meeting booking via Google Calendar appointment schedule, Calendly, Cal.com, or another approved booking flow.
- Add WhatsApp contact link using an approved official number.
- Add direct `mailto:` and `tel:` links.
- Add office address, jurisdictions served, and Google Maps link if appropriate.
- Add privacy policy and cookie/analytics disclosure if analytics, remarketing, or form tracking is added.
- Add analytics/conversion tracking after privacy/legal approval.
- Resolve domain strategy: production ChatGPT/Sites URL vs. custom domain.
- Confirm final brand/legal name, footer address, regulatory disclaimers, and professional-service claims.

## Recommended launch checklist

### Must-have before public launch

- Public hosting access works without owner-only authentication.
- Custom domain attached and validated, if not using the Sites URL.
- Contact form sends/stores leads and has a tested owner workflow.
- Email address added.
- Phone number added.
- WhatsApp link added, if used by the business.
- Meeting booking link added.
- Privacy policy added.
- Form consent wording added if personal data is collected.
- Real business address or service-area statement added.
- Production smoke test repeated on the final public URL.

### Should-have before marketing launch

- Google Analytics / Plausible / PostHog or other analytics.
- Search Console setup.
- Conversion tracking for contact form, booking, email, phone and WhatsApp clicks.
- LinkedIn/company profile link.
- Favicon/social preview verified in live unfurls.
- 404/not-found page.
- Security headers review.
- Basic performance pass on final production URL.

### Nice-to-have after launch

- Newsletter or insights subscription.
- Downloadable firm profile.
- Team bios and credentials.
- Case studies or proof points where legally/commercially safe.
- CRM integration and automated lead acknowledgement.

## Evidence files

- `route-measurements.json`
- `interaction-checks.json`
- `viewport/desktop-home.jpg`
- `viewport/mobile-home.jpg`
- `viewport/desktop-services.jpg`
- `viewport/mobile-services.jpg`
- `viewport/desktop-contact.jpg`
- `viewport/mobile-contact.jpg`
