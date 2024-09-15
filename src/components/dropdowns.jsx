import React from "react";

function dropdowns({ placeHolder }) {
  return (
    <>
      <fieldset className="w-full my-4">
        <div className="relative">
          <select
            id="Filamento"
            name="Filamento"
            className="appearance-none block w-full bg-none bg-gray-700 border border-transparent py-2 pl-3 pr-10 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm font-bold text-lg mb-2"
          >
            <option disabled selected>
              {placeHolder}
            </option>

            <optgroup label="GST3D">
              <option>PLA+ $12000</option>
              <option>A2</option>
              <option>A3</option>
            </optgroup>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
            <svg
              className="h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default dropdowns;
