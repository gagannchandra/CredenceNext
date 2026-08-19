import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ease, duration } from "../../../utils/motion";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  parallaxAmount = 50,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden ${containerClassName}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden relative ${containerClassName}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px 50px 0px" }}
        transition={{ duration: duration.epic, ease: ease.slow }}
        className="w-full h-full"
      >
        <motion.img
          style={{ y, scale: 1.1 }}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover origin-center ${className}`}
        />
      </motion.div>
    </div>
  );
}
