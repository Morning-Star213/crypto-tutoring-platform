"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [m, setM] = useState<boolean>(false);
  const [i, setIn] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const sendEmail = async () => {
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    setSubmitting(true);
    console.log(Date.now());
    emailjs
      .send("service_ruyxl4p", "template_18e4t3o", templateParams, {
        publicKey: "a_AbLTzDBSTpdnbZE",
      })
      .then(
        () => {
          toast.success("Successfully sent");
          setSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send mail");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="main-container py-16 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:text-[50px] text-[40px] pb-[90px]"
        style={{ fontFamily: "NeoGramExtended", letterSpacing: "-0.18rem" }}
      >
        Contact Us
      </motion.div>
      <div className="flex sm:flex-row flex-col gap-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=" sm:w-[50%] w-[100%]"
        >
          <div className="sm:text-[40px] text-[30px] border-gray-500 border-b-[1px] w-[100%]">
            Phone
          </div>
          <button className="px-5 py-2 border-gray-700 border-[1px] text-[12px] mt-[20px] hover:bg-amber-500 ">
            +1 650 854 7000
          </button>
          <div className="sm:text-[40px] text-[30px] pt-[50px] border-gray-500 border-b-[1px] w-[100%]">
            Social
          </div>
          <div className="flex">
            <div className="flex mt-3 gap-7 space-x-4">
              <div className=" flex items-center justify-center shrink-0 ">
                <a href="#">
                  <svg
                    onMouseEnter={() => setM(!m)}
                    onMouseLeave={() => setM(!m)}
                    fill={`${m ? "#E9B737" : "#15182B"}`}
                    width={30}
                    height={30}
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
                    fill={`${i ? "#E9B737" : "#15182B"}`}
                    width="30"
                    height="30"
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
                    fill={`${f ? "#E9B737" : "#15182B"}`}
                    width={30}
                    height={30}
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
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="ml-auo space-y-4">
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="w-full bg-transparent/5 rounded-md py-2.5 px-4 border text-sm outline-[#b0b3a1]"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="w-full bg-transparent/5 rounded-md py-2.5 px-4 border text-sm outline-[#b0b3a1]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={subject}
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent/5 rounded-md py-2.5 px-4 border text-sm outline-[#b0b3a1]"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              value={message}
              placeholder="Message"
              rows={6}
              className="w-full bg-transparent/5 rounded-md px-4 border text-sm pt-2.5 outline-[#b0b3a1]"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="button"
              className="text-default-color dark:text-[#1b263b] bg-[#1b263b] dark:bg-default-color hover:bg-[#1b263b99] dark:hover:bg-default-color/90 font-semibold rounded-md text-sm px-4 py-2.5 w-full disabled:bg-blue-300"
              disabled={isSubmitting}
              onClick={sendEmail}
            >
              {isSubmitting ? "Sending" : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
