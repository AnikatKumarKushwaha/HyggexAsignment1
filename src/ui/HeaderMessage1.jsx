import React from "react";

export default function HeaderMessage1({ children }) {
  return (
    <div className="py-6 sm:py-8 md:py-10 lg:py-16 font-bold text-xl sm:text-2xl md:text-3xl lg:text-[3rem] tracking-wide  bg-gradient-to-t from-blue-900 to-blue-800 text-transparent bg-clip-text">
      {children}
    </div>
  );
}
