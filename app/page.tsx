import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { SectionVisual } from "./components/SectionVisual";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const capabilities = [
  {
    title: "Audit & Assurance",
    slug: "audit-assurance",
    intro: "Independent perspective that strengthens trust in reporting and controls.",
    items: [
      "External audit and financial statement assurance",
      "Other assurance and agreed-upon procedures",
      "Financial reporting and controls assurance",
    ],
    tone: "blue",
  },
  {
    title: "Management Consulting",
    slug: "management-consulting",
    intro: "Practical advice that turns complexity into clear action and stronger performance.",
    items: [
      "Strategy and transformation",
      "Internal audit and controls",
      "Risk management and regulatory compliance",
      "Governance and operational improvement",
    ],
    tone: "lilac",
  },
  {
    title: "Tax, Accounting & Payroll",
    slug: "tax-accounting-payroll",
    intro: "Clear, connected support for reporting, compliance and confident decisions.",
    items: [
      "Tax advisory and compliance",
      "Accounting and financial reporting",
      "Payroll and related compliance",
    ],
    tone: "peach",
  },
  {
    title: "Corporate & Fiduciary",
    slug: "corporate-fiduciary",
    intro: "Thoughtful structures and dependable administration across the business lifecycle.",
    items: [
      "Company formation and corporate administration",
      "Company secretarial and governance support",
      "Fiduciary and related corporate services",
    ],
    tone: "sage",
  },
  {
    title: "Investment & Family Office",
    slug: "investment-family-office",
    intro: "Long-term thinking for capital, governance and the priorities that matter most.",
    items: [
      "Investment advisory",
      "Family-office support and governance",
      "Financial planning and wealth structuring",
    ],
    tone: "sand",
  },
];

