"use client";
import React, { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const navItems = [
  {
    name: "INVEST",
    link: "/invest",
    items: [],
  },
  {
    name: "PORTFOLIO",
    link: "/portfolio",
    items: [],
  },
  {
    name: "TRAINING COURSES",
    link: "/course",
    items: [],
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "LOGIN",
    link: "/login",
    items: [],
  },
];

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
  index,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  link: string;
  index: number;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="relative font-medium"
      style={{ fontFamily: "IBM Plex Mono" }}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        <Link href={link}>{item}</Link>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && navItems[index] && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="min-w-[50%] relative shadow-input flex justify-between space-x-8"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const router = useRouter();

  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [isUp, setIsUp] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() == 0) {
        setIsUp(false);
      }
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setIsUp(true);
          setVisible(true);
        } else {
          setIsUp(false);
          setVisible(false);
        }
      }
    }
  });

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <div className="flex">
        <Image
          className="hover:cursor-pointer -ml-[3.5em]"
          src={"/logo.webp"}
          width={365}
          height={125}
          onClick={onLogo}
          alt="LOGO"
          priority
        />
      </div>
    );
  }, [onLogo]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          `flex fixed top-0 inset-x-0 mx-auto z-40 px-2 py-2  items-center justify-center space-x-4 ${
            isUp && "bg-white duration-75"
          } `,
          className
        )}
      >
        <div className="grid-container w-full">
          <div className="outpadding  grid-x flex mx-auto justify-between items-center">
            {logoElement}
            <Menu setActive={setActive}>
              {navItems.map((navItem: any, idx: number) => (
                <MenuItem
                  key={idx}
                  setActive={setActive}
                  active={active}
                  link={navItem.link}
                  item={navItem.name}
                  index={idx}
                ></MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
