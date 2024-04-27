import React from "react";

export default function FlashcardNavButton({ name, active, onClick }) {
  return (
    <>
      <button
        className={`text-xl pb-1 ${
          active
            ? "text-blue-900 border-b-2 font-semibold border-blue-900"
            : "text-stone-500"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}
