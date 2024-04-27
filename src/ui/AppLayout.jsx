import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="px-2  sm:px-10 md:px-15 lg:px-20 bg-slate-50">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
