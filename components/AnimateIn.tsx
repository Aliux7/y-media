"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface AnimateInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const makeVariants = (direction: Direction, distance: number): Variants => {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up:    { x: 0, y: distance },
    down:  { x: 0, y: -distance },
    left:  { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return {
    hidden:  { opacity: 0, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 40,
  className,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={makeVariants(direction, distance)}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
