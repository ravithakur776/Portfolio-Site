"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  amount?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.65,
  amount = 0.2,
  once = true,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  const directions = {
    up:    { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down:  { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left:  { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    none:  { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };

  return (
    <motion.div
      initial={directions[direction].initial}
      whileInView={directions[direction].animate}
      viewport={{ once, amount }}
      transition={
        prefersReducedMotion
          ? { duration: 0, delay: 0 }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
