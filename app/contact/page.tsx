import { pageMetadata } from "../../lib/seo";
import { MeetingScheduler } from "../components/MeetingScheduler";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = pageMetadata({ title: "Book a consultation", description: "Choose a time for a private KMFINCO consultation about audit, management consulting, tax, corporate or investment priorities.", path: "/contact" });

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-page section-shell">
        <div className="contact-page-intro">
          <p className="eyebrow">Book a private consultation</p>
          <h1>Choose a time that works.</h1>
          <p>Select the expertise, date and time you need. We’ll prepare the calendar invitation for a focused Google Meet conversation.</p>
          <img src="/contact-conversation.webp" alt="A senior adviser listening carefully during a client conversation" width="1600" height="1000" loading="lazy" decoding="async" />
        </div>
        <div className="contact-page-form"><MeetingScheduler /></div>
      </section>
      <SiteFooter />
    </main>
  );
}
