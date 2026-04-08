import { CheckCircle2, Factory, Globe2, ShieldCheck, Wrench } from "lucide-react";

const PILLARS = [
  {
    icon: <Factory size={20} className="text-[#9acd32]" />,
    title: "Precision Manufacturing",
    body: "Built with process discipline, tested tolerances, and consistency across runs.",
  },
  {
    icon: <Wrench size={20} className="text-[#9acd32]" />,
    title: "Custom Engineering",
    body: "Each solution is adapted to machine envelope, stroke profile, and environment.",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#9acd32]" />,
    title: "Quality First",
    body: "From incoming material to final dispatch, every step is checked for reliability.",
  },
  {
    icon: <Globe2 size={20} className="text-[#9acd32]" />,
    title: "Long-Term Partnerships",
    body: "We work closely with OEMs and plants to solve practical shop-floor challenges.",
  },
];

const STATS = [
  { value: "35+", label: "Years of Domain Experience" },
  { value: "1000+", label: "Custom Projects Delivered" },
  { value: "8", label: "Core Product Families" },
  { value: "OEM", label: "Focused Manufacturing DNA" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 pb-16 pt-32 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
            About Sign-Age
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Engineering machine protection systems that perform in real production environments.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Sign-Age combines proven manufacturing processes with practical engineering to build dependable machine protection products.
            Our focus is straightforward: protect motion systems, reduce downtime, and deliver products that hold up under industrial use.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label} className="border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-2xl font-black tracking-tight text-slate-900">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {PILLARS.map((item) => (
            <article key={item.title} className="border border-slate-200 bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                {item.icon}
              </div>
              <h2 className="text-xl font-black tracking-tight text-slate-900">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            What you can expect from us
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2.5 border border-slate-200 bg-white p-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#9acd32]" />
              <p className="text-slate-700">Clear technical communication from requirement to dispatch.</p>
            </div>
            <div className="flex items-start gap-2.5 border border-slate-200 bg-white p-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#9acd32]" />
              <p className="text-slate-700">Configuration flexibility for dimensions, materials, and operating conditions.</p>
            </div>
            <div className="flex items-start gap-2.5 border border-slate-200 bg-white p-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#9acd32]" />
              <p className="text-slate-700">A product-first approach centered on machine life and uptime.</p>
            </div>
            <div className="flex items-start gap-2.5 border border-slate-200 bg-white p-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#9acd32]" />
              <p className="text-slate-700">Long-term support mindset, not just one-off shipment execution.</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/store/product/telescopic-steel-way-covers"
              className="inline-flex items-center justify-center bg-[#9acd32] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#89b92d]"
            >
              Explore Products
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-700 transition hover:bg-slate-100"
            >
              Make it Yours
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
