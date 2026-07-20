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
