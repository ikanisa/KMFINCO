import Link from "next/link";
import { Buildings } from "@phosphor-icons/react/dist/ssr/Buildings";
import { Calculator } from "@phosphor-icons/react/dist/ssr/Calculator";
import { ChartBar } from "@phosphor-icons/react/dist/ssr/ChartBar";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { Checks } from "@phosphor-icons/react/dist/ssr/Checks";
import { ClipboardText } from "@phosphor-icons/react/dist/ssr/ClipboardText";
import { Compass } from "@phosphor-icons/react/dist/ssr/Compass";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import { FolderSimple } from "@phosphor-icons/react/dist/ssr/FolderSimple";
import { Gauge } from "@phosphor-icons/react/dist/ssr/Gauge";
import { HandHeart } from "@phosphor-icons/react/dist/ssr/HandHeart";
import { HouseLine } from "@phosphor-icons/react/dist/ssr/HouseLine";
import { ListChecks } from "@phosphor-icons/react/dist/ssr/ListChecks";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { Notebook } from "@phosphor-icons/react/dist/ssr/Notebook";
import { Percent } from "@phosphor-icons/react/dist/ssr/Percent";
import { Scales } from "@phosphor-icons/react/dist/ssr/Scales";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { ShieldWarning } from "@phosphor-icons/react/dist/ssr/ShieldWarning";
import { SlidersHorizontal } from "@phosphor-icons/react/dist/ssr/SlidersHorizontal";
import { TreeStructure } from "@phosphor-icons/react/dist/ssr/TreeStructure";
import { UsersThree } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { SectionVisual } from "./SectionVisual";
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
  sectionImages: {
    intro: { src: string; alt: string };
    offerings: { src: string; alt: string };
    outcomes: { src: string; alt: string };
    cta: { src: string; alt: string };
  };
};

function iconForService(title: string) {
  const service = title.toLowerCase();

  if (service.includes("external audit") || service === "internal audit") return MagnifyingGlass;
  if (service.includes("financial statement") || service.includes("financial reporting")) return FileText;
  if (service.includes("agreed-upon")) return ListChecks;
  if (service.includes("other assurance")) return ShieldCheck;
  if (service.includes("controls assurance")) return SlidersHorizontal;
  if (service.includes("company formation")) return Buildings;
  if (service.includes("corporate administration")) return FolderSimple;
  if (service.includes("secretarial")) return Notebook;
  if (service.includes("governance & compliance") || service === "governance support") return Scales;
  if (service.includes("fiduciary")) return HandHeart;
  if (service.includes("investment advisory")) return ChartLineUp;
  if (service.includes("family-office")) return HouseLine;
  if (service.includes("family governance")) return UsersThree;
  if (service.includes("financial planning")) return Calculator;
  if (service.includes("wealth structuring")) return TreeStructure;
  if (service.includes("strategy")) return Compass;
  if (service.includes("risk management")) return ShieldWarning;
  if (service.includes("internal controls")) return Checks;
  if (service.includes("performance improvement")) return Gauge;
  if (service.includes("tax advisory")) return Percent;
  if (service.includes("tax compliance")) return ClipboardText;
  if (service === "accounting") return Calculator;
  if (service === "payroll") return ChartBar;
  return ShieldCheck;
}

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
          {services.map((service) => {
            const ServiceIcon = iconForService(service.title);
            return (
              <article key={service.title}>
                <span className="item-icon service-offering-icon" aria-hidden="true"><ServiceIcon size={21} weight="regular" /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
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
          <Link className="primary-button" href="/contact">Talk to an adviser</Link>
        </div>
        <SectionVisual src={sectionImages.cta.src} alt={sectionImages.cta.alt} className="subpage-cta-visual" />
      </section>
      <SiteFooter />
    </main>
  );
}
