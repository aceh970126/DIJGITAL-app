"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CardItem from "@/components/CardItem";

interface CardItemType {
  _id: string | undefined;
  name: string | undefined;
  tagline: string | undefined;
  quote: string | undefined;
  image: string | undefined;
  signature: string | undefined;
  background: string | undefined;
}

export default function Carousel({ cards }: { cards: CardItemType[] }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <>
      {/* Arrows */}
      <div className="min-w-[1133px] flex justify-between absolute z-20 px-8">
        <button
          onClick={prevSlide}
          className="cursor-pointer hover:opacity-50 transition"
        >
          <Image src="/Larrow.svg" alt="Prev" width={24} height={42} />
        </button>
        <button
          onClick={nextSlide}
          className="cursor-pointer hover:opacity-50 transition"
        >
          <Image src="/Rarrow.svg" alt="Next" width={24} height={42} />
        </button>
      </div>

      {/* Slider */}
      <div className="w-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[index]._id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            <CardItem {...cards[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
