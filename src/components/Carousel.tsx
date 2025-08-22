"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CardItem from "@/components/CardItem";

interface CardItemType {
  id: string | undefined;
  name: string | undefined;
  tagline: string | undefined;
  quote: string | undefined;
  image: string | undefined;
  signature: string | undefined;
  background: string | undefined;
}

export default function Carousel({ cards }: { cards: CardItemType[] }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth(); // set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {/* Arrows */}
      <div className="w-full dg:max-w-[1133px] max-w-auto flex justify-between absolute z-20 px-8">
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
      <div className="w-full relative flex dg:items-center items-start dg:mt-0 -mt-[700px] justify-center">
        {cards.map((card, i) => {
          const center = width / 2;
          const cardWidth = width >= 1200 ? 376 : 239;
          const gap = width >= 1200 ? width / 2 : cardWidth + 25;
          const areaWidth = width >= 1200 ? 674 : cardWidth;
          const xAxis =
            i === index
              ? (width - areaWidth) / 2
              : center + gap * (i - index) - cardWidth / 2;
          return (
            <CardItem
              key={card.id}
              {...card}
              className={`absolute`}
              style={{ left: xAxis }}
              isSelected={i === index}
              isMobileView={width < 1200}
            />
          );
        })}
      </div>
    </>
  );
}
