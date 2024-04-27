import React from "react";
import PublishLogo from "./PublishLogo";
import { IoMdAdd } from "react-icons/io";
import HeadingMessage3 from "../../ui/HeadingMessage3";

export default function LogoCreateFlashcardContainer() {
  return (
    <div className="flex justify-between items-center pt-10">
      <div>
        <PublishLogo />
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-gradient-to-t from-blue-600 to-blue-900 rounded-full p-1">
          <IoMdAdd className="  text-blue-50 text-[20px] sm:text-[30px] lg:text-[45px]" />
        </button>

        <HeadingMessage3>Create Flashcard</HeadingMessage3>
      </div>
    </div>
  );
}
