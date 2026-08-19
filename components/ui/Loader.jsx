import { motion, useReducedMotion } from "framer-motion";

export default function Loader({ isInitial = false }) {
  const shouldReduceMotion = useReducedMotion();

  const Container = isInitial ? motion.div : 'div';
  const containerProps = isInitial 
    ? {
        initial: { opacity: 1 },
        exit: { opacity: 0, filter: "blur(10px)" },
        transition: { duration: 0.8, ease: "easeInOut" }
      } 
    : {};

  return (
    <Container 
      {...containerProps}
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${isInitial ? "bg-[var(--color-surface-base)]" : "bg-[var(--color-surface-base)]/90 sm:bg-transparent sm:backdrop-blur-md"}`}
    >

      {/* GOLD AMBIENT GLOW (Responsive) */}
      <div className="absolute w-[100vw] h-[100vw] sm:w-[700px] sm:h-[700px] bg-brand-gold/10 sm:bg-brand-gold/15 blur-[40px] sm:blur-[180px] rounded-full" />

      {/* GRID LIGHT EFFECT */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-4">

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="relative flex items-center justify-center group will-change-transform transform-gpu"
        >
          {/* Sunburst/Glow Effect Background */}
          <div className="absolute inset-0 bg-[#c8a96b]/30 blur-2xl rounded-full scale-[1.5] group-hover:scale-[2] group-hover:bg-[#c8a96b]/40 transition-all duration-700 pointer-events-none"></div>
          
          <img
            src="/logo.svg?v=2"
            alt="Credence Lighting"
            
            fetchPriority="high"
            loading="eager"
            className="relative z-10 h-16 md:h-24 w-auto object-contain drop-shadow-none sm:drop-shadow-[0_0_12px_rgba(200,169,107,0.8)] sm:group-hover:drop-shadow-[0_0_20px_rgba(200,169,107,1)] transition-all duration-500 transform-gpu"
          />
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.4,
            duration: shouldReduceMotion ? 0 : 1,
          }}
          className="mt-5 text-brand-gold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-[10px] sm:text-xs text-center drop-shadow-none sm:drop-shadow-[0_0_10px_rgba(200,169,107,0.5)]"
        >
          Innovative Lighting • Integrated Solutions
        </motion.p>

        {/* LIGHT BAR */}
        <div className="mt-8 sm:mt-10 w-48 sm:w-64 h-[2px] bg-white/10 overflow-hidden rounded-button drop-shadow-[0_0_8px_rgba(200,169,107,0.6)]">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: shouldReduceMotion ? "0%" : "250%" }}
            transition={{
              duration: 1.5,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "linear",
            }}
            className={`h-full bg-brand-gold shadow-none sm:shadow-[0_0_15px_rgba(200,169,107,1)] will-change-transform transform-gpu ${shouldReduceMotion ? 'w-full' : 'w-24'}`}
          />

        </div>

        {/* LOADING */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldReduceMotion ? 1 : [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: shouldReduceMotion ? 0 : Infinity,
          }}
          className="mt-6 text-white/60 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[9px] sm:text-xs drop-shadow-none sm:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
        >
          Initializing Experience
        </motion.p>

      </div>

    </Container>
  );
}