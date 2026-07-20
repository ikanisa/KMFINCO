import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the KM FINCO homepage and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>KM FINCO \| Clarity for what comes next<\/title>/i);
  assert.match(
    html,
    /property="og:image" content="https:\/\/km-finco-advisory-2026\.bosco560038\.chatgpt\.site\/og\.jpg"/i,
  );
  assert.match(html, /Clarity for what comes next\./);
  assert.match(html, /Audit &amp; Assurance/);
  assert.match(html, /Management Consulting/);
  assert.match(html, /Internal audit &amp; controls/);
  assert.match(html, /src="\/advisory-team\.webp"/);
});

test("server-renders dedicated service and contact routes", async () => {
  const [auditResponse, consultingResponse, contactResponse] = await Promise.all([
    render("/services/audit-assurance"),
    render("/services/management-consulting"),
    render("/contact"),
  ]);

  assert.equal(auditResponse.status, 200);
  assert.equal(consultingResponse.status, 200);
  assert.equal(contactResponse.status, 200);

  const [audit, consulting, contact] = await Promise.all([
    auditResponse.text(),
    consultingResponse.text(),
    contactResponse.text(),
  ]);

  assert.match(audit, /Confidence built on clear evidence\./);
  assert.match(audit, /src="\/audit-assurance\.webp"/);
  assert.match(consulting, /Turn complexity into practical progress\./);
  assert.match(consulting, /Risk management/);
  assert.match(consulting, /Internal controls/);
  assert.match(contact, /What would you like to make clearer\?/);
  assert.match(contact, /src="\/contact-conversation\.webp"/);
});

test("every content section renders a distinct relevant image", async () => {
  const routeExpectations = [
    ["/", 8, ["home-capabilities-v2.webp", "home-expertise-v2.webp", "home-consulting-v2.webp", "home-audience-v2.webp", "home-approach-v2.webp", "home-insights-v2.webp", "home-contact-v2.webp"]],
    ["/services", 7, ["services-overview-hero-v2.webp", "services-cta-v2.webp"]],
    ["/services/audit-assurance", 5, ["audit-intro-v2.webp", "audit-offerings-v2.webp", "audit-outcomes-v2.webp", "audit-cta-v2.webp"]],
    ["/services/management-consulting", 5, ["consulting-intro-v2.webp", "consulting-offerings-v2.webp", "consulting-outcomes-v2.webp", "consulting-cta-v2.webp"]],
    ["/services/tax-accounting-payroll", 5, ["tax-intro-v2.webp", "tax-offerings-v2.webp", "tax-outcomes-v2.webp", "tax-cta-v2.webp"]],
    ["/services/corporate-fiduciary", 5, ["corporate-intro-v2.webp", "corporate-offerings-v2.webp", "corporate-outcomes-v2.webp", "corporate-cta-v2.webp"]],
    ["/services/investment-family-office", 5, ["investment-intro-v2.webp", "investment-offerings-v2.webp", "investment-outcomes-v2.webp", "investment-cta-v2.webp"]],
    ["/about", 3, ["about-principles-v2.webp", "about-story-v2.webp"]],
    ["/insights", 6, ["insights-risk-v2.webp", "insights-controls-v2.webp", "insights-strategy-v2.webp", "insights-tax-v2.webp", "insights-family-v2.webp"]],
    ["/contact", 1, ["contact-conversation.webp"]],
  ];

  for (const [pathname, minimumUniqueImages, requiredNames] of routeExpectations) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render`);
    const html = await response.text();
    const imageSources = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
    assert.ok(new Set(imageSources).size >= minimumUniqueImages, `${pathname} should have ${minimumUniqueImages} unique images`);
    for (const name of requiredNames) assert.ok(imageSources.some((src) => src.endsWith(name)), `${pathname} should render ${name}`);
  }
});

test("renders production SEO signals", async () => {
  const [homeResponse, consultingResponse, sitemapResponse, robotsResponse] = await Promise.all([
    render("/"),
    render("/services/management-consulting"),
    render("/sitemap.xml"),
    render("/robots.txt"),
  ]);

  const home = await homeResponse.text();
  const consulting = await consultingResponse.text();
  const sitemap = await sitemapResponse.text();
  const robots = await robotsResponse.text();

  assert.match(home, /rel="canonical" href="https:\/\/km-finco-advisory-2026\.bosco560038\.chatgpt\.site\/"/i);
  assert.match(home, /"@type":\["Organization","ProfessionalService"\]/);
  assert.match(consulting, /Management consulting for strategy, transformation, internal audit, risk management/i);
  assert.match(consulting, /rel="canonical" href="https:\/\/km-finco-advisory-2026\.bosco560038\.chatgpt\.site\/services\/management-consulting"/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /<loc>https:\/\/km-finco-advisory-2026\.bosco560038\.chatgpt\.site\/services\/audit-assurance<\/loc>/);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap: https:\/\/km-finco-advisory-2026\.bosco560038\.chatgpt\.site\/sitemap\.xml/);
});
