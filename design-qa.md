# KMFINCO design QA

- Source reference: `/var/folders/yx/gzgvttgj2ljd6n_vs2qzdjq80000gn/T/TemporaryItems/NSIRD_screencaptureui_fhBKue/Screenshot 2026-07-20 at 14.46.13.png`
- Palette reference: `/Users/jeanbosco/Downloads/B1A9540A-5CFC-40C8-9DA8-0C5F52E7DA05.PNG`
- Combined source/implementation comparison: `qa/comparison-v3.png`
- Desktop route contact sheet: `qa/local-v3/desktop-contact-sheet.jpg`
- Mobile route contact sheet: `qa/local-v3/mobile-contact-sheet.jpg`
- Generated section-image contact sheet: `qa/generated-sections-contact-sheet.jpg`
- Comparison viewport/state: source and homepage implementation at 960 × 689, initial page state.
- Annotation source: Browser comments 1–3 supplied on 20 July 2026.
- Annotation comparison: `qa/annotations/wordmark-comparison.png`
- Updated homepage viewport: `qa/annotations/home-after-930x734.png`
- Updated expertise rail viewport: `qa/annotations/expertise-after-930x734.png`
- Updated expertise accordion viewport: `qa/annotations/expertise-accordion-after-930x734.png`
- Annotation comparison viewport/state: homepage at 930 × 734, initial and expertise states.
- Annotation pass 2 source truth: Browser comments 1–8 supplied on 20 July 2026, supported by the pre-change full-page capture `qa/local-v3/home-desktop.png`.
- Annotation pass 2 combined source/implementation comparison: `qa/annotations-pass-2/source-vs-implementation.png`.
- Annotation pass 2 focused implementation evidence: `qa/annotations-pass-2/accordion-after-930x734.png`, `qa/annotations-pass-2/management-consulting-after-930x734.png`, `qa/annotations-pass-2/who-we-help-after-930x734.png`, `qa/annotations-pass-2/how-we-work-after-930x734.png`, and `qa/annotations-pass-2/insights-after-930x734.png`.
- Annotation pass 2 viewport/state: 930 × 734 desktop section states plus 390 × 844 responsive DOM validation.
- Annotation pass 3 source truth: Browser comments 1–3 supplied on 20 July 2026 and the pre-change captures `qa/local-v3/home-reference-viewport.png` and `qa/local-v3/home-desktop.png`.
- Annotation pass 3 combined source/implementation comparison: `qa/annotations-pass-3/source-vs-implementation.png`.
- Annotation pass 3 focused desktop evidence: `qa/annotations-pass-3/sticky-header-scrolled-1199x734.png`, `qa/annotations-pass-3/meeting-scheduler-step-1-1199x734.png`, `qa/annotations-pass-3/meeting-scheduler-complete-1199x734.png`, `qa/annotations-pass-3/footer-legal-links-1199x734.png`, `qa/annotations-pass-3/privacy-page-1199x734.png`, and `qa/annotations-pass-3/terms-page-1199x734.png`.
- Annotation pass 3 focused mobile evidence: `qa/annotations-pass-3/meeting-scheduler-mobile-390x844.png` and `qa/annotations-pass-3/privacy-mobile-390x844.png`.
- Annotation pass 3 legal-page contact sheet: `qa/annotations-pass-3/legal-pages-contact-sheet.png`.
- Annotation pass 3 viewport/state: 1199 × 734 desktop at initial, scrolled, booking steps 1–3 and legal routes; 390 × 844 responsive booking and legal states.

## Visual assessment

The implementation preserves the reference's defining language: warm ivory canvas, elevated white navigation, editorial serif display type, restrained sans-serif copy, coral conversion actions, clipped photography and deep-green trust surfaces. The additional Cool/Collect colors appear only as very light gradients and atmospheric accents, keeping the overall system professional, minimalist and premium.

