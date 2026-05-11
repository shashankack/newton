import { CheckCircle2 } from "lucide-react";

const WHY_CHOOSE_US = [
  {
    title: "35+ Years of Manufacturing Experience",
    description: "With over three decades of industry experience, we understand the demanding environments in which machine tool components operate. Our long-standing presence reflects our commitment to reliability, quality, and consistent performance.",
  },
  {
    title: "OEM-Focused Engineering",
    description: "We work closely with machine tool builders and industrial OEMs to develop protection systems that integrate seamlessly with their machines. Our solutions are engineered to meet precise functional and dimensional requirements.",
  },
  {
    title: "Custom-Built Solutions",
    description: "Every machine is different. Our engineering team specializes in developing customized protection systems and sheet metal assemblies designed around specific machine configurations and operational conditions.",
  },
  {
    title: "Precision Manufacturing",
    description: "Our production processes are built around precision sheet metal fabrication, ensuring high dimensional accuracy, structural integrity, and durability across every product we manufacture.",
  },
  {
    title: "Proven Reliability in Harsh Environments",
    description: "Our products are designed to withstand coolant exposure, metal chips, high-speed machine operations, and demanding shop-floor conditions, ensuring long service life and dependable protection.",
  },
  {
    title: "Long-Term Customer Partnerships",
    description: "We believe in building long-term relationships with our customers through transparent communication, consistent quality, and dependable delivery.",
  },
];

const INDUSTRIES = [
  "Machine Tool Manufacturers",
  "CNC Equipment Builders",
  "Industrial Automation",
  "Heavy Engineering",
  "Manufacturing & Metalworking",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 pb-16 pt-32 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
            Company Profile
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Over 35 years of Machine Protection Engineering
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            For over 35 years, we have been manufacturing high-quality machine protection systems and precision sheet metal solutions for the global machine tool industry. Built on a foundation of engineering discipline, reliability, and long-term customer partnerships, our company has grown into a trusted supplier for demanding industrial applications.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="border-b border-slate-100 px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Our Foundation & Vision
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The company was founded by Mr. R. Rajan, a passionate and self-driven engineer whose vision and determination laid the foundation for what the organization is today. Starting with limited resources but immense dedication, he built the company from the ground up through hard work, technical curiosity, and an unwavering commitment to quality.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                His hands-on approach to engineering and problem solving helped establish the strong reputation for craftsmanship and reliability that continues to define the company.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                Built on the Vision of Our Founder
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Founded over 35 years ago, our company was built on the vision, determination, and engineering passion of Mr. R. Rajan, a self-driven entrepreneur who believed in creating world-class engineering solutions through hard work, precision, and continuous learning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Today, the organization continues to operate with the same core values established by its founder — technical excellence, reliability, and a hands-on commitment to every project. Our team combines decades of manufacturing experience with modern engineering practices to deliver products that meet the evolving demands of global industries.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-8">
            <p className="text-base leading-relaxed text-slate-600">
              Over the decades, we have continuously expanded our capabilities to meet the evolving needs of machine tool builders, OEMs, and industrial customers. Today, we specialize in the design and manufacture of machine protection and sheet metal systems that safeguard critical equipment and improve operational performance in demanding manufacturing environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our philosophy remains rooted in the principles established by our founder—engineering integrity, consistent quality, and customer commitment. These values continue to guide our work as we support machine tool manufacturers and OEMs across domestic and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <article
                key={item.title}
                className="border border-slate-200 bg-white p-6 transition hover:shadow-md"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#9acd32]/10">
                  <CheckCircle2 size={20} className="text-[#9acd32]" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="border-b border-slate-100 px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 border border-slate-200 bg-white p-4 transition hover:bg-slate-50"
              >
                <div className="h-2 w-2 rounded-full bg-[#9acd32]" />
                <span className="font-semibold text-slate-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-slate-600">
            With our proven track record and commitment to excellence, we're ready to deliver the machine protection systems your operation needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/products"
              className="inline-flex items-center justify-center bg-[#9acd32] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#89b92d]"
            >
              Explore Products
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-700 transition hover:bg-slate-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
