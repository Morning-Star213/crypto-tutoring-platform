"use client";
import React, { useState } from "react";
import { motion, useSpring, useMotionValueEvent } from "framer-motion";
import Footer from "@/lib/components/layout/Footer";
import { useScroll } from "framer-motion";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  return (
    <div className="">
      <div className="sm:section-hero  flex grid1 mx-auto  justify-center items-center pb-[90px]">
        <div
          className=" sm:w-[33%] w-[100%] flex flex-col px-[20px] sm:pt-[30px] pt-[200px] pb-[15px] rounded-sm sm:shadow-2xl text-opacity-20"
          style={{
            fontFamily: "NeoGramCondensed",letterSpacing: "-0.02rem"
          }}
        >
          <div className=" flex justify-center items-center pb-9">
            <Image src={"/logo.png"} width={250} height={40} alt="LOGIN" />
          </div>
          <div className="text-[16px]">
            Please enter your email and password to proceed
          </div>
          <div className="py-[10px]">
            <input
              type="email"
              placeholder="user@example.com"
              className="border-gray-200 border-[1px] bg-gray-50 w-[100%] py-[7px] pl-[10px]"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-[3px]">
            <input
              type="password"
              placeholder="Password"
              className="border-gray-200 border-[1px] bg-gray-50 w-[100%] py-[7px] pl-[10px]"
              onChange={(e: any) => setPw(e.target.value)}
            />
          </div>
          <div className="text-[16px]">Forget your password?</div>
          <div className="py-[30px]">
            <button
              className={`${
                email === "" || pw === ""
                  ? "bg-[#DFDFDF] text-gray-700"
                  : "bg-[#1c3b68] text-white"
              } w-[100%]  py-[10px] rounded-sm`}
              disabled={email === "" || pw === "" ? true : false}
            >
              SIGN IN
            </button>
          </div>
          <div className="flex justify-between">
            <div>Request Assisance</div>
            <div>2024 | Powered by ...</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
