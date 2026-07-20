import { pageMetadata } from "../../../lib/seo";
import { ServicePage } from "../../components/ServicePage";

export const metadata = pageMetadata({ title: "Investment & Family Office", description: "Investment advisory, family-office support, family governance, financial planning and wealth structuring for long-term priorities.", path: "/services/investment-family-office" });

export default function InvestmentFamilyOfficePage() {
  return <ServicePage
    eyebrow="Investment & Family Office"
    title="Long-term thinking, personally aligned."
    lede="Connected support for investment decisions, family governance, financial planning and the stewardship of wealth across generations."
    image="/investment-family-office.webp"
    imageAlt="Investment adviser in a long-term planning discussion with clients"
    sectionImages={{
      intro: { src: "/investment-intro-v2.webp", alt: "Family and investment adviser considering long-term priorities together" },
      offerings: { src: "/investment-offerings-v2.webp", alt: "Investment team reviewing asset allocation, liquidity and governance materials" },
      outcomes: { src: "/investment-outcomes-v2.webp", alt: "Multi-generational family reviewing a clear long-term stewardship plan" },
      cta: { src: "/investment-cta-v2.webp", alt: "Family-office adviser listening carefully during a private planning conversation" },
    }}
    introduction="Capital decisions are rarely only financial. We help connect investments, governance and family priorities into one clearer view."
    accent="rose"
    services={[
      { title: "Investment advisory", description: "Disciplined advice aligned with objectives, time horizon, liquidity needs and risk appetite." },
      { title: "Family-office support", description: "Coordinated financial and administrative support across the priorities of a family or ownership group." },
      { title: "Family governance", description: "Practical frameworks for decision-making, communication, roles and stewardship across generations." },
      { title: "Financial planning", description: "An integrated view of cash flow, capital requirements and long-term personal or family objectives." },
      { title: "Wealth structuring", description: "Careful coordination of legal, tax, governance and investment considerations around long-term intent." },
    ]}
    outcomes={["A clearer view of the whole picture", "Decisions aligned with long-term priorities", "Stronger family governance", "More coordinated specialist support"]}
  />;
}
