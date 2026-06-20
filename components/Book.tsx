"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import book1 from "@/app/assets/books/1.jpg";
import AnimatedText from "./TitleAnimatedText";

const slides = [
  { src: book1, title: "THE JAKARTA ART", subtitle: "SIGNATURE COLLECTION" },
  { src: book1, title: "THE SECOND BOOK", subtitle: "CURATED SELECTION" },
  { src: book1, title: "THE THIRD BOOK", subtitle: "SPECIAL EDITION" },
];

const INTERVAL = 4000;

export default function Book() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative xl:h-screen aspect-video xl:aspect-auto w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 lg:bottom-8 left-5 z-10">
        <AnimatedText className="text-black uppercase sm:text-xl lg:text-2xl xl:text-3xl">
          {slides[current].title}
        </AnimatedText>
        <AnimatedText delay={0.5} className="text-black uppercase sm:text-xl lg:text-2xl xl:text-3xl">
          {slides[current].subtitle}
        </AnimatedText>

        {/* Indicator bar */}
        <div className="relative w-24 sm:w-37.5 h-0.5 mt-3 lg:mt-5 xl:mt-9 bg-black/30 [--bar:6rem] sm:[--bar:9.375rem] [--thumb:2rem] sm:[--thumb:3.25rem]">
          <div
            className="absolute h-full w-8 sm:w-13 bg-black transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(${current} / ${slides.length - 1} * (var(--bar) - var(--thumb))))`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
