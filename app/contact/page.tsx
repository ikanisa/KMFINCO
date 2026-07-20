import { pageMetadata } from "../../lib/seo";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

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
          <img src="/contact-conversation.webp" alt="A senior adviser listening carefully during a client conversation" width="1600" height="1000" loading="lazy" decoding="async" />
        </div>
        <div className="contact-page-form"><ContactForm /></div>
      </section>
      <SiteFooter />
    </main>
  );
}
