"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const renderText = (text) => {
  if (typeof text !== 'string') return text;

  // Split by bold (**...**) and links ([...](...))
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const url = linkMatch[2];
      if (url.startsWith('/')) {
        return <Link key={index} href={url} className="text-brand-gold hover:underline">{label}</Link>;
      }
      return <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">{label}</a>;
    }
    
    // Handle plain text and newlines
    const lines = part.split('\n');
    return lines.map((line, i) => (
      <React.Fragment key={`${index}-${i}`}>
        {line}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  });
};

export default function ArticleBody({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="mb-6 text-white/70 text-base leading-relaxed">
                {renderText(block.content)}
              </p>
            );
          case "tldr":
          case "takeaways":
            return (
              <div key={index} className="article-tldr bg-brand-gold/10 border border-brand-gold/40 p-6 rounded-card my-8 shadow-elevation-low">
                <div className="flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-wider text-xs mb-3">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Key takeaways</span>
                </div>
                <div className="text-white/90 text-base leading-relaxed">
                  {renderText(block.content)}
                </div>
              </div>
            );
          case "heading2":
            return (
              <h2 
                key={index} 
                id={(typeof block.content === "string" ? block.content : "").toLowerCase().replace(/[^a-z0-9]+/g, '-')} 
                className="text-2xl md:text-3xl font-serif text-white mt-12 mb-5 scroll-mt-28"
              >
                {renderText(block.content)}
              </h2>
            );
          case "heading3":
            return (
              <h3 
                key={index} 
                id={(typeof block.content === "string" ? block.content : "").toLowerCase().replace(/[^a-z0-9]+/g, '-')} 
                className="text-lg md:text-xl font-serif text-brand-gold mt-10 mb-3 scroll-mt-28"
              >
                {renderText(block.content)}
              </h3>
            );
          case "quote":
            return (
              <blockquote key={index} className="border-l-4 border-brand-gold pl-6 my-10 italic text-xl md:text-2xl font-serif text-white/90">
                &ldquo;{renderText(block.content)}&rdquo;
              </blockquote>
            );
          case "callout":
            return (
              <div key={index} className="bg-brand-gold/10 border border-brand-gold/30 p-6 rounded-card my-8">
                <p className="text-brand-gold m-0 font-medium text-base leading-relaxed">{renderText(block.content)}</p>
              </div>
            );
          case "image":
            return (
              <figure key={index} className="my-10">
                <div className="relative w-full rounded-panel overflow-hidden bg-surface-elevated">
                  <Image
                    src={block.url}
                    alt={block.caption || "Credence Lighting architectural guide diagram"}
                    width={1200}
                    height={700}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    className="w-full h-auto object-cover rounded-panel"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-sm text-white/50 mt-3">{renderText(block.caption)}</figcaption>
                )}
              </figure>
            );
          case "list":
            return (
              <ul key={index} className="list-disc list-outside pl-5 mb-6 text-white/70 text-base leading-relaxed space-y-3 marker:text-brand-gold/60">
                {block.items.map((item, i) => (
                  <li key={i}>{renderText(item)}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto mb-8 border border-white/10 rounded-card">
                <table className="w-full text-center md:text-left text-white/80">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i} className="px-6 py-4 font-serif text-brand-gold">{renderText(header)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i} className="border-b border-border-subtle last:border-0 hover:bg-white/[0.02]">
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4">{renderText(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
