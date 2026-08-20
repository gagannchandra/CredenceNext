"use client";

import Image from "next/image";
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
      <div className={`overflow-hidden relative ${containerClassName}`}>
        <Image 
          src={src} 
          alt={alt} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover ${className}`} 
        />
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
        className="w-full h-full relative"
      >
        <motion.div
          style={{ y, scale: 1.1 }}
          className={`w-full h-full relative origin-center ${className}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
