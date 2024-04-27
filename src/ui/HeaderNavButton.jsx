import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNavButton({ name, to }) {
  if (name === "Login") {
    return (
      <NavLink
        to={to}
        className=" tracking-wide px-3 py-1 lg:px-8 lg:py-2 rounded-full bg-gradient-to-b from-blue-900
         to-blue-700 border-2 border-slate-50 text-blue-50 hover:bg-gradient-to-t hover:from-inherit hover:text-blue-800 hover:border-2 hover:border-blue-800 "
      >
        {name}
      </NavLink>
    );
  }
  return (
    <NavLink
      to={to}
      className=" text-stone-700 md:tracking-wide px-1 py-1 lg:px-4 lg:py-2 rounded-full  hover:bg-slate-200"
    >
      {name}
    </NavLink>
  );
}
