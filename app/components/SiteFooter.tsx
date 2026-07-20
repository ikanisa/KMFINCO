import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import { TrackedLink } from "./TrackedLink";
import { PrimaryCta } from "./PrimaryCta";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">KM FINCO</Link>
      <div className="footer-summary">
        <p>Assurance, advice and financial expertise—connected around what comes next.</p>
        <span>{siteConfig.serviceArea}</span>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer">
          <Link href="/services">Expertise</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <div className="footer-contact">
          <span>{siteConfig.email}</span>
          <TrackedLink href={`tel:${siteConfig.phoneE164}`} event="contact_phone_click">{siteConfig.phoneDisplay}</TrackedLink>
          <TrackedLink href={siteConfig.whatsappUrl} event="contact_whatsapp_click" target="_blank" rel="noreferrer">WhatsApp</TrackedLink>
          <PrimaryCta />
          {siteConfig.linkedInUrl && <TrackedLink href={siteConfig.linkedInUrl} event="linkedin_click" target="_blank" rel="noreferrer">LinkedIn</TrackedLink>}
        </div>
      </div>
      <small>© 2026 KM FINCO. All rights reserved. International advisory services; meetings online and by appointment.</small>
    </footer>
  );
}