The multi-page extension is visibly coherent across all ten routes. Every content section now has a distinct, context-specific editorial image; the images share lighting, color temperature, wardrobe and material cues without repeating the same scene. Desktop and mobile crops retain clear subjects and avoid stretching, text overlays, logos and watermarks.

## Findings and fixes

- P1: the early homepage headline wrapped too narrowly at the target desktop size. Its width and type scale were corrected.
- P1: generated imagery initially needed a consistent measured crop strategy. Each image now uses an explicit section slot, aspect ratio and object-fit treatment.
- P1: native lazy loading initially made below-the-fold images appear absent in first-pass full-page screenshots. Each route was subsequently scrolled through and recaptured; all images decode successfully when they enter the viewport.
- P2: text-link and footer-link hit areas measured 17–21px high at the mobile breakpoint. They now have a minimum 24px target height on every route.
- P2: subpage metadata repeated the KM FINCO suffix through the root title template. Page titles were normalized.
- P2: mobile navigation and content rails were checked for horizontal overflow. All ten routes report `scrollWidth === clientWidth` at the 390px device profile.
- P2: the wordmark contained an unwanted space. Visible header/footer brand copy, accessible naming, metadata, structured data and tests now consistently use `KMFINCO`.
- P2: the homepage capability rail displayed the unwanted `01 / EXPERTISE` label. The label has been removed without changing the rail hierarchy or spacing rhythm.
- P2: the expertise accordion repeated a separate left-column sequence in addition to its colored service badges. The redundant sequence has been removed across all five rows, and the summary/detail grids were rebalanced at desktop, tablet and mobile breakpoints.
- P2: four remaining numbered homepage section labels appeared above Management Consulting, Who We Help, How We Work and Insights. All four labels are removed. The compact Who We Help and Insights headings retain their original desktop grid alignment through `section-heading-no-index` and return to the single-column mobile flow below 820px.
- P1: the main header left the viewport during page scroll. It is now a sticky, translucent navigation surface that remains 16px from the desktop viewport edge, compacts from 82px to 70px after scrolling and remains 10px from the mobile edge.
- P1: the former enquiry form was static and dated. It is replaced on the homepage and contact page by a three-step scheduler with service selection, five upcoming weekdays, time selection, attendee details, policy consent, confirmation state and a generated Google Calendar event handoff.
- P2: footer navigation lacked first-party legal routes. Privacy Policy and Terms of Use pages, metadata, sitemap entries, generated editorial images and footer links are now present.
- P2: six footer links wrapped unevenly at 1199px in the first implementation capture. The navigation gap was reduced to 18px; the post-fix capture shows all six links aligned on one line without horizontal overflow.
- No remaining P0, P1 or P2 visual defects were observed.

## Interaction and accessibility evidence

