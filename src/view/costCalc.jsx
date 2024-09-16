import React from "react";

//import components
import Dropdowns from "../components/dropdowns";

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
            Smart 3D Print Price Checker
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

        <div id="filament&Printers" className="py-6">
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

          {/*PrinterScrapp */}
          <div className="w-full">
            <h5>3D Printer Model</h5>
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
        </div>
      </div>
    </div>
  );
}

export default costCalc;
