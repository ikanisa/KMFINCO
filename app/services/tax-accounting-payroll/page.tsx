import { pageMetadata } from "../../../lib/seo";
import { ServicePage } from "../../components/ServicePage";

export const metadata = pageMetadata({ title: "Tax, Accounting & Payroll", description: "Connected tax advisory, compliance, accounting, financial reporting and payroll support for confident day-to-day decisions.", path: "/services/tax-accounting-payroll" });

export default function TaxAccountingPayrollPage() {
  return <ServicePage
    eyebrow="Tax, Accounting & Payroll"
    title="Financial clarity, built into the everyday."
    lede="Reliable support for tax, reporting, accounting and payroll—connected to the decisions that keep your organisation moving."
    image="/tax-accounting-payroll.webp"
    imageAlt="Finance professionals reviewing accounts, tax schedules and payroll information"
    sectionImages={{
      intro: { src: "/tax-intro-v2.webp", alt: "Finance adviser organising tax, accounting and payroll information into one clear view" },
      offerings: { src: "/tax-offerings-v2.webp", alt: "Accounting team reconciling financial records and compliance schedules" },
      outcomes: { src: "/tax-outcomes-v2.webp", alt: "Finance leader reviewing timely reporting and a clear compliance calendar" },
      cta: { src: "/tax-cta-v2.webp", alt: "Tax adviser explaining a practical financial next step to a client" },
    }}
    introduction="Good finance operations create confidence: in compliance, in reporting and in the choices leaders make every day."
    accent="orange"
    services={[
      { title: "Tax advisory", description: "Commercially grounded support for transactions, structures, growth and changing obligations." },
      { title: "Tax compliance", description: "Coordinated preparation, review and filing support with clear visibility of deadlines and positions." },
      { title: "Accounting", description: "Accurate bookkeeping, reconciliations and finance operations shaped around the needs of the organisation." },
      { title: "Financial reporting", description: "Timely management and statutory reporting that turns financial information into a useful decision tool." },
      { title: "Payroll", description: "Dependable payroll processing and related compliance support delivered with care and confidentiality." },
    ]}
    outcomes={["More reliable financial information", "Better visibility of obligations", "Fewer operational surprises", "More time for leadership to focus"]}
  />;
}
