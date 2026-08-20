"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import SEO from "@/components/seo/SEO";
import Footer from "@/components/layout/Footer";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleTOC from "@/components/blog/ArticleTOC";
import { blogPosts } from "@/data/blog";

export default function BlogDetail() {
  const { id, slug } = useParams();
  const router = useRouter();
  const currentSlug = typeof slug === "string" ? slug : typeof id === "string" ? id : "";
  const post = blogPosts.find((p) => p.slug === currentSlug || p.id === currentSlug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!post) {
      router.replace("/blog");
    }
  }, [post, router]);

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center text-white/50 text-xl font-serif">
        Article Not Found
      </div>
    );
  }

  // Find related posts (try same category first, then fill with others)
  let relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category);
  
  if (relatedPosts.length < 2) {
    const otherPosts = blogPosts.filter(p => p.id !== post.id && p.category !== post.category);
    relatedPosts = [...relatedPosts, ...otherPosts];
  }
  
  relatedPosts = relatedPosts.slice(0, 2);

  // Schema for SEO
  const seoTitle = post.seoMetadata?.title || `${post.title} · Credence Lighting`;
  const seoDescription = post.seoMetadata?.description || post.excerpt;
  const seoImage = post.heroImage
    ? (post.heroImage.startsWith('http') ? post.heroImage : `https://www.credencelighting.com${post.heroImage}`)
    : 'https://www.credencelighting.com/meta.png';

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "image": [seoImage],
      "datePublished": post.date,
      "dateModified": post.dateModified || post.date,
      "description": seoDescription,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".article-headline", ".article-summary", ".article-tldr"]
      },
      "author": [{
        "@type": "Person",
        "name": post.author || "Credence Lighting Design Team",
        "jobTitle": "Architectural Lighting Consultant",
        "url": "https://www.credencelighting.com/about"
      }],
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.credencelighting.com/#organization",
        "name": "Credence Lighting LLC",
        "url": "https://www.credencelighting.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.credencelighting.com/logo.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.credencelighting.com/blog/${post.slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.credencelighting.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title }
      ]
    }
  ];

  return (
    <div className="bg-transparent min-h-screen">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        type="article"
        image={seoImage}
        schema={schemas}
      />
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-50"
        style={{ scaleX }}
      />

      <main className="pt-24 pb-24">
        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
          <Link href="/blog" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors duration-300 text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 md:px-12 mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm uppercase tracking-widest text-white/50"
          >
            <span className="text-brand-gold font-medium border border-brand-gold/30 px-3 py-1 rounded-button">{post.category}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="article-headline text-fluid-h1 font-serif text-white mb-8"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-3 text-white/60"
          >
            <div className="w-10 h-10 rounded-button bg-white/10 flex items-center justify-center">
              <User size={18} />
            </div>
            <span>By <strong>{post.author}</strong></span>
          </motion.div>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden"
          >
            <Image src={post.heroImage} alt={post.title} fill sizes="100vw" priority className="object-cover" />
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Main Content */}
          <article className="lg:w-2/3">
            {/* Quick Answer Summary Callout for AEO */}
            {post.excerpt && (
              <div className="article-summary bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-xl mb-10 text-white/90">
                <div className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  Key Takeaway &amp; Summary
                </div>
                <p className="text-base md:text-lg leading-relaxed m-0 font-light text-white/80">
                  {post.excerpt}
                </p>
              </div>
            )}

            <ArticleBody blocks={post.contentBlocks} />
            
            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-2">
              <span className="text-white/40 text-sm uppercase tracking-widest mr-4">Tags:</span>
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-button text-xs text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            <ArticleTOC blocks={post.contentBlocks} />
            
            {/* Consultation CTA */}
            <div className="p-8 bg-brand-gold rounded-panel text-black">
              <h3 className="text-2xl font-serif mb-4">Need Expert Advice?</h3>
              <p className="text-black/70 mb-6 text-sm">Speak with our lighting designers to discuss your project requirements.</p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-transparent text-brand-gold px-6 py-3 font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300">
                Book Consultation
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-white/10">
            <h3 className="text-3xl font-serif text-white mb-10 text-center">More Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                  <div className="h-48 rounded-panel overflow-hidden mb-4 relative">
                    <Image src={rp.heroImage} alt={rp.title} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-transparent/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/40 mb-2 uppercase tracking-widest">
                    <span>{rp.category}</span>
                  </div>
                  <h4 className="text-xl font-serif text-white/90 group-hover:text-brand-gold transition-colors">{rp.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
