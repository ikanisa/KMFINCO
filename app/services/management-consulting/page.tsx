import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = { title: "Management Consulting", description: "Strategy, internal audit, risk, controls and transformation support for stronger organisations." };

export default function ManagementConsultingPage() {
  return <ServicePage
    eyebrow="Management Consulting"
    title="Turn complexity into practical progress."
    lede="Senior support for strategy, transformation, internal audit, risk management, controls and operational improvement."
    image="/management-consulting.webp"
    imageAlt="Management consultants and executives discussing strategy and risk"
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
