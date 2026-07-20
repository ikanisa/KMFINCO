"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { trackConversion } from "../../lib/analytics";
import { siteConfig } from "../../lib/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "/api/contact";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    if (values.get("company_website")) return;

    setStatus("submitting");

    const openEmailFallback = () => {
      const subject = encodeURIComponent(`Website enquiry from ${String(values.get("name") || "a prospective client")}`);
      const body = encodeURIComponent(
        `Name: ${String(values.get("name") || "")}\nEmail: ${String(values.get("email") || "")}\nOrganisation: ${String(values.get("organisation") || "")}\n\nHow can we help?\n${String(values.get("message") || "")}`,
      );
      trackConversion("contact_form_submit");
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(values.entries())),
      });
      if (response.status === 503 && endpoint === "/api/contact") {
        openEmailFallback();
        return;
      }
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      trackConversion("contact_form_submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you. Your note is ready for our team.</h3>
        <p>We’ll review what you shared and connect you with the right adviser. If your email app opened, please send the prepared message to complete your enquiry.</p>
        <button type="button" onClick={() => setStatus("idle")}>Send another note</button>
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
      {status === "error" && <p className="form-error" role="alert">We could not send your note. Please email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or try WhatsApp.</p>}
      <button className="submit-button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send your note"}</button>
    </form>
  );
}
