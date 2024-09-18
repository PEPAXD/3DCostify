import React from "react";

//import components
import Dropdowns from "../components/dropdowns";
import NumberInputBox from "../components/numberInputBox";
import AddButton from "../components/addButton";

function costCalc() {
  return (
    <div className="flex h-full w-full p-3 dark:bg-gray-900 shadow-lg overflow-y-scroll">
      <div className="text-white z-10 h-full w-full px-8 mt-20">
        {/* Add your code here */}
        <div id="costify-title-description">
          <h1
            className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
            itemProp="titleCalculator"
          >
            Smart 3D PrintFDM Price Checker
          </h1>

          <hr className="border-t-1 border-white w-full" />

          <div className=" text-gray-400 my-4 text-base">
            <p className="pl-4">
              Calculate the total cost of 3D printing by considering the
              amortization of the machine, manufacturing costs, post-production
              expenses, and taxes.
            </p>
          </div>
          <hr className="border-t-1 border-white w-full" />
        </div>

        <div id="filament&Printers" className="pt-4">
          {/*PrinterScrapp */}
          <div className="w-full">
            <h2>3D Printer Model</h2>
            <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
              * Brand &amp; Model ($)
            </cite>

            <form className="flex gap-3">
              <Dropdowns
                placeHolder={"Choose your Printer model"}
                droptype={1}
              />
            </form>
          </div>

          {/*FilamentScrapp */}
          <div className="w-full">
            <h2>Filament Type</h2>
            <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
              * Material &amp; Brand ($/Kg)
            </cite>

            <form className="flex gap-3">
              <Dropdowns
                placeHolder={"Choose your filament type"}
                droptype={0}
              />
            </form>
          </div>
        </div>

        <div id="Weight&Time">
          <form className="flex gap-4">
            <NumberInputBox boxTitle={"Weight in grams"} boxHolder={"1000g"} />
            <NumberInputBox boxTitle={"Time in minutes"} boxHolder={"60 min"} />
          </form>
        </div>

        <div id="additionalsCosts" className="w-full my-2">
          <div className="flex w-full justify-between my-2">
            <h3>Additional Expenses</h3>

            {/* transform this to component */}
          </div>

          <div className="relative w-full mb-2">
            <input
              type="text"
              name="postCost"
              id="postCost"
              placeholder="E.g: [Additional services $10000]"
              className="w-full py-2 pl-8 pr-10 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-2">
              <AddButton />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center p-1">
            <button className="w-full p-1 text-sm font-semibold text-gray-400 tracking-wider hover:bg-gray-200 hover:text-gray-700">
              Add New Expense inputbox
            </button>
          </div>
        </div>

        <div className="w-full my-8 flex justify-end">
          <button className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 w-full">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default costCalc;
