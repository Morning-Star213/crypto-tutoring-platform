"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import { useTheme } from "@/lib/providers/ThemeProvider";
import Link from "next/link";

export default function Header({
  headerTrailing,
  hasSearch,
}: {
  headerTrailing?: React.ReactNode;
  hasSearch?: boolean;
}) {
  const router = useRouter();
  const [isExpanded, setExpanded] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        className="hover:cursor-pointer"
        src={"/logo.png"}
        width={170}
        height={80}
        onClick={onLogo}
        alt="LOGO"
        priority
      />
    );
  }, [onLogo]);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <>
      <header className="bg-[#d4d3d1] text-[#1b263b] w-full fixed z-20 md:px-12 px-4 py-4 dark:text-default-color dark:bg-[#1b263b]">
        <div className="flex items-center justify-between">
          {logoElement}
          <div className="flex items-center">
            {headerTrailing}
            <div className="md:ml-20 lg:ml-40 flex gap-3">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    name="dark-mode"
                    id="dark-toggle"
                    className="checkbox hidden"
                    onChange={() => toggleTheme()}
                    checked={theme === "dark" ? true : false}
                  />
                  <div className="flex items-center border-[1px] dark:border-white border-gray-900 w-16 h-8 rounded-full">
                    {theme !== "dark" ? (
                      <Icon
                        className="translate-x-[30px]"
                        icon="ic:outline-dark-mode"
                        width="24"
                        height="24"
                      />
                    ) : (
                      <Icon
                        className="translate-x-[5px]"
                        icon="entypo:light-up"
                        width="24"
                        height="24"
                      />
                    )}
                  </div>

                  <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
              <button className="hidden md:block px-4 py-2 rounded-full sm:border-[1px] border-[#1b263b] dark:border-default-color">
                Login
              </button>
              <button
                className="md:hidden"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {/* Login */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="menu"
                  width={30}
                  height={30}
                >
                  <g>
                    <g>
                      <rect
                        width="24"
                        height="24"
                        opacity="0"
                        transform="rotate(180 12 12)"
                      ></rect>
                      <circle cx="4" cy="12" r="1"></circle>
                      <rect
                        width="14"
                        height="2"
                        x="7"
                        y="11"
                        rx=".94"
                        ry=".94"
                      ></rect>
                      <rect
                        width="18"
                        height="2"
                        x="3"
                        y="16"
                        rx=".94"
                        ry=".94"
                      ></rect>
                      <rect
                        width="18"
                        height="2"
                        x="3"
                        y="6"
                        rx=".94"
                        ry=".94"
                      ></rect>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isExpanded && (
        <div className="z-10 fixed top-0 w-[100vw] h-[100vh] flex justify-center items-end bg-white">
          <button
            className="absolute top-4 right-4"
            onClick={() => setExpanded(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="close"
              width="60px"
              height="60px"
            >
              <g>
                <g>
                  <rect opacity="0" transform="rotate(180 12 12)"></rect>
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                </g>
              </g>
            </svg>
          </button>
          <ul className="mb-20 font-semibold text-xl flex flex-col gap-6">
            <li>
              <Link href="/invest"> INVEST</Link>
            </li>
            <li>
              <Link href="/portfolio"> PORTFOLIO</Link>
            </li>
            <li>TRAINING COURSES</li>
            <li>ABOUT</li>
            <li>LOGIN</li>
          </ul>
        </div>
      )}
    </>
  );
}
