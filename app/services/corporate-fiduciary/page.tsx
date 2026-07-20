import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = { title: "Corporate & Fiduciary", description: "Corporate administration, governance and fiduciary support across the business lifecycle." };

export default function CorporateFiduciaryPage() {
  return <ServicePage
    eyebrow="Corporate & Fiduciary"
    title="Structures that support where you are going."
    lede="Thoughtful corporate, governance and fiduciary support—from formation and administration through change and succession."
    image="/corporate-fiduciary.webp"
    imageAlt="Corporate adviser and business owner reviewing governance documents"
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
