import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function InlineFAQ({ faqs, heading = "Frequently Asked Questions" }) {
  const [openId, setOpenId] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">
        {heading}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-white/10 rounded-panel overflow-hidden bg-white/[0.02] backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-center md:text-left gap-4 group"
              >
                <span className="text-white text-base md:text-lg font-medium leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-white/40"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/60 text-base leading-relaxed border-t border-border-subtle pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
