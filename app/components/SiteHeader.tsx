"use client";

import Link from "next/link";
import { useState } from "react";
import { PrimaryCta } from "./PrimaryCta";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" aria-label="Main navigation">
      <Link className="wordmark" href="/" onClick={closeMenu} aria-label="KM Finco home">
        KM FINCO
      </Link>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary">
        <Link href="/services" onClick={closeMenu}>Expertise</Link>
        <Link href="/#who-we-help" onClick={closeMenu}>Who we help</Link>
        <Link href="/insights" onClick={closeMenu}>Insights</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <PrimaryCta className="nav-cta" onClick={closeMenu} />
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
