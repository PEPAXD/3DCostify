import React, { useEffect, useState } from "react";
import Data from "../data/data.js";

//import components
import NumberInputBox from "./numberInputBox.jsx";

function dropdowns({ placeHolder, droptype }) {
  const items = droptype === 0 ? Data.filamentos : Data.impresoras;

  let [selectedValue, setSelectedValue] = useState("default");
  let [price, setPrice] = useState(0);
  let [customPrice, setCustomPrice] = useState(0);

  const handleChange = (event) => {
    let value = event.target.value;
    let price = event.target.selectedOptions[0].getAttribute("data-price");

    setSelectedValue(value);
    setPrice(price);
    console.log(value, price);
  };

  const handleCustomPriceChange = (event) => {
    setCustomPrice(event.target.value);
  };

  return (
    <>
      <fieldset className="w-full my-4">
        <div className="relative">
          <select
            className="appearance-none block w-full bg-none bg-gray-700 border border-transparent py-2 pl-3 pr-10 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm font-bold text-lg mb-2"
            value={selectedValue}
            onChange={handleChange}
          >
            <option
              disabled
              value="default"
              className="text-gray-700 pointer-events-none"
            >
              {placeHolder}
            </option>

            {Object.keys(items).map((group, index) => (
              <optgroup key={index} label={group}>
                {items[group].map((option, idx) => (
                  <option
                    key={idx}
                    value={option.type}
                    data-price={option.price}
                  >
                    {option.type}
                  </option>
                ))}
                <option disabled></option>
              </optgroup>
            ))}
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
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {selectedValue === "Please provide the cost for your filament" && (
          <NumberInputBox boxTitle={""} boxHolder={customPrice} />
        )}
      </fieldset>
    </>
  );
}

export default dropdowns;
