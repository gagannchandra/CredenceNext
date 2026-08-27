"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/seo/SEO";
import InlineFAQ from "../../components/seo/InlineFAQ";
import FadeUp from "../../components/ui/motion/FadeUp";
import ArticleBody from "../../components/blog/ArticleBody";

import IndustriesWeServe from "../../components/sections/IndustriesWeServe";

export default function IndustryTemplate({
  seo,
  schema,
  hero,
  stats,
  benefits,
  contentBlocks,
  relatedProducts,
  faqs,
}) {
  return (
    <>
      <SEO title={seo.title} description={seo.description} schema={schema} />
      <div className="relative bg-transparent overflow-hidden">
        {/* HERO
            Left-aligned rather than centred: at DESIGN_VARIANCE 6 a centred
            stack repeated across 12 industry pages reads as one template, and
            the ragged-right edge gives the long technical headlines a natural
            break point. */}
        <section className="relative pt-24 pb-20 px-6 md:px-12">
          <div className="absolute top-0 left-0 w-[900px] h-[500px] bg-brand-gold/10 blur-[60px] md:blur-[180px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* The page's only eyebrow. Everything below is headline-led. */}
            <FadeUp>
              <p className="uppercase tracking-[0.35em] text-xs text-brand-gold mb-6">
                {hero.badge}
              </p>
            </FadeUp>
            <FadeUp delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-serif text-white max-w-5xl">
                {hero.title}{" "}
                <span className="italic text-brand-gold leading-[1.1] pb-1 inline-block">
                  {hero.titleItalic}
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </FadeUp>
            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
                {/* One label per intent across the whole page (Section 4.5). */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300 rounded-button"
                >
                  Enquire
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black active:scale-[0.98] transition-[background-color,color,transform] duration-300 rounded-button"
                >
                  View Case Studies
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* STATS - hairline row, no cards */}
        {stats && (
          <section className="relative py-16 border-y border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map(([number, label], index) => (
                <FadeUp key={`${label}-${index}`} delay={index}>
                  <div
                    className={`text-center ${
                      index !== 0 ? "md:border-l md:border-white/10" : ""
                    }`}
                  >
                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                      {number}
                    </p>
                    <p className="text-xs text-white/50 leading-snug">{label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>
        )}

        {/* EXPERTISE
            An auto-fit grid, so N benefits produce exactly N cells - the old
            fixed 3-column grid left a hole whenever a page passed 4 items
            (Section 4.7 bento cell count). */}
        {benefits && benefits.length > 0 && (
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-14 max-w-2xl">
                  Our Industry Expertise
                </h2>
              </FadeUp>
              <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <FadeUp
                      key={benefit.title ? `${benefit.title}-${index}` : `benefit-${index}`}
                      delay={index}
                    >
                      <div className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-colors duration-500 h-full">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10">
                          {Icon && (
                            <div className="w-12 h-12 rounded-button bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-500 mb-6">
                              <Icon
                                className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500"
                                strokeWidth={1.5}
                                aria-hidden="true"
                              />
                            </div>
                          )}
                          <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* LONG-FORM CONTENT - prose column, breaks the card rhythm */}
        {contentBlocks && (
          <section className="py-20 px-6 md:px-12 bg-white/[0.01] border-y border-white/10">
            <div className="max-w-4xl mx-auto">
              <ArticleBody blocks={contentBlocks} />
            </div>
          </section>
        )}

        {/* RECOMMENDED SYSTEMS
            Editorial grid: the first product runs full-width with a wide crop,
            the rest sit in an auto-fit row beneath it. Keeps this section from
            reading like a third identical card wall (Section 4.7). */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-white">
                    Recommended Systems
                  </h2>
                  <Link
                    href="/products"
                    className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-widest">
                      All products
                    </span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </FadeUp>

              {(() => {
                const [lead, ...rest] = relatedProducts;
                return (
                  <div className="space-y-6">
                    <FadeUp>
                      <Link
                        href={lead.link}
                        className="group grid md:grid-cols-2 items-stretch border border-white/10 rounded-panel overflow-hidden bg-white/[0.02] hover:border-brand-gold/30 transition-colors duration-500"
                      >
                        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
                          <Image
                            src={lead.image}
                            alt={lead.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors">
                            {lead.title}
                          </h3>
                          <p className="text-white/60 leading-relaxed">
                            {lead.description}
                          </p>
                        </div>
                      </Link>
                    </FadeUp>

                    {rest.length > 0 && (
                      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
                        {rest.map((product, index) => (
                          <FadeUp
                            key={product.title ? `${product.title}-${index}` : `prod-${index}`}
                            delay={index}
                          >
                            <Link
                              href={product.link}
                              className="group block h-full border border-white/10 rounded-panel overflow-hidden bg-white/[0.02] hover:border-brand-gold/30 transition-colors duration-500"
                            >
                              <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">
                                  {product.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          </FadeUp>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        <IndustriesWeServe />

        {faqs && (
          <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
              <InlineFAQ faqs={faqs} />
            </div>
          </section>
        )}

        {/* CLOSING CTA - same intent, same label as the hero */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold opacity-10" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Ready to discuss your project?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Talk to our lighting designers about the fixtures, controls, and
                compliance your space needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 bg-brand-gold text-black text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300 rounded-button"
              >
                Enquire
              </Link>
            </FadeUp>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
