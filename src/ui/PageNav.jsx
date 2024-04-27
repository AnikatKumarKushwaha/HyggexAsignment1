import React from "react";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

export default function PageNav() {
  return (
    <div className="flex items-center sm:gap-1 md:gap-2 text-lg tracking-wide">
      <div>
        <GoHome className=" text-stone-500 sm:text-3xl" strokeWidth={0.4} />
      </div>
      <div>
        <FaChevronRight className=" text-blue-950 text-xs sm:text-base" />
      </div>
      <div className=" text-stone-500 text-xs sm:text-sm md:text-base">
        Flashcard
      </div>
      <div>
        <FaChevronRight className=" text-blue-950 text-base" />
      </div>
      <div className=" text-stone-500 text-xs sm:text-sm md:text-base">
        Mathematics
      </div>
      <div>
        <FaChevronRight className=" text-blue-950 text-base" />
      </div>
      <div className=" text-blue-950 text-xs sm:text-sm md:text-base">
        Relation and Function
      </div>
    </div>
  );
}
