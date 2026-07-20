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

test("server-renders the KMFINCO homepage and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>KMFINCO \| Clarity for what comes next<\/title>/i);
  assert.match(
    html,
    /property="og:image" content="https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/og\.jpg"/i,
  );
  assert.match(html, /Clarity for what comes next\./);
  assert.match(html, /Audit &amp; Assurance/);
  assert.match(html, /Management Consulting/);
  assert.match(html, /Who we work with/);
  assert.doesNotMatch(html, /Who we help/);
  assert.match(html, /Many connected capabilities\./);
  assert.doesNotMatch(html, /<details[^>]+class="expertise-row"/i);
  assert.match(html, /Internal audit &amp; controls/);
  assert.match(html, /src="\/advisory-team\.webp"/);
  assert.doesNotMatch(html, />0[1-9]</, "homepage should not render decorative sequence numbers");
  assert.match(html, /class="rail-icon [^"]+"[^>]*><svg/, "homepage capability rail should render semantic icons");
});

test("uses semantic icons instead of decorative numbering across content systems", async () => {
  const routes = ["/", "/services", "/about", "/services/management-consulting", "/contact"];

  for (const pathname of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render`);
    const html = await response.text();
    assert.doesNotMatch(html, />0[1-9]</, `${pathname} should not render decorative sequence numbers`);
  }

  const [homeResponse, servicesResponse, aboutResponse, consultingResponse, contactResponse] = await Promise.all([
    render("/"),
    render("/services"),
    render("/about"),
    render("/services/management-consulting"),
    render("/contact"),
  ]);
  const [home, services, about, consulting, contact] = await Promise.all([
    homeResponse.text(),
    servicesResponse.text(),
    aboutResponse.text(),
    consultingResponse.text(),
    contactResponse.text(),
  ]);

  assert.match(home, /class="item-icon audience-icon/, "audience cards should render meaningful icons");
  assert.match(home, /class="approach-icon"[^>]*><svg/, "approach steps should render meaningful icons");
  assert.match(services, /class="item-icon service-index-icon/, "service cards should render service icons");
  assert.match(about, /class="item-icon principle-icon/, "principles should render meaningful icons");
  assert.match(consulting, /class="item-icon service-offering-icon/, "offerings should render service-specific icons");
  assert.match(contact, /class="scheduler-progress"[\s\S]*?<svg/, "booking progress should render semantic icons");
});

test("server-renders dedicated service, audience, booking and legal routes", async () => {
  const [auditResponse, consultingResponse, audienceResponse, contactResponse, privacyResponse, termsResponse] = await Promise.all([
    render("/services/audit-assurance"),
    render("/services/management-consulting"),
    render("/who-we-work-with"),
    render("/contact"),
    render("/privacy"),
    render("/terms"),
  ]);

  assert.equal(auditResponse.status, 200);
  assert.equal(consultingResponse.status, 200);
  assert.equal(audienceResponse.status, 200);
  assert.equal(contactResponse.status, 200);
  assert.equal(privacyResponse.status, 200);
  assert.equal(termsResponse.status, 200);

  const [audit, consulting, audience, contact, privacy, terms] = await Promise.all([
    auditResponse.text(),
    consultingResponse.text(),
    audienceResponse.text(),
    contactResponse.text(),
    privacyResponse.text(),
    termsResponse.text(),
  ]);

  assert.match(audit, /Confidence built on clear evidence\./);
  assert.match(audit, /src="\/audit-assurance\.webp"/);
  assert.match(consulting, /Turn complexity into practical progress\./);
  assert.match(consulting, /Risk management/);
  assert.match(consulting, /Internal controls/);
  assert.match(audience, /Advice shaped around your reality\./);
  assert.match(audience, /Businesses &amp; leadership teams/);
  assert.match(audience, /src="\/who-we-work-with-hero-v2\.webp"/);
  assert.match(contact, /Choose a time that works\./);
  assert.match(contact, /Google Meet · 45 min/);
  assert.match(contact, /src="\/contact-conversation\.webp"/);
  assert.match(privacy, /Your information, handled with care\./);
  assert.match(privacy, /src="\/privacy-policy-v2\.webp"/);
  assert.match(terms, /Clear terms for using this website\./);
  assert.match(terms, /src="\/terms-of-use-v2\.webp"/);
});

test("renders the insights hero without the removed Perspectives label", async () => {
  const response = await render("/insights");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Useful thinking for consequential decisions\./);
  assert.doesNotMatch(html, />Perspectives</);
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
    ["/who-we-work-with", 5, ["who-we-work-with-hero-v2.webp", "who-we-work-with-business-v2.webp", "who-we-work-with-investors-v2.webp", "who-we-work-with-organisations-v2.webp", "who-we-work-with-cta-v2.webp"]],
    ["/insights", 6, ["insights-risk-v2.webp", "insights-controls-v2.webp", "insights-strategy-v2.webp", "insights-tax-v2.webp", "insights-family-v2.webp"]],
    ["/contact", 1, ["contact-conversation.webp"]],
    ["/privacy", 1, ["privacy-policy-v2.webp"]],
    ["/terms", 1, ["terms-of-use-v2.webp"]],
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

  assert.match(home, /rel="canonical" href="https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/"/i);
  assert.match(home, /"@type":\["Organization","ProfessionalService"\]/);
  assert.match(consulting, /Management consulting for strategy, transformation, internal audit, risk management/i);
  assert.match(consulting, /rel="canonical" href="https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/services\/management-consulting"/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /<loc>https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/services\/audit-assurance<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/privacy<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/who-we-work-with<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/terms<\/loc>/);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap: https:\/\/kmfinco-advisory\.ikanisa\.workers\.dev\/sitemap\.xml/);
});
