"use client";

import { Fragment, useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap } from "@/lib/gsap";
import "../styles/section6.scss";

const TESTIMONIALS = [
  {
    id: "oem-telescopic",
    text: "The telescopic way covers supplied by Sign-Age integrated perfectly with our CNC line. Build quality, fit, and finish were excellent, and delivery commitments were met as promised.",
    name: "Senior Production Manager",
    position: "Machine Tool OEM, Pune",
    initials: "PM",
  },
  {
    id: "plant-engineering",
    text: "We needed custom machine covers for harsh operating conditions heavy coolant, fine aluminium chips, and long shifts. Their engineering team understood the requirement quickly and delivered a robust, production-ready solution.",
    name: "Plant Engineering Lead",
    position: "Automotive Components Plant",
    initials: "EL",
  },
  {
    id: "cnc-builder",
    text: "From first drawing review to final dispatch, communication stayed clear and technical. We value the long-term reliability of their products on our machines fewer field complaints after switching suppliers.",
    name: "Operations Head",
    position: "CNC Equipment Builder",
    initials: "OH",
  },
  {
    id: "vmc-retrofit",
    text: "We replaced failing way covers on three aging VMCs that were no longer supported by the original manufacturer. Sign-Age worked from our rough dimensions, sent a sample for fit check, and the steel telescopic sets run quieter than what we had before.",
    name: "Maintenance Supervisor",
    position: "Precision Machining Job Shop",
    initials: "MS",
  },
  {
    id: "procurement",
    text: "We have been sourcing roll-up and apron covers from them across multiple VMC platforms for over two years. Pricing is fair for the quality, and they understand our drawing standards without constant back-and-forth on every repeat order.",
    name: "Procurement Manager",
    position: "Industrial Machinery OEM",
    initials: "PR",
  },
  {
    id: "enclosure-prototype",
    text: "Our sheet metal enclosure needed cable routing cutouts, hinged access panels, and a specific powder-coat finish. Other vendors quoted long lead times for our volume. Sign-Age prototyped one unit first we approved and went straight to batch production.",
    name: "Design Engineer",
    position: "Automation Systems Integrator",
    initials: "DE",
  },
  {
    id: "coolant-chips",
    text: "Fine chips and coolant were getting into our ball screws every few months, causing unplanned downtime. After installing their bellows and wiper setup, we have gone two full production seasons without that failure mode coming back.",
    name: "Production In-charge",
    position: "Heavy Engineering Fabrication Unit",
    initials: "PI",
  },
  {
    id: "export-europe",
    text: "We ship machines to customers in Europe and needed a supplier who could keep documentation, packaging, and dimensional consistency across batches. Sign-Age has been dependable on repeat export orders for our way cover assemblies.",
    name: "Export Coordinator",
    position: "Machine Tool Manufacturer",
    initials: "EC",
  },
  {
    id: "long-travel",
    text: "For a custom gantry we needed way protection that could handle long travel with minimal stack height at the ends. Their team suggested a roll-up configuration we had not considered it saved space and still holds up in a chip-heavy environment.",
    name: "Project Lead",
    position: "Industrial Automation Company",
    initials: "PL",
  },
];

const PLATFORM_LOGOS = [
  "Telescopic Way Covers",
  "Roll-Up Covers",
  "Apron Covers",
  "CNC Machine Enclosures",
  "Custom Machine Covers",
];

const CLIENT_LOGOS = [
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

const Section6 = () => {
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.1 });
  const testimonialCardRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const active = TESTIMONIALS[currentTestimonial];

  const changeTestimonial = useCallback(
    (index) => {
      if (index === currentTestimonial) return;

      const card = testimonialCardRef.current;
      if (!card || !card.classList.contains("is-revealed")) {
        setCurrentTestimonial(index);
        return;
      }

      gsap.to(card, {
        opacity: 0,
        y: -14,
        duration: 0.22,
        ease: "power2.in",
        overwrite: true,
        onComplete: () => {
          setCurrentTestimonial(index);
          gsap.fromTo(
            card,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
              overwrite: true,
            },
          );
        },
      });
    },
    [currentTestimonial],
  );

  const goPrev = useCallback(() => {
    changeTestimonial(
      (currentTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  }, [changeTestimonial, currentTestimonial]);

  const goNext = useCallback(() => {
    changeTestimonial((currentTestimonial + 1) % TESTIMONIALS.length);
  }, [changeTestimonial, currentTestimonial]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  return (
    <section className="section6" ref={sectionRef}>
      <div className="platforms-bar" data-reveal>
        <p className="platforms-text">
          ENGINEERED SOLUTIONS ACROSS CORE MACHINE PROTECTION CATEGORIES
        </p>
        <div className="platforms-logos">
          {PLATFORM_LOGOS.map((name, i) => (
            <Fragment key={name}>
              <div className="platform-logo">{name}</div>
              {i < PLATFORM_LOGOS.length - 1 && (
                <span className="platform-sep">·</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="section6-content">
        <div className="testimonials-header" data-reveal>
          <p className="section6-subtitle">TESTIMONIALS</p>
          <h2 className="section6-title">
            Trusted by machine builders and industrial teams
          </h2>
        </div>

        <div className="testimonials-carousel">
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          <div
            className="testimonial-card"
            ref={testimonialCardRef}
            data-reveal
          >
            <div className="testimonial-card-top">
              <div className="quote-mark" aria-hidden="true">
                &ldquo;
              </div>
              <div className="star-rating" aria-hidden="true">
                {"★".repeat(5)}
              </div>
            </div>

            <blockquote className="testimonial-text">{active.text}</blockquote>

            <footer className="testimonial-author">
              <div className="author-avatar">{active.initials}</div>
              <div>
                <cite className="author-name">{active.name}</cite>
                <p className="author-position">{active.position}</p>
              </div>
            </footer>
          </div>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div className="testimonials-footer" data-reveal>
          <span className="testimonial-counter">
            {String(currentTestimonial + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>

          <div
            className="testimonial-dots"
            role="tablist"
            aria-label="Testimonials"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === currentTestimonial}
                aria-label={`Testimonial ${i + 1}: ${t.name}`}
                className={`testimonial-dot ${
                  i === currentTestimonial ? "active" : ""
                }`}
                onClick={() => changeTestimonial(i)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-mobile-nav">
          <button
            type="button"
            className="testimonial-arrow"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            className="testimonial-arrow"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="clients-carousel" data-reveal>
        <div className="clients-track">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
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
