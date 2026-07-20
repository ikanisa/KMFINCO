"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { trackConversion } from "../../lib/analytics";
import { siteConfig } from "../../lib/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "prepared">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    if (values.get("company_website")) return;

    const subject = encodeURIComponent(`Website enquiry from ${String(values.get("name") || "a prospective client")}`);
    const body = encodeURIComponent(
      `Name: ${String(values.get("name") || "")}\nEmail: ${String(values.get("email") || "")}\nOrganisation: ${String(values.get("organisation") || "")}\n\nHow can we help?\n${String(values.get("message") || "")}`,
    );
    trackConversion("contact_form_submit");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("prepared");
  }

  if (status === "prepared") {
    return (
      <div className="form-success" role="status">
        <h3>Your email draft is ready.</h3>
        <p>Please review and send it from your email app to complete your enquiry. This website does not transmit or store the form itself.</p>
        <button type="button" onClick={() => setStatus("idle")}>Prepare another email</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="company_website" value="" readOnly />
      <div className="field-row">
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
      </div>
      <label>Organisation<input name="organisation" autoComplete="organization" /></label>
      <label>How can we help?<textarea name="message" rows={4} required /></label>
      <label className="consent-check">
        <input type="checkbox" name="privacy_consent" value="agreed" required />
        <span>I agree that KM FINCO may use the information I provide to respond to this enquiry, as explained in the <Link href="/privacy">privacy policy</Link>.</span>
      </label>
      <button className="submit-button" type="submit">Open email draft</button>
    </form>
  );
}
