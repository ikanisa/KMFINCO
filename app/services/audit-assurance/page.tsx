import { pageMetadata } from "../../../lib/seo";
import { ServicePage } from "../../components/ServicePage";

export const metadata = pageMetadata({ title: "Audit & Assurance", description: "Independent audit and assurance services that strengthen confidence in financial reporting, internal controls and governance.", path: "/services/audit-assurance" });

export default function AuditAssurancePage() {
  return <ServicePage
    eyebrow="Audit & Assurance"
    title="Confidence built on clear evidence."
    lede="Independent, senior-led assurance that helps stakeholders trust the numbers—and helps leadership see what can be stronger."
    image="/audit-assurance.webp"
    imageAlt="Audit professionals reviewing financial and control documentation"
    sectionImages={{
      intro: { src: "/audit-intro-v2.webp", alt: "Audit partner preparing a focused assurance plan from financial records" },
      offerings: { src: "/audit-offerings-v2.webp", alt: "Assurance specialists examining controls, reconciliations and supporting evidence" },
      outcomes: { src: "/audit-outcomes-v2.webp", alt: "Board members reviewing a clear assurance conclusion with their adviser" },
      cta: { src: "/audit-cta-v2.webp", alt: "Senior audit adviser listening to a finance leader after a review" },
    }}
    introduction="Assurance should do more than confirm the past. It should strengthen the foundations for what comes next."
    accent="blue"
    services={[
      { title: "External audit", description: "A focused, well-managed audit approach centred on risk, evidence and clear communication." },
      { title: "Financial statement assurance", description: "Independent assurance over financial reporting for boards, investors and other stakeholders." },
      { title: "Other assurance", description: "Targeted assurance engagements shaped around specific reporting, governance or stakeholder needs." },
      { title: "Agreed-upon procedures", description: "Precisely scoped procedures and factual findings for clearly defined decisions or requirements." },
      { title: "Controls assurance", description: "Assessment of financial reporting processes and controls, with practical observations for improvement." },
    ]}
    outcomes={["Greater confidence in reporting", "Clearer communication with stakeholders", "Earlier visibility of control weaknesses", "A proportionate, well-coordinated process"]}
  />;
}
