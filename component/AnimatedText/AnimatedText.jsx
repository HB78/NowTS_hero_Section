"use client";
import { easeInOut, motion } from "framer-motion";

export const AnimatedText = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: easeInOut,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
