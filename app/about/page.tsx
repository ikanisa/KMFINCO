import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "About", description: "A senior-led multidisciplinary advisory firm built around clarity, connection and practical progress." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero accent-green">
        <div className="subpage-copy">
          <p className="eyebrow">About KM FINCO</p>
          <h1>Close enough to understand. Experienced enough to challenge.</h1>
          <p>We bring assurance, consulting and financial expertise together around the decisions that shape organisations, investments and families.</p>
          <Link className="primary-button" href="/contact">Meet the right adviser</Link>
        </div>
        <div className="subpage-image-wrap"><img src="/about-team.webp" alt="A multidisciplinary team of senior advisers in discussion" className="subpage-image" /></div>
      </section>

      <section className="about-principles section-shell">
        <p className="section-index">What defines us</p>
        <h2>Senior attention. Connected expertise. Straightforward advice.</h2>
        <div className="principle-grid">
          <article><span>01</span><h3>Start with context</h3><p>We take time to understand the organisation, the people and the decision—not only the immediate task.</p></article>
          <article><span>02</span><h3>Connect the disciplines</h3><p>Assurance, consulting, tax, corporate and investment perspectives stay joined around the same objective.</p></article>
          <article><span>03</span><h3>Keep progress practical</h3><p>Our work is designed to help leaders act with greater clarity, not to add another layer of complexity.</p></article>
        </div>
      </section>

      <section className="about-story section-shell">
        <div className="about-story-image"><img src="/advisory-team.webp" alt="Senior advisers collaborating around a client brief" /></div>
        <div><p className="section-index">One firm, broader perspective</p><h2>Built for decisions that cross boundaries.</h2><p>Important decisions rarely fit neatly inside one service line. Reporting affects tax. Strategy changes risk. Ownership shapes governance. Investment priorities connect to family priorities. Our model keeps those perspectives together.</p><Link className="text-link" href="/services">Explore our expertise</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
