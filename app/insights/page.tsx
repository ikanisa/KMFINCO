import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on assurance, management consulting, risk, tax, governance and investment." };

const articles = [
  { category: "Risk & governance", title: "Building an internal audit plan that stays relevant as risk changes", summary: "A practical way to connect assurance coverage with the decisions and uncertainties that matter now.", image: "/management-consulting.webp", tone: "violet" },
  { category: "Audit & assurance", title: "What stronger controls can reveal about performance—not only compliance", summary: "Why control conversations can create a clearer view of information, accountability and operational discipline.", image: "/audit-assurance.webp", tone: "blue" },
  { category: "Management consulting", title: "From strategy to execution without adding unnecessary complexity", summary: "How leaders can translate strategic intent into a practical operating rhythm that teams can sustain.", image: "/about-team.webp", tone: "green" },
  { category: "Tax & reporting", title: "Creating a more connected tax and finance calendar", summary: "A joined-up approach to obligations, reporting inputs and review can reduce surprises and improve visibility.", image: "/tax-accounting-payroll.webp", tone: "orange" },
  { category: "Family office", title: "Bringing governance into long-term family wealth decisions", summary: "Clear roles and decision processes can help families connect capital with purpose across generations.", image: "/investment-family-office.webp", tone: "rose" },
];

export default function InsightsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="index-hero image-index-hero insights-hero">
        <div><p className="eyebrow">Perspectives</p><h1>Useful thinking for consequential decisions.</h1><p>Clear, practical perspectives from across assurance, consulting, risk, tax, governance and investment.</p></div>
        <img src="/insights-hero.webp" alt="Advisers reviewing research and discussing an emerging idea" />
      </section>
      <section className="article-grid section-shell">
        {articles.map((article) => (
          <article className={`article-card accent-${article.tone}`} key={article.title}>
            <img src={article.image} alt="" />
            <div><span>{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><Link href="/contact">Discuss this topic</Link></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
