import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

export default function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className=" rounded-lg border border-blue-700 p-4 mb-4  duration-300">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{question}</h3>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? (
            <IoIosArrowUp className=" text-2xl" />
          ) : (
            <MdKeyboardArrowDown className=" text-2xl" />
          )}
        </button>
      </div>
      {showAnswer && (
        <div className="mt-4  pt-2 pr-20">
          <p className="text-sm text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
