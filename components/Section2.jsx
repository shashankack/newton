"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import "../styles/section2.scss";

const Section2 = () => {
  const sectionRef = useScrollReveal({ stagger: 0.12 });

  return (
    <section className="clarity" ref={sectionRef}>
      <div className="clarity-top">
        <span className="clarity-eyebrow" data-reveal>
          MACHINE PROTECTION EXPERTISE
        </span>

        <div className="clarity-header">
          <div className="clarity-left">
            <h1 data-reveal>
              Reliable protection systems
              <br />
              for CNC and industrial machinery.
            </h1>

            <p data-reveal>
              We design and manufacture custom machine covers, way covers,
              and enclosures that protect equipment from coolant, chips,
              and demanding operating conditions.
            </p>
          </div>

          <div className="clarity-right">
            <p data-reveal>
              With over three decades of manufacturing experience, our team
              delivers machine tool protection systems with precision,
              durability, and seamless integration for OEM and retrofit
              applications.
            </p>

            <a href="/products" className="clarity-link" data-reveal>
              Explore our products →
            </a>
          </div>
        </div>
      </div>

      <div className="clarity-about">
        <div className="clarity-about-content">
          <h2 data-reveal>About Our Approach</h2>

          <div className="clarity-about-grid">
            <div className="clarity-about-item" data-reveal>
              <h3>Engineering Excellence</h3>
              <p>
                Every protection system we design is engineered to meet exact
                customer requirements, ensuring seamless integration with your
                machinery and operational environment.
              </p>
            </div>

            <div className="clarity-about-item" data-reveal>
              <h3>Global Manufacturing Standards</h3>
              <p>
                With manufacturing facilities in India, we maintain international
                quality standards while delivering cost-effective solutions for
                global OEM partners and industrial operators.
              </p>
            </div>

            <div className="clarity-about-item" data-reveal>
              <h3>Trusted by Industry Leaders</h3>
              <p>
                Our machine protection systems are deployed across CNC machining
                centers, automation equipment, and precision industrial machinery
                worldwide, trusted for reliability and durability.
              </p>
            </div>

            <div className="clarity-about-item" data-reveal>
              <h3>Custom Solutions</h3>
              <p>
                From prototype development to series production, we support custom
                engineering requirements for retrofit and OEM applications across
                all major machine tool manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
