"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

export default function WhatsappFloat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/971564965660?text=Hello%20Credence%20Lighting,%20I%20would%20like%20to%20enquire%20about%20your%20premium%20lighting%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={shouldReduceMotion ? false : { scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-button bg-[#25D366] shadow-elevation-high transition-shadow duration-300 hover:shadow-elevation-low"
    >
      <FaWhatsapp size={28} className="text-white" aria-hidden="true" />
    </motion.a>
  );
}
