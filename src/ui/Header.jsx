import React from "react";
import headerImage from "../assets/Screenshot 2024-04-26 at 1.18.50 PM.png";
import HeaderNavButton from "./HeaderNavButton";

export default function Header() {
  const buttonLabels = [
    { name: "Home", to: "/home" },
    { name: "Flashcard", to: "/flashcard" },
    { name: "Contact", to: "/contact" },
    { name: "FAQ", to: "/faq" },
    { name: "Login", to: "/login" },
  ];

  return (
    <div className="flex justify-between py-4 sm:py-6 md:py-8 lg:py-10 items-center text-xs sm:text-sm md:text-base lg:text-lg ">
      <div>
        <img
          src={headerImage}
          alt="header_image"
          className=" w-28 sm:w-32 md:w-40 lg:w-48"
        />
      </div>
      <div className="flex text-xs sm:text-sm md:text-base lg:text-lg font-light sm:gap-1 items-center">
        {buttonLabels.map((label, index) => (
          <HeaderNavButton key={index} name={label.name} to={label.to} />
        ))}
      </div>
    </div>
  );
}
