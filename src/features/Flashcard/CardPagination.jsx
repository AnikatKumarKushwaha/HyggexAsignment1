import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CardPagination() {
  const [questionNo, setQuestionNo] = useState(1);

  function handelRightClick() {
    if (questionNo === 10) {
      setQuestionNo(0);
    } else {
      setQuestionNo(questionNo + 1);
    }
  }
  function handelLeftClick() {
    if (questionNo === 1) {
      setQuestionNo(10);
    } else {
      setQuestionNo(questionNo - 1);
    }
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="flex justify-between items-center w-[70%] sm:w-[50%]">
        <div>
          <IoMdRefresh className=" text-blue-900 text-[20px] sm:text-[30px] lg:text-[45px]" />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-gradient-to-t from-blue-600 to-blue-900 rounded-full p-1"
            onClick={handelLeftClick}
          >
            <MdKeyboardArrowLeft className="  text-blue-50  text-[20px] sm:text-[30px] lg:text-[45px]" />
          </button>
          <div className="font-bold tracking-wide text-xl md:text-2xl">
            {questionNo}/10
          </div>
          <button
            className="bg-gradient-to-t from-blue-600 to-blue-900 rounded-full p-1"
            onClick={handelRightClick}
          >
            <MdKeyboardArrowRight className="  text-blue-50 text-[20px] sm:text-[30px] lg:text-[45px]" />
          </button>
        </div>
        <div>
          <RiFullscreenLine className="  text-blue-900 text-[20px] sm:text-[30px] lg:text-[45px]" />
        </div>
      </div>
    </div>
  );
}
