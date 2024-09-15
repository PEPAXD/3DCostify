import React from "react";
import {
  SiBlueprint,
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiReddit,
} from "react-icons/si";

function header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-xl border-gray-200 bg-slate-950 px-4 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <SiBlueprint className="w-8 h-8 dark:text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            3DCostify
          </span>
        </a>

        <div className="flex flex-col items-center justify-center sm:justify-center px-8 border-l-2 border-r-2 h-9 cursor-pointer group">
          <span className="uppercase absolute opacity-1 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            Follow me
          </span>
          <nav className="flex sm:justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="#"
              className="text-white-500 hover:text-white-900 hover:scale-125 transition-transform duration-300"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white-500 hover:text-white-900 hover:scale-125 transition-transform duration-300"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white-500 hover:text-white-900 hover:scale-125 transition-transform duration-300"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white-500 hover:text-white-900 hover:scale-125 transition-transform duration-300"
            >
              <SiReddit className="w-6 h-6" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default header;
