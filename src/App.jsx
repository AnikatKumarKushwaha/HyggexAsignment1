import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FlashCard from "./Pages/FlashCard";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Faq from "./Pages/Faq";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={"flashcard"} />} />
          <Route path="home" element={<Home />} />
          <Route path="flashcard" element={<FlashCard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
