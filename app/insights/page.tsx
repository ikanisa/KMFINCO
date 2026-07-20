import { pageMetadata } from "../../lib/seo";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PrimaryCta } from "../components/PrimaryCta";

export const metadata = pageMetadata({ title: "Insights", description: "Practical perspectives on assurance, management consulting, risk, tax, governance and investment.", path: "/insights" });

const articles = [
  { category: "Risk & governance", title: "Building an internal audit plan that stays relevant as risk changes", summary: "A practical way to connect assurance coverage with the decisions and uncertainties that matter now.", image: "/insights-risk-v2.webp", imageAlt: "Risk leaders mapping a responsive internal audit plan", tone: "violet" },
  { category: "Audit & assurance", title: "What stronger controls can reveal about performance—not only compliance", summary: "Why control conversations can create a clearer view of information, accountability and operational discipline.", image: "/insights-controls-v2.webp", imageAlt: "Finance and operations leaders using control evidence to understand performance", tone: "blue" },
  { category: "Management consulting", title: "From strategy to execution without adding unnecessary complexity", summary: "How leaders can translate strategic intent into a practical operating rhythm that teams can sustain.", image: "/insights-strategy-v2.webp", imageAlt: "Leadership team turning strategic intent into a focused delivery rhythm", tone: "green" },
  { category: "Tax & reporting", title: "Creating a more connected tax and finance calendar", summary: "A joined-up approach to obligations, reporting inputs and review can reduce surprises and improve visibility.", image: "/insights-tax-v2.webp", imageAlt: "Tax and finance specialists coordinating reporting deadlines and information", tone: "orange" },
  { category: "Family office", title: "Bringing governance into long-term family wealth decisions", summary: "Clear roles and decision processes can help families connect capital with purpose across generations.", image: "/insights-family-v2.webp", imageAlt: "Family members and an adviser discussing long-term wealth governance", tone: "rose" },
];

export default function InsightsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className="index-hero image-index-hero insights-hero">
        <div><p className="eyebrow">Perspectives</p><h1>Useful thinking for consequential decisions.</h1><p>Clear, practical perspectives from across assurance, consulting, risk, tax, governance and investment.</p></div>
        <img src="/insights-hero.webp" alt="Advisers reviewing research and discussing an emerging idea" width="1600" height="1000" loading="eager" fetchPriority="high" decoding="async" />
      </section>
      <section className="article-grid section-shell">
        {articles.map((article) => (
          <article className={`article-card accent-${article.tone}`} key={article.title}>
            <img src={article.image} alt={article.imageAlt} width="1536" height="1024" loading="lazy" decoding="async" />
            <div><span>{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><PrimaryCta /></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
