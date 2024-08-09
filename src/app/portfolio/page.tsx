"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/lib/components/layout/Footer";
import portfolio from "./portfolio.json";
import Link from "next/link";

const Portfolio = () => {
  const [row, setRow] = useState<number>();

  const clickRow = (index: number) => {
    setRow(index);
  };
  return (
    <div>
      <div className="md:section-hero outpadding md:pt-0 pt-[150px] pb-[70px] flex flex-col grid1 mx-auto md:justify-center md:items-center">
        <div className="md:text-center pb-[40px] md:w-[81%] md:pb-[80px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-[55px] text-[25px] pb-[40px]"
            style={{ fontFamily: "NeoGramExtended", letterSpacing: "-0.18rem" }}
          >
            A global portfolio
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="md:text-[19px] text-[15px]"
            style={{
              fontFamily: "NeoGramCondensed",
              letterSpacing: "-0.02rem",
            }}
          >
            We invest in thematic ideas and projects that are core
            infrastructure pieces of the blockchain ecosystem, such as
            exchanges, custodians, institutional trading tools, decentralized
            finance, next gen payment systems, and more. Since 2013, we have
            backed more than 100 blockchain companies and 110 early-stage token
            deals.
          </motion.div>
        </div>
        <div
          style={{
            fontFamily: "NeoGramCondensed",
            letterSpacing: "-0.02rem",
          }}
          className="border-y-[0.5px] w-[100%] border-black flex flex-row justify-between py-[20px] px-[20px]  transition delay-100 duration-200 ease-in-out"
        >
          <div className="text-[15px] flex my-auto w-[25%]">NAME</div>
          <div className="text-[15px] flex my-auto w-[25%]">TYPE</div>
          <div className="text-[15px] flex my-auto w-[25%]">SECTOR</div>
        </div>
        {portfolio.map((val, index) => {
          return (
            <div className="w-[100%]">
              <div
                className=" flip-card-inner"
                style={{
                  transform: `${row === index ? "rotateX(180deg)" : ""}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "NeoGramCondensed",
                  }}
                  onClick={() => clickRow(index)}
                  key={index}
                  className={`${
                    row === index ? "hidden" : " hover:bg-amber-500"
                  } flip-card-front w-[100%]  flex flex-row justify-between h-[50px] px-[20px]  hover:cursor-pointer`}
                >
                  <div
                    className={`${
                      row === index ? "invert grayscale" : ""
                    } w-[25%]  flex my-auto`}
                  >
                    <Image
                      src={`/portfolio/${val.img}`}
                      width={80}
                      height={80}
                      alt="portfolio"
                    />
                  </div>
                  <div className="md:text-[15px] text-[12px] flex my-auto w-[25%]">
                    {row === index ? (
                      <Link
                        href={`${val.url}`}
                        className="hover:text-amber-500"
                      >
                        WEBSITE
                      </Link>
                    ) : (
                      val.type
                    )}
                  </div>
                  <div className="md:text-[15px] text-[12px] flex my-auto w-[25%] line-clamp-2">
                    {val.sector}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "NeoGramCondensed",letterSpacing: "-0.02rem"
                  }}
                  onClick={() => clickRow(index)}
                  key={index}
                  className={`${
                    row === index ? "flip-card-back" : "hidden"
                  } w-[100%]  flex md:flex-row flex-col justify-between md:h-[50px] h-[150px] px-[20px]  hover:cursor-pointer`}
                >
                  <div
                    className={`${
                      row === index ? "invert grayscale" : ""
                    } w-[100%] md:w-[25%] md:pb-0 pb-[10px] md:pt-0 pt-[10px] flex my-auto md:border-none border-gray-200 border-b-[1px]`}
                  >
                    <Image
                      src={`/portfolio/${val.img}`}
                      width={80}
                      height={80}
                      alt="portfolio"
                    />
                  </div>
                  <div className="md:text-[15px] text-[12px] flex my-auto w-[100%] md:w-[25%] md:pb-0 pb-[10px] md:border-none border-gray-200 border-b-[1px]">
                    <Link href={`${val.url}`} className="hover:text-amber-500">
                      WEBSITE
                    </Link>
                  </div>
                  <div className="md:text-[12px] text-[10px] flex my-auto w-[100%] md:w-[25%] md:pb-0 pb-[10px] md:border-none leading-[11px]">
                    {val.secter2}
                  </div>
                </div>
              </div>
              <hr className="border-1 border-black" />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
