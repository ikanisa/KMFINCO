import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">KM FINCO</Link>
      <p>Assurance, advice and financial expertise—connected around what comes next.</p>
      <nav aria-label="Footer">
        <Link href="/services">Expertise</Link>
        <Link href="/about">About</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <small>© 2026 KM FINCO. All rights reserved.</small>
    </footer>
  );
}
