import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface CardItemType {
  id?: string;
  name?: string;
  tagline?: string;
  quote?: string;
  image?: string;
  signature?: string;
  background?: string;
  className?: string | null;
  style?: React.CSSProperties;
  isSelected?: boolean;
  isMobileView?: boolean;
}

const CardItem = ({
  id,
  name,
  tagline,
  quote,
  image,
  signature,
  background,
  className,
  style,
  isSelected,
  isMobileView,
}: CardItemType) => {
  return (
    <div
      className={classNames(
        "flex dg:flex-row flex-col gap-10 items-center z-10 transition-all ease-in-out duration-500",
        className
      )}
      style={style}
    >
      <div
        className="dg:w-[376px] dg:h-[663px] w-[239px] h-[421px] bg-background rounded-xl shadow-[0_32px_32px_0_rgba(0,0,0,0.48)] transition-all ease-in-out duration-500"
        style={{
          scale: isSelected ? 1 : 0.8,
          marginTop: isSelected || !isMobileView ? 0 : 41.1,
        }}
      >
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
            className="absolute -right-1 bottom-0 z-30 dg:w-[318px] dg:h-[424px] w-[202px] h-[285px]"
          />
        </div>
        <div className="w-full dg:h-[52px] h-[30px] bg-gradient-to-r from-dg-semi-brightY via-dg-brightY to-dg-semi-brightY text-black font-semibold text-center dg:text-[14px] text-[10px] dg:leading-[20px] leading-[14px] flex items-center justify-center">
          {tagline}
        </div>
        <h1 className="w-full dg:h-[160px] h-[88px] bg-none flex justify-center items-center text-center dg:text-[30px] text-[14px] dg:leading-[40px] leading-[20px] font-semibold dg:px-8 py-10 px-4 uppercase">
          {name}
        </h1>
      </div>
      <div
        className="flex flex-col dg:items-start items-center gap-4 transition-all ease-in duration-500"
        style={{
          // display: isSelected ? "flex" : "none",
          opacity: isSelected ? 1 : 0,
        }}
      >
        <Image src="/Quote.svg" alt="Quote" width={41} height={24} />
        <h3 className="dg:text-[24px] text-[18px] dg:leading-[32px] leading-[26px] text-white font-semibold dg:w-[258px] w-[239px] dg:text-start text-center">
          {quote}
        </h3>
      </div>
    </div>
  );
};

export default CardItem;
