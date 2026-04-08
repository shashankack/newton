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

            <a href="/store/product/telescopic-steel-way-covers" className="clarity-link">
              Explore our products →
            </a>
          </div>
        </div>
      </div>

      <div className="clarity-cards">
        <div className="clarity-card">
          <h3>Telescopic Way Covers</h3>
          <span className="clarity-sub">Heavy-duty linear axis protection.</span>
          <p>
            Engineered telescopic way covers for CNC machine protection with
            high dimensional accuracy and long service life.
          </p>

          <div className="clarity-visual today">
            <img src="today.webp" alt="Telescopic way covers" />
          </div>
        </div>

        <div className="clarity-card">
          <h3>Roll-Up and Apron Covers</h3>
          <span className="clarity-sub">Compact protection for moving elements.</span>
          <p>
            Durable roll-up way covers and apron covers designed to handle
            coolant exposure, chips, and repetitive machine movement.
          </p>

          <div className="clarity-visual yesterday">
            <img src="yesterday.webp" alt="Roll-up and apron machine covers" />
          </div>
        </div>

        <div className="clarity-card">
          <h3>CNC Machine Enclosures</h3>
          <span className="clarity-sub">Precision sheet metal assemblies.</span>
          <p>
            Custom CNC machine enclosures and sheet metal machine enclosures
            developed for OEM specifications and operating conditions.
          </p>

          <div className="clarity-visual tomorrow">
            <img src="tomorrow.webp" alt="CNC machine enclosure" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
