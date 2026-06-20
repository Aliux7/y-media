"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import book1 from "@/app/assets/books/1.jpg";
// Replace with actual images when available:
// import book2 from "@/app/assets/books/2.jpg";
// import book3 from "@/app/assets/books/3.jpg";

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
    <div className="relative h-screen overflow-hidden">
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

      <div className="absolute bottom-8 left-5 z-10">
        <h1 className="text-black uppercase text-3xl">
          {slides[current].title}
        </h1>
        <h1 className="text-black uppercase text-3xl">
          {slides[current].subtitle}
        </h1>

        {/* Indicator bar */}
        <div className="relative w-37.5 h-0.5 mt-9 bg-black/30">
          <div
            className="absolute h-full w-13 bg-black transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(${current} / ${slides.length - 1} * (9.375rem - 3.25rem)))`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
