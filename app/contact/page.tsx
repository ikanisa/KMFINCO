import { pageMetadata } from "../../lib/seo";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TrackedLink } from "../components/TrackedLink";
import { siteConfig } from "../../lib/site-config";

export const metadata = pageMetadata({ title: "Contact", description: "Start a conversation with KM FINCO about audit, management consulting, tax, corporate or investment priorities.", path: "/contact" });

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-page section-shell">
        <div className="contact-page-intro">
          <p className="eyebrow">Start a conversation</p>
          <h1>What would you like to make clearer?</h1>
          <p>Share a little about the decision, challenge or opportunity in front of you. We’ll connect you with the right specialist.</p>
          <div className="contact-options" aria-label="Direct contact options">
            <TrackedLink href={`mailto:${siteConfig.email}`} event="contact_email_click"><span>Email</span><strong>{siteConfig.email}</strong></TrackedLink>
            <TrackedLink href={`tel:${siteConfig.phoneE164}`} event="contact_phone_click"><span>Call</span><strong>{siteConfig.phoneDisplay}</strong></TrackedLink>
            <TrackedLink href={siteConfig.whatsappUrl} event="contact_whatsapp_click" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Message our team</strong></TrackedLink>
            <TrackedLink href={siteConfig.bookingUrl} event="booking_click"><span>Google Calendar</span><strong>Book a meeting</strong></TrackedLink>
          </div>
          <p className="service-area"><strong>Where we work</strong>{siteConfig.serviceArea}</p>
          <img src="/contact-conversation.webp" alt="A senior adviser listening carefully during a client conversation" width="1600" height="1000" loading="lazy" decoding="async" />
        </div>
        <div className="contact-page-form"><ContactForm /></div>
      </section>
      <SiteFooter />
    </main>
  );
}
