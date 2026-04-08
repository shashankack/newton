"use client";

import React, { useState } from "react";
import "../styles/section6.scss";

const Section6 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);

  const testimonials = [
    {
      text: "The telescopic way covers supplied by Sign-Age integrated perfectly with our CNC line. Build quality, fit, and finish were excellent, and delivery commitments were met as promised.",
      name: "Senior Production Manager",
      position: "Machine Tool OEM",
      initials: "PM",
    },
    {
      text: "We needed custom machine covers for harsh operating conditions. Their engineering team understood the requirement quickly and delivered a robust, production-ready solution.",
      name: "Plant Engineering Lead",
      position: "Industrial Manufacturing Facility",
      initials: "EL",
    },
    {
      text: "From first drawing review to final dispatch, communication stayed clear and technical. We value the long-term reliability of their products on our machines.",
      name: "Operations Head",
      position: "CNC Equipment Builder",
      initials: "OH",
    },
  ];

  const platformLogos = [
    "Telescopic Way Covers",
    "Roll-Up Covers",
    "Apron Covers",
    "CNC Machine Enclosures",
    "Custom Machine Covers",
  ];

  const clientLogos = [
    { name: "Machine Tool Manufacturing" },
    { name: "CNC Equipment" },
    { name: "Industrial Automation", highlight: true },
    { name: "Heavy Engineering" },
    { name: "Metalworking" },
    { name: "OEM Applications" },
    { name: "Production Lines" },
    { name: "Precision Fabrication" },
    { name: "Industrial Machinery" },
  ];

  const changeTestimonial = (index) => {
    if (index === currentTestimonial || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setAnimating(false);
    }, 320);
  };

  return (
    <section className="section6">
      {/* Platforms Bar */}
      <div className="platforms-bar">
        <p className="platforms-text">
          ENGINEERED SOLUTIONS ACROSS CORE MACHINE PROTECTION CATEGORIES
        </p>
        <div className="platforms-logos">
          {platformLogos.map((name, i) => (
            <React.Fragment key={i}>
              <div className="platform-logo">{name}</div>
              {i < platformLogos.length - 1 && (
                <span className="platform-sep">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="section6-content">
        <div className="testimonials-left">
          <p className="section6-subtitle">TESTIMONIALS</p>
          <h2 className="section6-title">
            Trusted by machine builders and industrial teams
          </h2>

          <div className="testimonial-nav">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonial-nav-item ${
                  i === currentTestimonial ? "active" : ""
                }`}
                onClick={() => changeTestimonial(i)}
              >
                <div className="nav-avatar">{t.initials}</div>
                <div className="nav-info">
                  <span className="nav-name">{t.name}</span>
                  <span className="nav-pos">{t.position}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="testimonials-right">
          <div
            className={`testimonial-card ${
              animating ? "t-fade-out" : "t-fade-in"
            }`}
          >
            <div className="quote-mark">&ldquo;</div>
            <div className="star-rating">{'★'.repeat(5)}</div>
            <p className="testimonial-text">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentTestimonial].initials}
              </div>
              <div>
                <h4 className="author-name">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="author-position">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Marquee */}
      <div className="clients-carousel">
        <div className="clients-track">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <div
              key={i}
              className={`client-logo ${client.highlight ? "highlight" : ""}`}
            >
              <div className="logo-frame">
                <span className="logo-text">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
