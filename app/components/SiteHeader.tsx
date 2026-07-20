"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"} aria-label="Main navigation">
      <Link className="wordmark" href="/" onClick={closeMenu} aria-label="KMFINCO home">
        KMFINCO
      </Link>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary">
        <Link href="/services" onClick={closeMenu}>Expertise</Link>
        <Link href="/who-we-work-with" onClick={closeMenu}>Who we work with</Link>
        <Link href="/insights" onClick={closeMenu}>Insights</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link className="nav-cta" href="/contact" onClick={closeMenu}>Book a Meeting</Link>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
}
