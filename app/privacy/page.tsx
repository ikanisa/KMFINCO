import { pageMetadata } from "../../lib/seo";
import { siteConfig } from "../../lib/site-config";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description: "How KM FINCO collects, uses and protects personal information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <article className="legal-page section-shell">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy policy</h1>
        <p className="legal-updated">Last updated 20 July 2026</p>

        <section>
          <h2>Who we are</h2>
          <p>KM FINCO provides professional advisory services to organisations, investors and privately held businesses operating across borders. Privacy questions can be directed to {siteConfig.email}.</p>
        </section>
        <section>
          <h2>Information we collect</h2>
          <p>When you contact us, we may collect your name, work email, organisation, phone number and the information you include in your enquiry. We may also collect limited technical and usage information if you accept optional analytics.</p>
        </section>
        <section>
          <h2>How we use information</h2>
          <p>We use submitted information to respond to enquiries, assess whether and how we can assist, arrange meetings, maintain appropriate business records and protect the security of our website. We do not sell personal information.</p>
        </section>
        <section>
          <h2>Legal basis and retention</h2>
          <p>We process enquiry information to take steps at your request before a potential engagement and for our legitimate interests in operating and protecting our business. Where consent is required, including for optional analytics, you may withdraw it. We retain information only as long as needed for the purpose collected and applicable legal or professional obligations.</p>
        </section>
        <section>
          <h2>Service providers and international access</h2>
          <p>We may use providers for website hosting, communications, analytics and meeting scheduling. They may process information in other countries under appropriate safeguards. Google Calendar and Google Meet are governed by Google’s own privacy terms when you use those services.</p>
        </section>
        <section>
          <h2>Your choices and rights</h2>
          <p>You may ask to access, correct or delete your personal information, object to or restrict certain processing, withdraw consent, or raise a concern with an applicable data-protection authority. Use {siteConfig.email} for privacy requests.</p>
        </section>
        <section>
          <h2>Analytics and local storage</h2>
          <p>Optional analytics load only after you accept them. Your choice is stored in your browser so the website can remember it. You can clear your browser’s site data to reset that choice.</p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>We may update this policy as our services or legal obligations change. The date above identifies the latest version.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
