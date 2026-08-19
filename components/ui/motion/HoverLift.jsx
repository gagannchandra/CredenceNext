import { motion, useReducedMotion } from "framer-motion";
import { premiumHover } from "../../../utils/motion";

export default function HoverLift({ children, className = "", as: Component = "div" }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[Component] || motion.div;

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      variants={premiumHover}
      initial="rest"
      whileHover="hover"
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
