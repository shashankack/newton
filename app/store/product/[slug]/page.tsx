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

type TextListSection = {
  title?: string;
  note?: string;
  items?: string[];
};

type HeroMedia = {
  type?: string;
  note?: string;
};

type HeroSection = {
  title?: string;
  body?: string[];
  primary_cta?: string;
  secondary_cta?: string;
  hero_media?: HeroMedia;
};

type VariantCard = {
  tag?: string;
  title?: string;
  description?: string;
  footer_label?: string;
  media?: string | string[];
};

type DetailedVariantSection = {
  title?: string;
  body?: string[];
  media?: string | string[];
};

type ConstructionVariants = {
  title?: string;
  cards?: VariantCard[];
  type_sections_with_pictures?: DetailedVariantSection[];
};

type CapabilitySheet = {
  title?: string;
  usage?: string[];
  content_blocks?: string[];
  media?: string | string[];
};

type CtaSection = {
  title?: string;
  subtitle?: string;
  button?: string;
};

type Product = {
  id: string;
  hero?: HeroSection;
  media?: string[];
  construction_variants?: ConstructionVariants;
  materials_expertise?: TextListSection;
  design_and_customisation?: TextListSection;
  manufacturing_capabilities?: TextListSection;
  quality_focus?: TextListSection;
  applications_served?: TextListSection;
  capability_sheet?: CapabilitySheet;
  cta?: CtaSection;
};

const normalizeTextList = (value?: string[]) =>
  Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === "string")
    : [];

const normalizeMediaList = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value.filter(
      (entry): entry is string => typeof entry === "string" && entry.startsWith("/"),
    );
  }

  if (typeof value === "string" && value.startsWith("/")) {
    return [value];
  }

  return [];
};

const firstMedia = (value?: string | string[]) => normalizeMediaList(value)[0] ?? null;

