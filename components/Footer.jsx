"use client";

import React from "react";
import "../styles/footer.scss";

const footer = () => {
  const services = [
    "Financial Operations",
    "Reporting & Insights",
    "Strategic Finance Advice",
  ];

  const resources = ["Guides", "Calculators", "Blog"];
  const pages = ["About us", "Contact us", "Privacy policy"];

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
  ];

  return (
    <footer className="footer">
      {/* Grid Background Layer */}
      <div className="grid-background">
        <div className="grid-lines horizontal"></div>
        <div className="grid-lines vertical"></div>
      </div>

      {/* Main Content Layer */}
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="column-title">SERVICES</h3>
            <ul className="column-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">RESOURCES</h3>
            <ul className="column-links">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#">{resource}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">PAGES</h3>
            <ul className="column-links">
              {pages.map((page, index) => (
                <li key={index}>
                  <a href="#">{page}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h3 className="column-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
              <label className="newsletter-checkbox">
                <input type="checkbox" />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">
                  Send me insights, tools and tips to help my business grow
                  smarter.
                </span>
              </label>
              <p className="newsletter-privacy">
                For more information on how we process your data...{" "}
                <a href="#" className="privacy-link">
                  Privacy policy.
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© 2026 Sign Age</div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                aria-label={social.name}
              >
                {/* SVG logic remains exactly as you had it */}
                {social.icon === "linkedin" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === "facebook" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                )}
                {social.icon === "instagram" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social.icon === "youtube" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <div className="footer-credit">
            Website built by{" "}
            <a
              href="https://www.baw.studio"
              target="_blank"
              style={{ color: "#9bcf33", fontWeight: "bold" }}
            >
              BAW Studio
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
