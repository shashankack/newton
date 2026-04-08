"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  ShieldCheck,
  Target,
  Factory,
  Settings,
  ClipboardCheck,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import catalogData from "../../../../public/catalog.json";
import ProductImageSlider from "../../../../components/ProductImageSlider";

const CAPABILITY_ICONS = [
  <Target key="target" size={30} />,
  <Settings key="settings" size={30} />,
  <Factory key="factory" size={30} />,
  <ShieldCheck key="shield" size={30} />,
];

const DEFAULT_HERO_IMAGE = "/heatsealed.jpg";
const CREDIBILITY_POINTS = [
  "35+ Years Experience",
  "OEM Focused Manufacturing",
  "Custom Engineering",
  "Made in India",
];

const ProductPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const product = catalogData.catalog.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
            404
          </p>
          <h1 className="text-3xl font-black text-slate-900 mb-3">
            Product Not Found
          </h1>
          <p className="text-slate-500">
            No product matching <strong>{slug}</strong>.
          </p>
        </div>
      </div>
    );
  }

  const {
    hero,
    construction_variants,
    materials_expertise,
    design_and_customisation,
    manufacturing_capabilities,
    quality_focus,
    applications_served,
    cta,
  } = product;

  const heroImages: string[] =
    (product as any).media?.length > 0
      ? (product as any).media
      : [DEFAULT_HERO_IMAGE];

  const cardImages = (construction_variants.cards ?? []).map((card) =>
    typeof card.media === "string" && card.media.startsWith("/")
      ? card.media
      : null,
  );

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 py-10">
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="w-full border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-[62%_38%]">
          {/* Left — image panel */}
          <div className="border-b border-slate-100 bg-[#f8f9fa] p-6 lg:border-b-0 lg:border-r lg:p-10 xl:p-16">
            {/* ─── Credibility bar ──────────────────────────────────────────── */}
            <div className="w-full border-b border-slate-100 bg-slate-50">
              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-3 sm:px-6 md:justify-start lg:px-10 xl:px-16">
                {CREDIBILITY_POINTS.map((point) => (
                  <span
                    key={point}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:text-sm"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9acd32]" />
                    {point}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-20">
              <ProductImageSlider images={heroImages} alt={hero.title} />
            </div>
          </div>

          {/* Right — product info */}
          <div className="flex flex-col justify-center px-6 py-10 lg:px-10 xl:px-14 xl:py-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9acd32]">
              Machine Protection Systems
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              {hero.title}
            </h1>

            <div className="mb-7 space-y-3 border-t border-slate-100 pt-6">
              {hero.body.map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed sm:text-lg ${
                    i === 0 ? "font-medium text-slate-700" : "text-slate-500"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mb-7 grid grid-cols-2 gap-2.5">
              {CREDIBILITY_POINTS.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 border border-slate-100 bg-slate-50 px-3 py-2.5"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-[#9acd32]" />
                  <span className="text-sm font-semibold text-slate-600">
                    {p}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
              <button className="flex items-center gap-2 bg-[#9acd32] px-7 py-3.5 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#89b92d]">
                {hero.primary_cta}
                <ChevronRight size={17} />
              </button>
              <button className="flex items-center gap-2 border border-slate-300 bg-white px-7 py-3.5 text-sm font-black uppercase tracking-widest text-slate-700 transition hover:bg-slate-50">
                {hero.secondary_cta}
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Construction Variants ────────────────────────────────────── */}
      {construction_variants.cards &&
        construction_variants.cards.length > 0 && (
          <section className="w-full border-b border-slate-100 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
            <div className="mb-10">
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                Product Range
              </p>
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                {construction_variants.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {construction_variants.cards.map((card, i) => (
                <article
                  key={i}
                  className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#f8f9fa]">
                    {cardImages[i] ? (
                      <img
                        src={cardImages[i]}
                        className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                        alt={card.title}
                      />
                    ) : (
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        {card.title}
                      </span>
                    )}
                    <span className="absolute left-0 top-4 bg-[#9acd32] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                      {card.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-slate-900 sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mb-5 flex-1 text-base leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-sm font-bold uppercase tracking-widest text-[#9acd32]">
                        {card.footer_label}
                      </span>
                      <ChevronRight size={17} className="text-slate-400" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      {/* ─── Materials + Design ───────────────────────────────────────── */}
      {((materials_expertise.items && materials_expertise.items.length > 0) ||
        (design_and_customisation.items &&
          design_and_customisation.items.length > 0)) && (
        <section className="w-full border-b border-slate-100">
          <div className="grid grid-cols-1 divide-y divide-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {materials_expertise.items &&
              materials_expertise.items.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Materials
                  </p>
                  <h2 className="mb-5 text-3xl font-black text-slate-900">
                    {materials_expertise.title}
                  </h2>
                  {materials_expertise.note && (
                    <p className="mb-6 text-base text-slate-500">
                      {materials_expertise.note}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {materials_expertise.items.map((mat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-[#9acd32]" />
                        <span className="text-base font-medium text-slate-700">
                          {mat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {design_and_customisation.items &&
              design_and_customisation.items.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Customisation
                  </p>
                  <h2 className="mb-5 text-3xl font-black text-slate-900">
                    {design_and_customisation.title}
                  </h2>
                  {design_and_customisation.note && (
                    <p className="mb-6 text-base text-slate-500">
                      {design_and_customisation.note}
                    </p>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {design_and_customisation.items.map((text, i) => (
                      <div
                        key={i}
                        className="border border-slate-200 bg-slate-50 p-4 text-base leading-relaxed text-slate-700"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </section>
      )}

      {/* ─── Manufacturing Capabilities ───────────────────────────────── */}
      {manufacturing_capabilities.items &&
        manufacturing_capabilities.items.length > 0 && (
          <section className="w-full bg-slate-900 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                  How We Build It
                </p>
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  {manufacturing_capabilities.title}
                </h2>
              </div>
              {manufacturing_capabilities.note && (
                <p className="max-w-sm text-base text-slate-400 sm:text-right">
                  {manufacturing_capabilities.note}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {manufacturing_capabilities.items.map((text, i) => (
                <div
                  key={i}
                  className="border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="mb-4 text-[#9acd32]">
                    {CAPABILITY_ICONS[i % CAPABILITY_ICONS.length]}
                  </div>
                  <p className="text-base font-semibold leading-snug text-slate-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* ─── Quality + Applications ───────────────────────────────────── */}
      {((quality_focus.items && quality_focus.items.length > 0) ||
        (applications_served.items &&
          applications_served.items.length > 0)) && (
        <section className="w-full border-b border-slate-100">
          <div className="grid grid-cols-1 divide-y divide-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {quality_focus.items && quality_focus.items.length > 0 && (
              <div className="px-6 py-12 lg:px-10 xl:px-16">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                  Standards
                </p>
                <h2 className="mb-6 text-3xl font-black text-slate-900">
                  {quality_focus.title}
                </h2>
                <ul className="space-y-3">
                  {quality_focus.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ClipboardCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-[#9acd32]"
                      />
                      <span className="text-base font-medium text-slate-700">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {applications_served.items &&
              applications_served.items.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Where It's Used
                  </p>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    {applications_served.title}
                  </h2>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {applications_served.items.map((text, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 border border-slate-100 bg-slate-50 px-4 py-3 text-base font-medium text-slate-700"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#9acd32]" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </section>
      )}

      {/* ─── CTA band ─────────────────────────────────────────────────── */}
      <section className="w-full bg-[#9acd32] px-4 py-14 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-1 text-base text-white/80">{cta.subtitle}</p>
          </div>
          <button className="shrink-0 border-2 border-white bg-transparent px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#6fa020]">
            {cta.button}
          </button>
        </div>
      </section>

      {/* SEO: visually hidden keywords */}
      <div className="sr-only">
        Machine Protection Systems for the Global Machine Tool Industry.
        Telescopic Way Covers, CNC Machine Covers, Roll-Up Way Covers, Apron
        Covers, Machine Tool Protection, CNC Machine Enclosures, Sheet Metal
        Machine Enclosures, CNC Machine Guards, Custom Machine Covers. 35+ Years
        Experience, OEM Focused Manufacturing, Custom Engineering, Made in
        India.
      </div>
    </div>
  );
};

export default ProductPage;
