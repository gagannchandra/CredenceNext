import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FaqAccordionItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.details
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-white/10 last:border-0 group marker:content-none"
      open={isOpen}
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="w-full py-6 flex items-start justify-between gap-6 text-center md:text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden"
      >
        <span className="text-lg md:text-xl font-medium text-white/90 group-hover:text-brand-gold transition-colors duration-300">
          {faq.question}
        </span>
        <div className="flex-shrink-0 mt-1 relative w-6 h-6 flex items-center justify-center rounded-button border border-white/20 group-hover:border-brand-gold/50 transition-colors duration-300">
          <Plus 
            size={14} 
            className={`absolute text-white/60 group-hover:text-brand-gold transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
          />
          <Minus 
            size={14} 
            className={`absolute text-white/60 group-hover:text-brand-gold transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} 
          />
        </div>
      </summary>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-white/60 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.details>
  );
}
