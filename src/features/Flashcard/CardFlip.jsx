import React, { useState } from "react";
import "./CardFlip.css"; // Import CSS file for styling
import { LuLightbulb } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";

export default function CardFlip({ flipFront, flipBack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} w-[70%] sm:w-[50%] h-96 `}
    >
      <div className="card-inner">
        <div className="card-front">
          {/* card front */}

          <div className="flex flex-col  items-center h-full bg-gradient-to-bl from-blue-900 from-15%  via-blue-700 via-50% to-blue-500 to-90% rounded-3xl py-10">
            <div className="flex justify-between w-full px-2 sm:px-10 ">
              <button>
                <LuLightbulb
                  onClick={handleButtonClick}
                  className=" text-blue-50 text-2xl sm:text-3xl"
                />
              </button>
              <div>
                <HiMiniSpeakerWave className=" text-blue-50 text-2xl sm:text-3x" />
              </div>
            </div>
            <div className="flex justify-center items-center h-full  text-blue-50 text-base sm:text-3xl tracking-widest">
              <div>{flipFront}</div>
            </div>
          </div>
        </div>
        <div className="card-back">
          {/* card back */}

          <div className="h-full w-full rounded-3xl bg-gradient-to-bl from-cyan-900 from-15%  via-cyan-700 via-50% to-cyan-500 to-90% py-10 text-center text-slate-50 flex flex-col justify-center items-center">
            <div className="flex justify-between w-full  px-2 sm:px-10 ">
              <button>
                <LuLightbulb
                  onClick={handleButtonClick}
                  className=" text-blue-50 text-2xl sm:text-3x"
                />
              </button>
              <div>
                <HiMiniSpeakerWave className=" text-blue-50 text-2xl sm:text-3x" />
              </div>
            </div>
            <div className="flex justify-center items-center h-full  text-blue-50 text-base sm:text-3xl tracking-widest">
              <div>{flipBack}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
