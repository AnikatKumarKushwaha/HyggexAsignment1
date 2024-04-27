import React from "react";
import logo from "../../assets/Screenshot 2024-04-27 at 12.31.39 PM.png";
import logoMessage from "../../assets/logotext.png";

export default function PublishLogo() {
  return (
    <div className="flex gap-2 sm:gap-4">
      <div className="rounded-full overflow-hidden shadow-lg shadow-blue-200 border border-blue-100 p-2 sm:p-3  bg-slate-50">
        <img src={logo} alt="Logo" className="h-6 sm:h-10  " />
      </div>
      <div>
        <div className="pt-1 text-stone-600 font-semibold text-[8px] sm:text-xs">
          Published By
        </div>
        <div>
          <img src={logoMessage} alt="Logo" className="h-6 sm:h-8  " />
        </div>
      </div>
    </div>
  );
}
