import { pageMetadata } from "../../lib/seo";
import { PrimaryCta } from "../components/PrimaryCta";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TrackedLink } from "../components/TrackedLink";
import { siteConfig } from "../../lib/site-config";

export const metadata = pageMetadata({ title: "Contact", description: "Start a conversation with KM FINCO about audit, management consulting, tax, corporate or investment priorities.", path: "/contact" });

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className="contact-page section-shell">
        <div className="contact-page-intro">
          <p className="eyebrow">Start a conversation</p>
          <h1>What would you like to make clearer?</h1>
          <p>Choose the most convenient way to reach the team, or book a meeting directly through Google Calendar.</p>
          <div className="contact-options" aria-label="Direct contact options">
            <div className="contact-option-static"><span>Email</span><strong>{siteConfig.email}</strong></div>
            <TrackedLink href={`tel:${siteConfig.phoneE164}`} event="contact_phone_click"><span>Call</span><strong>{siteConfig.phoneDisplay}</strong></TrackedLink>
            <TrackedLink href={siteConfig.whatsappUrl} event="contact_whatsapp_click" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Message our team</strong></TrackedLink>
            <TrackedLink href={siteConfig.bookingUrl} event="booking_click"><span>Google Calendar</span><strong>{siteConfig.primaryCtaLabel}</strong></TrackedLink>
          </div>
          <p className="service-area"><strong>Where we work</strong>{siteConfig.serviceArea}</p>
          <img src="/contact-conversation.webp" alt="A senior adviser listening carefully during a client conversation" width="1600" height="1000" loading="lazy" decoding="async" />
        </div>
        <aside className="contact-page-form contact-booking-card" aria-labelledby="contact-booking-title">
          <p className="eyebrow">Book a Meeting</p>
          <h2 id="contact-booking-title">Choose a time that works for you.</h2>
          <p>The native booking flow checks availability, creates a Google Meet link and sends the Calendar invitation to KM FINCO’s approved scheduling contacts.</p>
          <PrimaryCta className="primary-button" />
          <p className="contact-card-note">For a quick question, call {siteConfig.phoneDisplay} or use the official WhatsApp contact.</p>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
