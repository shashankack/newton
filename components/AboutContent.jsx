"use client";

import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "../styles/about.scss";

const WHY_CHOOSE_US = [
  {
    title: "35+ Years of Manufacturing Experience",
    description:
      "With over three decades of industry experience, we understand the demanding environments in which machine tool components operate.",
  },
  {
    title: "OEM-Focused Engineering",
    description:
      "We work closely with machine tool builders and industrial OEMs to develop protection systems that integrate seamlessly with their machines.",
  },
  {
    title: "Custom-Built Solutions",
    description:
      "Every machine is different. Our engineering team specializes in customized protection systems designed around specific configurations.",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Our production processes are built around precision sheet metal fabrication, ensuring high dimensional accuracy and structural integrity.",
  },
  {
    title: "Proven Reliability in Harsh Environments",
    description:
      "Our products withstand coolant exposure, metal chips, high-speed operations, and demanding shop-floor conditions.",
  },
  {
    title: "Long-Term Customer Partnerships",
    description:
      "We build long-term relationships through transparent communication, consistent quality, and dependable delivery.",
  },
];

const INDUSTRIES = [
  "Machine Tool Manufacturers",
  "CNC Equipment Builders",
  "Industrial Automation",
  "Heavy Engineering",
  "Manufacturing & Metalworking",
];

const STATS = [
  { value: "35+", label: "Years Experience" },
  { value: "OEM", label: "Focused Engineering" },
  { value: "Global", label: "Supply Reach" },
];

export default function AboutContent() {
  const storyRef = useScrollReveal({ y: 44, stagger: 0.1 });
  const whyRef = useScrollReveal({ y: 40, stagger: 0.08 });
  const industriesRef = useScrollReveal({ y: 36, stagger: 0.07 });
  const ctaRef = useScrollReveal({ y: 28, stagger: 0.12 });

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-eyebrow">Company Profile</p>
          <h1 className="about-hero-title">
            Over 35 years of Machine Protection Engineering
          </h1>
          <p className="about-hero-lead">
            For over 35 years, we have been manufacturing high-quality machine
            protection systems and precision sheet metal solutions for the
            global machine tool industry built on engineering discipline,
            reliability, and long-term customer partnerships.
          </p>

          <div className="about-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-story" ref={storyRef}>
        <div className="about-section-inner">
          <p className="about-section-label" data-reveal>
            Our Story
          </p>
          <h2 className="about-section-title" data-reveal>
            Our Foundation & Vision
          </h2>
          <p className="about-section-intro" data-reveal>
            From a founder&apos;s vision to a trusted global supplier our
            journey reflects decades of hands-on engineering and manufacturing
            excellence.
          </p>

          <div className="about-story-grid">
            <div className="about-story-block" data-reveal>
              <p>
                The company was founded by Mr. R. Rajan, a passionate and
                self-driven engineer whose vision and determination laid the
                foundation for what the organization is today. Starting with
                limited resources but immense dedication, he built the company
                from the ground up through hard work, technical curiosity, and
                an unwavering commitment to quality.
              </p>
              <p>
                His hands-on approach to engineering and problem solving helped
                establish the strong reputation for craftsmanship and
                reliability that continues to define the company.
              </p>
            </div>

            <aside className="about-founder-card" data-reveal>
              <h3>Built on the Vision of Our Founder</h3>
              <p>
                Founded over 35 years ago, our company was built on the vision,
                determination, and engineering passion of Mr. R. Rajan a
                self-driven entrepreneur who believed in creating world-class
                engineering solutions through hard work, precision, and
                continuous learning.
              </p>
              <p>
                Today, the organization continues to operate with the same core
                values technical excellence, reliability, and a hands-on
                commitment to every project.
              </p>
              <div className="about-founder-name">
                <div className="about-founder-avatar">RR</div>
                <div className="about-founder-meta">
                  <strong>Mr. R. Rajan</strong>
                  <span>Founder & Engineering Visionary</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="about-story-footer" data-reveal>
            <p>
              Over the decades, we have continuously expanded our capabilities
              to meet the evolving needs of machine tool builders, OEMs, and
              industrial customers. Today, we specialize in the design and
              manufacture of machine protection and sheet metal systems that
              safeguard critical equipment in demanding manufacturing
              environments.
            </p>
            <p>
              Our philosophy remains rooted in engineering integrity, consistent
              quality, and customer commitment guiding our work as we support
              machine tool manufacturers and OEMs across domestic and
              international markets.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-why" ref={whyRef}>
        <div className="about-section-inner">
          <p className="about-section-label" data-reveal>
            Why Sign-Age
          </p>
          <h2 className="about-section-title" data-reveal>
            Why Choose Us
          </h2>
          <p className="about-section-intro" data-reveal>
            Six reasons machine builders and industrial teams trust us for
            protection systems that perform year after year.
          </p>

          <div className="about-why-grid">
            {WHY_CHOOSE_US.map((item) => (
              <article key={item.title} className="about-why-card" data-reveal>
                <div className="about-why-icon">
                  <CheckCircle2 size={22} strokeWidth={2.5} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-industries" ref={industriesRef}>
        <div className="about-section-inner">
          <p className="about-section-label" data-reveal>
            Markets
          </p>
          <h2 className="about-section-title" data-reveal>
            Industries We Serve
          </h2>
          <p className="about-section-intro" data-reveal>
            Engineered protection systems for OEMs and manufacturers across the
            global machine tool ecosystem.
          </p>

          <div className="about-industries-grid">
            {INDUSTRIES.map((industry) => (
              <div key={industry} className="about-industry-item" data-reveal>
                <div className="about-industry-dot" aria-hidden="true" />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" ref={ctaRef}>
        <div className="about-cta-inner">
          <h2 data-reveal>Ready to Partner With Us?</h2>
          <p data-reveal>
            With our proven track record and commitment to excellence,
            we&apos;re ready to deliver the machine protection systems your
            operation needs.
          </p>
          <div className="about-cta-actions">
            <a
              href="/products"
              className="about-btn about-btn-primary"
              data-reveal
            >
              Explore Products
            </a>
            <a
              href="/#contact"
              className="about-btn about-btn-secondary"
              data-reveal
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
