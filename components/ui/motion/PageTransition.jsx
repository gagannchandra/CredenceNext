"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageTransitionVariants } from "../../../utils/motion";

export default function PageTransition({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}
