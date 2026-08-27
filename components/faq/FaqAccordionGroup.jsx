"use client";

import FaqAccordionItem from "./FaqAccordionItem";

export default function FaqAccordionGroup({ category, faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div id={`faq-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="scroll-mt-32 mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-gold">
          {category}
        </h2>
        <div className="h-px bg-white/10 flex-grow" />
      </div>
      
      <div className="bg-surface-elevated/50 border border-border-subtle rounded-panel px-6 md:px-10">
        {faqs.map((faq, index) => (
          <FaqAccordionItem key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </div>
  );
}
