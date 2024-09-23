import React, { useState } from "react";

//import components
import Dropdowns from "../components/dropdowns";
import NumberInputBox from "../components/numberInputBox";
import AditionalExpensiveTable from "../components/aditionalExpensiveTable";

function costCalc() {
  //* generate inputs boxes for additional expenses

  const [additionalExpenses, setAdditionalExpenses] = useState([]);

  const newExpenseBox = (event) => {
    event.preventDefault();

    let title = prompt(
      "Ingrese una descripcion del gasto (máximo 15 caracteres):"
    );
    while (!title || title.length > 40) {
      if (!title) {
        alert(
          "La descripción no puede estar vacía. Por favor, ingrese una descripción válida."
        );
      } else if (title.length > 40) {
        alert(
          "La descripción no puede tener más de 40 caracteres. Por favor, ingrese una descripción válida."
        );
      }
      title = prompt(
        "Ingrese una descripcion del gasto (máximo 40 caracteres):"
      );
    }

    let cost = prompt("Ingrese el costo del gasto (máximo 7 dígitos):");
    while (!cost || isNaN(cost) || Number(cost) <= 0 || cost.length > 7) {
      if (!cost || isNaN(cost) || Number(cost) <= 0) {
        alert(
          "El costo debe ser un número positivo. Por favor, ingrese un costo válido."
        );
      } else if (cost.length > 7) {
        alert(
          "El costo no puede tener más de 7 dígitos. Por favor, ingrese un costo válido."
        );
      }
      cost = prompt("Ingrese el costo del gasto (máximo 7 dígitos):");
    }

    function formatCost(cost) {
      return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const formattedCost = formatCost(cost);
    setAdditionalExpenses([
      ...additionalExpenses,
      { title, cost: formattedCost },
    ]);
  };

  //TODO: calculate the total cost of the print

  let printerCost = 0;
  let filamentCost = 0;
  let weightGrams = 0;
  let timeMinutes = 0;

  const handleValuesChange = (values, droptype) => {
    if (droptype === 1) {
      printerCost = values.price;
    } else if (droptype === 0) {
      filamentCost = values.price;
    } else if (droptype === 2) {
      weightGrams = values;
    } else if (droptype === 3) {
      timeMinutes = values;
    }
  };

  //? Check if the values are being stored correctly
  function getPrintCost() {
    console.clear(); // Limpia la consola

    console.log("Costo de la impresora:", printerCost);
    console.log("Costo del filamento:", filamentCost);
    console.log("Peso en gramos:", weightGrams);
    console.log("Tiempo en minutos:", timeMinutes);

    //    console.log("Resultado de la suma:", result);
  }
  //TODO: --------------------------------------------

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

        <form>
          <div id="filament&Printers" className="pt-4">
            {/*PrinterScrapp */}
            <div className="w-full">
              <h2>3D Printer Model</h2>
              <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
                * Brand &amp; Model ($)
              </cite>

              <div className="flex gap-3">
                <Dropdowns
                  placeHolder={"Choose your Printer model"}
                  droptype={1}
                  onValuesChange={(values) => handleValuesChange(values, 1)}
                />
              </div>
            </div>

            {/*FilamentScrapp */}
            <div className="w-full">
              <h2>Filament Type</h2>
              <cite className="pl-4 text-sm font-semibold text-gray-400 tracking-wider ">
                * Material &amp; Brand ($/Kg)
              </cite>

              <div className="flex gap-3">
                <Dropdowns
                  placeHolder={"Choose your filament type"}
                  droptype={0}
                  onValuesChange={(values) => handleValuesChange(values, 0)}
                />
              </div>
            </div>
          </div>

          <div id="Weight&Time">
            <div className="flex gap-4">
              <NumberInputBox
                boxTitle={"Weight in grams"}
                boxHolder={"1000g"}
                onValueChange={(value) => handleValuesChange(value, 2)}
              />
              <NumberInputBox
                boxTitle={"Time in minutes"}
                boxHolder={"60 min"}
                onValueChange={(value) => handleValuesChange(value, 3)}
              />
            </div>
          </div>

          <div id="additionalsCosts" className="w-full">
            <div className="flex flex-col gap-2 items-center p-1">
              {additionalExpenses.map((expense, index) => (
                <AditionalExpensiveTable
                  key={index}
                  title={expense.title}
                  cost={expense.cost}
                />
              ))}

              <button
                className="w-full p-1 my-1 text-sm font-semibold text-gray-400 tracking-wider hover:bg-gray-200 hover:text-gray-700"
                onClick={newExpenseBox}
              >
                Add Additional ExpenseBox
              </button>
            </div>
          </div>
        </form>

        <div
          id="addToDB_CostCalc"
          className="w-full my-8 py-4 flex justify-end gap-3"
        >
          <div className=" py-2 w-full border-b-2 border-gray-500 px-4">
            <span className="font-semibold w-full flex justify-between">
              Total Cost: <span className=" text-gray-400 ">$ 0</span>
            </span>
          </div>
          <button
            className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 w-1/3"
            onClick={getPrintCost}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default costCalc;
