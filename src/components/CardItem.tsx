import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CardItemType {
  id: string | undefined;
  name: string | undefined;
  tagline: string | undefined;
  quote: string | undefined;
  image: string | undefined;
  signature: string | undefined;
  background: string | undefined;
}

const CardItem = ({
  id,
  name,
  tagline,
  quote,
  image,
  signature,
  background,
}: CardItemType) => {
  return (
    <div className="flex dg:flex-row flex-col gap-10 items-center z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ x: 300, scale: 0.8 }}
          animate={{ x: 0, scale: 1 }}
          exit={{ x: -300, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="dg:w-[376px] dg:h-[663px] w-[239px] h-[421px] bg-background rounded-xl shadow-[0_32px_32px_0_rgba(0,0,0,0.48)]">
            <div
              className="w-full dg:h-[451px] h-[303px] border-[4px] border-b-0 border-dg-semi-brightY rounded-t-xl bg-dg-red bg-blend-soft-light bg-no-repeat bg-cover relative"
              style={{ backgroundImage: `url(${background})` }}
            >
              <img
                src="/Sports.svg"
                alt="Sports"
                className="z-10 absolute dg:right-4 right-[10px] dg:top-4 top-[10px] dg:w-[56px] dg:h-[56px] w-[35px] h-[35px]"
              />
              <img
                src={signature}
                alt="signature"
                className="absolute dg:top-[61px] top-[41px] dg:left-[53px] left-[33px] z-20 dg:h-auto h-[88px]"
              />
              <img
                src={image}
                alt="image"
                className="absolute -right-1 bottom-0 z-30 dg:w-[318px] dg:h-[424px] w-[202px] h-[285px["
              />
            </div>
            <div className="w-full dg:h-[52px] h-[30px] bg-gradient-to-r from-dg-semi-brightY via-dg-brightY to-dg-semi-brightY text-black font-semibold text-center dg:text-[14px] text-[10px] dg:leading-[20px] leading-[14px] flex items-center justify-center">
              {tagline}
            </div>
            <h1 className="w-full dg:h-[160px] h-[88px] bg-none flex justify-center items-center text-center dg:text-[30px] text-[14px] dg:leading-[40px] leading-[20px] font-semibold dg:px-8 py-10 px-4 uppercase">
              {name}
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col dg:items-start items-center gap-4">
        <Image src="/Quote.svg" alt="Quote" width={41} height={24} />
        <h3 className="dg:text-[24px] text-[18px] dg:leading-[32px] leading-[26px] text-white font-semibold dg:w-[258px] w-[239px] dg:text-start text-center">
          {quote}
        </h3>
      </div>
    </div>
  );
};

export default CardItem;
