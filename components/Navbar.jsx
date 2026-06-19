"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/navbar.scss";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Make it Yours", href: "/#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((open) => !open), []);

  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeDrawer();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen, closeDrawer]);

  return (
    <>
      <header className={`header ${isHome ? "" : "header-solid"}`}>
        <div className="header-logo" />

        <a href="/" className="header-brand">
          SIGN-AGE
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-toggle ${drawerOpen ? "active" : ""}`}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          onClick={toggleDrawer}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`nav-drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
        aria-hidden={!drawerOpen}
      />

      <aside
        id="mobile-nav-drawer"
        className={`nav-drawer ${drawerOpen ? "open" : ""}`}
        aria-hidden={!drawerOpen}
        aria-label="Mobile navigation"
      >
        <div className="nav-drawer-header">
          <span className="nav-drawer-label">Menu</span>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="nav-drawer-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={closeDrawer}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-drawer-footer">
          <a href="/#contact" className="nav-drawer-cta" onClick={closeDrawer}>
            Request consultation
          </a>
          <a href="tel:+919886035718" className="nav-drawer-phone">
            +91 98860 35718
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
