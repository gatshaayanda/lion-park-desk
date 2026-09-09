"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "#attractions", label: "Attractions" },
  { href: "#activities", label: "Activities" },
  { href: "#plan-your-day", label: "Plan Your Visit" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export default function LionParkHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link
            href="/"
            className="brand-lockup"
            aria-label="Lion Park Resort home"
            onClick={closeMenu}
          >
            <span className="brand-name">Lion Park</span>
            <span className="brand-subtitle">Resort</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="menu-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/desk" className="staff-login">
              Staff Login
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/desk"
              className="btn btn-outline mobile-staff-link"
              onClick={closeMenu}
            >
              Staff Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}