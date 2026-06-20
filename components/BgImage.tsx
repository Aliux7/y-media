"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionImage = motion.create(Image as any);

type Direction = "up" | "down" | "left" | "right";

interface BgImageProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

const makeVariants = (direction: Direction, distance: number): Variants => {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };
  return {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function BgImage({
  src,
  width,
  height,
  className = "",
  direction = "right",
  delay = 0,
  duration = 0.6,
  distance = 40,
}: BgImageProps) {
  const baseClass = `absolute -z-10 brightness-[.2] ${className}`;

  if (direction) {
    return (
      <MotionImage
        src={src}
        alt=""
        width={width}
        height={height}
        className={baseClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={makeVariants(direction, distance)}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className={baseClass}
    />
  );
}
