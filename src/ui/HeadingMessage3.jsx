import React from "react";

export default function HeadingMessage3({ children }) {
  return (
    <div className=" font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide  bg-gradient-to-t from-blue-900 to-blue-800 text-transparent bg-clip-text">
      {children}
    </div>
  );
}