- Mobile navigation opens, exposes the complete primary navigation, reports `aria-expanded`, and closes correctly.
- Five service disclosures can be opened through their summary controls.
- Required contact fields move focus to the first invalid field; a complete valid submission renders the success status and reset action.
- Keyboard focus begins with the home link, proceeds through the navigation and primary actions in logical order, and uses a visible 3px outline.
- Every route has one H1, one main landmark, no duplicate IDs, no unlabeled form controls, no missing image alt text and no horizontal overflow.
- Reduced-motion CSS disables non-essential transitions and animation when requested.
- Browser console checks found no runtime exceptions or log errors during route and interaction testing.
- The 930 × 734 annotation viewport reports no horizontal overflow. Browser DOM checks confirm the visible wordmark is `KMFINCO`, the expertise section label count is zero, the removed sequence count is zero, and all five colored service badges remain.
- Production build, rendered-HTML tests and lint all pass after the annotation changes.
- Annotation pass 2 DOM checks confirm zero `.expertise-number` elements and no remaining copies of the four selected section labels at both 930 × 734 and 390 × 844. Neither viewport has horizontal overflow.
- Fonts and typography: the Cormorant Garamond display hierarchy, sans-serif body hierarchy, optical weights, wrapping and line-height remain unchanged after label removal.
- Spacing and layout rhythm: desktop heading anchors remain aligned at 258px for Who We Help and Insights; mobile returns them to the 14px content edge. Section radii, shadows, gaps and imagery proportions remain intact.
- Colors and visual tokens: no palette, gradient, opacity or contrast tokens changed.
- Image quality and asset fidelity: no image sources, crops, compression, masks or art direction changed; all five focused captures retain sharp, section-specific photography.
- Copy and content: only the eight user-selected redundant sequence/section labels were removed; headings, descriptions, service content and calls to action remain intact.
- Browser console review found zero warnings or errors after the pass.
- Annotation pass 3 interaction evidence: the 09:00 slot activates the continuation control; the details step exposes uniquely labelled name, email, organisation and consent controls; valid completion renders one `Open Google Calendar` link whose target begins with Google Calendar’s event-template URL. The external link was inspected but not opened.
- Header evidence: at 1400px page scroll, the header reports `position: sticky`, top offset 16px, height 70px and the `is-scrolled` state.
- Responsive evidence: the 390 × 844 scheduler uses three-column date/time grids, the privacy hero and legal navigation collapse to one column, and no tested route has horizontal overflow.
- Fonts and typography: editorial Cormorant Garamond headings and Manrope interface/body copy retain the existing hierarchy, optical weights and wrapping across the new scheduler and legal pages.
- Spacing and layout rhythm: the scheduler uses the established 24px soft-card radius, measured 8–28px internal rhythm and responsive stacking; legal hero and policy copy grids retain the site’s wide editorial cadence.
- Colors and visual tokens: the scheduler and legal pages reuse the existing ivory, forest green, coral, lilac and sage tokens with restrained light gradients and appropriate contrast.
- Image quality and asset fidelity: `privacy-policy-v2.webp` and `terms-of-use-v2.webp` are distinct generated editorial photographs, compressed as WebP and visually matched to the established lighting, wardrobe and material system.
- Copy and content: booking language is concise and task-oriented; legal pages cover information use, retention, rights, acceptable use, engagement formation, external services and responsibility without displacing service content.
- Integration note: the native flow prepares a Google Calendar event and lets the user add Google Meet conferencing. Automatic availability checks, invitation delivery and Meet-link creation require a KMFINCO Google Appointment Schedule URL or Calendar API connection before live deployment; this is an external integration dependency rather than a visual or interaction defect.

## Annotation pass 4 — Who we work with

- Source visual truth: the user’s 20 July 2026 browser annotation requesting a distinct “Who we work with” destination, grounded by the existing audience-section capture `qa/annotations-pass-2/who-we-help-after-930x734.png`.
- Implementation route: `/who-we-work-with`.
- Implementation screenshot: `qa/who-we-work-with/implementation-930x734.png`.
- Full-view comparison evidence: `qa/who-we-work-with/source-vs-implementation.png`, source and implementation shown together at 930 × 734.
- Focused evidence: `qa/who-we-work-with/desktop-viewport-1199x734.png`, `qa/who-we-work-with/audience-cards-1199x734.png`, `qa/who-we-work-with/lower-page-1199x734.png`, `qa/who-we-work-with/footer-final-1199x734.png`, and `qa/who-we-work-with/mobile-390x844.png`. Separate focused crops were unnecessary because these viewport captures render the navigation, hero, card typography, image crops, CTA and footer at readable scale.
- State: desktop initial, audience-card, CTA and footer scroll states at 1199 × 734; matched comparison at 930 × 734; mobile initial and open-navigation states at 390 × 844.

### Findings and comparison history

- P2 found in the first desktop pass: adding “Who we work with” to the footer made Privacy and Terms wrap to a second row at 1199px. Fix: footer columns were rebalanced from `0.65fr 1fr 1fr` to `0.65fr 0.85fr 1.5fr`. Post-fix evidence in `qa/who-we-work-with/footer-final-1199x734.png` shows all seven links on one line with no horizontal overflow.
- No remaining P0, P1 or P2 findings.

### Required fidelity surfaces

