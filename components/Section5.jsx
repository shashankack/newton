"use client";

import React from "react";
import "../styles/section5.scss";

const Section5 = () => {
  const criteria = [
    {
      img: "/eye.svg",
      title: "Machine Tool Manufacturers",
    },
    {
      img: "/cash.svg",
      title: "CNC Equipment Builders",
    },
    {
      img: "/target.svg",
      title: "Industrial Automation Integrators",
    },
    {
      img: "/target.svg",
      title: "Heavy Engineering Applications",
    },
    {
      img: "/target.svg",
      title: "Manufacturing and Metalworking Plants",
    },
  ];

  return (
    <section className="section5">
      <div className="section5-content">
        <div className="section5-header">
          <p className="section5-subtitle">INDUSTRIES WE SERVE</p>
          <h2 className="section5-title">Built for demanding industrial applications</h2>
          <p className="section5-description">
            We support OEMs and manufacturers looking for reliable
            machine protection systems and custom sheet metal enclosures.
          </p>
        </div>

        <div className="criteria-grid">
          {criteria.map((item, index) => (
            <div key={index} className="criteria-card">
              <div className="card-inner-layout">
                <div className="criteria-image-container">
                  <img src={item.img} alt="icon" className="criteria-img" />
                </div>
                <p className="criteria-title">{item.title}</p>
              </div>
            </div>
          ))}

          <div className="criteria-card cta-card">
            <div className="cta-content">
              <p className="cta-text">Need a custom solution?</p>
              <div className="cta-action">
                <a href="/#contact" className="cta-link">
                  Let's talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
