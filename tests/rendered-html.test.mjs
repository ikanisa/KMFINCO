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

async function post(pathname, payload, bindings = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}-post`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json" },
      body: JSON.stringify(payload),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) }, ...bindings },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function postRepeated(pathname, payload, count, headers = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}-repeated`);
  const { default: worker } = await import(workerUrl.href);
  const responses = [];
  for (let index = 0; index < count; index += 1) {
    responses.push(await worker.fetch(
      new Request(`http://localhost${pathname}`, {
        method: "POST",
        headers: { accept: "application/json", "content-type": "application/json", ...headers },
        body: JSON.stringify(payload),
      }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    ));
  }
  return responses;
}

test("server-renders the KM FINCO homepage and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
  assert.match(html, /<title>KM FINCO \| Clarity for what comes next<\/title>/i);
  assert.match(
    html,
    /property="og:image" content="https:\/\/kmfinco\.com\/og\.jpg"/i,
  );
  assert.match(html, /Clarity for what comes next\./);
  assert.match(html, /Audit &amp; Assurance/);
  assert.match(html, /Management Consulting/);
  assert.match(html, /Internal audit &amp; controls/);
  assert.match(html, /src="\/advisory-team\.webp"/);
  assert.match(html, /href="\/book"[^>]*>Book a Meeting</i);
  assert.match(html, /href="#main-content">Skip to main content/i);
  assert.match(html, /One team around the whole decision/i);
  assert.match(html, /Image slider controls/i);
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
    ["/book", 0, []],
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

  assert.match(home, /rel="canonical" href="https:\/\/kmfinco\.com\/"/i);
  assert.match(home, /"@type":\["Organization","ProfessionalService"\]/);
  assert.match(consulting, /Management consulting for strategy, transformation, internal audit, risk management/i);
  assert.match(consulting, /rel="canonical" href="https:\/\/kmfinco\.com\/services\/management-consulting"/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /<loc>https:\/\/kmfinco\.com\/services\/audit-assurance<\/loc>/);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap: https:\/\/kmfinco\.com\/sitemap\.xml/);
});

test("renders launch contact, privacy and not-found requirements", async () => {
  const [contactResponse, bookingResponse, privacyResponse, notFoundResponse] = await Promise.all([
    render("/contact"),
    render("/book"),
    render("/privacy"),
    render("/this-page-does-not-exist"),
  ]);

  const [contact, booking, privacy, notFound] = await Promise.all([
    contactResponse.text(),
    bookingResponse.text(),
    privacyResponse.text(),
    notFoundResponse.text(),
  ]);

  assert.equal(contactResponse.status, 200);
  assert.match(contact, /hello@kmfinco\.com/i);
  assert.doesNotMatch(contact, /mailto:/i);
  assert.doesNotMatch(contact, /Open email draft|Prepare another email/i);
  assert.match(contact, /tel:\+35679428604/i);
  assert.match(contact, /wa\.me\/35679428604/i);
  assert.match(contact, /Google Calendar/i);
  assert.match(contact, /Book a Meeting/i);

  assert.equal(bookingResponse.status, 200);
  assert.match(booking, /Choose a time to make the next decision clearer/i);
  assert.match(booking, /Book a Meeting/);
  assert.match(booking, /Google Meet created on confirmation/i);

  assert.equal(privacyResponse.status, 200);
  assert.match(privacy, /Information we collect/i);
  assert.match(privacy, /Your choices and rights/i);

  assert.equal(notFoundResponse.status, 404);
  assert.match(notFound, /Page not found/i);
  assert.match(notFound, /Return home/i);
});

test("first-party booking API validates input and fails safely without credentials", async () => {
  const bookingInvalid = await post("/api/book", { name: "", email: "not-an-email", start: "invalid", duration: 30, privacy_consent: false });
  assert.equal(bookingInvalid.status, 400);

  const future = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
  const bookingUnconfigured = await post("/api/book", { name: "Test Client", email: "test@example.com", start: future, duration: 30, timezone: "Europe/Malta", privacy_consent: "agreed" });
  assert.equal(bookingUnconfigured.status, 503);
  assert.deepEqual(await bookingUnconfigured.json(), { error: "booking_not_configured" });

  const invalidWithoutOrigin = await post("/api/book", { name: "Test", email: "test@example.com" }, {});
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-origin`);
  const { default: worker } = await import(workerUrl.href);
  const rejectedOrigin = await worker.fetch(
    new Request("http://localhost/api/book", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://example.net" },
      body: JSON.stringify({ name: "Test", email: "test@example.com" }),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(invalidWithoutOrigin.status, 400);
  assert.equal(rejectedOrigin.status, 403);
  assert.deepEqual(await rejectedOrigin.json(), { error: "origin_not_allowed" });

  const repeated = await postRepeated(
    "/api/book",
    { name: "", email: "not-an-email", start: "invalid", duration: 30, privacy_consent: false },
    7,
    { "cf-connecting-ip": "203.0.113.44" },
  );
  assert.equal(repeated.at(-1).status, 429);
  assert.equal(repeated.at(-1).headers.get("retry-after"), "600");
});

test("booking API creates conflict-checked Google Meet events", async () => {
  const originalFetch = globalThis.fetch;
  const requests = [];
  globalThis.fetch = async (input, init = {}) => {
    const url = String(input);
    requests.push({ url, body: init.body ? String(init.body) : "" });
    if (url === "https://oauth2.googleapis.com/token") return Response.json({ access_token: "test_token" });
    if (url === "https://www.googleapis.com/calendar/v3/freeBusy") {
      return Response.json({ calendars: { primary: { busy: [] } } });
    }
    if (url.includes("/calendar/v3/calendars/primary/events")) {
      return Response.json({ id: "event_123", htmlLink: "https://calendar.google.com/event?eid=test", hangoutLink: "https://meet.google.com/abc-defg-hij" });
    }
    return new Response("Unexpected external request", { status: 500 });
  };

  try {
    const future = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString();
    const bookingResponse = await post(
      "/api/book",
      { name: "Test Client", email: "test@example.com", organisation: "Example Ltd", context: "Strategy discussion", start: future, duration: 30, timezone: "Europe/Malta", privacy_consent: "agreed" },
      { GOOGLE_CALENDAR_CLIENT_ID: "client", GOOGLE_CALENDAR_CLIENT_SECRET: "secret", GOOGLE_CALENDAR_REFRESH_TOKEN: "refresh", GOOGLE_CALENDAR_ID: "primary", GOOGLE_CALENDAR_TIMEZONE: "Europe/Malta" },
    );
    assert.equal(bookingResponse.status, 200);
    assert.deepEqual(await bookingResponse.json(), {
      ok: true,
      eventId: "event_123",
      calendarUrl: "https://calendar.google.com/event?eid=test",
      meetUrl: "https://meet.google.com/abc-defg-hij",
    });

    assert.ok(requests.some(({ url }) => url.endsWith("/freeBusy")), "booking should check free/busy before creating an event");
    const createEvent = requests.find(({ url }) => url.includes("/events?conferenceDataVersion=1"));
    assert.ok(createEvent, "booking should create a Calendar event with conference data enabled");
    assert.match(createEvent.url, /sendUpdates=all/);
    assert.match(createEvent.body, /hangoutsMeet/);
    assert.match(createEvent.body, /test@example\.com/);
    assert.match(createEvent.body, /bosco@ikanisa\.com/);
    assert.match(createEvent.body, /kmifsud@kmconsultants\.com\.mt/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