- Fonts and typography: Cormorant Garamond and Manrope match the established display/body hierarchy; headings wrap intentionally at desktop and mobile without truncation.
- Spacing and layout rhythm: the asymmetric hero, 12-column editorial card grid, 24–28px radii, soft elevation and sticky-header offset preserve the existing premium cadence. Mobile collapses cleanly to one column.
- Colors and visual tokens: ivory, forest green, coral, lilac and sage are reused as restrained light gradients and trust surfaces with readable contrast.
- Image quality and asset fidelity: five original 1536 × 1024 editorial photographs are compressed to WebP, crop cleanly in their measured slots, and match the site’s warm daylight, restrained wardrobe and natural-material art direction.
- Copy and content: the navigation and route consistently use “Who we work with”; the page distinguishes businesses, investors/families and international organisations, then leads each audience to the working booking CTA.

### Interaction and responsive evidence

- The desktop and mobile navigation both expose `/who-we-work-with`; the mobile menu reports `aria-expanded="true"` when opened.
- Both primary “Book a Meeting” actions lead to `/contact`; “Explore our expertise” leads to `/services`.
- At 1199 × 734 and 390 × 844, `scrollWidth` does not exceed the viewport. All five page images load at their natural 1536px width as they enter the viewport.
- The sticky header remains 16px from the desktop viewport edge while scrolled. Production build, four rendered-HTML tests, lint and diff checks pass.

## Annotation pass 5 — expertise clarity redesign

- Source visual truth: the user’s 20 July 2026 browser annotations and the current-run captures `qa/expertise-redesign/01-before-1199x734.png` and `qa/expertise-redesign/02-before-disclosures-1199x734.png`.
- Implementation screenshot: `qa/expertise-redesign/04-after-cards-1199x734.png`.
- Full-view comparison evidence: `qa/expertise-redesign/source-vs-implementation.png`, with the disclosure layout and redesigned card layout shown together at 1199 × 734.
- Focused evidence: `qa/expertise-redesign/03-many-capabilities-1199x734.png`, `qa/expertise-redesign/05-after-cards-lower-1199x734.png`, and `qa/expertise-redesign/06-after-mobile-390x844.png` cover the revised copy, both card rows and the mobile stack at readable scale.
- State: desktop scrolled capability rail and expertise states at 1199 × 734; mobile expertise state at 390 × 844.

### Findings and comparison history

- P1 found in the source: the same five services appeared in the capability rail and immediately afterward as mixed open/closed disclosures. Most useful detail was hidden, while the `+` and rotated `×` controls required interpretation. Fix: the disclosures were replaced with five always-readable cards that expose each title, proposition, up to three concrete services and the service-page link without interaction.
- P2 found in the source: the wide accordion rows required long left-to-right scanning and made comparison difficult. Fix: desktop uses a balanced three-card/two-card grid; mobile uses one full-width card per row.
- P2 copy mismatch found in the selected capability heading: “Five connected capabilities” was too restrictive. Fix: visible heading and image alternative text now say “Many connected capabilities/workstreams.”
- No remaining P0, P1 or P2 findings.

### Required fidelity surfaces

- Fonts and typography: the existing Cormorant Garamond display hierarchy and Manrope labels/body copy are preserved; card headings, descriptions and service lists remain legible without truncation.
- Spacing and layout rhythm: 18px card gaps, 22px radii, consistent 30–34px padding and equalized card heights create a predictable comparison rhythm while retaining the page’s airy editorial spacing.
- Colors and visual tokens: very light blue, lilac, peach, sage and rose gradients reuse the site palette; thin service-colored top borders provide differentiation without visual noise.
- Image quality and asset fidelity: the existing unique `home-expertise-v2.webp` section image is unchanged, sharp and correctly cropped; no placeholder or code-drawn imagery was introduced.
- Copy and content: all service details are visible by default, service links remain intact, and “Many connected capabilities” is used consistently in the selected section.

### Interaction and responsive evidence