const insights = [
  {
    category: "Risk & governance",
    title: "Building an internal audit plan that stays relevant as risk changes",
  },
  {
    category: "Management consulting",
    title: "From strategy to execution: creating momentum without adding complexity",
  },
  {
    category: "Reporting & assurance",
    title: "What stronger controls can reveal about performance—not only compliance",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Strategy <span>·</span> Structure <span>·</span> Capital</p>
          <h1>Clarity for what comes next.</h1>
          <p className="hero-lede">
            Integrated audit, assurance, management consulting, corporate, tax,
            accounting and investment expertise for businesses, investors and families.
          </p>
          <Link className="primary-button" href="/contact">
            Start a conversation
          </Link>
        </div>

        <div className="hero-visual" aria-label="Advisers in a strategic discussion">
          <img
            className="hero-image"
            src="/advisory-team.webp"
            alt="Three senior advisers discussing a client brief around a table"
            width={1672}
            height={941}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <aside className="promise-card" aria-label="Our client promise">
            <p className="promise-title">A partner for today.<br />Prepared for tomorrow.</p>
            <span className="promise-rule" aria-hidden="true" />
            <ul>
              <li>Senior-led perspective</li>
              <li>Connected specialist support</li>
              <li>Clear, practical next steps</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="capability-rail" id="expertise" aria-labelledby="capability-heading">
        <div className="rail-intro">
          <p className="section-index">01 / Expertise</p>
          <h2 id="capability-heading">One advisory relationship.<br /><em>Five connected capabilities.</em></h2>
        </div>
        <div className="rail-list">
          {capabilities.map((capability, index) => {
            return (
              <Link href={`/services/${capability.slug}`} key={capability.title}>
                <span className={`rail-icon ${capability.tone}`}>0{index + 1}</span>
                <span>{capability.title}</span>
              </Link>
            );
          })}
        </div>
        <SectionVisual src="/home-capabilities-v2.webp" alt="Five connected advisory workstreams brought together around one client table" className="rail-section-visual" />
      </section>

      <section className="expertise-section section-shell" aria-labelledby="expertise-title">
        <div className="section-heading">
          <p className="section-index">Connected expertise</p>
          <h2 id="expertise-title">The right perspective, at the right moment.</h2>
          <p>Our specialists work as one team—bringing assurance, advice and execution together around the decisions that shape your organisation.</p>
        </div>
        <SectionVisual src="/home-expertise-v2.webp" alt="Assurance, tax and strategy professionals collaborating on a shared client decision" className="section-banner-visual" />
        <div className="expertise-list">
          {capabilities.map((capability, index) => {
            const id = capability.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and").replaceAll(",", "");
            return (
              <details className="expertise-row" id={id} key={capability.title} open={index === 0}>
                <summary>
                  <span className="expertise-number">0{index + 1}</span>
                  <span className={`expertise-icon ${capability.tone}`}>0{index + 1}</span>
                  <span className="expertise-name">{capability.title}</span>
                  <span className="expertise-intro">{capability.intro}</span>
                  <span className="summary-action" aria-hidden="true">+</span>
                </summary>
                <div className="expertise-detail">
                  <ul>
                    {capability.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link href={`/services/${capability.slug}`}>Explore this service</Link>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="consulting-section section-shell" aria-labelledby="consulting-title">
        <div className="consulting-copy">
          <p className="section-index">02 / Management consulting</p>
          <h2 id="consulting-title">Better decisions. Stronger organisations.</h2>
          <p>
            We help leaders see risk clearly, strengthen the way work gets done and
            move from strategy to measurable action with confidence.
          </p>
          <Link className="text-link" href="/services/management-consulting">Explore management consulting</Link>
        </div>
        <SectionVisual src="/home-consulting-v2.webp" alt="A senior consultant facilitating a risk and transformation workshop" className="consulting-visual" />
        <div className="consulting-grid">
          <div><span className="consulting-label">Controls</span><h3>Internal audit & controls</h3><p>Risk-based reviews, control design and assurance that improves how the organisation operates.</p></div>
          <div><span className="consulting-label">Change</span><h3>Strategy & transformation</h3><p>Clear choices, practical operating models and focused delivery support from intent to execution.</p></div>
          <div><span className="consulting-label">Risk</span><h3>Risk & compliance</h3><p>Proportionate frameworks that connect governance, regulatory expectations and business priorities.</p></div>
          <div><span className="consulting-label">Performance</span><h3>Performance improvement</h3><p>Sharper processes, better management information and practical change that teams can sustain.</p></div>
        </div>
      </section>

      <section className="audience-section section-shell" id="who-we-help" aria-labelledby="audience-title">
        <div className="section-heading compact">
          <p className="section-index">03 / Who we help</p>
          <h2 id="audience-title">Advice shaped around your reality.</h2>
        </div>
        <SectionVisual src="/home-audience-v2.webp" alt="Business leaders, investors and international decision-makers in a focused advisory conversation" className="section-banner-visual" />
        <div className="audience-list">
          <article><span>01</span><h3>Businesses & leadership teams</h3><p>From growing enterprises to established groups navigating change, reporting and risk.</p></article>
          <article><span>02</span><h3>Investors & families</h3><p>Connected support for capital, governance, succession and long-term financial priorities.</p></article>
          <article><span>03</span><h3>International organisations</h3><p>Local attention and multidisciplinary support for organisations operating across borders.</p></article>
        </div>
      </section>

      <section className="approach-section section-shell" id="about" aria-labelledby="approach-title">
        <div className="approach-panel">
          <p className="section-index light">04 / How we work</p>
          <h2 id="approach-title">Close enough to understand.<br />Experienced enough to challenge.</h2>
          <p>We bring the focus of a senior adviser, the range of a multidisciplinary team and a straightforward way of working.</p>
        </div>
        <div className="approach-steps">
          <div><span>01</span><h3>Listen closely</h3><p>We start with context, priorities and the decisions that genuinely matter.</p></div>
          <div><span>02</span><h3>Connect the expertise</h3><p>We assemble the right mix of assurance, consulting, tax and financial specialists.</p></div>
          <div><span>03</span><h3>Make progress practical</h3><p>We turn analysis into clear actions, accountable delivery and useful outcomes.</p></div>
        </div>
        <SectionVisual src="/home-approach-v2.webp" alt="A senior adviser listening closely before guiding a practical next step" className="approach-visual" />
      </section>

      <section className="insights-section section-shell" id="insights" aria-labelledby="insights-title">
        <div className="section-heading compact">
          <p className="section-index">05 / Insights</p>
          <h2 id="insights-title">Useful thinking for consequential decisions.</h2>
        </div>
        <SectionVisual src="/home-insights-v2.webp" alt="Advisers reviewing research, risk signals and emerging business ideas" className="section-banner-visual" />
        <div className="insight-grid">
          {insights.map((insight, index) => (
            <Link href="/insights" key={insight.title} className={`insight-card insight-${index + 1}`}>
              <span>{insight.category}</span>
              <h3>{insight.title}</h3>
              <span className="read-more">Read perspective</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-index light">Start a conversation</p>
          <h2 id="contact-title">What would you like to make clearer?</h2>
          <p>Share a little about the decision, challenge or opportunity in front of you. We’ll connect you with the right specialist.</p>
          <SectionVisual src="/home-contact-v2.webp" alt="A calm first conversation between a senior adviser and a prospective client" className="contact-section-visual" />
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
