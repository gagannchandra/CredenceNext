"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, Wrench, GraduationCap } from "lucide-react";
import SEO from "@/components/seo/SEO";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/motion/PageTransition";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

const SITE_URL = "https://www.credencelighting.com";

// The Journal mixes opinion pieces with reference material. Guides is the
// reference half, pulled from the same source of truth so a new guide only
// ever has to be authored once, in data/blog.js.
const GUIDE_CATEGORIES = [
  {
    name: "Buying Guide",
    icon: Compass,
    blurb: "Choosing between fixture types, finishes and formats before you specify.",
  },
  {
    name: "Technical Guide",
    icon: Wrench,
    blurb: "Installation, control protocols and the practical detail of getting light in.",
  },
  {
    name: "Industry Guide",
    icon: BookOpen,
    blurb: "How the lighting trade works in Dubai and the wider GCC.",
  },
  {
    name: "Educational",
    icon: GraduationCap,
    blurb: "The fundamentals — lumens, lux, CRI, Kelvin, IP ratings and glare.",
  },
];

const GUIDE_CATEGORY_NAMES = GUIDE_CATEGORIES.map((c) => c.name);

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState("All");

  const guides = useMemo(
    () => blogPosts.filter((post) => GUIDE_CATEGORY_NAMES.includes(post.category)),
    []
  );

  const filteredGuides = useMemo(
    () =>
      activeCategory === "All"
        ? guides
        : guides.filter((post) => post.category === activeCategory),
    [guides, activeCategory]
  );

  const countFor = (name) => guides.filter((p) => p.category === name).length;

  return (
    <PageTransition>
      <div className="bg-transparent min-h-screen">
        <SEO
          schema={[
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Lighting Guides · Credence Lighting Dubai",
              description:
                "Practical lighting guides covering fixture selection, installation, control protocols and the technical fundamentals of specifying light.",
              url: `${SITE_URL}/guides`,
              hasPart: guides.map((post) => ({
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                url: `${SITE_URL}/blog/${post.slug}`,
                datePublished: post.date,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE_URL}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Guides",
                  item: `${SITE_URL}/guides`,
                },
              ],
            },
          ]}
        />

        <main className="pt-32 pb-24 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-gold/10 blur-[60px] md:blur-[150px] rounded-button pointer-events-none -z-10" />

          {/* Header */}
          <div className="max-w-3xl mx-auto px-6 md:px-12 mb-16 text-center flex flex-col items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-button bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold tracking-widest uppercase mb-6"
            >
              Reference Library
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-fluid-h1 font-serif text-white mb-6 leading-tight"
            >
              Lighting <span className="text-brand-gold">Guides</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Plain-English references for specifying, buying and installing
              light — from what CRI actually measures to how to pick a dimming
              protocol that won&rsquo;t flicker.
            </motion.p>
          </div>

          {/* Category overview */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GUIDE_CATEGORIES.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;
                return (
                  <motion.button
                    key={category.name}
                    type="button"
                    onClick={() =>
                      setActiveCategory(isActive ? "All" : category.name)
                    }
                    aria-pressed={isActive}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`text-left p-6 rounded-panel border transition-colors duration-300 ${
                      isActive
                        ? "bg-brand-gold/10 border-brand-gold/40"
                        : "bg-surface-elevated border-border-subtle hover:border-brand-gold/30"
                    }`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-brand-gold mb-4"
                    />
                    <p className="text-white font-serif text-lg mb-2">
                      {category.name}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {category.blurb}
                    </p>
                    <p className="text-brand-gold/80 text-[11px] uppercase tracking-[0.2em] font-medium">
                      {countFor(category.name)}{" "}
                      {countFor(category.name) === 1 ? "Guide" : "Guides"}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Filter pills */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {["All", ...GUIDE_CATEGORY_NAMES].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveCategory(name)}
                  aria-pressed={activeCategory === name}
                  className={`px-5 py-2 rounded-button text-xs uppercase tracking-[0.15em] border transition-colors duration-300 ${
                    activeCategory === name
                      ? "bg-brand-gold text-black border-brand-gold font-semibold"
                      : "text-white/60 border-white/15 hover:text-white hover:border-white/40"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Guides grid */}
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-surface-elevated rounded-3xl border border-border-subtle">
                <h3 className="text-2xl text-white font-serif mb-4">
                  No guides in this category yet
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 px-6 py-3 bg-brand-gold text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
                >
                  Show All Guides
                </button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
