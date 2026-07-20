import { pageMetadata } from "../../../lib/seo";
import { ServicePage } from "../../components/ServicePage";

export const metadata = pageMetadata({ title: "Corporate & Fiduciary", description: "Company formation, corporate administration, company secretarial, governance and fiduciary support across the business lifecycle.", path: "/services/corporate-fiduciary" });

export default function CorporateFiduciaryPage() {
  return <ServicePage
    eyebrow="Corporate & Fiduciary"
    title="Structures that support where you are going."
    lede="Thoughtful corporate, governance and fiduciary support—from formation and administration through change and succession."
    image="/corporate-fiduciary.webp"
    imageAlt="Corporate adviser and business owner reviewing governance documents"
    sectionImages={{
      intro: { src: "/corporate-intro-v2.webp", alt: "Corporate adviser clarifying an ownership and governance structure" },
      offerings: { src: "/corporate-offerings-v2.webp", alt: "Company secretarial team preparing board and statutory records" },
      outcomes: { src: "/corporate-outcomes-v2.webp", alt: "Directors holding an orderly governance meeting with clear responsibilities" },
      cta: { src: "/corporate-cta-v2.webp", alt: "Business owner discussing a future corporate structure with a trusted adviser" },
    }}
    introduction="The right structure should make ownership, governance and administration clearer—not more complicated."
    accent="green"
    services={[
      { title: "Company formation", description: "Practical support to establish an appropriate legal and administrative foundation." },
      { title: "Corporate administration", description: "Dependable ongoing administration, records and coordination across the corporate lifecycle." },
      { title: "Company secretarial", description: "Board and statutory support that helps governance remain organised, timely and effective." },
      { title: "Governance support", description: "Clear responsibilities, decision processes and documentation appropriate to the organisation." },
      { title: "Fiduciary services", description: "Careful, confidential support for structures requiring long-term stewardship and oversight." },
    ]}
    outcomes={["Clearer ownership and responsibilities", "Reliable corporate records", "Stronger governance discipline", "Structures aligned with long-term intent"]}
  />;
}