const hasContent = (value?: string[]) => normalizeTextList(value).length > 0;

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

  const catalog = (catalogData as { catalog: Product[] }).catalog;
  const product = catalog.find((p) => p.id === slug);

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

  const hero = product.hero ?? {};
  const constructionVariants = product.construction_variants ?? {};
  const materialsExpertise = product.materials_expertise ?? {};
  const designAndCustomisation = product.design_and_customisation ?? {};
  const manufacturingCapabilities = product.manufacturing_capabilities ?? {};
  const qualityFocus = product.quality_focus ?? {};
  const applicationsServed = product.applications_served ?? {};
  const capabilitySheet = product.capability_sheet ?? {};
  const cta = product.cta ?? {};

  const heroBody = normalizeTextList(hero.body);
  const heroImages = normalizeMediaList(product.media);
  const effectiveHeroImages = heroImages.length > 0 ? heroImages : [DEFAULT_HERO_IMAGE];

  const variantCards = constructionVariants.cards ?? [];
  const detailedVariantSections = constructionVariants.type_sections_with_pictures ?? [];

  const materialItems = normalizeTextList(materialsExpertise.items);
  const designItems = normalizeTextList(designAndCustomisation.items);
  const manufacturingItems = normalizeTextList(manufacturingCapabilities.items);
  const qualityItems = normalizeTextList(qualityFocus.items);
  const applicationItems = normalizeTextList(applicationsServed.items);
  const capabilityUsage = normalizeTextList(capabilitySheet.usage);
  const capabilityBlocks = normalizeTextList(capabilitySheet.content_blocks);

  const cardImages = variantCards.map((card) => firstMedia(card.media));

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
              <ProductImageSlider
                images={effectiveHeroImages}
                alt={hero.title ?? product.id}
              />
            </div>
          </div>

          {/* Right — product info */}
          <div className="flex flex-col justify-center px-6 py-10 lg:px-10 xl:px-14 xl:py-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9acd32]">
              Machine Protection Systems
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              {hero.title ?? product.id}
            </h1>

            <div className="mb-7 space-y-3 border-t border-slate-100 pt-6">
              {heroBody.map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed sm:text-lg ${
                    i === 0 ? "font-medium text-slate-700" : "text-slate-500"
                  }`}
                >
                  {para}
                </p>
              ))}
              {heroBody.length === 0 && (
                <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
                  Product details are available on request.
                </p>
              )}
              {hero.hero_media?.note && (
                <p className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {hero.hero_media.note}
                </p>
              )}
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
                {hero.primary_cta ?? "CONTACT US"}
                <ChevronRight size={17} />
              </button>
              <button className="flex items-center gap-2 border border-slate-300 bg-white px-7 py-3.5 text-sm font-black uppercase tracking-widest text-slate-700 transition hover:bg-slate-50">
                {hero.secondary_cta ?? "APPLICATIONS"}
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Construction Variants ────────────────────────────────────── */}
      {variantCards.length > 0 && (
          <section className="w-full border-b border-slate-100 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
            <div className="mb-10">
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                Product Range
              </p>
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                {constructionVariants.title ?? "CONSTRUCTION VARIANTS"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {variantCards.map((card, i) => (
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
                        alt={card.title ?? `variant-${i + 1}`}
                      />
                    ) : (
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        {card.title ?? `Variant ${i + 1}`}
                      </span>
                    )}
                    <span className="absolute left-0 top-4 bg-[#9acd32] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                      {card.tag ?? "PROFILE"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-slate-900 sm:text-xl">
                      {card.title ?? `Variant ${i + 1}`}
                    </h3>
                    <p className="mb-5 flex-1 text-base leading-relaxed text-slate-600">
                      {card.description ?? "Custom profile information available on request."}
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-sm font-bold uppercase tracking-widest text-[#9acd32]">
                        {card.footer_label ?? "DETAILS"}
                      </span>
                      <ChevronRight size={17} className="text-slate-400" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
      )}

      {/* ─── Detailed Profile Sections ───────────────────────────────── */}
      {detailedVariantSections.length > 0 && (
        <section className="w-full border-b border-slate-100 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
          <div className="mb-10">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
              Technical Details
            </p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Profile Families
            </h2>
          </div>

          <div className="space-y-8">
            {detailedVariantSections.map((section, i) => {
              const lines = normalizeTextList(section.body);
              const mediaSrc = firstMedia(section.media);

              return (
                <article
                  key={i}
                  className="grid grid-cols-1 gap-6 border border-slate-200 bg-white p-5 md:grid-cols-[1fr_360px] md:p-7"
                >
                  <div>
                    <h3 className="mb-4 text-2xl font-black text-slate-900">
                      {section.title ?? `Profile ${i + 1}`}
                    </h3>
                    <ul className="space-y-2.5">
                      {lines.map((line, lineIdx) => (
                        <li key={lineIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#9acd32]" />
                          <span className="text-base leading-relaxed text-slate-700">
                            {line}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center overflow-hidden bg-slate-50">
                    {mediaSrc ? (
                      <img
                        src={mediaSrc}
                        alt={section.title ?? `profile-${i + 1}`}
                        className="h-full w-full object-contain p-3"
                      />
                    ) : (
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        No media available
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── Materials + Design ───────────────────────────────────────── */}
      {(materialItems.length > 0 || designItems.length > 0) && (
        <section className="w-full border-b border-slate-100">
          <div className="grid grid-cols-1 divide-y divide-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {materialItems.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Materials
                  </p>
                  <h2 className="mb-5 text-3xl font-black text-slate-900">
                    {materialsExpertise.title ?? "MATERIALS"}
                  </h2>
                  {materialsExpertise.note && (
                    <p className="mb-6 text-base text-slate-500">
                      {materialsExpertise.note}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {materialItems.map((mat, i) => (
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

            {designItems.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Customisation
                  </p>
                  <h2 className="mb-5 text-3xl font-black text-slate-900">
                    {designAndCustomisation.title ?? "CUSTOMISATION"}
                  </h2>
                  {designAndCustomisation.note && (
                    <p className="mb-6 text-base text-slate-500">
                      {designAndCustomisation.note}
                    </p>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {designItems.map((text, i) => (
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
      {manufacturingItems.length > 0 && (
          <section className="w-full bg-slate-900 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                  How We Build It
                </p>
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  {manufacturingCapabilities.title ?? "MANUFACTURING CAPABILITIES"}
                </h2>
              </div>
              {manufacturingCapabilities.note && (
                <p className="max-w-sm text-base text-slate-400 sm:text-right">
                  {manufacturingCapabilities.note}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {manufacturingItems.map((text, i) => (
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
      {(qualityItems.length > 0 || applicationItems.length > 0) && (
        <section className="w-full border-b border-slate-100">
          <div className="grid grid-cols-1 divide-y divide-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {qualityItems.length > 0 && (
              <div className="px-6 py-12 lg:px-10 xl:px-16">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                  Standards
                </p>
                <h2 className="mb-6 text-3xl font-black text-slate-900">
                  {qualityFocus.title ?? "QUALITY & INSPECTION"}
                </h2>
                <ul className="space-y-3">
                  {qualityItems.map((text, i) => (
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

            {applicationItems.length > 0 && (
                <div className="px-6 py-12 lg:px-10 xl:px-16">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                    Where It's Used
                  </p>
                  <h2 className="mb-6 text-3xl font-black text-slate-900">
                    {applicationsServed.title ?? "APPLICATIONS"}
                  </h2>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {applicationItems.map((text, i) => (
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

      {/* ─── Capability Sheet ─────────────────────────────────────────── */}
      {(capabilitySheet.title ||
        capabilityUsage.length > 0 ||
        capabilityBlocks.length > 0 ||
        hasContent(normalizeMediaList(capabilitySheet.media))) && (
        <section className="w-full border-b border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                Document Support
              </p>
              <h2 className="mb-5 text-3xl font-black text-slate-900 sm:text-4xl">
                {capabilitySheet.title ?? "CAPABILITY SHEET"}
              </h2>

              {capabilityUsage.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {capabilityUsage.map((useCase, i) => (
                    <span
                      key={i}
                      className="border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              )}

              {capabilityBlocks.length > 0 && (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {capabilityBlocks.map((block, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#9acd32]" />
                      {block}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <aside className="border border-slate-200 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
                Asset Reference
              </p>
              {firstMedia(capabilitySheet.media) ? (
                <img
                  src={firstMedia(capabilitySheet.media) ?? ""}
                  alt={capabilitySheet.title ?? "Capability sheet"}
                  className="h-56 w-full object-contain"
                />
              ) : (
                <p className="text-sm leading-relaxed text-slate-600">
                  {typeof capabilitySheet.media === "string"
                    ? capabilitySheet.media
                    : "Capability media reference can be configured in catalog.json."}
                </p>
              )}
            </aside>
          </div>
        </section>
      )}

      {/* ─── CTA band ─────────────────────────────────────────────────── */}
      {(cta.title || cta.subtitle || cta.button) && (
        <section className="w-full bg-[#9acd32] px-4 py-14 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                {cta.title ?? "CONTACT & TECHNICAL SUPPORT"}
              </h2>
              <p className="mt-1 text-base text-white/80">
                {cta.subtitle ?? "Share your requirement with our technical team."}
              </p>
            </div>
            <button className="shrink-0 border-2 border-white bg-transparent px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#6fa020]">
              {cta.button ?? "ENQUIRE NOW"}
            </button>
          </div>
        </section>
      )}

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
