import React from "react";
import Image from "next/image";

interface CardItemPropsType {
  name: string | undefined;
  tagline: string | undefined;
  quote: string | undefined;
  image: string | undefined;
  signature: string | undefined;
  background: string | undefined;
}

const CardItem = ({
  name,
  tagline,
  quote,
  image,
  signature,
  background,
}: CardItemPropsType) => {
  return (
    <div className="flex flex-row items-center z-10">
      <div className="w-[376px] h-[663px] bg-background rounded-xl shadow-[0_32px_32px_0_rgba(0,0,0,0.48)] mr-10">
        <div
          className="w-full h-[451px] border-[4px] border-b-0 border-dg-semi-brightY rounded-t-xl bg-dg-red bg-blend-soft-light bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Image
            src="/Sports.svg"
            alt="Sports"
            width={56}
            height={56}
            className="z-10 absolute right-4 top-4"
          />
          <img
            src={signature}
            alt="signature"
            className="absolute top-[61px] left-[53px] z-20"
          />
          <img
            src={image}
            alt="image"
            className="absolute -right-1 bottom-0 z-30 w-[318px] h-[424px]"
          />
        </div>
        <div className="w-full h-[52px] bg-gradient-to-r from-dg-semi-brightY via-dg-brightY to-dg-semi-brightY px-2 py-4 text-black font-semibold text-center text-[14px] leading-[20px]">
          {tagline}
        </div>
        <h1 className="w-full h-[160px] bg-none flex justify-center items-center text-center text-[30px] leading-[40px] font-semibold px-8 py-10 uppercase">
          {name}
        </h1>
      </div>
      <div className="flex flex-col justify-start gap-4">
        <Image src="/Quote.svg" alt="Quote" width={41} height={24} />
        <h3 className="text-[24px] leading-[32px] text-white font-semibold w-[258px]">
          {quote}
        </h3>
      </div>
    </div>
  );
};

export default CardItem;
