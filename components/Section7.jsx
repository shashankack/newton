"use client";

import React, { useState } from "react";
import "../styles/section7.scss";

const Section7 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What types of machine protection systems do you manufacture?",
      answer:
        "We manufacture telescopic way covers, roll-up covers, apron covers, CNC machine enclosures, and custom machine covers designed for industrial use.",
    },
    {
      question: "Do you support custom dimensions and OEM specifications?",
      answer:
        "Yes. Our team develops custom-built solutions around your machine envelope, travel range, mounting conditions, and performance requirements.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with machine tool manufacturers, CNC equipment builders, industrial automation teams, heavy engineering firms, and metalworking plants.",
    },
    {
      question: "How do your products perform in harsh shop floor environments?",
      answer:
        "Our products are engineered for coolant exposure, metal chips, high-speed operation, and continuous machine cycles to ensure dependable long-term performance.",
    },
    {
      question: "Can you manufacture both standard and custom products?",
      answer:
        "Yes. We produce standard configurations and also build custom protection systems tailored to specific machine and process requirements.",
    },
    {
      question: "Do you provide support during development and fitment?",
      answer:
        "Yes. We collaborate during requirement definition, drawing review, and production planning to help ensure accurate fit and function at installation.",
    },
    {
      question: "What materials and fabrication capabilities do you have?",
      answer:
        "We specialize in precision sheet metal fabrication and machine protection assemblies with strong focus on dimensional accuracy and durability.",
    },
    {
      question: "How do you ensure quality consistency?",
      answer:
        "Our manufacturing process follows structured engineering checks, controlled fabrication practices, and inspection routines to maintain reliable quality across batches.",
    },
    {
      question: "Can you supply for domestic and international customers?",
      answer:
        "Yes. We support machine tool manufacturers and OEMs in domestic and international markets with consistent communication and dependable delivery.",
    },
    {
      question: "How do I request a quote for my machine application?",
      answer:
        "Share your machine details, operating conditions, travel dimensions, and any available drawings through our contact form. Our team will review and respond with the right proposal.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section7">
      <div className="section7-content">
        <div className="section7-header">
          <p className="section7-subtitle">FAQS</p>
          <h2 className="section7-title">Got questions?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer-inner">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
