"use client";

import React, { useState } from "react";
import "../styles/section7.scss";

const Section7 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What exactly do you manufacture?",
      answer:
        "We design and manufacture industrial protection systems, telescopic covers, custom bellows, and custom-engineered fabrication solutions. Every product is built for durability, precision, and long-term performance in demanding industrial environments.",
    },
    {
      question: "Do you accept small or one-off orders?",
      answer:
        "Our systems are optimized for bulk and repeat manufacturing, which allows us to maintain quality and cost efficiency. If you’re looking for a long-term supplier or recurring requirements, we’re the right fit.",
    },
    {
      question:
        "Can you build products based on our drawings or machine specs?",
      answer:
        "Yes. Most of our work is fully customized. Share your drawings, dimensions, or application details and we’ll engineer a solution that fits your exact requirement.",
    },
    {
      question: "Which industries do you typically work with?",
      answer:
        "We work with companies in manufacturing and heavy engineering, CNC and machine tool industries, and automotive and automation sectors. If your operations involve machinery, protection, or fabrication, we likely already serve your space.",
    },
    {
      question: "Why should we choose you over other vendors?",
      answer:
        "Because we don’t build temporary fixes. We focus on long-term industrial performance, helping you reduce breakdowns, maintenance costs, and replacement cycles. With over 25+ years of experience, we operate as a manufacturing partner, not just a vendor.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Lead time depends on the complexity and volume of your order. Once we understand your requirement, we commit to a clear and realistic delivery schedule and stick to it.",
    },
    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes. We provide ongoing technical support and guidance to ensure proper installation and performance. Our goal is long-term reliability, not just dispatching products.",
    },
    {
      question:
        "Where are you located? Do you serve clients outside Bangalore?",
      answer:
        "We are based in Peenya Industrial Area, Bangalore, and serve clients across India and supply to Europe as well. We also support export requirements for bulk and repeat orders.",
    },
    {
      question: "How do you ensure quality and consistency?",
      answer:
        "Our manufacturing is backed by 25+ years of experience, continuous process upgrades, and strict quality checks at every stage. We build products that are meant to last, even in demanding industrial conditions.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simple. Send us your requirements, drawings, or specifications, and our team will evaluate and get back with the best solution and pricing. Serious enquiries with clear requirements get the fastest response.",
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
