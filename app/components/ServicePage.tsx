import { SectionVisual } from "./SectionVisual";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { PrimaryCta } from "./PrimaryCta";

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
  sectionImages: {
    intro: { src: string; alt: string };
    offerings: { src: string; alt: string };
    outcomes: { src: string; alt: string };
    cta: { src: string; alt: string };
  };
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
  sectionImages,
}: ServicePageProps) {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className={`subpage-hero accent-${accent}`}>
        <div className="subpage-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lede}</p>
          <PrimaryCta className="primary-button" />
        </div>
        <div className="subpage-image-wrap">
          <img src={image} alt={imageAlt} className="subpage-image" width="1600" height="1000" loading="eager" fetchPriority="high" decoding="async" />
        </div>
      </section>

      <section className="service-intro section-shell">
        <div className="service-intro-copy">
          <p className="section-index">What we bring</p>
          <h2>{introduction}</h2>
        </div>
        <SectionVisual src={sectionImages.intro.src} alt={sectionImages.intro.alt} className="service-intro-visual" />
      </section>

      <section className="service-offerings-shell section-shell" aria-label={`${title} services`}>
        <SectionVisual src={sectionImages.offerings.src} alt={sectionImages.offerings.alt} className="service-offerings-visual" />
        <div className="service-offerings">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`service-outcomes section-shell accent-${accent}`}>
        <div>
          <p className="section-index">Built around the outcome</p>
          <h2>Clearer decisions. Stronger foundations.</h2>
        </div>
        <ul>
          {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
        </ul>
        <SectionVisual src={sectionImages.outcomes.src} alt={sectionImages.outcomes.alt} className="service-outcomes-visual" />
      </section>

      <section className="subpage-cta section-shell">
        <div className="subpage-cta-copy">
          <p className="section-index">Book a Meeting</p>
          <h2>Bring us the decision in front of you.</h2>
          <p>We’ll connect the right expertise and help make the next step clearer.</p>
          <PrimaryCta className="primary-button" />
        </div>
        <SectionVisual src={sectionImages.cta.src} alt={sectionImages.cta.alt} className="subpage-cta-visual" />
      </section>
      <SiteFooter />
    </main>
  );
}
