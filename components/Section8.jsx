"use client";

import React, { useState } from "react";
import "../styles/section8.scss";

const Section8 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    interest: "",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <section className="section8" id="contact">
        <div className="section8-content">
          <div className="section8-left">
            <p className="section8-subtitle">READY TO GET STARTED?</p>
            <h2 className="section8-title">
              Let us engineer the right protection system for your machine
            </h2>
            <p className="section8-description">
              Share your requirement and our engineering team will recommend
              the right telescopic covers, roll-up covers, apron covers,
              or CNC machine enclosure for your application.
            </p>
          </div>

          <div className="section8-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row name-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="field-label">First Name</span>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="field-label">Last Name</span>
                </div>
              </div>

              <div className="form-row single-row">
                <div className="form-group">
                  <label htmlFor="businessName">Business name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row two-col-row">
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group radio-group">
                <label className="radio-label">
                  What are you most interested in?
                </label>
                <div className="radio-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="interest"
                      value="telescopic-way-covers"
                      checked={formData.interest === "telescopic-way-covers"}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-text">
                      Telescopic way covers
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="interest"
                      value="roll-up-and-apron-covers"
                      checked={formData.interest === "roll-up-and-apron-covers"}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-text">
                      Roll-up and apron covers
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="interest"
                      value="cnc-machine-enclosures"
                      checked={formData.interest === "cnc-machine-enclosures"}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-text">
                      CNC machine enclosures
                    </span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="interest"
                      value="custom-machine-covers"
                      checked={formData.interest === "custom-machine-covers"}
                      onChange={handleInputChange}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-text">Custom machine covers</span>
                  </label>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  Sign up to our newsletter
                </label>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    Send product updates, capability news, and application
                    insights from Sign Age.
                  </span>
                </label>
              </div>

              <p className="privacy-note">
                For more information on how we process your data for marketing
                communication, check our{" "}
                <a href="#privacy" className="privacy-link">
                  Privacy Policy
                </a>
                .
              </p>

              <button type="submit" className="submit-button">
                Request engineering consultation
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="paper-one" style={{ backgroundColor: "transparent" }}>
        <img
          src="paperstrip.webp"
          alt="Decorative separator"
          style={{
            backgroundColor: "#4169E1",
            transform: "rotate(180deg)",
          }}
        />
      </div>
    </>
  );
};

export default Section8;
