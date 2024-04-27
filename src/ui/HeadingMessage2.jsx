import React from "react";

export default function HeadingMessage2({ children }) {
  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide  bg-gradient-to-t from-blue-900 to-blue-800 text-transparent bg-clip-text">
      {children}
    </div>
  );
}
