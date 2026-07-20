import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  introduction: string;
  services: Array<{ title: string; description: string }>;
  outcomes: string[];
  accent: "green" | "violet" | "orange" | "rose" | "blue";
};

export function ServicePage({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  introduction,
  services,
  outcomes,
  accent,
}: ServicePageProps) {
  return (
    <main>
      <SiteHeader />
      <section className={`subpage-hero accent-${accent}`}>
        <div className="subpage-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lede}</p>
          <Link className="primary-button" href="/contact">Discuss your priorities</Link>
        </div>
        <div className="subpage-image-wrap">
          <img src={image} alt={imageAlt} className="subpage-image" />
        </div>
      </section>

      <section className="service-intro section-shell">
        <p className="section-index">What we bring</p>
        <h2>{introduction}</h2>
      </section>

      <section className="service-offerings section-shell" aria-label={`${title} services`}>
        {services.map((service, index) => (
          <article key={service.title}>
            <span>0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className={`service-outcomes section-shell accent-${accent}`}>
        <div>
          <p className="section-index">Built around the outcome</p>
          <h2>Clearer decisions. Stronger foundations.</h2>
        </div>
        <ul>
          {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
        </ul>
      </section>

      <section className="subpage-cta section-shell">
        <p className="section-index">Start a conversation</p>
        <h2>Bring us the decision in front of you.</h2>
        <p>We’ll connect the right expertise and help make the next step clearer.</p>
        <Link className="primary-button" href="/contact">Talk to an adviser</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