- Browser DOM checks report five `.expertise-card` elements, five visible service links and zero legacy disclosures.
- At 1199 × 734 and 390 × 844 there is no horizontal overflow; all mobile cards measure 347px inside the responsive content rail.
- Production build, four rendered-HTML tests, lint and diff checks pass. Tests now assert the revised capability copy and absence of legacy expertise disclosures.

## Annotation pass 6 — semantic icon system

- Source visual truth: the user’s 20 July 2026 browser annotation identifying the repeated `02` badge in the homepage capability rail and requesting the removal of decorative numbering across the entire website.
- Implementation evidence: `qa/icon-system/01-home-capability-icons-1199x734.png`, `qa/icon-system/02-home-expertise-icons-1199x734.png`, `qa/icon-system/03-home-audience-icons-1199x734.png`, `qa/icon-system/04-services-index-icons-1199x734.png`, `qa/icon-system/05-service-offering-icons-1199x734.png`, `qa/icon-system/06-about-principle-icons-1199x734.png`, `qa/icon-system/07-booking-progress-icons-1199x734.png`, and `qa/icon-system/08-mobile-icons-390x844.png`.
- State and viewport coverage: desktop at 1199 × 734 across homepage, services, management consulting, about and booking states; mobile at 390 × 844 across the capability and expertise systems.

### Findings and fixes

- P1: four different content systems relied on decorative sequence numbers, making unrelated elements feel like one long ordered workflow. Fix: every decorative number was replaced with a recognizable semantic icon tailored to its service, audience, principle or task.
- P2: individual offering pages still used generic numbered cards. Fix: offering titles now resolve through a centralized icon map covering audit, reporting, governance, investment, strategy, risk, controls, tax, accounting and payroll concepts.
- P2: the booking progress indicator used numbers even though each step has a clear meaning. Fix: Calendar, Attendee and Confirmation states now use calendar, person and confirmed-calendar icons.
- Genuine numeric content—including dates, meeting times and factual quantities—remains numeric.
- No remaining P0, P1 or P2 findings.

### Required fidelity surfaces

- Fonts and typography: Cormorant Garamond and Manrope remain unchanged; icons occupy the former badge positions without altering heading wrapping or reading order.
- Spacing and layout rhythm: each icon sits in a consistent 42px soft-surface badge; desktop card alignment and the 390px single-column rail remain balanced without horizontal overflow.
- Colors and visual tokens: the icons reuse the established lilac, peach, sage and rose tints at restrained contrast, preserving the professional light-gradient system.
- Icon quality and semantics: Phosphor’s consistent stroke family is used throughout, with distinct symbols for every service and content concept. Direct per-icon imports avoid loading the full library barrel.
- Copy and content: no service descriptions, links, dates, times or factual information changed during this pass.

### Interaction and responsive evidence

- Browser DOM checks report five capability icons, five expertise-card icons, three audience icons, three approach icons, five service-index icons, six management-consulting offering icons, three principle icons and three booking-progress icons.
- The tested desktop and mobile states contain zero standalone decorative `01`–`09` labels and no horizontal overflow.
- Production build, rendered-HTML regression tests, lint and diff checks pass; the regression suite now explicitly rejects standalone decorative sequence numbers on representative routes and requires each semantic icon system.

## Annotation pass 7 — Insights hero label removal

- Source visual truth: the user’s 20 July 2026 browser annotation selecting the `Perspectives` eyebrow in the Insights hero and requesting its deletion.
- Implementation evidence: `qa/insights-label-removal/desktop-1199x734.png` and `qa/insights-label-removal/mobile-390x844.png`.
- The eyebrow was removed without changing the hero headline, supporting copy, image, gradient, route or interaction behavior.
- The remaining copy stays vertically centered against the editorial image at 1199 × 734 and returns to the established single-column flow at 390 × 844.
- Browser checks report one H1, zero `Perspectives` eyebrow labels, a loaded hero image and no horizontal overflow at both viewports.
- Production build, rendered-HTML regression tests, lint and diff checks pass. A dedicated regression test now protects the removal.

