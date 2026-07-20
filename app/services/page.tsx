import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Connected audit, assurance, management consulting, tax, corporate and investment expertise.",
};

const services = [
  { title: "Audit & Assurance", slug: "audit-assurance", image: "/audit-assurance.webp", copy: "Independent perspective that strengthens confidence in reporting, controls and governance.", tone: "blue" },
  { title: "Management Consulting", slug: "management-consulting", image: "/management-consulting.webp", copy: "Practical strategy, internal audit, risk and transformation support for stronger organisations.", tone: "violet" },
  { title: "Tax, Accounting & Payroll", slug: "tax-accounting-payroll", image: "/tax-accounting-payroll.webp", copy: "Clear, connected support for reporting, compliance and day-to-day financial confidence.", tone: "orange" },
  { title: "Corporate & Fiduciary", slug: "corporate-fiduciary", image: "/corporate-fiduciary.webp", copy: "Thoughtful structures and dependable administration across the business lifecycle.", tone: "green" },
  { title: "Investment & Family Office", slug: "investment-family-office", image: "/investment-family-office.webp", copy: "Long-term thinking for capital, governance and the priorities that matter most.", tone: "rose" },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="index-hero">
        <p className="eyebrow">Connected expertise</p>
        <h1>One relationship.<br />More of the picture.</h1>
        <p>Our assurance, consulting and financial specialists work as one team—so advice stays connected to the decisions, risks and opportunities around it.</p>
      </section>
      <section className="service-index-grid section-shell" aria-label="Our services">
        {services.map((service, index) => (
          <Link className={`service-index-card accent-${service.tone}`} href={`/services/${service.slug}`} key={service.slug}>
            <img src={service.image} alt="" />
            <div>
              <span>0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
              <strong>Explore service</strong>
            </div>
          </Link>
        ))}
      </section>
      <section className="subpage-cta section-shell">
        <p className="section-index">Not sure where to start?</p>
        <h2>Tell us what is changing.</h2>
        <p>We’ll bring the right mix of expertise around your priorities.</p>
        <Link className="primary-button" href="/contact">Start a conversation</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
