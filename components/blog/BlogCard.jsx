"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 50px 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-surface-elevated border border-border-subtle rounded-panel overflow-hidden hover:border-brand-gold/30 transition-colors duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-transparent/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-button">
          <span className="text-xs uppercase tracking-wider text-brand-gold font-medium">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="w-1 h-1 rounded-button bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl md:text-2xl font-serif text-white/90 mb-3 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-white/60 text-base leading-[1.8] mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest"
        >
          Read Article
          <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
