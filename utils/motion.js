export const ease = {
  // Apple-like spring / premium ease curves
  standard: [0.22, 1, 0.36, 1], // Confident, smooth
  slow: [0.16, 1, 0.3, 1],      // Cinematic, lingering
  gentle: [0.33, 1, 0.68, 1],   // Softer, subtle
  snappy: [0.25, 1, 0.5, 1],    // Quick but not harsh
};

export const duration = {
  fast: 0.4,
  standard: 0.8,
  slow: 1.2,
  epic: 1.6,
};

// --- Page & Route Transitions ---
export const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: duration.standard, ease: ease.standard }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: duration.fast, ease: ease.standard }
  },
};

// --- Standard Reveals ---
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ease.standard,
      delay: Math.min(custom * 0.05, 0.4), // Cap stagger delay for seamless in-view reveal
    }
  }),
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: duration.standard,
      ease: ease.standard,
      delay: custom * 0.1,
    }
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.standard, ease: ease.standard }
  },
};

// --- Image Reveals ---
export const imageRevealVariants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.slow }
  }
};

export const imageScaleVariants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: duration.epic, ease: ease.slow }
  }
};

// --- Hover States ---
export const premiumHover = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: ease.standard }
  },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.4, ease: ease.standard }
  }
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 }
};
