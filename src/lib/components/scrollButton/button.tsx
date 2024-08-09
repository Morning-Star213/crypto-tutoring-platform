import React, { ReactNode } from "react";

const Button = ({
  children,
  top,
  speed,
}: {
  children: ReactNode;
  top: number;
  speed: number;
}) => {
  return (
    <button
      className=" grid2 btn3 hover:bg-orange-400 hover:cursor-pointer"
      style={{
        translate: `0px ${top * speed}px`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
