"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll progress (0 to 1) of the window
  const { scrollYProgress } = useScroll();

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  // The height of the content in pixels
  const [contentHeight, setContentHeight] = useState(0);

  // The value to transform the content to
  const y = useTransform(smoothProgress, (v) => {
    if (typeof window !== "undefined") {
      return v * -(contentHeight - window.innerHeight);
    } else {
      // Provide a fallback value if window is not defined
      return 0;
    }
  });

  // A reference to hold the value of the content
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    // Call the resize handler once, initially
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <>
      {/**
       * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
       * Its position is fixed by default and moves when the user scrolls.
       */}
      <div style={{ height: contentHeight }} />
      <motion.div className="scrollBody" style={{ y }} ref={contentRef}>
        {children}
      </motion.div>
    </>
  );
}
