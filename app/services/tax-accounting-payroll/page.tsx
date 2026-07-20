import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = { title: "Tax, Accounting & Payroll", description: "Connected tax, accounting, reporting and payroll support." };

export default function TaxAccountingPayrollPage() {
  return <ServicePage
    eyebrow="Tax, Accounting & Payroll"
    title="Financial clarity, built into the everyday."
    lede="Reliable support for tax, reporting, accounting and payroll—connected to the decisions that keep your organisation moving."
    image="/tax-accounting-payroll.webp"
    imageAlt="Finance professionals reviewing accounts, tax schedules and payroll information"
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
