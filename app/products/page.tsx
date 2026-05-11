import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "telescopic-steel-way-covers",
    name: "Telescopic Steel Way Covers",
    category: "Machine Protection",
    description: "Heavy-duty telescopic covers for machine ways, built for precision and long-term reliability.",
    image: "/products/telescopic-steel-way-covers/tsc-1.png",
    slug: "telescopic-steel-way-covers",
  },
  {
    id: "telescopic-spring-covers",
    name: "Telescopic Spring Covers",
    category: "Machine Protection",
    description: "Spring-loaded telescopic covers designed for smooth, controlled movement and consistent protection.",
    image: "/products/telescopic-spring-covers/spring-covers-1.png",
    slug: "telescopic-spring-covers",
  },
  {
    id: "roll-up-way-covers",
    name: "Roll-Up Way Covers",
    category: "Machine Protection",
    description: "Space-efficient roll-up covers that compress vertically for compact machine integration.",
    image: "/products/roll-up-way-covers/rwc-1.png",
    slug: "roll-up-way-covers",
  },
  {
    id: "apron-covers",
    name: "Apron Covers",
    category: "Machine Protection",
    description: "Protective apron covers that shield machine fronts and operator areas from chips and coolant.",
    image: "/products/apron-covers/ac-1.png",
    slug: "apron-covers",
  },
  {
    id: "wiper-systems",
    name: "Way Wipers / Wiper Systems",
    category: "Machine Protection",
    description: "Precision wiper systems that clean and protect machine ways from coolant and metal chips.",
    image: "/products/wiper-systems/wipers.png",
    slug: "wiper-systems",
  },
  {
    id: "bellow-covers",
    name: "Bellows Covers",
    category: "Machine Protection",
    description: "Custom bellows covers in various materials for flexible protection across diverse applications.",
    image: "/products/bellow-covers/hsb1.png",
    slug: "bellow-covers",
  },
  {
    id: "cable-carriers-systems",
    name: "Cable Carriers & Systems",
    category: "Machine Protection",
    description: "Robust cable management and carrier systems for organized, protected cable routing.",
    image: "/products/cable-carriers-systems/ccs-1.png",
    slug: "cable-carriers-systems",
  },
  {
    id: "cnc-sheet-metal-enclosures-assemblies",
    name: "CNC Sheet Metal Enclosures & Assemblies",
    category: "Sheet Metal Solutions",
    description: "Precision CNC sheet metal fabrication and custom enclosures for industrial OEM applications.",
    image: "/products/cnc/sme1.png",
    slug: "cnc-sheet-metal-enclosures-assemblies",
  },
];

const CATEGORIES = [
  {
    name: "Machine Protection",
    description: "Comprehensive protection systems for machine tools, CNC equipment, and industrial machinery.",
    count: 7,
  },
  {
    name: "Sheet Metal Solutions",
    description: "Custom precision sheet metal fabrication and industrial enclosures.",
    count: 1,
  },
];

export const metadata = {
  title: "Products | Machine Protection & Sheet Metal Solutions",
  description: "Explore our complete range of machine protection systems, covers, wipers, and custom sheet metal enclosures for CNC and industrial machinery.",
};

export default function ProductsPage() {
  const machineProtection = PRODUCTS.filter((p) => p.category === "Machine Protection");
  const sheetMetalSolutions = PRODUCTS.filter((p) => p.category === "Sheet Metal Solutions");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 pb-16 pt-32 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
            Product Catalog
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Machine Protection & Sheet Metal Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our comprehensive range of engineered protection systems, custom covers, and precision sheet metal solutions designed for demanding industrial environments.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="px-5 py-12 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="border border-slate-200 bg-white p-6 transition hover:shadow-md"
              >
                <h3 className="text-lg font-black text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {category.count} Product{category.count !== 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Protection Section */}
      <section className="border-t border-slate-100 px-5 py-14 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Machine Protection Systems
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Our complete range of machine protection products designed to safeguard equipment, reduce downtime, and improve operational performance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machineProtection.map((product) => (
              <Link
                key={product.id}
                href={`/store/product/${product.slug}`}
                className="group overflow-hidden border border-slate-200 bg-white transition hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-contain transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9acd32]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-slate-900 group-hover:text-[#9acd32] transition">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#9acd32] group-hover:gap-3 transition">
                    Learn More
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sheet Metal Solutions Section */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Sheet Metal Solutions
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Custom precision sheet metal fabrication and industrial enclosures engineered for OEM and industrial applications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sheetMetalSolutions.map((product) => (
              <Link
                key={product.id}
                href={`/store/product/${product.slug}`}
                className="group overflow-hidden border border-slate-200 bg-white transition hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9acd32]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-slate-900 group-hover:text-[#9acd32] transition">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#9acd32] group-hover:gap-3 transition">
                    Learn More
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-100 px-5 py-14 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Need Custom Solutions?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-slate-600">
            Every machine is different. Our engineering team specializes in developing customized protection systems and sheet metal assemblies tailored to your specific requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-[#9acd32] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#89b92d]"
            >
              Get in Touch
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-700 transition hover:bg-slate-100"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
