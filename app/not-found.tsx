import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found section-shell">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page is no longer in view.</h1>
        <p>The link may have moved, or the address may be incomplete. Return to KM FINCO or start a conversation with our team.</p>
        <div className="not-found-actions">
          <Link className="primary-button" href="/">Return home</Link>
          <Link className="text-link" href="/contact">Contact KM FINCO</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
