import "../styles/section2.scss";

const Section2 = () => {
  return (
    <section className="clarity">
      <div className="clarity-top">
        <span className="clarity-eyebrow">
          MACHINE PROTECTION EXPERTISE
        </span>

        <div className="clarity-header">
          <div className="clarity-left">
            <h1>
              Reliable protection systems
              <br />
              for CNC and industrial machinery.
            </h1>

            <p>
              We design and manufacture custom machine covers, way covers,
              and enclosures that protect equipment from coolant, chips,
              and demanding operating conditions.
            </p>
          </div>

          <div className="clarity-right">
            <p>
              With over three decades of manufacturing experience, our team
              delivers machine tool protection systems with precision,
              durability, and seamless integration for OEM and retrofit
              applications.
            </p>

            <a href="/products" className="clarity-link">
              Explore our products →
            </a>
          </div>
        </div>
      </div>

      <div className="clarity-about">
        <div className="clarity-about-content">
          <h2>About Our Approach</h2>
          
          <div className="clarity-about-grid">
            <div className="clarity-about-item">
              <h3>Engineering Excellence</h3>
              <p>
                Every protection system we design is engineered to meet exact 
                customer requirements, ensuring seamless integration with your 
                machinery and operational environment.
              </p>
            </div>

            <div className="clarity-about-item">
              <h3>Global Manufacturing Standards</h3>
              <p>
                With manufacturing facilities in India, we maintain international 
                quality standards while delivering cost-effective solutions for 
                global OEM partners and industrial operators.
              </p>
            </div>

            <div className="clarity-about-item">
              <h3>Trusted by Industry Leaders</h3>
              <p>
                Our machine protection systems are deployed across CNC machining 
                centers, automation equipment, and precision industrial machinery 
                worldwide, trusted for reliability and durability.
              </p>
            </div>

            <div className="clarity-about-item">
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
