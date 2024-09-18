import React from "react";

function addButton() {
  return (
    <>
      <button className="flex-1 h-full flex items-center justify-center hover:bg-gray-200">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </button>
    </>
  );
}

export default addButton;
