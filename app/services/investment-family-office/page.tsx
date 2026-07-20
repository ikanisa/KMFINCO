import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

export const metadata: Metadata = { title: "Investment & Family Office", description: "Investment, governance and family-office support for long-term priorities." };

export default function InvestmentFamilyOfficePage() {
  return <ServicePage
    eyebrow="Investment & Family Office"
    title="Long-term thinking, personally aligned."
    lede="Connected support for investment decisions, family governance, financial planning and the stewardship of wealth across generations."
    image="/investment-family-office.webp"
    imageAlt="Investment adviser in a long-term planning discussion with clients"
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
