"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { PrimaryCta } from "./PrimaryCta";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <Fragment>
      <header className="site-header" aria-label="Main navigation">
        <Link className="wordmark" href="/" onClick={closeMenu} aria-label="KM Finco home">
          KM FINCO
        </Link>
        <nav id="primary-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary">
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
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>
      {menuOpen && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
    </Fragment>
  );
}