## Annotation pass 8 — homepage Insights alignment

- Source visual truth: the user’s 20 July 2026 browser annotation selecting the homepage Insights heading and requesting alignment.
- Matched before/after comparison: `qa/insights-heading-alignment/source-vs-implementation.png`; focused evidence: `before-1199x734.png`, `after-1199x734.png` and `mobile-390x844.png` in the same folder.
- P2 finding: the heading began 285px to the right of the section image, creating an unintended floating offset after the numbered eyebrow system was removed. Fix: the heading now starts on the section’s 32px desktop content edge and retains its measured 840px text width.
- At 390 × 844, the heading and image both begin at 14px. Desktop and mobile report zero horizontal overflow.
- The type scale, line breaks, image size, crop, section spacing, colors, navigation and content remain unchanged.
- Production build, rendered-HTML tests, lint and diff checks pass after the alignment correction.

## Annotation pass 9 — optional booking identity fields

- Source visual truth: the user’s 20 July 2026 browser annotations marking Full name and Organisation as optional in the booking-details step.
- Implementation evidence: `qa/optional-booking-fields/mobile-details-390x844.png` and `qa/optional-booking-fields/completed-with-email-only-1199x734.png`.
- Full name and Organisation are now explicitly labelled “(optional)” and have no `required` constraint. Work email and policy consent remain required.
- A booking completed successfully with both optional fields empty. The generated Google Calendar URL retains the work email and omits empty `Requested by` and `Organisation` lines.
- Desktop and mobile states have no horizontal overflow; existing layout, typography, colors and booking progression remain unchanged.
- Production build, rendered-HTML tests, lint and diff checks pass. Interactive browser QA covers both optional labels and the email-only completion path.

## Annotation pass 10 — expertise card CTA removal

- Source visual truth: the user’s 20 July 2026 browser annotation selecting the repeated “Explore this service” links in the homepage expertise cards and requesting their removal.
- Removed the repeated CTA from all five expertise cards and deleted the now-unused card-link styling.
- Browser checks confirm five cards and zero links inside the expertise-card grid at both 1199 × 734 and 390 × 844, with no mobile horizontal overflow.
- The service navigation in the capability rail remains available, so removing these duplicate links does not remove access to any service page.
- Production build, six rendered-HTML tests, lint and diff checks pass.

## Annotation pass 11 — redundant exploratory CTA removal

- Source visual truth: the user’s 20 July 2026 request to remove the repeated “Explore this service”, “Explore management consulting”, “Read perspective”, “Explore service” and “Explore our expertise” prompts.
- Removed those labels from the homepage, Services, About and Who we work with pages. Linked service and insight cards remain directly clickable, while primary “Book a Meeting” actions and global navigation remain intact.
- Deleted styling used only by the removed exploratory labels and added rendered-HTML regression coverage for all five phrases.
- Browser checks at 1199 × 734 and 390 × 844 confirm none of the five labels remain across the four affected routes and no page introduces horizontal overflow.
- Production build, seven rendered-HTML tests, lint and diff checks pass.

## Annotation pass 12 — meeting-format badge removal

- Source visual truth: the user’s live-site annotation selecting the “Google Meet · 45 min” badge in the booking-card header and requesting its deletion.
- Removed the badge and its desktop/mobile-only styling while retaining the meeting format and duration in the selected-booking summary, where that detail is useful.
- The scheduler heading, progress indicator and booking controls retain their original alignment and reading order.
- Rendered-HTML regression coverage now protects the badge removal.

## Annotation pass 13 — Insights card CTA removal

- Source visual truth: the user’s live-site annotation selecting the “Discuss this topic” link on an Insights card and requesting its deletion.
- Removed the CTA from all five Insights cards, together with styling used only by those links. Article category, title, summary and imagery remain unchanged.
- Global navigation and the dedicated booking route remain available without repeating an action inside every editorial card.
- Rendered-HTML regression coverage now verifies that all five article cards contain no CTA links.

final result: passed
