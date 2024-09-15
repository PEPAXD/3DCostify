import React from "react";

function costCalc() {
  return (
    <div className="flex h-full w-full p-3 dark:bg-gray-900 shadow-lg overflow-y-scroll">
      <div className="text-white z-10 h-full w-full px-8 mt-20">

        {/* Add your code here */}
        <div id="project-title-description">
          <h4
            className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
            itemprop="titleCalculator"
          >
            Smart 3D Print Price Checker
          </h4>

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

      </div>
    </div>
  );
}

export default costCalc;
