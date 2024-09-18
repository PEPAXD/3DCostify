import React from "react";

function addButton() {
  return (
    <>
      <button className="flex-1 h-full flex items-center justify-center hover:bg-red-700">
        <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </div>
      </button>
    </>
  );
}

export default addButton;
