"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import "../styles/section4.scss";

const Section4 = () => {
  const sectionRef = useScrollReveal({ stagger: 0.1 });

  const benefits = [
    "35+ years of manufacturing experience in machine tool protection",
    "OEM-focused engineering with precise fit and function",
    "Custom-built solutions for specific machine layouts",
    "Precision sheet metal fabrication with dimensional accuracy",
    "Reliable performance in coolant, chip, and high-speed environments",
    "Long-term customer partnerships with dependable delivery",
  ];

  return (
    <section className="section4" ref={sectionRef}>
        <div className="section4-content">
          <div className="section4-left">
            <div className="brain-illustration" data-reveal>
              <img src="/brain-collage.webp" alt="Brain illustration" />
            </div>
          </div>

          <div className="section4-right">
            <p className="section4-subtitle" data-reveal>
              WHY CHOOSE SIGN AGE
            </p>
            <h2 className="section4-title" data-reveal>
              Why partner with SignAge?
            </h2>
            <p className="section4-description" data-reveal>
              We combine engineering discipline, modern manufacturing,
              and practical machine tool expertise to deliver protection
              systems that perform consistently in industrial environments.
            </p>

            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item" data-reveal>
                  <div className="check-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#4169E1"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#4169E1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="paperstrip" data-reveal>
          <img src="/paperstrip.webp" alt="Decorative separator" />
        </div>
      </section>
  );
};

export default Section4;
