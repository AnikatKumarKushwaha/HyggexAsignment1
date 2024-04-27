import React, { useState } from "react";
import FlashcardNavButton from "../../ui/FlashcardNavButton";
import CardFlip from "./CardFlip";

const navButton = [
  { name: "Study", flipFront: "9+6+7x-23-3", flipBack: "5x+12" },
  { name: "Quiz", flipFront: "quiz data front", flipBack: "quiz data back" },
  { name: "Test", flipFront: "Test data front", flipBack: "Test Data Back" },
  { name: "Game", flipFront: "Game data front", flipBack: "Game Data Back" },
  {
    name: "Others",
    flipFront: "Other data front",
    flipBack: "Other Data Back",
  },
];

export default function FlashCardNav() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="flex flex-col items-center pb-10">
      {/* ****************navBar*************** */}
      <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        {navButton.map((item, index) => (
          <FlashcardNavButton
            key={index}
            name={item.name}
            active={activeButton === index}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
      <div className=" w-full flex justify-center mt-8">
        <CardFlip
          flipFront={navButton[activeButton].flipFront}
          flipBack={navButton[activeButton].flipBack}
        />
      </div>
    </div>
  );
}
