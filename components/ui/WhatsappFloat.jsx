import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappFloat() {
  return (
    <motion.a
      href="https://wa.me/971564965660?text=Hello%20Credence%20Lighting,%20I%20would%20like%20to%20enquire%20about%20your%20premium%20lighting%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        fixed
        bottom-7
        right-7
        z-[999]
        w-16
        h-16
        rounded-button
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-[0_0_40px_rgba(37,211,102,0.5)]
        hover:shadow-[0_0_60px_rgba(37,211,102,0.8)]
        transition-all
        duration-500
      "
    >
      <FaWhatsapp
        size={34}
        className="text-white"
      />
    </motion.a>
  );
}