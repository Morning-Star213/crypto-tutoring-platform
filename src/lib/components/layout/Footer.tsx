"use client";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [m, setM] = useState<boolean>(false);
  const [i, setIn] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        src={"/logo.png"}
        width={170}
        height={40}
        onClick={onLogo}
        alt="LOGO"
      />
    );
  }, [onLogo]);
  return (
    <div className="bg-[#E9B737]">
      <div className=" sm:flex sm:grid2-x sm:m-auto">
        <div className=" sm:m-auto mt-10  outpadding sm:flex sm:justify-between sm:w-[100%]">
          <div className="text-center sm:text-[20px] text-[15px] py-6 flex my-auto">
            GET THE LATEST NEWS IN BLOCKCHAIN AND CRYPTO
          </div>
          <button className="bg-[#E9B737] hover:bg-white my-6 sm:my-10 text-black sm:w-[20%] w-[100%] sm:mr-10 h-[45px] border-[1px] border-black">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <footer className="bg-[#15182B] text-white w-full z-20 md:px-12 px-4 py-4 dark:text-default-color dark:bg-[#1b263b]">
        <div className="main-container outpadding mx-auto sm:flex sm:grid2-x sm:m-auto">
          <div className="flex md:flex-row flex-col justify-between md:py-6 w-[100%]">
            <div className="flex flex-col justify-center items-center gap-5 pb-[20px]">
              {logoElement}
              <div className="flex mt-3 gap-4 space-x-4">
                <div className=" flex items-center justify-center shrink-0 ">
                  <a href="#">
                    <svg
                      onMouseEnter={() => setM(!m)}
                      onMouseLeave={() => setM(!m)}
                      fill={`${m ? "#E9B737" : "#ffffff"}`}
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 37 30"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.356 6.06a1.382 1.382 0 00-.458-1.192L.458.725v-.61h10.639L19.32 18.15 26.55.114h10.134v.611L33.75 3.538a.825.825 0 00-.322.825v20.635a.903.903 0 00.322.826l2.858 2.812v.611H22.225v-.611l2.965-2.874c.29-.29.29-.382.29-.825V8.246L17.242 29.17h-1.116L6.542 8.246v14.016a1.942 1.942 0 00.535 1.605l3.852 4.677v.612H0v-.612l3.852-4.677a1.889 1.889 0 00.504-1.605V6.06z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <path
                            fill="#fff"
                            transform="translate(0 .114)"
                            d="M0 0h36.684v29.118H0z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className=" flex items-center justify-center shrink-0">
                  <a href="#">
                    <svg
                      onMouseEnter={() => setIn(!i)}
                      onMouseLeave={() => setIn(!i)}
                      fill={`${i ? "#E9B737" : "#ffffff"}`}
                      width="20"
                      height="20"
                      viewBox="0 0 38 36"
                      // fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.56603 3.82127C8.56603 5.93061 6.86938 7.64254 4.77533 7.64254C2.68127 7.64254 0.984626 5.93061 0.984626 3.82127C0.984626 1.71193 2.68127 0 4.77533 0C6.86938 0 8.56603 1.71193 8.56603 3.82127ZM8.5966 10.6996H0.954056V35.1557H8.5966V10.6996ZM20.7941 10.6996H13.1974V35.1557H20.7941V22.3162C20.7941 15.1781 30.011 14.5973 30.011 22.3162V35.1557H37.6383V19.6719C37.6383 7.62726 24.004 8.07052 20.7941 14.0011V10.6996Z"></path>
                    </svg>
                  </a>
                </div>
                <div className=" flex items-center justify-center shrink-0">
                  <a href="#">
                    <svg
                      onMouseEnter={() => setF(!f)}
                      onMouseLeave={() => setF(!f)}
                      fill={`${f ? "#E9B737" : "#ffffff"}`}
                      width={20}
                      height={20}
                      // fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 30"
                    >
                      <path d="M37.064 3.645a15.109 15.109 0 01-4.326 1.192A7.544 7.544 0 0036.055.68a15.62 15.62 0 01-4.784 1.834 7.468 7.468 0 00-5.488-2.4c-4.86 0-8.422 4.54-7.337 9.248A21.409 21.409 0 012.933 1.49a7.551 7.551 0 002.323 10.057 7.634 7.634 0 01-3.408-.947c-.077 3.485 2.415 6.74 6.037 7.474a7.432 7.432 0 01-3.393.122 7.525 7.525 0 007.031 5.228C8.358 25.915 4.37 27.016.38 26.542a21.28 21.28 0 0011.54 3.378c13.97 0 21.873-11.8 21.384-22.393a15.14 15.14 0 003.76-3.882z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center my-auto pb-[20px]">
              <div>
                <Link
                  href="/home"
                  className="text-white text-center p-[10px] sm:text-[20px] text-[12px] hover:text-[#E9B737]"
                  style={{
                    fontFamily: "NeoGramExtended",
                    letterSpacing: "-0.18rem",
                  }}
                >
                  HOME
                </Link>
              </div>
              <div>
                <Link
                  href="/invest"
                  className="text-white text-center p-[10px] sm:text-[20px] text-[12px] hover:text-[#E9B737]"
                  style={{
                    fontFamily: "NeoGramExtended",
                    letterSpacing: "-0.18rem",
                  }}
                >
                  INVEST
                </Link>
              </div>
              <div>
                <Link
                  href="/portfolio"
                  className="text-white text-center p-[10px] sm:text-[20px] text-[12px] hover:text-[#E9B737]"
                  style={{
                    fontFamily: "NeoGramExtended",
                    letterSpacing: "-0.18rem",
                  }}
                >
                  PORTFOLIO
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="text-white text-center p-[10px] sm:text-[20px] text-[12px] hover:text-[#E9B737]"
                  style={{
                    fontFamily: "NeoGramExtended",
                    letterSpacing: "-0.18rem",
                  }}
                >
                  ABOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  sm:grid2-x sm:m-auto justify-center items-center">
          <p className="small-content">
            © 2024 MentorCruise. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
