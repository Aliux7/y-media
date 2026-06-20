"use client";

import { motion, useInView, Variants } from "motion/react";
import { CSSProperties, useRef } from "react";

type AnimationVariant = "fadeUp" | "fadeIn" | "slideLeft" | "reveal";
type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
type Mode = "normal" | "mirror";

interface AnimatedTextProps {
  children: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: Tag;
  stagger?: boolean;
  mode?: Mode;
}

const fadeVariants: Record<Exclude<AnimationVariant, "reveal">, Variants> = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
};

const clipUp: Variants = { hidden: { y: "105%" }, visible: { y: 0 } };

const makeStagger = (delay: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

const motionEls = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

const reflectionWrap: CSSProperties = {
  position: "absolute",
  top: "85%",
  left: 0,
  right: 0,
  zIndex: -10,
  opacity: 0.12,
  maskImage: "linear-gradient(to bottom, black, transparent 70%)",
  WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
};

// Outer div flips via CSS; Motion only handles y translate inside
const flipWrap: CSSProperties = {
  transform: "scaleY(-1)",
  filter: "blur(1px)",
};

// ── RevealText ───────────────────────────────────────────────────────────────
// Needs its own component so hooks (useRef, useInView) are called
// unconditionally. whileInView cannot be used here: the text starts at
// y:"105%" which puts it outside the overflow:hidden clip box, so the
// Intersection Observer sees zero intersection and never fires. Instead we
// observe the wrapper div (always at its natural layout position) and drive
// the motion elements with animate={isInView ? "visible" : "hidden"}.
function RevealText({
  children,
  delay = 0,
  duration = 0.7,
  className,
  as: tag = "p",
  stagger = false,
  mode = "normal",
}: AnimatedTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true });
  const MotionEl = motionEls[tag];
  const ease = "easeInOut";
  const animate = isInView ? "visible" : "hidden";
  const words = children.split(" ");

  function staggerBlock(wordVariant: Variants, extraDelay = 0) {
    return (
      <MotionEl
        className={className}
        initial="hidden"
        animate={animate}
        variants={makeStagger(delay + extraDelay)}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              marginRight: "0.25em",
            }}
          >
            <motion.span
              variants={wordVariant}
              transition={{ duration, ease }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </MotionEl>
    );
  }

  if (stagger) {
    if (mode === "mirror") {
      return (
        <div ref={wrapperRef} style={{ position: "relative" }}>
          {staggerBlock(clipUp)}
          <div style={reflectionWrap}>
            <div style={flipWrap}>{staggerBlock(clipUp, 0.1)}</div>
          </div>
        </div>
      );
    }
    return <div ref={wrapperRef}>{staggerBlock(clipUp)}</div>;
  }

  const original = (
    <div style={{ overflow: "hidden" }}>
      <MotionEl
        className={className}
        initial="hidden"
        animate={animate}
        variants={clipUp}
        transition={{ duration, delay, ease }}
      >
        {children}
      </MotionEl>
    </div>
  );

  if (mode === "mirror") {
    return (
      <div ref={wrapperRef} style={{ position: "relative" }}>
        {original}
        <div style={reflectionWrap}>
          <div style={{ overflow: "hidden", ...flipWrap }}>
            <MotionEl
              className={className}
              initial="hidden"
              animate={animate}
              variants={clipUp}
              transition={{ duration, delay: delay + 0.1, ease }}
            >
              {children}
            </MotionEl>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={wrapperRef}>{original}</div>;
}

export default function AnimatedText({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className,
  as: tag = "p",
  stagger = false,
  mode = "normal",
}: AnimatedTextProps) {
  if (variant === "reveal") {
    return (
      <RevealText
        as={tag}
        delay={delay}
        duration={duration}
        className={className}
        stagger={stagger}
        mode={mode}
      >
        {children}
      </RevealText>
    );
  }

  /* ── FADE / SLIDE variants ──────────────────────────────────────────── */
  const MotionEl = motionEls[tag];
  const ease = "easeInOut";
  const activeVariant =
    fadeVariants[variant as Exclude<AnimationVariant, "reveal">];
  const words = children.split(" ");

  function renderFadeBlock(extraDelay = 0) {
    if (stagger) {
      return (
        <MotionEl
          className={className}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={makeStagger(delay + extraDelay)}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={activeVariant}
              transition={{ duration, ease }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </MotionEl>
      );
    }
    return (
      <MotionEl
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={activeVariant}
        transition={{ duration, delay: delay + extraDelay, ease }}
      >
        {children}
      </MotionEl>
    );
  }

  if (mode === "mirror") {
    return (
      <div style={{ position: "relative" }}>
        {renderFadeBlock()}
        <div style={reflectionWrap}>
          <div style={flipWrap}>{renderFadeBlock(0.1)}</div>
        </div>
      </div>
    );
  }

  return renderFadeBlock();
}
