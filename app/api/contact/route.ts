import { serverEnv } from "../../../lib/server-env";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organisation?: unknown;
  message?: unknown;
  privacy_consent?: unknown;
  company_website?: unknown;
};

const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

function text(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ error: "invalid_request" }, 400);
  }

  if (text(payload.company_website, 200)) return json({ ok: true });

  const name = text(payload.name, 120);
  const email = text(payload.email, 254).toLowerCase();
  const organisation = text(payload.organisation, 160);
  const message = text(payload.message, 5000);
  const consent = payload.privacy_consent === "agreed" || payload.privacy_consent === true;

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message || !consent) {
    return json({ error: "validation_failed" }, 400);
  }

  const bindings = serverEnv();
  const enquiry = { name, email, organisation, message, privacyConsent: true, source: "kmfinco.com" };

  if (bindings.CONTACT_WEBHOOK_URL) {
    const webhookResponse = await fetch(bindings.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(bindings.CONTACT_WEBHOOK_SECRET ? { Authorization: `Bearer ${bindings.CONTACT_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify(enquiry),
    });
    if (!webhookResponse.ok) return json({ error: "delivery_failed" }, 502);
    return json({ ok: true, channel: "webhook" });
  }

  if (bindings.RESEND_API_KEY && bindings.CONTACT_RECIPIENT_EMAIL && bindings.CONTACT_FROM_EMAIL) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${bindings.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: bindings.CONTACT_FROM_EMAIL,
        to: [bindings.CONTACT_RECIPIENT_EMAIL],
        reply_to: email,
        subject: `KM FINCO website enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "Not provided"}\n\n${message}`,
      }),
    });
    if (!emailResponse.ok) return json({ error: "delivery_failed" }, 502);
    return json({ ok: true, channel: "email" });
  }

  return json({ error: "contact_delivery_not_configured" }, 503);
}
