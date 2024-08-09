"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CarouselData = {
  title:
    "First U.S. institutional asset manager focused exclusively on blockchain technology.",
  contents:
    "Since 2013, Pantera has invested in digital assets and blockchain companies, providing investors with the full spectrum of exposure to the space.",
};

export default function HeroSection() {
  return (
    <div className="outpadding section-hero grid1 flex mx-auto items-center justify-center">
      <div className=" flex justify-center">
        <div className="relative w-full h-full flex items-center">
          <div>
            <h1>{CarouselData.title}</h1>
            <p
              className="sub-title mt-6 sm:mt-10 max-w-[800px]"
              style={{ fontFamily: "NeoGramCondensed", letterSpacing: "-0.02rem" }}
            >
              {CarouselData.contents}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
