"use client";

import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const productLinks = [
    {
      label: "Telescopic Steel Way Covers",
      href: "/store/product/telescopic-steel-way-covers",
    },
    {
      label: "Roll-up Way Covers",
      href: "/store/product/roll-up-way-covers",
    },
    {
      label: "Apron Covers",
      href: "/store/product/apron-covers",
    },
    {
      label: "Wiper Systems",
      href: "/store/product/wiper-systems",
    },
  ];

  return (
    <>
      <div className="paper-one" style={{ backgroundColor: "transparent" }}>
        <img
          src="/paperstrip.webp"
          alt="Decorative separator"
          style={{
            backgroundColor: "#4169E1",
            transform: "rotate(180deg)",
          }}
        />
      </div>
      <footer className="footer">
        {/* Grid Background Layer */}
        <div className="grid-background">
          <div className="grid-lines horizontal"></div>
          <div className="grid-lines vertical"></div>
        </div>

        {/* Main Content Layer */}
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column brand-column">
              <h3 className="column-title">Sign-Age</h3>
              <p className="brand-copy">
                Manufacturer of machine protection systems for CNC and
                industrial machinery, with 35+ years of engineering and
                fabrication experience.
              </p>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Quick Links</h3>
              <ul className="column-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Core Products</h3>
              <ul className="column-links">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Contact</h3>
              <div className="footer-contact">
                <a
                  href="https://maps.app.goo.gl/3LVS3HjrnQjhhPJZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  452, 12th Cross Rd, Peenya Industrial Area Phase IV, Peenya,
                  Bengaluru, Karnataka 560058
                </a>
                <a href="tel:+919886035718">+91 98860 35718</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">© 2026 Sign Age</div>
            <div className="footer-credit">
              Website built by{" "}
              <a
                href="https://www.baw.studio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#9bcf33", fontWeight: "bold" }}
              >
                BAW Studio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
