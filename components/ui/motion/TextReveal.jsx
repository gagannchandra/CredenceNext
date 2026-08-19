import { motion, useReducedMotion } from "framer-motion";
import { ease, duration } from "../../../utils/motion";

export default function TextReveal({
  text,
  as: Component = "span",
  className = "",
  delay = 0,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  // Split text by lines for line-by-line reveal
  // We can just split by words for a generic word reveal if we prefer
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.standard,
        ease: ease.standard,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  const MotionComponent = motion[Component] || motion.span;

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0, margin: "0px 0px 50px 0px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden mr-[0.25em] pb-4 -mb-4 pt-2 -mt-2 inline-block">
          <motion.span variants={child} className="inline-block pr-1">
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}
