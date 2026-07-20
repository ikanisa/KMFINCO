import { pageMetadata } from "../../../lib/seo";
import { ServicePage } from "../../components/ServicePage";

export const metadata = pageMetadata({ title: "Management Consulting", description: "Management consulting for strategy, transformation, internal audit, risk management, internal controls, governance and performance improvement.", path: "/services/management-consulting" });

export default function ManagementConsultingPage() {
  return <ServicePage
    eyebrow="Management Consulting"
    title="Turn complexity into practical progress."
    lede="Senior support for strategy, transformation, internal audit, risk management, controls and operational improvement."
    image="/management-consulting.webp"
    imageAlt="Management consultants and executives discussing strategy and risk"
    sectionImages={{
      intro: { src: "/consulting-intro-v2.webp", alt: "Leadership team mapping strategic priorities with a senior consultant" },
      offerings: { src: "/consulting-offerings-v2.webp", alt: "Consultants facilitating a risk, controls and transformation working session" },
      outcomes: { src: "/consulting-outcomes-v2.webp", alt: "Executive team reviewing an improved operating model and delivery plan" },
      cta: { src: "/consulting-cta-v2.webp", alt: "Senior consultant in a focused one-to-one discussion with a business leader" },
    }}
    introduction="We connect strategic ambition with the governance, controls and operating discipline needed to deliver it."
    accent="violet"
    services={[
      { title: "Strategy & transformation", description: "Clear strategic choices, practical operating models and focused support from intent through delivery." },
      { title: "Internal audit", description: "Risk-based internal audit plans and reviews that provide useful assurance and insight to leadership." },
      { title: "Risk management", description: "Proportionate frameworks, risk appetite and reporting that connect risk to real business decisions." },
      { title: "Internal controls", description: "Control design, documentation, testing and remediation that strengthen accountability and performance." },
      { title: "Governance & compliance", description: "Governance arrangements and compliance programmes aligned with obligations and organisational reality." },
      { title: "Performance improvement", description: "Process, information and accountability improvements that help teams operate with greater clarity." },
    ]}
    outcomes={["Sharper priorities and decisions", "Stronger risk and control visibility", "More practical governance", "Change that teams can sustain"]}
  />;
}
