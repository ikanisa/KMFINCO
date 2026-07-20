import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">KMFINCO</Link>
      <p>Assurance, advice and financial expertise—connected around what comes next.</p>
      <nav aria-label="Footer">
        <Link href="/services">Expertise</Link>
        <Link href="/who-we-work-with">Who we work with</Link>
        <Link href="/about">About</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
      <small>© 2026 KMFINCO. All rights reserved.</small>
    </footer>
  );
}
