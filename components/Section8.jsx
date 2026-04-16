"use client";

import React, { useState } from "react";
import "../styles/section8.scss";

const PRODUCT_OPTIONS = [
  { value: "bellow-covers", label: "Bellows Covers" },
  { value: "wiper-systems", label: "Way Wipers / Wiper Systems" },
  { value: "apron-covers", label: "Apron Covers" },
  { value: "roll-up-way-covers", label: "Roll-up Way Covers" },
  { value: "telescopic-spring-covers", label: "Telescopic Spring Covers" },
  {
    value: "telescopic-steel-way-covers",
    label: "Telescopic Steel Way Covers",
  },
  { value: "cable-carriers-systems", label: "Cable Carriers Systems" },
  {
    value: "cnc-sheet-metal-enclosures-assemblies",
    label: "CNC Sheet Metal Enclosures & Assemblies",
  },
];

const ENQUIRY_TYPE_OPTIONS = [
  { value: "rfq", label: "RFQ / Quote" },
  { value: "prototype", label: "Prototype Development" },
  { value: "oem-supply", label: "OEM Supply Discussion" },
  { value: "retrofit", label: "Retrofit / Replacement" },
  { value: "other", label: "Other" },
];

const OPERATING_CONDITION_OPTIONS = [
  "Coolant exposure",
  "Fine chips",
  "Hot chips / sparks",
  "High-speed cycles",
  "Dusty environment",
  "Outdoor / moisture",
];

const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  businessName: "",
  designation: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  enquiryType: "rfq",
  quantity: "",
  machineType: "",
  travelDimensions: "",
  products: [],
  operatingConditions: [],
  message: "",
  consent: false,
  website: "",
};

const Section8 = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "idle",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (
      type === "checkbox" &&
      (name === "products" || name === "operatingConditions")
    ) {
      setFormData((prev) => {
        const current = prev[name];
        return {
          ...prev,
          [name]: checked
            ? [...current, value]
            : current.filter((item) => item !== value),
        };
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const serializePayload = (data) => {
    const selectedProducts = PRODUCT_OPTIONS.filter((option) =>
      data.products.includes(option.value),
    ).map((option) => option.label);

    const enquiryLabel =
      ENQUIRY_TYPE_OPTIONS.find((option) => option.value === data.enquiryType)
        ?.label || data.enquiryType;

    return {
      submittedAt: new Date().toISOString(),
      sourcePage: window.location.href,
      firstName: data.firstName,
      lastName: data.lastName,
      businessName: data.businessName,
      designation: data.designation,
      email: data.email,
      phone: data.phone,
      city: data.city,
      country: data.country,
      enquiryType: enquiryLabel,
      quantity: data.quantity,
      machineType: data.machineType,
      travelDimensions: data.travelDimensions,
      products: selectedProducts.join(" | "),
      operatingConditions: data.operatingConditions.join(" | "),
      requirement: data.message,
      consentGiven: data.consent ? "Yes" : "No",
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitState({
        type: "error",
        message: "Please confirm consent so we can process your enquiry.",
      });
      return;
    }

    if (formData.website.trim()) {
      setSubmitState({
        type: "success",
        message: "Thank you. Your enquiry has been received.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

      if (!endpoint) {
        throw new Error(
          "Google Sheets webhook is not configured. Add NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL in your environment settings.",
        );
      }

      const payload = serializePayload(formData);
      const body = new URLSearchParams(payload).toString();

      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      setSubmitState({
        type: "success",
        message:
          "Thanks. Our engineering team will review your details and respond shortly.",
      });
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the form right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Share your requirement and our engineering team will recommend the
              right telescopic covers, roll-up covers, apron covers, or CNC
              machine enclosure for your application.
            </p>
            <div className="section8-contact-info">
              <p className="section8-contact-label">Visit us</p>
              <a
                href="https://maps.app.goo.gl/3LVS3HjrnQjhhPJZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="section8-contact-address"
              >
                452, 12th Cross Rd, Peenya Industrial Area Phase IV, Peenya,
                Bengaluru, Karnataka 560058
              </a>

              <p className="section8-contact-label">Telephone</p>
              <a href="tel:+919886035718" className="section8-contact-phone">
                +91 98860 35718
              </a>
            </div>
          </div>

          <div className="section8-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group honeypot-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                    placeholder="Company / OEM name"
                  />
                </div>
              </div>

              <div className="form-row two-col-row">
                <div className="form-group">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Engineer, Purchase Manager, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiryType">
                    Enquiry type <span className="required">*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    required
                  >
                    {ENQUIRY_TYPE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
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
                    placeholder="name@company.com"
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
                    placeholder="+91..."
                    required
                  />
                </div>
              </div>

              <div className="form-row two-col-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="form-row two-col-row">
                <div className="form-group">
                  <label htmlFor="machineType">
                    Machine type / model <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="machineType"
                    name="machineType"
                    value={formData.machineType}
                    onChange={handleInputChange}
                    placeholder="VMC, HMC, Turning center, etc."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Estimated quantity</label>
                  <input
                    type="number"
                    min="1"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="form-row single-row">
                <div className="form-group">
                  <label htmlFor="travelDimensions">
                    Travel dimensions / stroke details{" "}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="travelDimensions"
                    name="travelDimensions"
                    value={formData.travelDimensions}
                    onChange={handleInputChange}
                    placeholder="X: 1200 mm, Y: 700 mm, Z: 650 mm"
                    required
                  />
                </div>
              </div>

              <div className="form-group option-group">
                <label className="option-label">
                  Products needed <span className="required">*</span>
                </label>
                <div className="option-grid">
                  {PRODUCT_OPTIONS.map((option) => (
                    <label className="option-chip" key={option.value}>
                      <input
                        type="checkbox"
                        name="products"
                        value={option.value}
                        checked={formData.products.includes(option.value)}
                        onChange={handleInputChange}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                <p className="field-help">
                  Select one or more product categories.
                </p>
              </div>

              <div className="form-group option-group">
                <label className="option-label">Operating conditions</label>
                <div className="option-grid">
                  {OPERATING_CONDITION_OPTIONS.map((condition) => (
                    <label className="option-chip" key={condition}>
                      <input
                        type="checkbox"
                        name="operatingConditions"
                        value={condition}
                        checked={formData.operatingConditions.includes(
                          condition,
                        )}
                        onChange={handleInputChange}
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row single-row">
                <div className="form-group">
                  <label htmlFor="message">
                    Technical requirement <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Share machine details, protection requirement, and drawing availability."
                    required
                  />
                </div>
              </div>

              <div className="form-group checkbox-group consent-group">
                <label className="checkbox-label">
                  Consent <span className="required">*</span>
                </label>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    I agree to be contacted by Sign Age for this enquiry and
                    understand my information will be used to process this
                    request.
                  </span>
                </label>
              </div>

              <p className="privacy-note">
                For details on how enquiry data is handled, read our{" "}
                <a href="/privacy-policy" className="privacy-link">
                  Privacy Policy
                </a>
                .
              </p>

              {submitState.message && (
                <p className={`form-status ${submitState.type}`}>
                  {submitState.message}
                </p>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || formData.products.length === 0}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Request engineering consultation"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section8;
