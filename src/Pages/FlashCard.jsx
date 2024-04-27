import React from "react";
import PageNav from "../ui/PageNav";
import HeadingMessage2 from "../ui/HeadingMessage2";
import FlashCardNav from "../features/Flashcard/FlashCardNav";
import CardPagination from "../features/Flashcard/CardPagination";
import LogoCreateFlashcardContainer from "../features/Flashcard/LogoCreateFlashcardContainer";
import HeaderMessage1 from "../ui/HeaderMessage1";
import FaqSection from "../features/Flashcard/FaqSection";

export default function FlashCard() {
  return (
    <div>
      <PageNav />
      <HeadingMessage2>Relations and Functions ( Mathematics )</HeadingMessage2>
      <FlashCardNav />
      <CardPagination />
      <LogoCreateFlashcardContainer />
      <HeaderMessage1>FAQ</HeaderMessage1>
      <FaqSection />
    </div>
  );
}
